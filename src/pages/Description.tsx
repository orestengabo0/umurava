import React from "react";
import Dashboard from "../layout/Dashboard";
import TextCard from "../components/Description/TextCard/TextCard";
import LeftComponent from "../components/Description/LeftComponent/LeftComponent";
import RightComponent from "../components/Description/RightComponent/RightComponent";

const Description: React.FC = () => {
  return (
    <Dashboard>
      <div className=" flex flex-col gap-3">
        <div className=" flex flex-row items-center">
          <TextCard />
        </div>
        <div>
          <div className=" flex flex-col md:flex-row px-5 gap-6 ">
            <LeftComponent />
            <RightComponent />
          </div>
        </div>
        <div className=" flex flex-col px-5 gap-8 py-8"></div>
      </div>
    </Dashboard>
  );
};

export default Description;
