'use client';

import { useState } from 'react';
import { Dialog, DialogPanel } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import loginImage2 from '../assets/Logo.png';
import profileImage from '../assets/ProfilePhoto.png';
import listrik from '../assets/Listrik.png';
import banner1 from '../assets/Banner1.png';

// Memindahkan navigation ke luar fungsi komponen
const navigation = [
  { name: 'Top Up', href: '/registration' },
  { name: 'Transaction', href: '#' },
  { name: 'Akun', href: '#' },
];

export default function Beranda() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
              {navigation.map((item) => (
                <a key={item.name} href={item.href} className="text-sm font-semibold leading-6 text-gray-900">
                  {item.name}
                </a>
              ))}
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
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                      >
                        {item.name}
                      </a>
                    ))}
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
            <div className="flex justify-right">
              <img
                src={profileImage}
                alt="Profile Picture"
                className="w-18 h-18 rounded-full mb-2"
              />
            </div>
            <p className="mt-4 text-gray-700">Selamat datang,</p>
            <h1 className="text-3xl font-bold text-gray-900">Samuel Sibuea</h1>
          </div>

          <div className="bg-red-500 shadow-md rounded-lg p-6">
            <h2 className="text-xl font-bold text-gray-100">Saldo</h2>
            <div className="mt-4 text-2xl font-bold text-green-100">
              Rp ......
            </div>
            <p className="mt-2 text-gray-100 text-xs">lihat saldo</p>
          </div>
        </div>

        {/* Card Grid */}
        <div className="mt-8 flex overflow-x-auto space-x-6">
          <div className="bg-white rounded-lg p-3 w-36 h-30 flex flex-col items-center justify-center">
            <div className="mb-3">
              <img
                src={listrik}
                alt="Listrik"
                className="h-30 w-auto"
              />
            </div>
            <div>
              <h3 className="text-xl text-gray-900">Card 1</h3>
            </div>
          </div>
          {/* Duplicate Cards */}
          {/* Ulangi card seperti di atas sesuai kebutuhan */}
        </div>

        {/* Promo Section */}
        <div className="mt-8 flex overflow-x-auto space-x-6">
          <div className="bg-white rounded-lg p-3 w-auto h-30 flex flex-col items-right justify-right">
            <h3 className="font-medium">Temukan promo menarik</h3>
          </div>
        </div>

        {/* Banner Grid */}
        <div className="flex overflow-x-auto space-x-6">
          <div className="bg-white rounded-lg p-3 w-63 h-30 flex flex-col items-center justify-center">
            <div className="mb-3">
              <img
                src={banner1}
                alt="Banner"
                className="h-30 w-auto"
              />
            </div>
            <div>
              <h3 className="text-xl text-gray-900">Banner 1</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
