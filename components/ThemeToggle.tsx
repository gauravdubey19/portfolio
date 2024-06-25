"use client";

import React from "react";
import { useTheme } from "next-themes";
import { BsMoon, BsSun } from "react-icons/bs";
import MagneticDiv from "./myui/MagnaticDiv";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <>
      <div className="z-[999] fixed bottom-2 right-2 flex-center bg-transparent">
        <MagneticDiv
          className="w-full p-2 md:p-4 ease-in-out duration-1000"
          component={
            <button
              className="flex-center group bg-[#0000004d] w-[3rem] h-[3rem] backdrop-blur-[0.5rem] shadow-[0_0_20px_rgba(0,0,0,0.5)] rounded-full hover:scale-[1.15] active:scale-105 transition-all"
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
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
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
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
    </>
  );
}
