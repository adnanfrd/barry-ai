// --- 2. components/Sidebar.tsx ---
"use client";

import { usePathname, useRouter } from "next/navigation";
import { FaCirclePlus } from "react-icons/fa6";
import { MdKeyboardArrowDown } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { BsChat } from "react-icons/bs";
import { FiSun, FiMoon } from "react-icons/fi";
import { Input } from "@headlessui/react";
import Link from "next/link";
import { VscSettings } from "react-icons/vsc";

import { TbLayoutSidebarLeftCollapseFilled } from "react-icons/tb";
import { CiCircleQuestion, CiCreditCard1} from "react-icons/ci";
import { FaWineGlass } from "react-icons/fa";



import Image from "next/image";

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

const colors = [
  "#6c6c6c",
  "#4a90e2",
  "#4caf50",
  "#9b59b6",
  "#d2691e",
  "#d2691e",
];

const favorites = [
  { name: "Welcome", href: "/dashboard/welcome", color: colors[0], count : 1 },
  { name: "Voice Tools", href: "/dashboard/voice", color: colors[1], count : 12 },
  { name: "Video Generation", href: "/dashboard/video", color: colors[2], count : 48 },
  { name: "Photo Generation", href: "/dashboard/photo", color: colors[3], count : 2 },
  {
    name: "Education & Science",
    href: "/dashboard/education",
    color: colors[4],
    count : 7
  },
  { name: "New list", href: "/dashboard/newlist", icon: FaCirclePlus, count: 0 },
];

export default function Sidebar() {
  const pathname = usePathname();
  const router = useRouter();
 const handleSearch = () =>{
   router.push('/dashboard/search')
 }

  return (
    <aside className="w-64 shrink-0 bg-[#faf9fa] border-r border-gray-200 hidden md:flex flex-col justify-between p-4 shadow-sm">
      <div>
        <div className="flex justify-between items-center">
          <div className="flex items-center mb-6">
            <div>
              <Image
                src="/app-icon.png" // Replace with your image path or URL
                alt="User Avatar"
                width={32}
                height={32}
                className="object-cover"
              />
            </div>
            <span className="ml-2 text-xl font-semibold text-gray-800 ">
              Fusion <span className="text-purple-600">AI</span>
            </span>
          </div>
          <div>
            <TbLayoutSidebarLeftCollapseFilled className="h-5 w-5 mb-4.5 text-gray-600 cursor-pointer" />
          </div>
        </div>

        <div onClick={handleSearch} className="relative w-full mb-4 cursor-pointer">
          
          <CiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-lg" />
          <Input
            type="text"
            placeholder="Search"
            className="w-full pl-10 pr-3 py-2 text-sm rounded-md border border-gray-300 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        
        </div> 

        <nav className="mb-6 space-y-1">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium transition-all hover:bg-[#f1eff3] hover:text-gray-800 ${
                pathname === item.href
                  ? "bg-[#7e4ce0] text-white"
                  : "text-gray-700"
              }`}
            >
              <item.icon className="h-5 w-5 font-semibold" /> {item.name}
            </Link>
            
          ))}
                    <hr className="text-[#e8e5ec] mb-2 px-3"/>

        </nav>
        <div className="text-sm items-center gap-2 flex text-gray-500  mb-1">
          <MdKeyboardArrowDown />
          <span className="text-gray-500">Favorites</span>
        </div>
        <div className="space-y-1">
          {favorites.map((item, index) => (
            <Link
              key={item.name}
              href={item.href}
              className={`flex items-center gap-3 px-2 py-2 rounded-md text-sm font-medium transition-all hover:bg-[#f1eff3] hover:text-gray-700 ${
                pathname === item.href
                  ? "bg-[#f1eff3]"
                  : "text-gray-700"
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
              {item.name}
               {item.count > 0 && (
            <span className="ml-auto text-xs px-2 py-0.5 bg-gray-200 text-gray-700 rounded-full">
              {item.count}
            </span>
          )}
            </Link>
          ))}
        </div>
      </div>

      <div className="pt-4">
       <div className=" bg-white rounded-xl p-4 shadow-sm w-full max-w-xs">
      <div className="flex items-center gap-3">
        <Image
          src="/photo.png" // Replace with actual user image path
          alt="User Avatar"
          width={40}
          height={40}
          className="rounded-full object-cover"
        />
        <div>
          <p className="text-sm font-semibold text-gray-900">James Broeng</p>
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
      </div>

      <div className="flex items-center justify-center p-4 rounded-full max-w-xs">
      <button
        type="button"
        className="px-10 py-2 cursor-pointer rounded-l-full bg-white border-2 border-gray-200 shadow text-gray-900"
      >
        <FiSun className="w-5 h-5 cursor-pointer" />
      </button>
      <button
        type="button"
        className="px-10 cursor-pointer py-2 bg-[#f4f2f7] border-2 border-gray-200 rounded-r-full text-gray-500"
      >
        <FiMoon className="w-5 h-5 cursor-pointer" />
      </button>
    </div>
    </aside>
  );
}
