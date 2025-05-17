import React from "react";

const Header = () => {
  return (
    <header className="w-full grid grid-cols-1 lg:grid-cols-2 gap-8 px-6 md:px-12 py-12 items-center">
      <div>
        <span className="bg-[#FF914D] px-6 py-2 text-white rounded-full">
          About Us
        </span>

        <h1 className="text-3xl md:text-4xl font-black mt-8 leading-snug">
          Our mission is to{" "}
          <span className="text-[#FF914D]">
            help people <br className="hidden md:block" /> everywhere
          </span>{" "}
          to have a clean <br className="hidden md:block" /> space
        </h1>

        <p className="mt-6 text-slate-600 max-w-2xl text-base md:text-lg">
          At the core of our commitment lies a simple yet profound mission: to
          empower individuals worldwide in achieving and maintaining a clean and
          organized living or working environment.
        </p>
        <p className="mt-6 text-slate-600 max-w-2xl text-base md:text-lg">
          Recognizing the transformative impact of cleanliness on overall
          well-being, productivity, and peace of mind, we have dedicated
          ourselves to providing accessible solutions for people everywhere.
        </p>
      </div>

      <div>
        <img
          src="/images/header_image.png"
          className="w-full max-w-[500px] mx-auto"
          alt="Clean Space Illustration"
        />
      </div>
    </header>
  );
};

export default Header;
