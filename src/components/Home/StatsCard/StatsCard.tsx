import React from "react";
import StatsProp from "../../../types/Home/Home";
import Document from "../../../assets/Home/Document.svg";

const StatsCard: React.FC<StatsProp> = ({ title, stats }) => {
  return (
    <div className=" flex flex-row gap-[5.9rem] border-[#E4E7EC] border-[1.5px] bg-[#FFFFFF] px-3 py-[1.35rem] rounded-md">
      <div className=" flex flex-row items-center gap-2">
        <div className=" bg-[#2B71F0] h-10 w-1 rounded-lg " />
        <div>
          <p className=" text-[#344054] text-sm font-medium font-workSans">
            {title}
          </p>
          <p className=" text-[#344054] text-lg font-bold font-workSans">
            {stats}
          </p>
        </div>
      </div>
      <div className=" bg-[#D0E0FC] rounded-full h-11 w-11  flex flex-col items-center justify-center">
        <img src={Document} />
      </div>
    </div>
  );
};

export default StatsCard;
