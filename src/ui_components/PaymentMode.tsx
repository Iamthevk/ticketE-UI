import Header from "@/shared/Header";
import React from "react";
import Image from "next/image";
import Input from "@/shared/Input";

function PaymentMode() {
  return (
    <div>
      <Header
        heading="Select your mode of payment"
        paragraph="Payments with Tickete are secure and encrypted."
        className="py-7"
      />
      <div className="flex justify-between pb-5 items-center">
        <div className="flex gap-5">
          <Image src={"creditcard.svg"} alt="cc" width={24} height={24} />
          <span className="font-semibold text-sm md:text-base text-greyscale2">
            Credit & debit card
          </span>
        </div>
        <Image src={"radio-button.svg"} alt="cc" width={24} height={24} />
      </div>
      <div className="relative py-2 grid md:grid-cols-2 gap-6 mb-11">
        <Input type="text" name="<Name on Card>" placeholder="Tickete Inc" />
        <Input
          type="number"
          name="<Card Number>"
          placeholder="1234 1234 1234 1234"
        />
        <span className="absolute top-28 right-2  md:right-3 md:top-4">
          <Image src={"visa.svg"} alt="visa" width={70} height={48} />
        </span>
        <Input type="text" name="<Expiry Date>" placeholder="06/26" />
        <Input type="email" name="<CVV/CVC>" placeholder="***" />
      </div>
    </div>
  );
}

export default PaymentMode;
