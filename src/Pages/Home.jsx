import React from "react";
import Navbar from "../Components/Navbar";

const Home = () => {
  return (
    <>
      <div className="p-8">
        <Navbar />
      </div>
      <div className="flex justify-center items-center h-screen p-10 text-center">
        <h1 className="text-5xl font-black">Nothing Here Yet!</h1>
      </div>
    </>
  );
};

export default Home;
