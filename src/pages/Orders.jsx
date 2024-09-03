import React, { useEffect, useState } from "react";
import { BreadCrumb } from "../components/BreadCrumb";
import HelmetTitle from "../components/HelmetTitle";
import { FaFilter } from "react-icons/fa";
import { DrawerFilter } from "../components/DrawerFilter";
import { useDispatch, useSelector } from "react-redux";
import { Input, Space } from "antd";
import { getMyOrders } from "../features/orders/ordersSlice";
import OrderCard from "../components/OrderCard";
import {Skeleton} from 'antd';
import { Link } from "react-router-dom";
const { Search } = Input;


function Orders() {
  const [openRight, setOpenRight] = React.useState(false);
  const openDrawerRight = () => setOpenRight(true);
  const dispatch = useDispatch();
  const { orders, message, isLoading } = useSelector((state) => state.orders);
  const onSearch = (value, _e, info) => console.log(info?.source, value);
  console.log(orders)
  useEffect(() => {
    dispatch(getMyOrders());
  }, []);
  return (
    <div className="w-full bg-gray-100">
      <HelmetTitle title="Store" />
      <div className="bg-white lg:px-10 px-5 py-1 flex justify-between items-center">
        <div>
          <BreadCrumb title="Orders" />
        </div>
        <div className="lg:hidden block" onClick={openDrawerRight}>
          <FaFilter size={25} />
        </div>
      </div>

      {/* drawer */}
      <DrawerFilter openRight={openRight} setOpenRight={setOpenRight} />
      <div className="grid grid-cols-12 capitalize lg:px-10 px-5 py-5 gap-4">
        {/* filter - for only lg screen  , md&sm-screen filter is in DrawerFilter*/}
        <div className="col-span-3 lg:block hidden">
          {/* filter-card :filter by*/}
          <div className="filter-card shadow-2xl border-2">
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
          <div className="filter-card shadow-2xl border-2">
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

        {/* second half */}
        <div className="lg:col-span-9 col-span-12">
          {/* search bar */}
          <div className="">
            <Search
              placeholder="input search text"
              allowClear
              enterButton="Search Orders"
              size="large"
              onSearch={onSearch}
            />
          </div>

          {/* orders cards*/}
          {
            !isLoading ? <div className="grid gap-2 my-4">
            {orders &&
              orders.map((order) =>
                order.orderItems.map((ele) => (
                  <Link key={ele._id} to={`/product/${ele?.product?._id}`}>
                  <OrderCard  order={ele} orderedAt={order.createdAt} />
                  </Link>
                ))
              )}
          </div> : <div className='flex flex-col gap-2 py-4'>
        {[...Array(4)].map((_, index) => (
        <div key={index}>
        <Skeleton.Input active="true" block="false" style={{height:"28vh"}}/>
        </div>
      ))}
        </div>
          }
        </div>
      </div>
    </div>
  );
}

export default Orders;
