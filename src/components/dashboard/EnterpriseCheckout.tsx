"use client";

import { Listbox, ListboxButton, ListboxOption, ListboxOptions } from "@headlessui/react";
import { FaCheckCircle } from "react-icons/fa";
import { HiSelector } from "react-icons/hi";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const currencies = [
  { code: "USD", flag: "/united-states.png" },
  { code: "GBP", flag: "/united-kingdom.png" },
  { code: "EUR", flag: "/france.png" },
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
    <div className="mx-auto px-6 py-10 min-h-screen overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none'] font-poppins bg-white dark:bg-[#232127] rounded-xl shadow text-[15px] text-gray-800 dark:text-white">
      <div className="flex justify-between items-start flex-wrap gap-4 mb-6">
        <div>
          <h2 className="text-[20px] font-bold mb-1 text-black dark:text-white">
            Cost-Effective AI Chat Services
          </h2>
          <p className="text-[13px] text-gray-500 dark:text-gray-400">
            Budget-Friendly Pricing Options
          </p>
        </div>

        <Listbox value={selectedCurrency} onChange={setSelectedCurrency}>
          <div className="relative">
            <ListboxButton className="border border-gray-300 dark:border-gray-700 px-4 py-[10px] text-[13px] rounded-lg flex items-center gap-2 min-w-[150px] bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200">
              Currency{" "}
              <span className="font-medium">{selectedCurrency.code}</span>
              <HiSelector className="ml-auto w-4 h-4 text-gray-400 dark:text-gray-300" />
            </ListboxButton>
            <ListboxOptions className="absolute mt-1 w-full bg-white dark:bg-[#302e34] border border-gray-200 dark:border-gray-700 rounded-md shadow-lg z-10">
              {currencies.map((currency) => (
                <ListboxOption
                  key={currency.code}
                  value={currency}
                  className={({ active }) =>
                    `cursor-pointer flex items-center px-4 py-2 text-[13px] ${
                      active
                        ? "bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-300"
                        : "text-gray-700 dark:text-gray-300"
                    }`
                  }
                >
                  <Image
                    src={currency.flag}
                    alt={` flag`}
                    width={20}
                    height={14}
                    className="mr-2 rounded-sm"
                  />
                  {currency.code}
                </ListboxOption>
              ))}
            </ListboxOptions>
          </div>
        </Listbox>
      </div>

      <div className="flex justify-between items-center flex-wrap gap-4 border-t border-b border-gray-200 dark:border-gray-700 py-6 mb-6">
        <div>
          <p className="text-[13px] font-semibold text-gray-800 dark:text-gray-200">
            Plan
          </p>
          <div className="flex items-center gap-2">
            <span className="font-bold text-[15px] text-gray-900 dark:text-white">
              Enterprise
            </span>
            <span className="bg-green-700 text-white px-2 py-[2px] text-[11px] rounded-full">
              Popular
            </span>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => setBilling("monthly")}
            className={`border rounded-lg px-4 py-2 text-[13px] text-left leading-tight ${
              billing === "monthly"
                ? "border-purple-600 text-purple-600 dark:text-purple-400 dark:border-purple-400"
                : "text-gray-700 dark:text-gray-300 border-gray-300 dark:border-gray-600"
            }`}
          >
            Pay monthly <br />
            <span className="font-bold text-[16px]">£399</span>{" "}
            <span className="text-[13px] font-normal">/month</span>
          </button>
          <button
            onClick={() => setBilling("yearly")}
            className={`border rounded-lg px-4 py-2 text-[13px] text-left leading-tight ${
              billing === "yearly"
                ? "border-purple-600 text-purple-600 dark:text-purple-400 dark:border-purple-400"
                : "text-gray-700 dark:text-gray-300 border-gray-300 dark:border-gray-600"
            }`}
          >
            Pay yearly <br />
            <span className="font-bold text-[16px]">£349</span>{" "}
            <span className="text-[13px] font-normal">/month</span>{" "}
            <span className="ml-1 text-green-600 text-[11px] font-semibold">
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
              className="flex items-start gap-2 text-[14px] text-gray-700 dark:text-gray-300"
            >
              <FaCheckCircle className="text-green-700 mt-1" /> {feat}
            </li>
          ))}
        </ul>

        <div className="border border-gray-200 dark:border-gray-700 p-4 rounded-lg space-y-4 bg-white dark:bg-[#302e34]">
          <input
            placeholder="Enter name on card"
            className="w-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 rounded-md px-3 py-2 text-[14px] focus:outline-none"
          />
          <input
            placeholder="0000 0000 0000 0000"
            className="w-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 rounded-md px-3 py-2 text-[14px] focus:outline-none"
          />
          <div className="flex gap-4">
            <input
              placeholder="Expiry"
              className="flex-1 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 rounded-md px-3 py-2 text-[14px] focus:outline-none"
            />
            <input
              placeholder="CVV"
              className="w-1/2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 rounded-md px-3 py-2 text-[14px] focus:outline-none"
            />
          </div>
          <p className="text-right text-[15px] font-semibold text-gray-900 dark:text-white">
            Total: £{total}
          </p>
          <p className="text-sm text-purple-600 dark:text-purple-400 cursor-pointer hover:underline text-right">
            Apply promo code
          </p>
        </div>
      </div>

      <div className="mt-6 flex justify-between items-center flex-wrap gap-4">
        <p className="text-[11px] text-gray-500 dark:text-gray-400 max-w-md leading-snug">
          By clicking &quot;Start Brainwave Enterprise plan&quot;, you agree to be charged £{total} every month, unless you cancel.
        </p>
        <Link href="/dashboard/confirmation">
          <button className="bg-purple-600 hover:bg-purple-700 text-white text-[14px] font-semibold px-6 py-2 rounded-md transition-colors">
            Start Enterprise Plan
          </button>
        </Link>
      </div>
    </div>
  );
}
