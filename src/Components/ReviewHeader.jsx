import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import Navbar from "./Navbar";
import CardAnimation from "./CardAnimation";

const ReviewHeader = () => {

  return (
    <>
      <header className="w-full grid grid-cols-1 lg:grid-cols-2 gap-8 px-6 md:px-12 py-12 items-center">
        <div>
          <span className="bg-[#FF914D] px-6 py-2 text-white rounded-full">
            Crisp Cleaning is for you
          </span>
          <h1 className="text-3xl md:text-4xl font-black mt-8 leading-snug">
            <span className="text-[#FF914D]">Success stories</span> from real{" "}
            <br /> Crisp Cleaning customers
          </h1>
          <p className="mt-6 text-slate-600 max-w-2xl text-base md:text-lg">
            As we showcase the results achieved through these partnerships, we
            invite you to explore the success stories that have unfolded across
            various industries.
          </p>
          <p className="mt-6 text-slate-600 max-w-2xl text-base md:text-lg">
            We take pride in the trust they've placed in our expertise and look
            forward to continuing to deliver exceptional results for our
            existing and future clients alike.
          </p>
        </div>

        {/* Auto-scrolling card grid */}
       <CardAnimation />
      </header>
    </>
  );
};

export default ReviewHeader;
