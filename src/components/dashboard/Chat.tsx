// --- Final complete app/chats/page.tsx for exact layout ---
'use client';

import { useState } from 'react';
import { FaPaperPlane, FaPlus, FaBell, FaUserCircle, FaWineGlass } from 'react-icons/fa';
import Image from 'next/image';
import { MdPhotoSizeSelectActual, MdKeyboardVoice } from "react-icons/md";
import { IoMdVideocam, IoIosCode } from "react-icons/io";

import { BsFillFileEarmarkTextFill } from "react-icons/bs";
import ChatSidebar from './ChatSidebar';




const messages = [
  {
    title: 'Shadow mask overflow pixel',
    content: 'Pixel outline list figma line.',
    time: 'Just Now',
    avatar: '/image.png',
  },
  {
    title: 'Horizontal frame figjam component',
    content: 'Frame comment scrolling overflow star.',
    time: 'Just Now',
    image: '/app-icon.png',
    avatar: '/image.png',
  },
  {
    title: 'Arrow list undo inspect',
    content: 'Arrange text union boolean subtract.',
    time: 'Just Now',
    avatar: '/image.png',
  },
  {
    title: 'Duplicate subtract inspect rectangle',
    content: 'Editor project frame subtract undo bullet arrange shadow thumbnail.',
    time: 'Just Now',
    avatar: '/image.png',
  },
];

export default function ChatsPage() {
  const [input, setInput] = useState('');

  return (
    <div className="grid grid-cols-1 md:grid-cols-[1fr_280px] gap-6">
      <div className="bg-white rounded-2xl p-6 shadow-md min-h-screen relative overflow-y-auto">
        <div className="absolute top-0 left-0 right-0 h-32 bg-[url('/art work.png')] bg-cover bg-center rounded-t-2xl" />
        <div className="relative z-10 mt-20 text-center">
          <div className="flex justify-center">
            <div className="h-auto w-auto rounded-full bg-purple-100 flex items-center justify-center text-purple-600 text-2xl font-bold">
              <Image src="/image.png" alt="Logo" width={40} height={40} />
            </div>
          </div>
          <h1 className="text-2xl font-bold mt-4">Fusion AI: Your Digital Co-Pilot</h1>
          <p className="text-gray-500 mt-2 max-w-md mx-auto text-sm">
            Unlock the potential of AI. Seamlessly integrate machine learning, natural language understanding, and predictive analytics into your workflows.
          </p>
        </div>

        <div className="grid grid-cols-3 gap-4 mt-10">
          {[
            { label: 'Photo Generation', icon: <MdPhotoSizeSelectActual/> },
            { label: 'Video Generation', icon: <IoMdVideocam/> },
            { label: 'Education & Science', icon: <FaWineGlass/> },
            { label: 'Code Generation', icon: <IoIosCode/> },
            { label: 'Voice Tools', icon: <MdKeyboardVoice/> },
            { label: 'Text Recognition', icon: <BsFillFileEarmarkTextFill/> },
          ].map((tool) => (
            <div
              key={tool.label}
              className="bg-gray-100 p-4 rounded-xl flex flex-col items-center justify-center text-sm font-medium text-gray-700 shadow hover:shadow-md transition-all"
            >
              <span className="text-2xl mb-2">{tool.icon}</span>
              {tool.label}
            </div>
          ))}
        </div>

        <div className="mt-6 flex items-center bg-white border border-gray-300 rounded-full px-4 py-2 shadow-sm">
          <input
            type="text"
            placeholder="Ask me anything"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="flex-1 text-sm outline-none placeholder-gray-400"
          />
          <button className="text-purple-600">
            <FaPaperPlane className="w-4 h-4" />
          </button>
        </div>
      </div>
    <ChatSidebar/>
      {/* Right Panel */}
      {/* <div className="flex flex-col gap-4">
        <div className="flex justify-between items-center">
          <button className="bg-purple-100 text-purple-600 text-sm px-4 py-1.5 rounded-md font-medium flex items-center gap-2">
            <FaPlus /> New Chat
          </button>
          <div className="flex items-center gap-3">
            <FaBell className="text-gray-400 w-4 h-4" />
            <FaUserCircle className="text-gray-500 w-6 h-6" />
          </div>
        </div>

        <h2 className="text-base font-semibold">Conversation History</h2>
        <div className="flex flex-col gap-4 overflow-y-auto">
          {messages.map((msg, index) => (
            <div key={index} className="bg-white p-4 rounded-xl shadow flex items-start gap-4">
              {msg.image && (
                <img src={msg.image} alt="preview" className="h-16 w-16 rounded-lg object-cover" />
              )}
              <div className="flex-1">
                <p className="text-sm font-semibold text-gray-900">{msg.title}</p>
                <p className="text-sm text-gray-600 line-clamp-2">{msg.content}</p>
                <p className="text-xs text-gray-400 mt-1">{msg.time}</p>
              </div>
              <img src={msg.avatar} className="h-6 w-6 rounded-full border border-white" alt="avatar" />
            </div>
          ))}
        </div>
      </div> */}
    </div>
  );
}
