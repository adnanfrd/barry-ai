"use client";

import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import { FaChevronDown, FaTerminal } from "react-icons/fa";
import { Disclosure } from "@headlessui/react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import Image from "next/image";
import { LuClock } from "react-icons/lu";
import { CiMap } from "react-icons/ci";
import { CgMailOpen } from "react-icons/cg";

const updates = [
  {
    title: "AI in the Windows Shell",
    date: "27 May, 2025",
    desc: "Microsoft is integrating AI deep into the Windows Shell, the advanced AI interface now driving the operating system.",
    image: "/updates1.png",
    icon: <FaTerminal className="text-teal-600 text-lg" />,
  },
  {
    title: "Smart History Feature",
    date: "26 May, 2025",
    desc: "Microsoft Timeline, a released feature that allowed users to revisit daily workflow through visual records, is making a comeback with AI recommendations.",
    image: "/updates2.png",
    icon: <LuClock className="text-teal-600 text-lg" />,
  },
  {
    title: "Google Immersive View with Maps",
    date: "22 May, 2025",
    desc: "Immersive Street View now enhanced with AI, provides a 3D flyover-style view of cities worldwide.",
    image: "/updates3.png",
    icon: <CiMap className="text-teal-600 text-lg" />,
  },
  {
    title: "Grand Image Help via Meta",
    date: "20 May, 2025",
    desc: 'Meta AI-powered "Help via Vision" feature assists users in completing image tasks.',
    image: "/updates4.png",
    icon: <CgMailOpen className="text-teal-600 text-lg" />,
  },
];

const faqs = [
  "Font reesizing variant shadow content reesizing distribute.",
  "Effect frame bullet blur plugin image select.",
  "Plugin scale undo pencil opacity duplicate.",
  "Frame offset content style ellipse panel title duplicate line.",
  "Figjam clip boolean connection line flows scrolling undo figma slice.",
  "Distribute object component thumbnail device layout frame vertical.",
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function FaqPage() {
  return (
    <div className="w-full h-screen min-h-screen overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']  bg-white dark:bg-[#232127] p-4 rounded-xl mx-auto px-4 font-poppins">
      <h1 className="text-2xl font-bold mb-1 text-gray-900 dark:text-white">
        Updates & FAQ
      </h1>
      <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
        Enhancements, Resolutions & Upgrades
      </p>

      <TabGroup>
        <div className="sticky top-0 z-[10] bg-white dark:bg-[#232127]">
          <TabList className="flex space-x-6 mb-4 border-b border-gray-200 dark:border-gray-700">
            {["Updates", "FAQ"].map((tab) => (
              <Tab
                key={tab}
                className={({ selected }) =>
                  classNames(
                    "relative pb-2 text-sm font-semibold cursor-pointer focus:outline-none",
                    selected
                      ? "text-purple-600 after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:-bottom-0.5 after:w-4 after:h-1 after:rounded-full after:bg-purple-600"
                      : "text-gray-700 dark:text-gray-300"
                  )
                }
              >
                {tab}
              </Tab>
            ))}
          </TabList>
        </div>

        <TabPanels>
          <TabPanel>
            <div className="space-y-6">
              {updates.map((item, idx) => (
                <div
                  key={idx}
                  className="flex flex-col md:flex-row items-start border-b border-gray-400 gap-4 p-4 bg-white dark:bg-[#232127] rounded-xl shadow"
                >
                  {idx % 2 === 0 ? (
                    <>
                      <div className="flex-1 flex gap-4">
                        <div className="flex flex-col items-start gap-2 w-10">
                          <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-br from-teal-100 to-blue-100 rounded-lg">
                            {item.icon}
                          </div>
                        </div>
                        <div className="space-y-2">
                          <h3 className="font-semibold text-gray-900 dark:text-white text-sm">
                            {item.title}
                          </h3>
                          <span className="text-xs text-gray-500 dark:text-gray-400">
                            {item.date}
                          </span>
                          <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-3">
                            {item.desc}
                          </p>
                          <button className="text-purple-600 text-sm font-medium flex items-center gap-1">
                            Learn More{" "}
                            <MdOutlineKeyboardArrowRight className="w-5 h-5" />
                          </button>
                        </div>
                      </div>

                      <Image
                        src={item.image}
                        alt={item.title}
                        height={170}
                        width={150}
                        className="w-full md:w-64 h-32 object-cover rounded-lg"
                      />
                    </>
                  ) : (
                    <>
                      <Image
                        src={item.image}
                        alt={item.title}
                        height={170}
                        width={150}
                        className="w-full md:w-64 h-32 object-cover rounded-lg"
                      />
                      <div className="flex-1 flex gap-4">
                        <div className="flex flex-col items-start gap-2 w-10">
                          <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-br from-teal-100 to-blue-100 rounded-lg">
                            {item.icon}
                          </div>
                        </div>
                        <div className="space-y-2">
                          <h3 className="font-semibold text-gray-900 dark:text-white text-sm">
                            {item.title}
                          </h3>
                          <span className="text-xs text-gray-500 dark:text-gray-400">
                            {item.date}
                          </span>
                          <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-3">
                            {item.desc}
                          </p>
                          <button className="text-purple-600 text-sm font-medium flex items-center gap-1">
                            Learn More{" "}
                            <MdOutlineKeyboardArrowRight className="w-5 h-5" />
                          </button>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              ))}
            </div>
          </TabPanel>

          <TabPanel>
            <div className="bg-white dark:bg-[#232127] rounded-xl shadow p-4">
              <div className="divide-y divide-gray-400">
                {faqs.map((faq, index) => (
                  <Disclosure
                    key={index}
                    as="div"
                    className="py-5"
                    defaultOpen={index === 0}
                  >
                    {({ open }) => (
                      <>
                        <Disclosure.Button className="flex justify-between items-center w-full text-left">
                          <span className="text-[15px] font-medium text-gray-700 dark:text-gray-300">
                            {faq}
                          </span>
                          <FaChevronDown
                            className={classNames(
                              "w-4 h-4 text-gray-500 dark:text-gray-400 transition-transform",
                              open ? "rotate-180 text-purple-600" : ""
                            )}
                          />
                        </Disclosure.Button>
                        <Disclosure.Panel className="pt-3 text-sm text-gray-500 dark:text-gray-400">
                          Distribute ellipse outline main arrow underline.
                          Device move polygon pen undo selection layer thumbnail
                          union italic. Outline pixel bold opacity content scale
                          undo editor link content. Bold figma hand variant
                          component. Star figjam hand ipsum distribute select
                          text. Prototype rectangle main outline blur vertical
                          variant link undo. Asset align list draft ellipse
                          subtract font.
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>
                ))}
              </div>
            </div>
          </TabPanel>
        </TabPanels>
      </TabGroup>
    </div>
  );
}
