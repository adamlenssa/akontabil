import React from "react";
import LoginForm from "../components/LoginForm";

const LoginPage = () => {
  return (
    <div className="flex items-center md:justify-start justify-center h-full">
      <div className="basis-96 sm:ml-[7%] mx-6">
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginPage;
