"use client";

import { useState } from "react";
import { FaRegFileAlt } from "react-icons/fa";
import { CiUser, CiLocationOn } from "react-icons/ci";
import Image from "next/image";

export default function ProfilePage() {
  const [name, setName] = useState("@xpk.crtv");
  const [location, setLocation] = useState("@xpk.crtv");
  const [bio, setBio] = useState("Placeholder");

  return (
    <div className="h-screen rounded-r-xl bg-white dark:bg-[#232127] mx-auto">
      <h1 className="text-2xl p-6 font-bold text-black dark:text-white mb-2">Profile</h1>
      <hr className="mb-6 border-gray-200 dark:border-gray-700" />
      <div className="py-6 px-2 sm:p-6 rounded-2xl space-y-6">
        <div className="flex items-start gap-4">
          <div className="relative w-16 h-16 rounded-full overflow-hidden">
            <Image
              src="/photo.png"
              alt="User avatar"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <button className="bg-white dark:bg-[#36343b] border border-gray-300 dark:border-gray-600 text-gray-800 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700 px-4 py-1.5 rounded-md text-sm font-medium">
              Upload new image
            </button>
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
              At least 800×800 px recommended. JPG or PNG and GIF is allowed
            </p>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-black dark:text-white mb-1">
            Name
          </label>
          <div className="relative">
            <CiUser className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 dark:text-gray-400" />
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full pl-10 pr-4 py-2 text-sm border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-[#36343b] text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-black dark:text-white mb-1">
            Location
          </label>
          <div className="relative">
            <CiLocationOn className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 dark:text-gray-400" />
            <select
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="w-full pl-10 pr-4 py-2 text-sm border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-[#36343b] text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
            >
              <option value="@xpk.crtv">@xpk.crtv</option>
              <option value="@openai">@openai</option>
              <option value="@nextjs">@nextjs</option>
              <option value="@reactjs">@reactjs</option>
              <option value="@nodejs">@nodejs</option>
              <option value="@amberjs">@amberjs</option>
            </select>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-black dark:text-white mb-1">
            Bio
          </label>
          <div className="relative">
            <FaRegFileAlt className="absolute top-3 left-3 text-gray-400 dark:text-gray-500" />
            <textarea
              value={bio}
              onChange={(e) => setBio(e.target.value)}
              rows={3}
              className="w-full pl-10 pr-4 py-2 text-sm border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-[#36343b] text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 resize-none"
            />
          </div>
        </div>

        <div>
          <button
            onClick={() => alert("Updated!")}
            className="bg-purple-600 text-white hover:bg-purple-700 px-6 py-2 rounded-xl text-sm font-medium"
          >
            Update
          </button>
        </div>
      </div>
    </div>
  );
}
