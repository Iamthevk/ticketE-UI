import Header from "@/shared/Header";
import Input from "@/shared/Input";
import React from "react";

function Main() {
  return (
    <div
      className={`flex justify-between md:flex-row flex-col-reverse mt-10 md:mt-24 pb-6 mb-10 md:mb-16 border-b border-solid border-greyscale6`}
    >
      <div className="md:border-r md:border-solid md:border-light-gray md:pr-6 mt-10 md:mt-0">
        <h1 className="text-greyscale2 text-5xl font-semibold mb-16 hidden md:block">
          Confirm and pay
        </h1>

        <Header
          heading="Enter your details"
          paragraph="We'll be sending your tickets to the details below. Booking for a friend? Add their details."
        />
        <div className="relative py-2 grid md:grid-cols-2 gap-6 mb-11">
          <Input type="text" name="<Full Name>" placeholder="Enter Full Name" />
          <Input
            type="number"
            name="<Phone number>"
            placeholder="+919876543210"
          />
          <Input type="text" name="<Full name>" placeholder="hi@tickete.com" />
          <Input
            type="email"
            name="<Full Name>"
            placeholder="hi@tickete.com"
            border="!border-error"
          />
          <span className="absolute -bottom-3 left-[52%] text-error">
            ﹤error message＞
          </span>
        </div>
      </div>
    </div>
  );
}

export default Main;
