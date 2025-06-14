"use client";

import Image from "next/image";
import { PiCaretDown } from "react-icons/pi";
import { FiDownloadCloud, FiThumbsDown, FiThumbsUp } from "react-icons/fi";
import { LuCopy } from "react-icons/lu";
import PromptInput from "../subcomponents/PromptInput";
import Header from "./Header";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";

export default function VideoGenerationPage() {
  const languages = ["En (US)", "En (UK)", "Fr", "De"];
  const voices = ["Marry", "John", "Emma", "David"];
  return (
    <div className="h-screen rounded-xl flex flex-col bg-white dark:bg-[#232127] text-sm">
      <div className="flex-none">
        <Header />
      </div>
      <div className="flex-1 overflow-y-auto p-4 space-y-4 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']">
        <div className="flex justify-end">
          <div className="max-w-[90%] md:max-w-[75%] flex gap-20 mb-4 rounded-2xl border border-[#E2DFFC] dark:border-[#3b3759] overflow-hidden">
            <div className="flex-1 bg-white dark:bg-[#1a1a1a] px-4 py-3">
              <p className="text-sm text-gray-800 dark:text-gray-300 mb-2">
                Effect library connection image main. Rectangle star
                strikethrough bullet fill. Ellipse slice overflow italic style
                align edit inspect horizontal arrow.
              </p>
              <p className="text-sm text-gray-800 dark:text-gray-300 mb-2">
                Ipsum main strikethrough variant object comment boolean move
                background. Asset select list asset align underline auto bold
                community main.
              </p>
              <div className="w-32 h-36 rounded-xl overflow-hidden relative">
                <Image
                  src="/vid.png"
                  alt="photo"
                  width={128}
                  height={144}
                  className="rounded-xl object-cover w-full h-full"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-8 h-8 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center shadow-md">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-4 h-4 text-gray-800 dark:text-gray-300 ml-[2px]"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M6 4l10 6-10 6V4z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-14 bg-[#F4F1FF] dark:bg-[#2b2a40] flex flex-col items-center py-2 px-1">
              <Image
                src="/photo.png"
                alt="avatar"
                width={32}
                height={32}
                className="rounded-full object-cover"
              />
              <span className="text-[10px] text-gray-500 dark:text-gray-400 mt-1">
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

        <div className="flex w-[80%]  bg-[#F9F8FC] dark:bg-[#1c1c2a] gap-4 p-6 rounded-2xl">
          <div className="w-14 flex flex-col items-center bg-[#edebf1] dark:bg-[#2f2e41] rounded-2xl py-4 gap-6">
            <div className="bg-[#EBE9F7] dark:bg-[#3f3d58] p-2 rounded-xl">
              <div className="w-10 h-10 rounded-full bg-[#524E63] flex items-center justify-center">
                <Image
                  src="/Vector.png"
                  alt="icon"
                  width={40}
                  height={40}
                  className="w-5 h-5 text-[#4B4B4B] dark:text-gray-300"
                />
              </div>
            </div>
            <div className="text-[10px] text-gray-400 font-medium">12:22</div>
            <hr className="text-gray-700 dark:text-gray-600" />
            <div className="flex flex-col items-center gap-6 text-gray-500 dark:text-gray-400 mt-2">
              <LuCopy className="w-5 h-5 hover:text-black dark:hover:text-white cursor-pointer" />
              <FiDownloadCloud className="w-5 h-5 hover:text-black dark:hover:text-white cursor-pointer" />
              <FiThumbsUp className="w-5 h-5 hover:text-black dark:hover:text-white cursor-pointer" />
              <FiThumbsDown className="w-5 h-5 hover:text-black dark:hover:text-white cursor-pointer" />
            </div>
          </div>
          <div className="flex flex-col space-y-2">
            <div className="relative w-[320px] h-[210px] rounded-xl overflow-hidden shadow">
              <Image
                src="/videogenerate.png"
                alt="AI generated"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="text-gray-800 dark:text-gray-200 text-sm max-w-lg">
              <p>
                Hand opacity boolean image style distribute. Outline blur layer
                image subtract project bullet variant distribute vertical.
              </p>
            </div>

            <div className="flex items-center gap-2 mt-2">
              {/* Download Button */}
              <button className="w-10 h-8 flex items-center justify-center bg-gradient-to-tr from-[#9254ff] to-[#a974ff] rounded-xl cursor-pointer">
                <FiDownloadCloud className="text-white w-4 h-4" />
              </button>

              {/* Language Dropdown */}
              <Menu as="div" className="relative">
                <MenuButton className="flex items-center outline-none bg-white dark:bg-[#2b2b3b] border border-gray-200 dark:border-gray-600 px-2 py-1 rounded-md text-sm text-gray-700 dark:text-gray-200 gap-1 cursor-pointer">
                  <span>En (US)</span>
                  <PiCaretDown className="w-4 h-4 text-gray-500 dark:text-gray-300" />
                </MenuButton>
                <MenuItems className="absolute z-10 mt-1 w-32 bg-white dark:bg-[#2b2b3b] border border-gray-200 dark:border-gray-600 rounded-md shadow-md focus:outline-none">
                  {languages.map((lang) => (
                    <MenuItem key={lang}>
                      {({ active }) => (
                        <button
                          className={`w-full text-left px-3 py-1 text-sm ${
                            active
                              ? "bg-gray-100 dark:bg-gray-700 text-black dark:text-white"
                              : "text-gray-700 dark:text-gray-200"
                          }`}
                        >
                          {lang}
                        </button>
                      )}
                    </MenuItem>
                  ))}
                </MenuItems>
              </Menu>

              {/* Voice Dropdown */}
              <Menu as="div" className="relative">
                <MenuButton className="flex outline-none items-center bg-white dark:bg-[#2b2b3b] border border-gray-200 dark:border-gray-600 px-2 py-1 rounded-md text-sm text-gray-700 dark:text-gray-200 gap-1 cursor-pointer">
                  <span>
                    Voice <strong>Marry</strong>
                  </span>
                  <PiCaretDown className="w-4 h-4 text-gray-500 dark:text-gray-300" />
                </MenuButton>
                <MenuItems className="absolute z-10 mt-1 w-40 bg-white dark:bg-[#2b2b3b] border border-gray-200 dark:border-gray-600 rounded-md shadow-md focus:outline-none">
                  {voices.map((voice) => (
                    <MenuItem key={voice}>
                      {({ active }) => (
                        <button
                          className={`w-full text-left px-3 py-1 text-sm ${
                            active
                              ? "bg-gray-100 dark:bg-gray-700 text-black dark:text-white"
                              : "text-gray-700 dark:text-gray-200"
                          }`}
                        >
                          Voice {voice}
                        </button>
                      )}
                    </MenuItem>
                  ))}
                </MenuItems>
              </Menu>
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
