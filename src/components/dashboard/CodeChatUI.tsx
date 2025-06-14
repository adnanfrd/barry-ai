"use client";
import { FaCodepen } from "react-icons/fa6";
import Image from "next/image";
import { LuCopy } from "react-icons/lu";
import { FiDownloadCloud, FiThumbsDown, FiThumbsUp } from "react-icons/fi";
import Header from "./Header";
import PromptInput from "../subcomponents/PromptInput";
import { Tab, TabGroup, TabList } from "@headlessui/react";

export default function CodeChatUI() {
  const tabs = ["HTML", "CSS", "JS"];

  return (
    <div className="h-screen rounded-xl flex flex-col bg-white dark:bg-[#232127] text-sm">
      <div className="flex-none">
        <Header />
      </div>
      <div className="flex-1 overflow-y-auto p-4 space-y-4 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']">
        <div className="flex justify-end">
          <div className="max-w-[90%] md:max-w-[75%] flex overflow-hidden rounded-2xl border border-[#e5e5fa] bg-white text-sm shadow-sm">
            {/* Message Text */}
            <div className="flex-1 px-4 py-3 text-gray-800 leading-relaxed">
              Figjam flows <strong>bold</strong> <em>ipsum</em> text italic.
              Create hand connection ellipse stroke invite duplicate rotate
              blur. Reesizing duplicate boolean.
            </div>

            {/* Avatar & Time */}
            <div className="flex w-14 flex-col items-center justify-center bg-[#f6f6fb] px-2 py-2 text-[10px] text-gray-500">
              <div className="w-6 h-6 rounded-full overflow-hidden mb-1">
                <Image
                  src="/photo.png"
                  alt="avatar"
                  width={24}
                  height={24}
                  className="rounded-full"
                />
              </div>
              12:22
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
        <div className="flex h-auto bg-[#F9F8FC] p-6 rounded-2xl">
          <div className="w-24 flex flex-col items-center bg-[#edebf1] rounded-2xl py-4 gap-6">
            <div className="bg-[#EBE9F7] p-2 rounded-xl">
              <div className="bg-[#524E63] text-#4B4B4B dark:bg-[#3c384a] p-2 rounded-xl">
                <Image
                  src="/Vector.png"
                  alt="icon"
                  width={40}
                  height={40}
                  className="w-5 h-5 text-[#4B4B4B] dark:text-gray-300"
                />
              </div>{" "}
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

          <div>
            <div className="flex-1 ml-4">
              <div className="bg-black text-white rounded-2xl overflow-hidden">
                <TabGroup>
      <div className="flex justify-between items-center px-4 py-2 bg-zinc-800 rounded-md">
        {/* Tab List */}
        <TabList className="flex gap-2">
          {tabs.map((tab) => (
            <Tab key={tab}>
              {({ selected }) => (
                <span
                  className={`text-xs px-3 py-1 rounded-md text-white ${
                    selected
                      ? "bg-gray-500"
                      : ""
                  }`}
                >
                  {tab}
                </span>
              )}
            </Tab>
          ))}
        </TabList>

        {/* Copy Button */}
        <button className="text-xs text-white">Copy Code</button>
      </div>
    </TabGroup>

                <pre className="px-4 py-3 whitespace-pre-wrap text-sm overflow-x-auto">
                  {`window.onmessage = ({ data: { pluginMessage } }) => {
  if (pluginMessage.type === "EXPORT_RESULT") {
    const data = pluginMessage.files as CollectionExportRecord[];
    document.querySelector("textarea").innerHTML = JSON.stringify(data, null, 2);
  }
}`}
                </pre>
              </div>
            </div>
            <div className="text-sm text-gray-600 p-4">
              Vertical inspect effect library flatten strikethrough list export
              overflow outline. Figjam vertical share background export outline
              align mask edit list. Asset strikethrough layout.
            </div>
            <div className="flex justify-between items-center bg-gray-100 rounded-2xl m-2 p-2 py-3 text-sm text-gray-700">
              <span>I have created a project in your Codepen account.</span>
              <button className="flex items-center gap-2 px-3 py-1 rounded-md border border-gray-300 hover:bg-white">
                <FaCodepen className="w-4 h-4" />
                View on CodePen
              </button>
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
