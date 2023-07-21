import Accordion from "@/shared/Accordion";
import { FAQ_DATA } from "@/utils/constant";
import React from "react";

function FAQ() {
  return (
    <div className="flex flex-col md:flex-row  justify-between mb-10 md:mb-16 border-b border-solid gap-10 border-greyscale6 md:gap-0 pb-6 md:pb-0">
      <div className="md:w-[714px]">
        <h2 className="text-greyscale2 md:text-2xl md:mb-8  text-lg font-semibold mb-6 ">
          Frequently asked questions
        </h2>

        {FAQ_DATA.map((faq, i) => {
          return (
            <Accordion
              key={i}
              question={faq.question}
              answer={faq.answer}
              lastFAQ={i === FAQ_DATA.length - 1}
            />
          );
        })}
      </div>
    </div>
  );
}

export default FAQ;
