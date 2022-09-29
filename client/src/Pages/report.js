import React from "react";
import { connect } from "react-redux";
import "./pages.css";
import { Navigate } from "react-router-dom";
const Report = (props) => {
  return (
    <div>
      {props.auth?.user ? (
        <div className="main">
          <div className="Content">"Report page" idk what write here LOL</div>
        </div>
      ) : (
        <Navigate to={"/"} />
      )}
    </div>
  );
};
const mapStateToProps = (state, ownProps) => ({
  ...state,
});

export default connect(mapStateToProps, {})(Report);
