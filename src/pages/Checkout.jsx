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
import { getConfig } from "../utils/config";
import { toast, Bounce } from "react-toastify";

function Checkout() {
  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state.cart);
  const { addresses, isLoading } = useSelector((state) => state.address);
  const { user } = useSelector((state) => state.auth);
  // console.log("addresses", addresses);
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [line, setLine] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zipcode, setZipcode] = useState("");

  /* */
  const [shippingInfo, setShippingInfo] = useState(
    addresses?.details?.[0]?._id || ""
  );
  // console.log(shippingInfo);

  const handleAutoFill = () => {
    // lastest address
    const len = addresses?.details?.length - 1;
    const info = addresses?.details[len];

    if (addresses?.user) {
      setFirstname(addresses.user.name.split(" ")[0] || info.firstname);
      setLastname(addresses.user.name.split(" ")[1] || info.lastname);
      setEmail(addresses.user.email || info.email);
    }

    if (info) {
      setPhone(info.phone);
      setLine(info.address.line);
      setCity(info.address.city);
      setState(info.address.state);
      setZipcode(info.address.zipcode);
    }

    if (user && addresses === null) {
      setFirstname(user.name.split(" ")[0] || "");
      setLastname(user.name.split(" ")[1] || "");
      setEmail(user.email || "");
    }
  };

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

  const handleCreateNewAddress = (e) => {
    e.preventDefault();

    if (!line || !city || !state || !zipcode) {
      alert("Complete Address is required for shipping order");
      return;
    }
    const responsePromise = dispatch(
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
    ).unwrap();

    toast.promise(
      responsePromise,
      {
        pending: "Adding Address...",
        success: "Address Added successfully",
        error: `failed!`,
      },
      {
        position: "top-right",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
      }
    );

    responsePromise.then(() => {
      setFirstname("");
      setLastname("");
      setEmail("");
      setPhone("");
      setLine("");
      setCity("");
      setState("");
      setZipcode("");
    });
  };

  const handleDeleteAddress = (event, id) => {
    event.stopPropagation();
    event.preventDefault();
    const response = confirm("confirm to remove address ?");
    if (response) {
      const deleteResponse = dispatch(deleteAddress(id)).unwrap();
      toast.promise(
        deleteResponse,
        {
          pending: "Deleting Address...",
          success: "Address deleted successfully",
          error: `deletion failed!`,
        },
        {
          position: "top-right",
          autoClose: 1500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          transition: Bounce,
        }
      );
    } else {
      return;
    }
  };

  const amount = cart?.cartTotal;
  const checkoutHandler = async () => {
    if (!shippingInfo) {
      alert("please select address");
      return;
    }
    try {
      const {
        data: { order },
      } = await axios.post(
        "https://ecommerce-mern-shopkart-backend.onrender.com/checkout",
        {
          amount,
        },
        getConfig()
      );

      const options = {
        key: "rzp_test_NjNjGfVWdK6cuq",
        amount: order.amount,
        currency: "INR",
        name: "SHOPKART",
        description: "RazorPay",
        image:
          "https://res.cloudinary.com/dj6iduopf/image/upload/f_auto,q_auto/vvl2ogimy15apjt2e9s2",
        order_id: order.id,
        handler: async function (response) {
          const orderData = {
            shippingInfo: shippingInfo,
            paymentInfo: {
              razorpay_order_id: response.razorpay_order_id,
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_signature: response.razorpay_signature,
            },
            orderItems: cart?.products,
            totalPrice: cart?.cartTotal,
            totalPriceAfterDiscount: cart?.cartTotal,
          };

          // Send the payment details to the backend for verification
          const verificationResponse = await axios.post(
            "https://ecommerce-mern-shopkart-backend.onrender.com/paymentVerification",
            orderData,
            getConfig()
          );
          // console.log(verificationResponse);
          if (verificationResponse.data.success) {
            // console.log(verificationResponse.data.redirectUrl);
            window.location.href = verificationResponse.data.redirectUrl;
          } else {
            alert("Payment verification failed.");
          }
        },
        prefill: {
          name: cart?.orderby?.name,
          email: cart?.orderby?.email,
          contact: "9999999999",
        },
        notes: {
          address: "Razorpay Corporate Office",
        },
        theme: {
          color: "#121212",
        },
      };

      const razor = new window.Razorpay(options);
      razor.open();
    } catch (error) {
      // console.error("Error during checkout:", error);
    }
  };

  useEffect(() => {
    dispatch(getAllAddress());
  }, [dispatch]);

  useEffect(() => {
    setShippingInfo(addresses?.details?.[0]?._id || "");
  }, [handleCreateNewAddress]);

  return (
    <div className="font-[sans-serif] bg-white">
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-4 h-full">
        <div className="bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 sm:top-0 lg:min-w-[370px] sm:min-w-[300px]">
          <div className="relative h-full">
            <div className="px-4 py-8 sm:overflow-auto ">
              <div className="space-y-8">
                {cart?.products?.map((ele, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-32 h-28 max-lg:w-24 max-lg:h-24 flex shrink-0 bg-gray-300 rounded-sm">
                      <img
                        src={ele?.product?.images?.[0]?.url}
                        className="w-full object-contain"
                      />
                    </div>
                    <div className="w-full">
                      <h3 className="text-base text-white">
                        {ele.product?.title}
                      </h3>
                      <ul className="text-xs text-gray-300 space-y-2 mt-2">
                        <li className="flex flex-wrap gap-4">
                          Color{" "}
                          <span
                            className="ml-auto w-4 h-4 rounded-full"
                            style={{ backgroundColor: `${ele.color}` }}
                          ></span>
                        </li>
                        <li className="flex flex-wrap gap-4">
                          Quantity <span className="ml-auto">{ele.count}</span>
                        </li>
                        <li className="flex flex-wrap gap-4">
                          Total Price{" "}
                          <span className="ml-auto">₹{ele.product?.price}</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="md:absolute md:left-0 md:bottom-0 bg-gray-800 w-full p-4">
              <h4 className="flex flex-wrap gap-4 text-base text-white">
                Total <span className="ml-auto">₹{cart?.cartTotal}</span>
              </h4>
            </div>
          </div>
        </div>
        <div className="max-w-4xl w-full h-max rounded-md px-4 py-8 sticky top-0">
          <div className="flex justify-between">
            <h2 className="text-2xl font-bold text-gray-800">
              Complete your order
            </h2>
            <button
              type="submit"
              className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              onClick={handleAutoFill}
            >
              Auto fill
            </button>
          </div>
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
                  className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
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
                    className="relative flex justify-between flex-wrap gap-x-6 px-5 py-5 border-solid border-2 border-gray-200"
                    onClick={() => setShippingInfo(ele._id)}
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
                        <p className="mt-1 truncate text-xs leading-5 text-gray-500">
                          {ele.address.line}
                        </p>
                        <p className="mt-1 truncate text-xs leading-5 text-gray-500">
                          {ele.address.zipcode}
                        </p>
                      </div>
                    </div>
                    <div className="lg:px-0 md:px-0 px-8">
                      <p className="text-sm leading-6 text-gray-900">
                        Phone: {ele.phone}
                      </p>
                      <p className="text-sm leading-6 text-gray-500">
                        {ele.address.city}
                      </p>
                    </div>
                    <span
                      onClick={(e) => handleDeleteAddress(e, ele._id)}
                      className="absolute top-1 right-2 w-3 h-3 cursor-pointer transition-all ease-in-out duration-200 shadow-2xl hover:scale-125"
                    >
                      <FaDeleteLeft />
                    </span>
                  </label>
                ))}
              </div>
              <div className="mt-10 space-y-10">
                <fieldset>
                  <legend className="text-sm font-semibold leading-6 text-gray-900">
                    Payment Methods
                  </legend>
                  <p className="mt-1 text-sm leading-6 text-gray-600">
                    Choose One
                  </p>
                  <div className="mt-6 space-y-6">
                    {["Cash", "Card Payment"].map((method, index) => (
                      <div key={index} className="flex items-center gap-x-3">
                        <input
                          id={method.toLowerCase().replace(" ", "")}
                          name="payments"
                          type="radio"
                          className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                        />
                        <label
                          htmlFor={method.toLowerCase().replace(" ", "")}
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
                  onClick={checkoutHandler}
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
