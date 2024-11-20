"use client";
import React, { useActionState, useState } from "react";
import { TUserLogin } from "../types";
import {
  faEye,
  faEyeSlash,
  faLock,
  faUserLarge,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { loginUser } from "../lib/serverActions";

const LoginForm = () => {
  const [loginInfo, setLoginInfo] = useState<TUserLogin>({
    username: "",
    password: "",
    rememberMe: false,
  });
  const [error, action, isPending] = useActionState(loginUser, undefined);
  const [visibile, setVisible] = useState<boolean>(false);
  return (
    <form
      className="py-8 px-4 w-full border-2 border-default-blue rounded-lg bg-transparent gap-10 flex flex-col"
      action={action}
    >
      <h2 className="text-2xl text-center dark:text-light-shade-white">
        Login
      </h2>
      <div className=" w-full relative">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 text-default-blue">
          <FontAwesomeIcon icon={faUserLarge} />
        </div>
        <input
          type="text"
          className="focus:outline-none border-default-blue border-2 w-full p-2 pl-10 sm:text-base text-xs bg-[#f0f0f0] rounded-lg dark:bg-[#414141] dark:text-light-shade-white"
          value={loginInfo.username}
          name="username"
          onChange={(e) =>
            setLoginInfo({ ...loginInfo, username: e.target.value })
          }
          placeholder="Username"
        />
        {error?.errors.username &&
          error.errors.username.map((err, i) => (
            <li className="text-red-400 absolute" key={i}>
              {err}
            </li>
          ))}
      </div>
      <div className=" w-full relative">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 text-default-blue">
          <FontAwesomeIcon icon={faLock} />
        </div>
        <input
          type={visibile ? "text" : "password"}
          className="focus:outline-none border-default-blue border-2 w-full p-2 pl-10 sm:text-base text-xs bg-[#f0f0f0] rounded-lg dark:bg-[#414141] dark:text-light-shade-white"
          placeholder="Password"
          name="password"
          value={loginInfo.password}
          onChange={(e) => {
            setLoginInfo({ ...loginInfo, password: e.target.value });
          }}
        />
        <div
          className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-500"
          onClick={() => {
            setVisible(!visibile);
          }}
        >
          {visibile ? (
            <FontAwesomeIcon icon={faEyeSlash} />
          ) : (
            <FontAwesomeIcon icon={faEye} />
          )}
        </div>
        {error?.errors.password &&
          error.errors.password.map((err, i) => (
            <li className="text-red-400 absolute" key={i}>
              {err}
            </li>
          ))}
      </div>
      <div className="">
        <label
          htmlFor="remember me"
          className="mr-2 text-lg dark:text-light-shade-white"
        >
          Remember Me
        </label>
        <input
          type="checkbox"
          checked={loginInfo.rememberMe}
          name="rememberMe"
          onChange={(e) => {
            setLoginInfo({ ...loginInfo, rememberMe: e.target.checked });
          }}
          className="scale-[1.5] bg-[#f0f0f0] dark:bg-[#414141] dark:text-[#414141] []"
        />
      </div>
      <input
        type="submit"
        value="Login"
        className="btn text-2xl w-full bg-default-blue ml-auto "
        disabled={isPending}
      />
      <p className="text-center text-gray-500 dark:text-light-shade-white">
        No account yet?{" "}
        <Link href="/register" className="text-blue-600 underline">
          Register
        </Link>
      </p>
    </form>
  );
};

export default LoginForm;
