import React from "react";

const HomeHeader = () => {
  return (
    <header className="w-full grid grid-cols-1 lg:grid-cols-2 gap-8 px-6 md:px-12 py-12 items-center">
      <div>
        <h1 className="text-3xl md:text-4xl font-black mt-8 leading-snug">
          Receive A Quote
        </h1>
        <p className="text-slate-500 font-medium">
          What type of project? Please provide what type of cleaning.
        </p>

        <div className="mt-8">
          <div className="border-black border-2 rounded-lg p-8">
            <span className="flex justify-between items-center">
              <img src="/house.svg" alt="" />
              <input type="radio"/>
            </span>

            <h1 className="text-lg font-bold mb-4 mt-4">
              Residential Cleaning
            </h1>
            <p>
              Bring a breath of fresh air and elevate your living spaces with
              our <br /> residential cleaning services, design to bring comfort
              and hygiene to your home
            </p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HomeHeader;
