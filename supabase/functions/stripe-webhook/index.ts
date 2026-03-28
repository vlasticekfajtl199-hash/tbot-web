import Stripe from 'npm:stripe@17.7.0'
import { createClient } from 'npm:@supabase/supabase-js@2.57.4'

const stripeSecretKey = Deno.env.get('STRIPE_SECRET_KEY') ?? ''
const stripeWebhookSecret = Deno.env.get('STRIPE_WEBHOOK_SECRET') ?? ''
const supabaseUrl = Deno.env.get('SUPABASE_URL') ?? ''
const supabaseServiceRoleKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
const telegramInviteLink = Deno.env.get('TELEGRAM_INVITE_LINK') ?? ''

const stripe = new Stripe(stripeSecretKey)
const supabaseAdmin = createClient(supabaseUrl, supabaseServiceRoleKey, {
  auth: {
    autoRefreshToken: false,
    persistSession: false,
  },
})

function jsonResponse(body: Record<string, unknown>, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { 'Content-Type': 'application/json' },
  })
}

Deno.serve(async (request) => {
  if (request.method !== 'POST') {
    return jsonResponse({ error: 'Method not allowed' }, 405)
  }

  if (!stripeSecretKey || !stripeWebhookSecret || !supabaseUrl || !supabaseServiceRoleKey) {
    return jsonResponse({ error: 'Missing webhook environment configuration' }, 500)
  }

  const signature = request.headers.get('stripe-signature')
  if (!signature) {
    return jsonResponse({ error: 'Missing Stripe signature' }, 400)
  }

  const rawBody = await request.text()

  let event: Stripe.Event

  try {
    event = await stripe.webhooks.constructEventAsync(
      rawBody,
      signature,
      stripeWebhookSecret
    )
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Invalid webhook signature'
    return jsonResponse({ error: message }, 400)
  }

  if (event.type !== 'checkout.session.completed') {
    return jsonResponse({ received: true, ignored: event.type })
  }

  const session = event.data.object as Stripe.Checkout.Session
  const customerEmail = session.customer_details?.email ?? session.customer_email

  if (!customerEmail) {
    return jsonResponse({ error: 'No customer email found on completed session' }, 400)
  }

  const { data: existingProfile, error: profileLookupError } = await supabaseAdmin
    .from('profiles')
    .select('id')
    .eq('email', customerEmail)
    .maybeSingle()

  if (profileLookupError) {
    return jsonResponse({ error: profileLookupError.message }, 500)
  }

  if (!existingProfile?.id) {
    return jsonResponse({ error: 'Profile not found for paid user' }, 404)
  }

  const { error: updateError } = await supabaseAdmin
    .from('profiles')
    .update({
      payment_status: 'paid',
      beta_status: 'active',
      telegram_invite_link: telegramInviteLink || null,
    })
    .eq('id', existingProfile.id)

  if (updateError) {
    return jsonResponse({ error: updateError.message }, 500)
  }

  return jsonResponse({ received: true, payment_status: 'paid' })
})
