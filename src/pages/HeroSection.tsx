'use client'; // Add this at the top to mark this as a client-side component

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <div id='home' className='bg-bg w-[100%] h-auto pt-32 flex justify-around items-center flex-col p-3 md:flex-row'>
      <div>
        <h1 className='text-white text-[40px] font-extrabold lg:text-[50px]'>
          Hello It&apos;s Me
        </h1>
        <h2 className='text-white text-[40px] font-extrabold lg:text-[65px]'>
          Shoaib Arain
        </h2>
        <h2 className='text-white text-[25px] font-extrabold lg:text-[40px]'>
          and I am <span className='multiple-text text-color'></span>
        </h2>
        <p className='text-white text-[15px] pt-5 lg:text-[20px]'>
          I&apos;m a passionate web developer, skilled in HTML, CSS, and JavaScript. <br /> I have a strong foundation in web design and development.
        </p>
        <Link href="#contact">
          <button className='bg-black text-color text-lg border-2 border-color font-bold py-2 px-6 mt-5 rounded-[30px] hover:bg-color hover:text-black lg:text-xl'>
            Hire Me
          </button>
        </Link>
      </div>
      <div>
        <Image
          src="/png.image.jpg" // Ensure the image path is correct
          alt="Hero image"
          width={800}
          height={300}
          className='rounded-[50%] shadow-2xl shadow-color w-[320px] h-auto pt-10 md:w-[350px] lg:w-[300px] xl:w-[450px]'
        />
      </div>
    </div>
  );
}
