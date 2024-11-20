import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login",
};

import React, { ReactNode } from "react";
import Image from "next/image";
import logo from "../../../public/logo.png";

const LoginLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <section className="h-[100vh] bg-light-shade-white md:bg-loginBG md:bg-right bg-none dark:bg-dark-black bg-no-repeat">
        <div className="flex py-2 ml-2 justify-center">
          <div className="w-6 mr-2 ">
            <Image src={logo} alt="Logo" className="" />
          </div>
          <h1 className="text-xl dark:text-light-shade-white">Akontability</h1>
        </div>
        {children}
      </section>
    </>
  );
};

export default LoginLayout;
