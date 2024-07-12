"use client";
import Image from "next/image";
import React from "react";
import clsx from "clsx";
import { useState } from "react";

const items = [
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept all major credit cards, PayPal and various other payment methods depending on your location. Please contact our support team for more information on accepted payment methods in your region",
  },
  {
    question: "How does the pricing work for teams?",
    answer:
      "Our pricing is per person, per month. This means you only pay for the number of team members you have on your account. Discounts are available for larger teams and annual subsciptions",
  },
  {
    question: "Can I change my plan later?",
    answer:
      "Yes, you can upgrade or downgrade your plan at any time. Changes to your plan will be prorated and reflected in your next billing section.",
  },
  {
    question: "Is my data secure?",
    answer:
      "Secutity is our top priority. We use state-of-the-art encryption and comply with the best industry practices to ensure that your data is storeed securely and accesed only by authorized users.",
  },
];

const AccordionItem = ({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div
      key={question}
      className="py-7 border-b border-white/30 cursor-pointer"
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="flex items-center">
        <span className="flex-1 text-lg font-bold">{question}</span>
        {isOpen ? (
          <Image
            src="/assets/icons/minus.png"
            alt="plus"
            width={18.75}
            height={18.75}
          />
        ) : (
          <Image
            src="/assets/icons/plus.svg"
            alt="plus"
            width={18.75}
            height={18.75}
          />
        )}
      </div>
      <div className={clsx("mt-4", { hidden: !isOpen, "": isOpen === true })}>
        {answer}
      </div>
    </div>
  );
};

const FAQs = () => {
  return (
    <div className="bg-black text-white custom_gradient2 py-[72px] sm:py-24">
      <div className="container">
        <h2 className="text-center text-5xl sm:text-6xl sm:max-w-[648px] mx-auto font-bold tracking-tighter">
          Frequently asked questions
        </h2>
        <div className="mt-12 max-w-[648px] mx-auto">
          {items.map(({ question, answer }) => (
            <AccordionItem question={question} answer={answer} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQs;
