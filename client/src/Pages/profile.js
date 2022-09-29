import React from "react";
import { useState } from "react";
import { Navigate } from "react-router-dom";
import { connect } from "react-redux";
import {
  Avatar,
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import "./pages.css";
import "./profile.css";
import Transactions from "../Components/Transactions";

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
            </div>
            <div className="Transactions">
              <Transactions />
            </div>
            <div class="Charts">Charts will be added soon</div>
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
