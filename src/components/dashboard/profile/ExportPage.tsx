"use client";

import { useState } from "react";
import { FaCheckCircle, FaCircle } from "react-icons/fa";
import { BiChevronDown } from "react-icons/bi";

const files = [
  {
    name: "Welcome",
    color: "text-purple-600",
    icon: "dot",
    date: "22-Dec-2029 10:00 AM",
    size: "2.3GB",
  },
  {
    name: "Voice Tools",
    color: "text-blue-600",
    icon: "dot",
    date: "22-Dec-2029 10:00 AM",
    size: "2.3GB",
  },
  {
    name: "Video Generation",
    color: "text-green-600",
    icon: "dot",
    date: "22-Dec-2029 10:00 AM",
    size: "2.3GB",
  },
  {
    name: "Photo Generation",
    color: "text-[#a29ad0]",
    icon: "dot",
    date: "22-Dec-2029 10:00 AM",
    size: "2.3GB",
  },
  {
    name: "Education & Science",
    color: "text-red-500",
    icon: "dot",
    date: "22-Dec-2029 10:00 AM",
    size: "2.3GB",
  },
  {
    name: "Code Generation",
    color: "text-purple-600",
    icon: "dot",
    date: "22-Dec-2029 10:00 AM",
    size: "2.3GB",
  },
];

export default function ExportPage() {
  const [selected, setSelected] = useState<number[]>([]);

  const toggleSelect = (i: number) => {
    setSelected((prev) =>
      prev.includes(i) ? prev.filter((x) => x !== i) : [...prev, i]
    );
  };

  return (
    <div className="p-2 h-screen bg-white dark:bg-gray-900 sm:p-4 max-w-4xl mx-auto w-full">
      <h1 className="text-2xl p-2 font-bold mb-6 text-gray-900 dark:text-white">Export Chat</h1>
      <hr className="mb-6 border-gray-200 dark:border-gray-700" />

      <div className="flex justify-start mb-4">
  <button
    onClick={() => alert("Download started")}
    className="inline-flex items-center border border-gray-300 dark:border-gray-600 text-gray-800 dark:text-gray-200 bg-white dark:bg-gray-800 text-sm rounded-md overflow-hidden hover:bg-gray-50 dark:hover:bg-gray-700"
  >
    <span className="px-4 py-2">Download Chat History</span>
    <span className="border-l border-gray-300 dark:border-gray-600 px-3 py-2 flex items-center gap-1">
      PDF
      <BiChevronDown className="w-4 h-4" />
    </span>
  </button>
</div>


      <div className="overflow-x-auto border border-gray-200 dark:border-gray-700 rounded-xl">
        <table className="min-w-full text-sm text-left text-gray-800 dark:text-gray-100">
          <thead className="bg-gray-50 dark:bg-gray-800 text-gray-700 dark:text-gray-200">
            <tr>
              <th className="p-4">
                <input
                  type="checkbox"
                  checked={selected.length === files.length}
                  onChange={(e) =>
                    setSelected(e.target.checked ? files.map((_, i) => i) : [])
                  }
                />
              </th>
              <th className="p-4">Name</th>
              <th className="p-4">Date Uploaded</th>
              <th className="p-4">Size</th>
            </tr>
          </thead>
          <tbody>
            {files.map((file, i) => (
              <tr
                key={file.name}
                className={`border-t border-gray-200 dark:border-gray-700 ${
                  selected.includes(i) ? "bg-purple-50 dark:bg-purple-900" : ""
                }`}
              >
                <td className="p-4">
                  <input
                    type="checkbox"
                    checked={selected.includes(i)}
                    onChange={() => toggleSelect(i)}
                  />
                </td>
                <td className="p-4 flex items-center gap-2">
                  {file.icon === "check" ? (
                    <FaCheckCircle className={`w-3 h-3 ${file.color}`} />
                  ) : (
                    <FaCircle className={`w-2 h-2 ${file.color}`} />
                  )}
                  <span className={file.color}>{file.name}</span>
                </td>
                <td className="p-4">{file.date}</td>
                <td className="p-4">{file.size}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
