/**
 * FarmConnect — Auth Module
 * js/auth.js
 *
 * Handles user session management via localStorage.
 * Keys: fc_user_name, fc_user_email, fc_user_role, fc_user_phone
 */

const Auth = (() => {
  const KEYS = {
    name:  'fc_user_name',
    email: 'fc_user_email',
    role:  'fc_user_role',   // 'farmer' | 'trader'
    phone: 'fc_user_phone',
  };

  /** Save a user session after login/signup */
  function saveSession({ name, email, role, phone }) {
    if (name)  localStorage.setItem(KEYS.name,  name.trim());
    if (email) localStorage.setItem(KEYS.email, email.trim().toLowerCase());
    if (role)  localStorage.setItem(KEYS.role,  role);
    if (phone) localStorage.setItem(KEYS.phone, phone.trim());
  }

  /** Retrieve the current session */
  function getSession() {
    return {
      name:  localStorage.getItem(KEYS.name)  || '',
      email: localStorage.getItem(KEYS.email) || '',
      role:  localStorage.getItem(KEYS.role)  || '',
      phone: localStorage.getItem(KEYS.phone) || '',
    };
  }

  /** Check if a user session exists */
  function isLoggedIn() {
    return !!localStorage.getItem(KEYS.name);
  }

  /** Get just the first name for display */
  function getFirstName() {
    const fullName = localStorage.getItem(KEYS.name) || '';
    return fullName.split(' ')[0] || 'User';
  }

  /** Get the current user role */
  function getRole() {
    return localStorage.getItem(KEYS.role) || '';
  }

  /** Clear the session (logout) */
  function clearSession() {
    Object.values(KEYS).forEach(key => localStorage.removeItem(key));
  }

  /** Redirect to appropriate dashboard based on role */
  function redirectToDashboard() {
    const role = getRole();
    if (role === 'farmer') {
      window.location.href = getDashboardPath('farmer');
    } else if (role === 'trader') {
      window.location.href = getDashboardPath('trader');
    } else {
      window.location.href = '/user-type-select.html';
    }
  }

  /**
   * Helper: compute relative path to dashboard.
   * Detects if we are in /pages/farmer/ or /pages/trader/ or root.
   */
  function getDashboardPath(role) {
    const depth = window.location.pathname.split('/').filter(Boolean).length;
    const prefix = depth >= 2 ? '../../' : depth === 1 ? '../' : '';
    return `${prefix}pages/${role}/dashboard.html`;
  }

  /**
   * Redirect to home if user clicks logout.
   * Clears session and goes to the landing page.
   */
  function logout() {
    clearSession();
    const depth = window.location.pathname.split('/').filter(Boolean).length;
    const home = depth >= 2 ? '../../index.html' : depth === 1 ? '../index.html' : 'index.html';
    window.location.href = home;
  }

  /**
   * Populate any element with id="user-name" or id="user-greeting"
   * from session data. Call this on DOMContentLoaded.
   */
  function populateUserDisplay() {
    const session = getSession();
    const nameEl = document.getElementById('user-name');
    const greetEl = document.getElementById('user-greeting');
    const roleEl  = document.getElementById('user-role');

    if (nameEl)  nameEl.textContent  = session.name  || 'User';
    if (greetEl) greetEl.textContent = getFirstName();
    if (roleEl)  roleEl.textContent  = session.role  ? session.role.charAt(0).toUpperCase() + session.role.slice(1) : '';
  }

  // Expose public API
  return {
    saveSession,
    getSession,
    isLoggedIn,
    getFirstName,
    getRole,
    clearSession,
    redirectToDashboard,
    logout,
    populateUserDisplay,
  };
})();
