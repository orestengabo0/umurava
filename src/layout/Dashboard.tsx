import React from "react";
import DashLeft from "../components/Common/Dashboard/DashLeft";
import DashRight from "../components/Common/Dashboard/DashRight";
import DashRightProps from "../types/Dashboard/Dashboard";

const Dashboard: React.FC<DashRightProps> = ({ children }) => {
  return (
    <div className=" flex flex-row h-[100vh]">
      <DashLeft />
      <DashRight children={children} />
    </div>
  );
};

export default Dashboard;
