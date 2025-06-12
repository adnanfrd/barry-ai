"use client";

import { HiOutlineDotsVertical } from "react-icons/hi";
import Image from "next/image";
import { Button } from "@headlessui/react";

const teamMembers = [
  {
    name: "Albert Flores",
    email: "albert.baker@example.com",
    role: "Dog Trainer",
    status: "Last seen 3h ago",
    avatar: "/photo3.png",
    online: false,
  },
  {
    name: "Guy Hawkins",
    email: "felicia.reid@example.com",
    role: "Marketing Coordinator",
    status: "Online",
    avatar: "/photo2.png",
    online: true,
  },
  {
    name: "Jane Cooper",
    email: "michael.mitc@example.com",
    role: "Medical Assistant",
    status: "Online",
    avatar: "/photo1.png",
    online: true,
  },
  {
    name: "Bessie Cooper",
    email: "alma.lawson@example.com",
    role: "President of Sales",
    status: "Last seen 3h ago",
    avatar: "/photo3.png",
    online: false,
  },
  {
    name: "Devon Lane",
    email: "nathan.roberts@example.com",
    role: "Web Designer",
    status: "Online",
    avatar: "/photo2.png",
    online: true,
  },
  {
    name: "Marvin McKinney",
    email: "bill.candia@example.com",
    role: "Nursing Assistant",
    status: "Online",
    avatar: "/photo1.png",
    online: true,
  },
];

export default function TeamPage() {
  return (
    <div className="p-2 h-screen rounded-r-xl bg-white dark:bg-[#232127] sm:p-4 max-w-4xl mx-auto w-full">
      <div className="flex p-2 justify-between items-center mb-6">
        <h1 className="text-2xl text-gray-900 dark:text-white font-bold">Team</h1>
        <Button className="bg-purple-600 rounded-xl hover:bg-purple-700 text-white px-4 py-2 text-sm font-medium">
          Invite People
        </Button>
      </div>
      <hr className="mb-6 border-gray-200 dark:border-gray-700" />

      <div className="bg-white dark:bg-transparent rounded-lg divide-y divide-gray-300 dark:divide-gray-700">
        {teamMembers.map((member, idx) => (
          <div
            key={idx}
            className="flex items-center justify-between px-4 py-4"
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
                <p className="font-medium text-gray-800 dark:text-gray-200">{member.name}</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">{member.email}</p>
              </div>
            </div>

            <div className="flex items-center gap-4 text-sm">
              <div className="text-right hidden sm:block">
                <p className="text-gray-700 dark:text-gray-300">{member.role}</p>
                <p className="text-gray-400 dark:text-gray-500 text-xs">{member.status}</p>
              </div>

              {member.online && (
                <span className="h-2 w-2 rounded-full bg-green-500 sm:ml-2" />
              )}

              <button className="p-2 text-gray-400 hover:text-gray-600 dark:text-white dark:hover:text-gray-300">
                <HiOutlineDotsVertical size={18} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
