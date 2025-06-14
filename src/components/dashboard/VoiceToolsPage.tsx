"use client";
import Image from "next/image";
import { FiDownloadCloud, FiThumbsDown, FiThumbsUp } from "react-icons/fi";
import { LuCopy } from "react-icons/lu";
import Header from "./Header";
import PromptInput from "../subcomponents/PromptInput";
import {
  FaCode,
  FaGraduationCap,
  FaImage,
  FaMicrophone,
  FaPlay,
  FaRegFileAlt,
  FaVideo,
} from "react-icons/fa";
import { MdEdit } from "react-icons/md";

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

        <div className="flex bg-[#F9F8FC] dark:bg-[#18181B] gap-4 p-4 md:p-6 rounded-2xl w-[80%]">
          {/* Sidebar */}
          <div className="w-14 flex flex-col p-2 items-center bg-[#edebf1] dark:bg-[#2b2a33] rounded-2xl py-4 gap-4">
            <div className="bg-[#524E63] dark:bg-[#3c384a] p-2 rounded-xl">
              <Image
                src="/Vector.png"
                alt="icon"
                width={20}
                height={20}
                className="w-5 h-5"
              />
            </div>
            <div className="text-[10px] text-gray-500 dark:text-gray-300 font-medium">
              12:22
            </div>
            <div className="w-4/5 h-px bg-gray-300 dark:bg-gray-600 my-1" />
            <div className="flex flex-col items-center gap-4 text-gray-500 dark:text-gray-400 mt-1">
              <LuCopy className="w-4 h-4 hover:text-black dark:hover:text-white cursor-pointer" />
              <FiDownloadCloud className="w-4 h-4 hover:text-black dark:hover:text-white cursor-pointer" />
              <FiThumbsUp className="w-4 h-4 hover:text-black dark:hover:text-white cursor-pointer" />
              <FiThumbsDown className="w-4 h-4 hover:text-black dark:hover:text-white cursor-pointer" />
            </div>
          </div>

          {/* Main Content */}
          <div className="flex flex-col space-y-3">
            <p className="text-[13px] text-gray-700 dark:text-gray-200 leading-relaxed">
              Vertical inspect effect library flatten strikethrough list export
              overflow outline. Figjam vertical share background export outline
              align mask edit list. Asset strikethrough layout.
            </p>

            <div className="grid grid-cols-2 gap-2 mt-1">
              <ToolButton
                icon={<FaImage className="text-purple-500" />}
                label="Photo Generation"
              />
              <ToolButton
                icon={<FaVideo className="text-green-500" />}
                label="Video Generation"
              />
              <ToolButton
                icon={<FaGraduationCap className="text-pink-500" />}
                label="Education & Science"
              />
              <ToolButton
                icon={<FaCode className="text-indigo-500" />}
                label="Code Generation"
              />
              <ToolButton
                icon={<FaMicrophone className="text-sky-500" />}
                label="Voice Tools"
              />
              <ToolButton
                icon={<FaRegFileAlt className="text-yellow-600" />}
                label="Text Recognition"
              />
            </div>
          </div>
        </div>
        <div className="flex justify-end">
          <div className="max-w-[90%] md:max-w-[75%] flex gap-5 mb-4 rounded-2xl border border-gray-300 dark:border-[#6a5e8f] overflow-hidden">
            <div className="flex-1 bg-white dark:bg-transparent px-4 py-3">
              <p className="text-sm font-normal text-gray-800 dark:text-gray-200 mb-2">
                Opacity star scrolling draft pixel distribute. Horizontal select
                thumbnail underline figjam scrolling boolean community. Variant
                font strikethrough bullet.
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
        <div className="flex bg-[#F9F8FC] dark:bg-[#18181B] gap-4 p-4 md:p-6 rounded-2xl w-[80%]">
          {/* Sidebar */}
          <div className="w-14 flex flex-col p-2 items-center bg-[#edebf1] dark:bg-[#2b2a33] rounded-2xl py-4 gap-4">
            <div className="bg-[#524E63] dark:bg-[#3c384a] p-2 rounded-xl">
              <Image
                src="/Vector.png"
                alt="icon"
                width={20}
                height={20}
                className="w-5 h-5"
              />
            </div>
            <div className="text-[10px] text-gray-500 dark:text-gray-300 font-medium">
              12:22
            </div>
            <div className="w-4/5 h-px bg-gray-300 dark:bg-gray-600 my-1" />
            <div className="flex flex-col items-center gap-4 text-gray-500 dark:text-gray-400 mt-1">
              <LuCopy className="w-4 h-4 hover:text-black dark:hover:text-white cursor-pointer" />
              <FiDownloadCloud className="w-4 h-4 hover:text-black dark:hover:text-white cursor-pointer" />
              <FiThumbsUp className="w-4 h-4 hover:text-black dark:hover:text-white cursor-pointer" />
              <FiThumbsDown className="w-4 h-4 hover:text-black dark:hover:text-white cursor-pointer" />
            </div>
          </div>

          {/* Main Content */}
          <div className="flex flex-col w-full space-y-3">
            <p className="text-[13px] w-[80%] text-gray-700 dark:text-gray-200 leading-relaxed">
              Vertical inspect effect library flatten strikethrough list export
              overflow outline. Figjam vertical share background export outline
              align mask edit list. Asset strikethrough layout.
            </p>

            {/* Audio Player */}
            <div className="flex items-center bg-white dark:bg-[#1c1c1f] border border-gray-200 dark:border-gray-700 rounded-lg px-4 py-2 w-full max-w-sm">
              {/* Play Button */}
              <button className="text-gray-600 dark:text-gray-300 mr-3">
                <FaPlay className="w-4 h-4" />
              </button>

              {/* Waveform Bar */}
              <div className="flex-1 h-10 flex items-center gap-[1px]">
                {/* Simulated waveform with bars */}
                {Array.from({ length: 100 }).map((_, i) => (
                  <div
                    key={i}
                    className={`w-[2px] rounded-sm ${
                      i % 6 === 0
                        ? "h-6"
                        : i % 5 === 0
                        ? "h-5"
                        : i % 4 === 0
                        ? "h-4"
                        : i % 3 === 0
                        ? "h-3"
                        : "h-2"
                    } bg-gray-400 dark:bg-gray-500`}
                  />
                ))}
              </div>

              <span className="text-[11px] text-gray-500 dark:text-gray-300 ml-3">
                00:22
              </span>
            </div>

            {/* Controls */}
            <div className="flex flex-wrap gap-2 items-center">
              <button className="flex items-center gap-1 px-3 py-1 bg-[#8359E3] hover:bg-[#724ad4] text-white text-sm rounded-lg">
                Export
              </button>

              <button className="flex items-center gap-1 px-2 py-1 bg-white dark:bg-[#1c1c1f] border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-100 text-sm rounded-lg">
                <MdEdit className="w-4 h-4" />
              </button>

              <select className="text-sm px-3 py-1 rounded-lg bg-white dark:bg-[#1c1c1f] border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-100">
                <option>En (US)</option>
              </select>

              <select className="text-sm px-3 py-1 rounded-lg bg-white dark:bg-[#1c1c1f] border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-100">
                <option>Speed Normal</option>
              </select>

              <select className="text-sm px-3 py-1 rounded-lg bg-white dark:bg-[#1c1c1f] border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-100">
                <option>Voice Marry</option>
              </select>

              <select className="text-sm px-3 py-1 rounded-lg bg-white dark:bg-[#1c1c1f] border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-100">
                <option>Tone Friendly</option>
              </select>
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

function ToolButton({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <button className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-gray-700 dark:text-gray-200 bg-white dark:bg-[#232127] border border-gray-200 dark:border-gray-700 rounded-lg shadow-sm hover:shadow transition">
      <span className="text-lg">{icon}</span>
      {label}
    </button>
  );
}
