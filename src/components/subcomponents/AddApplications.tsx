"use client";

import React from "react";
import {
  SiTelegram,
  SiAngular,
  SiDropbox,
  SiFirefoxbrowser,
  SiDribbble,
  SiEvernote,
  SiFramer,
  SiFacebook,
  SiBehance,
  SiDiscord,
  SiInvision,
} from "react-icons/si";
import { IoLogoFigma } from "react-icons/io5";
import { FiPlusCircle, FiInfo  } from "react-icons/fi";


import { FaInfoCircle } from "react-icons/fa";

const apps = [
  {
    name: "Telegram",
    icon: SiTelegram,
    desc: "Pixel hand share export",
    color: "text-[#0088cc]",
    added: false,
  },
  {
    name: "Angular",
    icon: SiAngular,
    desc: "Bold rectangle layer bold",
    color: "text-[#dd0031]",
    added: true,
  },
  {
    name: "Dropbox",
    icon: SiDropbox,
    desc: "Overflow create strikethrough bullet",
    color: "text-[#0061ff]",
    added: false,
  },
  {
    name: "Firefox",
    icon: SiFirefoxbrowser,
    desc: "Undo pen flows invite auto",
    color: "text-[#ff7139]",
    added: true,
  },
  {
    name: "Dribbble",
    icon: SiDribbble,
    desc: "Font export fill figjam",
    color: "text-[#ea4c89]",
    added: true,
  },
  {
    name: "Evernote",
    icon: SiEvernote,
    desc: "Ipsum bold slice project group",
    color: "text-[#00a82d]",
    added: false,
  },
  {
    name: "Figma",
    icon: IoLogoFigma,
    desc: "Polygon overflow slice variant",
    color: "text-[#a259ff]",
    added: false,
  },
  {
    name: "Framer",
    icon: SiFramer,
    desc: "Ipsum asset overflow fill figjam",
    color: "text-[#0055ff]",
    added: false,
  },
  {
    name: "Facebook",
    icon: SiFacebook,
    desc: "Team resizing star layout",
    color: "text-[#1877f2]",
    added: false,
  },
  {
    name: "Behance",
    icon: SiBehance,
    desc: "Arrange create style prototype",
    color: "text-[#1769ff]",
    added: false,
  },
  {
    name: "Discord",
    icon: SiDiscord,
    desc: "Variant editor rotate underline",
    color: "text-[#5865f2]",
    added: false,
  },
  {
    name: "Invision",
    icon: SiInvision,
    desc: "Frame strikethrough underline pen stroke",
    color: "text-[#f36]",
    added: true,
  },
];

const AddApplications = () => {
  return (
    <div className="w-full  bg-white dark:bg-[#232127] p-4 rounded-xl max-w-6xl mx-auto px-4 font-poppins">
      <h1 className="text-2xl p-2 font-bold mb-1 text-gray-900 dark:text-white">
        Applications
      </h1>
      <p className="text-sm px-2 text-gray-500 dark:text-gray-400 mb-6">
        Enable advanced workflows with applications
      </p>
      <hr className="mb-6 border-gray-200 dark:border-gray-700" />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {apps.map((app, i) => (
          <div
            key={i}
            className="border border-none dark:border-gray-700 rounded-xl p-4 flex flex-col gap-3 justify-between bg-[#f6f5f8] dark:bg-[#302d35]"
          >
            <div className="flex items-center gap-3">
              <div className={`text-2xl p-2 rounded-full bg-white shadow ${app.color}`}>
                <app.icon />
              </div>
              <div>
                <h3 className="font-semibold text-sm text-gray-900 dark:text-white">
                  {app.name}
                </h3>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  {app.desc}
                </p>
              </div>
            </div>
            <div className="flex items-center justify-start gap-2">
              <FiInfo  className="text-purple-400" />
              <button
                disabled={app.added}
                className={`flex items-center gap-1 w-full justify-center text-sm px-4 py-1.5 rounded-md border transition ${
                  app.added
                    ? "bg-gray-200 text-gray-500 dark:bg-[#504d56] dark:text-gray-300 cursor-not-allowed"
                    : "border-purple-500 text-purple-600  dark:border-purple-300 dark:text-purple-300"
                }`}
              >
                {app.added ? (
                  "✓ Added"
                ) : (
                  <>
                    <FiPlusCircle className="text-xs mr-1"  />
                    Add
                  </>
                )}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AddApplications;
