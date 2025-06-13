"use client";

import Image from "next/image";
import { HiOutlineLink } from "react-icons/hi";
import { PiCaretDown } from "react-icons/pi";
import { FiDownloadCloud, FiThumbsDown, FiThumbsUp } from "react-icons/fi";
import { LuCopy } from "react-icons/lu";
import Header from "./Header";
import PromptInput from "../subcomponents/PromptInput";

export default function VoiceToolsPage() {
  return (
    <div className="h-screen rounded-xl flex flex-col bg-white dark:bg-[#232127] text-sm">
      <div className="flex-none">
        <Header />
      </div>
      <div className="flex-1 overflow-y-auto p-4 space-y-4 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']">
        <div className="flex justify-end">
          <div className="max-w-[90%] md:max-w-[75%] flex gap-5 mb-4 rounded-2xl border border-gray-300 dark:border-[#6a5e8f] overflow-hidden">
            <div className="flex-1 bg-white dark:bg-transparent px-4 py-3">
              <p className="text-sm font-normal text-gray-800 dark:text-gray-200 mb-2">
                Follower content scale mask duplicate reesizing device follower
                create. Bold ipsum arrow scrolling subtract polygon.
              </p>
            </div>
            <div className="w-14 bg-[#F4F1FF] dark:bg-[#27212F] flex flex-col justify-center items-center py-2 px-1">
              <Image
                src="/photo.png"
                alt="avatar"
                width={30}
                height={30}
                className="rounded-full object-cover"
              />
              <span className="text-[10px] text-gray-500 dark:text-gray-300 mt-1">
                12:22
              </span>
            </div>
          </div>
        </div>

        <div className="mt-3 mb-6 w-[80%] flex items-center justify-between bg-gray-100 dark:bg-[#302d35] rounded-2xl px-4 py-2">
          <div className="w-10 h-10 rounded-full bg-[#524E63] flex items-center justify-center">
            <Image
              src="/Vector.png"
              alt="icon"
              width={40}
              height={40}
              className="w-5 h-5 text-[#4B4B4B] dark:text-gray-300"
            />
          </div>
          <div className="flex items-center gap-2 ml-4">
            <span className="w-2 h-2 rounded-sm bg-gray-400 dark:bg-gray-500 animate-dot-1 dark:animate-dot-1-dark" />
            <span className="w-2 h-2 rounded-sm bg-gray-400 dark:bg-gray-500 animate-dot-2 dark:animate-dot-2-dark" />
            <span className="w-2 h-2 rounded-sm bg-gray-400 dark:bg-gray-500 animate-dot-3 dark:animate-dot-3-dark" />
          </div>
          <div className="ml-auto text-xs text-gray-600 dark:text-gray-300">
            00
          </div>
        </div>

        <div className="flex h-[60vh] bg-[#F9F8FC] dark:bg-[#27272a] gap-4 p-6 rounded-2xl">
          <div className="w-14 flex flex-col items-center bg-[#edebf1] dark:bg-[#3d3b45] rounded-2xl py-4 gap-6">
            <div className="bg-[#EBE9F7] dark:bg-[#4b4961] p-2 rounded-xl">
              <HiOutlineLink className="w-5 h-5 text-[#4B4B4B] dark:text-white" />
            </div>
            <div className="text-[10px] text-gray-400 dark:text-gray-300 font-medium">
              12:22
            </div>
            <hr className="text-gray-700 dark:text-gray-500" />
            <div className="flex flex-col items-center gap-6 text-gray-500 dark:text-gray-400 mt-2">
              <LuCopy className="w-5 h-5 hover:text-black dark:hover:text-white cursor-pointer" />
              <FiDownloadCloud className="w-5 h-5 hover:text-black dark:hover:text-white cursor-pointer" />
              <FiThumbsUp className="w-5 h-5 hover:text-black dark:hover:text-white cursor-pointer" />
              <FiThumbsDown className="w-5 h-5 hover:text-black dark:hover:text-white cursor-pointer" />
            </div>
          </div>

          <div className="flex flex-col space-y-2">
            <div className="text-gray-800 dark:text-gray-100 text-sm max-w-lg">
              <p>
                Vertical inspect effect library flatten strikethrough list
                export overflow outline. Figjam vertical share background export
                outline align mask edit list. Asset strikethrough layout.
              </p>
            </div>

            <div className="relative w-[320px] h-[210px] rounded-xl overflow-hidden shadow">
              <Image
                src="/videogenerate.png"
                alt="AI generated"
                layout="fill"
                objectFit="cover"
              />
            </div>

            <div className="flex items-center gap-2 mt-2">
              <button className="w-10 h-8 flex items-center justify-center bg-gradient-to-tr from-[#9254ff] to-[#a974ff] rounded-xl cursor-pointer">
                <FiDownloadCloud className="text-white w-4 h-4" />
              </button>

              <div className="flex items-center bg-white dark:bg-[#2b2b2b] border border-gray-200 dark:border-gray-600 px-2 py-1 rounded-md text-sm text-gray-700 dark:text-gray-200 gap-1 cursor-pointer">
                <span>En (US)</span>
                <PiCaretDown className="w-4 h-4 text-gray-500 dark:text-gray-300" />
              </div>

              <div className="flex items-center bg-white dark:bg-[#2b2b2b] border border-gray-200 dark:border-gray-600 px-2 py-1 rounded-md text-sm text-gray-700 dark:text-gray-200 gap-1 cursor-pointer">
                <span>
                  Voice <strong>Marry</strong>
                </span>
                <PiCaretDown className="w-4 h-4 text-gray-500 dark:text-gray-300" />
              </div>
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
