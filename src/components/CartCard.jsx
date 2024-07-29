import React, { useState } from 'react'

function CartCard() {
    const [count, setCount] = useState(0);

  const setCounter = (operator) => {
    if (operator === "-" && count <= 0) return;
    else if (operator === "+") setCount((prev) => prev + 1);
    else if (operator === "-") setCount((prev) => prev - 1);
  };
  return (
    <div className="border-b py-4 grid grid-cols-6 lg:grid-flow-col grid-flow-row items-center gap-4">
          <div className="col-span-2">
            <img
              src="https://images.unsplash.com/photo-1629367494173-c78a56567877?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=927&q=80"
              className="lg:w-60 lg:min-h-40 md:w-60 md:min-h-40  w-28 h-24 object-cover"
            />
          </div>

          <div className="col-span-4 flex flex-col gap-2">
            <div className="max-w-96 lg:text-sm text-xs">
              BOROPLUS Antiseptic + Moisturising Soap - Neem, Tulsi & Aloe Vera
              (6 x 125 g)
            </div>
            <div className="flex gap-2 items-center">
              <p className="text-lg font-semibold">$26</p>
              <p className="line-through text-blue-gray-400">$30</p>
              <p className="text-[#448E3C] font-semibold lg:text-lg text-xs">
                10% Off
              </p>
              <p className="bg-[#448E3C] text-white text-xs rounded-sm px-1 py-[2px] mx-6">
                Holi200
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-2 justify-center col-span-6 lg:col-span-1">
            <div className="flex justify-center items-center px-0 rounded-xl">
              <div
                className="text-[#2874F0] text-2xl font-normal border bg-[#FAFAFA] px-2 rounded-sm cursor-pointer"
                onClick={() => setCounter("-")}
              >
                -
              </div>
              <div
                type="text"
                className="w-10 text-2xl text-center px-2 border"
              >
                {count}
              </div>
              <div
                className="text-[#2874F0] text-2xl font-normal border bg-[#FAFAFA] px-2 rounded-sm cursor-pointer"
                onClick={() => setCounter("+")}
              >
                +
              </div>
            </div>
          </div>
        </div>
  )
}

export default CartCard