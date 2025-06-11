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
    <div className="max-w-3xl mx-auto p-4">
      <h1 className="text-2xl font-bold text-black mb-2">Profile</h1>
      <hr className="border-gray-200 mb-6" />

      <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-md space-y-6">
        {/* Avatar Upload Section */}
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
            <button className="bg-white border border-gray-300 text-gray-800 hover:bg-gray-50 px-4 py-1.5 rounded-md text-sm font-medium">
              Upload new image
            </button>
            <p className="text-xs text-gray-500 mt-1">
              At least 800×800 px recommended. JPG or PNG and GIF is allowed
            </p>
          </div>
        </div>

        {/* Name Field */}
        <div>
          <label className="block text-sm font-medium text-black mb-1">
            Name
          </label>
          <div className="relative">
            <CiUser className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full pl-10 pr-4 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
            />
          </div>
        </div>

        {/* Location Dropdown */}
        <div>
          <label className="block text-sm font-medium text-black mb-1">
            Location
          </label>
          <div className="relative">
            <CiLocationOn className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
            <select
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="w-full pl-10 pr-4 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
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

        {/* Bio Field */}
        <div>
          <label className="block text-sm font-medium text-black mb-1">
            Bio
          </label>
          <div className="relative">
            <FaRegFileAlt className="absolute top-3 left-3 text-gray-400" />
            <textarea
              value={bio}
              onChange={(e) => setBio(e.target.value)}
              rows={3}
              className="w-full pl-10 pr-4 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 resize-none"
            />
          </div>
        </div>

        {/* Update Button */}
        <div>
          <button
            onClick={() => alert("Updated!")}
            className="bg-purple-600 text-white hover:bg-purple-700 px-6 py-2 rounded-md text-sm font-semibold"
          >
            Update
          </button>
        </div>
      </div>
    </div>
  );
}
