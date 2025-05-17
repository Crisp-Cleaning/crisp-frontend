import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

const SectionFive = () => {
  const images = [
    "client_one.png",
    "client_two.png",
    "client_three.png",
    "client_four.png",
    "client_five.png",
  ];

  return (
    <section className="px-6 md:px-12 py-12">
      <div className="flex flex-col items-center gap-4 text-center">
        <h1 className="text-3xl text-[#1F3042] font-bold">
          Our{" "}
          <span className="bg-[url('/stroke.png')] rounded-full bg-center bg-cover">
            Senior Crew
          </span>{" "}
          <br className="hidden md:block" />
          Behind Crisp Cleaning
        </h1>
        <h5 className="text-slate-500 font-medium">
          Each member of our team brings a unique set of skills and expertise to
          the table, <br className="hidden md:block" /> ensuring that every nook
          and cranny of your space receives the attention it deserves.
        </h5>
      </div>

      {/* Swiper: Mobile only */}
      <div className="block lg:hidden mt-10 w-full">
        <Swiper
          modules={[Pagination]}
          pagination={{ clickable: true }}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          spaceBetween={20}
          slidesPerView={1.2}
        >
          {images.map((img, idx) => (
            <SwiperSlide key={idx}>
              <img
                src={`/images/${img}`}
                alt={img}
                className="rounded-md w-full bg-slate-200/20"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Grid: Desktop only */}
      <div className="hidden lg:flex flex-col gap-8 items-center mt-10">
        {/* First row - 3 members */}
        <div className="grid grid-cols-3 gap-6 w-[80%]">
          {images.slice(0, 3).map((img, idx) => (
            <img
              key={idx}
              src={`/images/${img}`}
              alt={img}
              className="bg-slate-200/20 rounded-md"
            />
          ))}
        </div>

        {/* Second row - 2 members */}
        <div className="grid grid-cols-2 gap-6 w-[50%]">
          {images.slice(3).map((img, idx) => (
            <img
              key={idx}
              src={`/images/${img}`}
              alt={img}
              className="bg-slate-200/20 rounded-md"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SectionFive;
