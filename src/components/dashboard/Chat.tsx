"use client";

import { FaWineGlass } from "react-icons/fa";
import Image from "next/image";
import { MdPhotoSizeSelectActual, MdKeyboardVoice } from "react-icons/md";
import { IoMdVideocam, IoIosCode } from "react-icons/io";
import { BsFillFileEarmarkTextFill } from "react-icons/bs";
import ChatSidebar from "./ChatSidebar";
import Link from "next/link";
import PromptInput from "../subcomponents/PromptInput";

export default function ChatsPage() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-[1fr_280px] gap-2">
      <div className="bg-white  dark:bg-[#1a1a1a] rounded-2xl p-6 relative overflow-y-auto shadow-xl">
        <div className="overflow-y-auto p-6 pb-36">
          {" "}
          {/* Add bottom padding */}
          <div className="absolute top-0 left-0 right-0 py-18 h-48 rounded-t-2xl overflow-hidden z-0">
            <Image
              src="/art work.png"
              alt="Artwork Background"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative z-10  mt-8 text-center">
            <div className="flex justify-center">
              <div className="bg-white dark:bg-[#2a2a2a] p-3 rounded-full shadow-lg flex justify-center items-center">
                <Image src="/image.png" alt="Logo" width={100} height={100} />
              </div>
            </div>
            <h1 className="text-3xl font-bold mt-6 text-gray-800 dark:text-white">
              Fusion AI: Your Digital Co-Pilot
            </h1>
            <p className="text-gray-500 dark:text-gray-400 mt-2 max-w-xl mx-auto text-md">
              Unlock the Potential of AI. Seamlessly integrate machine learning,
              natural language understanding, and predictive analytics into your
              workflows.
            </p>
          </div>
          {/* Icons with colored backgrounds and matching icon colors */}
          <div className="grid grid-cols-3 gap-4 mt-10 relative z-10">
            {[
              {
                label: "Photo Generation",
                icon: <MdPhotoSizeSelectActual className="text-purple-600" />,
                bg: "bg-purple-100 dark:bg-purple-900/40",
                href: "/dashboard/photo",
              },
              {
                label: "Video Generation",
                icon: <IoMdVideocam className="text-green-600" />,
                bg: "bg-green-100 dark:bg-green-900/40",
                href: "/dashboard/video",
              },
              {
                label: "Education & Science",
                icon: <FaWineGlass className="text-pink-600" />,
                bg: "bg-pink-100 dark:bg-pink-900/40",
                href: "/dashboard/education",
              },
              {
                label: "Code Generation",
                icon: <IoIosCode className="text-indigo-600" />,
                bg: "bg-indigo-100 dark:bg-indigo-900/40",
                href: "/dashboard/code",
              },
              {
                label: "Voice Tools",
                icon: <MdKeyboardVoice className="text-sky-600" />,
                bg: "bg-sky-100 dark:bg-sky-900/40",
                href: "/dashboard/voice",
              },
              {
                label: "Text Recognition",
                icon: <BsFillFileEarmarkTextFill className="text-amber-600" />,
                bg: "bg-amber-100 dark:bg-amber-900/40",
                href: "/dashboard",
              },
            ].map((tool) => (
              <Link key={tool.label} href={tool.href}>
                <div className="bg-[#faf9fa] dark:bg-[#2a2a2f] cursor-pointer hover:bg-[#f1eff3] dark:hover:bg-[#3a3a3f] p-4 rounded-xl flex flex-col items-center justify-center text-sm font-medium text-gray-700 dark:text-gray-300 shadow hover:shadow-md transition-all">
                  <div className={`${tool.bg} p-3 rounded-xl mb-2`}>
                    <span className="text-2xl">{tool.icon}</span>
                  </div>
                  {tool.label}
                </div>
              </Link>
            ))}
          </div>
        </div>

        <PromptInput />
      </div>

      <div>
        <ChatSidebar />
      </div>
    </div>
  );
}
