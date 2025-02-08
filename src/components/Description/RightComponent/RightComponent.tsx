import React from "react";
import Instructions from "./Instructions";
import InformLayout from "./InformLayout";

const RightComponent: React.FC = () => {
  return (
    <div className=" bg-[#FFFFFF] border-[#E4E7EC] border-2 rounded-md h-[40%] w-full md:w-[40%] flex flex-col gap-5 py-10 ">
      <Instructions />
      <div className=" flex flex-col gap-3 px-8">
        <InformLayout
          imageUrl=""
          Tcontent="talent@umurava.africa"
          description="Contact Email"
        />
        <InformLayout
          imageUrl=""
          Tcontent="Web design"
          description="Challenge Category"
        />
        <InformLayout imageUrl="" Tcontent="7 Days" description="Duration" />
        <InformLayout
          imageUrl=""
          Tcontent="$150 - $400"
          description="Money Prize"
        />
      </div>

      <div className=" flex flex-col px-8">
        <button className=" bg-[#2B71F0] font-workSans text-white text-sm py-3 rounded-md ">
          Submit your work
        </button>
      </div>
    </div>
  );
};

export default RightComponent;
