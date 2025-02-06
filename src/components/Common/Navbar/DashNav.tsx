import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import homIcon from "../../../assets/Dashboard/HomeActive.svg";
import chalIcon from "../../../assets/Dashboard/Challenge.svg";
import comIcon from "../../../assets/Dashboard/Community.svg";
import home from "../../../assets/Dashboard/home.svg";
import challenge from "../../../assets/Dashboard/ChallengeActive.svg";
import community from "../../../assets/Dashboard/CommunityActive.svg";

const DashNav: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [tab, setTab] = useState("dashboard");

  useEffect(() => {
    const currentPathName = location.pathname;
    if (currentPathName === "/") setTab("dashboard");
    else if (currentPathName.startsWith("/challenge")) setTab("challenge");
    else if (currentPathName.startsWith("/community")) setTab("community");
  }, [location.pathname]);

  const handleNavigation = (tab: string, route: string) => {
    setTab(tab);
    navigate(route);
  };

  return (
    <div className=" flex flex-col gap-2 items-center px-2">

      <div onClick={() => handleNavigation("home", "/")} className={` flex flex-row items-center gap-3 py-2 px-3 w-[100%] rounded-md cursor-pointer ${ tab === "dashboard" ? " bg-[#FFFFFF] " : ""}`} >
        <img src={ tab === "dashboard" ? homIcon : home } className=" h-5 w-5 "/>
        <span className={ ` font-workSans text-white text-sm ${ tab === "dashboard" ? "text-[#2B71F0]" : " text-white"}`}>Dashboard</span>
      </div>

      <div onClick={() => handleNavigation("challenge", "/challenge")} className={` flex flex-row items-center gap-3 py-2 px-3 w-[100%] rounded-md cursor-pointer ${ tab === "challenge" ? " bg-[#FFFFFF] " : ""}`}  >
        <img src={tab === "challenge" ? challenge : chalIcon} className=" h-5 w-5 " />
        <span className={ ` font-workSans text-white text-sm ${ tab === "challenge" ? "text-[#2B71F0]" : " text-white"}`}>Challenges & Hackathons</span>
      </div>

      <div onClick={() => handleNavigation("community", "/community")} className={` flex flex-row items-center gap-3 py-2 px-3 w-[100%] rounded-md cursor-pointer ${ tab === "community" ? " bg-[#FFFFFF] " : ""}`}  >
        <img src={tab === "community" ? community : comIcon } className=" h-5 w-5 "/>
        <span className={ ` font-workSans text-white text-sm ${ tab === "community" ? "text-[#2B71F0]" : " text-white"}`}>Community</span>
      </div>

    </div>
  );
};

export default DashNav;
