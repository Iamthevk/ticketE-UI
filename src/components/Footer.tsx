import Image from "next/image";
import React from "react";
import Link from "next/link";

function Footer() {
  return (
    <footer className="bg-[#0a0a0a]">
      <div className="max-w-7xl pt-10 md:pt-16 mx-auto px-6 md:px-10">
        <Image
          src={"logo-dark.svg"}
          alt="footer-logo"
          width={127}
          height={40}
        />

        <div className="mt-10 md:mt-20 flex flex-col-reverse md:border-t border-greyscale5 md:flex-row md:items-center justify-between md:py-10 pb-10 gap-10 md:gap-0">
          <div className="flex flex-row items-center gap-4 text-xs md:text-base text-[#ebebeb]">
            <Link
              className="underline underline-offset-4 whitespace-nowrap"
              href="/"
            >
              &copy; Tickete Inc.
            </Link>
            <span className="font-bold text-2xl mb-2">.</span>
            <Link className="underline underline-offset-4" href="/">
              Privacy
            </Link>
            <span className="font-bold text-2xl mb-2">.</span>{" "}
            <Link className="underline underline-offset-4" href="/">
              Terms
            </Link>
            <span className="font-bold text-2xl mb-2">.</span>{" "}
            <Link
              className="hidden md:block underline underline-offset-4"
              href="/"
            >
              Cancellation policy
            </Link>
            <Link className="md:hidden underline underline-offset-4" href="/">
              Cancellation
            </Link>
          </div>
          <div className="flex items-center gap-3">
            <Link href="/">
              <Image
                src={"insta.svg"}
                alt="instagram-icon"
                width={20}
                height={20}
              />
            </Link>
            <Link href="/">
              <Image
                src={"facebook.svg"}
                alt="facebook-icon"
                width={20}
                height={20}
              />
            </Link>
            <Link href="/">
              <Image
                src={"twitter.svg"}
                alt="twitter-icon"
                width={20}
                height={20}
              />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
