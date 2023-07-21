import React from "react";
import Image from "next/image";

function Navbar() {
  return (
    <nav className="py-6 flex items-center justify-between mx-11">
      <Image src="logo.svg" alt="logo" width={76} height={24} />
      <div className="flex gap-2">
        <Image src="question.svg" alt="logo" width={20} height={20} />
        <span className="text-primary-500 hidden md:inline-block">Help</span>
      </div>
    </nav>
  );
}

export default Navbar;
