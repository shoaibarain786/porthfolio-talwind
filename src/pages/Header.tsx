"use client";

import React, { useState } from 'react';
import { FaBars, FaTimes } from "react-icons/fa"; // Corrected the FaXmark to FaTimes
import Link from 'next/link';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <div className="bg-gray-900 fixed w-full">
      <div className="flex justify-between items-center h-16 px-4">
        {/* Logo Section */}
        <h2 className="text-red-600 text-xl font-extrabold md:text-2xl lg:text-3xl xl:text-4xl cursor-pointer">
          Shoaib <span className="text-white">Arain.</span>
        </h2>
        
        {/* Mobile Menu Toggle */}
        <div className="md:hidden" onClick={toggleMenu}>
          {isMenuOpen ? (
            <FaTimes className="h-10 w-10 text-white cursor-pointer" />
          ) : (
            <FaBars className="h-10 w-10 text-white cursor-pointer" />
          )}
        </div>

        {/* Large Screen Horizontal Menu */}
        <nav className="hidden md:block text-white">
          <Link href="#home" className="text-xl px-3 hover:text-gray-500">Home</Link>
          <Link href="#about" className="text-xl px-3 hover:text-gray-500">About</Link>
          <Link href="#service" className="text-xl px-3 hover:text-gray-500">Service</Link>
          <Link href="#project" className="text-xl px-3 hover:text-gray-500">Projects</Link>
          <Link href="#contact" className="text-xl px-3 hover:text-gray-500">Contact</Link>
        </nav>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <nav className="bg-gray-900 text-white">
          <div className="flex flex-col space-y-4 p-4">
            <Link href="#home" onClick={toggleMenu}>Home</Link>
            <Link href="#about" onClick={toggleMenu}>About</Link>
            <Link href="#service" onClick={toggleMenu}>Service</Link>
            <Link href="#project" onClick={toggleMenu}>Project</Link>
            <Link href="#contact" onClick={toggleMenu}>Contact</Link>
          </div>
        </nav>
      )}
    </div>
  );
}
