"use client";

import Image from "next/image";
import { useState, Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { FaEllipsisV, FaRegStar } from "react-icons/fa";
import { HiOutlineShare } from "react-icons/hi";

export default function VideoGenerationPage() {
  const [activeTab, setActiveTab] = useState("Blanced");

  const tabs = ["Blanced", "Creative", "Precise"];

  return (
    <div className="min-h-screen bg-[#fafafa] p-4 text-sm">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-xl font-bold">Video Generation</h1>
        <div className="flex items-center space-x-3 text-gray-500">
          <FaRegStar />
          <HiOutlineShare />
          <Menu as="div" className="relative">
            <Menu.Button><FaEllipsisV /></Menu.Button>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5">
                <Menu.Item>
                  {({ active }) => (
                    <button
                      className={`block w-full px-4 py-2 text-left text-sm ${active ? "bg-gray-100" : ""}`}
                    >
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

      {/* Message Bubble */}
      <div className="flex justify-end mb-4">
        <div className="max-w-lg border border-[#d7d1ea] rounded-xl p-4 bg-white shadow-sm text-sm relative">
          <p className="text-gray-800 mb-2">
            Effect library connection image main. Rectangle star strikethrough bullet fill. Ellipse slice overflow italic style align edit inspect horizontal arrow.
          </p>
          <p className="text-gray-800 mb-3">
            Ipsum main strikethrough variant object comment boolean move background. Asset select list asset align underline auto bold community main.
          </p>
          {/* Video Preview */}
          <div className="relative w-40 h-24 rounded overflow-hidden">
            <Image
              src="/image.png"
              alt="Video preview"
              layout="fill"
              objectFit="cover"
              className="rounded"
            />
            <div className="absolute inset-0 flex justify-center items-center">
              <div className="bg-white/70 p-1 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-black" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M6.5 5.5v9l7-4.5-7-4.5z" />
                </svg>
              </div>
            </div>
          </div>

          {/* Time */}
          <div className="absolute right-2 bottom-2 text-xs text-gray-500">12:22</div>
        </div>

        <div className="ml-2">
          <Image
            src="/photo.png"
            alt="avatar"
            width={32}
            height={32}
            className="rounded-full"
          />
        </div>
      </div>

      {/* Dot Selector Bar */}
      <div className="mt-8 bg-white p-3 rounded-xl w-full max-w-md">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-[#2f2f38] rounded-full flex justify-center items-center">
            <Image
              src="/app-icon.png" // Replace with your actual icon or keep placeholder
              alt="bot"
              width={20}
              height={20}
            />
          </div>
          <div className="flex space-x-2 ml-2">
            <div className="w-2.5 h-2.5 rounded-full bg-gray-800"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-gray-300"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-gray-300"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
