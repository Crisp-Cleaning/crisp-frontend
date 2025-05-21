import React from "react";
import { Link } from "react-router-dom";

const ReviewCta = () => {
  return (
    <section className="py-12 px-6 flex justify-center">
      <div className="bg-gradient-to-b from-[#FFA56E] to-[#FF914D] lg:w-[80%] gap-6 rounded-xl text-white p-8 flex flex-col items-center justify-center">
        <h1 className="text-2xl text-center font-bold">
          Streamline your cleaning experience
        </h1>
        <p className="text-center">
          Your cleaning solutions are just a click away, making it convenient
          for you to maintain a <br /> pristine and comfortable environment for
          your home or business.
        </p>

        <div className="grid lg:grid-cols-2 gap-4">
          <button className="btn_2 hidden lg:block">Take Action</button>
          <Link to="/contact">
            <button className="btn_2">Contact Us</button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ReviewCta;
