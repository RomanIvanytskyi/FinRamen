import React from "react";
import { Navigate } from "react-router-dom";
import { connect } from "react-redux";
const Profile = (props) => {
  debugger
  return (
    <div>
      {props.auth?.user ? <div>Profile</div> : <Navigate to={"/"} />}
    </div>
  );
};
const mapStateToProps = (state, ownProps) => ({
  ...state,
});

export default connect(mapStateToProps, {})(Profile);
