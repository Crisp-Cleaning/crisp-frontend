import React, { useState } from "react";
import FaqAccordion from "./FaqAccordion";
import { faqs } from "../data/data";

const FaqsQuestions = () => {
  const [activeTab, setActiveTab] = useState("booking");

  return (
    <section className="flex justify-center mt-20">
      <div className="lg:w-[70%] w-[90%]">
        {/* Nav Pills */}
        <div className="grid grid-cols-2 pt-4 border border-slate-200 bg-white shadow-lg rounded-md">
          <button
            onClick={() => setActiveTab("booking")}
            className={`pb-2 text-sm font-semibold ${
              activeTab === "booking"
                ? "text-orange-500 border-b-4 border-orange-500"
                : "text-gray-600"
            }`}
          >
            Booking & Services
          </button>
          <button
            onClick={() => setActiveTab("safety")}
            className={`pb-2 text-sm font-semibold ${
              activeTab === "safety"
                ? "text-orange-500 border-b-4 border-orange-500"
                : "text-gray-600"
            }`}
          >
            Safety & Satisfaction
          </button>
        </div>

        <FaqAccordion data={faqs[activeTab]} />
      </div>
    </section>
  );
};

export default FaqsQuestions;
