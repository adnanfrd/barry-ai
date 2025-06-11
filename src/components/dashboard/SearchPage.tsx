import Image from "next/image";
import { Button, Menu } from "@headlessui/react";
import { FiChevronDown, FiMoreHorizontal } from "react-icons/fi";
type Item = {
  title: string;
  time: string;
  content: string;
};
export default function SearchPage() {
  const todayItems = [
    {
      title: "Underline outline layout figjam distribute project shadow",
      time: "now",
      content: "Reassisting device boolean component layout auto plugin select object font...",
    },
    {
      title: "Pencil comment image scale duplicate bullet duplicate outline",
      time: "28m ago",
      content: "Style pen device image shadow link resizing figjam. Duplicate union v...",
    },
    {
      title: "Pixel arrange team invite thumbnail ipsum opacity export arrow",
      time: "5:37 a.m.",
      content: "Scrolling slice distribute style content layout. Create thumbnail union el...",
    },
    {
      title: "Comment boolean clip link ipsum layout stroke.",
      time: "Oct 04, 2021",
      content: "Horizontal boolean clip group boolean undo comment. Fill arrange d...",
    },
  ];

  const last30Items = [
    {
      title: "Duplicate connection layer flatten scale connection",
      time: "9:15 a.m.",
      content: "Layer effect link undo effect. Pencil prototype slice auto undo scale flat...",
    },
    {
      title: "Align auto hand resizing stroke resizing blur connection",
      time: "Thu 4:56 p.m.",
      content: "Link figjam layout content team opacity. Pencil vector share opaci...",
    },
    {
      title: "Vertical team inspect mask link text",
      time: "Apr 01, 2022",
      content: "Blur rotate text auto figma. Thumbnail clip arrange text selection clip...",
    },
    {
      title: "Selection select layout blur draft select draft",
      time: "Yd 2:35 a.m.",
      content: "Opacity layer slice duplicate text community library distribute arrow...",
    },
  ];

  return (
    <div className="min-h-screen bg-white p-6 space-y-6">
      <div className="flex flex-wrap items-center gap-4">
      <div className="flex items-center gap-10 bg-gray-100 py-1 px-3 rounded-xl ">
        <div className="flex items-center space-x-1 px-3 py-1.5  rounded-md text-sm text-gray-700 ">
          <span>Type</span>
          <FiChevronDown className="text-xs text-gray-400 cursor-pointer" />
        </div>
        <div className="flex items-center space-x-1 px-3 py-1.5  rounded-md text-sm text-gray-700 ">
          <span>Value</span>
          <FiChevronDown className="text-xs text-gray-400 cursor-pointer" />
        </div>
      </div>

      <div className="flex items-center gap-10 bg-gray-100 py-1 px-3 rounded-xl  ">
        <div className="flex items-center space-x-1 px-3 py-1.5  rounded-md text-sm text-gray-700 ">
          <span>Date</span>
          <FiChevronDown className="text-xs text-gray-400 cursor-pointer" />
        </div>
        <div className="flex items-center space-x-1 px-3 py-1.5  rounded-md text-sm text-gray-700 ">
          <span>Value</span>
          <FiChevronDown className="text-xs text-gray-400 cursor-pointer" />
        </div>
      </div>

      <Menu as="div" className="relative">
        <Button className="text-purple-600 text-sm flex items-center gap-1 font-medium">
          <FiMoreHorizontal className="text-base" />
          More Tools
        </Button>
      </Menu>
    </div>

      <Section title="Today" date="Web 22 Dec" items={todayItems} />

      <Section title="Last 30 days" items={last30Items} />
    </div>
  );
}

function Section({ title, date, items }: { title: string; date?: string; items: Item[] }) {
  return (
    <div className="space-y-4">
      <div className="flex items-baseline justify-between">
        <h2 className="text-lg font-semibold">{title}</h2>
        {date && <span className="text-sm text-gray-500">{date}</span>}
      </div>
      <ul className="space-y-4">
        {items.map((item, idx) => (
          <li key={idx} className="flex gap-4 items-start">
            <Image
              src="/app-icon.png"
              alt="User Avatar"
              width={32}
              height={32}
              className="rounded-full object-cover"
            />
            <div className="flex-1 border-b pb-3">
              <div className="flex justify-between">
                <h3 className="font-medium text-sm leading-tight text-black">
                  {item.title}
                </h3>
                <span className="text-xs text-gray-400 whitespace-nowrap">{item.time}</span>
              </div>
              <p className="text-sm text-gray-500 truncate mt-1">{item.content}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
