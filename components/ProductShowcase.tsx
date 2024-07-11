import Image from "next/image";
import React from "react";

const ProductShowcase = () => {
  return (
    <div className="bg-black text-white gradient_bg py-[72px] sm:py-24">
      <div className="container items-center">
        <div className="flex flex-col">
          <h2 className="text-center font-bold text-5xl sm:text-6xl tracking-tighter">
            Intuitive interface
          </h2>
          <p className="text-xl text-center text-white/70 mt-5">
            Celebrate the joy of accomplishment with an app{" "}
            <br className="hidden sm:block" /> designed to track your progress,
            motivate your efforts, <br className="hidden sm:block" /> and
            celebrate your successes, one task at a time.
          </p>
        </div>
        <div className="mt-14">
          <Image
            src="/assets/images/app-screen.png"
            alt="appScreen"
            width="0"
            height="0"
            sizes="100vw"
            className="w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default ProductShowcase;
