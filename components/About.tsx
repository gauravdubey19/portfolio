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
import BlobbyEffect from "./myui/BlobbyEffect";

export default function About({
  devName,
  resume,
}: {
  devName: string;
  resume: string;
}) {
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
              <BlobbyEffect
                img="/assets/sb.jpeg"
                className="h-[30rem] w-[30rem] hover:drop-shadow-lg ease-in-out duration-300"
              />
            }
            componentMobile={
              <BlobbyEffect
                img="/assets/sb.jpeg"
                className="h-[20rem] w-[20rem] drop-shadow-lg"
              />
            }
          />
        </div>
        <div className="w-[89%] md:w-[650px] lg:w-[50%] h-full flex justify-center flex-col md:text-[15px] mx-auto my-5 md:my-0 md:px-10 md:-ml-10 overflow-hidden">
          <p className="a_text">
            My name is{" "}
            <Link
              href="https://github.com/SrizaBiswas"
              target="_blank"
              className="link text-[cyan] relative pb-[1.5px] after:content-[''] after:absolute after:w-0 after:h-px after:inline-block after:bg-[cyan] after:transition-[0.3s] after:left-0 after:bottom-0 hover:after:w-full"
              rel="noreferrer"
            >
              {devName}
            </Link>{" "}
            who likes reading stories.....
          </p>
          <p className="a_text">more about me...</p>
          <Link href={resume} target="_blank" className="w-full md:w-fit">
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
