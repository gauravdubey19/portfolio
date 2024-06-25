"use client";

import React, { useState } from "react";
import { useTheme } from "next-themes";
import { BsMoon, BsSun } from "react-icons/bs";
import MagneticDiv from "./myui/MagnaticDiv";
import Image from "next/image";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [visible, setVisible] = useState<Boolean>(true);

  return (
    <>
      <div className="relative">
        {visible && (
          <div className="fixed bottom-20 right-2 animate-bounce flex items-end flex-col">
            <span className="text-sm font-light text-[cyan]">Toggle Theme</span>
            <Image
              src="/assets/arrow.png"
              alt="arrow"
              width={50}
              height={50}
              className="w-10 drop-shadow-lg"
            />
          </div>
        )}
        <div className="z-[999] fixed bottom-2 right-2 flex-center bg-transparent">
          <MagneticDiv
            className="w-full p-2 md:p-4 ease-in-out duration-1000"
            component={
              <button
                className="flex-center group bg-[#0000004d] w-[3rem] h-[3rem] backdrop-blur-[0.5rem] shadow-[0_0_20px_rgba(0,0,0,0.5)] rounded-full hover:scale-[1.15] active:scale-105 transition-all"
                onClick={() => {
                  setTheme(theme === "light" ? "dark" : "light");
                  setVisible(false);
                }}
              >
                {theme === "light" ? (
                  <BsMoon className="group-hover:fill-cyan-300" />
                ) : (
                  <BsSun className="group-hover:fill-orange-400" />
                )}
              </button>
            }
            componentMobile={
              <button
                className="flex-center bg-[#0000004d] w-[3rem] h-[3rem] bg-opacity-80 backdrop-blur-[0.5rem] shadow-[0_0_20px_rgba(0,0,0,0.5)] rounded-full hover:scale-[1.15] active:scale-105 transition-all"
                onClick={() => {
                  setTheme(theme === "light" ? "dark" : "light");
                  setVisible(false);
                }}
              >
                {theme === "light" ? (
                  <BsMoon className="fill-cyan-300" />
                ) : (
                  <BsSun className="fill-orange-400" />
                )}
              </button>
            }
          />
        </div>
      </div>
    </>
  );
}
