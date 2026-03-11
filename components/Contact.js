"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";

const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function Contact() {
  const [values, setValues] = useState({
    name: "",
    email: "",
    business: "",
    package: "Just Browsing",
    details: "",
  });
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);
  const [chatOpen, setChatOpen] = useState(false);

  const onChange = (key) => (e) => {
    const v = e.target.value;
    setValues((s) => ({ ...s, [key]: v }));
    setErrors((s) => ({ ...s, [key]: "" }));
  };

  const validate = useMemo(
    () => () => {
      const next = {};
      if (!values.name.trim()) next.name = "Please enter your name.";
      if (!values.email.trim()) next.email = "Please enter your email.";
      else if (!emailRe.test(values.email.trim()))
        next.email = "Please enter a valid email address.";
      if (!values.business.trim())
        next.business = "Please enter your business name.";
      if (!values.package) next.package = "Please choose a package.";
      if (!values.details.trim())
        next.details = "Please tell us a bit about your project.";
      return next;
    },
    [values]
  );

  const onSubmit = (e) => {
    e.preventDefault();
    const next = validate();
    setErrors(next);
    if (Object.keys(next).length > 0) return;
    setSuccess(true);
  };

  return (
    <section id="contact" className="relative bg-[#0a0a0a] py-20 md:py-28">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-5 md:grid-cols-2 md:gap-14 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <p
            className="text-xs font-semibold uppercase tracking-[0.28em] text-[#c9a84c]"
            style={{ fontFamily: "var(--font-body)" }}
          >
            LET&apos;S WORK TOGETHER
          </p>
          <h2
            className="mt-4 font-[var(--font-headline)] text-4xl leading-[1.08] tracking-tight text-white sm:text-5xl"
            style={{ fontFamily: "var(--font-headline)" }}
          >
            Ready for a website that actually converts?
          </h2>
          <p
            className="mt-6 text-sm leading-7 text-[#f5f0e8]/85 sm:text-base"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Tell us what you&apos;re building and what success looks like. We
            respond within 24 hours with next steps, a clear timeline, and
            recommendations tailored to your brand.
          </p>

          <div className="mt-8">
            <div
              className="text-xs font-semibold uppercase tracking-[0.22em] text-white/70"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Email
            </div>
            <a
              href="mailto:hello@jeweluxestudio.com"
              className="mt-2 inline-block text-lg font-semibold text-[#c9a84c]"
              style={{ fontFamily: "var(--font-body)" }}
            >
              hello@jeweluxestudio.com
            </a>
          </div>

          <a
            href="https://calendly.com"
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-flex items-center justify-center rounded-full border border-[#c9a84c] px-7 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-[#c9a84c] transition-colors hover:bg-[#c9a84c] hover:text-black"
            style={{ fontFamily: "var(--font-body)" }}
            data-cursor="pointer"
          >
            Book a Discovery Call
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="rounded-2xl border border-white/10 bg-[#1a1a1a] p-7"
        >
          {!success ? (
            <form onSubmit={onSubmit} className="space-y-5">
              <Field
                label="Your Name"
                required
                value={values.name}
                onChange={onChange("name")}
                error={errors.name}
              />
              <Field
                label="Email Address"
                required
                type="email"
                value={values.email}
                onChange={onChange("email")}
                error={errors.email}
              />
              <Field
                label="Business Name"
                required
                value={values.business}
                onChange={onChange("business")}
                error={errors.business}
              />

              <div>
                <Label text="Which package interests you?" required />
                <select
                  value={values.package}
                  onChange={onChange("package")}
                  className="mt-2 w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white outline-none transition-colors focus:border-[#c9a84c]/70"
                  style={{ fontFamily: "var(--font-body)" }}
                  data-cursor="pointer"
                >
                  <option>Just Browsing</option>
                  <option>Starter $799</option>
                  <option>Studio $1499</option>
                  <option>Elite $2999</option>
                </select>
                {errors.package ? <Error text={errors.package} /> : null}
              </div>

              <div>
                <Label text="Tell us about your project" required />
                <textarea
                  rows={4}
                  value={values.details}
                  onChange={onChange("details")}
                  className="mt-2 w-full resize-none rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white outline-none transition-colors focus:border-[#c9a84c]/70"
                  style={{ fontFamily: "var(--font-body)" }}
                />
                {errors.details ? <Error text={errors.details} /> : null}
              </div>

              <button
                type="submit"
                className="w-full rounded-full bg-[#c9a84c] px-7 py-4 text-sm font-semibold uppercase tracking-[0.16em] text-black transition-transform hover:-translate-y-[1px]"
                style={{ fontFamily: "var(--font-body)" }}
                data-cursor="pointer"
              >
                Send My Project Details →
              </button>
            </form>
          ) : (
            <div className="grid min-h-[360px] place-items-center text-center">
              <div>
                <div
                  className="text-sm font-semibold uppercase tracking-[0.28em] text-white/60"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  Received
                </div>
                <div
                  className="mt-4 text-2xl font-semibold text-[#c9a84c] sm:text-3xl"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  ✦ Thank you! We&apos;ll be in touch within 24 hours.
                </div>
              </div>
            </div>
          )}
        </motion.div>
      </div>

      <div className="fixed bottom-6 right-6 z-[80]">
        {chatOpen ? (
          <div className="mb-4 w-[280px] rounded-2xl border border-[#c9a84c]/70 bg-[#0a0a0a] p-4 shadow-2xl shadow-black/60">
            <div className="flex items-start justify-between gap-4">
              <div>
                <div
                  className="text-xs font-semibold uppercase tracking-[0.22em] text-[#c9a84c]"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  Live Chat
                </div>
                <div
                  className="mt-2 text-sm leading-6 text-[#f5f0e8]/85"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  Chat coming soon — for now, email us at{" "}
                  <a
                    href="mailto:hello@jeweluxestudio.com"
                    className="text-[#c9a84c] underline decoration-[#c9a84c]/40 underline-offset-4"
                  >
                    hello@jeweluxestudio.com
                  </a>
                  .
                </div>
              </div>
              <button
                type="button"
                onClick={() => setChatOpen(false)}
                className="grid h-8 w-8 place-items-center rounded-full border border-white/10 text-white/80 hover:text-white"
                aria-label="Close chat"
                data-cursor="pointer"
              >
                <svg
                  width="16"
                  height="16"
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
          </div>
        ) : null}

        <button
          type="button"
          onClick={() => setChatOpen((s) => !s)}
          className="grid h-14 w-14 place-items-center rounded-full bg-[#c9a84c] shadow-2xl shadow-black/60 transition-transform hover:-translate-y-[1px]"
          aria-label="Open chat"
          data-cursor="pointer"
        >
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20 12c0 3.866-3.582 7-8 7-1.042 0-2.038-.148-2.952-.418L4 20l1.2-3.2C4.44 15.71 4 13.92 4 12c0-3.866 3.582-7 8-7s8 3.134 8 7Z"
              fill="white"
              fillOpacity="0.92"
            />
            <path
              d="M8.3 12h.01M12 12h.01M15.7 12h.01"
              stroke="#0a0a0a"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </button>
      </div>
    </section>
  );
}

function Label({ text, required }) {
  return (
    <div
      className="text-xs font-semibold uppercase tracking-[0.22em] text-white/70"
      style={{ fontFamily: "var(--font-body)" }}
    >
      {text}{" "}
      {required ? <span className="text-[#c9a84c]">*</span> : <span />}
    </div>
  );
}

function Error({ text }) {
  return (
    <div
      className="mt-2 text-xs font-medium text-[#c9a84c]"
      style={{ fontFamily: "var(--font-body)" }}
    >
      {text}
    </div>
  );
}

function Field({ label, required, value, onChange, error, type = "text" }) {
  return (
    <div>
      <Label text={label} required={required} />
      <input
        type={type}
        value={value}
        onChange={onChange}
        className="mt-2 w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white outline-none transition-colors focus:border-[#c9a84c]/70"
        style={{ fontFamily: "var(--font-body)" }}
      />
      {error ? <Error text={error} /> : null}
    </div>
  );
}

