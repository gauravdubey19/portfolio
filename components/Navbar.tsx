"use client";

import React from "react";
import { motion } from "framer-motion";
import { links } from "@/lib/data";
import Link from "next/link";
import clsx from "clsx";
import { useActiveSectionContext } from "@/context/ActiveSectionContext";

export default function Navbar({ devName }: { devName: string }) {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();

  return (
    <header className="z-[999] relative">
      <motion.div
        className="fixed top-0 left-1/2 h-[3rem] w-full bg-[#0000002c] rounded-none shadow-[0_0_20px_rgba(0,0,0,0.5)] backdrop-blur-[0.5rem] sm:top-6 sm:h-[3.25rem] sm:w-[36rem] sm:rounded-full"
        initial={{ y: -100, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
      ></motion.div>

      <nav className="fixed top-[0.15rem] left-1/2 h-12 flex-center -translate-x-1/2 p-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0">
        <ul className="w-[20rem] flex flex-wrap gap-y-1 text-[0.9rem] font-medium sm:w-[initial] sm:flex-nowrap sm:gap-5">
          {links.map((link) => (
            <motion.li
              className="h-3/4 flex-center relative ttext"
              key={link?.hash}
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
            >
              <Link
                className={clsx(
                  {
                    "text-[cyan]": activeSection === link?.name,
                  },
                  "capitalize w-full flex-center px-3 py-3 transition hover:text-gray-300"
                )}
                href={link?.hash}
                onClick={() => {
                  setActiveSection(link?.name);
                  setTimeOfLastClick(Date.now());
                }}
              >
                {link?.name === "home" ? (
                  <span className="text-xl -mt-[2px]">{devName}</span>
                ) : (
                  link?.name
                )}

                {link?.name === activeSection && (
                  <motion.span
                    className="bbg rounded-full absolute top-2 bottom-2 inset-0 -z-10"
                    layoutId="activeSection"
                    transition={{
                      type: "spring",
                      stiffness: 380,
                      damping: 30,
                    }}
                  ></motion.span>
                )}
              </Link>
            </motion.li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
