'use client';

import { useState } from 'react';
import { Listbox } from '@headlessui/react';
import { FaChevronDown } from 'react-icons/fa6';
import Image from 'next/image';

const themes = ['Light', 'Dark', 'System'];
const languages = [
  { name: 'English / UK', flag: '/video.png' },
  { name: 'English / US', flag: '/video.png' },
  { name: 'French', flag: '/video.png' },
];

export default function AppearancePage() {
  const [selectedTheme, setSelectedTheme] = useState('Light');
  const [selectedLanguage, setSelectedLanguage] = useState(languages[0]);

  return (
<div className="max-w-4xl mx-auto px-4 min-h-screen overflow-y-auto py-6 sm:px-6 lg:px-8">
      <h1 className="text-2xl font-bold mb-6">Appearance</h1>

      {/* Theme section */}
      <div className="mb-8">
        <h2 className="text-lg font-semibold mb-4">Theme</h2>
        <div className="flex gap-4">
          {themes.map((theme) => (
            <button
              key={theme}
              onClick={() => setSelectedTheme(theme)}
              className={`w-28 h-24 rounded-lg border p-2 flex flex-col items-center justify-between ${
                selectedTheme === theme
                  ? 'border-purple-600 bg-purple-50'
                  : 'border-gray-200'
              }`}
            >
              <div className="w-full h-4/5 bg-gray-100 dark:bg-gray-800 rounded mb-1" />
              <div className="w-3/4 h-2 bg-purple-500 rounded" />
              <span className="mt-2 text-sm">{theme}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Language selector */}
      <div className="mb-8">
        <h2 className="text-lg font-semibold mb-4">Language</h2>
        <Listbox value={selectedLanguage} onChange={setSelectedLanguage}>
          <div className="relative w-64">
            <Listbox.Button className="relative w-full cursor-pointer rounded-md border border-gray-300 bg-white py-2 pl-3 pr-10 text-left shadow-sm focus:outline-none focus:ring-1 focus:ring-purple-500 focus:border-purple-500 text-sm">
              <span className="flex items-center gap-2">
                <Image src={selectedLanguage.flag} alt="" width={20} height={20} />
                {selectedLanguage.name}
              </span>
              <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                <FaChevronDown className="h-4 w-4 text-gray-400" />
              </span>
            </Listbox.Button>
            <Listbox.Options className="absolute mt-1 w-full rounded-md bg-white shadow-lg z-10 border border-gray-200 focus:outline-none">
              {languages.map((lang, idx) => (
                <Listbox.Option
                  key={idx}
                  value={lang}
                  className={({ active }) =>
                    `relative cursor-pointer select-none py-2 pl-3 pr-10 ${
                      active ? 'bg-purple-100' : ''
                    }`
                  }
                >
                  <div className="flex items-center gap-2">
                    <Image src={lang.flag} alt="" width={20} height={20} />
                    {lang.name}
                  </div>
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </div>
        </Listbox>
      </div>

      {/* Action buttons */}
      <div className="flex gap-3">
        <button className="bg-purple-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-purple-700">
          Save Changes
        </button>
        <button className="text-gray-500 text-sm font-medium hover:underline">Cancel</button>
      </div>
    </div>
  );
}
