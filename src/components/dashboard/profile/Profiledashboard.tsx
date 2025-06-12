"use client";

import { usePathname } from "next/navigation";
import { useState, Fragment } from "react";
import Link from "next/link";

import { Dialog, DialogPanel, DialogTitle, Transition } from "@headlessui/react";
import { FaExclamationCircle, FaKey } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { IoKeyOutline } from "react-icons/io5";
import { IoIosNotificationsOutline } from "react-icons/io";
import { LuCloudDownload } from "react-icons/lu";
import { RiComputerLine } from "react-icons/ri";
import { FiGrid, FiUsers } from "react-icons/fi";
import { HiOutlineAdjustments } from "react-icons/hi";

const navItems = [
  { name: "Profile", href: "/dashboard/settings", icon: CgProfile },
  { name: "Password", href: "/dashboard/settings/password", icon: IoKeyOutline },
  { name: "Notifications", href: "/dashboard/settings/notifications", icon: IoIosNotificationsOutline },
  { name: "Chat export", href: "/dashboard/settings/chatexport", icon: LuCloudDownload },
  { name: "Sessions", href: "/dashboard/settings/sessions", icon: RiComputerLine },
  { name: "Applications", href: "/dashboard/settings/applications", icon: FiGrid },
  { name: "Team", href: "/dashboard/settings/team", icon: FiUsers },
  { name: "Appearance", href: "/dashboard/settings/appearance", icon: HiOutlineAdjustments },
];

export default function Profiledashboard() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <aside className="w-64 rounded-l-xl shrink-0 bg-[#faf9fa] dark:bg-[#1e1c21] border-r border-gray-200 dark:border-gray-700 hidden md:flex flex-col justify-between p-4 shadow-sm">
        <div>
          <nav className="mb-6 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium transition-all hover:bg-gray-300 hover:text-gray-600 dark:hover:bg-gray-800 dark:hover:text-gray-200 ${
                  pathname === item.href
                    ? "bg-[#e8e5ec] dark:bg-[#36343b] text-gray-900 dark:text-white font-bold"
                    : "text-gray-700 dark:text-gray-300"
                }`}
              >
                <item.icon className="h-4 w-4" /> {item.name}
              </Link>
            ))}
            <div className="px-3 text-gray-500 dark:text-gray-600 py-4">
              <hr className="border-gray-200 dark:border-gray-700" />
            </div>
            <div
              onClick={() => setIsOpen(true)}
              className={`flex items-center gap-5 px-3 py-2 rounded-md text-sm text-red-500 dark:text-[#e4a29e] cursor-pointer font-medium transition-all hover:bg-purple-50 dark:hover:bg-gray-800 hover:text-red-600`}
            >
              <button className="cursor-pointer">
                <span className="mr-2">X</span> Delete Account
              </button>
            </div>
          </nav>
        </div>
      </aside>

      <Transition show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-50" onClose={() => setIsOpen(false)}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 -translate-y-8"
            enterTo="opacity-100 translate-y-0"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 -translate-y-8"
          >
            <div className="fixed inset-0 flex items-start justify-center mt-24 p-4">
              <DialogPanel className="w-full max-w-lg rounded-xl bg-white dark:bg-gray-900 p-6 shadow-xl border border-gray-200 dark:border-gray-700">
                <div className="flex items-start gap-3">
                  <div className="mt-1 text-red-500">
                    <FaExclamationCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <DialogTitle className="text-lg font-semibold text-gray-900 dark:text-white">
                      We are sorry to see you go
                    </DialogTitle>
                    <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                      Warning: Deleting your account will permanently remove all of your data and cannot be undone. This includes your profile, chats, comments, and any other information associated with your account. Are you sure you want to proceed with deleting your account?
                    </p>
                  </div>
                </div>

                <div className="mt-4">
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Your password <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <FaKey className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-500" />
                    <input
                      type="password"
                      placeholder="Placeholder"
                      className="w-full pl-10 pr-4 py-2 text-sm border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-black dark:text-white rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                  </div>
                </div>

                <div className="mt-6 flex justify-end gap-3">
                  <button
                    onClick={() => setIsOpen(false)}
                    className="px-4 py-2 text-sm border border-gray-300 dark:border-gray-600 text-gray-800 dark:text-gray-200 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="px-4 py-2 text-sm bg-red-600 text-white rounded-md hover:bg-red-700"
                  >
                    Delete Account
                  </button>
                </div>
              </DialogPanel>
            </div>
          </Transition.Child>
        </Dialog>
      </Transition>
    </>
  );
}
