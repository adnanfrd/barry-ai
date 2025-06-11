"use client";
import { FiDownload, FiMoreVertical } from "react-icons/fi";
import Image from "next/image";
import { HiOutlineLink } from "react-icons/hi";
import { FaCheckCircle, FaDownload, FaStar } from "react-icons/fa";



export default function EducationSciencePage() {

  const items = [
    { name: "Higgs", status: true },
    { name: "Higgs", status: true },
    { name: "Higgs", status: true },
    { name: "Higgs", status: false },
    { name: "Higgs", status: true },
    { name: "Higgs", status: true },
    { name: "Higgs", status: false },
  ];

  return (
    <div className="min-h-screen bg-white p-6 space-y-6">
      {/* Header */}
    

    <div className="flex justify-end">
  <div className="max-w-[90%] md:max-w-[75%] flex border border-gray-200 rounded-xl">
    <div className="bg-white  rounded-2xl flex-1 p-4 text-sm text-gray-700 ">
      <div className="flex gap-3 mb-2">
        {[1, 2].map((_, i) => (
          <div
            key={i}
            className="w-28 h-32 rounded-xl bg-gray-100 flex flex-col justify-between p-2 relative"
          >
            <div className="absolute top-1 right-1 w-5 h-5 rounded-full bg-white flex items-center justify-center border border-gray-200 text-gray-500 text-xs font-medium">+</div>
            <div className="space-y-1 mt-5">
              <div className="h-2 bg-gray-300 rounded w-4/5"></div>
              <div className="h-2 bg-gray-300 rounded w-3/5"></div>
              <div className="h-2 bg-gray-200 rounded w-2/5"></div>
            </div>
            <p className="text-xs font-semibold text-black mt-2">File Name.ext</p>
          </div>
        ))}
      </div>
      <p>
        Effect library connection image main. Rectangle star strikethrough bullet fill.
        Ellipse slice overflow italic style align edit inspect horizontal arrow.
      </p>
    </div>

    <div className="ml-2 flex flex-col justify-between items-center bg-violet-50 px-2 py-1 rounded-r-2xl">
      <Image
        src="/photo.png"
        alt="avatar"
        width={32}
        height={32}
        className="rounded-full"
      />
      <span className="text-[10px] text-gray-500">12:22</span>
    </div>
  </div>
</div>

<div className="mt-3 w-[80%] flex items-center justify-between bg-gray-100 rounded-2xl px-4 py-2">
  <div className="w-10 h-10 rounded-full bg-[#524E63] flex items-center justify-center">
    <HiOutlineLink className="w-5 h-5 text-white" />
  </div>
  <div className="flex items-center gap-2 ml-4">
    <span className="w-2 h-2 rounded-full bg-black"></span>
    <span className="w-2 h-2 rounded-full bg-gray-400"></span>
    <span className="w-2 h-2 rounded-full bg-gray-300"></span>
  </div>
  <div className="ml-auto text-xs text-gray-600">02</div>
</div>


     <div className="bg-[#f7f5ff] p-4 rounded-2xl flex justify-between items-start">
  <div>
    <div className="flex items-center gap-2 font-semibold text-gray-800">
      <span>Very good!</span>
      <div className="flex text-yellow-400">
        {Array.from({ length: 5 }).map((_, i) => (
          <FaStar key={i} className="w-4 h-4" />
        ))}
      </div>
    </div>
  </div>
  <button className="flex items-center gap-1 text-sm font-medium text-indigo-500 hover:underline">
    <FaDownload className="w-4 h-4" />
    Download
  </button>
</div>

<table className="w-full mt-4 text-sm text-left">
  <thead className="border-b text-gray-500">
    <tr>
      <th className="py-2 px-2 font-medium">#</th>
      <th className="py-2 px-2 font-medium">Incorrect answer</th>
      <th className="py-2 px-2 font-medium">Correct answer</th>
      <th className="py-2 px-2 font-medium">Action</th>
    </tr>
  </thead>
  <tbody>
    {[
      { id: 16, incorrect: "Image", correct: "Move" },
      { id: 22, incorrect: "Figma", correct: "Share" },
      { id: 28, incorrect: "Fill layer", correct: "Project polygon" },
      { id: 13, incorrect: "Slice", correct: "Vector" },
      { id: 56, incorrect: "Main text", correct: "Device hand" },
      { id: 99, incorrect: "Clip", correct: "Auto" },
    ].map(({ id, incorrect, correct }) => (
      <tr key={id} className="border-b">
        <td className="py-2 px-2">{id}</td>
        <td className="py-2 px-2 text-red-500 font-medium">{incorrect}</td>
        <td className="py-2 px-2 font-medium text-green-600 flex items-center gap-1">
          <FaCheckCircle className="w-4 h-4 text-green-500" />
          {correct}
        </td>
        <td className="py-2 px-2 text-center">⭐</td>
      </tr>
    ))}
  </tbody>
</table>

<div className="mt-4 bg-white p-4 rounded-xl text-sm leading-relaxed text-gray-700">
  <h3 className="font-bold text-lg mb-2 text-black">Hand opacity boolean</h3>
  <p>
    <strong>Prototype opacity</strong> effect opacity figjam undo ipsum auto. Draft figjam figjam slice share.
  </p>
  <p>
    <strong>Align stroke pen</strong> background stroke team arrow pencil. Strikethrough ellipse device auto pen.
  </p>
  <p>
    <strong>Ipsum project</strong> comment share fill. Scrolling editor share effect export.
  </p>
  <p>
    <strong>Arrange editor</strong> align component vertical. Clip select export ellipse bullet edit text underline scrolling.
  </p>
</div>

    </div>
  );
}
