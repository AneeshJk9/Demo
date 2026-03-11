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

const reviews = [
  {
    text:
      "Before the redesign, our site looked fine—but it didn’t sell. Jeweluxe rebuilt everything around our story and product photography. Within two weeks we went from zero online sales to consistent daily orders.",
    name: "Mila T.",
    biz: "Auric Thread Jewelry",
  },
  {
    text:
      "Clients constantly mention our website now. It makes our boutique feel elevated and established, and it’s honestly more polished than stores twice our size. We’ve never had this many inquiries from people who ‘found us online.’",
    name: "Sofia R.",
    biz: "Luna and Gold Jewels",
  },
  {
    text:
      "I was nervous about the investment, but it paid for itself in the first month. The new site is fast, striking, and finally looks like the brand I’ve been building. The process was organized, collaborative, and genuinely premium.",
    name: "Noah K.",
    biz: "Kestrel Atelier",
  },
];

function Star() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      className="text-[#c9a84c]"
      aria-hidden="true"
    >
      <path d="M12 17.27l5.18 3.12-1.4-5.95L20.5 10.1l-6.05-.52L12 4l-2.45 5.58-6.05.52 4.72 4.34-1.4 5.95L12 17.27z" />
    </svg>
  );
}

export default function Testimonials() {
  return (
    <section className="bg-[#0a0a0a] py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
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
            CLIENT LOVE
          </p>
          <h2
            className="mt-4 font-[var(--font-headline)] text-4xl leading-[1.08] tracking-tight text-white sm:text-5xl"
            style={{ fontFamily: "var(--font-headline)" }}
          >
            Don&apos;t take our word for it.
          </h2>
        </motion.div>

        <motion.div
          variants={container}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true, amount: 0.25 }}
          className="mt-10 grid grid-cols-1 gap-6 md:mt-14 md:grid-cols-3"
        >
          {reviews.map((r) => (
            <motion.div
              key={r.biz}
              variants={child}
              className="group rounded-2xl border border-white/10 bg-[#1a1a1a] p-7 transition-colors hover:border-[#c9a84c]/60"
              data-cursor="pointer"
            >
              <div className="text-5xl leading-none text-[#c9a84c]">“</div>
              <p
                className="mt-4 text-sm leading-7 text-[#f5f0e8]/85"
                style={{ fontFamily: "var(--font-body)" }}
              >
                {r.text}
              </p>
              <div className="mt-6">
                <div
                  className="text-sm font-semibold text-[#c9a84c]"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  {r.name} — {r.biz}
                </div>
                <div className="mt-3 flex gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

