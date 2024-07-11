import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div className="bg-black text-white gradient_bg py-[72px] sm:py-24 relative overflow-clip">
      <div className="absolute bg-black h-[375px] w-[750px] sm:w-[1536px] sm:h-[768px] lg:w-[2400px] lg:h-[1200px] rounded-[100%] left-1/2 -translate-x-1/2 border border-[#B48CDE] radial_gradient top-[calc(100%-96px)] sm:top-[calc(100%-120px)]"></div>
      <div className="container flex flex-col items-center justify-center relative">
        <a
          href="#"
          className="inline-flex gap-2 border py-1 px-2 rounded-lg border-white/30 mb-8"
        >
          <span className="gradient_logo text-transparent bg-clip-text">
            Version 2.0 is here
          </span>
          <span>Read more</span>
          <Image
            src="/assets/icons/arrow-w.svg"
            alt="arrow"
            width={16}
            height={16}
          />
        </a>
        <div className="inline-flex relative">
          <h1 className="text-7xl sm:text-9xl font-bold text-center tracking-tighter">
            One Task <br /> at a Time
          </h1>
          <Image
            src="/assets/images/cursor.png"
            alt="cursor"
            width={200}
            height={200}
            className="absolute right-[476px] top-[108px] hidden sm:inline"
          />
          <Image
            src="/assets/images/message.png"
            alt="message"
            width={200}
            height={200}
            className="absolute top-[56px] left-[498px] hidden sm:inline"
          />
        </div>
        <p className="text-center text-xl mt-8">
          Celebrate the joy of accomplishment with an{" "}
          <br className="hidden sm:inline" /> app designed to track your
          progress, motivate <br className="hidden sm:inline" /> your efforts,
          and celebrate your successes.
        </p>
        <button className="bg-white text-black rounded-lg py-3 px-5 mt-8 font-medium">
          Get for free
        </button>
      </div>
    </div>
  );
};

export default Hero;
