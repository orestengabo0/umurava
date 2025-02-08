import React from "react";

const Deliverables: React.FC = () => {
  return (
    <div className=" flex flex-col gap-4  px-8 ">
      <p className=" font-workSans font-semibold">Products Requirements</p>
      <ul className=" list-disc flex flex-col gap-2">
        <li className=" font-workSans text-sm">
          {" "}
          Requirements Catalog and User Interaction Diagram{" "}
        </li>
        <li className=" font-workSans text-sm">
          {" "}
          User Interface Mockups {" "}
        </li>
        <li className=" font-workSans text-sm">
          Provide a feedback session for in-development guidance
        </li>
      </ul>
    </div>
  );
};

export default Deliverables;
