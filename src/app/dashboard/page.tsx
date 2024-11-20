import { cookies } from "next/headers";
import React from "react";
import { verfiyUserToken } from "../lib/utils";

const Dashboard = async () => {
  const cookie = cookies();
  const token = cookie.get("user")?.value;
  if (!token) {
    return <div>Not logged in</div>;
  }
  const userInformation = await verfiyUserToken(token);
  if (!userInformation) {
    return <div>Invalid session</div>;
  }
  return (
    <>
      <h1 className="text-center text-2xl mt-10">
        Welcome back {userInformation.firstName}
      </h1>
    </>
  );
};

export default Dashboard;
