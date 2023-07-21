import AdditionalInfo from "@/ui_components/AdditionalInfo";
import ConfirmPay from "@/ui_components/ConfirmPay";
import EnterDetails from "@/ui_components/EnterDetails";
import PaymentMode from "@/ui_components/PaymentMode";
import React from "react";
import Sidebar from "./Sidebar";

function Main() {
  return (
    <div
      className={`flex justify-around md:flex-row flex-col-reverse mt-10 md:mt-24 pb-6 mb-10 md:mb-16 border-b border-solid border-greyscale6`}
    >
      <div className="md:border-r md:border-solid md:border-greyscale6 md:pr-6 mt-10 md:mt-0">
        <EnterDetails />
        <AdditionalInfo />
        <PaymentMode />
        <ConfirmPay />
      </div>
      <Sidebar />
    </div>
  );
}

export default Main;
