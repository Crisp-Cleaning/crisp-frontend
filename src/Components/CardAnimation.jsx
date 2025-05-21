import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import Navbar from "./Navbar";
import { dummyCards } from "../data/data";

const renderCards = (prefix) =>
  dummyCards.concat(dummyCards).map((card, idx) => (
    <div
      key={`${prefix}-${idx}`}
      className="bg-white p-4 rounded-xl shadow-xl border text-sm text-slate-700 flex flex-col gap-2"
    >
      {/* Header */}
      <div className="flex justify-between items-center mb-2">
        <div className="flex items-center">
          <span>
            <img
              src={card.profile}
              className="w-12 h-12 rounded-full mr-6"
              alt=""
            />
          </span>
          <div>
            <p className="font-semibold text-base text-black">{card.name}</p>
            <p className="text-xs text-slate-500">{card.role}</p>
          </div>
        </div>
        <img src={card.logo} alt="logo" className="h-6 w-auto" />
      </div>

      {/* Review paragraphs */}
      <div className="space-y-2 text-sm leading-relaxed">
        {card.content.map((para, i) => (
          <p key={i}>{para}</p>
        ))}
      </div>

      {/* Timestamp */}
      <p className="text-xs text-slate-400 mt-3">{card.time}</p>
    </div>
  ));

const CardAnimation = () => {
  const col1Ref = useRef(null);
  const col2Ref = useRef(null);
  const tl1 = useRef(null);
  const tl2 = useRef(null);

  useEffect(() => {
    const animateColumn = (target, direction = "up") => {
      const scrollAmount = target.scrollHeight / 2;

      return gsap.fromTo(
        target,
        { y: direction === "up" ? 0 : -scrollAmount },
        {
          y: direction === "up" ? -scrollAmount : 0,
          duration: 40,
          repeat: -1,
          ease: "linear",
        }
      );
    };

    tl1.current = animateColumn(col1Ref.current, "up");
    tl2.current = animateColumn(col2Ref.current, "down");

    const pauseOnHover = (ref, timeline) => {
      ref.addEventListener("mouseenter", () => timeline.pause());
      ref.addEventListener("mouseleave", () => timeline.play());
    };

    pauseOnHover(col1Ref.current.parentElement, tl1.current);
    pauseOnHover(col2Ref.current.parentElement, tl2.current);

    return () => {
      tl1.current.kill();
      tl2.current.kill();
    };
  }, []);

  return (
    <>
      {/* Auto-scrolling card grid */}
      <div className="relative lg:grid hidden -mt-50 h-[600px] grid-cols-2 gap-4">
        {/* Column 1 */}
        <div className="overflow-hidden">
          <div ref={col1Ref} className="flex flex-col space-y-4">
            {renderCards("col1")}
          </div>
        </div>

        {/* Column 2 */}
        <div className="overflow-hidden">
          <div ref={col2Ref} className="flex flex-col space-y-4">
            {renderCards("col2")}
          </div>
        </div>
      </div>


      <div>
        <video src="/videos/vid_2.mp4" controls autoPlay className="lg:hidden block w-full rounded-md" />
      </div>
    </>
  );
};

export default CardAnimation;
