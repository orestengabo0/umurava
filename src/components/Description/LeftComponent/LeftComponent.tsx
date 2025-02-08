import React from "react";
import ProjDetails from "../ProjDetails/ProjDetails";
import ProductRequirement from "../ProductRequirement/ProductRequirement";
import Deliverables from "../Deliverables/Deliverables";
import Note from "../Note/Note";
import umuLogo from "../../../assets/Home/Logo.svg";

const LeftComponent: React.FC = () => {
  return (
    <div className=" bg-[#FFFFFF] border-[#E4E7EC] border-2 rounded-md h-[100%] w-full md:w-[60%] flex flex-col gap-5 py-10 ">
      {/* Cover of the challenge */}
      <div className=" px-8">
        <div className=" flex flex-col bg-[#2B71F0] h-56 rounded-lg justify-center items-center ">
          <img src={umuLogo} className=" h-40 w-40 " />
        </div>
      </div>

      {/* Challenge Details */}
      <ProjDetails />

      <div className=" font-workSans font-semibold px-8 ">Tasks: </div>

      {/* Product Requirements */}
      <ProductRequirement />

      {/* Deliverables */}

      <Deliverables />

      {/* Note */}
      <Note />
    </div>
  );
};

export default LeftComponent;
