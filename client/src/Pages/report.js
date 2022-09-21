import React from "react";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";
const Report = (props) => {
  return (
    <div>{props.auth?.user ? <div>Report</div> : <Navigate to={"/"} />}</div>
  );
};
const mapStateToProps = (state, ownProps) => ({
  ...state,
});

export default connect(mapStateToProps, {})(Report);
