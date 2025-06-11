"use client";

import Image from "next/image";
import { useState, Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { FaRegStar, FaUpload, FaEllipsisV } from "react-icons/fa";
import { HiOutlineShare } from "react-icons/hi";
import { FiThumbsUp, FiThumbsDown } from "react-icons/fi";
import { TbMessageCircle } from "react-icons/tb";
import clsx from "clsx";

const modes = ["Blanced", "Creative", "Precise"];

const tools = [
  { name: "Photo Generation", icon: "🎨", bg: "bg-purple-100", text: "text-purple-800" },
  { name: "Video Generation", icon: "🎥", bg: "bg-green-100", text: "text-green-800" },
  { name: "Education & Science", icon: "📚", bg: "bg-pink-100", text: "text-pink-800" },
  { name: "Code Generation", icon: "💻", bg: "bg-indigo-100", text: "text-indigo-800" },
  { name: "Voice Tools", icon: "🎤", bg: "bg-blue-100", text: "text-blue-800" },
  { name: "Text Recognition", icon: "📄", bg: "bg-orange-100", text: "text-orange-800" },
];

export default function VoiceToolsPage() {
  const [activeMode, setActiveMode] = useState("Blanced");

  return (
    <div className="min-h-screen bg-white p-4 text-sm">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-xl font-semibold">Voice Tools</h1>
        <div className="flex space-x-2 items-center">
          <button><FaRegStar className="text-gray-400" /></button>
          <button><HiOutlineShare className="text-gray-400" /></button>
          <Menu as="div" className="relative">
            <Menu.Button><FaEllipsisV className="text-gray-400" /></Menu.Button>
            <Transition as={Fragment}
              enter="transition ease-out duration-100" enterFrom="transform opacity-0 scale-95" enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75" leaveFrom="transform opacity-100 scale-100" leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5">
                <Menu.Item>
                  {({ active }) => (
                    <button className={clsx("block w-full text-left px-4 py-2 text-sm", active && "bg-gray-100")}>
                      Report
                    </button>
                  )}
                </Menu.Item>
              </Menu.Items>
            </Transition>
          </Menu>
        </div>
      </div>

      {/* Mode Tabs */}
      <div className="flex space-x-2 mb-4">
        {modes.map(mode => (
          <button
            key={mode}
            onClick={() => setActiveMode(mode)}
            className={clsx(
              "px-4 py-1 rounded-full border text-xs",
              mode === activeMode ? "bg-black text-white" : "border-gray-300 text-gray-600"
            )}
          >
            {mode}
          </button>
        ))}
      </div>

      {/* Message Chat Box */}
      <div className="flex justify-end mb-4">
        <div className="max-w-md bg-purple-50 p-3 rounded-lg border border-purple-200 relative">
          <p className="text-sm text-gray-700">
            Follower content scale mask duplicate resizing device follower create. Bold ipsum arrow scrolling subtract polygon.
          </p>
          <span className="absolute bottom-1 right-2 text-xs text-gray-400">12:22</span>
        </div>
        <Image
          src="/photo.png"
          alt="user"
          width={32}
          height={32}
          className="ml-2 rounded-full"
        />
      </div>

      {/* AI Response */}
      <div className="flex">
        {/* Sidebar */}
        <div className="w-10 flex flex-col items-center text-gray-400 mt-2 space-y-4">
          <TbMessageCircle />
          <FiThumbsUp />
          <FiThumbsDown />
          <FaUpload />
        </div>

        {/* Main Response */}
        <div className="flex-1 bg-gray-50 p-4 rounded-xl ml-2">
          <div className="text-gray-700 mb-4 text-sm">
            Vertical inspect effect library flatten strikethrough list export overflow outline. Figjam vertical share background export outline align mask edit list. Asset strikethrough layout.
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {tools.map((tool, i) => (
              <button
                key={i}
                className={clsx(
                  "flex items-center px-3 py-2 rounded-full text-sm font-medium",
                  tool.bg,
                  tool.text
                )}
              >
                <span className="mr-2">{tool.icon}</span>
                {tool.name}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
