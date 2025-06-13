"use client";

import {
  FiCalendar,
  FiClock,
  FiCopy,
  FiDownloadCloud,
  FiEdit3,
  FiSettings,
  FiThumbsDown,
  FiThumbsUp,
} from "react-icons/fi";
import { LuCopy } from "react-icons/lu";
import { FaFacebookF, FaRedditAlien } from "react-icons/fa";
import Image from "next/image";
import Header from "./Header";
import PromptInput from "../subcomponents/PromptInput";

export default function WelcomePage() {
  return (
    <div className="h-screen rounded-xl flex flex-col bg-white dark:bg-[#232127] text-sm">
      <div className="flex-none">
        <Header />
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-4 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']">
        <div className="flex justify-end">
          <div className="max-w-[90%] md:max-w-[75%] flex gap-5 mb-4 rounded-2xl border border-gray-300 dark:border-[#6a5e8f] overflow-hidden">
            <div className="flex-1 bg-white dark:bg-transparent px-4 py-3">
              <p className="text-sm font-normal text-gray-800 dark:text-gray-200 mb-2">
                Layer main distribute undo edit resizing export vertical. Export
                vertical move star plugin group scrolling figjam invite invite.
              </p>
            </div>
            <div className="w-14 bg-[#F4F1FF] dark:bg-[#27212F] flex flex-col justify-center items-center py-2 px-1">
              <Image
                src="/photo.png"
                alt="avatar"
                width={30}
                height={30}
                className="rounded-full object-cover"
              />
              <span className="text-[10px] text-gray-500 dark:text-gray-300 mt-1">
                12:22
              </span>
            </div>
          </div>
        </div>
     
 <div className="mt-3 mb-6 w-[80%] flex items-center justify-between bg-gray-100 dark:bg-[#302d35] rounded-2xl px-4 py-2">
         <div className="w-10 h-10 rounded-full bg-[#524E63] flex items-center justify-center">
           <Image
             src="/Vector.png"
             alt="icon"
             width={40}
             height={40}
             className="w-5 h-5 text-[#4B4B4B] dark:text-gray-300"
           />
         </div>
         <div className="flex items-center gap-2 ml-4">
           <span className="w-2 h-2 rounded-sm bg-gray-400 dark:bg-gray-500 animate-dot-1 dark:animate-dot-1-dark" />
           <span className="w-2 h-2 rounded-sm bg-gray-400 dark:bg-gray-500 animate-dot-2 dark:animate-dot-2-dark" />
           <span className="w-2 h-2 rounded-sm bg-gray-400 dark:bg-gray-500 animate-dot-3 dark:animate-dot-3-dark" />
         </div>
         <div className="ml-auto text-xs text-gray-600 dark:text-gray-300">
           00
         </div>
       </div>
       <div className="flex bg-[#F9F8FC] dark:bg-[#18181B] gap-4 p-6 rounded-2xl">
         <div className="w-14 flex flex-col items-center bg-[#edebf1] dark:bg-[#2b2a33] rounded-2xl py-4 gap-6">
           <div className="bg-[#524E63] text-#4B4B4B dark:bg-[#3c384a] p-2 rounded-xl">
             <Image
               src="/Vector.png"
               alt="icon"
               width={40}
               height={40}
               className="w-5 h-5 text-[#4B4B4B] dark:text-gray-300"
             />
           </div>
           <div className="text-[10px] text-gray-400 dark:text-gray-300 font-medium">
             12:22
           </div>
           <hr className="text-gray-700 dark:text-gray-600" />
           <div className="flex flex-col items-center p-4 gap-6 text-gray-500 dark:text-gray-400 mt-2">
             <LuCopy className="w-5 h-5 hover:text-black dark:hover:text-white cursor-pointer" />
             <FiDownloadCloud className="w-5 h-5 hover:text-black dark:hover:text-white cursor-pointer" />
             <FiThumbsUp className="w-5 h-5 hover:text-black dark:hover:text-white cursor-pointer" />
             <FiThumbsDown className="w-5 h-5 hover:text-black dark:hover:text-white cursor-pointer" />
           </div>
         </div>
         <div className="flex flex-col space-y-2">
           <p className="text-sm text-gray-800 dark:text-gray-100">
             Figjam vertical share background export outline edit list. Asset
             strikethrough layout.
           </p>
           <div className="bg-white dark:bg-[#1c1c1f] rounded-2xl border border-gray-200 dark:border-gray-700 p-5 space-y-3">
             <div className="flex flex-col gap-2">
               <div className="w-8 h-8 bg-[#FF4500] rounded-full flex items-center justify-center text-white">
                 <FaRedditAlien size={16} />
               </div>
               <p className="text-sm text-gray-900 dark:text-gray-200">
                 Prototype opacity effect opacity Figjam undo ipsum auto. Draft
                 Figjam figjam slice share. Strikethrough ellipse device auto
                 pan. Clip select export ellipse bullet edit text underline
                 scrolling.
               </p>
             </div>
             <div className="border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden">
               <div className="p-3 border-b border-gray-200 dark:border-gray-700">
                 <p className="text-sm font-medium text-gray-800 dark:text-gray-100">
                   Suggested Media
                 </p>
                 <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                   Make sure you have the rights to use the suggested media.
                 </p>
               </div>
               <div className="flex p-3 gap-3">
                 <div className="relative w-32 h-20 rounded-lg overflow-hidden border border-gray-200 dark:border-gray-600">
                   <Image
                     src="/code.jpg"
                     alt="Suggested"
                     fill
                     className="object-cover"
                   />
                   <button className="absolute top-1 right-1 w-5 h-5 text-white bg-black/50 rounded-full text-xs">
                     X
                   </button>
                 </div>
                 <div className="w-32 h-20 rounded-lg bg-gray-100 dark:bg-gray-700 flex flex-col items-center justify-center text-xs text-gray-700 dark:text-gray-300 border border-dashed border-gray-400 dark:border-gray-600">
                   <FiDownloadCloud className="w-5 h-5 mb-1" />
                   Upload Media
                 </div>
               </div>
             </div>
             <div className="flex gap-2 pt-2">
               <button className="px-3 py-1 text-xs font-medium bg-gray-100 dark:bg-[#2a2a2f] text-gray-900 dark:text-gray-100 rounded-md hover:bg-gray-200 dark:hover:bg-[#3a3a3f]">
                 Share Now
               </button>
               <button className="px-3 py-1 text-xs font-medium flex items-center gap-1 bg-gray-100 dark:bg-[#2a2a2f] text-gray-900 dark:text-gray-100 rounded-md hover:bg-gray-200 dark:hover:bg-[#3a3a3f]">
                 <FiEdit3 className="w-4 h-4" />
                 Create variation
               </button>
               <button className="px-3 py-1 text-xs font-medium flex items-center gap-1 bg-gray-100 dark:bg-[#2a2a2f] text-gray-900 dark:text-gray-100 rounded-md hover:bg-gray-200 dark:hover:bg-[#3a3a3f]">
                 <FiSettings className="w-4 h-4" />
                 Adjust
               </button>
               <button className="px-3 py-1 text-xs font-medium flex items-center gap-1 bg-gray-100 dark:bg-[#2a2a2f] text-gray-900 dark:text-gray-100 rounded-md hover:bg-gray-200 dark:hover:bg-[#3a3a3f]">
                 <FiCopy className="w-4 h-4" />
                 Copy
               </button>
             </div>
           </div>
           <div className="bg-white dark:bg-[#1c1c1f] rounded-2xl border border-gray-200 dark:border-gray-700 p-5 space-y-3">
             <div className="flex flex-col gap-2">
               <div className="w-8 h-8 bg-[#1877F2] rounded-full flex items-center justify-center text-white">
                 <FaFacebookF size={16} />
               </div>
               <p className="text-sm text-gray-900 dark:text-gray-200">
                 Prototype opacity effect opacity Figjam undo ipsum auto. Draft
                 Figjam figjam slice share. Strikethrough ellipse device auto
                 pan. Clip select export ellipse bullet edit text underline
                 scrolling.
               </p>
             </div>
             <div className="border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden">
               <div className="p-3 border-b border-gray-200 dark:border-gray-700">
                 <p className="text-sm font-medium text-gray-800 dark:text-gray-100">
                   Suggested Media
                 </p>
                 <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                   Make sure you have the rights to use the suggested media.
                 </p>
               </div>
               <div className="flex p-3 gap-3">
                 <div className="relative w-32 h-20 rounded-lg overflow-hidden border border-gray-200 dark:border-gray-600">
                   <Image
                     src="/code.jpg"
                     alt="Suggested"
                     fill
                     className="object-cover"
                   />
                   <button className="absolute top-1 right-1 w-5 h-5 text-white bg-black/50 rounded-full text-xs">
                     X
                   </button>
                 </div>
                 <div className="w-32 h-20 rounded-lg bg-gray-100 dark:bg-gray-700 flex flex-col items-center justify-center text-xs text-gray-700 dark:text-gray-300 border border-dashed border-gray-400 dark:border-gray-600">
                   <FiDownloadCloud className="w-5 h-5 mb-1" />
                   Upload Media
                 </div>
               </div>
             </div>
             <div className="flex gap-2 pt-2">
               <button className="px-3 py-1 text-xs font-medium bg-gray-100 dark:bg-[#2a2a2f] text-gray-900 dark:text-gray-100 rounded-md hover:bg-gray-200 dark:hover:bg-[#3a3a3f]">
                 Share Now
               </button>
               <button className="px-3 py-1 text-xs font-medium flex items-center gap-1 bg-gray-100 dark:bg-[#2a2a2f] text-gray-900 dark:text-gray-100 rounded-md hover:bg-gray-200 dark:hover:bg-[#3a3a3f]">
                 <FiEdit3 className="w-4 h-4" />
                 Create variation
               </button>
               <button className="px-3 py-1 text-xs font-medium flex items-center gap-1 bg-gray-100 dark:bg-[#2a2a2f] text-gray-900 dark:text-gray-100 rounded-md hover:bg-gray-200 dark:hover:bg-[#3a3a3f]">
                 <FiSettings className="w-4 h-4" />
                 Adjust
               </button>
               <button className="px-3 py-1 text-xs font-medium flex items-center gap-1 bg-gray-100 dark:bg-[#2a2a2f] text-gray-900 dark:text-gray-100 rounded-md hover:bg-gray-200 dark:hover:bg-[#3a3a3f]">
                 <FiCopy className="w-4 h-4" />
                 Copy
               </button>
             </div>
           </div>
         </div>
       </div>
       <div className="flex justify-end py-4">
         <div className="max-w-[90%] md:max-w-[75%] flex gap-5 mb-4 rounded-2xl border border-gray-300 dark:border-[#6a5e8f] overflow-hidden">
           <div className="flex-1 bg-white dark:bg-transparent px-4 py-3">
             <p className="text-sm font-normal text-gray-800 dark:text-gray-200 mb-2">
               Layer main distribute undo edit resizing export vertical. Export
               vertical move star plugin group scrolling figjam invite invite.
             </p>
           </div>
           <div className="w-14 bg-[#F4F1FF] dark:bg-[#27212F] flex flex-col justify-center items-center py-2 px-1">
             <Image
               src="/photo.png"
               alt="avatar"
               width={30}
               height={30}
               className="rounded-full object-cover"
             />
             <span className="text-[10px] text-gray-500 dark:text-gray-300 mt-1">
               12:22
             </span>
           </div>
         </div>
       </div>
       <div className="flex bg-[#F9F8FC] dark:bg-[#18181B] gap-4 p-6 rounded-2xl">
         <div className="w-14 flex flex-col items-center bg-[#edebf1] dark:bg-[#2b2a33] rounded-2xl py-4 gap-6">
           <div className="bg-[#524E63] text-#4B4B4B dark:bg-[#3c384a] p-2 rounded-xl">
             <Image
               src="/Vector.png"
               alt="icon"
               width={40}
               height={40}
               className="w-5 h-5 text-[#4B4B4B] dark:text-gray-300"
             />
           </div>
           <div className="text-[10px] text-gray-400 dark:text-gray-300 font-medium">
             12:22
           </div>
           <hr className="text-gray-700 dark:text-gray-600" />
           <div className="flex flex-col items-center p-4 gap-6 text-gray-500 dark:text-gray-400 mt-2">
             <LuCopy className="w-5 h-5 hover:text-black dark:hover:text-white cursor-pointer" />
             <FiDownloadCloud className="w-5 h-5 hover:text-black dark:hover:text-white cursor-pointer" />
             <FiThumbsUp className="w-5 h-5 hover:text-black dark:hover:text-white cursor-pointer" />
             <FiThumbsDown className="w-5 h-5 hover:text-black dark:hover:text-white cursor-pointer" />
           </div>
         </div>
         <div className="flex flex-col space-y-2">
           <div className="bg-white dark:bg-[#1c1c1f] rounded-2xl border border-gray-200 dark:border-gray-700 p-5">
             <p className="text-sm text-gray-800 dark:text-gray-100 mb-4">
               Schedule your post with Buffer
             </p>
             <div className="bg-[#F9F8FC] dark:bg-[#18181B] p-5 rounded-xl border border-gray-200 dark:border-gray-700">
               <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-2">
                  Date 
                 <div>
                   <label className="text-sm font-medium text-gray-700 dark:text-gray-200 mb-1 block">
                     Date <span className="text-red-500">*</span>
                   </label>
                   <div className="relative">
                     <input
                       type="text"
                       value="Value"
                       readOnly
                       className="w-full outline-purple-500 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-[#1c1c1f] text-sm text-gray-800 dark:text-gray-100 px-3 py-2 pr-10"
                     />
                     <FiCalendar className="absolute right-3 top-1/2 -translate-y-1/2 text-purple-600 dark:text-purple-500" />
                   </div>
                 </div>
                 {/* Time */}
                 <div>
                   <label className="text-sm font-medium text-gray-700 dark:text-gray-200 mb-1 block">
                     Time <span className="text-red-500">*</span>
                   </label>
                   <div className="relative">
                     <input
                       type="text"
                       value="Value"
                       readOnly
                       className="w-full outline-purple-500 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-[#1c1c1f] text-sm text-gray-800 dark:text-gray-100 px-3 py-2 pr-10"
                     />
                     <FiClock className="absolute right-3 top-1/2 -translate-y-1/2 text-purple-600 dark:text-purple-500" />
                   </div>
                 </div>
               </div>
               <div className="flex items-center justify-between mt-3">
                 <p className="text-xs text-gray-500 dark:text-gray-400">
                   Scheduled in your current timezone
                 </p>
                 <button className="text-sm font-medium bg-gradient-to-r from-purple-500 to-purple-600 text-white px-4 py-2 rounded-md shadow hover:opacity-90 transition">
                   Schedule Now
                 </button>
               </div>
             </div>
           </div>
         </div>
       </div> 
        </div>
      <div className="flex-none sticky bottom-0 bg-white dark:bg-[#1c1c1f] border-gray-200 dark:border-gray-700 px-4 py-3">
        <PromptInput />
      </div>
    </div>
  );
}


