/**
 * FarmConnect — Shared Utilities
 * js/utils.js
 */

const Utils = (() => {

  /**
   * Format a price number to Indian Rupee string.
   * e.g. 4580 → "₹4,580"
   */
  function formatPrice(amount) {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      minimumFractionDigits: 0,
    }).format(amount);
  }

  /**
   * Format a date string to a readable Indian format.
   * e.g. "2024-08-25" → "25 Aug 2024"
   */
  function formatDate(dateStr) {
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-IN', {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
    });
  }

  /**
   * Show a temporary toast notification.
   * Creates a toast element, appends to body, auto-removes.
   */
  function showToast(message, type = 'success', duration = 3500) {
    const existing = document.getElementById('fc-toast');
    if (existing) existing.remove();

    const toast = document.createElement('div');
    toast.id = 'fc-toast';
    toast.style.cssText = `
      position: fixed;
      bottom: 80px;
      left: 50%;
      transform: translateX(-50%);
      background-color: ${type === 'success' ? '#2E7D32' : type === 'error' ? '#C62828' : '#0277BD'};
      color: white;
      padding: 12px 24px;
      border-radius: 8px;
      font-family: 'Inter', sans-serif;
      font-size: 14px;
      font-weight: 500;
      box-shadow: 0 4px 16px rgba(0,0,0,0.15);
      z-index: 9999;
      animation: fadeIn 0.3s ease;
      white-space: nowrap;
    `;
    toast.textContent = message;
    document.body.appendChild(toast);

    setTimeout(() => {
      toast.style.animation = 'fadeOut 0.3s ease forwards';
      setTimeout(() => toast.remove(), 300);
    }, duration);
  }

  /**
   * Validate an email address format.
   */
  function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  /**
   * Validate an Indian phone number (10 digits).
   */
  function isValidPhone(phone) {
    return /^[6-9]\d{9}$/.test(phone.replace(/\s/g, ''));
  }

  /**
   * Debounce a function call.
   */
  function debounce(fn, delay = 300) {
    let timer;
    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => fn(...args), delay);
    };
  }

  /**
   * Generate a random alphanumeric ID (for order/contract IDs).
   */
  function generateId(length = 8) {
    return Math.random().toString(36).substring(2, 2 + length).toUpperCase();
  }

  /**
   * Get query parameter value from URL.
   */
  function getQueryParam(name) {
    return new URLSearchParams(window.location.search).get(name);
  }

  /**
   * Capitalize the first letter of a string.
   */
  function capitalize(str) {
    if (!str) return '';
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  }

  /**
   * Relative path helper based on directory depth.
   * Used for navigating to root-level files from subdirectories.
   */
  function rootPath(...segments) {
    const depth = window.location.pathname.split('/').filter(Boolean).length;
    const prefix = depth >= 2 ? '../../' : depth === 1 ? '../' : '';
    return prefix + segments.join('/');
  }

  return {
    formatPrice,
    formatDate,
    showToast,
    isValidEmail,
    isValidPhone,
    debounce,
    generateId,
    getQueryParam,
    capitalize,
    rootPath,
  };
})();
