import React from "react";

const ProjDetails: React.FC = () => {
  return (
    <div className=" flex flex-col gap-5 px-8">
      <div className=" font-workSans font-semibold">
        Project Brief : Payroll and HR Management System
      </div>
      <div className=" font-workSans text-sm ">
        A Fintech company that is developing a Digital Financial Platform designed <br/>
        for businesses and their workforce in Africa is partnering with Umurava to <br/>
        run a Skills Challenge for Product Design. This Fintech Company offers <br />
        Payroll Management System to Employers and Embedded Financial services <br />
        and products to Employees and Gig Workers across Africa.
      </div>
    </div>
  );
};

export default ProjDetails;
