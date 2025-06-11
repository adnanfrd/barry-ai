"use client";

import { FaCheck } from "react-icons/fa";

const features = [
  "AI-Driven Personalization",
  "Facial Recognition",
  "AI-Powered Virtual Assistants",
  "Smart History Feature",
  "Google Immersive View with Maps",
  "Gmail Help Me Write",
  "Live Translation & Interpreter",
  "Deep Learning, Facial Recognition",
];

const plans = [
  [true, false, true, false], // AI-Driven Personalization
  [true, false, true, true],  // Facial Recognition
  [false, true, true, true],  // AI-Powered Virtual Assistants
  [false, false, false, true], // Smart History Feature
  [false, false, true, true],  // Google Immersive View
  [false, true, false, true],  // Gmail Help Me Write
  [false, false, false, true], // Live Translation
  [false, false, false, true], // Deep Learning
];

export default function CompareFeatures() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-12 font-poppins">
      <h2 className="text-lg font-semibold mb-6">Compare Features</h2>
      <div className="overflow-auto">
        <table className="w-full text-sm border-separate border-spacing-y-1">
          <tbody>
            {features.map((feature, rowIdx) => (
              <tr key={rowIdx}>
                {/* Feature label */}
                <td className="py-4 pr-4 whitespace-nowrap text-black font-medium align-top">
                  {feature}
                </td>

                {/* Plan columns */}
                {plans[rowIdx].map((enabled, colIdx) => (
                  <td
                    key={colIdx}
                    className="text-center bg-[#f6f5f9] py-4 rounded-lg text-black min-w-[80px]"
                  >
                    {enabled ? (
                      <FaCheck className="text-green-600 inline-block" />
                    ) : (
                      <span className="text-gray-400">✕</span>
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
