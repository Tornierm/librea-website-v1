// Set once a visitor successfully submits their email, so we don't
// re-show the waitlist popup on this device/browser. Persists across
// sessions (localStorage), unlike the per-session "dismissed" flag.
export const EMAIL_SUBMITTED_KEY = 'librea_email_submitted';
