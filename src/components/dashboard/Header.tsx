"use client";

import {
  Dialog,
  DialogPanel,
  DialogTitle,
  Popover,
  PopoverButton,
  PopoverPanel,
  Tab,
  TabGroup,
  TabList,
} from "@headlessui/react";
import { HiOutlineStar, HiOutlineDotsVertical } from "react-icons/hi";
import { FiUpload, FiTrash2 } from "react-icons/fi";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { BiSolidShareAlt, BiSolidCopy } from "react-icons/bi";
import { LuCopyPlus } from "react-icons/lu";
import { IoMdClose } from "react-icons/io";
import { FaRegUser } from "react-icons/fa";
import { useState } from "react";
import { usePathname } from "next/navigation";

const tabs = ["Blanced", "Creative", "Precise"];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const titleMap: Record<string, string> = {
  code: "Code Generation",
  education: "Education and Science",
  confirmation: "Confirmation",
  checkout: "Checkout",
  orderconfirmation: "Order Confirmation",
  photo: "Photo Generation",
  search: "Search",
  settings: "Settings",
  subscriptions: "Subscriptions",
  updatesfaq: "Updates & FAQ",
  video: "Video Generation",
  voice: "Voice",
  welcome: "Welcome",
};

export default function Header() {
  const pathname = usePathname();
  const pageKey = pathname?.split("/").pop() || "";
  const title = titleMap[pageKey] || "Chat";

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isShareOpen, setIsShareOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [sharedEmails, setSharedEmails] = useState<string[]>([
    "jorja.yang@example.com",
    "lily.tom.pony@gmail.com",
    "georgia.young@example.com",
  ]);

  const handleInvite = () => {
    if (email && !sharedEmails.includes(email)) {
      setSharedEmails([...sharedEmails, email]);
      setEmail("");
    }
  };

  const handleRemoveEmail = (target: string) => {
    setSharedEmails(sharedEmails.filter((e) => e !== target));
  };

  return (
    <div className="relative w-full border-b px-4 py-4 bg-white dark:bg-[#232127] rounded-t-2xl shadow-sm border-gray-200 dark:border-gray-700 flex items-center justify-between">
      <h2 className="text-lg font-bold text-black dark:text-white z-10">
        {title}
      </h2>

      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <TabGroup selectedIndex={selectedIndex} onChange={setSelectedIndex}>
          <TabList className="flex items-center outline-none bg-[#f3f3f6] dark:bg-[#2a2a2e] rounded-xl px-1 py-0.5 text-sm font-medium text-gray-600 dark:text-gray-300 space-x-1">
            {tabs.map((tab, index) => (
              <Tab
                key={index}
                className={({ selected }) =>
                  classNames(
                    "px-3 py-1 rounded-lg outline-none transition",
                    selected
                      ? "bg-white dark:bg-[#3a3a3f] text-black dark:text-white shadow-sm"
                      : "text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white"
                  )
                }
              >
                {tab}
              </Tab>
            ))}
          </TabList>
        </TabGroup>
      </div>

      <div className="flex items-center gap-4 text-gray-700 dark:text-gray-300 z-10">
        <button className="hover:text-black dark:hover:text-white transition">
          <HiOutlineStar className="w-5 h-5" />
        </button>

        <button
          className="hover:text-black cursor-pointer dark:hover:text-white transition"
          onClick={() => setIsShareOpen(true)}
        >
          <FiUpload className="w-5 h-5" />
        </button>

        <Popover className="relative">
          <PopoverButton className="hover:text-black dark:hover:text-white transition">
            <HiOutlineDotsVertical className="w-5 h-5 cursor-pointer" />
          </PopoverButton>

          <PopoverPanel className="absolute right-0 mt-2 w-48 rounded-xl bg-white dark:bg-[#2a2a2e] shadow-xl border border-gray-200 dark:border-gray-600 text-sm z-50">
            <div className="flex flex-col p-2 space-y-1">
              <button className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-[#3a3a3f] text-left">
                <MdOutlineFavoriteBorder className="w-4 h-4" />
                Add to favorites
              </button>
              <button className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-[#3a3a3f]">
                <BiSolidShareAlt className="w-4 h-4" />
                Share
              </button>
              <button className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-[#3a3a3f]">
                <LuCopyPlus className="w-4 h-4" />
                Clone
              </button>
              <button className="flex items-center gap-2 px-3 py-2 text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-md">
                <FiTrash2 className="w-4 h-4" />
                Delete
              </button>
            </div>
          </PopoverPanel>
        </Popover>
      </div>

      <Dialog
        open={isShareOpen}
        onClose={() => setIsShareOpen(false)}
        className="relative z-50"
      >
        <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center p-4">
          <DialogPanel className="w-full max-w-md rounded-2xl bg-white dark:bg-[#2a2a2e] p-6 shadow-lg">
            <DialogTitle className="text-lg font-semibold text-black dark:text-white">
              Share Chat
            </DialogTitle>

            <div className="mt-4">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Copy link *
              </label>
              <div className="flex items-center rounded-lg border px-3 py-2 bg-gray-50 dark:bg-[#3a3a3f] border-gray-300 dark:border-gray-600">
                <input
                  type="text"
                  value="Value"
                  readOnly
                  className="flex-1 bg-transparent outline-none text-sm text-gray-800 dark:text-gray-100"
                />
                <button className="text-purple-600 font-medium text-sm flex items-center gap-1">
                  <BiSolidCopy />
                  Copy
                </button>
              </div>
            </div>

            <div className="mt-4">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Share with others *
              </label>
              <div className="flex items-center rounded-lg border px-3 py-2 bg-gray-50 dark:bg-[#3a3a3f] border-gray-300 dark:border-gray-600">
                <FaRegUser className="text-gray-400 mr-2" />
                <input
                  type="email"
                  placeholder="Email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 bg-transparent outline-none text-sm text-gray-800 dark:text-gray-100"
                />
                <button
                  onClick={handleInvite}
                  className="text-purple-600 font-medium text-sm flex items-center gap-1"
                >
                  <LuCopyPlus />
                  Invite
                </button>
              </div>

              {sharedEmails.length > 0 && (
                <div className="mt-2 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-600">
                  {sharedEmails.map((email, idx) => (
                    <div
                      key={idx}
                      className="flex items-center justify-between px-4 py-2 bg-white dark:bg-[#2a2a2e] hover:bg-gray-50 dark:hover:bg-[#3a3a3f] border-b last:border-b-0 border-gray-200 dark:border-gray-600"
                    >
                      <div className="flex items-center gap-2 text-sm text-gray-800 dark:text-gray-200">
                        <FaRegUser className="text-gray-400" />
                        {email}
                      </div>
                      <button onClick={() => handleRemoveEmail(email)}>
                        <IoMdClose className="w-4 h-4 text-gray-400 hover:text-red-500" />
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="mt-6 flex justify-end gap-3">
              <button
                onClick={() => setIsShareOpen(false)}
                className="px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 text-gray-800 dark:text-white text-sm"
              >
                Cancel
              </button>
              <button className="px-4 py-2 rounded-md bg-purple-600 text-white text-sm hover:bg-purple-700">
                Share
              </button>
            </div>
          </DialogPanel>
        </div>
      </Dialog>
    </div>
  );
}
