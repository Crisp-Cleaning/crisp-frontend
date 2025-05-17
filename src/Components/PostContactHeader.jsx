import { HeadsetIcon, QuestionMarkIcon, Star } from "@phosphor-icons/react";
import React from "react";

const PostContactHeader = () => {
  return (
    <div className="-mt-30 flex overflow-x-auto lg:justify-center w-full gap-4 items-center px-4 pb-12">
      <div className="min-w-[15rem] h-72 bg-white shadow-2xl border border-slate-200 flex-col flex justify-between p-8 rounded-md flex-shrink-0">
        <Star
          className="w-10 p-2 h-10 rounded-full border border-[#FF914D] bg-slate-300 flex items-center justify-center"
          size={20}
        />
        <h5 className="font-bold text-lg">Popular Questions</h5>
        <h5>
          Answers to common questions <br /> about our cleaning services and{" "}
          <br /> policies
        </h5>
        <small className="text-[#FF914D] hover:underline ease-in-out duration-300 transition-all cursor-pointer">
          Visit Now
        </small>
      </div>
      <div className="min-w-[15rem] h-72 bg-white shadow-2xl border border-slate-200 flex-col flex justify-between p-8 rounded-md flex-shrink-0">
        <HeadsetIcon
          className="w-10 p-2 h-10 rounded-full border border-[#FF914D] bg-slate-300 flex items-center justify-center"
          size={20}
        />
        <h5 className="font-bold text-lg">Contact Support</h5>
        <h5>
          Have a question or need <br /> assistance? Our dedicated <br />{" "}
          support team is here to help.
        </h5>
        <small className="text-[#FF914D] hover:underline ease-in-out duration-300 transition-all cursor-pointer">
          Visit Now
        </small>
      </div>
      <div className="min-w-[15rem] h-72 bg-white shadow-2xl border border-slate-200 flex-col flex justify-between p-8 rounded-md flex-shrink-0">
        <QuestionMarkIcon
          className="w-10 p-2 h-10 rounded-full border border-[#FF914D] bg-slate-300 flex items-center justify-center"
          size={20}
        />
        <h5 className="font-bold text-lg">Learn More</h5>
        <h5>
          If you require assistance, please <br /> visit our about page for more{" "}
          <br /> information.
        </h5>
        <small className="text-[#FF914D] hover:underline ease-in-out duration-300 transition-all cursor-pointer">
          Visit Now
        </small>
      </div>
    </div>
  );
};

export default PostContactHeader;
