"use client";

import { useRouter } from "next/navigation";
import { FaCheck } from "react-icons/fa";

const plans = [
  {
    name: "Free",
    tag: "Basic chat functionality",
    price: "$0",
    note: "Free forever",
    features: [
      "AI-Driven Personalization",
      "Facial Recognition",
      "AI-Powered Virtual Assistants",
    ],
    current: true,
    featured: false,
  },
  {
    name: "Pro",
    tag: "Basic chat functionality",
    price: "$89",
    note: "Per month, per team members",
    features: [
      "AI-Powered Virtual Assistants",
      "Gmail Help Me Write",
      "Smart History Feature",
    ],
    current: false,
    featured: false,
  },
  {
    name: "Enterprise",
    tag: "Basic chat functionality",
    price: "$399",
    note: "Per month, per team members",
    features: [
      "AI-Powered Virtual Assistants",
      "AI-Driven Personalization",
      "Deep Learning",
    ],
    current: false,
    featured: true,
  },
];

export default function PricingSection() {
  const router = useRouter();

  const handleClick = () => {
    router.push("/dashboard/checkout");
  };

  return (
    <section className="max-w-7xl mx-auto px-6 py-2 font-poppins">
      <h2 className="text-2xl font-bold mb-1 text-gray-900 dark:text-white">
        Cost-Effective AI Chat Services
      </h2>
      <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
        Budget-Friendly Pricing Options
      </p>

      <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-10 mb-8">
        {/* Left Side: Billing Toggle */}
        <div className="mb-6 md:mb-0">
          <h3 className="font-semibold text-sm mb-4 text-gray-900 dark:text-white">
            Choose Plan
          </h3>
          <div className="space-y-3">
            <label className="flex items-center gap-2 text-sm text-gray-800 dark:text-gray-300">
              <input
                type="radio"
                name="billing"
                defaultChecked
                className="accent-purple-600"
              />
              <span>Yearly billing</span>
            </label>
            <label className="flex items-center gap-2 text-sm text-gray-800 dark:text-gray-300">
              <input
                type="radio"
                name="billing"
                className="accent-purple-600"
              />
              <span>Monthly billing</span>
            </label>
          </div>
        </div>

        {/* Right Side: Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 w-full">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative p-5 rounded-2xl border ${
                plan.featured
                  ? "bg-purple-600 text-white scale-110 border-purple-600"
                  : "bg-[#f1f0f3] dark:bg-[#2c292f] text-gray-800 dark:text-white border-gray-300 dark:border-gray-600"
              }`}
            >
              {/* Badge */}
              {plan.featured && (
                <span className="absolute top-4 right-4 bg-white text-purple-600 text-xs font-semibold px-2 py-0.5 rounded-full">
                  Popular
                </span>
              )}

              <h3 className="text-lg font-semibold mb-1">{plan.name}</h3>
              <p className="text-sm mb-3">{plan.tag}</p>
              <p className="text-3xl font-bold mb-1">
                {plan.price} <span className="text-base font-normal">/mo</span>
              </p>
              <p className="text-xs mb-4">{plan.note}</p>

              {/* Features */}
              <ul className="text-sm space-y-3 mb-6">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <FaCheck
                      className={`${
                        plan.featured ? "text-white" : "text-purple-600"
                      } text-xs`}
                    />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Button */}
              {plan.current ? (
                <button className="bg-gray-200 dark:bg-gray-600 text-gray-500 px-4 py-2 rounded-md text-sm font-medium w-full cursor-default">
                  Current plan
                </button>
              ) : (
                <button
                  onClick={handleClick}
                  className={`px-4 py-2 rounded-md cursor-pointer text-sm font-semibold w-full ${
                    plan.featured
                      ? "bg-white text-purple-600"
                      : "bg-white dark:bg-gray-100 text-purple-600"
                  }`}
                >
                  Upgrade
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
