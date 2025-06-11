// components/FaqAccordion.tsx
"use client";

import { Disclosure } from "@headlessui/react";
import { FaChevronDown } from "react-icons/fa";

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

export default function FaqAccordion() {
  return (
    <div className="bg-white rounded-xl shadow p-4">
      <div className="divide-y divide-gray-200">
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
                  <span className="text-[15px] font-medium text-gray-700">
                    {faq}
                  </span>
                  <FaChevronDown
                    className={classNames(
                      "w-4 h-4 text-gray-500 transition-transform",
                      open ? "rotate-180 text-purple-600" : ""
                    )}
                  />
                </Disclosure.Button>
                <Disclosure.Panel className="pt-3 text-sm text-gray-500">
                  Distribute ellipse outline main arrow underline. Device move
                  polygon pen undo selection layer thumbnail union italic.
                  Outline pixel bold opacity content scale undo editor link
                  content. Bold figma hand variant component. Star figjam hand
                  ipsum distribute select text. Prototype rectangle main outline
                  blur vertical variant link undo. Asset align list draft
                  ellipse subtract font.
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        ))}
      </div>
    </div>
  );
}
