import React from "react";
import { reviews } from "../data/data";
import CardAnimationTwo from "./CardAnimationTwo";

const ReviewSectionTwo = () => {
  return (
    <section className="px-6 flex justify-center items-center flex-col md:px-8 py-12">
      <div className="flex justify-center items-center py-12 gap-6 flex-col text-center">
        <h1 className="font-bold text-[#1F3042] lg:text-3xl text-2xl px-6 py-2">
          Popular{" "}
          <span className="bg-[url('/stroke.png')] bg-center bg-cover font-bold rounded-full">
            Customer Stories
          </span>
        </h1>
        <p>
          Learn how Crisp Cleaning customers{" "}
          <span className="text-[#FF914D]">save time, effort and money</span>
        </p>
      </div>

      <div className="lg:flex hidden justify-center lg:w-[90%] p-4 mt-12">
        <div className="grid lg:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-4xl shadow-xl border text-sm text-slate-700 flex flex-col gap-2"
            >
              {/* Header */}
              <div className="flex justify-between items-center mb-2">
                <div className="flex items-center">
                  <span>
                    <img
                      src={review.profile}
                      className="w-12 h-12 rounded-full mr-6"
                      alt=""
                    />
                  </span>
                  <div>
                    <p className="font-semibold text-base text-black">
                      {review.name}
                    </p>
                    <p className="text-xs text-slate-500">{review.role}</p>
                  </div>
                </div>
                <img src={review.logo} alt="logo" className="h-6 w-auto" />
              </div>

              {/* Review paragraphs */}
              <div className="space-y-2 text-sm leading-relaxed">
                {review.content.map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>

              {/* Timestamp */}
              <p className="text-xs text-slate-400 mt-3">{review.time}</p>
            </div>
          ))}
        </div>
      </div>

      <CardAnimationTwo />
    </section>
  );
};

export default ReviewSectionTwo;
