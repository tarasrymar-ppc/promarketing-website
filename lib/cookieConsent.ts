"use client";

export type CookieConsentValue = "accepted" | "rejected";
export type CookieConsentState = CookieConsentValue | null;

export const COOKIE_CONSENT_STORAGE_KEY = "pm_cookie_consent_v1";
export const COOKIE_CONSENT_EVENT = "pm_cookie_consent_updated";

function isCookieConsentValue(value: string | null): value is CookieConsentValue {
  return value === "accepted" || value === "rejected";
}

function emitCookieConsent(value: CookieConsentState) {
  window.dispatchEvent(
    new CustomEvent(COOKIE_CONSENT_EVENT, {
      detail: { value },
    })
  );
}

export function getCookieConsent(): CookieConsentState {
  if (typeof window === "undefined") return null;

  try {
    const value = window.localStorage.getItem(COOKIE_CONSENT_STORAGE_KEY);
    return isCookieConsentValue(value) ? value : null;
  } catch {
    return null;
  }
}

export function hasAnalyticsConsent() {
  return getCookieConsent() === "accepted";
}

export function setCookieConsent(value: CookieConsentValue) {
  try {
    window.localStorage.setItem(COOKIE_CONSENT_STORAGE_KEY, value);
  } catch {
    // If storage is unavailable, keep the consent choice in the current page session.
  }

  emitCookieConsent(value);
}

export function clearCookieConsent() {
  try {
    window.localStorage.removeItem(COOKIE_CONSENT_STORAGE_KEY);
  } catch {
    // Ignore storage errors; the banner can still reopen for the current session.
  }

  emitCookieConsent(null);
}
