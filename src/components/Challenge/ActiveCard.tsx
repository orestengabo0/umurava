import React, { useState } from "react";
import activeSection from "../../assets/Challenge/activeSection.svg";
import sect from "../../assets/Challenge/section.svg";

const ActiveCard: React.FC = () => {
  const [section, setSection] = useState("all");

  return (
    <div className=" flex flex-row px-5 gap-3 ">
      <div
        onClick={() => {
          setSection("all");
        }}
        className={` flex flex-row items-center gap-3 px-3 py-3 cursor-pointer ${
          section === "all"
            ? " bg-[#D0E0FC] border-[#FCD2C2] border-2 rounded-md"
            : " bg-[#F0F2F5] rounded-md border-[#D0D5DD] border-2"
        }`}
      >
        <img src={section === "all" ? activeSection : sect} />
        <p className=" font-workSans text-sm ">All Challenge</p>
        <div></div>
      </div>

      <div
        onClick={() => {
          setSection("completed");
        }}
        className={` flex flex-row items-center gap-3 cursor-pointer px-3 py-3 ${
          section === "completed"
            ? " bg-[#D0E0FC] border-[#FCD2C2] border-2 rounded-md"
            : " bg-[#F0F2F5] rounded-md border-[#D0D5DD] border-2"
        }`}
      >
        <img src={section === "completed" ? activeSection : sect} />
        <p className=" font-workSans text-sm ">Completed Challenge</p>
        <div></div>
      </div>
      <div
        onClick={() => {
          setSection("open");
        }}
        className={` flex flex-row items-center gap-3 cursor-pointer px-3 py-3 ${
          section === "open"
            ? " bg-[#D0E0FC] border-[#FCD2C2] border-2 rounded-md"
            : " bg-[#F0F2F5] rounded-md border-[#D0D5DD] border-2"
        }`}
      >
        <img src={section === "open" ? activeSection : sect} />
        <p className=" font-workSans text-sm ">Open Challenge</p>
        <div></div>
      </div>
      <div
        onClick={() => {
          setSection("ongoing");
        }}
        className={` flex flex-row items-center gap-3 cursor-pointer px-3 py-3 ${
          section === "ongoing"
            ? " bg-[#D0E0FC] border-[#FCD2C2] border-2 rounded-md"
            : " bg-[#F0F2F5] rounded-md border-[#D0D5DD] border-2"
        }`}
      >
        <img src={section === "ongoing" ? activeSection : sect} />
        <p className=" font-workSans text-sm ">Ongoing Challenge</p>
        <div></div>
      </div>
    </div>
  );
};

export default ActiveCard;
