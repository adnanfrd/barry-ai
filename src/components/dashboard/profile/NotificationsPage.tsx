'use client';

import { Switch } from '@headlessui/react';
import { useState } from 'react';
import { BiPlusCircle } from 'react-icons/bi';
import { FaEnvelope } from 'react-icons/fa';

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export default function NotificationsPage() {
  const [enabled, setEnabled] = useState(true);
  const [email, setEmail] = useState('');
  const [notifications, setNotifications] = useState({
    activity: true,
    account: true,
    partners: false,
    promotions: false,
    summary: false,
  });

  const toggleNotification = (key: keyof typeof notifications) => {
    setNotifications((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="p-2 h-screen bg-white sm:p-4 max-w-4xl mx-auto w-full">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-black">Notifications</h1>
        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-700">On</span>
          <Switch
            checked={enabled}
            onChange={setEnabled}
            className={classNames(
              enabled ? 'bg-purple-600' : 'bg-gray-300',
              'relative inline-flex h-6 w-11 items-center rounded-full transition-colors'
            )}
          >
            <span
              className={classNames(
                enabled ? 'translate-x-6' : 'translate-x-1',
                'inline-block h-4 w-4 transform rounded-full bg-white transition'
              )}
            />
          </Switch>
        </div>
      </div>

      <hr className="mb-6 border-gray-200" />

      {/* Email Box */}
      <div className="bg-gray-50 border border-gray-200 rounded-xl p-4 mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Preferred email
        </label>
        <div className="flex items-stretch gap-3">
  {/* Email Input */}
  <div className="relative w-[35%]">
    <FaEnvelope className="absolute left-3 top-1/2 -translate-y-1/2 text-purple-300" />
    <input
      type="email"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      placeholder="Placeholder"
      className="w-full pl-10 pr-4 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 h-full"
    />
  </div>

  {/* Add New Email Button */}
  <button className="w-[40%] px-4 py-2 flex items-center justify-center text-purple-600 text-sm font-medium border border-transparent rounded-md">
    <BiPlusCircle className="mr-2 text-base" />
    Add new email
  </button>
</div>

      </div>

      {/* Notification Toggles */}
      <div className="space-y-6">
        {[
          {
            key: 'activity',
            label: 'Activity updates',
            desc: 'Nes, posuere non felis duis massa vitae aliquet interdum scelerisque. Neque ullamcorper.',
          },
          {
            key: 'account',
            label: 'Account activity',
            desc: 'Nes, posuere non felis duis massa vitae aliquet interdum scelerisque. Neque ullamcorper.',
          },
          {
            key: 'partners',
            label: 'Info letters from our partners',
            desc: 'Nes, posuere non felis duis massa vitae aliquet interdum scelerisque. Neque ullamcorper.',
          },
          {
            key: 'promotions',
            label: 'Promotions, recommendations & helpful resources',
            desc: 'Nes, posuere non felis duis massa vitae aliquet interdum scelerisque. Neque ullamcorper.',
          },
          {
            key: 'summary',
            label: 'Daily summary emails',
            desc: 'Nes, posuere non felis duis massa vitae aliquet interdum scelerisque. Neque ullamcorper.',
          },
        ].map((item) => (
          <div
            key={item.key}
            className="flex items-start justify-between gap-4"
          >
            <div className="flex items-start gap-3">
              <Switch
                checked={notifications[item.key as keyof typeof notifications]}
                onChange={() =>
                  toggleNotification(item.key as keyof typeof notifications)
                }
                className={classNames(
                  notifications[item.key as keyof typeof notifications]
                    ? 'bg-purple-600'
                    : 'bg-gray-300',
                  'relative inline-flex h-6 w-11 items-center rounded-full transition-colors mt-1'
                )}
              >
                <span
                  className={classNames(
                    notifications[item.key as keyof typeof notifications]
                      ? 'translate-x-6'
                      : 'translate-x-1',
                    'inline-block h-4 w-4 transform rounded-full bg-white transition'
                  )}
                />
              </Switch>
              <div>
                <p className="font-semibold text-sm text-gray-800">
                  {item.label}
                </p>
                <p className="text-xs text-gray-500 mt-1">{item.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Buttons */}
      <div className="mt-8 flex gap-6">
        <button className="bg-purple-600 text-white text-sm px-6 py-2 rounded-md hover:bg-purple-700">
          Save
        </button>
        <button className="text-purple-600 text-sm font-medium hover:underline">
          Cancel
        </button>
      </div>
    </div>
  );
}
