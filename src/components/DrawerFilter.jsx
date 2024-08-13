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
      <div className="filter-card">
            <h1 className="filter-title">filter by</h1>
            {/*order status */}
            <div className="mb-6">
              <h1 className="sub-title ">order status</h1>
              <div>
                <input
                  type="checkbox"
                  id="ontheway"
                  className="custom-checkbox"
                />
                <label htmlFor="ontheway">On the way</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  id="delivered"
                  className="custom-checkbox"
                />
                <label htmlFor="delivered">delivered</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  id="cancelled"
                  className="custom-checkbox"
                />
                <label htmlFor="cancelled">cancelled</label>
              </div>
            </div>
          </div>
          <div className="filter-card">
            {/* <h1 className="filter-title">filter by</h1> */}
            {/*order time */}
            <div className="mb-6">
              <h1 className="sub-title ">order time</h1>
              <div>
                <input
                  type="checkbox"
                  id="last30days"
                  className="custom-checkbox"
                />
                <label htmlFor="last30days">last 30 days</label>
              </div>
              <div>
                <input type="checkbox" id="2023" className="custom-checkbox" />
                <label htmlFor="2023">2023</label>
              </div>
              <div>
                <input type="checkbox" id="2022" className="custom-checkbox" />
                <label htmlFor="2022">2022</label>
              </div>
            </div>
          </div>
      </div>
    </Drawer>
  );
}
