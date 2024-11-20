import React from "react";
import Image from "next/image";
import Link from "next/link";
import NavBar from "./NavBar";
import { twMerge } from "tailwind-merge";

const Header = ({ className }: { className?: string }) => {
  return (
    <header
      className={twMerge(
        `flex items-center justify-between p-2 text-white w-full flex-wrap bg-default-blue ${className}`,
      )}
    >
      <Link
        href="/"
        className="text-xl flex items-center flex-wrap text-center"
      >
        <div className="w-14">
          <Image
            alt="Logo"
            src="/logo-no-background-cropped.svg"
            width={1500}
            height={1500}
            priority
          />
        </div>
        <h3>Akontability</h3>
      </Link>
      <NavBar />
    </header>
  );
};

export default Header;
