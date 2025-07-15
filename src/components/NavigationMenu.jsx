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
    <Disclosure as="nav" className="py-1 relative bg-gray-800">
      <div className="mx-auto max-w-7xl pl-6 pr-4 sm:px-6 lg:px-8">
        <div className="relative flex h-25 items-center justify-between">

          {/* Logo and Navigation Links Start*/}
          <div className="flex flex-1 items-center justify-between sm:items-stretch sm:justify-between">

            {/* # Item 1: Logo */}
            <div className="mx-auto sm:mx-0 flex shrink-0 items-center justify-center rounded-xl">
              <img
                alt="Your Company"
                src={logo}
                className="h-25 w-45 "
              />
            </div>

          {/* # Item 2: Menu */}
            {/* <div className="hidden md:ml-4 md:block">
              <div className="flex h-25 items-center space-x-4 ">
                 {navigation.map((item) =>
          item.hasDropdown ? (
            <div key={item.name} className="relative">
              <button
                onClick={() =>
                  setOpenDropdown(openDropdown === item.name ? null : item.name)
                }
                className={classNames(
                  'text-white font-semibold hover:text-gray-800 hover:bg-white',
                  'rounded-sm px-3 py-2 md:text-center text-[min(10vw,18px)] flex items-center'
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
              {/* {openDropdown === item.name && (
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
                      item.current ? 'bg-gray-200 text-black-300 font-semibold' : 'text-white font-semibold hover:text-gray-800 hover:bg-white',
                      'rounded-md px-3 py-2 md:text-center text-[min(10vw,18px)]',
                    )}
                  >
                    {item.name}
                  </a>
                )
                )}
              </div>
            </div> */} 
<div className="hidden md:ml-4 md:block">
  <div className="flex h-25 items-center space-x-4">
    {navigation.map((item) =>
      item.hasDropdown ? (
        <div key={item.name} className="relative group">
          <button
            className={classNames(
              'text-white font-semibold hover:text-gray-800 hover:bg-white',
              'rounded-sm px-3 py-2 md:text-center text-[min(10vw,18px)] flex items-center'
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

          {/* Dropdown */}
          <div className="absolute top-full left-0 w-48 z-50 bg-white border border-gray-300 rounded-sm shadow-md opacity-0 invisible group-hover:visible group-hover:opacity-100 transition-all duration-200">
            <div className="py-1">
              {item.dropdown.map((sub) => (
                <a
                  key={sub.name}
                  href={sub.href}
                  className="block px-4 py-2 text-sm font-semibold text-black hover:bg-gray-200"
                >
                  {sub.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <a
          key={item.name}
          href={item.href}
          aria-current={item.current ? 'page' : undefined}
          className={classNames(
            item.current
              ? 'bg-gray-200 text-black font-semibold'
              : 'text-white font-semibold hover:text-gray-800 hover:bg-white',
            'rounded-md px-3 py-2 md:text-center text-[min(10vw,18px)]'
          )}
        >
          {item.name}
        </a>
      )
    )}
  </div>
</div>


          </div>
          <div className="absolute inset-y-0 right-0 flex items-center md:hidden">
            {/* Mobile menu button*/}
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-black-300 bg-white hover:bg-gray-200 hover:text-black-300 focus:ring-2 focus:ring-white focus:outline-hidden focus:ring-inset">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="block size-6 group-data-open:hidden" />
              <XMarkIcon aria-hidden="true" className="hidden size-6 group-data-open:block" />
            </DisclosureButton>
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
          </div>
    </Disclosure>

  );
}