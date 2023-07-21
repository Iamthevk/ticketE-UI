import React from "react";
import Image from "next/image";

function ConfirmPay() {
  return (
    <>
      <div>
        <div className="flex  mb-10 py-6 border-y border-solid justify-between items-center border-greyscale6">
          <div className="flex items-center gap-5">
            <Image src={"klarna.svg"} alt="klarna" width={35} height={24} />
            <span className=" font-semibold text-sm md:text-base text-greyscale2">
              Klarna
            </span>
          </div>

          <Image src={"radio-empty.svg"} alt="radio" width={24} height={24} />
        </div>

        <div className="mb-10">
          <h2 className="text-lg md:text-2xl font-semibold mb-1 text-greyscale2">
            Total: 11,000
          </h2>
          <p className="text-xs text-greyscale3 underline">
            You will pay in Rupees
          </p>
        </div>

        <div className="bg-[#F5F5F5] rounded-lg flex items-center gap-3 p-4 mb-6">
          <Image src={"radio-button.svg"} alt="radio" width={16} height={16} />
          <span className=" text-greyscale2 text-xs font-semibold ">
            Receive travel tips, suggestions and offers in Delhi by email
          </span>
        </div>

        <div>
          <p className="text-xs text-greyscale3 mb-3">
            With payment, you agree to the general{" "}
            <span className="text-[#1733B6]">
              terms and conditions of Tickete
            </span>{" "}
            & the <span className="text-[#1733B6]">activity provider.</span>
          </p>

          <button className=" flex items-center justify-center gap-2 rounded-xl px-5 py-3 font-semibold text-white bg-[#0A0A0A] w-full md:w-auto">
            Confirm and pay
            <Image src={"shield.svg"} alt="radio" width={20} height={20} />
          </button>
        </div>
      </div>
    </>
  );
}

export default ConfirmPay;
