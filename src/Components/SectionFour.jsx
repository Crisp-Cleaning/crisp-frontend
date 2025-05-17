import React from "react";

const SectionFour = () => {
  return (
    <section className="w-full grid grid-cols-1 lg:grid-cols-2 gap-8 px-6 md:px-12 items-center">
      <img src="/images/bathroom.png" className="lg:mt-40 -mt-40" alt="" />

      <div className="lg:pl-46">
        <img src="/liberate.svg" className="w-12" alt="" />

        <h1 className="text-3xl font-bold mt-4 text-white">
          We aim to <span className="text-[#FF914D]">Liberate you</span> from
          the burden of cleaning
        </h1>
        <p className="mt-8 text-slate-500 font-medium w-[70%]">
          We aim to liberate you from the burden of cleaning, providing a
          holistic cleaning solution that goes beyond the ordinary.
        </p>

        <p className="mt-4 text-slate-500 font-medium">
          We take pride in becoming an integral part of your life, ensuring your
          surroundings radiate cleanliness and positivity.
        </p>
      </div>
    </section>
  );
};

export default SectionFour;
