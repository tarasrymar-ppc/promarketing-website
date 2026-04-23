import { ArrowSquareOut } from "@phosphor-icons/react/dist/ssr";

const CERT_URL =
  "https://skillshop.credential.net/234c14e9-a1be-495f-b688-2c7765df7cdd#acc.q4wrikZ6";
const CERT_IMAGE =
  "https://api.accredible.com/v1/frontend/credential_website_embed_image/certificate/160568898";

export default function GASpecialist() {
  return (
    <section className="bg-[#F4F4F4] py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-[#0D0D0D] mb-12">
          Хто веде ваш акаунт.
        </h2>

        <div className="bg-white border border-[#E0E0E0] rounded-xl p-8 md:p-10">
          <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-10 md:gap-16 items-center">

            {/* Left — info */}
            <div>
              <p className="text-[10px] text-[#ADADAD] uppercase tracking-widest mb-3">
                PPC Specialist
              </p>
              <p className="text-3xl md:text-4xl font-semibold text-[#0D0D0D] mb-4 leading-tight">
                Тарас Римар
              </p>
              <p className="text-sm text-[#6B6B6B] leading-relaxed mb-6 max-w-md">
                Відповідає за налаштування, ведення і оптимізацію вашого
                Google Ads акаунту. Пряма комунікація — без посередників.
              </p>
              <a
                href={CERT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 text-sm font-semibold text-[#E5202E] hover:text-[#C0111D] transition-colors duration-200"
              >
                Переглянути Google Ads сертифікат
                <ArrowSquareOut size={14} weight="bold" />
              </a>
            </div>

            {/* Right — certificate */}
            <div className="flex justify-center md:justify-end">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={CERT_IMAGE}
                alt="Google Ads Certificate — Taras Rymar"
                className="w-full max-w-[220px] h-auto rounded-lg border border-[#E0E0E0]"
              />
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
