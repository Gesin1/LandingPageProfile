"use client";

import { images } from "@/lib/constants";
import Image from "next/image";
import { useEffect, useState } from "react";

const Carousel = () => {
  const [activeImage, setActiveImage] = useState(0);

  const clickNext = () => {
    activeImage === images.length - 1
      ? setActiveImage(0)
      : setActiveImage(activeImage + 1);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      clickNext();
    }, 5000);
    return () => {
      clearTimeout(timer);
    };
  }, [activeImage]);

  return (
    <div className="grid place-items-center grid-cols-1 mx-auto max-w-5xl shadow-2xl rounded-2xl">
      <div className="w-full flex justify-center items-centergap-4 transition-transform">
        {images.map((pic, idx) => (
          <div
            key={idx}
            className={`${
              idx === activeImage
                ? "block w-full h-[]80vh object-cover transition-all duration-1000 ease-in-out animate-fade-in"
                : "hidden animate-fade-out"
            }`}
          >
            <Image
              src={pic.src}
              alt={`${pic.name}`}
              width={300}
              height={100}
              className="rounded-xl w-[250px] h-[350px] sm:w-auto sm:h-[400px] md:w-[650px] md:h-[500px] lg:w-[400px] lg:h-[500px]"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
