import React from "react";

const PostHeader = () => {
  return (
    <div className="bg-white -mt-40 rounded-2xl shadow-md p-8 border border-slate-200 grid lg:grid-cols-4 grid-cols-2 gap-6 text-center">
      <div className="flex flex-col items-center">
        <h5 className="text-3xl font-black">10+</h5>
        <span>Years of experience</span>
      </div>

      <div className="flex flex-col items-center">
        <h5 className="text-3xl font-black">10+</h5>
        <span>Amazing customers</span>
      </div>

      <div className="flex flex-col items-center">
        <h5 className="text-3xl font-black">300+</h5>
        <span>Hours of cleaning</span>
      </div>

      <div className="flex flex-col items-center">
        <h5 className="text-3xl font-black">100+</h5>
        <span>Projects done</span>
      </div>
    </div>
  );
};

export default PostHeader;
