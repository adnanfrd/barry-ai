// components/Sidebar.tsx
"use client";

import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { FaCirclePlus, FaWineGlass } from "react-icons/fa6";
import { MdKeyboardArrowDown } from "react-icons/md";
import { CiSearch, CiCircleQuestion, CiCreditCard1 } from "react-icons/ci";
import { BsChat } from "react-icons/bs";
import { FiSun, FiMoon } from "react-icons/fi";
import { VscSettings } from "react-icons/vsc";
import { TbLayoutSidebarLeftCollapseFilled } from "react-icons/tb";
import Image from "next/image";
import Link from "next/link";

const navItems = [
  { name: "Chats", href: "/dashboard/chats", icon: BsChat },
  {
    name: "Updates & FAQ",
    href: "/dashboard/updatesfaq",
    icon: CiCircleQuestion,
  },
  {
    name: "Subscriptions",
    href: "/dashboard/subscriptions",
    icon: CiCreditCard1,
  },
  { name: "Settings", href: "/dashboard/settings", icon: VscSettings },
];

const favorites = [
  { name: "Welcome", href: "/dashboard/welcome", color: "#6c6c6c", count: 1 },
  {
    name: "Voice Tools",
    href: "/dashboard/voice",
    color: "#4a90e2",
    count: 12,
  },
  {
    name: "Video Generation",
    href: "/dashboard/video",
    color: "#4caf50",
    count: 48,
  },
  {
    name: "Photo Generation",
    href: "/dashboard/photo",
    color: "#9b59b6",
    count: 2,
  },
  {
    name: "Education & Science",
    href: "/dashboard/education",
    color: "#d2691e",
    count: 7,
  },
  {
    name: "New list",
    href: "/dashboard/newlist",
    icon: FaCirclePlus,
    count: 0,
  },
];

export default function Sidebar() {
  const pathname = usePathname();
  const router = useRouter();
  const [collapsed, setCollapsed] = useState(false);

  const handleSearch = () => {
    router.push("/dashboard/search");
  };

  const toggleSidebar = () => {
    setCollapsed(!collapsed);
  };

  return (
    <aside
      className={`${
        collapsed ? "w-20" : "w-64"
      } transition-all duration-300 rounded-xl shrink-0 bg-[#faf9fa] border-r border-gray-200 hidden md:flex flex-col justify-between p-4 shadow-sm`}
    >
      <div>
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          {!collapsed && (
            <div className="flex items-center">
              <Image
                src="/app-icon.png"
                alt="App Icon"
                width={32}
                height={32}
              />
              <span className="ml-2 text-xl font-semibold text-gray-800">
                Fusion <span className="text-purple-600">AI</span>
              </span>
            </div>
          )}
          <TbLayoutSidebarLeftCollapseFilled
            onClick={toggleSidebar}
            className="h-5 w-5 text-gray-600 cursor-pointer ml-auto"
          />
        </div>

        {/* Search */}
        {!collapsed && (
          <div
            onClick={handleSearch}
            className="relative w-full mb-4 cursor-pointer"
          >
            <CiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-lg" />
            <input
              type="text"
              placeholder="Search"
              className="w-full pl-10 pr-3 py-2 text-sm rounded-md border border-gray-300 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
              readOnly
            />
          </div>
        )}

        {/* Main nav */}
        <nav className="mb-6 space-y-1">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={() => setCollapsed(false)}
              className={`flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium transition-all hover:bg-[#f1eff3] hover:text-gray-800 ${
                pathname === item.href
                  ? "bg-[#7e4ce0] text-white"
                  : "text-gray-700"
              }`}
            >
              <item.icon className="h-5 w-5" />
              {!collapsed && item.name}
            </Link>
          ))}
          <hr className="text-[#e8e5ec] mb-2" />
        </nav>

        {/* Favorites */}
        <div className="mb-2 flex items-center gap-2 text-sm text-gray-500">
          <MdKeyboardArrowDown />
          {!collapsed && <span>Favorites</span>}
        </div>
        <div className="space-y-1">
          {favorites.map((item, index) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={() => setCollapsed(false)}
              className={`flex items-center gap-3 px-2 py-2 rounded-md text-sm font-medium transition-all hover:bg-[#f1eff3] hover:text-gray-700 ${
                pathname === item.href ? "bg-[#f1eff3]" : "text-gray-700"
              }`}
            >
              {index === favorites.length - 1 ? (
                <FaCirclePlus className="h-4 w-4 text-gray-500" />
              ) : (
                <div
                  className="h-2 w-2 rounded-full"
                  style={{ backgroundColor: item.color }}
                />
              )}
              {!collapsed && item.name}
              {!collapsed && item.count > 0 && (
                <span className="ml-auto text-xs px-2 py-0.5 bg-gray-200 text-gray-700 rounded-full">
                  {item.count}
                </span>
              )}
            </Link>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div>
        {collapsed ? (
          <div className="flex justify-center mb-4">
            <Image
              src="/photo.png"
              alt="User Avatar"
              width={40}
              height={40}
              className="rounded-full object-cover"
            />
          </div>
        ) : (
          <div className="bg-white rounded-xl p-4 shadow-sm w-full max-w-xs mb-4">
            <div className="flex items-center gap-3">
              <Image
                src="/photo.png"
                alt="User Avatar"
                width={40}
                height={40}
                className="rounded-full object-cover"
              />
              <div>
                <p className="text-sm font-semibold text-gray-900">
                  James Broeng
                </p>
                <p className="text-xs text-gray-500">james@broeng.co.uk</p>
              </div>
            </div>
            <hr className="my-3 border-gray-200" />
            <div className="flex items-center gap-2 text-sm text-gray-700">
              <FaWineGlass className="text-gray-400" />
              <span className="font-medium">50%</span>
              <span className="text-gray-500">Completed</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-1.5 mt-2">
              <div
                className="bg-purple-500 h-1.5 rounded-full"
                style={{ width: "50%" }}
              />
            </div>
          </div>
        )}

        {/* Theme Toggle */}
        {collapsed ? (
          <div className="flex flex-col items-center space-y-2">
            <button
              type="button"
              className="p-2 bg-white border-2 border-gray-200 rounded-full shadow text-gray-900"
            >
              <FiSun className="w-5 h-5" />
            </button>
            <button
              type="button"
              className="p-2 bg-[#f4f2f7] border-2 border-gray-200 rounded-full text-gray-500"
            >
              <FiMoon className="w-5 h-5" />
            </button>
          </div>
        ) : (
          <div className="flex items-center justify-center p-4 rounded-full max-w-xs">
            <button
              type="button"
              className="px-10 py-2 cursor-pointer rounded-l-full bg-white border-2 border-gray-200 shadow text-gray-900"
            >
              <FiSun className="w-5 h-5" />
            </button>
            <button
              type="button"
              className="px-10 py-2 cursor-pointer bg-[#f4f2f7] border-2 border-gray-200 rounded-r-full text-gray-500"
            >
              <FiMoon className="w-5 h-5" />
            </button>
          </div>
        )}
      </div>
    </aside>
  );
}
