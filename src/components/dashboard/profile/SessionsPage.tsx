'use client';

import { FaDesktop, FaMobileAlt, FaTabletAlt, FaShieldAlt } from 'react-icons/fa';
import { IoIosClose } from 'react-icons/io';
import { useState } from 'react';

const sessions = [
  {
    device: 'Mac',
    location: 'New York, USA',
    ip: 'Los Angeles, CA',
    time: 'April 20 at 4:18PM',
    active: true,
    icon: <FaDesktop className="text-green-500" />,
  },
  {
    device: 'iPhone',
    location: 'New York, USA',
    ip: 'Los Angeles, CA',
    time: 'April 20 at 4:18PM',
    active: false,
    icon: <FaMobileAlt className="text-gray-400" />,
  },
  {
    device: 'iPad',
    location: 'New York, USA',
    ip: 'Los Angeles, CA',
    time: 'April 20 at 4:18PM',
    active: false,
    icon: <FaTabletAlt className="text-gray-400" />,
  },
];

export default function SessionsPage() {
  const [showBanner, setShowBanner] = useState(true);

  return (
    <div className="max-w-3xl mx-auto w-full px-4 py-6 sm:px-6 lg:px-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Sessions</h1>
        <button className="text-red-500 border border-red-500 hover:bg-red-50 text-sm px-4 py-1.5 rounded-md font-medium">
          Terminate All Sessions
        </button>
      </div>

      {/* Banner */}
      {showBanner && (
        <div className="bg-purple-100 border border-purple-300 rounded-lg px-4 py-4 mb-6 relative">
          <div className="flex items-start gap-3">
            <FaShieldAlt className="text-purple-500 mt-1" size={20} />
            <div>
              <p className="font-semibold text-sm text-purple-800 mb-1">
                Protect your account
              </p>
              <p className="text-xs text-purple-700 mb-2">
                2FA significantly boosts the security of your account. Even if someone
                guesses your password, they won't be able to access your account without
                the second authentication factor.
              </p>
              <div className="flex items-center gap-4 text-sm">
                <button className="text-purple-600 hover:underline">Dismiss</button>
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
            className="flex items-center justify-between border rounded-lg p-4 bg-white shadow-sm"
          >
            <div className="flex items-center gap-3">
              <div className="p-2 bg-gray-100 rounded-full">{session.icon}</div>
              <div>
                <p className="font-medium text-sm text-gray-800">{session.device}</p>
                <p className="text-xs text-gray-500">
                  {session.location} – {session.ip}, {session.time}
                </p>
              </div>
              {session.active && (
                <span className="text-xs text-green-600 bg-green-100 px-2 py-0.5 rounded-md ml-2">
                  Active now
                </span>
              )}
            </div>
            <button className="border border-gray-300 px-4 py-1.5 rounded-md text-sm text-gray-700 hover:bg-gray-50">
              Log out
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
