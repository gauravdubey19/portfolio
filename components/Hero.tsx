"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";
import TextEffect from "./myui/TextEffect";
import { useSectionInView } from "@/lib/hooks";
import MagneticDiv from "./myui/MagnaticDiv";
import Particles from "./myui/particles";

const Hero = ({ devName, desc }: { devName: string; desc: string }) => {
  const { ref } = useSectionInView("home");
  const { theme } = useTheme();
  const [color, setColor] = useState<string>("#ffffff");

  const handleClick = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    setColor(theme === "dark" ? "#dfe7f3" : "#000300");
  }, [theme]);

  return (
    <section
      ref={ref}
      id="home"
      className="select-none relative w-full h-screen flex-center bg-background p-4"
    >
      <motion.div
        initial={{ y: -100, x: 0, opacity: 0 }}
        animate={{ y: 0, x: 0, opacity: 1 }}
        className="z-10"
      >
        <span className="hidden md:flex">
          <TextEffect>{devName}</TextEffect>
        </span>
        <span className="md:hidden text-center select-none cursor-none relative block text-7xl md:text-8xl lg:text-9xl text-balance whitespace-nowrap font-black uppercase">
          {devName}
        </span>
        <p className="text-md text-center font-light mt-4 ttext">{desc}</p>
      </motion.div>
      <div className="absolute bottom-0 z-10 w-full lg:w-96 p-4 group flex-center">
        <MagneticDiv
          className="w-full ease-in-out duration-1000"
          component={
            <span
              onClick={handleClick}
              className="flex-center cursor-pointer w-40 h-40 bg-transparent backdrop-blur-sm rounded-full hover:text-cyan-300 group-hover:w-52 group-hover:h-52 group-hover:backdrop-blur-md group-hover:shadow-[0_0_20px_rgba(0,0,0,0.5)] ease-in-out duration-300"
            >
              Explore More
            </span>
          }
          componentMobile={
            <span
              onClick={handleClick}
              className="flex-center w-40 h-40 bg-transparent backdrop-blur-md rounded-full active:text-cyan-300 active:w-52 active:h-52 shadow-[0_0_20px_rgba(0,0,0,0.5)] ease-in-out duration-300"
            >
              Explore More
            </span>
          }
        />
      </div>
      <Particles
        className="absolute inset-0"
        quantity={300}
        ease={20}
        color={color}
        refresh
      />
    </section>
  );
};

export default Hero;
