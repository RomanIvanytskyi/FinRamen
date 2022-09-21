import React from "react";
import Login from "./Login";
import Register from "./Register";

const Auth = () => {
  return (
    <div
      style={{ backgroundColor: "rgb(119,125,227)" }}
      className="absolute w-full z-20"
    >
      {" "}
      {/* <Login /> */}
      <Register />
    </div>
  );
};
export default Auth;
