/**
 * Central backend API base URL.
 *
 * Single source of truth so the whole frontend points at one backend.
 * Configure via VITE_BACKEND_URL in your .env (e.g. http://localhost:5001).
 * Falls back to http://localhost:5000 (the Flask default) when unset.
 */
export const BACKEND_URL =
  import.meta.env.VITE_BACKEND_URL || 'http://localhost:5000';
