import React from "react";
import {
  Drawer,
  Button,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import { Input } from "@material-tailwind/react";

export function DrawerFilter({ openRight, setOpenRight }) {
  const closeDrawerRight = () => setOpenRight(false);

  return (
    <Drawer
      placement="right"
      open={openRight}
      onClose={closeDrawerRight}
      className="py-4 pl-4 overflow-y-scroll"
    >
      <div className="mb-6 px-4 flex items-center justify-between">
        <Typography variant="h5" color="blue-gray">
          Filters
        </Typography>
        <IconButton variant="text" color="blue-gray" onClick={closeDrawerRight}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="h-5 w-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </IconButton>
      </div>

        {/* md&sm -screen filter */}
      <div className="capitalize">
        {/* filter-card :shop by categories*/}
        <div className="filter-card">
          <h1 className="filter-title">shop by categories</h1>
          <div>
            <ul>
              <li>watch</li>
              <li>tv</li>
              <li>camera</li>
              <li>laptop</li>
            </ul>
          </div>
        </div>
        {/* filter-card :filter by*/}
        <div className="filter-card">
          <h1 className="filter-title">filter by</h1>
          {/*availability */}
          <div className="mb-6">
            <h1 className="sub-title">availablility</h1>
            <div>
              <input type="checkbox" id="m-instock" className="custom-checkbox" />
              <label htmlFor="m-instock">in stock</label>
            </div>
            <div>
              <input
                type="checkbox"
                id="m-outofstock"
                className="custom-checkbox"
              />
              <label htmlFor="m-outofstock">out of stock(0)</label>
            </div>
          </div>

          {/*price */}
          <div className="mb-6">
            <h1 className="sub-title">price</h1>
            <div className="flex gap-2">
              <div className="w-28">
                <Input
                  placeholder="From"
                  className="!border !border-gray-300 bg-white text-gray-900 shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 placeholder:opacity-100 focus:!border-gray-900 focus:!border-t-gray-900 focus:ring-gray-900/10"
                  labelProps={{
                    className: "hidden",
                  }}
                  containerProps={{ className: "min-w-[50px]" }}
                />
              </div>
              <div className="w-28">
                <Input
                  placeholder="To"
                  className="!border !border-gray-300 bg-white text-gray-900 shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 placeholder:opacity-100 focus:!border-gray-900 focus:!border-t-gray-900 focus:ring-gray-900/10"
                  labelProps={{
                    className: "hidden",
                  }}
                  containerProps={{ className: "min-w-[50px]" }}
                />
              </div>
            </div>
          </div>

          {/*colors */}
          <div className="mb-6">
            <h1 className="sub-title">colors</h1>
            <ul className="colors grid grid-cols-8 gap-1">
              <li className="bg-gray-900"></li>
              <li className="bg-teal-700"></li>
              <li className="bg-pink-900"></li>
              <li className="bg-red-500"></li>
              <li className="bg-yellow-400"></li>
              <li className="bg-red-200"></li>
              <li className="bg-blue-600"></li>
              <li className="bg-teal-900"></li>
              <li className="bg-blue-600"></li>
              <li className="bg-red-500"></li>
              <li className="bg-gray-900"></li>
              <li className="bg-teal-700"></li>
              <li className="bg-pink-900"></li>
              <li className="bg-red-500"></li>
              <li className="bg-red-200"></li>
              <li className="bg-gray-900"></li>
              <li className="bg-red-500"></li>
              <li className="bg-yellow-400"></li>
              <li className="bg-red-200"></li>
              <li className="bg-pink-900"></li>
              <li className="bg-red-500"></li>
              <li className="bg-red-200"></li>
              <li className="bg-teal-200"></li>
            </ul>
          </div>

          {/* size */}
          <div className="mb-6">
            <h1 className="sub-title">size</h1>
            <div>
              <input type="checkbox" id="m-small" className="custom-checkbox" />
              <label htmlFor="m-small">S</label>
            </div>
            <div>
              <input type="checkbox" id="m-medium" className="custom-checkbox" />
              <label htmlFor="m-medium">M</label>
            </div>
            <div>
              <input type="checkbox" id="m-large" className="custom-checkbox" />
              <label htmlFor="m-large">L</label>
            </div>
            <div>
              <input type="checkbox" id="m-xl" className="custom-checkbox" />
              <label htmlFor="m-xl">XL</label>
            </div>
            <div>
              <input type="checkbox" id="m-xxl" className="custom-checkbox" />
              <label htmlFor="m-xxl">XXL</label>
            </div>
          </div>
        </div>

        {/* filter-card:product tags */}
        <div className="filter-card">
          <h1 className="filter-title">product tags</h1>
          <div className="tags-container">
            <span className="tags">Headphone</span>
            <span className="tags">tablet</span>
            <span className="tags">speaker</span>
            <span className="tags">speaker</span>
            <span className="tags">Mouse</span>
            <span className="tags">desktop</span>
            <span className="tags">Mouse</span>
            <span className="tags">desktop</span>
          </div>
        </div>

        {/* filter-card :random product*/}
        <div className="filter-card">
          <h1 className="filter-title">random product</h1>
          <div className="">{/* <CardRandom /> */}</div>
        </div>
      </div>
    </Drawer>
  );
}
