"use client";

import { Tab } from "@headlessui/react";
import {
  FaApple,
  FaEnvelope,
  FaRegQuestionCircle,
  FaEye,
  FaKey,
} from "react-icons/fa";
import Image from "next/image";
import clsx from "clsx";
import { useRouter } from "next/navigation";
import { FcGoogle } from "react-icons/fc";

const AuthPage = () => {
  const router = useRouter();
  const handleClick = () => {
    router.push("/dashboard");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black relative overflow-hidden px-4 font-poppins">
      {/* Background Image */}
      <Image
        src="/background.png"
        alt="background"
        fill
        priority
        className="absolute inset-0 z-0 object-cover"
      />

      {/* Auth Card */}
      <div className="relative z-10 w-full max-w-md sm:max-w-lg md:max-w-[33%] bg-white/90 rounded-2xl p-6 sm:p-8 shadow-xl backdrop-blur-sm">
        {/* Logo */}
        <div className="flex justify-center items-center mb-6">
          <Image
            src="/app-icon.png"
            alt="Fusion AI Logo"
            width={40}
            height={40}
          />
          <span className="ml-2 text-xl mb-2 sm:text-2xl font-semibold text-gray-800">
            Fusion <span className="text-purple-500">AI</span>
          </span>
        </div>

        {/* Tabs */}
        <Tab.Group>
          <Tab.List className="flex space-x-1 border border-gray-300  bg-gray-100 rounded-xl mb-4">
            {["Sign Up", "Create Account"].map((tab) => (
              <Tab
                key={tab}
                className={({ selected }) =>
                  clsx(
                    "w-full py-2 text-xs sm:text-sm font-medium rounded-lg focus:outline-none",
                    selected
                      ? "bg-white/100 text-gray-700 shadow border border-gray-300"
                      : "text-gray-700 hover:bg-gray-200"
                  )
                }
              >
                {tab}
              </Tab>
            ))}
          </Tab.List>

          <Tab.Panels>
            {/* Sign In */}
            <Tab.Panel>
              <form className="space-y-4">
                <div className="w-full max-w-md rounded-xl border border-gray-200 shadow-sm overflow-hidden bg-white font-poppins">
                  {/* Email */}
                  <div className="flex items-start gap-3 px-4 py-4">
                    <div className="p-2 bg-red-50 rounded-md">
                      <FaEnvelope className="text-[#A07AAB] w-4 h-4" />
                    </div>
                    <div className="flex flex-col">
                      <label className="text-sm font-medium text-gray-800 mb-0.5">
                        Email Address
                      </label>
                      <input
                        type="email"
                        placeholder="Enter valid email address"
                        className="text-sm placeholder-gray-400 outline-none border-none focus:ring-0 p-0"
                      />
                    </div>
                  </div>

                  <div className="border-t border-gray-200" />

                  {/* Password */}
                  <div className="flex items-start justify-between px-4 py-4">
                    <div className="flex gap-3">
                      <div className="px-2 py-2 bg-red-50 rounded-md">
                        <FaKey className="text-[#A07AAB] w-4 h-4" />
                      </div>
                      <div className="flex flex-col">
                        <label className="text-sm font-medium text-gray-800 mb-0.5">
                          Password
                        </label>
                        <input
                          type="password"
                          placeholder="At least 8 character length"
                          className="text-sm placeholder-gray-400 outline-none border-none focus:ring-0 p-0"
                        />
                      </div>
                    </div>
                    <button className="text-purple-500">
                      <FaEye className="w-4 h-4 mt-1" />
                    </button>
                  </div>
                </div>

                {/* Forgot password + Sign In inline */}
                <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-5 items-center mt-2">
                  <button
                    type="button"
                    className="flex items-center text-sm text-purple-600 hover:underline"
                  >
                    <FaRegQuestionCircle className="mr-1 text-purple-600" />
                    Forgot password?
                  </button>

                  <button
                    type="submit"
                    className="bg-purple-600 text-white px-16 py-2 rounded-md hover:bg-purple-700 transition w-full sm:w-auto"
                  >
                    Sign In
                  </button>
                </div>
              </form>
            </Tab.Panel>

            {/* Sign Up */}
            <Tab.Panel>
              <form className="space-y-4">
               <div className="w-full max-w-md rounded-xl border border-gray-200 shadow-sm overflow-hidden bg-white font-poppins">
                  {/* Email */}
                  <div className="flex items-start gap-3 px-4 py-4">
                    <div className="p-2 bg-red-50 rounded-md">
                      <FaEnvelope className="text-[#A07AAB] w-4 h-4" />
                    </div>
                    <div className="flex flex-col">
                      <label className="text-sm font-medium text-gray-800 mb-0.5">
                        Email Address
                      </label>
                      <input
                        type="email"
                        placeholder="Enter valid email address"
                        className="text-sm placeholder-gray-400 outline-none border-none focus:ring-0 p-0"
                      />
                    </div>
                  </div>

                  <div className="border-t border-gray-200" />

                  {/* Password */}
                  <div className="flex items-start justify-between px-4 py-4">
                    <div className="flex gap-3">
                      <div className="px-2 py-2 bg-red-50 rounded-md">
                        <FaKey className="text-[#A07AAB] w-4 h-4" />
                      </div>
                      <div className="flex flex-col">
                        <label className="text-sm font-medium text-gray-800 mb-0.5">
                          Password
                        </label>
                        <input
                          type="password"
                          placeholder="At least 8 character length"
                          className="text-sm placeholder-gray-400 outline-none border-none focus:ring-0 p-0"
                        />
                      </div>
                    </div>
                    <button className="text-purple-500">
                      <FaEye className="w-4 h-4 mt-1" />
                    </button>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={handleClick}
                  className="w-full bg-gradient-to-b from-purple-400 to-purple-700 text-white py-2 rounded-xl hover:bg-purple-300 transition"
                >
                  Create Account
                </button>
                <p className="text-sm text-gray-600 px-1">
                  By creating an account, you agree to our Terms of Service and
                  Privacy & Cookie statement.
                </p>
              </form>
            </Tab.Panel>
          </Tab.Panels>
        </Tab.Group>

        {/* OR Divider */}
        <div className="my-6 flex items-center justify-center">
          <div className="flex-grow h-px bg-gray-300" />
          <span className="px-4 text-gray-500 text-sm">OR</span>
          <div className="flex-grow h-px bg-gray-300" />
        </div>

        {/* Social Logins */}
        <div className="space-y-2">
          <button className="w-full flex text-gray-900 items-center justify-center border border-gray-300 rounded-md py-2 hover:bg-gray-100 transition text-sm">
            <FaApple className="mr-2" /> Continue with Apple
          </button>
          <button className="w-full flex text-gray-900 items-center justify-center border border-gray-300 rounded-md py-2 hover:bg-gray-100 transition text-sm">
            <FcGoogle className="mr-2 text-red-500" /> Continue with Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
