import React from "react";
import Header from "@/shared/Header";
import Input from "@/shared/Input";
import Image from "next/image";

function AdditionalInfo() {
  return (
    <div>
      <Header
        heading="Additional information"
        paragraph="We need a few more details to complete your reservation."
        className="pb-6"
      />
      <div className="relative grid md:grid-cols-2">
        <Input type="text" name="<Full Name>" placeholder="<Custom Input>" />
        <Input type="text" name="<dropdown>" placeholder="<dropdown>" />
        <span className="absolute right-6 top-6">
          <Image
            src={"down-arrow.svg"}
            alt="down-arrow"
            width={24}
            height={24}
          />
        </span>
      </div>
    </div>
  );
}

export default AdditionalInfo;
