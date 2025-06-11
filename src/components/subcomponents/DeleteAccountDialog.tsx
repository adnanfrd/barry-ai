"use client";

import { useState } from "react";
import { Dialog, DialogPanel, DialogTitle, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { FaExclamationCircle, FaKey } from "react-icons/fa";

export default function DeleteAccountDialog() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="flex items-center gap-2 text-sm text-red-500 hover:text-red-600"
      >
        <span className="mr-2">X</span> Delete Account
      </button>

      <Transition show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-50" onClose={() => setIsOpen(false)}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 -translate-y-8"
            enterTo="opacity-100 translate-y-0"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 -translate-y-8"
          >
            <div className="fixed inset-0 flex items-start justify-center mt-24 p-4">
              <DialogPanel className="w-full max-w-lg rounded-xl bg-white p-6 shadow-xl border border-gray-200">
                <div className="flex items-start gap-3">
                  <div className="mt-1 text-red-500">
                    <FaExclamationCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <DialogTitle className="text-lg font-semibold text-gray-900">
                      We’re sorry to see you go
                    </DialogTitle>
                    <p className="mt-1 text-sm text-gray-600">
                      Warning: Deleting your account will permanently remove all of your data and cannot be undone. This includes your profile, chats, comments, and any other information associated with your account. Are you sure you want to proceed with deleting your account?
                    </p>
                  </div>
                </div>

                <div className="mt-4">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Your password <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <FaKey className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input
                      type="password"
                      placeholder="Placeholder"
                      className="w-full pl-10 pr-4 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                  </div>
                </div>

                <div className="mt-6 flex justify-end gap-3">
                  <button
                    onClick={() => setIsOpen(false)}
                    className="px-4 py-2 text-sm border border-gray-300 rounded-md hover:bg-gray-100"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={() => {
                      setIsOpen(false);
                      // Add delete logic here
                    }}
                    className="px-4 py-2 text-sm bg-red-600 text-white rounded-md hover:bg-red-700"
                  >
                    Delete Account
                  </button>
                </div>
              </DialogPanel>
            </div>
          </Transition.Child>

          <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
        </Dialog>
      </Transition>
    </>
  );
}
