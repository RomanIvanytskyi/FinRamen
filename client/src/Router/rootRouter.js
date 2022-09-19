import { Routes, Route } from "react-router-dom";
import Auth from "../Pages/auth";
import Costs from "../Pages/costManager";
import Profile from "../Pages/profile";
import Report from "../Pages/report";
import SideBar from "../Components/sideBar";

const rootRouter = () => {
  return (
    <div>
      <SideBar />
      <Routes key={1}>
        <Route path="/profile" element={<Profile />} exact></Route>
        <Route path="/" element={<Auth />}></Route>
        <Route path="/costs" element={<Costs />}></Route>
        <Route path="/report" element={<Report />}></Route>
      </Routes>
    </div>
  );
};
export default rootRouter;
