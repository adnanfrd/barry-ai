"use client";

import { Listbox } from "@headlessui/react";
import { FaCheckCircle } from "react-icons/fa";
import { HiSelector } from "react-icons/hi";
import { useState } from "react";
import Link from "next/link";

const currencies = [
  { code: "USD", label: "US Dollar", flag: "🇺🇸" },
  { code: "GBP", label: "British Pound", flag: "🇬🇧" },
  { code: "EUR", label: "Euro", flag: "🇪🇺" },
  { code: "JPY", label: "Japanese Yen", flag: "🇯🇵" },
  { code: "CAD", label: "Canadian Dollar", flag: "🇨🇦" },
];

const features = [
  "Frame line content align image stroke ellipse underline.",
  "Arrange list inspect mask export arrange ipsum.",
  "Strikethrough invite strikethrough rotate frame team.",
  "Overflow export plugin library layout blur.",
  "Distribute component community figma edit.",
];

export default function EnterpriseCheckout() {
  const [selectedCurrency, setSelectedCurrency] = useState(currencies[1]);
  const [billing, setBilling] = useState<"monthly" | "yearly">("monthly");

  const monthlyPrice = 399;
  const yearlyPrice = 349;
  const total = billing === "monthly" ? monthlyPrice : yearlyPrice;

  return (
    <div className="max-w-5xl mx-auto px-4 py-10 font-poppins bg-white dark:bg-[#232127] rounded-xl shadow">
      <div className="flex justify-between items-start flex-wrap gap-4 mb-6">
        <div>
          <h2 className="text-2xl font-bold mb-1 text-gray-800 dark:text-white">
            Cost-Effective AI Chat Services
          </h2>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Budget-Friendly Pricing Options
          </p>
        </div>

        <Listbox value={selectedCurrency} onChange={setSelectedCurrency}>
          <div className="relative">
            <Listbox.Button className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-sm rounded-lg flex items-center gap-2 min-w-[150px] bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200">
              Currency{" "}
              <span className="font-medium">{selectedCurrency.code}</span>
              <HiSelector className="ml-auto w-4 h-4 text-gray-400 dark:text-gray-300" />
            </Listbox.Button>
            <Listbox.Options className="absolute mt-1 w-full bg-white dark:bg-[#302e34] border border-gray-200 dark:border-gray-700 rounded-md shadow-lg z-10 overflow-hidden">
              {currencies.map((currency) => (
                <Listbox.Option
                  key={currency.code}
                  value={currency}
                  className={({ active }) =>
                    `cursor-pointer flex items-center px-4 py-2 text-sm ${
                      active
                        ? "bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-300"
                        : "text-gray-700 dark:text-gray-300"
                    }`
                  }
                >
                  <span className="text-lg mr-2">{currency.flag}</span>
                  {currency.code}{" "}
                  <span className="ml-2 text-gray-500 dark:text-gray-400">
                    {currency.label}
                  </span>
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </div>
        </Listbox>
      </div>

      <div className="flex justify-between items-center flex-wrap gap-4 border-t border-b border-gray-200 dark:border-gray-700 py-6 mb-6">
        <div>
          <p className="text-sm font-semibold text-gray-800 dark:text-gray-200">
            Plan
          </p>
          <div className="flex items-center gap-2">
            <span className="font-bold text-lg text-gray-900 dark:text-white">
              Enterprise
            </span>
            <span className="bg-green-700 text-white px-2 py-0.5 text-xs rounded-full">
              Popular
            </span>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => setBilling("monthly")}
            className={`border rounded-lg px-4 py-2 text-sm font-medium ${
              billing === "monthly"
                ? "border-purple-600 text-purple-600 dark:text-purple-400 dark:border-purple-400"
                : "text-gray-700 dark:text-gray-300 border-gray-300 dark:border-gray-600"
            }`}
          >
            Pay monthly <br /> <span className="font-bold">£399</span>/month
          </button>
          <button
            onClick={() => setBilling("yearly")}
            className={`border rounded-lg px-4 py-2 text-sm font-medium ${
              billing === "yearly"
                ? "border-purple-600 text-purple-600 dark:text-purple-400 dark:border-purple-400"
                : "text-gray-700 dark:text-gray-300 border-gray-300 dark:border-gray-600"
            }`}
          >
            Pay yearly <br /> <span className="font-bold">£349</span>/month
            <span className="ml-2 text-green-600 text-xs font-semibold">
              Save 20%
            </span>
          </button>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <ul className="space-y-4">
          {features.map((feat, i) => (
            <li
              key={i}
              className="flex items-start gap-2 text-sm text-gray-700 dark:text-gray-300"
            >
              <FaCheckCircle className="text-green-700 mt-1" /> {feat}
            </li>
          ))}
        </ul>

        <div className="border border-gray-200 dark:border-gray-700 p-4 rounded-lg space-y-4 bg-white dark:bg-[#302e34]">
          <input
            placeholder="Enter name on card"
            className="w-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 rounded-md px-3 py-2 text-sm focus:outline-none"
          />
          <input
            placeholder="0000 0000 0000 0000"
            className="w-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 rounded-md px-3 py-2 text-sm focus:outline-none"
          />
          <div className="flex gap-4">
            <input
              placeholder="Expiry"
              className="flex-1 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 rounded-md px-3 py-2 text-sm focus:outline-none"
            />
            <input
              placeholder="12/26"
              className="w-1/2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 rounded-md px-3 py-2 text-sm focus:outline-none"
            />
          </div>
          <p className="text-right font-semibold text-gray-900 dark:text-white">
            Total: £{total}
          </p>
          <p className="text-sm text-purple-600 dark:text-purple-400 cursor-pointer hover:underline text-right">
            Apply promo code
          </p>
        </div>
      </div>

      <div className="mt-6 flex justify-between items-center flex-wrap gap-4">
        <p className="text-xs text-gray-500 dark:text-gray-400 max-w-md">
          By clicking &quot;Start Brainwave Enterprise plan&quot;, you agree to
          be charged £{total} every month, unless you cancel.
        </p>
        <Link href="/dashboard/confirmation" className="cursor-pointer">
          <button className="bg-purple-600 hover:bg-purple-700 text-white text-sm font-semibold px-6 py-2 rounded-md transition-colors">
            Start Enterprise Plan
          </button>
        </Link>
      </div>
    </div>
  );
}
