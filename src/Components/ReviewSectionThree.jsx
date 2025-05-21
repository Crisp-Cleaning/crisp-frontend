import React, { useEffect, useRef, useState } from "react";
import { reviewVideos } from "../data/data";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const ReviewSectionThree = () => {
  const [isLargeScreen, setIsLargeScreen] = useState(true);
  const videoRefs1 = useRef([]);
  const videoRefs2 = useRef([]);
  const swiper1Ref = useRef(null);
  const swiper2Ref = useRef(null);

  useEffect(() => {
    const updateScreen = () => {
      setIsLargeScreen(window.innerWidth >= 1024);
    };

    updateScreen();
    window.addEventListener("resize", updateScreen);
    return () => window.removeEventListener("resize", updateScreen);
  }, []);

  const pauseAll = (refs) => {
    refs.current.forEach((v) => {
      if (v && !v.paused) {
        v.pause();
      }
    });
  };

  const handleSlideChange = (swiper, refs) => {
    pauseAll(refs);
    const current = refs.current[swiper.activeIndex];
    if (current) current.play();
  };

  const renderCard = (card, index, refArray) => (
    <div
      key={index}
      className="bg-white w-auto p-4 rounded-xl shadow-xl border text-sm text-slate-700 flex-shrink-0 flex flex-col gap-2"
    >
      <div className="flex justify-between items-center mb-2">
        <div className="flex items-center">
          <img
            src={card.profile}
            className="w-12 h-12 rounded-full mr-6"
            alt=""
          />
          <div>
            <p className="font-semibold text-base text-black">{card.name}</p>
            <p className="text-xs text-slate-500">{card.role}</p>
          </div>
        </div>
        <img src={card.logo} alt="logo" className="h-6 w-auto" />
      </div>

      <div className="space-y-2 text-sm leading-relaxed">
        {card.content.map((para, i) => (
          <p key={i}>{para}</p>
        ))}
      </div>

      <div>
        <video
          ref={(el) => (refArray.current[index] = el)}
          src={card.video}
          controls
          muted
          className="w-full rounded-lg"
        />
      </div>

      <p className="text-xs text-slate-400 mt-3">{card.time}</p>
    </div>
  );

  // Split data
  const firstThree = reviewVideos.slice(0, 3);
  const remaining = reviewVideos.slice(3);

  return (
    <section className="px-6 flex justify-center items-center flex-col md:px-8 py-12">
      <div className="flex justify-center items-center py-12 gap-6 flex-col text-center">
        <h1 className="font-bold text-[#1F3042] lg:text-3xl text-2xl px-6 py-2">
          Don’t take our word for it! Have a look at what <br />
          <span className="text-[#FF914D]">our valued clients</span> have to say
        </h1>
      </div>

      {isLargeScreen ? (
        <div className="grid gap-6 w-[80%] grid-cols-1 md:grid-cols-3">
          {reviewVideos.map(
            (card, index) => renderCard(card, index, videoRefs1) // Use refs1 arbitrarily here
          )}
        </div>
      ) : (
        <div className="w-full max-w-[90%] space-y-12">
          {/* First Swiper */}
          <Swiper
            spaceBetween={16}
            slidesPerView={1}
            pagination={{ clickable: true }}
            modules={[Pagination]}
            onSwiper={(swiper) => {
              swiper1Ref.current = swiper;
              setTimeout(() => handleSlideChange(swiper, videoRefs1), 100);
            }}
            onSlideChange={(swiper) => handleSlideChange(swiper, videoRefs1)}
          >
            {firstThree.map((card, index) => (
              <SwiperSlide key={index}>
                {renderCard(card, index, videoRefs1)}
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Second Swiper */}
          {remaining.length > 0 && (
            <Swiper
              spaceBetween={16}
              slidesPerView={1}
              pagination={{ clickable: true }}
              modules={[Pagination]}
              onSwiper={(swiper) => {
                swiper2Ref.current = swiper;
                setTimeout(() => handleSlideChange(swiper, videoRefs2), 100);
              }}
              onSlideChange={(swiper) => handleSlideChange(swiper, videoRefs2)}
            >
              {remaining.map((card, index) => (
                <SwiperSlide key={index}>
                  {renderCard(card, index, videoRefs2)}
                </SwiperSlide>
              ))}
            </Swiper>
          )}
        </div>
      )}

      <button className="btn_3 mt-8">Load More</button>
    </section>
  );
};

export default ReviewSectionThree;
