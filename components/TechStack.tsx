"use client";

import { useSectionInView } from "@/lib/hooks";
import IconCloud from "./myui/IconCloud";
import { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import SectionHeading from "./myui/SectionHeading";
import { slugs } from "@/lib/data";

export default function TechStack() {
  // const { ref } = useSectionInView("About");
  const refDiv = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: refDiv,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);
  return (
    <>
      <section
        // id="about"
        // ref={ref}
        className="relative w-full h-screen flex-center flex-col overflow-hidden"
      >
        <SectionHeading>Tech Stack</SectionHeading>
        <motion.div
          ref={refDiv}
          style={{
            scale: scaleProgess,
            opacity: opacityProgess,
          }}
          className=""
        >
          <IconCloud iconSlugs={slugs} />
        </motion.div>
      </section>
    </>
  );
}
