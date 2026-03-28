import { supabase } from '../supabaseClient'

function normalizeStatus(value, fallback) {
  if (typeof value !== 'string' || !value.trim()) return fallback
  return value.trim().toLowerCase()
}

export function getDefaultProfile(user) {
  return {
    email: user?.email ?? '',
    telegram_username: '',
    telegram_invite_link: '',
    invite_status: 'pending',
    beta_status: 'pending',
    payment_status: 'unpaid',
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

  if (error) {
    return {
      profile: fallbackProfile,
      error: 'Unable to load profile data from Supabase.',
    }
  }

  if (!data) {
    return {
      profile: fallbackProfile,
      error: 'Profile row was not found for the current user.',
    }
  }

  return {
    profile: {
      email: data.email || fallbackProfile.email,
      telegram_username: data.telegram_username || '',
      telegram_invite_link: data.telegram_invite_link || '',
      invite_status: normalizeStatus(data.invite_status, 'pending'),
      beta_status: normalizeStatus(data.beta_status, 'pending'),
      payment_status: normalizeStatus(data.payment_status, 'unpaid'),
    },
    error: '',
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
