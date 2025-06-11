'use client';

import { Listbox } from '@headlessui/react';
import { FaCheckCircle } from 'react-icons/fa';
import { HiSelector } from 'react-icons/hi';
import { useState } from 'react';

const currencies = [
  { code: 'USD', label: 'US Dollar', flag: '🇺🇸' }, // United States
  { code: 'GBP', label: 'British Pound', flag: '🇬🇧' }, // United Kingdom
  { code: 'EUR', label: 'Euro', flag: '🇪🇺' }, // European Union
  { code: 'JPY', label: 'Japanese Yen', flag: '🇯🇵' }, // Japan
  { code: 'CAD', label: 'Canadian Dollar', flag: '🇨🇦' }, // Canada
];

const features = [
  'Frame line content align image stroke ellipse underline.',
  'Arrange list inspect mask export arrange ipsum.',
  'Strikethrough invite strikethrough rotate frame team.',
  'Overflow export plugin library layout blur.',
  'Distribute component community figma edit.',
];

export default function EnterpriseCheckout() {
  const [selectedCurrency, setSelectedCurrency] = useState(currencies[1]);
  const [billing, setBilling] = useState<'monthly' | 'yearly'>('monthly');

  const monthlyPrice = 399;
  const yearlyPrice = 349;
  const total = billing === 'monthly' ? monthlyPrice : yearlyPrice;

  return (
    <div className="max-w-5xl mx-auto px-4 py-10 font-poppins bg-white rounded-xl shadow">
      <div className="flex justify-between items-start flex-wrap gap-4 mb-6">
        <div>
          <h2 className="text-2xl font-bold mb-1">Cost-Effective AI Chat Services</h2>
          <p className="text-sm text-gray-500">Budget-Friendly Pricing Options</p>
        </div>

        <Listbox value={selectedCurrency} onChange={setSelectedCurrency}>
          <div className="relative">
            <Listbox.Button className="border border-gray-300 px-4 py-2 text-sm rounded-lg flex items-center gap-2 min-w-[150px]">
              Currency <span className="font-medium">{selectedCurrency.code}</span>
              <HiSelector className="ml-auto w-4 h-4 text-gray-400" />
            </Listbox.Button>
            <Listbox.Options className="absolute mt-1 w-full bg-white border border-gray-200 rounded-md shadow-lg z-10 overflow-hidden">
              {currencies.map((currency) => (
                <Listbox.Option
                  key={currency.code}
                  value={currency}
                  className={({ active }) =>
                    `cursor-pointer flex items-center px-4 py-2 text-sm ${
                      active ? 'bg-purple-100 text-purple-700' : 'text-gray-700'
                    }`
                  }
                >
                  <span className="text-lg mr-2">{currency.flag}</span>
                  {currency.code} <span className="ml-2 text-gray-500">{currency.label}</span>
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </div>
        </Listbox>
      </div>

      <div className="flex justify-between items-center flex-wrap gap-4 border-t border-b py-6 mb-6">
        <div>
          <p className="text-sm font-semibold">Plan</p>
          <div className="flex items-center gap-2">
            <span className="font-bold text-lg">Enterprise</span>
            <span className="bg-green-700 text-white px-2 py-0.5 text-xs rounded-full">Popular</span>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => setBilling('monthly')}
            className={`border rounded-lg px-4 py-2 text-sm font-medium ${
              billing === 'monthly' ? 'border-purple-600 text-purple-600' : 'text-gray-700'
            }`}
          >
            Pay monthly <br /> <span className="font-bold">£399</span>/month
          </button>
          <button
            onClick={() => setBilling('yearly')}
            className={`border rounded-lg px-4 py-2 text-sm font-medium ${
              billing === 'yearly' ? 'border-purple-600 text-purple-600' : 'text-gray-700'
            }`}
          >
            Pay yearly <br /> <span className="font-bold">£349</span>/month
            <span className="ml-2 text-green-600 text-xs font-semibold">Save 20%</span>
          </button>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <ul className="space-y-4">
          {features.map((feat, i) => (
            <li key={i} className="flex items-start gap-2 text-sm">
              <FaCheckCircle className="text-green-700 mt-1" /> {feat}
            </li>
          ))}
        </ul>

        <div className="border border-gray-200 p-4 rounded-lg space-y-4">
          <input
            placeholder="Cardholder Name"
            className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none"
          />
          <input
            placeholder="Card Number"
            className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none"
          />
          <div className="flex gap-4">
            <input
              placeholder="Expiry"
              className="flex-1 border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none"
            />
            <input
              placeholder="CVV"
              className="w-1/2 border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none"
            />
          </div>
          <p className="text-right font-semibold">Total: £{total}</p>
          <p className="text-sm text-purple-600 cursor-pointer hover:underline text-right">
            Apply promo code
          </p>
        </div>
      </div>

      <div className="mt-6 flex justify-between items-center flex-wrap gap-4">
        <p className="text-xs text-gray-500 max-w-md">
  By clicking &quot;Start Brainwave Enterprise plan&quot;, you agree to be charged £{total} every month, unless you cancel.
        </p>
        <button className="bg-purple-600 text-white text-sm font-semibold px-6 py-2 rounded-md">
          Start Enterprise Plan
        </button>
      </div>
    </div>
  );
}
