import React from "react";
import Dashboard from "../layout/Dashboard";
import ChallengeWrapper from "../components/Home/ChallengeCards/ChallengeWrapper";
import TextCard from "../components/Challenge/TextCard";
import ActiveCard from "../components/Challenge/ActiveCard";

const Challenge: React.FC = () => {
  return (
    <Dashboard>
      <div>
        <div className=" flex flex-row items-center px-5 ">
          <TextCard />
        </div>
        <div>
          <ActiveCard />
        </div>
        <div className=" flex flex-col px-5 gap-8 py-8">
          <ChallengeWrapper />
          <ChallengeWrapper />
        </div>
        <div className=" flex flex-row justify-end px-6 py-4 ">
          <button className=" bg-[#2B71F0] text-white font-workSans px-5 py-2 text-sm rounded-lg ">
            Next
          </button>
        </div>
      </div>
    </Dashboard>
  );
};

export default Challenge;
