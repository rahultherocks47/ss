import React, { useState } from 'react';
import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import logo from '../assets/images/logo1.png';

const navigation = [
  { name: 'Our Services', href: '#', current: true,  hasDropdown: true,dropdown: [
      { name: 'City-to-City Rides', href: '/themes' },
      { name: 'Chauffer Hailing', href: '/blog' },
      { name: 'Airport Transfers', href: '/blog' },
      { name: 'Hourly Hire', href: '/blog' },
      { name: 'Chauffer Service', href: '/blog' },
      { name: 'Limousine Service', href: '/blog' },
    ], },
  { name: 'Our Business', href: '#', current: false, hasDropdown: true ,dropdown: [
      { name: 'Overviews', href: '/themes' },
      { name: 'Corporations', href: '/blog' },
      { name: 'Travel Agencies', href: '/blog' },
    ], },
  { name: 'For Chauffers', href: '#', current: false },
  { name: 'Help', href: '#', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function NavigationMenu() {
    const [openDropdown, setOpenDropdown] = useState(null);
  return (
    <Disclosure as="nav" className="bg-white-800 py-1 relative shadow-sm border-b border-gray-300">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-25 items-center justify-between">

          {/* Logo and Navigation Links Start*/}
          <div className="flex flex-1 items-center justify-between sm:items-stretch sm:justify-between">

            {/* # Item 1: Logo */}
            {/* <div className="flex shrink-0 items-center bg-black"> */}
              <img
                alt="Your Company"
                src={logo}
                className="h-25 w-45 bg-black"
              />
            {/* </div> */}

          {/* # Item 2: Menu */}
            <div className="hidden md:ml-4 md:block">
              <div className="flex h-25 items-center space-x-4 ">
                 {navigation.map((item) =>
          item.hasDropdown ? (
            <div key={item.name} className="relative">
              <button
                onClick={() =>
                  setOpenDropdown(openDropdown === item.name ? null : item.name)
                }
                className={classNames(
                  'text-black-300 font-semibold hover:bg-gray-200',
                  'rounded-sm px-3 py-2 md:text-center text-[min(10vw,14px)] flex items-center'
                )}
              >
                {item.name}
                <svg
                  className="ml-1 h-4 w-4"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.23 7.21a.75.75 0 011.06.02L10 10.939l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.243a.75.75 0 01-1.06 0L5.25 8.29a.75.75 0 01-.02-1.06z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            {/* Dropdown menu */}
              {openDropdown === item.name && (
                <div className="absolute top-full left-0 mt-2 w-48 shadow-md border-b border-gray-300 bg-white z-50">
                  <div className="py-1">
                    {item.dropdown.map((sub) => (
                      <a
                        key={sub.name}
                        href={sub.href}
                        className="block px-4 py-2 text-sm text-black-300 font-semibold hover:bg-gray-200 leading-tight sm:leading-normal md:leading-relaxed"
                      >
                        {sub.name}
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ) : (
                  <a
                    key={item.name}
                    href={item.href}
                    aria-current={item.current ? 'page' : undefined}
                    className={classNames(
                      item.current ? 'bg-gray-200 text-black-300 font-semibold' : 'text-black-300  font-semibold hover:bg-gray-200',
                      'rounded-md px-3 py-2 md:text-center text-[min(10vw,14px)]',
                    )}
                  >
                    {item.name}
                  </a>
                )
                )}
              </div>
            </div>

   <div className="flex items-center mr-10  md:ml-10">
            <button
              type="button"
              className="relative rounded-full p-1 flex items-center justify-center hover:"            >
            <span class="[&>svg]:h-15 [&>svg]:w-7 [&>svg]:fill-[#128c7e]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 448 512">
                <path
                  d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
              </svg>
            </span>
            <p class="sm:block flex flex-shrink-0 ml-1 text-[min(10vw,10px)] text-black-700">+1 315 210 8347 (USA)</p>
            </button>
          </div>

          </div>
          

       
                

          <div className="absolute inset-y-0 right-0 flex items-center md:hidden">
            {/* Mobile menu button*/}
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-black-300 hover:bg-gray-200 hover:text-black-300 focus:ring-2 focus:ring-white focus:outline-hidden focus:ring-inset">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="block size-6 group-data-open:hidden" />
              <XMarkIcon aria-hidden="true" className="hidden size-6 group-data-open:block" />
            </DisclosureButton>
          </div>
        </div>
      </div>

      {/* Panel that shows up only on mobile menu */}
      <DisclosurePanel className="md:hidden absolute top-full left-0 w-full bg-white shadow-md z-50" >
        <div className="space-y-1 px-2 pt-2 pb-3">
          {navigation.map((item) => (
            <DisclosureButton
              key={item.name}
              as="a"
              href={item.href}
              aria-current={item.current ? 'page' : undefined}
              className={classNames(
                item.current ? 'bg-gray-200 text-black-300' : 'text-black-300 hover:bg-gray-200',
                'block rounded-md px-3 py-2 text-base font-medium',
              )}
            >
              {item.name}
            </DisclosureButton>
          ))}
        </div>
      </DisclosurePanel>

    </Disclosure>
  )
}