'use client';

import { HiOutlineDotsVertical } from 'react-icons/hi';
import Image from 'next/image';

const teamMembers = [
  {
    name: 'Albert Flores',
    email: 'albert.baker@example.com',
    role: 'Dog Trainer',
    status: 'Last seen 3h ago',
    avatar: '/photo.png',
    online: false,
  },
  {
    name: 'Guy Hawkins',
    email: 'felicia.reid@example.com',
    role: 'Marketing Coordinator',
    status: 'Online',
    avatar: '/photo.png',
    online: true,
  },
  {
    name: 'Jane Cooper',
    email: 'michael.mitc@example.com',
    role: 'Medical Assistant',
    status: 'Online',
    avatar: '/photo.png',
    online: true,
  },
  {
    name: 'Bessie Cooper',
    email: 'alma.lawson@example.com',
    role: 'President of Sales',
    status: 'Last seen 3h ago',
    avatar: '/photo.png',
    online: false,
  },
  {
    name: 'Devon Lane',
    email: 'nathan.roberts@example.com',
    role: 'Web Designer',
    status: 'Online',
    avatar: '/photo.png',
    online: true,
  },
  {
    name: 'Marvin McKinney',
    email: 'bill.candia@example.com',
    role: 'Nursing Assistant',
    status: 'Online',
    avatar: '/photo.png',
    online: true,
  },
];

export default function TeamPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Team</h1>
        <button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-md text-sm font-medium">
          Invite People
        </button>
      </div>

      <div className="bg-white rounded-lg shadow-sm divide-y border">
        {teamMembers.map((member, idx) => (
          <div
            key={idx}
            className="flex items-center justify-between px-4 py-4 hover:bg-gray-50"
          >
            <div className="flex items-center gap-4">
              <Image
                src={member.avatar}
                alt={member.name}
                width={40}
                height={40}
                className="rounded-full"
              />
              <div>
                <p className="font-medium text-gray-800">{member.name}</p>
                <p className="text-sm text-gray-500">{member.email}</p>
              </div>
            </div>

            <div className="flex items-center gap-4 text-sm">
              <div className="text-right hidden sm:block">
                <p className="text-gray-700">{member.role}</p>
                <p className="text-gray-400 text-xs">{member.status}</p>
              </div>

              {member.online && (
                <span className="h-2 w-2 rounded-full bg-green-500 sm:ml-2" />
              )}

              <button className="p-2 text-gray-400 hover:text-gray-600">
                <HiOutlineDotsVertical size={18} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
