'use client';

import Image from 'next/image';
import { AiOutlineAppstore } from 'react-icons/ai';

const applications = [
  {
    name: 'Albert Flores',
    email: 'albert.baker@example.com',
    icon: '/behance.png',
  },
  {
    name: 'Guy Hawkins',
    email: 'felicia.reid@example.com',
    icon: '/behance.png',
  },
  {
    name: 'Jane Cooper',
    email: 'michael.mitc@example.com',
    icon: '/behance.png',
  },
  {
    name: 'Bessie Cooper',
    email: 'alma.lawson@example.com',
    icon: '/behance.png',
  },
  {
    name: 'Devon Lane',
    email: 'nathan.roberts@example.com',
    icon: '/behance.png',
  },
  {
    name: 'Marvin McKinney',
    email: 'bill.candia@example.com',
    icon: '/behance.png',
  },
];

export default function ApplicationsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Applications</h1>
        <button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-md text-sm font-medium">
          Add More Apps
        </button>
      </div>

      <div className="bg-purple-50 border border-purple-100 p-4 rounded-lg flex justify-between items-start mb-6">
        <div className="flex items-start gap-3">
          <div className="text-purple-600 mt-1">
            <AiOutlineAppstore size={24} />
          </div>
          <div>
            <h2 className="font-semibold text-purple-800">Application request</h2>
            <p className="text-sm text-gray-700">
              Resetting thumbnail align layout team union scrolling figma ellipse.
              Editor connection device group team distribute invite library.
            </p>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-2 mt-3 sm:mt-0 sm:ml-4">
          <button className="text-sm text-gray-500 hover:underline">Dismiss</button>
          <button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-1.5 rounded-md text-sm font-medium">
            Accept
          </button>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm divide-y border">
        {applications.map((app, idx) => (
          <div
            key={idx}
            className="flex items-center justify-between px-4 py-4 hover:bg-gray-50"
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
                <p className="font-medium text-gray-800">{app.name}</p>
                <p className="text-sm text-gray-500">{app.email}</p>
              </div>
            </div>

            <button className="border border-gray-300 text-sm text-gray-600 px-4 py-1.5 rounded-md hover:bg-gray-100">
              Disable
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
