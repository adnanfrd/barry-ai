"use client";
import { Fragment, useState } from "react";
import { Dialog, Listbox, Menu, Switch, Transition } from "@headlessui/react";
import { FaChevronDown, FaEllipsisV, FaEye, FaPaperPlane } from "react-icons/fa";
import Image from "next/image";

export default function WelcomePage() {
  const [selected, setSelected] = useState("PDF");
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);

  return (
    <div className="flex h-screen overflow-hidden bg-white text-sm">
      {/* Sidebar */}
      <aside className="w-full md:w-1/4 border-r border-gray-200 p-4 overflow-y-auto hidden md:block">
        <div className="flex justify-between items-center mb-4">
          <h2 className="font-semibold">Conversations</h2>
          <button className="bg-purple-600 text-white px-3 py-1 rounded text-xs">+ New One</button>
        </div>
        <div className="space-y-4">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="flex items-start space-x-2 cursor-pointer hover:bg-gray-100 p-2 rounded">
              <Image
                src={"/photo.png"}
                width={40}
                height={40}
                className="rounded-full"
                alt="avatar"
              />
              <div>
                <p className="text-sm font-medium leading-tight">Session Title {i + 1}</p>
                <p className="text-xs text-gray-500">Short description</p>
              </div>
            </div>
          ))}
        </div>
      </aside>

      {/* Main content */}
      <main className="flex-1 overflow-y-auto p-4">
        <div className="mb-4">
          <div className="flex justify-between items-center flex-wrap gap-2">
            <h1 className="text-lg font-semibold">Welcome</h1>
            <div className="flex flex-wrap space-x-2">
              {['General', 'Design', 'Prompt'].map((tab, index) => (
                <button key={index} className="px-3 py-1 border rounded-full text-xs hover:bg-purple-100">
                  {tab}
                </button>
              ))}
            </div>
          </div>
          <div className="mt-4">
            <textarea
              rows={3}
              className="w-full border border-gray-300 rounded p-2 text-sm"
              placeholder="Type your message..."
            />
            <div className="flex justify-end mt-2">
              <button className="bg-purple-600 text-white px-4 py-1 rounded text-sm flex items-center">
                <FaPaperPlane className="h-4 w-4 mr-1" />
                Send
              </button>
            </div>
          </div>
        </div>

        {/* Response cards */}
        <div className="space-y-4">
          {["Reddit", "Facebook"].map((source, idx) => (
            <div key={idx} className="border border-gray-200 rounded-md p-4">
              <div className="flex justify-between items-start mb-2">
                <div className="flex items-center space-x-2">
                  <Image
                    src="/photo.png"
                    width={24}
                    height={24}
                    className="rounded-full"
                    alt="icon"
                  />
                  <p className="text-sm font-medium">{source} Result</p>
                </div>
                <Menu as="div" className="relative inline-block text-left">
                  <Menu.Button>
                    <FaEllipsisV className="w-5 h-5 text-gray-500" />
                  </Menu.Button>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 z-10 mt-2 w-32 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <div className="py-1">
                        <Menu.Item>
                          {({ active }) => (
                            <a className={`${active ? 'bg-gray-100' : ''} block px-4 py-2 text-sm text-gray-700`} href="#">
                              Edit
                            </a>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <a className={`${active ? 'bg-gray-100' : ''} block px-4 py-2 text-sm text-red-600`} href="#">
                              Delete
                            </a>
                          )}
                        </Menu.Item>
                      </div>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
              <div className="text-sm text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante.
              </div>
              <div className="mt-2 flex space-x-2">
                <button className="text-xs text-purple-600">Share</button>
                <button className="text-xs text-purple-600">Duplicate</button>
                <button className="text-xs text-purple-600">Copy</button>
              </div>
            </div>
          ))}
        </div>

        {/* Poll section */}
        <div className="mt-6 border-t pt-4">
          <h2 className="font-semibold mb-2">How do you feel about the result?</h2>
          <div className="space-y-2">
            {['Fine', 'Not accurate', 'I will rephrase'].map((option, i) => (
              <label key={i} className="flex items-center space-x-2">
                <input type="radio" name="feedback" value={option} className="accent-purple-600" />
                <span className="text-sm">{option}</span>
              </label>
            ))}
          </div>
          <button className="mt-2 px-4 py-1 bg-purple-600 text-white text-sm rounded">Submit Poll</button>
        </div>
      </main>
    </div>
  );
}
