import React from "react";
import PostHeader from "./PostHeader";

const OurStory = () => {
  return (
    <>
      <div className="lg:p-24 p-8">
        <PostHeader />
      </div>
      <section className="flex flex-col lg:-mt-[100px] items-center p-8">
        <h5 className="font-bold text-white text-3xl">
          Our <span className="text-[#FF914D]">Story</span>
        </h5>
        <p className="text-center lg:w-[700px] mt-4 text-white font-medium">
          Established with a passion for making life easier and spaces more
          beautiful, The Cleaning Corporation was founded in 2023. What began as
          a vision to redefine the cleaning industry has evolved into a
          pioneering force that integrates exceptional cleaning services with
          unmatched convenience.
        </p>
      </section>
    </>
  );
};

export default OurStory;
