import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { FaCheckCircle } from "react-icons/fa";
export default function PurchaseConfirmation() {
  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-white shadow-md rounded-lg p-6">
        <h1 className="text-2xl font-bold text-gray-900">Thank you for your purchase!</h1>
        <p className="text-sm text-gray-600 mt-1">We are all set, enjoy the ride</p>

        <div className="bg-green-50 border border-green-200 text-green-800 rounded-md p-4 mt-6 flex items-start">
          <FaCheckCircle className="h-5 w-5 mr-2 text-green-500" aria-hidden="true" />
          <p className="text-sm">
            Your order has been received and is currently being processed. You will receive an email confirmation with your order details shortly.
          </p>
        </div>

        <div className="mt-6">
          <h2 className="text-lg font-semibold text-gray-800">Order Affirmation</h2>
          <div className="mt-2 space-y-1">
            <p><strong>Plan:</strong> Enterprise</p>
            <p><strong>Subscription:</strong> £399/month</p>
          </div>
        </div>

        <div className="mt-6">
          <h2 className="text-lg font-semibold text-gray-800">Billing Details</h2>
          <div className="mt-2 space-y-1">
            <p><strong>Name:</strong> Pavlo Sanchez</p>
            <p><strong>Payment:</strong> Visa 0000</p>
            <p><strong>Street:</strong> 287 / 2 Boat Street</p>
            <p><strong>Building:</strong> -</p>
            <p><strong>Town:</strong> Flapping</p>
            <p><strong>Post code:</strong> NS9 7JX</p>
          </div>
        </div>

        <div className="mt-8 flex flex-col sm:flex-row justify-end gap-3">
          <button className="bg-gray-100 text-gray-700 hover:bg-gray-200 px-4 py-2 rounded-lg text-sm font-medium">
            Manage subscriptions
          </button>
          <button className="bg-purple-600 text-white hover:bg-purple-700 px-4 py-2 rounded-lg text-sm font-medium">
            New Chat
          </button>
        </div>
      </div>
    </div>
  );
}
