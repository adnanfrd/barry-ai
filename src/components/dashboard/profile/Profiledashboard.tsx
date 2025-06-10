// --- 2. components/Sidebar.tsx ---
"use client";

import { usePathname } from "next/navigation";
import { FaCirclePlus } from "react-icons/fa6";
import { MdKeyboardArrowDown } from "react-icons/md";

import Link from "next/link";
import {
  FaHome,
  FaMicrophone,
  FaVideo,
  FaCamera,
  FaBook,
  // FaCode,
  // FaCog,
  FaQuestionCircle,
  // FaSignOutAlt,
  FaCommentDots,
  FaUserCog,
  FaCreditCard,
} from "react-icons/fa";
import Image from "next/image";

const navItems = [
  { name: "Chats", href: "/dashboard/chats", icon: FaCommentDots },
  {
    name: "Updates & FAQ",
    href: "/dashboard/updatesfaq",
    icon: FaQuestionCircle,
  },
  {
    name: "Subscriptions",
    href: "/dashboard/subscriptions",
    icon: FaCreditCard,
  },
  { name: "Settings", href: "/dashboard/settings", icon: FaUserCog },
];

const colors = ["#6c6c6c", "#4a90e2", "#4caf50", "#9b59b6", "#d2691e", "#d2691e"];

// const favorites = [
//   { name: "Welcome", href: "/dashboard/welcome", color: colors[0] },
//   { name: "Voice Tools", href: "/dashboard/voice", color: colors[1] },
//   { name: "Video Generation", href: "/dashboard/video", color: colors[2] },
//   { name: "Photo Generation", href: "/dashboard/photo", color: colors[3] },
//   { name: "Education & Science", href: "/dashboard/education", color: colors[4] },
//   { name: "New list", href: "/dashboard/newlist", icon: FaCirclePlus },
// ];

export default function Profiledashboard() {
  const pathname = usePathname();

  return (
    <aside className="w-64 shrink-0 bg-white border-r border-gray-200 hidden md:flex flex-col justify-between p-4 shadow-sm">
      <div>
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
          <span className="ml-3 text-xl font-semibold text-gray-800">
            Fusion <span className="text-purple-600">AI</span>
          </span>
        </div>

        <input
          type="text"
          placeholder="Search"
          className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm mb-4 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
        />

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

       {/* <div className="text-xs gap-2 flex font-semibold text-gray-500 uppercase mb-1">
  <MdKeyboardArrowDown />
  <span>Favorites</span>
</div> */}
{/* <div className="space-y-1"> */}
  {/* {favorites.map((item, index) => (
     <Link
              key={item.name}
              href={item.href}
              className={`flex items-center gap-3 px-2 py-2 rounded-md text-sm font-medium transition-all hover:bg-purple-50 hover:text-purple-600 ${
                pathname === item.href
                  ? "bg-purple-100 text-purple-700"
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
            </Link>
  ))}
</div> */}

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
