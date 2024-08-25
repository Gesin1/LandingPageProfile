import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import Image from "next/image";
import Carousel from "./Carousel";
import Button from "./ui/Button";
import { FaLocationArrow } from "react-icons/fa";

const Hero = () => {
  return (
    <div className="pb-28 pt-32 relative" id="home">
      <div>
        {/* Support light desgn */}
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="top-10 left-full h-[80vh] w-[50vw]"
          fill="purple"
        />
        <Spotlight className="top-28 left-80  h-[80vh] w-[50vw]" fill="blue" />
      </div>
      <div className="h-screen w-full dark:bg-black-100 bg-white  dark:bg-grid-white/[0.03] bg-grid-black/[0.3] flex items-center justify-center absolute top-0 left-0">
        {/* Radial gradient for the container to give a faded look */}
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>
      <div className="flex flex-col-reverse md:flex-row justify-between items-center gap-8 z-10 relative">
        <div className="flex flex-col items-center justify-center relative">
          <h2 className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
            welcome to my portfolio
          </h2>
          <TextGenerateEffect
            className="text-center text-[30px] md:text-5xl lg:text-6xl max-w-[650px]"
            words="Transforming Ideas into Interactive Experiences"
          />
          <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl text-blue-100 max-w-[600px]">
            Hi, I&apos;m Gbadegesin, a Frontend Developer base in Nigeria
          </p>
          <a href="/">
            <Button
              title="Check my CV"
              icon={<FaLocationArrow />}
              position="right"
            />
          </a>
        </div>
        <div
          className="p-8 border border-gray-700 rounded-2xl lg:px-12 lg:py-10"
          style={{
            background: "rgb(4,7,29)",
            backgroundColor:
              "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%,",
          }}
        >
          <Carousel />
        </div>
      </div>
    </div>
  );
};

export default Hero;
