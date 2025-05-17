import React from "react";

const FaqsHeader = () => {
  return (
    <header className="mt-20 p-12 text-center">
      <div className="flex justify-center items-center flex-col">
        <span className="bg-[#FF914D] px-6 py-2 text-white font-semibold rounded-full">
          Have a Question?
        </span>

        <h1 className="text-3xl font-bold mt-6">
          Frequently <span className="text-[#FF914D]">Asked Questions</span>
        </h1>
        <h5 className="text-slate-500 text-center mt-6">
          Explore the answers to these frequently asked questions to learn more
          about <br /> how we can make your cleaning experience smooth and
          hassle-free.
        </h5>
      </div>
    </header>
  );
};

export default FaqsHeader;
