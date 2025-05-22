import React from "react";
import { Link } from "react-router-dom";

const FaqCta = () => {
  return (
    <section className="p-12 flex justify-center text-center">
      <div className="bg-gradient-to-b from-[#FFA56E] to-[#FF914D] lg:w-[80%] gap-6 rounded-xl text-white p-8 flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold">Seeking Further Assistance?</h1>
        <p className="text-center">
          Click on the links below to explore additional resources or to get in
          touch with us directly.
        </p>

        <div className="grid lg:grid-cols-2 gap-4">
          <Link to="/">
            <button className="btn_2">Recieve a Quote</button>
          </Link>
          <Link to="/contact">
            <button className="btn_2">Contact Us</button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FaqCta;
