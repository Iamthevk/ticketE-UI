import React from "react";
import Header from "@/shared/Header";
import Input from "@/shared/Input";

function AdditionalInfo() {
  return (
    <div>
      <Header
        heading="Additional information"
        paragraph="We need a few more details to complete your reservation."
        className="pb-6"
      />
      <div className="grid md:grid-cols-2">
        <Input type="text" name="Full Name" placeholder="<Custom Input>" />
        <Input type="text" name="<dropdown>" placeholder="<dropdown>" />
      </div>
    </div>
  );
}

export default AdditionalInfo;
