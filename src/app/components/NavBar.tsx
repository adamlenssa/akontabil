"use client";
import React, { useState } from "react";
import NavLinks from "./NavLinks";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons/faBars";
import { faX } from "@fortawesome/free-solid-svg-icons";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <>
      <nav className="w-1/3 md:w-1/4 flex justify-end">
        <div className=" hidden sm:flex sm:justify-around text-sm w-full sm:w-4/5">
          <NavLinks />
        </div>
        <div className="sm:hidden">
          <div
            className={`w-6 h-6 relative`}
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          >
            <FontAwesomeIcon
              icon={faBars}
              className={`${isOpen && "animate-rollout opacity-0"} ${
                !isOpen && "animate-rollin opacity-1"
              }absolute top-0 left-0`}
            />
            <FontAwesomeIcon
              icon={faX}
              className={`absolute ${isOpen && "animate-rollin opacity-1"} ${
                !isOpen && "animate-rollout opacity-0"
              } top-0 left-0`}
            />
          </div>
        </div>
      </nav>
      {isOpen && (
        <div className="flex flex-col items-center basis-full sm:hidden animate-rollin">
          <NavLinks />
        </div>
      )}
    </>
  );
};

export default NavBar;
