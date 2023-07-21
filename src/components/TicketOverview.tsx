import Image from "next/image";
import React from "react";

function TicketOverview() {
  return (
    <div className="sm:w-[360px] w-full text-greyscale2">
      <h3 className="font-semibold text-lg mb-8">Tickets overview</h3>
      <div className="flex items-center justify-between mb-4">
        <span>{"<pax type>"}</span>
        <span>Rs. 1111</span>
      </div>
      <div className="flex items-center justify-between mb-4">
        <span>{"<pax type>"}</span>
        <span>Rs. 111</span>
      </div>
      <div className="flex items-center justify-between mb-4">
        <span>{"<fee>"}</span>
        <span>Rs. 111</span>
      </div>
      <div className="flex items-center justify-between mb-4 text-[#006642]">
        <span>{"<discount applied>"}</span>
        <span>Rs. - 222</span>
      </div>

      <div className="py-6 flex items-center gap-3 border-y border-solid border-greyscale6 text-sm font-semibold  mb-6">
        <Image src={"promo-tag.svg"} alt="promo-tag" width={20} height={20} />
        <span className="font-semibold underline text-[#006642] text-sm">
          Have a promo code?
        </span>
      </div>

      <div className="flex items-center justify-between font-semibold mb-1">
        <span>Total</span>
        <span>Rs. 1111</span>
      </div>
      <span className="text-greyscale3 text-xs underline">
        You will pay in INR
      </span>

      <div className="text-sm rounded-xl bg-[#f5f5f5] py-4 px-5 mt-6">
        <span className="font-semibold block mb-1">Free cancellation</span>
        <span className="text-greyscale3">
          Cancel before 31/07/2023 for a full refund
        </span>
      </div>
    </div>
  );
}

export default TicketOverview;
