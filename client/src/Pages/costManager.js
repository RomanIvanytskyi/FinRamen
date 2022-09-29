import { React } from "react";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";
import "./pages.css";
import "./costs.css";
import AddCosts from "../Components/AddCosts";
import Transactions from "../Components/Transactions";
const Costs = (props) => {
  return (
    <div className="main">
      {props.auth?.user ? (
        <div className="Content">
          <div class="container">
            <div class="head">
              <div class="Balance">Balance</div>
            </div>

            <div class="Transactions">
              <Transactions />
            </div>
            <div class="Create-Transaction">
              {" "}
              Add new transaction
              <AddCosts className="addCosts" />
            </div>
          </div>
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

export default connect(mapStateToProps, {})(Costs);
