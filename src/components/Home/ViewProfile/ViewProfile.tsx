import React from "react";
import eye from "../../../assets/Home/eye.svg";

const ViewProfile: React.FC = () => {
  return (
    <div>
      <button className=" bg-[#2B71F0] text-white font-workSans text-sm flex flex-row items-center py-[0.85rem] px-4 rounded-md gap-3 absolute right-7">
        <img src={eye} className=" h-4 w-4" />
        View Profile
      </button>
    </div>
  );
};

export default ViewProfile;
