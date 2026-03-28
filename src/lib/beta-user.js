const BETA_USER_STORAGE_KEY = 'tbot_beta_user';

export function loadBetaUser() {
  if (typeof window === 'undefined') return null;

  const raw = window.localStorage.getItem(BETA_USER_STORAGE_KEY);
  if (!raw) return null;

  try {
    return JSON.parse(raw);
  } catch (error) {
    console.error('Failed to parse beta user:', error);
    return null;
  }
}

export function saveBetaUser(user) {
  if (typeof window === 'undefined') return;
  window.localStorage.setItem(BETA_USER_STORAGE_KEY, JSON.stringify(user));
}

export function registerBetaUser({ email, password, telegram }) {
  const user = {
    email,
    password,
    telegram,
    betaStatus: 'Pending',
    paymentStatus: 'Unpaid',
    inviteUnlocked: false,
  };

  saveBetaUser(user);
  return user;
}

export function loginBetaUser({ email, password }) {
  const user = loadBetaUser();
  if (!user) return null;
  if (user.email !== email || user.password !== password) return null;
  return user;
}

export function markBetaUserPaid() {
  const currentUser = loadBetaUser();
  if (!currentUser) return null;

  const updatedUser = {
    ...currentUser,
    betaStatus: 'Active',
    paymentStatus: 'Paid',
    inviteUnlocked: true,
  };

  saveBetaUser(updatedUser);
  return updatedUser;
}

export function logoutBetaUser() {
  if (typeof window === 'undefined') return;
  window.localStorage.removeItem(BETA_USER_STORAGE_KEY);
}
