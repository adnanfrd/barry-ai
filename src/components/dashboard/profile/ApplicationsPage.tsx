'use client';

import Image from 'next/image';
import { IoIosClose } from 'react-icons/io';

const applications = [
  {
    name: 'Albert Flores',
    email: 'albert.baker@example.com',
    icon: '/behance.png',
  },
  {
    name: 'Guy Hawkins',
    email: 'felicia.reid@example.com',
    icon: '/figma.png',
  },
  {
    name: 'Jane Cooper',
    email: 'michael.mitc@example.com',
    icon: '/mail.webp',
  },
  {
    name: 'Bessie Cooper',
    email: 'alma.lawson@example.com',
    icon: '/ai.png',
  },
];

export default function ApplicationsPage() {
  return (
    <div className="p-2 h-screen rounded-r-xl bg-white dark:bg-[#232127] sm:p-4 max-w-4xl mx-auto w-full">
      <div className="flex p-2 justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Applications</h1>
        <button className="bg-purple-600 rounded-xl hover:bg-purple-700 text-white px-4 py-2 text-sm font-medium">
          Add More Apps
        </button>
      </div>
      <hr className="mb-6 border-gray-200 dark:border-gray-700" />

      <div className="bg-[#f3f1fc] dark:bg-[#3c364c] border border-purple-300 dark:border-none rounded-lg px-4 py-4 mb-6 relative">
        <div className="flex items-start gap-3">
          <Image src="/ai.png" width={30} alt="img" height={30} />
          <div>
            <p className="font-semibold text-lg text-purple-800 dark:text-purple-400 mb-1">
              Application request
            </p>
            <p className="text-xs text-gray-700 dark:text-gray-300 mb-2">
              Resetting thumbnail align layout team union scrolling figma ellipse. Editor connection device group team distribute invite library.
            </p>
            <div className="flex items-center justify-end gap-4 text-sm">
              <button className="text-purple-600 dark:text-purple-400">Dismiss</button>
              <button className="bg-purple-600 rounded-xl text-white px-4 py-1.5 hover:bg-purple-700">
                Accept
              </button>
            </div>
          </div>
          <IoIosClose
            size={22}
            className="absolute right-3 top-3 cursor-pointer text-purple-500"
          />
        </div>
      </div>

      <div className="bg-white dark:bg-[#232127] rounded-lg divide-y divide-gray-300 dark:divide-gray-700">
        {applications.map((app, idx) => (
          <div
            key={idx}
            className="flex items-center justify-between px-4 py-4"
          >
            <div className="flex items-center gap-4">
              <Image
                src={app.icon}
                alt={app.name}
                width={40}
                height={40}
                className="rounded-full"
              />
              <div>
                <p className="font-medium text-gray-800 dark:text-gray-100">{app.name}</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">{app.email}</p>
              </div>
            </div>

            <button className="border border-gray-300 dark:border-gray-600 text-sm text-gray-600 dark:text-gray-300 px-4 py-1.5 dark:bg-gray-700 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800">
              Disable
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
