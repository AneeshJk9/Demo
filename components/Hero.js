"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";

function scrollToId(id) {
  const el = document.getElementById(id);
  if (!el) return;
  const y = el.getBoundingClientRect().top + window.scrollY - 88;
  window.scrollTo({ top: y, behavior: "smooth" });
}

export default function Hero() {
  const [videoFailed, setVideoFailed] = useState(false);

  const heroAnim = useMemo(
    () => ({
      hidden: {},
      show: {
        transition: {
          staggerChildren: 0.15,
          delayChildren: 0.15,
        },
      },
    }),
    []
  );

  const item = useMemo(
    () => ({
      hidden: { opacity: 0, y: 40 },
      show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
    }),
    []
  );

  return (
    <section className="relative h-[100svh] min-h-[680px] w-full overflow-hidden bg-[#0a0a0a]">
      {!videoFailed ? (
        <video
          className="absolute inset-0 h-full w-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          onError={() => setVideoFailed(true)}
        >
          <source
            src="https://videos.pexels.com/video-files/11353206/11353206-hd_1920_1080_25fps.mp4"
            type="video/mp4"
          />
        </video>
      ) : (
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?w=1600&q=80&auto=format&fit=crop)",
          }}
        />
      )}

      <div className="absolute inset-0 bg-black/60" />

      <div className="relative mx-auto flex h-full max-w-6xl flex-col items-center justify-center px-5 pt-24 text-center md:px-8">
        <motion.div
          variants={heroAnim}
          initial="hidden"
          animate="show"
          className="flex max-w-4xl flex-col items-center"
        >
          <motion.p
            variants={item}
            className="mb-5 text-xs font-semibold uppercase tracking-[0.28em] text-[#c9a84c]"
            style={{ fontFamily: "var(--font-body)" }}
          >
            WEB DESIGN THAT SELLS
          </motion.p>

          <motion.h1
            variants={item}
            className="font-[var(--font-headline)] text-[44px] leading-[1.02] tracking-tight text-white sm:text-[62px] md:text-[92px] lg:text-[112px]"
            style={{ fontFamily: "var(--font-headline)" }}
          >
            <span className="block">We Build Websites</span>
            <span className="block">That Feel Like</span>
            <span className="block">
              <span className="italic text-[#c9a84c]">Luxury.</span>
            </span>
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-6 max-w-2xl text-sm leading-7 text-[#f5f0e8]/90 sm:text-base"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Jeweluxe is a sample site. We design custom websites for jewelry
            brands, boutiques, and luxury businesses that want to stand out
            online.
          </motion.p>

          <motion.div
            variants={item}
            className="mt-10 flex w-full flex-col items-center justify-center gap-3 sm:flex-row"
          >
            <button
              type="button"
              onClick={() => scrollToId("work")}
              className="w-full rounded-full bg-[#c9a84c] px-7 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-black transition-transform hover:-translate-y-[1px] sm:w-auto"
              style={{ fontFamily: "var(--font-body)" }}
            >
              See Our Work
            </button>
            <button
              type="button"
              onClick={() => scrollToId("contact")}
              className="w-full rounded-full border border-white/70 px-7 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-white transition-colors hover:border-white hover:bg-white hover:text-black sm:w-auto"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Get a Free Quote
            </button>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6, ease: "easeOut" }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
          aria-hidden="true"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center gap-2"
          >
            <div className="h-12 w-px bg-white/40" />
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-white/70"
            >
              <path
                d="M7 10l5 5 5-5"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

