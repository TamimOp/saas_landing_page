import React from "react";
import Feature from "./Feature";

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
            {features.map(({ title, description }) => (
              <Feature title={title} description={description} key={title} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
