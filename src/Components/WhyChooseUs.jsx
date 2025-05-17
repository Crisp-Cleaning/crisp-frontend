import React from "react";

const WhyChooseUs = () => {
  return (
    <section className="px-6 md:px-12 py-12">
      <div className="lg:px-40">
        <span className="bg-[url('/stroke.png')] bg-center bg-cover font-bold text-[#1F3042] text-xl px-6 py-2 rounded-full">
          Why Choose Us?
        </span>
        <h5 className="mt-4 w-[90%] font-medium text-slate-500">
          We provide a dynamic and seamless cleaning experience that not only
          ensures cleanliness but also contributes to sealing deals, attracting
          top talent, fostering connections, and accelerating business growth.
        </h5>
      </div>

      <div className="mt-8 flex overflow-x-auto lg:justify-center w-full gap-4 items-center px-4 pb-12">
        <div className="min-w-[15rem] h-72 bg-white shadow-md border border-slate-200 rounded-md flex-shrink-0"></div>

        <div className="min-w-[15rem] h-72 bg-white shadow-md border border-slate-200 rounded-md flex-shrink-0"></div>

        <div className="min-w-[15rem] h-72 bg-white shadow-md border border-slate-200 rounded-md flex-shrink-0"></div>

        <div className="min-w-[15rem] h-72 bg-white shadow-md border border-slate-200 rounded-md flex-shrink-0"></div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
