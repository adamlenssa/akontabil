import Image from "next/image";
import React from "react";

const NotFound = () => {
  return (
    <div className="flex items-center justify-center h-screen w-full">
      <div className="lg:w-48 w-40">
        <Image
          alt="Logo"
          src="/logo-color.svg"
          width={1500}
          height={1500}
          priority
          className="rounded-full"
        />
      </div>
      <div className="text-accent-blue md:text-5xl text-4xl pl-2">
        <h1>404 - Page not found</h1>
      </div>
    </div>
  );
};

export default NotFound;
