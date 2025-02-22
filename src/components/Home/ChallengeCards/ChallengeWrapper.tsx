import React from "react";
import challenges from "../../../types/Data/Challenge";
import ChallengeCard from "./ChallengeCard";

type challenge = {
  id: number;
  title: string;
  timeline: string;
};

const ChallengeWrapper: React.FC = () => {
  return (
    <div className=" flex flex-col md:flex-row gap-4">
      {challenges.map((challenge: challenge, index: number) => {
        return (
          <ChallengeCard
            key={index}
            id={challenge.id}
            title={challenge.title}
            timeline={challenge.timeline}
          />
        );
      })}
    </div>
  );
};

export default ChallengeWrapper;
