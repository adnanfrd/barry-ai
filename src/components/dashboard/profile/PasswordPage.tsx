'use client';

import { useState } from 'react';
import { IoKeyOutline } from "react-icons/io5";
import { HiEye, HiEyeOff } from 'react-icons/hi';

export default function PasswordPage() {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [showCurrent, setShowCurrent] = useState(false);
  const [showNew, setShowNew] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  return (
    <div className="p-2 h-screen bg-white dark:bg-[#232127] sm:p-4 max-w-4xl mx-auto w-full">
      <h1 className="text-2xl px-4 py-2 font-bold mb-6 text-black dark:text-white">Password</h1>
      <hr className="mb-6 border-gray-200 dark:border-gray-700" />
      <div className="rounded-2xl p-6 sm:p-4 space-y-6">

        <div>
          <label className="text-sm font-medium text-gray-700 dark:text-gray-200 block mb-1">Current Password</label>
          <div className="relative">
            <IoKeyOutline className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-600 dark:text-gray-400 cursor-pointer" />
            <input
              type={showCurrent ? 'text' : 'password'}
              value={currentPassword}
              placeholder='*****************'
              onChange={(e) => setCurrentPassword(e.target.value)}
              className="w-full pl-10 pr-10 py-2 border focus:outline-none border-gray-300 dark:border-gray-600 dark:bg-[#36343b] dark:text-white rounded-md focus:ring-purple-500 focus:border-purple-500"
            />
            <button
              type="button"
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-purple-400"
              onClick={() => setShowCurrent(!showCurrent)}
            >
              {showCurrent ? <HiEyeOff /> : <HiEye />}
            </button>
          </div>
        </div>

        {/* New Password */}
        <div>
          <label className="text-sm font-medium text-gray-700 dark:text-gray-200 block mb-1">New password</label>
          <div className="relative">
            <IoKeyOutline className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-600 dark:text-gray-400 cursor-pointer" />
            <input
              type={showNew ? 'text' : 'password'}
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              className="w-full pl-10 pr-10 py-2 border focus:outline-none border-gray-300 dark:border-gray-600 dark:bg-[#36343b] dark:text-white rounded-md focus:ring-purple-500 focus:border-purple-500"
              placeholder="Placeholder"
            />
            <button
              type="button"
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-purple-400"
              onClick={() => setShowNew(!showNew)}
            >
              {showNew ? <HiEyeOff /> : <HiEye />}
            </button>
          </div>
          <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">Minimum 8 characters</p>
        </div>

        {/* Confirm New Password */}
        <div>
          <label className="text-sm font-medium text-gray-700 dark:text-gray-200 block mb-1">Confirm new password</label>
          <div className="relative">
            <IoKeyOutline className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-600 dark:text-gray-400 cursor-pointer" />
            <input
              type={showConfirm ? 'text' : 'password'}
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full pl-10 pr-10 py-2 border focus:outline-none border-gray-300 dark:border-gray-600 dark:bg-[#36343b] dark:text-white rounded-md focus:ring-purple-500 focus:border-purple-500"
              placeholder="Placeholder"
            />
            <button
              type="button"
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-purple-400"
              onClick={() => setShowConfirm(!showConfirm)}
            >
              {showConfirm ? <HiEyeOff /> : <HiEye />}
            </button>
          </div>
          <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">Minimum 8 characters</p>
        </div>

        {/* Reset Button */}
        <div>
          <button
            onClick={() => alert('Password reset!')}
            className="bg-purple-600 hover:bg-purple-700 text-white px-5 py-2 rounded-lg text-sm font-medium"
          >
            Reset Password
          </button>
        </div>
      </div>
    </div>
  );
}
