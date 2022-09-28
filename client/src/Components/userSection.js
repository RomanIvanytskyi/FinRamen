import { connect } from "react-redux";
import { Avatar } from "@material-tailwind/react";
import "./userSection.css";
import { Link } from "react-router-dom";
const UserSection = (props) => {
  return (
    <div className="userSection">
      <div>
        <Link to="/profile">
          <Avatar
            className="userAvatar"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_HfcZJOGwxZhgHpU36SUwCUmuElsx8RKfqA&usqp=CAU"
            alt="avatar"
            variant="circular"
          />
          {props.auth?.user?.name}
        </Link>
      </div>
    </div>
  );
};
const mapStateToProps = (state, ownProps) => ({
  ...state,
});

export default connect(mapStateToProps, {})(UserSection);
