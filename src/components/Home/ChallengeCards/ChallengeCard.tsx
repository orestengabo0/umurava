import React from "react";
import umuLogo from "../../../assets/Home/Logo.svg"


interface ChallengeCardProps {
  title: string;
  timeline: string;
}

const ChallengeCard: React.FC<ChallengeCardProps> = ({ title, timeline }) => {
  return (
    <div className=" flex flex-col bg-[#FFFFFF] border-[#E4E7EC] border-[1.5px] rounded-lg py-3 px-3 gap-8 ">
      <div className=" relative">
        <div className=" flex flex-col bg-[#0F973D] text-white font-workSans w-20 text-sm rounded-lg py-[0.15rem] justify-center items-center absolute top-2 right-2">Open</div>
        <div className=" flex flex-col bg-[#2B71F0] h-48 rounded-lg justify-center items-center ">
          <img src={umuLogo} className=" h-40 w-40 " />
        </div>
      </div>
      <div className=" flex flex-col gap-3">
        <div className=" font-workSans font-semibold ">{title}</div>
        <div className=" border-b-2 border-[#E4E7EC] flex flex-col gap-2">
          <div>
            <p className=" font-workSans text-[0.79rem] font-semibold">Skills Needed:</p>
            <div></div>
          </div>
          <div className=" flex flex-row gap-2">
            <p className=" font-workSans text-sm font-semibold text-[0.79rem] ">Seniority Level: </p>
            <p className=" font-workSans text-[#475367] text-[0.79rem] ">(Junior, Intermediate, Senior)</p>
          </div>
          <div className=" flex flex-row gap-2 pb-4">
            <p className=" font-workSans text-[0.79rem] font-semibold">Timeline: </p>
            <p className=" font-workSans text-[#475367] text-[0.78rem] ">{timeline}</p>
          </div>
        </div>
        <div>
            <button className=" text-sm font-workSans text-white bg-[#2B71F0] px-2 py-2 rounded-md">View Internships</button>
        </div>
      </div>
    </div>
  );
};

export default ChallengeCard;
