// components/ReferralSection.js
import React , {useState} from 'react';

import {BsFillChatDotsFill , BsCurrencyDollar} from 'react-icons/bs'
import {HiArrowNarrowUp} from 'react-icons/hi'
import { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';

export default function ReferralSection() {
  // State for the Help & Support dialog
  const [open, setOpen] = useState(false);

  return (
    <>
    <div className="bg-gray-100 p-8">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl font-semibold text-gray-800">Referral & Bonus System</h2>
        <button
          onClick={() => setOpen(true)}
          className="flex items-center space-x-2 text-blue-500 cursor-pointer"
        >
          <BsFillChatDotsFill className="h-6 w-6" />
          <span>Help & Support</span>
        </button>
      </div>

      <div className="flex items-center space-x-4">
        <div className="flex flex-col items-center">
          <BsCurrencyDollar className="h-10 w-10 text-yellow-400" />
          <p className="text-gray-600">Bonuses</p>
        </div>

        <HiArrowNarrowUp className="h-16 w-16 text-green-400" />

        <div className="flex flex-col items-center">
          <BsCurrencyDollar className="h-10 w-10 text-yellow-400" />
          <p className="text-gray-600">Referral</p>
        </div>
      </div>

      <Transition.Root show={open} as={Fragment}>
        <Dialog
          as="div"
          className="fixed z-10 inset-0 overflow-y-auto"
          onClose={setOpen}
        >
          <div className="flex items-center justify-center min-h-screen p-4">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-black opacity-30" />
            </Transition.Child>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="bg-white rounded-lg p-4 shadow-md w-full max-w-md">
                <Dialog.Title as="h3" className="text-lg font-medium text-gray-900">
                  Help & Support
                </Dialog.Title>
                <div className="mt-4">
                  <p className="text-sm text-gray-500">
                    You can contact us for immediate assistance.
                  </p>
                </div>
                <div className="mt-4 flex justify-end">
                  <button
                    onClick={() => setOpen(false)}
                    className="text-blue-500 cursor-pointer"
                  >
                    Close
                  </button>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>
    </div>
    </>
  );
}
