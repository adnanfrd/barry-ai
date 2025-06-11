import { useState } from "react";
import { FiDownload, FiMoreVertical } from "react-icons/fi";
import Image from "next/image";
import photo from "@/public/photo.png";
import image from "@/public/image.png";

export default function EducationSciencePage() {
  const [enabled, setEnabled] = useState(true);

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
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Education & Science</h1>
        <div className="space-x-2">
          <button className="bg-gray-200 px-4 py-2 rounded">Recent</button>
          <button className="bg-gray-200 px-4 py-2 rounded">Scientific</button>
          <button className="bg-gray-200 px-4 py-2 rounded">Preview</button>
        </div>
      </div>

      {/* Image Cards */}
      <div className="flex gap-4">
        <div className="w-1/2 bg-gray-100 p-4 rounded-xl">
          <Image src={image} alt="Card image" className="rounded-lg" />
          <h2 className="font-semibold mt-2">File format</h2>
          <p className="text-sm text-gray-500">
            Make things accessible using data. Example: use vibrant enough color
            contrast.
          </p>
        </div>
        <div className="w-1/2 bg-gray-100 p-4 rounded-xl">
          <Image src={photo} alt="Card photo" className="rounded-lg" />
          <h2 className="font-semibold mt-2">File format</h2>
          <p className="text-sm text-gray-500">
            Information provided should be relevant and easy to understand.
          </p>
        </div>
      </div>

      {/* File Table */}
      <div className="bg-gray-50 p-4 rounded-xl shadow">
        <div className="flex justify-between items-center mb-4">
          <h3 className="font-semibold text-lg">Very Good</h3>
          <button className="flex items-center gap-2 text-purple-600">
            <FiDownload /> Download
          </button>
        </div>
        <table className="w-full text-left">
          <thead>
            <tr className="text-gray-500 text-sm">
              <th className="py-2">Name</th>
              <th className="py-2">Condition</th>
              <th className="py-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item, i) => (
              <tr key={i} className="border-t border-gray-200">
                <td className="py-2">{item.name}</td>
                <td className="py-2">
                  <span
                    className={`inline-block w-3 h-3 rounded-full ${
                      item.status ? "bg-green-500" : "bg-red-500"
                    }`}
                  ></span>
                </td>
                <td className="py-2 text-gray-400">
                  <FiMoreVertical />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Description Block */}
      <div className="prose max-w-none">
        <h3>Hard opacity boolean</h3>
        <p>
          Properties specify either opacity: 0 (false) or 1 (true). Don’t toggle
          hidden values unless it improves user experience.
        </p>
        <p>
          <code>opacity-0</code> sets full transparency. <code>opacity-100</code>
          shows full visibility.
        </p>
      </div>

      {/* Input Footer */}
      <div className="mt-6">
        <input
          type="text"
          placeholder="Add new reporting"
          className="w-full border px-4 py-2 rounded-xl"
        />
      </div>
    </div>
  );
}
