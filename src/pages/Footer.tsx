import React from 'react'
import Link from 'next/link';
import { FaArrowUp } from "react-icons/fa";

export default function Footer() {
    return (
        <div className='flex justify-around items-center bg-black text-white py-5 flex-col-reverse md:flex-row'>
            <p className='text-[12px] md:text-[20px]'>
                Copyright &copy; 2024 by Muhammad Ali | All rights reserved.
            </p>
            <div >
                <Link href="#home" className=" text-color cursor-pointer flex mb-5 border rounded-full border-color p-2.5 gap-3 " ><FaArrowUp size={20} />Go To Home</Link>
            </div>
        </div>
    )
}