import { trackEvent } from "@/lib/analytics";

export type LeadPayload = {
  name: string;
  phone: string;
  message?: string;
  business?: string;
  source?: string;
  page?: string;
  locale?: string;
};

export async function submitLead(payload: LeadPayload) {
  try {
    const page =
      payload.page ??
      (typeof window !== "undefined" ? window.location.href : undefined);
    const response = await fetch("/api/leads", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...payload,
        page,
      }),
    });

    if (!response.ok) {
      throw new Error("Lead submission failed");
    }

    trackEvent("form_submitted", {
      form_name: payload.source ?? "lead_form",
      form_type: "lead",
      locale: payload.locale,
    });

    return response.json() as Promise<{ ok: true }>;
  } catch (error) {
    trackEvent("form_submission_failed", {
      form_name: payload.source ?? "lead_form",
      form_type: "lead",
      locale: payload.locale,
    });
    throw error;
  }
}
