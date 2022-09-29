import React from "react";
import Login from "./Login";
import Register from "./Register";
import { useState } from "react";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";

const Auth = (props) => {
  const [account, setAccount] = useState(false);
  return (
    <div>
      {props.auth.user ? (
        <Navigate to={"/profile"} />
      ) : (
        <div
          style={{ backgroundColor: "rgb(119,125,227)" }}
          className="absolute w-full z-20"
        >
          {account ? (
            <Login setAccount={setAccount} />
          ) : (
            <Register setAccount={setAccount} />
          )}
        </div>
      )}
    </div>
  );
};
const mapStateToProps = (state, ownProps) => ({
  ...state,
});

export default connect(mapStateToProps, {})(Auth);
