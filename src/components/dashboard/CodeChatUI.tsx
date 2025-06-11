"use client";

import { HiOutlineEyeOff } from "react-icons/hi";
import { FaCodepen } from "react-icons/fa6";
import Image from "next/image";

export default function CodeChatUI() {
  return (
    <div className="w-full p-4 flex flex-col gap-4 mt-8">
      <div className="flex justify-end">
        <div className="max-w-[90%] md:max-w-[75%] flex overflow-hidden rounded-2xl border border-[#e5e5fa] bg-white text-sm shadow-sm">
          {/* Message Text */}
          <div className="flex-1 px-4 py-3 text-gray-800 leading-relaxed">
            Figjam flows <strong>bold</strong> <em>ipsum</em> text italic.
            Create hand connection ellipse stroke invite duplicate rotate blur.
            Reesizing duplicate boolean.
          </div>

          {/* Avatar & Time */}
          <div className="flex w-14 flex-col items-center justify-center bg-[#f6f6fb] px-2 py-2 text-[10px] text-gray-500">
            <div className="w-6 h-6 rounded-full overflow-hidden mb-1">
              <Image
                src="/photo.png"
                alt="avatar"
                width={24}
                height={24}
                className="rounded-full"
              />
            </div>
            12:22
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between w-[80%] bg-[#f7f6f9] rounded-2xl px-4 py-3">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-[#544f5a] flex items-center justify-center shadow-md">
            <HiOutlineEyeOff className="w-5 h-5 text-white" />
          </div>

          <div className="flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-black"></span>
            <span className="w-2 h-2 rounded-full bg-gray-400"></span>
            <span className="w-2 h-2 rounded-full bg-gray-300"></span>
          </div>
        </div>

        <div className="text-sm font-medium text-black pr-1">00</div>
      </div>

      <div className="bg-black text-white rounded-2xl overflow-hidden">
        <div className="flex justify-between items-center px-4 py-2 bg-zinc-800">
          <div className="flex gap-2">
            <span className="text-xs px-3 py-1 rounded-md bg-white text-black">
              HTML
            </span>
            <span className="text-xs px-3 py-1 rounded-md text-gray-300">
              CSS
            </span>
            <span className="text-xs px-3 py-1 rounded-md text-gray-300">
              JS
            </span>
          </div>
          <button className="text-xs text-white">Copy Code</button>
        </div>

        <pre className="px-4 py-3 whitespace-pre-wrap text-sm overflow-x-auto">
          {`window.onmessage = ({ data: { pluginMessage } }) => {
  if (pluginMessage.type === "EXPORT_RESULT") {
    const data = pluginMessage.files as CollectionExportRecord[];
    document.querySelector("textarea").innerHTML = JSON.stringify(data, null, 2);
  }
}`}
        </pre>
      </div>

      {/* Description */}
      <p className="text-sm text-gray-600">
        Vertical inspect effect library flatten strikethrough list export
        overflow outline. Figjam vertical share background export outline align
        mask edit list. Asset strikethrough layout.
      </p>

      {/* CodePen Footer */}
      <div className="flex justify-between items-center bg-gray-100 rounded-2xl px-4 py-3 text-sm text-gray-700">
        <span>I have created a project in your Codepen account</span>
        <button className="flex items-center gap-2 px-3 py-1 rounded-md border border-gray-300 hover:bg-white">
          <FaCodepen className="w-4 h-4" />
          View on CodePen
        </button>
      </div>
    </div>
  );
}
