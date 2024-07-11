import Image from "next/image";
import React from "react";

const features = [
  {
    title: "Integration ecosystem",
    description:
      "Enhance your productivity by connecting with your favorite tools, keeping all your essentials in one place.",
  },
  {
    title: "Goal setting and tracking",
    description:
      "Define and track your goals, breaking down objectives into achievable tasks to keep your targets in sight.",
  },
  {
    title: "Secure data encryption",
    description:
      "With end-to-end encryption, your data is securely stored and protected from unauthorized access.",
  },
];

const Features = () => {
  return (
    <div className="bg-black text-white py-[72px] sm:py-24">
      <div className="flex flex-col container ">
        <div className="flex flex-col">
          <h1 className="text-center font-bold text-5xl sm:text-6xl tracking-tighter">
            Everything you need
          </h1>
          <p className="text-center mt-5 text-xl text-white/70">
            Enjoy customizable lists, team work tools, and smart{" "}
            <br className="hidden sm:block" /> tracking all in one place. Set
            tasks, get reminders, and <br className="hidden sm:block" /> see
            your progress simply and quickly.
          </p>
        </div>
        <div className="flex">
          <div className="flex flex-col sm:flex-row mt-16 gap-4">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex flex-col border border-white/30 px-5 py-10 text-center rounded-xl sm:flex-1"
              >
                <div className="inline-flex justify-center items-center rounded-lg">
                  <Image
                    src="/assets/icons/ecosystem.svg"
                    alt="logoEco"
                    width={56}
                    height={56}
                  />
                </div>
                <h3 className="mt-6 font-bold">{feature.title}</h3>
                <p className="mt-2 text-white/70">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
