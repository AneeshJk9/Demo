"use client";

import { motion } from "framer-motion";

const container = {
  initial: {},
  whileInView: { transition: { staggerChildren: 0.15, delayChildren: 0.05 } },
};

const child = {
  initial: { opacity: 0, y: 40 },
  whileInView: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const plans = [
  {
    name: "Starter",
    price: "$799",
    subtitle: "Perfect for new brands",
    featured: false,
    features: [
      "1-page custom website",
      "Fully mobile responsive",
      "Contact form included",
      "1 round of revisions",
      "Delivered in 7 days",
    ],
    cta: "Get Started",
    ctaStyle:
      "border border-[#c9a84c] text-[#c9a84c] hover:bg-[#c9a84c] hover:text-black",
  },
  {
    name: "Studio",
    price: "$1,499",
    subtitle: "For growing jewelry brands",
    featured: true,
    badge: "Most Popular",
    features: [
      "Up to 5 custom pages",
      "Scroll animations included",
      "Product showcase section",
      "Booking button integration",
      "Basic SEO setup",
      "3 rounds of revisions",
      "Delivered in 14 days",
    ],
    cta: "Get Started",
    ctaStyle:
      "bg-[#c9a84c] text-black hover:brightness-110 hover:-translate-y-[1px] text-[13px] md:text-sm",
  },
  {
    name: "Elite",
    price: "$2,999",
    subtitle: "The full luxury experience",
    featured: false,
    features: [
      "Unlimited pages",
      "E-commerce ready",
      "Video background",
      "Custom cursor design",
      "Brand identity consultation",
      "Priority support",
      "Unlimited revisions",
      "Delivered in 21 days",
    ],
    cta: "Get Started",
    ctaStyle:
      "border border-[#c9a84c] text-[#c9a84c] hover:bg-[#c9a84c] hover:text-black",
  },
];

function scrollToId(id) {
  const el = document.getElementById(id);
  if (!el) return;
  const y = el.getBoundingClientRect().top + window.scrollY - 88;
  window.scrollTo({ top: y, behavior: "smooth" });
}

export default function Services() {
  return (
    <section id="services" className="bg-[#0a0a0a] py-20 md:py-28">
      <div id="pricing" className="mx-auto max-w-6xl px-5 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-2xl"
        >
          <p
            className="text-xs font-semibold uppercase tracking-[0.28em] text-[#c9a84c]"
            style={{ fontFamily: "var(--font-body)" }}
          >
            WHAT WE OFFER
          </p>
          <h2
            className="mt-4 font-[var(--font-headline)] text-4xl leading-[1.08] tracking-tight text-white sm:text-5xl"
            style={{ fontFamily: "var(--font-headline)" }}
          >
            Packages built for brands that mean business.
          </h2>
        </motion.div>

        <motion.div
          variants={container}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true, amount: 0.25 }}
          className="mt-10 grid grid-cols-1 gap-6 md:mt-14 md:grid-cols-3"
        >
          {plans.map((p) => (
            <motion.div
              key={p.name}
              variants={child}
              className={[
                "relative rounded-2xl bg-[#1a1a1a] p-7 text-white",
                "border border-white/10",
                p.featured ? "border-[#c9a84c]" : "",
              ].join(" ")}
              data-cursor="pointer"
            >
              {p.featured && (
                <div className="absolute right-5 top-5 rounded-full bg-[#c9a84c] px-3 py-1 text-[11px] font-bold uppercase tracking-[0.18em] text-black">
                  {p.badge}
                </div>
              )}

              <div
                className="text-xs font-semibold uppercase tracking-[0.28em] text-white/70"
                style={{ fontFamily: "var(--font-body)" }}
              >
                {p.name}
              </div>

              <div className="mt-4 flex items-baseline gap-3">
                <div
                  className="font-[var(--font-headline)] text-4xl tracking-tight text-white"
                  style={{ fontFamily: "var(--font-headline)" }}
                >
                  {p.price}
                </div>
                <div
                  className="text-sm text-[#f5f0e8]/75"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  {p.subtitle}
                </div>
              </div>

              <div className="mt-6 h-px w-full bg-white/10" />

              <ul className="mt-6 space-y-3">
                {p.features.map((f) => (
                  <li
                    key={f}
                    className="flex items-start gap-3 text-sm text-[#f5f0e8]/85"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    <span className="mt-[7px] h-1.5 w-1.5 flex-none rounded-full bg-[#c9a84c]" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <button
                type="button"
                onClick={() => scrollToId("contact")}
                className={[
                  "mt-8 w-full rounded-full px-6 py-3 text-sm font-semibold uppercase tracking-[0.18em] transition-all",
                  p.featured ? "py-4" : "",
                  p.ctaStyle,
                ].join(" ")}
                style={{ fontFamily: "var(--font-body)" }}
              >
                {p.cta}
              </button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

