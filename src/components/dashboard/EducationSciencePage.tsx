"use client";
import { FiThumbsDown, FiThumbsUp, FiDownloadCloud } from "react-icons/fi";
import Image from "next/image";
import { HiOutlineLink } from "react-icons/hi";
import { IoPlayCircleOutline } from "react-icons/io5";
import { FaCheckCircle, FaStar } from "react-icons/fa";
import { LuCopy } from "react-icons/lu";
import Header from "./Header";
import PromptInput from "../subcomponents/PromptInput";

export default function EducationSciencePage() {
  return (
    <div className="h-screen rounded-xl flex flex-col bg-white dark:bg-[#232127] text-sm">
      <div className="flex-none">
        <Header />
      </div>
      <div className="flex-1 overflow-y-auto p-4 space-y-4 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']">
        <div className="flex justify-end">
          <div className="max-w-[90%] md:max-w-[75%] flex border border-gray-200 dark:border-gray-700 rounded-xl">
            <div className="bg-white dark:bg-[#2A2A2A] rounded-2xl flex-1 p-4 text-sm text-gray-700 dark:text-gray-300">
              <div className="flex gap-3 mb-2">
                {[1, 2].map((_, i) => (
                  <div
                    key={i}
                    className="w-28 h-32 rounded-xl bg-gray-100 dark:bg-gray-800 flex flex-col justify-between p-2 relative"
                  >
                    <div className="absolute top-1 right-1 w-5 h-5 rounded-full bg-white dark:bg-gray-700 flex items-center justify-center border border-gray-200 dark:border-gray-600 text-gray-500 text-xs font-medium">
                      +
                    </div>
                    <div className="space-y-1 mt-5">
                      <div className="h-2 bg-gray-300 dark:bg-gray-600 rounded w-4/5"></div>
                      <div className="h-2 bg-gray-300 dark:bg-gray-600 rounded w-3/5"></div>
                      <div className="h-2 bg-gray-200 dark:bg-gray-500 rounded w-2/5"></div>
                    </div>
                    <p className="text-xs font-semibold text-black dark:text-gray-100 mt-2">
                      File Name.ext
                    </p>
                  </div>
                ))}
              </div>
              <p>
                Effect library connection image main. Rectangle star
                strikethrough bullet fill. Ellipse slice overflow italic style
                align edit inspect horizontal arrow.
              </p>
            </div>

            <div className="ml-2 flex flex-col justify-between items-center bg-violet-50 dark:bg-violet-900 px-2 py-1 rounded-r-2xl">
              <Image
                src="/photo.png"
                alt="avatar"
                width={32}
                height={32}
                className="rounded-full"
              />
              <span className="text-[10px] text-gray-500 dark:text-gray-300">
                12:22
              </span>
            </div>
          </div>
        </div>

        <div className="mt-3 w-[80%] flex items-center justify-between bg-gray-100 dark:bg-gray-800 rounded-2xl px-4 py-2">
          <div className="w-10 h-10 rounded-full bg-[#524E63] flex items-center justify-center">
            <HiOutlineLink className="w-5 h-5 text-white" />
          </div>
          <div className="flex items-center gap-2 ml-4">
            <span className="w-2 h-2 rounded-full bg-black dark:bg-white"></span>
            <span className="w-2 h-2 rounded-full bg-gray-400"></span>
            <span className="w-2 h-2 rounded-full bg-gray-300"></span>
          </div>
          <div className="ml-auto text-xs text-gray-600 dark:text-gray-300">
            00
          </div>
        </div>

        <div className="flex min-h-screen bg-[#F9F8FC] dark:bg-[#121212] p-6 rounded-2xl">
          <div className="w-14 flex flex-col items-center bg-[#edebf1] dark:bg-[#2A2A2A] rounded-2xl py-4 gap-6">
            <div className="bg-[#EBE9F7] dark:bg-[#3B3B3B] p-2 rounded-xl">
              <HiOutlineLink className="w-5 h-5 text-[#4B4B4B] dark:text-white" />
            </div>
            <div className="text-[10px] text-gray-400 font-medium">12:22</div>
            <hr className="text-gray-700 dark:text-gray-500" />
            <div className="flex flex-col items-center gap-6 text-gray-500 dark:text-gray-400 mt-2">
              <LuCopy className="w-5 h-5 hover:text-black dark:hover:text-white cursor-pointer" />
              <FiDownloadCloud className="w-5 h-5 hover:text-black dark:hover:text-white cursor-pointer" />
              <FiThumbsUp className="w-5 h-5 hover:text-black dark:hover:text-white cursor-pointer" />
              <FiThumbsDown className="w-5 h-5 hover:text-black dark:hover:text-white cursor-pointer" />
            </div>
          </div>

          <div className="flex-1 ml-6">
            <div className="bg-[#F1EEF9] dark:bg-[#1E1E2F] p-4 rounded-2xl flex justify-between items-start">
              <div className="flex items-center gap-3">
                <div className="bg-[#EBE9F7] dark:bg-[#3B3B3B] p-2 rounded-xl">
                  <FaStar className="text-[#C07F2D] w-4 h-4" />
                </div>
                <div>
                  <p className="font-semibold text-sm text-gray-800 dark:text-gray-200">
                    Very good!
                  </p>
                  <div className="flex text-yellow-400 mt-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <FaStar key={i} className="w-4 h-4" />
                    ))}
                  </div>
                </div>
              </div>
              <button className="flex items-center gap-1 text-sm font-medium text-purple-500 dark:text-purple-300 cursor-pointer">
                <FiDownloadCloud className="w-4 h-4" />
                Download
              </button>
            </div>

            <table className="w-full mt-6 text-sm text-left bg-[#ffffff] dark:bg-[#2A2A2A] rounded-xl px-4">
              <thead className="border-b border-gray-300 dark:border-gray-600 text-gray-500 dark:text-gray-300">
                <tr>
                  <th className="py-2 px-2 font-medium">#</th>
                  <th className="py-2 px-2 font-medium">Incorrect answer</th>
                  <th className="py-2 px-2 font-medium">Correct answer</th>
                  <th className="py-2 px-2 font-medium">Action</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { id: 16, incorrect: "Image", correct: "Move" },
                  { id: 22, incorrect: "Figma", correct: "Share" },
                  {
                    id: 28,
                    incorrect: "Fill layer",
                    correct: "Project polygon",
                  },
                  { id: 13, incorrect: "Slice", correct: "Vector" },
                  { id: 78, incorrect: "Main text", correct: "Device hand" },
                  { id: 99, incorrect: "Clip", correct: "Auto" },
                ].map(({ id, incorrect, correct }) => (
                  <tr
                    key={id}
                    className="border-b border-gray-300 dark:border-gray-600 last:border-none"
                  >
                    <td className="py-2 px-2">{id}</td>
                    <td className="py-2 px-2 text-[#A14D00] font-medium">
                      {incorrect}
                    </td>
                    <td className="py-2 px-2 font-medium text-green-600 dark:text-green-400 flex items-center gap-2">
                      <FaCheckCircle className="w-4 h-4 text-green-500" />
                      {correct}
                    </td>
                    <td className="py-2 px-2 text-gray-600 dark:text-gray-300 text-center">
                      <IoPlayCircleOutline className="w-4 h-4 mx-auto" />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            <div className="mt-4 bg-white dark:bg-[#2A2A2A] p-4 rounded-xl text-sm leading-relaxed text-gray-700 dark:text-gray-300">
              <h3 className="font-bold text-lg mb-2 text-black dark:text-white">
                Hand opacity boolean
              </h3>
              <p>
                <strong>Prototype opacity</strong> effect opacity figjam undo
                ipsum auto. Draft figjam figjam slice share.
              </p>
              <p>
                <strong>Align stroke pen</strong> background stroke team arrow
                pencil. Strikethrough ellipse device auto pen.
              </p>
              <p>
                <strong>Ipsum project</strong> comment share fill. Scrolling
                editor share effect export.
              </p>
              <p>
                <strong>Arrange editor</strong> align component vertical. Clip
                select export ellipse bullet edit text underline scrolling.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-none rounded-xl sticky bottom-0 bg-white dark:bg-[#1c1c1f] border-gray-200 dark:border-gray-700 px-4 py-3">
        <PromptInput />
      </div>
    </div>
  );
}
