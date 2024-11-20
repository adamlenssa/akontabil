import { Metadata } from "next";
import Image from "next/image";
import React, { ReactNode } from "react";
import logo from "../../../public/logo.png";

export const metadata: Metadata = {
  title: "Register",
};

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <header className="flex py-2 justify-center ">
        <div className="w-6 mr-2 ">
          <Image src={logo} alt="Logo" className="" />
        </div>
        <h1 className="text-xl dark:text-light-shade-white">Akontability</h1>
      </header>
      <section className="">{children}</section>
    </>
  );
};

export default layout;
