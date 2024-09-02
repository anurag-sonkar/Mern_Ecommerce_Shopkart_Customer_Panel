import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Button } from "@material-tailwind/react";

function PaymentSuccess() {
    const { search } = useLocation();
    const queryParams = new URLSearchParams(search);
    const referenceNum = queryParams.get("reference");
 const navigate = useNavigate()


    return (
        <div className="flex items-center justify-center min-h-screen bg-[#EBF0F5] lg:p-10 md:p-10 px-2 py-0">
      <div className="bg-white p-8 rounded-lg shadow-md max-w-sm w-full text-center">
        <div className="bg-[#F8FAF5] rounded-full lg:h-52 lg:w-52 md:h-52 md:w-52 h-48 w-48 mx-auto flex items-center justify-center mb-6">
          <span className="text-[#9ABC66] text-7xl">✓</span>
        </div>
        <h1 className="text-[#88B04B] text-4xl font-extrabold mb-4 font-nunito">Success</h1>
        <p className="text-[#404F5E] text-lg font-nunito">
          We received your purchase request;<br /> we'll be in touch shortly!
        </p>
        <div className='flex justify-center gap-4 my-2'>
        <p className='font-semibold'>Reference No. </p>
        <p className='text-blue-400'>{referenceNum}</p>
        </div>
        <div className='grid grid-cols-2 place-items-center my-5'>
        <Button variant="text" onClick={()=>navigate('/')}>back to home</Button>
        <Button size="sm" onClick={()=>navigate('/contact')}>contact us</Button>

        </div>
      </div>
    </div>
    );
}

export default PaymentSuccess;
