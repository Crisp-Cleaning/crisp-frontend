import React from "react";

const SectionThree = () => {
  return (
    <section className="w-full grid grid-cols-1 lg:grid-cols-2 gap-8 px-6 md:px-12 py-12 items-center">
      <div className="lg:pl-46">
        <img src="/handshake.svg" className="w-12" alt="" />

        <h1 className="text-3xl font-bold mt-4">
          Beyond Cleaning, <br />{" "}
          <span className="text-[#FF914D]">Becoming Your Partner</span> <br />{" "}
          in Pristine Living and Working Spaces
        </h1>
        <p className="mt-8 text-slate-500 font-medium w-[70%]">
          Our mission is simple yet powerful: to be your all-in-one cleaning
          solution, taking the weight of cleaning responsibilities off your
          shoulders so you can focus on what truly matters.
        </p>

        <p className="mt-4 text-slate-500 font-medium">
          We're not just a cleaning company; we're your partners in maintaining
          a pristine and harmonious living and working environment.
        </p>
      </div>

      <img src="/images/cleaning.png" alt="" />
    </section>
  );
};

export default SectionThree;
