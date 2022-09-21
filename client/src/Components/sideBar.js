import {
  ProSidebar,
  Menu,
  MenuItem,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
} from "react-pro-sidebar";
import { Link } from "react-router-dom";
import {
  FaDollarSign,
  FaComment,
  FaHouseUser,
  FaDoorOpen,
  FaPiggyBank,
} from "react-icons/fa";
import "react-pro-sidebar/dist/css/styles.css";
import { useState, useCallback } from "react";
import "./sideBar.css";

import { connect } from "react-redux";

const headerStyle = {
  padding: "24px",
  textTransform: "uppercase",
  fontWeight: "bold",
  letterSpacing: "1px",
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "noWrap",
};
const SideBar = (props) => {
  const [sideCollapsed, setSideCollapsed] = useState(true);
  const toggleSideCollapsed = useCallback(() => {
    setSideCollapsed((collapsed) => !collapsed);
  }, [setSideCollapsed]);

  return (
    <div className="mainbar">
      <ProSidebar onClick={toggleSideCollapsed} collapsed={sideCollapsed}>
        <SidebarHeader style={headerStyle}>
          <FaPiggyBank style={{ color: "rgb(255,211,49)" }} />
          FinRamen
        </SidebarHeader>
        <SidebarContent>
          <Menu iconShape="circle">
            <MenuItem>
              <FaDoorOpen />
              Auth
              <Link to="/" />
            </MenuItem>
            <MenuItem>
              <FaHouseUser />
              Profile
              <Link to="/profile" />
            </MenuItem>
            <MenuItem>
              <FaDollarSign />
              Costs Management
              <Link to="/costs" />
            </MenuItem>
            <MenuItem>
              <FaComment />
              Report
              <Link to="/report" />
            </MenuItem>
          </Menu>
        </SidebarContent>
        <SidebarFooter style={{ textAlign: "center" }}>
          {props.auth?.user?.name || "FinRamen"}
        </SidebarFooter>
      </ProSidebar>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  ...state,
});

export default connect(mapStateToProps, {})(SideBar);
