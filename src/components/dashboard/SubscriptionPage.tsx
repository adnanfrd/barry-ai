"use client";

import PricingSection from "./PriceSection";
import CompareFeatures from "./CompareFeatures";
import FaqAccordion from "../subcomponents/Faq";

export default function SubscriptionPage() {
  return (
    <div className="px-2  min-h-screen h-screen overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none'] bg-[#faf9fa] dark:bg-[#1e1c21] rounded-xl py-5 font-poppins">
      <PricingSection />
      <CompareFeatures />
      <h2 className="text-lg px-2 font-semibold mb-6 text-gray-900 dark:text-white">
        Frequently asked questions
      </h2>
      <FaqAccordion />
    </div>
  );
}
