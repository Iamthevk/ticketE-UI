"use client";
import React from "react";
import Image from "next/image";

function Navbar() {
  return (
    <nav
      className={`py-6 items-center justify-between bg-white fixed top-0 z-10 w-full pr-60 hidden md:flex md:mb-20`}
    >
      <Image src="logo.svg" alt="logo" width={76} height={24} />
      <div className="flex gap-2">
        <Image src="question.svg" alt="logo" width={20} height={20} />
        <span className="text-primary-500 hidden md:inline-block">Help</span>
      </div>
    </nav>
  );
}

export default Navbar;
