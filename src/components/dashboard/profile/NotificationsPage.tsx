'use client';

import { Switch } from '@headlessui/react';
import { useState } from 'react';
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
    <div className="p-6 sm:p-10 max-w-3xl mx-auto w-full">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Notifications</h1>
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

      {/* Email Box */}
      <div className="bg-gray-50 border border-gray-200 p-4 rounded-xl mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Preferred email
        </label>
        <div className="flex items-center gap-3">
          <div className="relative w-full">
            <FaEnvelope className="absolute left-3 top-1/2 -translate-y-1/2 text-purple-300" />
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-purple-500 focus:border-purple-500"
              placeholder="Placeholder"
            />
          </div>
          <button className="text-purple-600 text-sm font-medium hover:underline whitespace-nowrap">
            Add new email
          </button>
        </div>
      </div>

      {/* Notifications List */}
      <div className="space-y-6">
        {[
          {
            key: 'activity',
            label: 'Activity updates',
            desc: 'Nes, posuere non felis duis massa vitae aliquet interdum scelerisque.',
          },
          {
            key: 'account',
            label: 'Account activity',
            desc: 'Nes, posuere non felis duis massa vitae aliquet interdum scelerisque.',
          },
          {
            key: 'partners',
            label: 'Info letters from our partners',
            desc: 'Nes, posuere non felis duis massa vitae aliquet interdum scelerisque.',
          },
          {
            key: 'promotions',
            label: 'Promotions, recommendations & helpful resources',
            desc: 'Nes, posuere non felis duis massa vitae aliquet interdum scelerisque.',
          },
          {
            key: 'summary',
            label: 'Daily summary emails',
            desc: 'Nes, posuere non felis duis massa vitae aliquet interdum scelerisque.',
          },
        ].map((item) => (
          <div key={item.key} className="flex items-start justify-between gap-4">
            <div>
              <p className="font-medium text-sm text-gray-800">{item.label}</p>
              <p className="text-xs text-gray-500 mt-1">{item.desc}</p>
            </div>
            <Switch
              checked={notifications[item.key as keyof typeof notifications]}
              onChange={() =>
                toggleNotification(item.key as keyof typeof notifications)
              }
              className={classNames(
                notifications[item.key as keyof typeof notifications]
                  ? 'bg-purple-600'
                  : 'bg-gray-300',
                'relative inline-flex h-6 w-11 items-center rounded-full transition-colors'
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
          </div>
        ))}
      </div>

      {/* Buttons */}
      <div className="mt-8 flex gap-4">
        <button className="bg-purple-600 text-white px-5 py-2 rounded-md text-sm hover:bg-purple-700">
          Save
        </button>
        <button className="text-purple-600 text-sm font-medium hover:underline">
          Cancel
        </button>
      </div>
    </div>
  );
}
