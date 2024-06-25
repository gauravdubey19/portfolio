import Image from "next/image";
import React from "react";

export default function BlobbyEffect({
  img,
  className,
}: {
  img: string;
  className: string;
}) {
  return (
    <>
      <div className={`${className} bg_cover animate-liquid overflow-hidden`}>
        <Image src={img} alt="sb" width={500} height={500} className="w-full" />
      </div>
    </>
  );
}
