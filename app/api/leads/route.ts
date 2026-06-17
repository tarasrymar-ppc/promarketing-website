import { z } from "zod";

const leadSchema = z.object({
  name: z.string().trim().min(2).max(80),
  phone: z.string().trim().min(7).max(32),
  message: z.string().trim().max(2000).optional(),
  business: z.string().trim().max(500).optional(),
  source: z.string().trim().max(120).optional(),
  page: z.string().trim().max(500).optional(),
  locale: z.string().trim().max(10).optional(),
});

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}

function line(label: string, value?: string) {
  const trimmed = value?.trim();
  return trimmed ? `<b>${label}:</b> ${escapeHtml(trimmed)}` : null;
}

function createTelegramMessage(lead: z.infer<typeof leadSchema>) {
  return [
    "<b>Нова заявка з сайту PRO Marketing#</b>",
    "",
    line("Ім'я", lead.name),
    line("Телефон", lead.phone),
    line("Повідомлення", lead.message),
    line("Бізнес", lead.business),
    line("Форма", lead.source),
    line("Сторінка", lead.page),
    line("Мова", lead.locale),
  ]
    .filter(Boolean)
    .join("\n");
}

export async function POST(request: Request) {
  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  if (!token || !chatId) {
    return Response.json(
      { ok: false, error: "Telegram is not configured" },
      { status: 500 }
    );
  }

  let payload: unknown;
  try {
    payload = await request.json();
  } catch {
    return Response.json(
      { ok: false, error: "Invalid JSON payload" },
      { status: 400 }
    );
  }

  const parsed = leadSchema.safeParse(payload);
  if (!parsed.success) {
    return Response.json(
      { ok: false, error: "Invalid lead payload" },
      { status: 400 }
    );
  }

  const telegramResponse = await fetch(
    `https://api.telegram.org/bot${token}/sendMessage`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: chatId,
        text: createTelegramMessage(parsed.data),
        parse_mode: "HTML",
        disable_web_page_preview: true,
      }),
    }
  );

  if (!telegramResponse.ok) {
    return Response.json(
      { ok: false, error: "Telegram request failed" },
      { status: 502 }
    );
  }

  return Response.json({ ok: true });
}
