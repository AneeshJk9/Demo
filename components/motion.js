"use client";

export const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.25 },
  transition: { duration: 0.6, ease: "easeOut" },
};

export const containerStagger = {
  initial: {},
  whileInView: {},
  viewport: { once: true, amount: 0.25 },
  transition: { staggerChildren: 0.15, delayChildren: 0.05 },
};

