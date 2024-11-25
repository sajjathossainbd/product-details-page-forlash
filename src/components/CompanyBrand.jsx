import React from "react";
import company1 from "./../assets/company/company1.svg";
import company2 from "./../assets/company/company2.svg";
import company3 from "./../assets/company/company3.svg";
import company4 from "./../assets/company/company4.svg";

function CompanyBrand() {
  return (
    <div className="container flex items-center justify-between gap-y-8 lg:gap-x-0 flex-wrap">
      <img className="h-12" src={company1} alt="" />
      <img className="h-12" src={company2} alt="" />
      <img className="h-12" src={company3} alt="" />
      <img className="h-12" src={company4} alt="" />
    </div>
  );
}

export default CompanyBrand;
