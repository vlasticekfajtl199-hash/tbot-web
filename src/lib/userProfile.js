import { supabase } from '../supabaseClient'

function normalizeStatus(value, fallback) {
  if (typeof value !== 'string' || !value.trim()) return fallback
  return value.trim().toLowerCase()
}

export function getDefaultProfile(user) {
  const metadata = user?.user_metadata ?? {}
  const paymentStatus = normalizeStatus(metadata.payment_status, 'unpaid')
  const betaStatus = normalizeStatus(
    metadata.beta_status,
    paymentStatus === 'paid' ? 'active' : 'pending'
  )

  return {
    email: user?.email ?? '',
    telegram_username: metadata.telegram_username ?? '',
    telegram_invite_link: metadata.telegram_invite_link ?? '',
    invite_status: normalizeStatus(
      metadata.invite_status,
      paymentStatus === 'paid' ? 'generated' : 'pending'
    ),
    beta_status: betaStatus,
    payment_status: paymentStatus,
  }
}

export async function getUserProfile(user) {
  const fallbackProfile = getDefaultProfile(user)

  const { data, error } = await supabase
    .from('profiles')
    .select(
      'email, telegram_username, telegram_invite_link, invite_status, beta_status, payment_status'
    )
    .eq('id', user.id)
    .maybeSingle()

  if (error || !data) {
    return {
      profile: fallbackProfile,
      error,
      usedFallback: true,
    }
  }

  return {
    profile: {
      email: data.email || fallbackProfile.email,
      telegram_username: data.telegram_username || fallbackProfile.telegram_username,
      telegram_invite_link: data.telegram_invite_link || fallbackProfile.telegram_invite_link,
      invite_status: normalizeStatus(data.invite_status, fallbackProfile.invite_status),
      beta_status: normalizeStatus(data.beta_status, fallbackProfile.beta_status),
      payment_status: normalizeStatus(data.payment_status, fallbackProfile.payment_status),
    },
    error: null,
    usedFallback: false,
  }
}

export async function upsertUserProfile(userId, profile) {
  const { error } = await supabase.from('profiles').upsert(
    {
      id: userId,
      email: profile.email,
      telegram_username: profile.telegram_username,
      telegram_invite_link: profile.telegram_invite_link ?? null,
      invite_status: profile.invite_status ?? 'pending',
      beta_status: profile.beta_status,
      payment_status: profile.payment_status,
    },
    { onConflict: 'id' }
  )

  return { error }
}

export async function markProfilePaidForTesting(userId) {
  const { data, error } = await supabase
    .from('profiles')
    .update({
      payment_status: 'paid',
      beta_status: 'active',
      invite_status: 'generated',
    })
    .eq('id', userId)
    .select(
      'email, telegram_username, telegram_invite_link, invite_status, beta_status, payment_status'
    )
    .maybeSingle()

  return { data, error }
}
