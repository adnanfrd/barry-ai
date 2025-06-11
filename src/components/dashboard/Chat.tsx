'use client';

import { useState } from 'react';
import {  FaPlus, FaWineGlass, FaArrowRight } from 'react-icons/fa';
import Image from 'next/image';
import { MdPhotoSizeSelectActual, MdKeyboardVoice } from "react-icons/md";
import { IoMdVideocam, IoIosCode } from "react-icons/io";

import { BsFillFileEarmarkTextFill } from "react-icons/bs";
import ChatSidebar from './ChatSidebar';
import Link from 'next/link';

export default function ChatsPage() {
  const [input, setInput] = useState('');

  return (
    <div className="grid grid-cols-1 md:grid-cols-[1fr_280px] gap-6">
    <div className="bg-white rounded-2xl p-6 min-h-screen relative overflow-y-auto shadow-xl">
  <div className="absolute top-0 left-0 right-0 h-48 rounded-t-2xl overflow-hidden z-0">
    <Image
      src="/art work.png"
      alt="Artwork Background"
      fill
      className="object-cover"
    />
  </div>

  <div className="relative z-10 mt-8 text-center">
    <div className="flex justify-center">
      <div className="bg-white p-3 rounded-full shadow-lg flex justify-center items-center">
        <Image src="/image.png" alt="Logo" width={100} height={100} />
      </div>
    </div>
    <h1 className="text-3xl font-bold mt-6 text-gray-800">
      Fusion AI: Your Digital Co-Pilot
    </h1>
    <p className="text-gray-500 mt-2 max-w-xl mx-auto text-md">
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
        bg: "bg-purple-100",
        href: "/dashboard/photo"
      },
      {
        label: "Video Generation",
        icon: <IoMdVideocam className="text-green-600" />,
        bg: "bg-green-100",
        href: "/dashboard/video"
      },
      {
        label: "Education & Science",
        icon: <FaWineGlass className="text-pink-600" />,
        bg: "bg-pink-100",
        href: "/dashboard/education"
      },
      {
        label: "Code Generation",
        icon: <IoIosCode className="text-indigo-600" />,
        bg: "bg-indigo-100",
        href: "/dashboard/code"
      },
      {
        label: "Voice Tools",
        icon: <MdKeyboardVoice className="text-sky-600" />,
        bg: "bg-sky-100",
        href: "/dashboard/voice"
      },
      {
        label: "Text Recognition",
        icon: <BsFillFileEarmarkTextFill className="text-amber-600" />,
        bg: "bg-amber-100",
        href: "/dashboard/chats"
      },
    ].map((tool) => (
      <Link key={tool.label} href={tool.href}>
    <div className="bg-[#faf9fa] cursor-pointer hover:bg-[#f1eff3] p-4 rounded-xl flex flex-col items-center justify-center text-sm font-medium text-gray-700 shadow hover:shadow-md transition-all">
      <div className={`${tool.bg} p-3 rounded-xl mb-2`}>
        <span className="text-2xl">{tool.icon}</span>
      </div>
      {tool.label}
    </div>
  </Link>
    ))}
  </div>

  <div className="mt-10 relative z-10">
  <div className="flex items-center bg-[#f9f9fb] rounded-full px-4 py-2 shadow-sm border border-[#e5e5ef]">
    
    {/* Plus Icon */}
    <div className="px-3 text-gray-600">
      <FaPlus className="w-4 h-4" />
    </div>

    {/* Left Divider */}
    <div className="w-px h-6 bg-gray-200 mx-2" />

    {/* Input Field */}
    <input
      type="text"
      placeholder="Ask me anything"
      value={input}
      onChange={(e) => setInput(e.target.value)}
      className="flex-1 text-sm outline-none bg-transparent placeholder-gray-400"
    />

    {/* Right Divider */}
    <div className="w-px h-6 bg-gray-200 mx-2" />

    {/* Send Arrow Icon */}
    <button className="px-3 text-purple-600">
      <FaArrowRight className="w-4 h-4" />
    </button>
  </div>
</div>

</div>

    <ChatSidebar/>
    </div>
  );
}
