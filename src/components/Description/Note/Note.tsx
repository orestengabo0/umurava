import React from "react";

const Note: React.FC = () => {
  return (
    <div className=" flex flex-col gap-4  px-8 ">
      <p className=" font-workSans font-semibold">Products Requirements</p>
      <ul className=" list-disc flex flex-col gap-2">
        <li className=" font-workSans text-sm">Find Product Requirements Summary and Features Description for Saway Pay <span className=" underline">HERE</span></li>
      </ul>
    </div>
  );
};

export default Note;
