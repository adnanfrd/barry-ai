"use client";

import { useState, Fragment } from "react";
import Image from "next/image";
import { Menu, Transition } from "@headlessui/react";
import { FaEllipsisV, FaRegStar } from "react-icons/fa";
import { HiOutlineShare } from "react-icons/hi";
import { TbMessage2, TbThumbUp, TbThumbDown } from "react-icons/tb";
import { PiExport, PiStar, PiArrowsClockwise, PiEyeSlash } from "react-icons/pi";

export default function PhotoGenerationPage() {
  const [activeTab, setActiveTab] = useState("Blanced");
  const tabs = ["Blanced", "Creative", "Precise"];

  return (
    <div className="min-h-screen bg-[#fafafa] p-4 text-sm">
      {/* Top header */}
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-xl font-bold">Photo Generation</h1>
        <div className="flex items-center space-x-3 text-gray-500">
          <FaRegStar />
          <HiOutlineShare />
          <Menu as="div" className="relative">
            <Menu.Button><FaEllipsisV /></Menu.Button>
            <Transition as={Fragment}>
              <Menu.Items className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5">
                <Menu.Item>
                  {({ active }) => (
                    <button className={`block w-full px-4 py-2 text-left text-sm ${active ? "bg-gray-100" : ""}`}>
                      Option
                    </button>
                  )}
                </Menu.Item>
              </Menu.Items>
            </Transition>
          </Menu>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex space-x-3 mb-6">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-1 rounded-full text-xs font-medium border ${
              activeTab === tab
                ? "bg-black text-white border-black"
                : "border-gray-300 text-gray-600"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* User Message */}
      <div className="flex justify-end mb-4">
        <div className="max-w-xs bg-white border border-[#d7d1ea] rounded-xl p-2 text-sm shadow-sm">
          <p className="mb-2">Retouch this photo</p>
          <Image
            src="/photo.png"
            alt="user img"
            width={160}
            height={96}
            className="rounded"
          />
        </div>
        <div className="ml-2">
          <Image
            src="/image.png"
            alt="avatar"
            width={32}
            height={32}
            className="rounded-full"
          />
        </div>
      </div>

      {/* AI Response */}
      <div className="flex gap-2">
        {/* Left vertical icons */}
        <div className="w-10 flex flex-col items-center text-gray-400 space-y-4 pt-2">
          <Image src="/app-icon.png" alt="bot" width={24} height={24} />
          <TbMessage2 className="w-4 h-4" />
          <TbThumbUp className="w-4 h-4" />
          <TbThumbDown className="w-4 h-4" />
        </div>

        {/* Main Content */}
        <div className="flex flex-col space-y-2">
          <div className="text-gray-800 text-sm max-w-lg">
            <p>
              Vertical inspect effect library flatten strikethrough list export overflow outline. Figjam vertical share background export outline align mask edit list. Asset strikethrough layout.
            </p>
          </div>

          {/* Image output */}
          <div className="relative w-[320px] h-[210px] rounded overflow-hidden shadow">
            <Image
              src="/photo.png"
              alt="AI generated"
              layout="fill"
              objectFit="cover"
            />
          </div>

          {/* Footer buttons */}
          <div className="flex items-center gap-2 mt-2">
            <button className="bg-[#9254ff] text-white text-xs font-medium px-3 py-1 rounded-md">Export</button>
            <button className="p-1 bg-white border rounded-md"><PiEyeSlash className="w-4 h-4" /></button>
            <button className="p-1 bg-white border rounded-md"><PiArrowsClockwise className="w-4 h-4" /></button>
            <button className="p-1 bg-white border rounded-md"><PiStar className="w-4 h-4" /></button>
          </div>
        </div>
      </div>

      {/* Dots Footer */}
      <div className="mt-6 flex items-center space-x-2 ml-12">
        <div className="w-2.5 h-2.5 bg-gray-800 rounded-full" />
        <div className="w-2.5 h-2.5 bg-gray-300 rounded-full" />
        <div className="w-2.5 h-2.5 bg-gray-300 rounded-full" />
      </div>
    </div>
  );
}
