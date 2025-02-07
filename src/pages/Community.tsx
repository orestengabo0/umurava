import React from "react";
import Dashboard from "../layout/Dashboard";
import done from "../assets/Community/done.svg"

const Community: React.FC = () => {
  return (
    <Dashboard>
      <div className=" h-[100%] w-[100%] relative flex flex-col items-center justify-center ">
        <div className=" bg-white py-12 px-12 rounded-xl gap-5 z-10 flex flex-col items-center shadow-xl ">
          <img src={done} className=" h-20 w-20"/>
          <p className=" font-workSans text-[#101928] font-semibold text-lg ">
            Join our Whatsapp community
          </p>
          <p className=" text-center font-workSans text-[#475367]">
            Get notified on latest projects <br />
            and hackathons
          </p>
          <button className=" font-workSans text-white text-sm bg-[#2B71F0] py-2 px-7 rounded-md">Join</button>
        </div>
      </div>
    </Dashboard>
  );
};

export default Community;
