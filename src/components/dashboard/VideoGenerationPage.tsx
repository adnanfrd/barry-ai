"use client";

import Image from "next/image";
import { HiOutlineLink } from "react-icons/hi";
import {
  PiCaretDown,
} from "react-icons/pi";
import { FiDownloadCloud, FiThumbsDown, FiThumbsUp } from "react-icons/fi";
import { LuCopy } from "react-icons/lu";

export default function VideoGenerationPage() {
  return (
    <div className="min-h-screen bg-[#ffff] p-4 text-sm">
      <div className="flex justify-end">
        <div className="max-w-[90%] md:max-w-[75%] flex gap-20 mb-4 rounded-2xl border border-[#E2DFFC] overflow-hidden">
          <div className="flex-1 bg-white px-4 py-3">
            <p className="text-sm text-gray-800 mb-2">
              Effect library connection image main. Rectangle star strikethrough
              bullet fill. Ellipse slice overflow italic style align edit
              inspect horizontal arrow.
            </p>
            <p className="text-sm text-gray-800 mb-2">
              Ipsum main strikethrough variant object comment boolean move
              background. Asset select list asset align underline auto bold
              community main.
            </p>
            <div className="w-32 h-36 rounded-xl overflow-hidden relative">
              <Image
                src="/photo.png"
                alt="photo"
                width={128}
                height={144}
                className="rounded-xl object-cover w-full h-full"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-4 h-4 text-gray-800 ml-[2px]"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M6 4l10 6-10 6V4z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="w-14 bg-[#F4F1FF] flex flex-col items-center py-2 px-1">
            <Image
              src="/image.png"
              alt="avatar"
              width={32}
              height={32}
              className="rounded-full object-cover"
            />
            <span className="text-[10px] text-gray-500 mt-1">12:22</span>
          </div>
        </div>
      </div>

      <div className="mt-3 mb-6 w-[80%] flex items-center justify-between bg-gray-100 rounded-2xl px-4 py-2">
        <div className="w-10 h-10 rounded-full bg-[#524E63] flex items-center justify-center">
          <HiOutlineLink className="w-5 h-5 text-white" />
        </div>
        <div className="flex items-center gap-2 ml-4">
          <span className="w-2 h-2 rounded-full bg-black"></span>
          <span className="w-2 h-2 rounded-full bg-gray-400"></span>
          <span className="w-2 h-2 rounded-full bg-gray-300"></span>
        </div>
        <div className="ml-auto text-xs text-gray-600">00</div>
      </div>
      <div className="flex h-[60vh] bg-[#F9F8FC] gap-4 p-6 rounded-2xl">
        <div className="w-14 flex flex-col items-center bg-[#edebf1] rounded-2xl py-4 gap-6">
          <div className="bg-[#EBE9F7] p-2 rounded-xl">
            <HiOutlineLink className="w-5 h-5 text-[#4B4B4B]" />
          </div>
          <div className="text-[10px] text-gray-400 font-medium">12:22</div>
          <hr className="text-gray-700" />
          <div className="flex flex-col items-center gap-6 text-gray-500 mt-2">
            <LuCopy className="w-5 h-5 hover:text-black cursor-pointer" />
            <FiDownloadCloud className="w-5 h-5 hover:text-black cursor-pointer" />
            <FiThumbsUp className="w-5 h-5 hover:text-black cursor-pointer" />
            <FiThumbsDown className="w-5 h-5 hover:text-black cursor-pointer" />
          </div>
        </div>
        <div className="flex flex-col space-y-2">
          <div className="text-gray-800 text-sm max-w-lg">
            <p>
              Vertical inspect effect library flatten strikethrough list export
              overflow outline. Figjam vertical share background export outline
              align mask edit list. Asset strikethrough layout.
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

            <div className="flex items-center bg-white border border-gray-200 px-2 py-1 rounded-md text-sm text-gray-700 gap-1 cursor-pointer">
              <span>En (US)</span>
              <PiCaretDown className="w-4 h-4 text-gray-500" />
            </div>

            <div className="flex items-center bg-white border border-gray-200 px-2 py-1 rounded-md text-sm text-gray-700 gap-1 cursor-pointer">
              <span>
                Voice <strong>Marry</strong>
              </span>
              <PiCaretDown className="w-4 h-4 text-gray-500" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
