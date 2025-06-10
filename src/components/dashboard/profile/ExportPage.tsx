'use client';

import { useState } from 'react';
import { Menu } from '@headlessui/react';
// import { ChevronDownIcon } from '@heroicons/react/20/solid';
import { FaCheckCircle } from 'react-icons/fa';

const files = [
  { name: 'Welcome', date: '22-Dec-2029 10:00 AM', size: '2.93B', color: 'purple' },
  { name: 'Voice Tools', date: '22-Dec-2029 10:00 AM', size: '2.93B', color: 'gray' },
  { name: 'Video Generation', date: '22-Dec-2029 10:00 AM', size: '2.93B', color: 'blue' },
  { name: 'Photo Generation', date: '22-Dec-2029 10:00 AM', size: '2.93B', color: 'pink' },
  { name: 'Education & Science', date: '22-Dec-2029 10:00 AM', size: '2.93B', color: 'orange' },
  { name: 'Code Generation', date: '22-Dec-2029 10:00 AM', size: '2.93B', color: 'cyan' },
];

const colorMap: Record<string, string> = {
  purple: 'text-purple-600',
  gray: 'text-gray-500',
  blue: 'text-blue-600',
  pink: 'text-pink-500',
  orange: 'text-orange-500',
  cyan: 'text-cyan-600',
};

export default function ExportPage() {
  const [selected, setSelected] = useState<number[]>([]);
  const [format, setFormat] = useState('PDF');

  const toggleSelect = (index: number) => {
    setSelected((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <div className="p-6 sm:p-10 max-w-4xl mx-auto w-full">
      <h1 className="text-2xl font-bold mb-6">Export Chat</h1>

      {/* Controls */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
        <button
          className="bg-purple-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-purple-700 w-full sm:w-auto"
          onClick={() => alert('Download started')}
        >
          Download Chat History
        </button>

        <Menu as="div" className="relative inline-block text-left w-full sm:w-auto">
          <Menu.Button className="inline-flex justify-between sm:justify-center w-full sm:w-auto items-center px-4 py-2 border border-gray-300 shadow-sm bg-white text-sm font-medium rounded-md text-gray-700 hover:bg-gray-50">
            {format}
            {/* <ChevronDownIcon className="w-4 h-4 ml-2" /> */}
          </Menu.Button>
          <Menu.Items className="absolute z-10 mt-2 w-full sm:w-40 origin-top-right bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg outline-none">
            {['PDF', 'TXT', 'HTML'].map((f) => (
              <Menu.Item key={f}>
                {({ active }) => (
                  <button
                    onClick={() => setFormat(f)}
                    className={`${
                      active ? 'bg-gray-100' : ''
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

      {/* Table */}
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
                className="border-t hover:bg-gray-50 transition-colors"
              >
                <td className="p-4">
                  <input
                    type="checkbox"
                    checked={selected.includes(i)}
                    onChange={() => toggleSelect(i)}
                  />
                </td>
                <td className="p-4 flex items-center gap-2">
                  <FaCheckCircle
                    className={`w-3 h-3 ${colorMap[file.color]}`}
                  />
                  <span className={colorMap[file.color]}>{file.name}</span>
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
