"use client";

import { useEffect, useRef, useState } from "react";

function isDesktopFinePointer() {
  if (typeof window === "undefined") return false;
  return (
    window.matchMedia &&
    window.matchMedia("(hover: hover) and (pointer: fine)").matches
  );
}

export default function CustomCursor() {
  const cursorRef = useRef(null);
  const rafRef = useRef(null);
  const targetRef = useRef({ x: -999, y: -999 });
  const posRef = useRef({ x: -999, y: -999 });
  const hoveringRef = useRef(false);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (!isDesktopFinePointer()) {
      setEnabled(false);
      return;
    }
    setEnabled(true);

    const el = cursorRef.current;
    if (!el) return;

    const setHovering = (next) => {
      hoveringRef.current = next;
      el.classList.toggle("is-hovering", next);
    };

    const isClickable = (node) => {
      if (!node || !(node instanceof Element)) return false;
      return Boolean(
        node.closest(
          'a, button, [role="button"], [data-cursor="pointer"], input[type="submit"], input[type="button"], summary'
        )
      );
    };

    const onMove = (e) => {
      targetRef.current.x = e.clientX;
      targetRef.current.y = e.clientY;
      el.classList.add("is-visible");
    };

    const onLeave = () => {
      el.classList.remove("is-visible");
      targetRef.current.x = -999;
      targetRef.current.y = -999;
    };

    const onOver = (e) => setHovering(isClickable(e.target));
    const onDown = () => {
      // Keep cursor visible during clicks/drags
      el.classList.add("is-visible");
    };
    const onUp = () => {
      el.classList.add("is-visible");
    };

    const tick = () => {
      const { x: tx, y: ty } = targetRef.current;
      const p = posRef.current;
      const ease = hoveringRef.current ? 0.22 : 0.18;
      p.x += (tx - p.x) * ease;
      p.y += (ty - p.y) * ease;
      el.style.transform = `translate3d(${p.x}px, ${p.y}px, 0)`;
      rafRef.current = requestAnimationFrame(tick);
    };

    document.addEventListener("mousemove", onMove, { passive: true });
    document.addEventListener("mouseover", onOver, { passive: true });
    document.addEventListener("mousedown", onDown, { passive: true });
    document.addEventListener("mouseup", onUp, { passive: true });
    window.addEventListener("mouseleave", onLeave);

    rafRef.current = requestAnimationFrame(tick);

    const mq = window.matchMedia("(hover: hover) and (pointer: fine)");
    const onMQ = () => setEnabled(mq.matches);
    mq.addEventListener?.("change", onMQ);

    return () => {
      document.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseover", onOver);
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("mouseup", onUp);
      window.removeEventListener("mouseleave", onLeave);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      mq.removeEventListener?.("change", onMQ);
    };
  }, []);

  if (!enabled) return null;

  return (
    <div ref={cursorRef} className="jlx-cursor">
      <div className="jlx-cursor__dot" />
      <div className="jlx-cursor__ring">
        <div className="jlx-cursor__view">VIEW</div>
      </div>
    </div>
  );
}

