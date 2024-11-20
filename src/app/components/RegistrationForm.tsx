"use client";
import { useActionState, useState } from "react";
import { registerUser } from "../lib/serverActions";
import { TRegisterUser } from "../types";
import Link from "next/link";

const RegistrationForm = () => {
  const [state, action, isPending] = useActionState(registerUser, null);
  const [newUser, setNewUser] = useState<TRegisterUser>({
    firstName: "",
    lastName: "",
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
  });
  return (
    <form
      className="flex flex-col gap-6 py-8 px-4 w-full border-2 border-default-blue rounded-lg bg-transparent"
      action={action}
    >
      <h2 className="text-2xl text-center dark:text-light-shade-white">
        Registration
      </h2>
      {state?.error?.general &&
        state.error.general.map((err, i) => (
          <li className="text-red-400" key={i}>
            {err}
          </li>
        ))}
      <input
        className="focus:outline-none border-default-blue border-2 w-full p-2 sm:text-base text-xs bg-[#f0f0f0] rounded-lg dark:bg-[#414141] dark:text-light-shade-white"
        type="text"
        name="firstName"
        value={newUser.firstName}
        onChange={(e) => setNewUser({ ...newUser, firstName: e.target.value })}
        placeholder="First Name"
      />
      {state?.errors?.firstName &&
        state.errors.firstName.map((err, i) => (
          <li className="text-red-400" key={i}>
            {err}
          </li>
        ))}
      <input
        className="focus:outline-none border-default-blue border-2 w-full p-2 sm:text-base text-xs bg-[#f0f0f0] rounded-lg dark:bg-[#414141] dark:text-light-shade-white"
        type="text"
        name="lastName"
        value={newUser.lastName}
        onChange={(e) => setNewUser({ ...newUser, lastName: e.target.value })}
        placeholder="Last Name"
      />
      {state?.errors?.lastName &&
        state.errors.lastName.map((err, i) => (
          <li className="text-red-400" key={i}>
            {err}
          </li>
        ))}
      <input
        className="focus:outline-none border-default-blue border-2 w-full p-2 sm:text-base text-xs bg-[#f0f0f0] rounded-lg dark:bg-[#414141] dark:text-light-shade-white"
        type="email"
        name="email"
        value={newUser.email}
        onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
        placeholder="Email"
      />
      {state?.errors?.email &&
        state.errors.email.map((err, i) => (
          <li className="text-red-400" key={i}>
            {err}
          </li>
        ))}
      <input
        className="focus:outline-none border-default-blue border-2 w-full p-2 sm:text-base text-xs bg-[#f0f0f0] rounded-lg dark:bg-[#414141] dark:text-light-shade-white"
        type="text"
        name="username"
        value={newUser.username}
        onChange={(e) => setNewUser({ ...newUser, username: e.target.value })}
        placeholder="Username"
      />
      {state?.errors?.username &&
        state.errors.username.map((err, i) => (
          <li className="text-red-400" key={i}>
            {err}
          </li>
        ))}
      <input
        className="focus:outline-none border-default-blue border-2 w-full p-2 sm:text-base text-xs bg-[#f0f0f0] rounded-lg dark:bg-[#414141] dark:text-light-shade-white"
        type="password"
        name="password"
        value={newUser.password}
        onChange={(e) => setNewUser({ ...newUser, password: e.target.value })}
        placeholder="Password"
      />
      {state?.errors?.password &&
        state.errors.password.map((err, i) => (
          <li className="text-red-400" key={i}>
            {err}
          </li>
        ))}
      <input
        className="focus:outline-none border-default-blue border-2 w-full p-2 sm:text-base text-xs bg-[#f0f0f0] rounded-lg dark:bg-[#414141] dark:text-light-shade-white"
        type="password"
        name="confirmPassword"
        value={newUser.confirmPassword}
        onChange={(e) =>
          setNewUser({ ...newUser, confirmPassword: e.target.value })
        }
        placeholder="Confirm Password"
      />
      {state?.errors?.confirmPassword &&
        state.errors.confirmPassword.map((err, i) => (
          <li className="text-red-400" key={i}>
            {err}
          </li>
        ))}
      <input
        type="submit"
        value="Register"
        className="btn text-2xl w-full bg-default-blue ml-auto"
        disabled={isPending}
      />
      <p className="text-center text-gray-500 dark:text-light-shade-white">
        Already have an account?{" "}
        <Link href="/login" className="text-blue-600 underline">
          Login
        </Link>
      </p>
    </form>
  );
};

export default RegistrationForm;
