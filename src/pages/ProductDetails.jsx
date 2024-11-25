import React from "react";
import SubNavbar from "../components/SubNavbar";
import Navbar from "../components/Navbar";
import Product from "../components/Product";
import CompanyBrand from "../components/CompanyBrand";
import ProductBenefits from "../components/ProductBenefits";
import Testimonial from "../components/Testimonial";

function ProductDetails() {
  return (
    <div>
      <SubNavbar />
      <Navbar />
      <Product />
      <CompanyBrand />
      <ProductBenefits />
      <Testimonial />
    </div>
  );
}

export default ProductDetails;
