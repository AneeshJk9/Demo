"use client";

export default function Marquee() {
  const text =
    "LUXURY DESIGN · CUSTOM WEBSITES · JEWELRY BRANDS · BOUTIQUES · HIGH-END ECOMMERCE · JEWELUXE STUDIO ·";

  return (
    <section className="w-full overflow-hidden bg-black">
      <style jsx>{`
        .jlx-marquee {
          display: flex;
          width: max-content;
          animation: jlx-marquee 18s linear infinite;
        }
        @keyframes jlx-marquee {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
      `}</style>

      <div className="border-y border-[#c9a84c]/20">
        <div className="relative flex whitespace-nowrap py-4">
          <div className="jlx-marquee">
            {[...Array(8)].map((_, i) => (
              <p
                key={i}
                className="mx-6 text-sm font-medium uppercase tracking-[0.22em] text-[#c9a84c] md:text-base"
                style={{ fontFamily: "var(--font-body)" }}
              >
                {text}
              </p>
            ))}
          </div>
          <div className="jlx-marquee" aria-hidden="true">
            {[...Array(8)].map((_, i) => (
              <p
                key={i}
                className="mx-6 text-sm font-medium uppercase tracking-[0.22em] text-[#c9a84c] md:text-base"
                style={{ fontFamily: "var(--font-body)" }}
              >
                {text}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

