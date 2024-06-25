"use client";

import React, { ReactNode } from "react";
import { motion } from "framer-motion";

interface FlipLinkProps {
  children: ReactNode;
  textSize?: string;
}

const DURATION = 0.25;
const STAGGER = 0.025;

const TextEffect: React.FC<FlipLinkProps> = ({
  children,
  textSize = "text-7xl md:text-8xl lg:text-9xl",
}) => {
  // Ensuring children is a string before attempting to split it
  const text = typeof children === "string" ? children : "";

  return (
    <motion.span
      initial="initial"
      whileHover="hovered"
      className={`select-none cursor-none relative block whitespace-nowrap font-black uppercase ${textSize} overflow-hidden`}
      style={{
        lineHeight: 0.75,
      }}
    >
      <div>
        {text.split("").map((l, i) => (
          <motion.span
            variants={{
              initial: {
                y: 0,
              },
              hovered: {
                y: "-100%",
              },
            }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER * i,
            }}
            className="inline-block"
            key={i}
            style={{ whiteSpace: l === " " ? "pre" : "normal" }}
          >
            {l}
          </motion.span>
        ))}
      </div>
      <div className="absolute inset-0">
        {text.split("").map((l, i) => (
          <motion.span
            variants={{
              initial: {
                y: "100%",
              },
              hovered: {
                y: 0,
              },
            }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER * i,
            }}
            className="inline-block"
            key={i}
            style={{ whiteSpace: l === " " ? "pre" : "normal" }}
          >
            {l}
          </motion.span>
        ))}
      </div>
    </motion.span>
  );
};

export default TextEffect;
