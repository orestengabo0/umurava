import React from "react";

const TextCard: React.FC = () => {
  return (
    <div className=" flex flex-col py-5 ">
      <p className=" font-workSans font-semibold text-xl">Challenges</p>
      <span className=" text-[#475367] text-sm font-workSans ">
        Join a challenge or a hackathon to gain valuable work experience,
      </span>
    </div>
  );
};

export default TextCard;
