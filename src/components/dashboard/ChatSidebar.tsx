"use client";

import { Fragment } from "react";
import { Button, Menu } from "@headlessui/react";
import Image from "next/image";
import { FaEdit } from "react-icons/fa";
import { RiChatNewLine } from "react-icons/ri";
import { BsChat } from "react-icons/bs";
import { CiBellOn } from "react-icons/ci";

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
  return (
    <div className="w-[300px] bg-[#faf9fa] dark:bg-[#1f1f1f] p-4 rounded-2xl shadow flex flex-col gap-4">
      {/* Top bar */}
      <div className="flex justify-between items-center">
        <Menu as={Fragment}>
          <Button className="cursor-pointer bg-[#8d55e3] text-white text-sm px-4 py-2 rounded-lg font-medium flex items-center gap-2 shadow">
            <RiChatNewLine className="w-4 h-4" />
            New Chat
          </Button>
        </Menu>

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
          <div className="relative">
            <Image
              src="/photo1.png"
              alt="User Avatar"
              width={32}
              height={32}
              className="rounded-full object-cover"
            />
            <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-700 border-2 border-white dark:border-gray-900 rounded-full"></span>
          </div>
        </div>
      </div>

      {/* Title */}
      <div className="flex justify-between items-center">
        <h2 className="text-sm font-medium text-gray-600 dark:text-gray-300">
          Conversation History
        </h2>
        <FaEdit className="text-gray-400 dark:text-gray-300 w-4 h-4" />
      </div>

      <div className="flex flex-col gap-4 overflow-y-auto">
        {messages.map((msg, index) => (
          <div key={index} className="flex flex-col gap-2 rounded-xl">
            {/* Title & Content */}
            <div className="px-1">
              <p className="text-sm font-bold text-gray-900 dark:text-white leading-tight">
                {msg.title}
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-300 leading-snug">
                {msg.content}
              </p>
            </div>

            {/* Image in middle if exists */}
            {msg.image && (
              <Image
                src={msg.image}
                alt="chat preview"
                width={240}
                height={140}
                className="rounded-xl object-cover w-full h-[120px]"
              />
            )}

            {/* Time and Avatars */}
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
