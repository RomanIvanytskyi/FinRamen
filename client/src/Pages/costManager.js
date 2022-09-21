import React from "react";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";
const Costs = (props) => {
  return (
    <div>{props.auth?.user ? <div>Costs</div> : <Navigate to={"/"} />}</div>
  );
};
const mapStateToProps = (state, ownProps) => ({
  ...state,
});

export default connect(mapStateToProps, {})(Costs);
