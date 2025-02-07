import React from "react";
import Dashboard from "../layout/Dashboard";
import TextCard from "../components/Home/TextCard/TextCard";

const Description: React.FC = () => {
  return (
    <Dashboard>
      <div>
        <div className=" flex flex-row items-center px-5 ">
          <TextCard />
        </div>
        <div></div>
        <div className=" flex flex-col px-5 gap-8 py-8">
          
        </div>
      </div>
    </Dashboard>
  );
};

export default Description;
