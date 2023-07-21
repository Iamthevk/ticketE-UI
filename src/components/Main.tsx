import AdditionalInfo from "@/ui_components/AdditionalInfo";
import EnterDetails from "@/ui_components/EnterDetails";
import React from "react";

function Main() {
  return (
    <div
      className={`flex justify-between md:flex-row flex-col-reverse mt-10 md:mt-24 pb-6 mb-10 md:mb-16 border-b border-solid border-greyscale6`}
    >
      <div className="md:border-r md:border-solid md:border-light-gray md:pr-6 mt-10 md:mt-0">
        <EnterDetails />
        <AdditionalInfo />
      </div>
    </div>
  );
}

export default Main;
