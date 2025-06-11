"use client";

import { usePathname } from "next/navigation";

import Link from "next/link";
import { CgProfile } from "react-icons/cg";
import { IoKeyOutline } from "react-icons/io5";
import { IoIosNotificationsOutline } from "react-icons/io";
import { LuCloudDownload } from "react-icons/lu";

import { RiComputerLine } from "react-icons/ri";
import { FiGrid, FiUsers } from "react-icons/fi";
import { HiOutlineAdjustments } from "react-icons/hi"; // or:

const navItems = [
  { name: "Profile", href: "/dashboard/settings", icon: CgProfile },
  {
    name: "Password",
    href: "/dashboard/settings/password",
    icon: IoKeyOutline,
  },
  {
    name: "Notifications",
    href: "/dashboard/settings/notifications",
    icon: IoIosNotificationsOutline,
  },
  {
    name: "Chat export",
    href: "/dashboard/settings/chatexport",
    icon: LuCloudDownload,
  },
  {
    name: "Sessions",
    href: "/dashboard/settings/sessions",
    icon: RiComputerLine,
  },
  {
    name: "Applications",
    href: "/dashboard/settings/applications",
    icon: FiGrid,
  },
  { name: "Team", href: "/dashboard/settings/team", icon: FiUsers },
  {
    name: "Appearance",
    href: "/dashboard/settings/appearance",
    icon: HiOutlineAdjustments,
  },
];

// const colors = [
//   "#6c6c6c",
//   "#4a90e2",
//   "#4caf50",
//   "#9b59b6",
//   "#d2691e",
//   "#d2691e",
// ];

export default function Profiledashboard() {
  const pathname = usePathname();
const  handleClick = () =>{
  console.log("clicked ");
  alert("clicked here...")
  
}
  return (
    <aside className="w-64 rounded-l-xl shrink-0 bg-[#faf9fa] border-r border-gray-200 hidden md:flex flex-col justify-between p-4 shadow-sm">
      <div>
        <nav className="mb-6 space-y-1">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium transition-all hover:bg-gray-300 hover:text-gray-600 ${
                pathname === item.href
                  ? "bg-[#e8e5ec] text-gray-900 font-bold"
                  : "text-gray-700 "
              }`}
            >
              <item.icon className="h-4 w-4" /> {item.name}
            </Link>
          ))}
          <div className=" px-3 text-gray-500 py-4">
            <hr />
          </div>
          <div 
          onClick={handleClick}
          className={`flex items-center gap-5 px-3 py-2 rounded-md text-sm text-red-500 cursor-pointer font-medium transition-all hover:bg-purple-50 hover:text-red-600 `}>

            <button className="cursor-pointer"><span className="mr-2"> X </span> Delete Account</button>
            
          </div>
        </nav>
      </div>
    </aside>
  );
}
