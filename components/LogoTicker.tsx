import Image from "next/image";
import React from "react";

const images = [
  "/assets/images/acme.png",
  "/assets/images/quantum.png",
  "/assets/images/echo.png",
  "/assets/images/celestial.png",
  "/assets/images/pulse.png",
  "/assets/images/apex.png",
];

const LogoTicker = () => {
  return (
    <div className="bg-black text-white py-[72px] sm:py-24">
      <div className="container">
        <h2 className="text-lg sm:text-xl text-center text-white/70">
          Trusted by the world’s most <br className="block sm:hidden" />{" "}
          innovative teams
        </h2>
        <div className="overflow-hidden mt-10">
          <ul className="flex flex-wrap gap-12 items-center justify-center">
            {images.map((image, index) => (
              <li key={index}>
                <Image
                  src={image}
                  alt="logos"
                  height={32}
                  width={140}
                  className="flex-none"
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default LogoTicker;
