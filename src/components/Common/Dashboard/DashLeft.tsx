import React from "react";
import { useNavigate } from "react-router-dom";
import umurava from "../../../assets/Dashboard/Umurava.svg";
import DashNav from "../Navbar/DashNav";

const DashLeft: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className=" bg-[#2B71F0] md:h-[100vh] w-[20%] hidden md:flex flex-col gap-4 ">
      <div className=" pt-6 px-4 cursor-pointer" onClick={() => navigate("/")}>
        <img src={umurava} />
      </div>
      <DashNav />
    </div>
  );
};

export default DashLeft;
