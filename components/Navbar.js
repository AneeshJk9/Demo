"use client";

import { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

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

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const navClass = useMemo(() => {
    const base =
      "fixed top-0 left-0 right-0 z-50 transition-colors duration-300";
    if (!scrolled) return base + " bg-transparent";
    return base + " bg-[#0a0a0a]/95 backdrop-blur border-b border-[#c9a84c]/25";
  }, [scrolled]);

  return (
    <>
      <header className={navClass}>
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-5 md:px-8">
          <button
            type="button"
            onClick={() => scrollToId("top")}
            className="group flex items-baseline gap-3"
            aria-label="Jeweluxe home"
          >
            <span
              className="font-[var(--font-headline)] text-lg tracking-[0.32em] text-[#c9a84c]"
              style={{ fontFamily: "var(--font-headline)" }}
            >
              JEWELUXE
            </span>
          </button>

          <nav className="hidden items-center gap-7 md:flex">
            {links.map((l) => (
              <button
                key={l.id}
                type="button"
                onClick={() => scrollToId(l.id)}
                className="text-xs font-medium uppercase tracking-[0.22em] text-white/85 transition-colors hover:text-white"
                style={{ fontFamily: "var(--font-body)" }}
              >
                {l.label}
              </button>
            ))}
            <button
              type="button"
              onClick={() => scrollToId("contact")}
              className="ml-2 rounded-full border border-[#c9a84c] px-5 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-[#c9a84c] transition-colors hover:bg-[#c9a84c] hover:text-black"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Book a Call
            </button>
          </nav>

          <button
            type="button"
            onClick={() => setOpen(true)}
            className="inline-flex items-center justify-center rounded-full border border-white/15 p-3 text-white/90 md:hidden"
            aria-label="Open menu"
            data-cursor="pointer"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4 7H20M4 12H20M4 17H20"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>
      </header>

      <div id="top" className="absolute top-0 left-0 h-px w-px" />

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="fixed inset-0 z-[70] bg-[#0a0a0a]"
          >
            <div className="absolute right-5 top-5">
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="rounded-full border border-white/15 p-3 text-white/90"
                aria-label="Close menu"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6 6L18 18M18 6L6 18"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                  />
                </svg>
              </button>
            </div>

            <div className="flex h-full flex-col items-center justify-center gap-7 px-8 text-center">
              {links.map((l) => (
                <button
                  key={l.id}
                  type="button"
                  onClick={() => {
                    setOpen(false);
                    setTimeout(() => scrollToId(l.id), 50);
                  }}
                  className="text-3xl uppercase tracking-[0.22em] text-white/95"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  {l.label}
                </button>
              ))}
              <button
                type="button"
                onClick={() => {
                  setOpen(false);
                  setTimeout(() => scrollToId("contact"), 50);
                }}
                className="mt-4 rounded-full border border-[#c9a84c] px-7 py-3 text-sm font-semibold uppercase tracking-[0.22em] text-[#c9a84c] transition-colors hover:bg-[#c9a84c] hover:text-black"
                style={{ fontFamily: "var(--font-body)" }}
              >
                Book a Call
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

