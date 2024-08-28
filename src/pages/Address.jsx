import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  createNewAddress,
  deleteAddress,
  getAllAddress,
} from "../features/address/addressSlice";
import { FaDeleteLeft } from "react-icons/fa6";
import axios from "axios";
// import { config } from "../utils/config";

function Address() {
    const dispatch = useDispatch();

  const { addresses, isLoading } = useSelector((state) => state.address);
    const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [line, setLine] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zipcode, setZipcode] = useState("");




  const handleCreateNewAddress = (e) => {
    e.preventDefault();

    if(!line || !city || !state || !zipcode){
      alert("Complete Address is required for shipping order")
      return
    }
    dispatch(
      createNewAddress({
        firstname,
        lastname,
        email,
        phone,
        address: {
          line,
          city,
          state,
          zipcode,
        },
      })
    );
  };

  const handleDeleteAddress = (event , id)=>{
    event.stopPropagation()
    event.preventDefault()
    const response = confirm("confirm to remove address ?")
    if(response){
      dispatch(deleteAddress(id))
    }else{
      return
    }
  }

  const handleResetForm = () => {
    setFirstname("");
    setLastname("");
    setEmail("");
    setPhone("");
    setLine("");
    setCity("");
    setState("");
    setZipcode("");
  };

  useEffect(() => {
    dispatch(getAllAddress());
  }, [dispatch]);
  return (
    <div className="w-full h-max rounded-md px-4 py-8 sticky top-0">
          
            <h2 className="text-2xl font-bold text-gray-800">
              Manage Addresses
            </h2>
            
          <form className="mt-8">
            <div>
              <h3 className="text-base text-gray-800 mb-4">Personal Details</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <input
                  name="firstname"
                  placeholder="First Name"
                  value={firstname}
                  // defaultValue={addresses?.user?.name?.split(" ")[0] || ""}
                  onChange={(e) => setFirstname(e.target.value)}
                  className="px-4 py-3 bg-gray-100 focus:bg-transparent text-gray-800 w-full text-sm rounded-md focus:outline-blue-600"
                />
                <input
                  name="lastname"
                  placeholder="Last Name"
                  value={lastname}
                  // defaultValue={addresses?.user?.name?.split(" ")[1] || ""}
                  onChange={(e) => setLastname(e.target.value)}
                  className="px-4 py-3 bg-gray-100 focus:bg-transparent text-gray-800 w-full text-sm rounded-md focus:outline-blue-600"
                />
                <input
                  name="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="px-4 py-3 bg-gray-100 focus:bg-transparent text-gray-800 w-full text-sm rounded-md focus:outline-blue-600"
                />
                <input
                  name="phone"
                  placeholder="Phone No."
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="px-4 py-3 bg-gray-100 focus:bg-transparent text-gray-800 w-full text-sm rounded-md focus:outline-blue-600"
                />
              </div>
            </div>
            <div className="mt-8">
              <h3 className="text-base text-gray-800 mb-4">Shipping Address</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Address Line"
                  name="line"
                  value={line}
                  onChange={(e) => setLine(e.target.value)}
                  className="px-4 py-3 bg-gray-100 focus:bg-transparent text-gray-800 w-full text-sm rounded-md focus:outline-blue-600"
                />
                <input
                  type="text"
                  placeholder="City"
                  name="city"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  className="px-4 py-3 bg-gray-100 focus:bg-transparent text-gray-800 w-full text-sm rounded-md focus:outline-blue-600"
                />
                <input
                  type="text"
                  placeholder="State"
                  name="state"
                  value={state}
                  onChange={(e) => setState(e.target.value)}
                  className="px-4 py-3 bg-gray-100 focus:bg-transparent text-gray-800 w-full text-sm rounded-md focus:outline-blue-600"
                />
                <input
                  type="text"
                  placeholder="Zip Code"
                  name="zipcode"
                  value={zipcode}
                  onChange={(e) => setZipcode(e.target.value)}
                  className="px-4 py-3 bg-gray-100 focus:bg-transparent text-gray-800 w-full text-sm rounded-md focus:outline-blue-600"
                />
              </div>
              <div className="mt-6 flex items-center justify-end gap-x-6">
                <button
                  type="button"
                  className="text-sm font-semibold leading-6 text-gray-900"
                  onClick={handleResetForm}
                >
                  Reset
                </button>
                <button
                  type="submit"
                  className="rounded-md bg-[#2874F1] px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  onClick={handleCreateNewAddress}
                >
                  Add Address
                </button>
              </div>
              <h2 className="text-base font-semibold leading-7 text-gray-900 mt-8">
                Addresses
              </h2>
              <p className="mt-1 text-sm leading-6 text-gray-600">
                Choose from Existing addresses
              </p>
              <div role="list">
                {addresses?.details?.map((ele, index) => (
                  <label
                    key={index}
                    className="relative flex lg:justify-between md:justify-between justify-center gap-x-6 px-5 py-5 border-solid border-2 border-gray-200 flex-wrap"
                    // onClick={() => setShippingInfo(ele._id)}
                    htmlFor={ele._id}
                    
                  >
                    <div className="flex gap-x-4">
                      <input
                        id={ele._id}
                        defaultChecked={index === 0}
                        name="address"
                        type="radio"
                        className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                      />
                      <div className="min-w-0 flex-auto">
                        <p className="text-sm font-semibold leading-6 text-gray-900">
                          {ele.firstname} {ele.lastname}
                        </p>
                        <p className="mt-1 truncate text-xs leading-5 text-gray-500 max-w-40">
                          {ele.address.line}
                        </p>
                        <p className="mt-1 truncate text-xs leading-5 text-gray-500">
                          {ele.address.zipcode}
                        </p>
                      </div>
                    </div>
                    <div className="sm:flex sm:flex-col sm:items-end">
                      <p className="text-sm leading-6 text-gray-900">
                        Phone: {ele.phone}
                      </p>
                      <p className="text-sm leading-6 text-gray-500">
                        {ele.address.city}
                      </p>
                    </div>
                    <span onClick={(e)=>handleDeleteAddress(e,ele._id)} className="absolute top-1 right-2 w-3 h-3 cursor-pointer transition-all ease-in-out duration-200 shadow-2xl hover:scale-125"><FaDeleteLeft /></span>
                  </label>
                ))}
              </div>
             
              
            </div>
          </form>
        </div>
  )
}

export default Address