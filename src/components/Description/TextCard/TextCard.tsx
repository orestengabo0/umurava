import React from "react";
import navigation from "../../../assets/Description/Description.svg";
import { Link, useNavigate } from "react-router-dom";

const TextCard: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className=" flex flex-row items-center gap-4 bg-[#FFFFFF] border-[#E4E7EC] border-y-2 w-[100%] py-[0.75rem] px-5 ">
      <div onClick={() => navigate("/challenge")} className=" flex flex-row items-center gap-2 cursor-pointer ">
        <div className=" bg-[#FFFFFF] border-[#E4E7EC] border-[1.4px] px-[0.45rem] py-[0.45rem] rounded-lg ">
          <img src={navigation} className=" h-4 w-4" />
        </div>
        <div className=" text-[#667185] font-workSans font-semibold text-sm ">
          Go Back
        </div>
      </div>
      <div className=" flex flex-row gap-2 ">
        <p className=" font-workSans text-[#98A2B3] text-sm cursor-pointer ">
          <Link to={"/challenge"}>Challenges & Hackathons</Link>
        </p>
        <p className=" text-[#98A2B3] font-workSans text-sm cursor-pointer">
          /
        </p>
        <p className=" text-[#2B71F0] font-workSans text-sm cursor-pointer font-semibold">
          Design a Dashboard for Sokofund
        </p>
      </div>
    </div>
  );
};

export default TextCard;
