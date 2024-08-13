import React from 'react'
import { Link } from 'react-router-dom'

function Profile() {
  return (
    <div className='px-10 py-5 grid grid-col-span-12 grid-flow-col gap-4  bg-gray-100'>
      {/* first col */}
      <div className='rounded-sm grid gap-3 '>
        {/* first col - first row */}
        <div className='bg-white flex px-4 py-2 gap-4 items-center'>
          <div>
            <img src='../src/assets/profile-fallback.svg' />
          </div>
          <div>
            <p className='text-sm'>Hello,</p>
            <p className='font-semibold'>Anurag Sonkar</p>
          </div>
        </div>
        {/* first col - second row */}
        <div className='bg-white px-4 py-2'>
          
        </div>
        {/* first col - third row*/}
        <div className='bg-white px-4 py-2 capitalize grid gap-2'>
        <h1 className='font-semibold '>frequency visited:</h1>
        <div className='flex text-sm text-gray-500 gap-4'>
          <Link to="" className='text-xs block' >track order</Link>
          <Link to="" className='text-xs block' >help center</Link>
        </div>
        </div>

      </div>

      {/* second-col */}
      <div className='col-span-8 bg-white shadow-xl rounded-sm'>
        5
      </div>

    </div>
  )
}

export default Profile