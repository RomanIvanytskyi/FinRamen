import React from "react";
import { useState } from "react";
import { Navigate } from "react-router-dom";
import { connect } from "react-redux";
import { Avatar } from "@material-tailwind/react";
import "./pages.css";
import "./profile.css";
import Transactions from "../Components/Transactions";
import CustomTable from "../Components/customCategories";
import CurrencyBoard from "../Components/CurrencyBoard";
import "../Components/Transactions.css";

const Profile = (props) => {
  const [open, setOpen] = useState(0);

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

  return (
    <div className="main">
      {props.auth?.user ? (
        <div className="Content">
          <Avatar
            className="userAvatar"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_HfcZJOGwxZhgHpU36SUwCUmuElsx8RKfqA&usqp=CAU"
            alt="avatar"
            variant="circular"
          />{" "}
          {props.auth?.user?.name}
          <div className="container">
            <div className="User-info">
              {" "}
              Informations about user and balance
              <CurrencyBoard />
              <CustomTable className="currPicker" />
            </div>
            <div className="Transactions">
              <Transactions />
            </div>
            <div class="Charts"> </div>
           
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

export default connect(mapStateToProps, {})(Profile);
