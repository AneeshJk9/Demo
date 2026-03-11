"use client";

const links = [
  { label: "About", id: "about" },
  { label: "Services", id: "services" },
  { label: "Work", id: "work" },
  { label: "Pricing", id: "pricing" },
  { label: "Contact", id: "contact" },
];

function scrollToId(id) {
  const el = document.getElementById(id);
  if (!el) return;
  const y = el.getBoundingClientRect().top + window.scrollY - 88;
  window.scrollTo({ top: y, behavior: "smooth" });
}

function Icon({ children, label }) {
  return (
    <a
      href="#"
      aria-label={label}
      className="grid h-10 w-10 place-items-center rounded-full border border-white/10 text-white/70 transition-colors hover:border-[#c9a84c]/40 hover:text-[#c9a84c]"
      data-cursor="pointer"
    >
      {children}
    </a>
  );
}

export default function Footer() {
  return (
    <footer className="bg-black">
      <div className="border-t border-[#c9a84c]/25">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-5 py-14 md:grid-cols-3 md:items-start md:px-8">
          <div>
            <div
              className="font-[var(--font-headline)] text-lg tracking-[0.32em] text-[#c9a84c]"
              style={{ fontFamily: "var(--font-headline)" }}
            >
              JEWELUXE
            </div>
            <div
              className="mt-3 text-sm text-white/45"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Premium web design for luxury brands.
            </div>
          </div>

          <div className="md:justify-self-center">
            <div
              className="text-xs font-semibold uppercase tracking-[0.28em] text-white/60"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Navigate
            </div>
            <div className="mt-4 flex flex-col gap-3">
              {links.map((l) => (
                <button
                  key={l.id}
                  type="button"
                  onClick={() => scrollToId(l.id)}
                  className="text-left text-xs font-medium uppercase tracking-[0.22em] text-white/75 transition-colors hover:text-white"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  {l.label}
                </button>
              ))}
            </div>
          </div>

          <div className="md:justify-self-end">
            <div
              className="text-xs font-semibold uppercase tracking-[0.28em] text-white/60"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Social
            </div>
            <div className="mt-4 flex items-center gap-3">
              <Icon label="Instagram">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16 3H8a5 5 0 0 0-5 5v8a5 5 0 0 0 5 5h8a5 5 0 0 0 5-5V8a5 5 0 0 0-5-5Z"
                    stroke="currentColor"
                    strokeWidth="1.6"
                  />
                  <path
                    d="M12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"
                    stroke="currentColor"
                    strokeWidth="1.6"
                  />
                  <path
                    d="M17.5 6.5h.01"
                    stroke="currentColor"
                    strokeWidth="2.4"
                    strokeLinecap="round"
                  />
                </svg>
              </Icon>

              <Icon label="Pinterest">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12c0 4.238 2.634 7.86 6.35 9.32-.088-.79-.168-2.005.035-2.867.182-.78 1.173-4.97 1.173-4.97s-.298-.596-.298-1.475c0-1.381.8-2.413 1.796-2.413.846 0 1.254.635 1.254 1.395 0 .85-.542 2.12-.82 3.296-.233.986.494 1.79 1.466 1.79 1.76 0 3.113-1.857 3.113-4.536 0-2.37-1.705-4.03-4.14-4.03-2.818 0-4.472 2.115-4.472 4.3 0 .85.327 1.764.736 2.26a.297.297 0 0 1 .068.285c-.075.314-.244.986-.277 1.125-.043.183-.142.223-.329.135-1.23-.574-2-2.373-2-3.824 0-3.11 2.26-5.97 6.52-5.97 3.423 0 6.084 2.44 6.084 5.7 0 3.4-2.142 6.14-5.12 6.14-1 0-1.94-.52-2.26-1.13l-.615 2.34c-.222.86-.82 1.935-1.22 2.59.92.285 1.9.44 2.92.44Z"
                    fill="currentColor"
                    fillOpacity="0.9"
                  />
                </svg>
              </Icon>

              <Icon label="LinkedIn">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.5 6.75a1.75 1.75 0 1 1 0-3.5 1.75 1.75 0 0 1 0 3.5Z"
                    fill="currentColor"
                    fillOpacity="0.9"
                  />
                  <path
                    d="M4.75 9H8v11H4.75V9Z"
                    fill="currentColor"
                    fillOpacity="0.9"
                  />
                  <path
                    d="M10.25 9H13.3v1.5h.04c.42-.8 1.45-1.65 2.98-1.65 3.19 0 3.78 2.1 3.78 4.83V20h-3.25v-5.35c0-1.28-.02-2.92-1.78-2.92-1.78 0-2.05 1.39-2.05 2.83V20h-3.25V9Z"
                    fill="currentColor"
                    fillOpacity="0.9"
                  />
                </svg>
              </Icon>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 py-5">
          <div
            className="mx-auto max-w-6xl px-5 text-center text-xs text-white/45 md:px-8"
            style={{ fontFamily: "var(--font-body)" }}
          >
            © 2025 Jeweluxe Studio. This is a sample site created for portfolio
            purposes only.
          </div>
        </div>
      </div>
    </footer>
  );
}

