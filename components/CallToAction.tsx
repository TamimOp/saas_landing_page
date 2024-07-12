import Image from "next/image";
import React from "react";

const CallToAction = () => {
  return (
    <div className="bg-black text-white py-[72px] sm:py-24 text-center">
      <div className="container max-w-xl relative">
        <Image
          src="/assets/images/helix2.png"
          alt="helix"
          width={263}
          height={263}
          className="absolute top-6 left-[calc(100%+36px)]"
        />
        <Image
          src="/assets/images/emojistar.png"
          alt="emojistar"
          width={225}
          height={225}
          className="absolute -top-[120px] right-[calc(100%+24px)]"
        />
        <h1 className="font-bold text-5xl sm:text-6xl tracking-tighter">
          Get instant access
        </h1>
        <p className="text-xl text-white/70 mt-5">
          Celebrate the joy of accomplishment with an app designed to track your
          progress and motivate your efforts.
        </p>
        <form className="mt-10 flex flex-col gap-2.5 max-w-sm mx-auto sm:flex-row">
          <input
            type="email"
            placeholder="name@gmail.com"
            className="h-12 bg-white/20 rounded-lg px-5 font-medium placeholder:text-[#9CA3AF] sm:flex-1"
          />
          <button className="bg-white text-black h-12 rounded-lg px-5">
            Get access
          </button>
        </form>
      </div>
    </div>
  );
};

export default CallToAction;
