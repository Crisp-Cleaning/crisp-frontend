import React from "react";
import FaqsHeader from "../Components/FaqsHeader";
import FaqsQuestions from "../Components/FaqsQuestions";
import FaqCta from "../Components/FaqCta";
import Layout from "../Layouts/Layout";

const Faqs = () => {
  return (
    <>
      <Layout>
        <FaqsHeader />
        <FaqsQuestions />
        <FaqCta />
      </Layout>
    </>
  );
};

export default Faqs;
