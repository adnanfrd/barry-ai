// --- app/subscriptions/page.tsx ---
'use client';

import { FaCheck, FaTimes } from 'react-icons/fa';
import { Disclosure } from '@headlessui/react';
import { FaChevronDown } from 'react-icons/fa';
import { useRouter } from 'next/navigation';
import PricingSection from './PriceSection';
import CompareFeatures from './CompareFeatures';

const features = [
  "AI-Driven Personalization",
  "Facial Recognition",
  "AI-Powered Virtual Assistants",
  "Smart History Feature",
  "Google Immersive View with Maps",
  "Gmail Help Me Write",
  "Live Translation & Interpreter",
  "Deep Learning, Facial Recognition",
];

const plans = [
  [true, false, true, false], // AI-Driven Personalization
  [true, false, true, true],  // Facial Recognition
  [false, true, true, true],  // AI-Powered Virtual Assistants
  [false, false, false, true], // Smart History Feature
  [false, false, true, true],  // Google Immersive View
  [false, true, false, true],  // Gmail Help Me Write
  [false, false, false, true], // Live Translation
  [false, false, false, true], // Deep Learning
];

const faqs = [
  'Font resizing variant shadow content resizing distribute.',
  'Effect frame bullet blur plugin image select.',
  'Plugin scale undo pencil opacity duplicate.',
  'Frame offset content style ellipse panel title duplicate line.',
  'Figjam clip boolean connection line flows scrolling undo figma slice.',
  'Distribute object component thumbnail device layout frame vertical.',
];

export default function SubscriptionPage() {
 

  return (
    <div className="max-w-7xl mx-auto px-2 bg-[#faf9fa] rounded-xl py-5 font-poppins">
      <PricingSection/>
<CompareFeatures/>
      <h3 className="text-lg font-semibold mb-4">Frequently asked questions</h3>
      <div className="bg-white rounded-xl shadow p-4">
        <div className="divide-y divide-gray-200">
          {faqs.map((faq, index) => (
            <Disclosure key={index} as="div" className="py-3">
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex justify-between items-center w-full text-left">
                    <span className="text-sm font-medium text-gray-700">{faq}</span>
                    <FaChevronDown
                      className={`w-4 h-4 text-gray-500 transition-transform ${open ? 'rotate-180 text-purple-600' : ''}`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="pt-2 text-sm text-gray-500">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum.
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          ))}
        </div>
      </div>
    </div>
  );
}
