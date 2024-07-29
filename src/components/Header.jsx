import React from "react";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { FaOpencart } from "react-icons/fa";
import CartCountBadge from "./CartCountBadge";
import { TbCategory } from "react-icons/tb";
import { Link } from "react-router-dom";

const navigation = [
  { name: "Home", href: "/", current: true },
  { name: "Our Store", href: "/store", current: false },
  { name: "Blogs", href: "/blogs", current: false },
  { name: "Contact", href: "/contact", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function Header() {
  return (
    <nav className="w-full">
      <div className="lg:px-10 md:px-5 py-1 lg:flex md:flex hidden justify-between bg-black text-gray-400 capitalize">
        <p className="text-sm">free shipping over $100 & free returns</p>
        <p className="text-sm">Hotline: (+91) 88025 32150</p>
      </div>

      <Disclosure as="nav" className="bg-gray-900">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              {/* Mobile menu button*/}
              <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                <span className="absolute -inset-0.5" />
                <span className="sr-only">Open main menu</span>
                <Bars3Icon
                  aria-hidden="true"
                  className="block h-6 w-6 group-data-[open]:hidden"
                />
                <XMarkIcon
                  aria-hidden="true"
                  className="hidden h-6 w-6 group-data-[open]:block"
                />
              </DisclosureButton>
            </div>
            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
              <div className="flex flex-shrink-0 items-center">
                <img
                  alt="Your Company"
                  src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                  className="h-8 w-auto"
                />
              </div>
              <div className="hidden sm:ml-6 sm:block">
                <div className="flex space-x-4">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      aria-current={item.current ? "page" : undefined}
                      className={classNames(
                        item.current
                          ? "bg-gray-900 text-white"
                          : "text-gray-300 hover:bg-gray-700 hover:text-white",
                        "rounded-md px-3 py-2 text-sm font-medium"
                      )}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              {/* <FaOpencart /> */}
              <div className="icon_wrapper relative cursor-pointer">
                <FaOpencart size={40} color="white" className="z-10" />
                <CartCountBadge size="w-[22px] h-[22px]" value={23} />
              </div>
              {/* Profile dropdown */}
              <Menu as="div" className="relative ml-6">
                <div>
                  <MenuButton className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                    <span className="absolute -inset-1.5" />
                    <span className="sr-only">Open user menu</span>
                    <img
                      alt=""
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      className="h-10 w-10 rounded-full"
                    />
                  </MenuButton>
                </div>
                <MenuItems
                  transition
                  className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
                >
                  <MenuItem>
                    <Link
                      to="/profile"
                      className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100"
                    >
                      Your Profile
                    </Link>
                  </MenuItem>
                  <MenuItem>
                    <Link
                      to="/whishlist"
                      className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100"
                    >
                      Wishlist
                    </Link>
                  </MenuItem>
                  <MenuItem>
                    <Link
                      to="/compare-products"
                      className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100"
                    >
                      Compare Products
                    </Link>
                  </MenuItem>
                  <MenuItem>
                    <Link
                      to="#"
                      className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100"
                    >
                      Sign out
                    </Link>
                  </MenuItem>
                </MenuItems>
              </Menu>
            </div>
          </div>
        </div>

        <DisclosurePanel className="sm:hidden">
          <div className="space-y-1 px-2 pb-3 pt-2">
            {navigation.map((item) => (
              <DisclosureButton
                key={item.name}
                as="a"
                href={item.href}
                aria-current={item.current ? "page" : undefined}
                className={classNames(
                  item.current
                    ? "bg-gray-900 text-white"
                    : "text-gray-300 hover:bg-gray-700 hover:text-white",
                  "block rounded-md px-3 py-2 text-base font-medium"
                )}
              >
                {item.name}
              </DisclosureButton>
            ))}
          </div>
        </DisclosurePanel>
      </Disclosure>

      <div className="lg:px-10 px-5 py-2 bg-gray-800 lg:flex md:flex justify-between">
        <div className="flex items-center">
          <div>
            <TbCategory size={30} color="white" />
          </div>
          <select className="bg-gray-800 cursor-pointer text-white uppercase text-lg lg:px-16  pl-14 py-2 lg:mx-6">
            <option selected disabled>
              Shop categories
            </option>
            <option>Mens</option>
            <option>Womens</option>
            <option>Electronics</option>
          </select>
        </div>

        <div>
          <input
            className="lg:w-96 md:w-96 w-[100%] py-1 lg:px-4 px-2 rounded-full lg:my-1 my-2 lg:text-base text-sm"
            placeholder="Search For Category, Products and Many More...."
          />
        </div>
      </div>
    </nav>
  );
}

export default Header;
