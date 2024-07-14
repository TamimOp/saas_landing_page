"use client";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const ProductShowcase = () => {
  const appImage = useRef<HTMLImageElement>(null);
  const { scrollYProgress } = useScroll({
    target: appImage,
    offset: ["start end", "end end"],
  });
  const rotateX = useTransform(scrollYProgress, [0, 1], [15, 0]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0.5, 1]);
  return (
    <div className="bg-black text-white custom_gradient1 py-[72px] sm:py-24">
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
        <motion.div
          style={{
            opacity: opacity,
            rotateX: rotateX,
            transformPerspective: "800px",
          }}
        >
          <Image
            src="/assets/images/app-screen.png"
            alt="appScreen"
            width="0"
            height="0"
            sizes="100vw"
            className="w-full h-auto mt-14"
            ref={appImage}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default ProductShowcase;
