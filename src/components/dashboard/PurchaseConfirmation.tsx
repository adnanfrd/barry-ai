"use client";

import { FaCheckCircle } from "react-icons/fa";

export default function PurchaseConfirmation() {
  return (
    <div className="min-h-screen rounded-xl bg-white py-10 px-4 sm:px-6 lg:px-8 font-poppins">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-2xl font-bold text-black">Thank you for your purchase!</h1>
        <p className="text-sm text-gray-500">We are all set, enjoy the ride</p>

        <div className="bg-[#E6F6F0] border border-[#C8F4DE] text-[#057A55] rounded-md p-4 mt-6 flex items-start">
          <FaCheckCircle className="h-5 w-5 mr-2 mt-0.5 text-[#057A55]" />
          <p className="text-sm">
            Your order has been received and is currently being processed. You will receive an email confirmation with your order details shortly.
          </p>
        </div>

        {/* Order Affirmation */}
        <div className="mt-8 border-t border-gray-200">
          <h2 className="text-sm font-semibold text-black mt-6 mb-2">Order Affirmation</h2>
          <div className="border border-gray-200 rounded-md overflow-hidden text-sm">
            <div className="flex justify-between px-4 py-3 border-b border-gray-200">
              <span>Plan</span>
              <span className="font-semibold">Enterprise</span>
            </div>
            <div className="flex justify-between px-4 py-3">
              <span>Subscription</span>
              <span className="font-semibold">£399/month</span>
            </div>
          </div>
        </div>

        {/* Billing Details */}
        <div className="mt-8 border-t border-gray-200">
          <h2 className="text-sm font-semibold text-black mt-6 mb-2">Billing Details</h2>
          <div className="border border-gray-200 rounded-md overflow-hidden text-sm">
            {[
              ["Name", "Pavlo Sanchez"],
              ["Payment", "Visa 0000"],
              ["Street", "287 / 2 Boat Street"],
              ["Building", "-"],
              ["Town", "Flapping"],
              ["Post code", "NS9 7JX"],
            ].map(([label, value], index, arr) => (
              <div
                key={label}
                className={`flex justify-between px-4 py-3 ${
                  index !== arr.length - 1 ? "border-b border-gray-200" : ""
                }`}
              >
                <span>{label}</span>
                <span className="text-black">{value}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row justify-end gap-3">
          <button className="border border-gray-300 text-gray-700 px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-100">
            Manage subscriptions
          </button>
          <button className="bg-purple-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-purple-700">
            New Chat
          </button>
        </div>
      </div>
    </div>
  );
}
