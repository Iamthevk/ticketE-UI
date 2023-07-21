import React from "react";
import Image from "next/image";

function SidebarHeader() {
  return (
    <div className="max-w-[360px] border-b border-solid border-greyscale6 text-greyscale2 font-semibold ">
      <div className="w-full mb-3">
        <h1 className="text-greyscale2 text-3xl font-semibold mb-16 md:hidden">
          Confirm and pay
        </h1>
        <Image
          className="w-full rounded-xl"
          src={"/images/profile-desktop.png"}
          alt="women"
          width={360}
          height={230}
        />
      </div>

      <h3 className="text-lg">
        Amsterdam opeg boat canal cruise - Live Ggide - from Anne Frgnk House
      </h3>
      <div className="flex flex-col gap-3 my-6">
        <div className="flex items-center gap-4">
          <Image src={"ticket.svg"} alt="ticket" width={24} height={24} />
          <span>﹤variant name﹥</span>
        </div>
        <div className="flex items-center gap-4">
          <Image
            src={"calendar-blank.svg"}
            alt="ticket"
            width={24}
            height={24}
          />
          <span>21/JULY/2023</span>
        </div>
        <div className="flex items-center gap-4">
          <Image src={"clock.svg"} alt="ticket" width={24} height={24} />
          <span>15:55 PM</span>
        </div>
      </div>
    </div>
  );
}

export default SidebarHeader;
