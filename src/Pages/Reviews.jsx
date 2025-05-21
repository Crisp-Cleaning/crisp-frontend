import React from "react";
import ReviewHeader from "../Components/ReviewHeader";
import ReviewSectionOne from "../Components/ReviewSectionOne";
import ReviewSectionTwo from "../Components/ReviewSectionTwo";
import ReviewSectionThree from "../Components/ReviewSectionThree";
import ReviewCta from "../Components/ReviewCta";
import Layout from "../Layouts/Layout";

const Reviews = () => {
  return (
    <>
      <Layout>
        <ReviewHeader />
        <ReviewSectionOne />
        <ReviewSectionTwo />
        <ReviewSectionThree />
        <ReviewCta />
      </Layout>
    </>
  );
};

export default Reviews;
