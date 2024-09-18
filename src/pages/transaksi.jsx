'use client'

import { useState } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import loginImage2 from '../assets/Logo.png';
import profileImage from '../assets/ProfilePhoto.png';

// Sample transaction data
const transactions = [
  { id: 1, amount: '100,000', date: '2024-09-15', time: '14:30', type: 'Top Up' },
  { id: 2, amount: '50,000', date: '2024-09-16', time: '10:00', type: 'Payment' },
  { id: 3, amount: '200,000', date: '2024-09-17', time: '09:45', type: 'Top Up' },
  { id: 4, amount: '75,000', date: '2024-09-18', time: '11:20', type: 'Payment' },
  { id: 5, amount: '30,000', date: '2024-09-19', time: '12:00', type: 'Top Up' },
  { id: 6, amount: '120,000', date: '2024-09-20', time: '13:30', type: 'Payment' },
  { id: 7, amount: '85,000', date: '2024-09-21', time: '14:45', type: 'Top Up' },
  { id: 8, amount: '60,000', date: '2024-09-22', time: '15:00', type: 'Payment' },
];

export default function Transaksi() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showMore, setShowMore] = useState(false);

  // Calculate the number of items to show
  const itemsToShow = showMore ? transactions : transactions.slice(0, 5);

  return (
    <div>
      <div className="bg-white">
        <header className="absolute inset-x-0 top-0 z-50">
          <nav aria-label="Global" className="flex items-center justify-between p-6 lg:px-8">
            <div className="flex lg:flex-1">
              <a href="#" className="-m-1.5 p-1.5">
                <img
                  src={loginImage2}
                  alt="Login Image"
                  className="h-10 w-auto"
                />
              </a>
              <h2 className="text-xl font-bold leading-9 tracking-tight text-gray-900 ml-2">
                SIMS PPBOB
              </h2>
            </div>
            <div className="flex lg:hidden">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(true)}
                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              >
                <span className="sr-only">Open main menu</span>
                <Bars3Icon aria-hidden="true" className="h-6 w-6" />
              </button>
            </div>
            <div className="hidden lg:flex lg:gap-x-12">
              {/* Navigation Links */}
            </div>
          </nav>
          <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
            <div className="fixed inset-0 z-50" />
            <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
              <div className="flex items-center justify-between">
                <a href="#" className="-m-1.5 p-1.5">
                  <img
                    src={loginImage2}
                    alt="Login Image"
                    className="h-10 w-auto"
                  />
                </a>
                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(false)}
                  className="-m-2.5 rounded-md p-2.5 text-gray-700"
                >
                  <span className="sr-only">Close menu</span>
                  <XMarkIcon aria-hidden="true" className="h-6 w-6" />
                </button>
              </div>
              <div className="mt-6 flow-root">
                <div className="-my-6 divide-y divide-gray-500/10">
                  <div className="space-y-2 py-6">
                    {/* Mobile Navigation Links */}
                  </div>
                </div>
              </div>
            </DialogPanel>
          </Dialog>
        </header>
      </div>

      {/* Body Content */}
      <div className="mt-24 p-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Div Kiri */}
          <div className="bg-white shadow-md rounded-lg p-6">
            {/* Tambahkan gambar profile di atas heading */}
            <div className="flex justify-end">
              <img
                src={profileImage}
                alt="Profile Picture"
                className="w-18 h-18 rounded-full mb-2"
              />
            </div>
            <p className="mt-4 text-gray-700">Selamat datang,</p>
            <h1 className="text-3xl font-bold text-gray-900">Samuel Sibuea</h1>
          </div>

          {/* Div Kanan untuk Tampilan Saldo */}
          <div className="bg-red-500 shadow-md rounded-lg p-6">
            <h2 className="text-xl font-bold text-gray-100">Saldo</h2>
            <div className="mt-4 text-2xl font-bold text-green-100">
              Rp ...... 
            </div>
            <p className="mt-2 text-gray-100 text-xs">lihat saldo</p>
          </div>
        </div>

        <div className="bg-white rounded-lg p-6 w-full mt-4">
          <p className="font-bold text-gray-900 mt-2">Semua Transaksi</p>
          <div className="mt-4 grid grid-cols-1 gap-4">
            {itemsToShow.map((transaction) => (
              <div
                key={transaction.id}
                className="bg-gray-100 p-4 rounded-lg shadow-md flex justify-between items-center"
              >
                <div className="flex flex-col">
                  <span className="text-lg font-bold text-gray-900">Rp {transaction.amount}</span>
                  <span className="text-sm text-gray-600">{transaction.date} - {transaction.time}</span>
                </div>
                <span className="text-sm font-semibold text-gray-900">{transaction.type}</span>
              </div>
            ))}
          </div>
          {itemsToShow.length < transactions.length && (
            <button
              onClick={() => setShowMore(!showMore)}
              className="mt-4 text-blue-500 font-semibold"
            >
              {showMore ? 'Show Less' : 'Show More'}
            </button>
          )}
        </div>
      </div>
    </div>
  )
}
