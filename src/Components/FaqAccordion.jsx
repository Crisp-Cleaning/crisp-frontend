import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CaretDown, CaretUp, Minus, Plus } from "@phosphor-icons/react";

const FaqAccordion = ({ data }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleIndex = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="mt-6">
      {data.map((item, index) => (
        <div key={index} className="mb-6 bg-white p-6 shadow-lg rounded-md border border-slate-200">
          <button
            onClick={() => toggleIndex(index)}
            className="w-full text-left flex items-center justify-between"
          >
            <span className="text-base font-medium text-gray-800">
              {item.question}
            </span>
            {openIndex === index ? (
              <Minus className="w-5 h-5 text-orange-500" />
            ) : (
              <Plus className="w-5 h-5 text-gray-500" />
            )}
          </button>
          <AnimatePresence>
            {openIndex === index && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="overflow-hidden text-sm text-gray-600 mt-2 pr-2"
              >
                {item.answer}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
};

export default FaqAccordion;
