import Image from "next/image";
import { Button, Menu } from "@headlessui/react";
import { FiChevronDown, FiMoreHorizontal } from "react-icons/fi";

type Item = {
  title: string;
  time: string;
  content: string;
  image: string;
};

export default function SearchPage() {
const todayItems = [
  {
    title: "Underline outline layout figjam distribute project shadow",
    time: "now",
    content: "Reassisting device boolean component layout auto plugin select object font...",
    image: "/photo1.png",
  },
  {
    title: "Pencil comment image scale duplicate bullet duplicate outline",
    time: "28m ago",
    content: "Style pen device image shadow link resizing figjam. Duplicate union v...",
    image: "/photo2.png",
  },
  {
    title: "Pixel arrange team invite thumbnail ipsum opacity export arrow",
    time: "5:37 a.m.",
    content: "Scrolling slice distribute style content layout. Create thumbnail union el...",
    image: "/photo3.png",
  },
  {
    title: "Comment boolean clip link ipsum layout stroke.",
    time: "Oct 04, 2021",
    content: "Horizontal boolean clip group boolean undo comment. Fill arrange d...",
    image: "/photo1.png",
  },
];

const last30Items = [
  {
    title: "Duplicate connection layer flatten scale connection",
    time: "9:15 a.m.",
    content: "Layer effect link undo effect. Pencil prototype slice auto undo scale flat...",
    image: "/photo2.png",
  },
  {
    title: "Align auto hand resizing stroke resizing blur connection",
    time: "Thu 4:56 p.m.",
    content: "Link figjam layout content team opacity. Pencil vector share opaci...",
    image: "/photo3.png",
  },
  {
    title: "Vertical team inspect mask link text",
    time: "Apr 01, 2022",
    content: "Blur rotate text auto figma. Thumbnail clip arrange text selection clip...",
    image: "/photo1.png",
  },
  {
    title: "Selection select layout blur draft select draft",
    time: "Yd 2:35 a.m.",
    content: "Opacity layer slice duplicate text community library distribute arrow...",
    image: "/photo2.png",
  },
];


  return (
    <div className=" h-screen min-h-screen overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none'] bg-white dark:bg-[#232127] p-6 space-y-6 rounded-xl">
      <h1 className="text-2xl p-2 text-gray-900 dark:text-white px-4 py-2 font-bold mb-6">
        Search
      </h1>
      <hr className="mb-6 border-gray-200 dark:border-gray-700" />

        <div className="sticky top-0 z-[10] bg-white dark:bg-[#232127]">
        <div className="flex flex-wrap items-center gap-4">
        <div className="flex items-center gap-10 bg-gray-100 dark:bg-[#312e36] py-1 px-3 rounded-xl">
          <div className="flex items-center space-x-1 px-3 py-1.5 rounded-md text-sm text-gray-700 dark:text-gray-300">
            <span>Type</span>
            <FiChevronDown className="text-xs text-gray-400 dark:text-gray-500 cursor-pointer" />
          </div>
          <div className="flex items-center space-x-1 px-3 py-1.5 rounded-md text-sm text-gray-700 dark:text-gray-300">
            <span>Value</span>
            <FiChevronDown className="text-xs text-gray-400 dark:text-gray-500 cursor-pointer" />
          </div>
        </div>

        <div className="flex items-center gap-10 bg-gray-100 dark:bg-[#312e36] py-1 px-3 rounded-xl">
          <div className="flex items-center space-x-1 px-3 py-1.5 rounded-md text-sm text-gray-700 dark:text-gray-300">
            <span>Date</span>
            <FiChevronDown className="text-xs text-gray-400 dark:text-gray-500 cursor-pointer" />
          </div>
          <div className="flex items-center space-x-1 px-3 py-1.5 rounded-md text-sm text-gray-700 dark:text-gray-300">
            <span>Value</span>
            <FiChevronDown className="text-xs text-gray-400 dark:text-gray-500 cursor-pointer" />
          </div>
        </div>

        <Menu as="div" className="relative">
          <Button className="text-purple-600 dark:text-purple-400 text-sm flex items-center gap-1 font-medium">
            <FiMoreHorizontal className="text-base" />
            More Tools
          </Button>
        </Menu>
      </div>
    </div>

      <Section title="Today" date="Web 22 Dec" items={todayItems} />
      <Section title="Last 30 days" items={last30Items} />
    </div>
  );
}

function Section({
  title,
  date,
  items,
}: {
  title: string;
  date?: string;
  items: Item[];
}) {
  return (
    <div className="space-y-4">
      <div className="flex items-baseline gap-2">
        <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
          {title}
        </h2>
        {date && (
          <span className="text-sm text-gray-500 dark:text-gray-400">
            {date}
          </span>
        )}
      </div>
      <ul className="space-y-4">
        {items.map((item, idx) => (
          <li key={idx} className="flex gap-4 items-start">
            <Image
              src={item.image}
              alt="User Avatar"
              width={32}
              height={32}
              className="rounded-full object-cover"
            />
            <div className="flex-1 pb-3">
              <div className="flex justify-between">
                <h3 className="font-semibold text-sm leading-tight text-black dark:text-white">
                  {item.title}
                </h3>
                <span className="text-xs text-gray-400 dark:text-gray-500 whitespace-nowrap">
                  {item.time}
                </span>
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400 truncate mt-1">
                {item.content}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
