import React from "react";
import TextEffect from "./TextEffect";

type SectionHeadingProps = {
  children: React.ReactNode;
  className?: string;
};

export default function SectionHeading({
  children,
  className,
}: SectionHeadingProps) {
  return (
    <>
      <div className={className}>
        <TextEffect textSize="text-xl sm:text-2xl md:text-3xl lg:text-4xl">
          {children}
        </TextEffect>
      </div>
    </>
  );
}
