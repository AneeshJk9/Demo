"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeUp } from "./motion";

export default function About() {
  return (
    <section id="about" className="bg-[#0a0a0a] py-20 md:py-28">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-5 md:grid-cols-2 md:items-center md:gap-14 md:px-8">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative overflow-hidden rounded-2xl border border-white/10"
          data-cursor="pointer"
        >
          <Image
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&q=80&auto=format&fit=crop"
            alt="A designer at a modern desk"
            width={1200}
            height={900}
            className="h-[420px] w-full object-cover md:h-[560px]"
            priority={false}
          />
          <div className="absolute inset-0 bg-black/20" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col"
        >
          <p
            className="text-xs font-semibold uppercase tracking-[0.28em] text-[#c9a84c]"
            style={{ fontFamily: "var(--font-body)" }}
          >
            ABOUT THE STUDIO
          </p>
          <h2
            className="mt-4 font-[var(--font-headline)] text-4xl leading-[1.08] tracking-tight text-white sm:text-5xl"
            style={{ fontFamily: "var(--font-headline)" }}
          >
            We make your brand impossible to ignore.
          </h2>

          <p
            className="mt-6 text-sm leading-7 text-[#f5f0e8]/85 sm:text-base"
            style={{ fontFamily: "var(--font-body)" }}
          >
            We build premium websites for jewelry brands and luxury businesses
            that want more than “a nice site.” We craft an editorial experience
            that feels as refined as your product—and converts like a sales team
            that never sleeps.
          </p>
          <p
            className="mt-4 text-sm leading-7 text-[#f5f0e8]/85 sm:text-base"
            style={{ fontFamily: "var(--font-body)" }}
          >
            From storytelling and typography to performance and booking flows,
            every detail is intentional. The result is a digital presence that
            elevates trust, increases inquiries, and makes your competitors look
            generic.
          </p>

          <div className="mt-8 h-px w-full bg-[#c9a84c]/35" />

          <motion.div
            {...fadeUp}
            className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3"
          >
            {[
              { k: "50+", v: "Sites Built" },
              { k: "100%", v: "Custom Code" },
              { k: "5★", v: "Client Rating" },
            ].map((s) => (
              <div
                key={s.v}
                className="rounded-xl border border-white/10 bg-white/[0.03] px-5 py-4"
              >
                <div
                  className="text-2xl font-semibold tracking-tight text-white"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  {s.k}
                </div>
                <div
                  className="mt-1 text-xs font-medium uppercase tracking-[0.22em] text-white/70"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  {s.v}
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

