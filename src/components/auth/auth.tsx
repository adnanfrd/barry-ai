"use client";

import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
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
    <div className="min-h-screen flex items-center justify-center bg-black relative overflow-auto px-4 sm:px-6 md:px-8 font-poppins">
      <Image
        src="/background.png"
        alt="background"
        fill
        priority
        className="absolute inset-0 z-0 object-cover"
      />

      <div className="relative z-10 w-full max-w-md sm:max-w-lg lg:max-w-xl xl:max-w-[420px] bg-white/90 rounded-2xl p-6 sm:p-8 shadow-xl backdrop-blur-sm">
        <div className="flex justify-center items-center mb-6">
          <Image
            src="/app-icon.png"
            alt="Fusion AI Logo"
            width={40}
            height={40}
          />
          <span className="ml-2 text-xl sm:text-2xl md:text-3xl font-semibold text-gray-800">
            Fusion <span className="text-purple-500">AI</span>
          </span>
        </div>

        <TabGroup>
          <TabList className="grid grid-cols-2 gap-1 border border-gray-300 bg-gray-100 rounded-xl mb-4">
            {["Sign In", "Create Account"].map((tab) => (
              <Tab
                key={tab}
                className={({ selected }) =>
                  clsx(
                    "w-full py-2 text-xs sm:text-sm font-medium rounded-lg focus:outline-none",
                    selected
                      ? "bg-white text-gray-700 shadow border border-gray-300"
                      : "text-gray-700 hover:bg-gray-200"
                  )
                }
              >
                {tab}
              </Tab>
            ))}
          </TabList>

          <TabPanels>
            <TabPanel>
              <form className="space-y-4">
                <div className="w-full rounded-xl border border-gray-200 shadow-sm overflow-hidden bg-white font-poppins">
                  {/* Email */}
                  <div className="flex items-start gap-3 px-4 py-4">
                    <div className="p-2 bg-red-50 rounded-md">
                      <FaEnvelope className="text-[#A07AAB] w-4 h-4" />
                    </div>
                    <div className="flex flex-col w-full">
                      <label className="text-sm font-medium text-gray-800 mb-0.5">
                        Email Address
                      </label>
                      <input
                        type="email"
                        placeholder="Enter valid email address"
                        className="text-sm placeholder-gray-400 outline-none border-none focus:ring-0 p-0 w-full"
                      />
                    </div>
                  </div>

                  <div className="border-t border-gray-200" />

                  {/* Password */}
                  <div className="flex items-start justify-between px-4 py-4">
                    <div className="flex gap-3 w-full">
                      <div className="px-2 py-2 bg-red-50 rounded-md">
                        <FaKey className="text-[#A07AAB] w-4 h-4" />
                      </div>
                      <div className="flex flex-col w-full">
                        <label className="text-sm font-medium text-gray-800 mb-0.5">
                          Password
                        </label>
                        <input
                          type="password"
                          placeholder="At least 8 character length"
                          className="text-sm placeholder-gray-400 outline-none border-none focus:ring-0 p-0 w-full"
                        />
                      </div>
                    </div>
                    <button type="button" className="text-purple-500 ml-2">
                      <FaEye className="w-4 h-4 mt-1" />
                    </button>
                  </div>
                </div>

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
                    className="bg-purple-600 text-white px-8 py-2 rounded-md hover:bg-purple-700 transition w-full sm:w-auto"
                  >
                    Sign In
                  </button>
                </div>
              </form>
            </TabPanel>

            <TabPanel>
              <form className="space-y-4">
                <div className="w-full rounded-xl border border-gray-200 shadow-sm overflow-hidden bg-white font-poppins">
                  <div className="flex items-start gap-3 px-4 py-4">
                    <div className="p-2 bg-red-50 rounded-md">
                      <FaEnvelope className="text-[#A07AAB] w-4 h-4" />
                    </div>
                    <div className="flex flex-col w-full">
                      <label className="text-sm font-medium text-gray-800 mb-0.5">
                        Email Address
                      </label>
                      <input
                        type="email"
                        placeholder="Enter valid email address"
                        className="text-sm placeholder-gray-400 outline-none border-none focus:ring-0 p-0 w-full"
                      />
                    </div>
                  </div>

                  <div className="border-t border-gray-200" />

                  <div className="flex items-start justify-between px-4 py-4">
                    <div className="flex gap-3 w-full">
                      <div className="px-2 py-2 bg-red-50 rounded-md">
                        <FaKey className="text-[#A07AAB] w-4 h-4" />
                      </div>
                      <div className="flex flex-col w-full">
                        <label className="text-sm font-medium text-gray-800 mb-0.5">
                          Password
                        </label>
                        <input
                          type="password"
                          placeholder="At least 8 character length"
                          className="text-sm placeholder-gray-400 outline-none border-none focus:ring-0 p-0 w-full"
                        />
                      </div>
                    </div>
                    <button type="button" className="text-purple-500 ml-2">
                      <FaEye className="w-4 h-4 mt-1" />
                    </button>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={handleClick}
                  className="w-full bg-gradient-to-b from-purple-400 to-purple-700 text-white py-2 rounded-xl hover:from-purple-500 hover:to-purple-800 transition"
                >
                  Create Account
                </button>
                <p className="text-sm text-gray-600 px-1 text-center">
                  By creating an account, you agree to our Terms of Service and
                  Privacy & Cookie statement.
                </p>
              </form>
            </TabPanel>
          </TabPanels>
        </TabGroup>

        <div className="my-6 flex items-center justify-center">
          <div className="flex-grow h-px bg-gray-300" />
          <span className="px-4 text-gray-500 text-sm">OR</span>
          <div className="flex-grow h-px bg-gray-300" />
        </div>

        <div className="space-y-2">
          <button className="w-full flex text-gray-900 items-center justify-center border border-gray-300 rounded-md py-2 hover:bg-gray-100 transition text-sm">
            <FaApple className="mr-2" /> Continue with Apple
          </button>
          <button className="w-full flex text-gray-900 items-center justify-center border border-gray-300 rounded-md py-2 hover:bg-gray-100 transition text-sm">
            <FcGoogle className="mr-2" /> Continue with Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
