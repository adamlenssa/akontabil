import React from "react";
import Link from "next/link";
import { logoutUser } from "../lib/serverActions";
import cookie from "js-cookie";
const NavLinks = () => {
  const user = cookie.get("user");
  console.log(user);

  const menuOptions = user
    ? [
        { text: "Dashboard", href: "/dashboard" },
        { text: "Groups", href: "/groups" },
      ]
    : [
        { text: "Login", href: "/login" },
        { text: "Sign Up", href: "/register" },
      ];
  return (
    <>
      {menuOptions.map((option) => (
        <Link href={option.href} key={option.href} className="px-2">
          {option.text}
        </Link>
      ))}
      {user && (
        <h1
          className="px-2"
          onClick={() => {
            logoutUser();
          }}
        >
          Logout
        </h1>
      )}
    </>
  );
};

export default NavLinks;
