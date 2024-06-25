import React from "react";

interface ButtonGooeyProps {
  text: string;
  icon: React.ReactNode;
  clasName?: string;
}

const ButtonGooey: React.FC<ButtonGooeyProps> = ({ text, icon, clasName }) => {
  return (
    <>
      <div className={`${clasName} hidden md:flex`}>
        <div className="wrapper w-full h-full flex-center hover:scale-105 active:scale-95 active:translate-y-1 ease-in-out duration-200">
          <button className="button">
            {text}
            <div className="bubble">{icon}</div>
          </button>
        </div>

        <svg
          className="absolute hidden"
          width="0"
          height="0"
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
        >
          <defs>
            <filter id="gooey">
              <feGaussianBlur
                in="SourceGraphic"
                stdDeviation="10"
                result="blur"
              />
              <feColorMatrix
                in="blur"
                mode="matrix"
                values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 20 -10"
                result="gooey"
              />
              <feComposite in="SourceGraphic" in2="gooey" operator="atop" />
            </filter>
          </defs>
        </svg>
      </div>
    </>
  );
};

export default ButtonGooey;
