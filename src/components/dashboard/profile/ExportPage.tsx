"use client";

import { useState } from "react";
import { Menu } from "@headlessui/react";
import { FaCheckCircle, FaCircle } from "react-icons/fa";
import { BiChevronDown } from "react-icons/bi";

const files = [
  {
    name: "Welcome",
    color: "text-purple-600",
    icon: "check",
    date: "22-Dec-2029 10:00 AM",
    size: "2.3GB",
  },
  {
    name: "Voice Tools",
    color: "text-blue-600",
    icon: "check",
    date: "22-Dec-2029 10:00 AM",
    size: "2.3GB",
  },
  {
    name: "Video Generation",
    color: "text-green-600",
    icon: "check",
    date: "22-Dec-2029 10:00 AM",
    size: "2.3GB",
  },
  {
    name: "Photo Generation",
    color: "text-black",
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
  const [format, setFormat] = useState("PDF");
  const [selected, setSelected] = useState<number[]>([]);

  const toggleSelect = (i: number) => {
    setSelected((prev) =>
      prev.includes(i) ? prev.filter((x) => x !== i) : [...prev, i]
    );
  };

  return (
    <div className="p-2 h-screen bg-white sm:p-4 max-w-4xl mx-auto w-full">
      <h1 className="text-2xl p-2 font-bold mb-6">Export Chat</h1>
      <hr className="mb-6 text-gray-200" />

      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
        <button
          className="border border-gray-300 text-gray-800 px-4 py-2 rounded-md text-sm bg-white hover:bg-gray-50"
          onClick={() => alert("Download started")}
        >
          Download Chat History
        </button>

        <Menu
          as="div"
          className="relative inline-block text-left w-full sm:w-auto"
        >
          <Menu.Button className="inline-flex justify-between sm:justify-center w-full sm:w-auto items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium rounded-md text-gray-700 hover:bg-gray-50">
            {format}
            <BiChevronDown className="w-4 h-4 ml-2" />
          </Menu.Button>
          <Menu.Items className="absolute z-10 mt-2 w-full sm:w-32 origin-top-right bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg outline-none">
            {["PDF", "TXT", "HTML"].map((f) => (
              <Menu.Item key={f}>
                {({ active }) => (
                  <button
                    onClick={() => setFormat(f)}
                    className={`${
                      active ? "bg-gray-100" : ""
                    } w-full text-left px-4 py-2 text-sm`}
                  >
                    {f}
                  </button>
                )}
              </Menu.Item>
            ))}
          </Menu.Items>
        </Menu>
      </div>

      <div className="overflow-x-auto border border-gray-200 rounded-xl">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-gray-50 text-gray-700">
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
                className={`border-t ${
                  selected.includes(i) ? "bg-purple-50" : ""
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
