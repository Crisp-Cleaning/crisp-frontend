import React from "react";
import Navbar from "../Components/Navbar";
import FaqsHeader from "../Components/FaqsHeader";
import FaqsQuestions from "../Components/FaqsQuestions";
import FaqCta from "../Components/FaqCta";
import Footer from "../Components/Footer";

const Faqs = () => {
  return (
    <>
      <main>
        <div className="p-8">
          <Navbar />
        </div>
        <FaqsHeader />
        <FaqsQuestions />
        <FaqCta />
        <Footer />
      </main>
    </>
  );
};

export default Faqs;
