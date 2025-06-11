'use client';

import { Tab } from '@headlessui/react';
import { useState } from 'react';
import {
  HiOutlineStar,
  HiOutlineDotsVertical,
} from 'react-icons/hi';
import { FiUpload } from "react-icons/fi";

const tabs = ['Blanced', 'Creative', 'Precise'];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export default function Header() {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <div className="relative w-full border-b border-[#f5f5f5] px-4 py-4 bg-white rounded-t-2xl shadow-sm border-b border-gray-200 flex items-center justify-between">
      <h2 className="text-base font-bold text-black z-10">Code Generation</h2>

      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <Tab.Group selectedIndex={selectedIndex} onChange={setSelectedIndex}>
          <Tab.List className="flex items-center outline-none bg-[#f3f3f6] rounded-xl px-1 py-0.5 text-sm font-medium text-gray-600 space-x-1">
            {tabs.map((tab, index) => (
              <Tab
                key={index}
                className={({ selected }) =>
                  classNames(
                    'px-3 py-1 rounded-lg outline-none transition',
                    selected
                      ? 'bg-white text-black shadow-sm'
                      : 'text-gray-500 hover:text-black'
                  )
                }
              >
                {tab}
              </Tab>
            ))}
          </Tab.List>
        </Tab.Group>
      </div>

      <div className="flex items-center gap-4 text-gray-700 z-10">
        <button className="hover:text-black transition">
          <HiOutlineStar className="w-5 h-5" />
        </button>
        <button className="hover:text-black transition">
          <FiUpload className="w-5 h-5" />
        </button>
        <button className="hover:text-black transition">
          <HiOutlineDotsVertical className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
