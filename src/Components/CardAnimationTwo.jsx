import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import Navbar from "./Navbar";
import { dummyCards } from "../data/data";

// Double the cards for smooth looping
const renderCards = (prefix) =>
  [...dummyCards, ...dummyCards].map((card, idx) => (
    <div
      key={`${prefix}-${idx}`}
      className="bg-white min-w-[300px] max-w-[500px] p-4 rounded-xl shadow-xl border text-sm text-slate-700 flex-shrink-0 flex flex-col gap-2"
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
      <p className="text-xs text-slate-400 mt-3">{card.time}</p>
    </div>
  ));

const CardAnimationTwo = () => {
  const row1Ref = useRef(null);
  const row2Ref = useRef(null);
  const tl1 = useRef(null);
  const tl2 = useRef(null);

  useEffect(() => {
    const animateRow = (ref, direction = "left") => {
      const distance = ref.scrollWidth / 2;

      return gsap.fromTo(
        ref,
        { x: direction === "left" ? 0 : -distance },
        {
          x: direction === "left" ? -distance : 0,
          duration: 40,
          repeat: -1,
          ease: "linear",
        }
      );
    };

    if (row1Ref.current && row2Ref.current) {
      tl1.current = animateRow(row1Ref.current, "left");
      tl2.current = animateRow(row2Ref.current, "right");

      const pauseOnHover = (ref, timeline) => {
        ref.addEventListener("mouseenter", () => timeline.pause());
        ref.addEventListener("mouseleave", () => timeline.play());
      };

      pauseOnHover(row1Ref.current.parentElement, tl1.current);
      pauseOnHover(row2Ref.current.parentElement, tl2.current);
    }

    return () => {
      tl1.current?.kill();
      tl2.current?.kill();
    };
  }, []);

  return (
    <>
      <div className="lg:hidden block space-y-8 w-[95%] mx-auto">
        {/* Row 1 */}
        <div className="w-full overflow-hidden">
          <div ref={row1Ref} className="flex space-x-4 w-max">
            {renderCards("row1")}
          </div>
        </div>

        {/* Row 2 */}
        <div className="w-full overflow-hidden">
          <div ref={row2Ref} className="flex space-x-4 w-max">
            {renderCards("row2")}
          </div>
        </div>
      </div>
    </>
  );
};

export default CardAnimationTwo;
