"use client";

import { Fragment, useState } from "react";
import { Button, Menu, Popover, Dialog, Transition } from "@headlessui/react";
import Image from "next/image";
import { FaEdit, FaSignOutAlt, FaChevronDown, FaCog } from "react-icons/fa";
import { RiChatNewLine } from "react-icons/ri";
import { BsChat } from "react-icons/bs";
import { CiBellOn } from "react-icons/ci";
import { FiAlertCircle } from "react-icons/fi";

const messages = [
  {
    title: "Shadow mask overflow pixel",
    content: "Pixel outline list figma line.",
    time: "Just Now",
    avatars: ["/photo.png", "/photo.png", "/photo.png"],
  },
  {
    title: "Horizontal frame figjam component",
    content: "Frame comment scrolling overflow star.",
    time: "Just Now",
    image: "/chathistory.png",
    avatars: ["/photo1.png", "/photo2.png", "/photo3.png"],
  },
  {
    title: "Arrow list undo inspect",
    content: "Arrange text union boolean subtract.",
    time: "Just Now",
    avatars: ["/photo1.png", "/photo2.png", "/photo3.png"],
  },
  {
    title: "Duplicate subtract inspect rectangle",
    content:
      "Editor project frame subtract undo bullet arrange shadow thumbnail.",
    time: "Just Now",
    avatars: ["/photo1.png", "/photo2.png"],
  },
];

export default function ChatSidebar() {
  const [open, setOpen] = useState(false);

  return (
    <div className="w-[300px] bg-[#faf9fa] dark:bg-[#1f1f1f] p-4 rounded-2xl shadow flex flex-col gap-4">
      {/* Top bar */}
      <div className="flex justify-between items-center">
        <Button className="cursor-pointer bg-[#8d55e3] text-white text-sm px-4 py-2 rounded-lg font-medium flex items-center gap-2 shadow">
          <RiChatNewLine className="w-4 h-4" />
          New Chat
        </Button>

        <div className="flex items-center gap-4">
          <div className="relative">
            <BsChat className="text-gray-500 dark:text-gray-300 w-5 h-5" />
            <span className="absolute -top-3 -right-3 bg-green-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center text-[10px]">
              12
            </span>
          </div>
          <div>
            <CiBellOn className="w-5 h-5 dark:text-gray-300" />
          </div>

          <Menu as="div" className="relative">
            <Menu.Button>
              <Image
                src="/photo1.png"
                alt="User Avatar"
                width={32}
                height={32}
                className="rounded-full object-cover"
              />
            </Menu.Button>
            <Menu.Items className="absolute right-0 mt-2 w-64 origin-top-right divide-y divide-gray-100 rounded-xl bg-white shadow-lg ring-1 ring-black/5 focus:outline-none z-20">
              <div className="px-4 py-3 flex items-center gap-3">
                <Image
                  src="/photo1.png"
                  alt="User Avatar"
                  width={36}
                  height={36}
                  className="rounded-full object-cover"
                />
                <div>
                  <p className="text-sm font-medium text-gray-900">Oxen Kreativ</p>
                  <p className="text-xs text-gray-500">One man army</p>
                </div>
              </div>
              <div className="py-2">
                <Menu.Item>
                  {({ active }) => (
                    <button className={`w-full flex items-center gap-2 px-4 py-2 text-sm ${active ? "bg-gray-100" : ""}`}>
                      <FaChevronDown className="text-gray-600" /> New version available
                    </button>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <button className={`w-full flex items-center gap-2 px-4 py-2 text-sm ${active ? "bg-gray-100" : ""}`}>
                      <FaCog className="text-gray-600" /> Settings
                    </button>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <button className={`w-full flex items-center gap-2 px-4 py-2 text-sm ${active ? "bg-gray-100" : ""}`}>
                      <FaSignOutAlt className="text-gray-600" /> Sign out
                    </button>
                  )}
                </Menu.Item>
              </div>
            </Menu.Items>
          </Menu>
        </div>
      </div>

      {/* Title */}
      <div className="flex justify-between items-center">
        <h2 className="text-sm font-medium text-gray-600 dark:text-gray-300">
          Conversation History
        </h2>

        {/* Edit Button */}
        <Popover className="relative">
          <Popover.Button className="focus:outline-none">
            <FaEdit className="text-gray-400 dark:text-gray-300 w-4 h-4" />
          </Popover.Button>

          <Popover.Panel className="absolute z-20 right-0 mt-2 w-80 bg-white shadow-lg rounded-xl p-4">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-red-100 text-red-500 rounded-lg">
                <FiAlertCircle className="w-5 h-5" />
              </div>
              <p className="text-sm font-medium text-gray-800">Clear chat history?</p>
            </div>
            <div className="flex justify-end mt-4 gap-2">
              <button className="px-4 py-1.5 text-sm border rounded-md text-gray-700">Cancel</button>
              <button className="px-4 py-1.5 text-sm bg-red-600 text-white rounded-md hover:bg-red-700">
                Clear History
              </button>
            </div>
          </Popover.Panel>
        </Popover>
      </div>

      <div className="flex flex-col gap-4 overflow-y-auto">
        {messages.map((msg, index) => (
          <div key={index} className="flex flex-col gap-2 rounded-xl">
            <div className="px-1">
              <p className="text-sm font-bold text-gray-900 dark:text-white leading-tight">
                {msg.title}
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-300 leading-snug">
                {msg.content}
              </p>
            </div>

            {msg.image && (
              <Image
                src={msg.image}
                alt="chat preview"
                width={240}
                height={140}
                className="rounded-xl object-cover w-full h-[120px]"
              />
            )}

            <div className="flex items-center justify-between px-1">
              <p className="text-xs text-gray-400 dark:text-gray-400 mt-1">{msg.time}</p>
              <div className="flex items-center gap-[-6px] mt-2">
                {msg.avatars.map((avatar, i) => (
                  <Image
                    key={i}
                    src={avatar}
                    alt="avatar"
                    width={24}
                    height={24}
                    className="rounded-full border-2 border-white dark:border-gray-900 -ml-1"
                  />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
