"use client";

import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { FaCirclePlus, FaWineGlass } from "react-icons/fa6";
import { MdKeyboardArrowDown } from "react-icons/md";
import { CiSearch, CiCircleQuestion, CiCreditCard1 } from "react-icons/ci";
import { BsChat } from "react-icons/bs";
import { FiSun, FiMoon } from "react-icons/fi";
import { useTheme } from "next-themes";
import { VscSettings } from "react-icons/vsc";
import { TbLayoutSidebarLeftCollapseFilled } from "react-icons/tb";
import Image from "next/image";
import Link from "next/link";

const navItems = [
  { name: "Chats", href: "/dashboard", icon: BsChat },
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
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

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
      } transition-all duration-300 rounded-xl shrink-0 
      bg-[#faf9fa] dark:bg-[#1f1f1f] 
      border-r border-gray-200 dark:border-gray-700 
      hidden md:flex flex-col justify-between p-4 shadow-sm`}
    >
      <div>
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          {!collapsed && (
            <Link href="/dashboard">
              <div className="flex items-center">
                <Image
                  src="/app-icon.png"
                  alt="App Icon"
                  width={32}
                  height={32}
                />
                <span className="ml-2 text-xl font-semibold text-gray-800 dark:text-white">
                  Fusion <span className="text-purple-600">AI</span>
                </span>
              </div>
            </Link>
          )}
          <TbLayoutSidebarLeftCollapseFilled
            onClick={toggleSidebar}
            className="h-5 w-5 text-gray-600 dark:text-gray-300 cursor-pointer ml-auto"
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
              className="w-full pl-10 pr-3 py-2 text-sm rounded-md 
                border border-gray-300 dark:border-gray-600 
                placeholder-gray-400 dark:placeholder-gray-500 
                focus:outline-none focus:ring-2 focus:ring-purple-500 
                bg-white dark:bg-[#2a2a2a] text-gray-900 dark:text-white"
              readOnly
            />
          </div>
        )}

        {/* Main Nav */}
        <nav className="mb-6 space-y-1">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={() => setCollapsed(false)}
              className={`flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium transition-all
                hover:bg-[#f1eff3] dark:hover:bg-[#333] 
                ${
                  pathname === item.href
                    ? "bg-[#7e4ce0] text-white"
                    : "text-gray-700 dark:text-gray-300"
                }`}
            >
              <item.icon className="h-5 w-5" />
              {!collapsed && item.name}
            </Link>
          ))}
          <hr className="text-[#e8e5ec] dark:text-gray-700 mb-2" />
        </nav>

        {/* Favorites */}
        <div className="mb-2 flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
          <MdKeyboardArrowDown />
          {!collapsed && <span>Favorites</span>}
        </div>
        <div className="space-y-1">
          {favorites.map((item, index) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={() => setCollapsed(false)}
              className={`flex items-center gap-3 px-2 py-2 rounded-md text-sm font-medium transition-all 
                hover:bg-[#f1eff3] dark:hover:bg-[#333] 
                ${
                  pathname === item.href
                    ? "bg-[#f1eff3] dark:bg-[#333]"
                    : "text-gray-700 dark:text-gray-300"
                }`}
            >
              {index === favorites.length - 1 ? (
                <FaCirclePlus className="h-4 w-4 text-gray-500 dark:text-gray-400" />
              ) : (
                <div
                  className="h-2 w-2 rounded-full"
                  style={{ backgroundColor: item.color }}
                />
              )}
              {!collapsed && item.name}
              {!collapsed && item.count > 0 && (
                <span className="ml-auto text-xs px-2 py-0.5 bg-gray-200 dark:bg-gray-600 text-gray-700 dark:text-gray-300 rounded-full">
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
          <div className="bg-white dark:bg-[#2a2a2a] rounded-xl p-4 shadow-sm w-full max-w-xs mb-4">
            <div className="flex items-center gap-3">
              <Image
                src="/photo.png"
                alt="User Avatar"
                width={40}
                height={40}
                className="rounded-full object-cover"
              />
              <div>
                <p className="text-sm font-semibold text-gray-900 dark:text-white">
                  James Broeng
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  james@broeng.co.uk
                </p>
              </div>
            </div>
            <hr className="my-3 border-gray-200 dark:border-gray-600" />
            <div className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
              <FaWineGlass className="text-gray-400 dark:text-gray-500" />
              <span className="font-medium">50%</span>
              <span className="text-gray-500 dark:text-gray-400">
                Completed
              </span>
            </div>
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1.5 mt-2">
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
              onClick={() => setTheme("light")}
              className={`p-2 border-2 rounded-full shadow ${
                resolvedTheme === "light"
                  ? "bg-yellow-300 text-white border-yellow-400"
                  : "bg-white dark:bg-gray-700 text-gray-900 dark:text-white border-gray-200 dark:border-gray-600"
              }`}
            >
              <FiSun className="w-5 h-5" />
            </button>
            <button
              type="button"
              onClick={() => setTheme("dark")}
              className={`p-2 border-2 rounded-full ${
                resolvedTheme === "dark"
                  ? "bg-gray-800 text-white border-gray-700"
                  : "bg-[#f4f2f7] dark:bg-gray-600 text-gray-500 border-gray-200 dark:border-gray-500"
              }`}
            >
              <FiMoon className="w-5 h-5" />
            </button>
          </div>
        ) : (
          <div className="flex items-center justify-center p-4 rounded-full max-w-xs">
            <button
              type="button"
              onClick={() => setTheme("light")}
              className={`px-10 py-2 cursor-pointer rounded-l-full border-2 shadow ${
                resolvedTheme === "light"
                  ? "bg-gray-200 text-black border-gray-200"
                  : "bg-white dark:bg-gray-700 text-gray-900 dark:text-white border-gray-200 dark:border-gray-500"
              }`}
            >
              <FiSun className="w-5 h-5" />
            </button>
            <button
              type="button"
              onClick={() => setTheme("dark")}
              className={`px-10 py-2 cursor-pointer rounded-r-full border-2 ${
                resolvedTheme === "dark"
                  ? "bg-gray-800 text-white border-gray-700"
                  : "bg-[#f4f2f7] dark:bg-gray-600 text-gray-500 border-gray-200 dark:border-gray-500"
              }`}
            >
              <FiMoon className="w-5 h-5" />
            </button>
          </div>
        )}
      </div>
    </aside>
  );
}
