"use client";

import React, { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import SectionHeading from "./myui/SectionHeading";
import ButtonGooey from "./myui/ButtonGooey";
import MagneticDiv from "./myui/MagnaticDiv";
import { motion, useScroll, useTransform } from "framer-motion";
import { GiCloudDownload } from "react-icons/gi";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("about");
  const refDiv = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: refDiv,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);
  return (
    <section
      ref={ref}
      id="about"
      className="relative w-full h-screen flex-center flex-col"
    >
      <SectionHeading className="mt-24">About Me</SectionHeading>

      <motion.div
        ref={refDiv}
        style={{
          scale: scaleProgess,
          opacity: opacityProgess,
        }}
        className="w-full h-full flex md:flex-center flex-col md:flex-row gap-2 md:gap-4"
      >
        <div className="w-full md:w-1/2 h-auto flex-center">
          <MagneticDiv
            className="w-full md:w-[75%] cursor-none ease-in-out duration-1000"
            component={
              <Image
                src="/assets/gd.png"
                alt="gd"
                width={400}
                height={500}
                className="w-full filter hover:drop-shadow-lg ease-in-out duration-500"
              />
            }
            componentMobile={
              <Image
                src="/assets/gd.png"
                alt="gd"
                width={400}
                height={500}
                className="w-full lg:hidden filter drop-shadow-lg"
              />
            }
          />
        </div>
        <div className="w-[89%] md:w-[650px] lg:w-[50%] h-full flex justify-center flex-col md:text-[15px] mx-auto my-5 md:my-0 md:px-10 md:-ml-10 overflow-hidden">
          <p className="a_text">
            My name is{" "}
            <Link
              href="https://www.linkedin.com/in/gauravdubey19/"
              target="_blank"
              className="link text-[cyan] relative pb-[1.5px] after:content-[''] after:absolute after:w-0 after:h-px after:inline-block after:bg-[cyan] after:transition-[0.3s] after:left-0 after:bottom-0 hover:after:w-full"
              rel="noreferrer"
            >
              Gaurav Dubey
            </Link>{" "}
            a budding full-stack developer who loves making great user
            experiences.
          </p>
          <p className="a_text">
            I&#39;m excited to keep learning and building awesome projects with
            new tech.
          </p>
          <Link
            // href="/assets/gauravDubeyResume.pdf"
            href="/#about"
            target="_blank"
            className="w-full md:w-fit"
          >
            <ButtonGooey
              text="Resume"
              icon={<GiCloudDownload size={20} className="animate-bounce" />}
            />

            <button role="button" className="md:hidden button-name">
              Resume
              <GiCloudDownload size={20} className="animate-bounce" />
            </button>
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
