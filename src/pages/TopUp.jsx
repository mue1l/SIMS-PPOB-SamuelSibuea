'use client'

import { useState } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import loginImage2 from '../assets/Logo.png';
import profileImage from '../assets/ProfilePhoto.png';




const navigation = [
    { name: 'Top Up', href: '/topup' },
    { name: 'Transaction', href: '/transaction' },
    { name: 'Akun', href: '/profile' },
]

export default function Topup() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div>
      <div className="bg-white">
        <header className="absolute inset-x-0 top-0 z-50">
          <nav aria-label="Global" className="flex items-center justify-between p-6 lg:px-8">
            <div className="flex lg:flex-1">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
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
  {/* Tambahkan gambar profile di atas heading */}
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

    {/* Div Kanan untuk Tampilan Saldo */}
    <div className="bg-red-500 shadow-md rounded-lg p-6">
      <h2 className="text-xl font-bold text-gray-100">Saldo</h2>
      <div className="mt-4 text-2xl font-bold text-green-100">
        Rp ......
      </div>
      <p className="mt-2 text-gray-100 text-xs" >lihat saldo</p>
   
    </div>
  </div>
 

  <div className="bg-white rounded-lg p-6 w-full mt-4 ">
  <p className="text-gray-700 mt-6">Silahkan masukkan</p>
  <h1 className="text-3xl font-bold text-gray-900 mt-2">Nominal Top Up</h1>
  <div className="grid grid-cols-4 gap-4 mt-4 ">
    <div className="col-span-3 flex flex-col space-y-4 ">
      <form className="flex flex-col space-y-4">
        <input
          type="number"
          placeholder="Masukkan nominal Top Up"
          className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-5 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="bg-red-500 text-white rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-red-500"
        >
          Top Up
        </button>
      </form>
    </div>
    <div className="col-span-1 flex flex-col space-y-2 grid grid-cols-3 gap-4 w-full">
  <button className="bg-gray-200 text-gray-900 rounded-lg p-2 text-sm hover:bg-gray-300 focus:ring-2  focus:outline-none w-full">
    1000
  </button>
  <button className="bg-gray-200 text-gray-900 rounded-lg p-2 text-sm hover:bg-gray-300 focus:outline-none w-full">
    1000
  </button>
  <button className="bg-gray-200 text-gray-900 rounded-lg p-2 text-sm hover:bg-gray-300 focus:outline-none w-full">
    1000
  </button>
  <button className="bg-gray-200 text-gray-900 rounded-lg p-2 text-sm hover:bg-gray-300 focus:outline-none w-full">
    1000
  </button>
  <button className="bg-gray-200 text-gray-900 rounded-lg p-2 text-sm hover:bg-gray-300 focus:outline-none w-full">
    10000
  </button>
  <button className="bg-gray-200 text-gray-900 rounded-lg p-2 text-sm hover:bg-gray-300 focus:outline-none w-full">
    30000
  </button>
</div>

  </div>
</div>


      </div>
    </div>
  )
}
