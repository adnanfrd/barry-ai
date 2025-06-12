"use client";

import { useEffect, useState } from "react";
import { Button, Listbox } from "@headlessui/react";
import { FaChevronDown } from "react-icons/fa6";
import Image from "next/image";
import { useTheme } from "next-themes";
const themes = ["Light", "Dark", "System"];
const languages = [
  { name: "English / UK", flag: "/video.png" },
  { name: "English / US", flag: "/video.png" },
  { name: "French", flag: "/video.png" },
];

export default function AppearancePage() {
  const [selectedLanguage, setSelectedLanguage] = useState(languages[0]);
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="p-2 h-screen rounded-r-xl bg-white dark:bg-[#232127] text-black dark:text-white sm:p-4 max-w-4xl mx-auto w-full">
      <h1 className="p-2 text-2xl font-bold mb-6">Appearance</h1>
      <hr className="mb-6 border-gray-200 dark:border-gray-700" />

      <div className="mb-8">
        <h2 className="text-sm font-medium mb-2 text-gray-800 dark:text-gray-300">
          Theme
        </h2>
        <div className="flex items-center gap-4">
          {themes.map((theme) => (
            <button
              key={theme}
              onClick={() => setTheme(theme.toLowerCase())}
              className={`w-28 h-24 rounded-lg p-2 flex flex-col border justify-between ${
                resolvedTheme?.toLowerCase() === theme.toLowerCase()
                  ? "border-2 border-purple-600 bg-purple-50 dark:bg-purple-950"
                  : "border border-gray-200 dark:border-gray-700"
              }`}
            >
              <div className="flex flex-col gap-1">
                <div
                  className={`w-4 h-4 rounded-full ${
                    theme === "Light"
                      ? "bg-gray-300 dark:bg-gray-600"
                      : theme === "Dark"
                      ? "bg-gray-600 dark:bg-gray-300"
                      : "bg-gray-500 dark:bg-gray-500"
                  }`}
                ></div>
                <div
                  className={`w-3/4 h-2 rounded ${
                    theme === "Light"
                      ? "bg-purple-600"
                      : theme === "Dark"
                      ? "bg-purple-400"
                      : "bg-purple-300"
                  }`}
                ></div>
                <div
                  className={`w-1/2 h-2 rounded ${
                    theme === "Light"
                      ? "bg-gray-400"
                      : theme === "Dark"
                      ? "bg-gray-500"
                      : "bg-gray-400"
                  }`}
                ></div>
              </div>
              <div className="flex justify-end">
                <div className="w-12 h-6 rounded-md bg-purple-500"></div>
              </div>
            </button>
          ))}
        </div>

        <div className="flex text-sm text-gray-700 dark:text-gray-300 mt-2 ml-[2px] mr-[2px]">
          <span className="w-28 text-center">Light</span>
          <span className="w-28 text-center">Dark</span>
          <span className="w-28 text-center mr-4">System</span>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-lg font-semibold mb-4">Language</h2>
        <Listbox value={selectedLanguage} onChange={setSelectedLanguage}>
          <div className="relative w-64">
            <Listbox.Button className="relative w-full cursor-pointer rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 py-2 pl-3 pr-10 text-left shadow-sm focus:outline-none focus:ring-1 focus:ring-purple-500 focus:border-purple-500 text-sm">
              <span className="flex items-center gap-2">
                <Image
                  src={selectedLanguage.flag}
                  alt=""
                  width={20}
                  height={20}
                />
                {selectedLanguage.name}
              </span>
              <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                <FaChevronDown className="h-4 w-4 text-gray-400" />
              </span>
            </Listbox.Button>
            <Listbox.Options className="absolute mt-1 w-full rounded-md bg-white dark:bg-gray-800 shadow-lg z-10 border border-gray-200 dark:border-gray-600 focus:outline-none">
              {languages.map((lang, idx) => (
                <Listbox.Option
                  key={idx}
                  value={lang}
                  className={({ active }) =>
                    `relative cursor-pointer select-none py-2 pl-3 pr-10 ${
                      active ? "bg-purple-100 dark:bg-purple-900" : ""
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

      <div className="flex gap-3">
        <Button className="bg-purple-600 text-white px-4 py-2 rounded-xl text-sm font-medium hover:bg-purple-700">
          Save Changes
        </Button>
        <Button className="text-gray-500 dark:text-gray-300 px-3 rounded-xl text-sm font-medium border border-purple-400 hover:bg-gray-200 dark:hover:bg-gray-700">
          Cancel
        </Button>
      </div>
    </div>
  );
}
