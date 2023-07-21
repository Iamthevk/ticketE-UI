import React from "react";
import Header from "@/shared/Header";
import Input from "@/shared/Input";
import Image from "next/image";

function EnterDetails() {
  return (
    <div>
      <h1 className="text-greyscale2 text-5xl font-semibold mb-16 hidden md:block">
        Confirm and pay
      </h1>

      <Header
        heading="Enter your details"
        paragraph="We'll be sending your tickets to the details below. Booking for a friend? Add their details."
      />
      <div className="relative py-2 grid md:grid-cols-2 gap-6 mb-11">
        <Input type="text" name="<Full Name>" placeholder="Tickete Inc" />
        <Input
          type="number"
          name="<Phone number>"
          placeholder="         +85 2345345678"
        />
        <span className="absolute md:right-[330px] md:top-7">
          <Image src={"hongkFlag.svg"} alt="flag" width={32} height={24} />
        </span>
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
  );
}

export default EnterDetails;