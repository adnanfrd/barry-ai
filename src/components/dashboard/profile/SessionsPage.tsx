"use client";

import {
  FaDesktop,
  FaMobileAlt,
  FaTabletAlt,
} from "react-icons/fa";
import { CiCircleAlert } from "react-icons/ci";
import { IoIosClose } from "react-icons/io";
import { useState } from "react";

const sessions = [
  {
    device: "Mac",
    location: "New York, USA",
    ip: "Los Angeles, CA",
    time: "April 20 at 4:18PM",
    active: true,
    icon: <FaDesktop className="text-green-500" />,
  },
  {
    device: "iPhone",
    location: "New York, USA",
    ip: "Los Angeles, CA",
    time: "April 20 at 4:18PM",
    active: false,
    icon: <FaMobileAlt className="text-gray-400" />,
  },
  {
    device: "iPad",
    location: "New York, USA",
    ip: "Los Angeles, CA",
    time: "April 20 at 4:18PM",
    active: false,
    icon: <FaTabletAlt className="text-gray-400" />,
  },
];

export default function SessionsPage() {
  const [showBanner, setShowBanner] = useState(true);

  return (
    <div className="p-2 h-screen bg-white rounded-r-xl dark:bg-[#232127] sm:p-4 max-w-4xl mx-auto w-full">
      <div className="flex p-2 justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Sessions</h1>
        <button className="text-red-500 border border-red-500 hover:bg-red-50 dark:hover:bg-red-100/10 text-sm px-4 py-1.5 rounded-md font-medium dark:text-[#e4a29e] dark:border-[#e4a29e]">
          Terminate All Sessions
        </button>
      </div>

      <hr className="mb-6 border-gray-200 dark:border-gray-700" />

      {/* Banner */}
      {showBanner && (
        <div className="bg-[#f3f1fc] dark:bg-[#3c364c] rounded-xl border border-none dark:border-purple-800 px-4 py-4 mb-6 relative">
          <div className="flex items-start gap-3">
            <CiCircleAlert className="text-purple-500" size={30} />
            <div>
              <p className="font-semibold text-sm text-purple-800 dark:text-purple-300 mb-1">
                Protect your account
              </p>
              <p className="text-xs text-gray-700 dark:text-gray-300 mb-2">
                2FA significantly boosts the security of your account. Even if
                someone guesses your password, they won&apos;t be able to access
                your account without the second authentication factor.
              </p>
              <div className="flex items-center justify-end gap-4 text-sm">
                <button className="text-purple-600 dark:text-purple-400">
                  Dismiss
                </button>
                <button className="bg-purple-600 text-white px-4 py-1.5 rounded-md hover:bg-purple-700">
                  Enable 2FA
                </button>
              </div>
            </div>
            <IoIosClose
              size={22}
              className="absolute right-3 top-3 cursor-pointer text-purple-500"
              onClick={() => setShowBanner(false)}
            />
          </div>
        </div>
      )}

      {/* Session List */}
      <div className="space-y-4">
        {sessions.map((session, index) => (
          <div
            key={index}
            className="flex items-center justify-between rounded-lg p-4 bg-white dark:bg-[#232127] border-b border-gray-300 dark:border-[#364153] "
          >
            <div className="flex items-center gap-3">
              <div className="p-2 bg-gray-100 dark:bg-gray-700 rounded-full">
                {session.icon}
              </div>
              <div>
                <p className="font-medium text-sm text-gray-800 dark:text-white">
                  {session.device}
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-300">
                  {session.location} – {session.ip}, {session.time}
                </p>
              </div>
              {session.active && (
                <span className="text-xs text-green-600 bg-green-100 dark:bg-green-800/20 px-2 py-0.5 rounded-md ml-2">
                  Active now
                </span>
              )}
            </div>
            <button className="border border-gray-300 dark:border-gray-600 px-4 py-1.5 rounded-md text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700">
              Log out
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
