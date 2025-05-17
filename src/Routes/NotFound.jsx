import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen px-6 text-center bg-slate-50">
      <h1 className="text-7xl font-extrabold text-[#FF914D] mb-4">404</h1>
      <h2 className="text-2xl font-semibold text-slate-800 mb-2">
        Oops! Page Not Found
      </h2>
      <p className="text-slate-600 mb-6 max-w-md">
        The page you’re looking for doesn’t exist or has been moved. Don’t
        worry, let’s get you back on track.
      </p>
      <Link
        to="/"
        className="bg-[#FF914D] text-white px-6 py-3 rounded-md hover:bg-[#e67b33] transition"
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default NotFound;
