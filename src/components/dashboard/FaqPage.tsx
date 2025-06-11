"use client";

import { Tab } from "@headlessui/react";
import { FaChevronDown, FaTerminal } from "react-icons/fa";
import { Disclosure } from "@headlessui/react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import Image from "next/image";

const updates = [
  {
    title: "AI in the Windows Shell",
    date: "27 May, 2025",
    desc: "Microsoft is integrating AI deep into the Windows Shell, the advanced AI interface now driving the operating system.",
    image: "/updates1.png",
  },
  {
    title: "Smart History Feature",
    date: "26 May, 2025",
    desc: "Microsoft Timeline, a released feature that allowed users to revisit daily workflow through visual records, is making a comeback with AI recommendations.",
    image: "/updates2.png",
  },
  {
    title: "Google Immersive View with Maps",
    date: "22 May, 2025",
    desc: "Immersive Street View now enhanced with AI, provides a 3D flyover-style view of cities worldwide.",
    image: "/updates3.png",
  },
  {
    title: "Grand Image Help via Meta",
    date: "20 May, 2025",
    desc: 'Meta AI-powered "Help via Vision" feature assists users in completing image tasks.',
    image: "/updates4.png",
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
    <div className="w-full max-w-5xl mx-auto px-4 font-poppins">
      <h1 className="text-2xl font-bold mb-1">Updates & FAQ</h1>
      <p className="text-sm text-gray-500 mb-6">
        Enhancements, Resolutions & Upgrades
      </p>

      <Tab.Group>
        <Tab.List className="flex space-x-4 border-b border-gray-200 mb-4">
          {["Updates", "FAQ"].map((tab) => (
            <Tab
              key={tab}
              className={({ selected }) =>
                classNames(
                  "px-4 py-2 text-sm font-semibold  rounded-t-md cursor-pointer focus:outline-none",
                  selected
                    ? "bg-white border border-b-0 border-gray-200 text-purple-600"
                    : "text-gray-600 hover:text-purple-500"
                )
              }
            >
              {tab}
            </Tab>
          ))}
        </Tab.List>

        <Tab.Panels>
          <Tab.Panel>
            <div className="space-y-6">
              {updates.map((item, idx) => (
                <div
                  key={idx}
                  className={
                    "flex flex-col md:flex-row items-start gap-4 p-4 bg-white rounded-xl shadow " +
                    (idx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse")
                  }
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    className="w-full md:w-64 h-32 object-cover rounded-lg"
                  />

                  <div className="flex-1 flex gap-4">
                    <div className="flex flex-col items-start gap-2 w-10">
                      <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-br from-teal-100 to-blue-100 rounded-lg">
                        <FaTerminal className="text-teal-600 text-lg" />
                        {/* <LuClock />
                        <CiMap />
                        <CgMailOpen /> */}
                      </div>
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-semibold text-gray-900 text-sm">{item.title}</h3>
                       <span className="text-xs text-gray-500">{item.date}</span>
                      <p className="text-sm text-gray-600 line-clamp-3">{item.desc}</p>
                      <button className="text-purple-600 text-sm font-medium flex items-center gap-1">
                        Learn More <MdOutlineKeyboardArrowRight className="w-5 h-5" />
                        



                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Tab.Panel>
          {/* --- FAQ Panel --- */}
          <Tab.Panel>
            <div className="bg-white rounded-xl shadow p-4">
              <div className="divide-y divide-gray-200">
                {faqs.map((faq, index) => (
                  <Disclosure key={index} as="div" className="py-3">
                    {({ open }) => (
                      <>
                        <Disclosure.Button className="flex justify-between items-center w-full text-left">
                          <span className="text-sm font-medium text-gray-700">
                            {faq}
                          </span>
                          <FaChevronDown
                            className={classNames(
                              "w-4 h-4 text-gray-500 transition-transform",
                              open ? "rotate-180 text-purple-600" : ""
                            )}
                          />
                        </Disclosure.Button>
                        <Disclosure.Panel className="pt-2 text-sm text-gray-500">
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
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}
