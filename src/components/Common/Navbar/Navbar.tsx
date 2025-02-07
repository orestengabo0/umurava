import React from "react";
import search from "../../../assets/Navbar/Search.svg";
import notification from "../../../assets/Navbar/Notification.svg";
import profile from "../../../assets/Navbar/Profile.png";

const Navbar: React.FC = () => {
  return (
    <div className=" bg-[#FFFFFF] h-[10%] flex flex-row justify-between items-center px-5">
      <div className=" flex flex-row bg-[#F9FAFB] items-center gap-3 w-[65%] h-9 px-3 rounded-md">
        <img src={search} className=" h-[0.85rem] w-[0.85rem] " />
        <input
          type="search"
          placeholder="Search here..."
          className=" placeholder:text-[#667185] text-sm font-workSans outline-none bg-transparent"
        />
      </div>
      <div className=" flex flex-row gap-2 w-[10%] items-center justify-center">
        <div className=" bg-[#F0F2F5] rounded-full p-2 ">
          <img src={notification} />
        </div>
        <div>
          <img src={profile} className=" h-9 w-9" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
