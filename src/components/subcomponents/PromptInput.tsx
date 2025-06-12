"use client";

import React, { useState, Fragment } from "react";
import {
  FaArrowRight,
  FaPlus,
  FaTimes,
  FaImage,
  FaVideo,
  FaMusic,
  FaFileAlt,
} from "react-icons/fa";
import {
  Transition,
  Dialog,
  TransitionChild,
  DialogPanel,
} from "@headlessui/react";
import { FiUploadCloud } from "react-icons/fi";

const PromptInput = () => {
  const [expanded, setExpanded] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openUploadModal = () => setIsModalOpen(true);
  const closeUploadModal = () => setIsModalOpen(false);

  return (
    <>
      <div className="mt-12 mb-6 relative z-10">
        <div className="relative flex items-center bg-[#f9f9fb] dark:bg-[#1f1f25] rounded-full px-4 py-2 shadow-sm border border-[#e5e5ef] dark:border-[#333] min-h-[48px] transition-all duration-300">
          {/* Expand/Collapse Button */}
          <button
            onClick={() => setExpanded(!expanded)}
            className="z-20 px-2 text-gray-600 dark:text-gray-300 flex items-center justify-center"
          >
            {expanded ? (
              <FaTimes className="w-4 h-4" />
            ) : (
              <FaPlus className="w-4 h-4" />
            )}
          </button>

          {/* Icon Group */}
          <div className="ml-2 relative z-10">
            <Transition
              show={expanded}
              enter="transition-all duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="transition-all duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="flex gap-3 bg-[#f9f9fb] dark:bg-[#1f1f25] px-2 py-1 rounded-full">
                <button onClick={openUploadModal}>
                  <FaImage className="w-4 h-4 text-gray-700 dark:text-gray-300" />
                </button>
                <button onClick={openUploadModal}>
                  <FaVideo className="w-4 h-4 text-gray-700 dark:text-gray-300" />
                </button>
                <button onClick={openUploadModal}>
                  <FaMusic className="w-4 h-4 text-gray-700 dark:text-gray-300" />
                </button>
                <button onClick={openUploadModal}>
                  <FaFileAlt className="w-4 h-4 text-gray-700 dark:text-gray-300" />
                </button>
              </div>
            </Transition>
          </div>

          {/* Divider */}
          <div className="w-px h-6 bg-gray-200 dark:bg-gray-600 mx-2 z-10" />

          {/* Text Input */}
          <input
            type="text"
            placeholder="Ask me anything"
            className="flex-1 pl-1 text-sm outline-none bg-transparent placeholder-gray-400 dark:placeholder-gray-500 text-black dark:text-white transition-all duration-300"
          />

          {/* Divider */}
          <div className="w-px h-6 bg-gray-200 dark:bg-gray-600 mx-2" />

          {/* Submit Button */}
          <button className="px-3 text-purple-600 dark:text-purple-400 z-10">
            <FaArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Upload Modal */}
      <Transition show={isModalOpen} as={Fragment}>
        <Dialog as="div" className="relative z-50" onClose={closeUploadModal}>
          <TransitionChild
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 backdrop-blur-none"
            enterTo="opacity-100 backdrop-blur-sm"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 backdrop-blur-sm"
            leaveTo="opacity-0 backdrop-blur-none"
          >
            <div className="fixed inset-0 bg-black/20 backdrop-blur-sm transition-opacity" />
          </TransitionChild>

          <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
            <TransitionChild
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <DialogPanel className="w-full max-w-md rounded-xl dark:bg-gray-700 bg-white px-2 py-8 text-center shadow-lg">
                <div className="flex justify-center text-purple-500 mb-2 text-3xl">
                  <FiUploadCloud />
                </div>
                <p className="text-sm text-gray-700 dark:text-white">
                  <span className="text-purple-600 font-medium cursor-pointer hover:underline">
                    Upload a file
                  </span>{" "}
                  or drag and drop
                </p>
                <p className="text-xs text-gray-400 dark:text-white mt-1">
                  PNG, JPG, GIF up to 10Mb
                </p>
              </DialogPanel>
            </TransitionChild>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default PromptInput;
