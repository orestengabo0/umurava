import React from "react";

const ProductRequirement: React.FC = () => {
  return (
    <div className=" flex flex-col gap-4  px-8 ">
      <p className=" font-workSans font-semibold">Products Requirements</p>
      <ul className=" list-disc flex flex-col gap-2">
        <li className=" font-workSans text-sm"> User Interface Design for each step </li>
        <li className=" font-workSans text-sm">
          Creating wireframes to outline the basic structure and layout of the
          web <br />
          and mobile app.
        </li>
        <li className=" font-workSans text-sm">
          Designing visually appealing and user-friendly interfaces for the web
          and <br />
          mobile apps focusing on usability and user experience.
        </li>
        <li className=" font-workSans text-sm">
          Ensuring the web application works seamlessly across web, mobile, and{" "}
          <br />
          tablet devices.
        </li>
        <li className=" font-workSans text-sm">Provide a feedback session for in-development guidance</li>
      </ul>
    </div>
  );
};

export default ProductRequirement;
