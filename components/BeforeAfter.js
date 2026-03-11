"use client";

import { useId, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

function Slider({ before, after }) {
  const [value, setValue] = useState(55);
  const rid = useId();

  return (
    <div className="w-full">
      <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#0a0a0a]">
        <div className="relative h-[340px] w-full sm:h-[380px]">
          <Image
            src={before}
            alt="Before: generic template"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />

          <div
            className="absolute inset-0"
            style={{
              clipPath: `inset(0 ${100 - value}% 0 0)`,
            }}
          >
            <Image
              src={after}
              alt="After: custom luxury design"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/10" />
          </div>

          <input
            aria-label="Before and after slider"
            className="absolute inset-0 h-full w-full cursor-ew-resize opacity-0"
            type="range"
            min={0}
            max={100}
            value={value}
            onChange={(e) => setValue(Number(e.target.value))}
            data-cursor="pointer"
            id={rid}
          />

          <div
            className="pointer-events-none absolute inset-y-0"
            style={{ left: `${value}%` }}
          >
            <div className="absolute inset-y-0 -translate-x-1/2">
              <div className="h-full w-px bg-[#c9a84c]" />
            </div>
            <div className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2">
              <div className="grid h-11 w-11 place-items-center rounded-full border border-[#c9a84c] bg-black/40 backdrop-blur">
                <div className="flex items-center gap-2 text-[#c9a84c]">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M14 6l-6 6 6 6"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10 6l6 6-6 6"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between gap-3 px-5 py-4">
          <div
            className="text-[11px] font-semibold uppercase tracking-[0.22em] text-white/70"
            style={{ fontFamily: "var(--font-body)" }}
          >
            BEFORE: <span className="text-white/90">Generic Template</span>
          </div>
          <div
            className="text-[11px] font-semibold uppercase tracking-[0.22em] text-white/70"
            style={{ fontFamily: "var(--font-body)" }}
          >
            AFTER: <span className="text-white/90">Custom Design</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function BeforeAfter() {
  return (
    <section id="work" className="bg-[#0a0a0a] py-20 md:py-28">
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
            OUR WORK
          </p>
          <h2
            className="mt-4 font-[var(--font-headline)] text-4xl leading-[1.08] tracking-tight text-white sm:text-5xl"
            style={{ fontFamily: "var(--font-headline)" }}
          >
            The difference is visible.
          </h2>
          <p
            className="mt-4 text-sm leading-7 text-[#f5f0e8]/85 sm:text-base"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Drag the slider to see the transformation.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mt-10 grid grid-cols-1 gap-6 md:mt-14 md:grid-cols-2"
        >
          <Slider
            before="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1200&q=80&auto=format&fit=crop"
            after="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=1200&q=80&auto=format&fit=crop"
          />
          <Slider
            before="https://images.unsplash.com/photo-1522199710521-72d69614c702?w=1200&q=80&auto=format&fit=crop"
            after="https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?w=1200&q=80&auto=format&fit=crop"
          />
        </motion.div>
      </div>
    </section>
  );
}

