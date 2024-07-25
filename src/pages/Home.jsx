import React from 'react'
import img from "../assets/main-banner-1.jpg"
import Carousel from '../components/Carousel'
function Home() {
  return (
    <div className='lg:px-10 px-5 py-8'>
    {/* first section */}
        <section className='grid grid-cols-4 grid-rows-2 gap-2'>
            <div className='lg:col-span-2 row-span-2 rounded-lg overflow-hidden col-span-4'>
                {/* <img src={img} className='h-full w-full object-cover' /> */}
                <Carousel name="Anuag"/>
            </div>
            <div className=' rounded-lg overflow-hidden lg:col-span-1 col-span-2'>
                <img src={img} className='h-full w-full object-cover' />
            </div>
            <div className=' rounded-lg overflow-hidden lg:col-span-1 col-span-2'>
                <img src={img} className='h-full w-full object-cover' />
            </div>
            <div className=' rounded-lg overflow-hidden lg:col-span-1 col-span-2'>
                <img src={img} className='h-full w-full object-cover' />
            </div>
            <div className=' rounded-lg overflow-hidden lg:col-span-1 col-span-2'>
                <img src={img} className='h-full w-full object-cover' />
            </div>

        </section>
    </div>
  )
}

export default Home