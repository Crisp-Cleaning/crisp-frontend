import React from "react";
import Navbar from "../Components/Navbar";
import Header from "../Components/Header";
import OurStory from "../Components/OurStory";
import WhyChooseUs from "../Components/WhyChooseUs";
import SectionThree from "../Components/SectionThree";
import SectionFour from "../Components/SectionFour";
import SectionFive from "../Components/SectionFive";
import SectionSix from "../Components/SectionSix";
import Footer from "../Components/Footer";

const Home = () => {
  return (
    <>
      <div className="p-8">
        <Navbar />
      </div>
      <Header />
      <main>
        <div className="bg-[#1F3042] mt-30">
          <OurStory />
        </div>
        <WhyChooseUs />
        <SectionThree />
        <div className="bg-[#1F3042] lg:-mt-40">
          <SectionFour />
        </div>
        <SectionFive />
        <SectionSix />
        <Footer />
      </main>
    </>
  );
};

export default Home;
