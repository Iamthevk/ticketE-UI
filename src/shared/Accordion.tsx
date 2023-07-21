"use client";
import React, { useState } from "react";
import Image from "next/image";

interface AccordionProps {
  question: string;
  answer: string;
  lastFAQ: Boolean;
}

const Accordion: React.FC<AccordionProps> = ({ question, answer, lastFAQ }) => {
  const [visible, setVisible] = useState(false);

  const handleClick = () => {
    setVisible(!visible);
  };

  return (
    <div
      className={`pb-6  ${
        !lastFAQ ? "border-b mb-6" : ""
      } border-solid border-greyscale6`}
    >
      <div className="flex justify-between">
        <h3 className="text-greyscale2 text-sm md:text-lg font-semibold">
          {question}
        </h3>
        {visible ? (
          <Image
            src={"minus.svg"}
            alt="minus"
            width={24}
            height={24}
            onClick={handleClick}
            className="cursor-pointer"
          />
        ) : (
          <Image
            src={"plus.svg"}
            alt="minus"
            width={24}
            height={24}
            onClick={handleClick}
            className="cursor-pointer"
          />
        )}
      </div>
      <p
        className={`${
          visible
            ? "text-xs mt-3 md:text-base text-greyscale2  max-w-[90%]"
            : "hidden"
        }`}
      >
        {answer}
      </p>
    </div>
  );
};
export default Accordion;
