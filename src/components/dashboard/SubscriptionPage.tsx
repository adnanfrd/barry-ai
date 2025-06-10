// --- app/subscriptions/page.tsx ---
'use client';

import { FaCheck, FaTimes } from 'react-icons/fa';
import { Disclosure } from '@headlessui/react';
import { FaChevronDown } from 'react-icons/fa';
import { useRouter } from 'next/navigation';

const features = [
  'AI Feature Personalization',
  'Custom Integration API',
  'Priority Queueing',
  'Data Export Options',
  'Extended Message History',
  'Enterprise Security Compliance',
];

const plans = [
  {
    name: 'Free',
    price: '$0',
    tag: 'Basic AI Chat Services',
    monthly: true,
    features: [true, false, false, false, false, false],
  },
  {
    name: 'Pro',
    price: '$89',
    tag: 'Scale AI Chat Workflows',
    monthly: true,
    features: [true, true, true, true, false, false],
  },
  {
    name: 'Enterprise',
    price: '$399',
    tag: 'Enterprise-Level Security',
    monthly: true,
    featured: true,
    features: [true, true, true, true, true, true],
  },
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
  const router = useRouter();

  const handleClick = () =>{
router.push('/dashboard/checkout')
}

  return (
    <div className="max-w-6xl mx-auto px-4 py-10 font-poppins">
      <h2 className="text-2xl font-bold mb-1">Cost-Effective AI Chat Services</h2>
      <p className="text-sm text-gray-500 mb-6">Budget-friendly Package Options</p>

      <div className="mb-8">
        <div className="flex space-x-6 mb-6">
          <label className="flex items-center gap-2 text-sm">
            <input type="radio" name="billing" defaultChecked />
            <span>Annual billing</span>
          </label>
          <label className="flex items-center gap-2 text-sm">
            <input type="radio" name="billing" />
            <span>Monthly billing</span>
          </label>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`p-6 rounded-xl shadow-sm border ${
                plan.featured ? 'bg-purple-600 text-white' : 'bg-white text-gray-800'
              }`}
            >
              <h3 className="text-lg font-semibold mb-1">{plan.name}</h3>
              <p className="text-sm mb-3">{plan.tag}</p>
              <p className="text-2xl font-bold mb-2">{plan.price}/mo</p>
              <ul className="text-sm space-y-1 mb-4">
                {features.map((feat, i) => (
                  <li key={i} className="flex items-center gap-2">
                    {plan.features[i] ? (
                      <FaCheck className="text-green-500" />
                    ) : (
                      <FaTimes className="text-red-400" />
                    )}
                    {feat}
                  </li>
                ))}
              </ul>
              {plan.featured && (
                <button onClick={handleClick} className="bg-white cursor-pointer text-purple-600 px-4 py-2 rounded-md font-semibold text-sm">
                  Upgrade
                </button>
              )}
            </div>
          ))}
        </div>
      </div>

      <h3 className="text-lg font-semibold mb-3">Compare Features</h3>
      <div className="overflow-auto mb-10">
        <table className="min-w-full bg-white text-sm text-left border border-gray-200 rounded-xl">
          <thead className="bg-gray-50">
            <tr>
              <th className="p-3 border">Feature</th>
              {plans.map((plan) => (
                <th key={plan.name} className="p-3 border">
                  {plan.name}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {features.map((feature, idx) => (
              <tr key={idx} className="border-t">
                <td className="p-3 border font-medium text-gray-700">{feature}</td>
                {plans.map((plan) => (
                  <td key={plan.name} className="p-3 border text-center">
                    {plan.features[idx] ? (
                      <FaCheck className="text-green-500 mx-auto" />
                    ) : (
                      <FaTimes className="text-red-400 mx-auto" />
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

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
