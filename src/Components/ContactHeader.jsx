import React from "react";
import Navbar from "./Navbar";
import PostContactHeader from "./PostContactHeader";

const ContactHeader = () => {
  return (
    <>
      <header className="bg-gradient-to-b from-[#FFA771] to-[#FF914D]">
        <div className="p-8">
          <Navbar />
        </div>
        <div className="text-white flex justify-center flex-col text-center gap-6 items-center pb-60 p-8">
          <h1 className="font-bold text-3xl">Communication is everything</h1>
          <small>
            We have a record of answering everything in 3 hours or less.
          </small>
        </div>
      </header>
      <PostContactHeader />
    </>
  );
};

export default ContactHeader;
