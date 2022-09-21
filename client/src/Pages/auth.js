import React from "react";
import Login from "./Login";
import Register from "./Register";
import { useState } from "react";

const Auth = () => {
  const [account, setAccount] = useState(false);
  return (
    <div
      style={{ backgroundColor: "rgb(119,125,227)" }}
      className="absolute w-full z-20"
    >
      {account ? <Login setAccount={setAccount}/> : <Register setAccount={setAccount} />}
    </div>
  );
};
export default Auth;
