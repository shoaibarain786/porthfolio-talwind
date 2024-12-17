import React from 'react'

export default function service() {
  return (
    <div id='service' className='bg-black w-[100%] h-auto '>
      <h2 className='text-white text-[40px] font-extrabold text-center py-20'>Our  <span className='text-color'>Services</span></h2>
      <div className='flex justify-around items-center flex-wrap mx-8 gap-10 lg:flex-nowrap'>
        <div className='text-white text-center border-2 border-color rounded-3xl p-5 py-10 '>
            <h3 className='text-3xl font-extrabold py-7'>Web Development</h3>
            <p className='pb-5'>I specialize in creating high-quality websites and web applications using HTML, CSS, and JavaScript. I offer custom design and development services.</p>
            <button className='py-3 px-10 bg-color mt-5 rounded-2xl hover:bg-white hover:text-color'>Read More</button>
        </div>
        <div className='text-white text-center border-2 border-color rounded-3xl p-5 py-10'>
            <h3 className='text-3xl font-extrabold py-7'>UX-UI Design</h3>
            <p  className='pb-5'>I am skilled in creating user-friendly and intuitive designs for web applications and websites. I offer personalized design and development services.</p>
            <button className='py-3 px-10 bg-color mt-5 rounded-2xl hover:bg-white hover:text-color'>Read More</button>
        </div>
        <div className='text-white text-center border-2 border-color rounded-3xl p-10'>
            <h3 className='text-3xl font-extrabold py-7'>Digital Marketing</h3>
            <p  className='pb-5'>I specialize in creating engaging and effective digital marketing campaigns for businesses. I offer personalized marketing and development services. </p>
            <button className='py-3 px-10 bg-color mt-5 rounded-2xl hover:bg-white hover:text-color'>Read More</button>
        </div>
      </div>
    </div>
  )
}