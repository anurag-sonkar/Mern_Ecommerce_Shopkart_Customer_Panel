import React from "react";
import { Link } from "react-router-dom";

const addresses = [
  {
    name: 'John Wick',
    street: '11th Main',
    city: 'Delhi',
    pinCode: 110001,
    state: 'Delhi',
    phone: 12312321331,
  },
  {
    name: 'John Doe',
    street: '15th Main',
    city: 'Bangalore',
    pinCode: 560034,
    state: 'Karnataka',
    phone: 123123123,
  },
];

function Checkout() {
  return (
    <div className="font-[sans-serif] bg-white">
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-4 h-full">
        <div className="bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 sm:h-screen  sm:top-0 lg:min-w-[370px] sm:min-w-[300px]">
          <div className="relative h-full">
            <div className="px-4 py-8 sm:overflow-auto sm:h-[calc(100vh-60px)]">
              <div className="space-y-4">
                {['https://readymadeui.com/images/product10.webp', 'https://readymadeui.com/images/product11.webp', 'https://readymadeui.com/images/product14.webp', 'https://readymadeui.com/images/product13.webp'].map((src, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-32 h-28 max-lg:w-24 max-lg:h-24 flex p-3 shrink-0 bg-gray-300 rounded-md">
                      <img src={src} className="w-full object-contain" />
                    </div>
                    <div className="w-full">
                      <h3 className="text-base text-white">Product Name</h3>
                      <ul className="text-xs text-gray-300 space-y-2 mt-2">
                        <li className="flex flex-wrap gap-4">
                          Size <span className="ml-auto">37</span>
                        </li>
                        <li className="flex flex-wrap gap-4">
                          Quantity <span className="ml-auto">2</span>
                        </li>
                        <li className="flex flex-wrap gap-4">
                          Total Price <span className="ml-auto">$40</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="md:absolute md:left-0 md:bottom-0 bg-gray-800 w-full p-4">
              <h4 className="flex flex-wrap gap-4 text-base text-white">
                Total <span className="ml-auto">$84.00</span>
              </h4>
            </div>
          </div>
        </div>
        <div className="max-w-4xl w-full h-max rounded-md px-4 py-8 sticky top-0">
          <h2 className="text-2xl font-bold text-gray-800">Complete your order</h2>
          <form className="mt-8">
            <div>
              <h3 className="text-base text-gray-800 mb-4">Personal Details</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {['First Name', 'Last Name', 'Email', 'Phone No.'].map((placeholder, index) => (
                  <input
                    key={index}
                    type={placeholder === 'Email' ? 'email' : placeholder === 'Phone No.' ? 'number' : 'text'}
                    placeholder={placeholder}
                    className="px-4 py-3 bg-gray-100 focus:bg-transparent text-gray-800 w-full text-sm rounded-md focus:outline-blue-600"
                  />
                ))}
              </div>
            </div>
            <div className="mt-8">
              <h3 className="text-base text-gray-800 mb-4">Shipping Address</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {['Address Line', 'City', 'State', 'Zip Code'].map((placeholder, index) => (
                  <input
                    key={index}
                    type="text"
                    placeholder={placeholder}
                    className="px-4 py-3 bg-gray-100 focus:bg-transparent text-gray-800 w-full text-sm rounded-md focus:outline-blue-600"
                  />
                ))}
              </div>
              <div className="mt-6 flex items-center justify-end gap-x-6">
                <button type="button" className="text-sm font-semibold leading-6 text-gray-900">Reset</button>
                <button
                  type="submit"
                  className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Add Address
                </button>
              </div>
              <h2 className="text-base font-semibold leading-7 text-gray-900 mt-8">Addresses</h2>
              <p className="mt-1 text-sm leading-6 text-gray-600">Choose from Existing addresses</p>
              <ul role="list">
                {addresses.map((address, index) => (
                  <li key={index} className="flex justify-between gap-x-6 px-5 py-5 border-solid border-2 border-gray-200">
                    <div className="flex gap-x-4">
                      <input
                        name="address"
                        type="radio"
                        className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                      />
                      <div className="min-w-0 flex-auto">
                        <p className="text-sm font-semibold leading-6 text-gray-900">{address.name}</p>
                        <p className="mt-1 truncate text-xs leading-5 text-gray-500">{address.street}</p>
                        <p className="mt-1 truncate text-xs leading-5 text-gray-500">{address.pinCode}</p>
                      </div>
                    </div>
                    <div className="sm:flex sm:flex-col sm:items-end">
                      <p className="text-sm leading-6 text-gray-900">Phone: {address.phone}</p>
                      <p className="text-sm leading-6 text-gray-500">{address.city}</p>
                    </div>
                  </li>
                ))}
              </ul>
              <div className="mt-10 space-y-10">
                <fieldset>
                  <legend className="text-sm font-semibold leading-6 text-gray-900">Payment Methods</legend>
                  <p className="mt-1 text-sm leading-6 text-gray-600">Choose One</p>
                  <div className="mt-6 space-y-6">
                    {['Cash', 'Card Payment'].map((method, index) => (
                      <div key={index} className="flex items-center gap-x-3">
                        <input
                          id={method.toLowerCase().replace(' ', '')}
                          name="payments"
                          type="radio"
                          className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                        />
                        <label
                          htmlFor={method.toLowerCase().replace(' ', '')}
                          className="block text-sm font-medium leading-6 text-gray-900"
                        >
                          {method}
                        </label>
                      </div>
                    ))}
                  </div>
                </fieldset>
              </div>
              <div className="flex gap-4 max-md:flex-col mt-8">
                <Link to="/">
                  <button
                    type="button"
                    className="rounded-md px-6 py-3 w-full text-sm tracking-wide bg-transparent hover:bg-gray-100 border border-gray-300 text-gray-800 max-md:order-1"
                  >
                    Cancel
                  </button>
                </Link>
                <button
                  type="button"
                  className="rounded-md px-6 py-3 w-full text-sm tracking-wide bg-blue-600 hover:bg-blue-700 text-white"
                >
                  Complete Purchase
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
