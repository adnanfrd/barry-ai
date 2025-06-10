"use client";

import { usePathname } from "next/navigation";


import Link from "next/link";
import {
  FaQuestionCircle,
  // FaSignOutAlt,
  FaCommentDots,
  FaUserCog,
  FaCreditCard,
} from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { IoKeyOutline } from "react-icons/io5";
import { IoIosNotificationsOutline } from "react-icons/io";
import { LuCloudDownload } from "react-icons/lu";

import { RiComputerLine } from "react-icons/ri";
import { FiGrid, FiUsers  } from 'react-icons/fi';
import { HiOutlineAdjustments } from 'react-icons/hi'; // or:

const navItems = [
  { name: "Profile", href: "/dashboard/chats/profile", icon: CgProfile },
  {
    name: "Password",
    href: "/dashboard/updatesfaq/password",
    icon: IoKeyOutline,
  },
  {
    name: "Notifications",
    href: "/dashboard/subscriptions/notifications",
    icon: IoIosNotificationsOutline,
  },
  { name: "Chat export", 
    href: "/dashboard/settings/chatexport",
    icon: LuCloudDownload 
  },
  { name: "Sessions", 
    href: "/dashboard/settings/sessions",
    icon: RiComputerLine 
  },
  { name: "Applications", 
    href: "/dashboard/settings/applications",
    icon: FiGrid 
  },
  { name: "Team", 
    href: "/dashboard/settings/team",
    icon: FiUsers  
  },
  { name: "Appearance", 
    href: "/dashboard/settings/appearance",
    icon: HiOutlineAdjustments 
  },
];

const colors = ["#6c6c6c", "#4a90e2", "#4caf50", "#9b59b6", "#d2691e", "#d2691e"];

export default function Profiledashboard() {
  const pathname = usePathname();

  return (
    <aside className="w-64 shrink-0 bg-white border-r border-gray-200 hidden md:flex flex-col justify-between p-4 shadow-sm">
      <div>
        <nav className="mb-6 space-y-1">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium transition-all hover:bg-purple-50 hover:text-purple-600 ${
                pathname === item.href
                  ? "bg-purple-100 text-purple-700"
                  : "text-gray-700"
              }`}
            >
              <item.icon className="h-4 w-4" /> {item.name}
            </Link>
          ))}
        </nav>

      
      </div>

      {/* <div className="border-t pt-4">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center text-sm font-semibold text-green-700">
            JB
          </div>
          <div className="flex-1">
            <p className="text-sm font-medium text-gray-800">James Broong</p>
            <p className="text-xs text-gray-500">james@broong.co.uk</p>
            <div className="w-full bg-gray-200 rounded-full h-1.5 mt-1">
              <div
                className="bg-purple-500 h-1.5 rounded-full"
                style={{ width: "50%" }}
              ></div>
            </div>
            <p className="text-xs text-gray-400 mt-1">50% Completed</p>
          </div>
        </div>
      </div> */}
    </aside>
  );
}
