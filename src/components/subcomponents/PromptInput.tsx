import React from "react";
import { FaArrowRight, FaPlus } from "react-icons/fa";

const PromptInput = () => {
  return (
    <div className="mt-12 mb-6 relative z-10">
      <div className="flex items-center bg-[#f9f9fb] rounded-full px-4 py-2 shadow-sm border border-[#e5e5ef]">
        <div className="px-3 text-gray-600">
          <FaPlus className="w-4 h-4" />
        </div>

        <div className="w-px h-6 bg-gray-200 mx-2" />
        <input
          type="text"
          placeholder="Ask me anything"
          className="flex-1 text-sm outline-none bg-transparent placeholder-gray-400"
        />
        <div className="w-px h-6 bg-gray-200 mx-2" />

        <button className="px-3 text-purple-600">
          <FaArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default PromptInput;
