import Image from "next/image";
import React from "react";

function HelpSection() {
  return (
    <div className="md:w-[360px] h-48 w-full bg-[#fff7ed] flex justify-between items-start rounded-xl py-8 px-6 text-[#7f2d07]">
      <div className="w-64">
        <span className="text-lg font-semibold block mb-1">Need help?</span>
        <span className="text-sm md:text-base">
          We&apos;re here to help, 24*7
        </span>
        <button className="font-semibold px-6 py-2 rounded-xl border border-solid border-[#7f2d07] mt-6">
          Chat with us
        </button>
      </div>
      <Image
        src={"chats-circle.svg"}
        alt="chat-circle"
        width={48}
        height={48}
      />
    </div>
  );
}

export default HelpSection;
