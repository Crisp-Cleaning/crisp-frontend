import React, { useState } from "react";
import { navDetails } from "../data/data";
import { NavLink } from "react-router-dom";
import { List, X } from "@phosphor-icons/react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="relative z-50">
      <div className="px-4 py-2 rounded-full shadow-xl border bg-white border-slate-200 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <img src="/logo.svg" className="-ml-6 w-56" alt="Logo" />
          {navDetails.map((link) => (
            <NavLink
              to={link.url}
              key={link.id}
              className={({ isActive }) =>
                `lg:block hidden hover:text-black transition-colors ease-in duration-300 ${
                  isActive ? "text-[#FF914D] font-bold" : ""
                }`
              }
            >
              <h5>{link.name}</h5>
            </NavLink>
          ))}
        </div>

        <div className="lg:flex hidden items-center gap-4">
          <button className="cursor-pointer">Login</button>
          <button className="btn">Get started now</button>
        </div>

        {/* Mobile Hamburger Menu */}
        <button
          className="btn lg:hidden flex"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          {isOpen ? <X size={28} /> : <List size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden absolute top-full left-0 w-full bg-white shadow-md rounded-md mt-2 px-6 py-4"
          >
            <div className="flex flex-col gap-4">
              {navDetails.map((link) => (
                <NavLink
                  to={link.url}
                  key={link.id}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `hover:text-black transition-colors ease-in duration-300 ${
                      isActive ? "text-[#FF914D] font-bold" : ""
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
              <hr className="my-2" />
              <button className="text-left text-slate-600">Login</button>
              <button className="btn w-full">Get started now</button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
