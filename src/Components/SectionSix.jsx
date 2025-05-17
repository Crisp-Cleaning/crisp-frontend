import React from "react";

const SectionSix = () => {
  return (
    <section className="px-6 md:px-12 py-12 flex justify-center">
      <div className="bg-gradient-to-b from-[#FFA56E] to-[#FF914D] w-[80%] gap-6 rounded-xl text-white p-8 flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold">Empower Your Space</h1>
        <p className="text-center">
          The Dirt doesn't stand a chance – it wants your environment dull,
          dirty, and chaotic. We've <br /> unlocked the gateway to a new level of
          cleanliness, offering you the keys to liberate your <br /> surroundings.
        </p>

        <div className="grid lg:grid-cols-2 gap-4">
            <button className="btn_2">Take Action</button>
            <button className="btn_2">Have a Question?</button>
        </div>
      </div>
    </section>
  );
};

export default SectionSix;
