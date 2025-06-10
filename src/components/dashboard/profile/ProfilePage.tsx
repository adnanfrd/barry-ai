'use client';

import { useState } from 'react';
import { Dialog } from '@headlessui/react';
import { FaMapMarkerAlt, FaRegFileAlt } from 'react-icons/fa';
import Image from 'next/image';
import { CiUser, CiLocationOn  } from "react-icons/ci";


export default function ProfilePage() {
  const [name, setName] = useState('@gpk.crtv');
  const [location, setLocation] = useState('@gpk.crtv');
  const [bio, setBio] = useState('Placeholder');

  return (
    <div className="p-6 sm:p-10 max-w-3xl mx-auto w-full">
      <h1 className="text-2xl font-bold mb-4">Profile</h1>
      <hr className='mb-4 text-gray-200' />
      <div className="bg-white shadow-md rounded-2xl p-6 sm:p-8 space-y-6 border border-gray-200">

        {/* Avatar */}
        <div className="flex items-center space-x-4">
          <div className="relative w-16 h-16 rounded-full overflow-hidden">
            <Image
              src="/photo.png" // Replace with actual avatar path or state
              alt="User Avatar"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <button className="px-4 py-2 text-sm font-medium border border-gray-300 rounded-md hover:bg-gray-50">
              Upload new image
            </button>
            <p className="text-xs text-gray-500 mt-1">
              At least 800×800 px recommended. JPG, PNG, or GIF allowed.
            </p>
          </div>
        </div>

        {/* Name Input */}
        <div>
          <label className="text-sm font-medium text-gray-700 block mb-1">Name</label>
          <div className="relative">
            <CiUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-600" />
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-purple-500 focus:border-purple-500"
            />
          </div>
        </div>

        {/* Location Input (with dropdown style) */}
        <div>
          <label className="text-sm font-medium text-gray-700 block mb-1">Location</label>
          <div className="relative">
            <CiLocationOn  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-600" />
            <select
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-purple-500 focus:border-purple-500"
            >
              <option value="@gpk.crtv">@gpk.crtv</option>
              <option value="@openai">@openai</option>
              <option value="@nextjs">@nextjs</option>
            </select>
          </div>
        </div>

        {/* Bio Input */}
        <div>
          <label className="text-sm font-medium text-gray-700 block mb-1">Bio</label>
          <div className="relative">
            <FaRegFileAlt className="absolute top-3 left-3 text-gray-400" />
            <textarea
              value={bio}
              onChange={(e) => setBio(e.target.value)}
              rows={3}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-purple-500 focus:border-purple-500 resize-none"
            />
          </div>
        </div>

        {/* Update Button */}
        <div>
          <button
            onClick={() => alert('Updated!')}
            className="bg-purple-600 hover:bg-purple-700 text-white px-5 py-2 rounded-lg text-sm font-medium"
          >
            Update
          </button>
        </div>
      </div>
    </div>
  );
}
