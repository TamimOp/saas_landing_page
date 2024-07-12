import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <footer className="py-5 bg-black text-white/60 border-t border-white/20">
      <div className="container">
        <div className="flex flex-col sm:flex-row gap-4 sm:justify-between">
          <h4 className="text-center">
            @ 2024 Your Company, Inc. All rights reserved
          </h4>
          <ul className="flex justify-center gap-2.5 ">
            <li>
              <Image
                src="/assets/icons/x-social.svg"
                alt="Twiter"
                width={18}
                height={18}
              />
            </li>
            <li>
              <Image
                src="/assets/icons/insta.svg"
                alt="Instagram"
                width={18}
                height={18}
              />
            </li>
            <li>
              <Image
                src="/assets/icons/pinterest.svg"
                alt="Pinterest"
                width={18}
                height={18}
              />
            </li>
            <li>
              <Image
                src="/assets/icons/linkedin.svg"
                alt="Linkedin"
                width={18}
                height={24}
              />
            </li>
            <li>
              <Image
                src="/assets/icons/tiktok.svg"
                alt="Tiktok"
                width={18}
                height={18}
              />
            </li>
            <li>
              <Image
                src="/assets/icons/youtube.svg"
                alt="Youtube"
                width={18}
                height={18}
              />
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
