"use client";

import { useTheme } from "next-themes";
import React, { useEffect, useRef } from "react";

const Cursor = () => {
  const { theme } = useTheme();
  const circleRef = useRef<HTMLDivElement>(null);
  const m = useRef({ x: 0, y: 0 });
  const c = useRef({ x: 0, y: 0 });

  const speed = 0.17;

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      m.current.x = e.clientX;
      m.current.y = e.clientY;
    };

    window.addEventListener("mousemove", handleMouseMove);

    const tick = () => {
      c.current.x += (m.current.x - c.current.x) * speed;
      c.current.y += (m.current.y - c.current.y) * speed;

      if (circleRef.current) {
        const translateTransform = `translate(${c.current.x}px, ${c.current.y}px)`;
        circleRef.current.style.transform = translateTransform;
      }

      window.requestAnimationFrame(tick);
    };

    tick();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      ref={circleRef}
      className={`hidden lg:flex fixed ${
        theme === "dark"
          ? "shadow-[0rem_0rem_1rem_0.4rem_#fff]"
          : "shadow-[0rem_0rem_1rem_0.4rem_#000]"
      } pointer-events-none`}
      style={{ top: 0, left: 0 }}
    ></div>
  );
};

export default Cursor;
