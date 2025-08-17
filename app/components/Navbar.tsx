'use client';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="fixed top-0 left-0 right-0 w-full h-[80px] bg-white shadow-md z-50">
      <div className="container mx-auto flex items-center justify-between h-full px-6 md:px-12">
        <div className="flex items-center space-x-4 md:space-x-[79px]">
          <Image src="/EOTC_logo.png" alt="EOTC Logo" width={40} height={40} />
          <span className="text-2xl font-bold text-[#721111]">EOTC OpenSource</span>
        </div>

        <div className="hidden md:flex items-center space-x-[79px]">
  <div className="flex space-x-8 text-[#721111] font-medium">
    <Link href="#" className="hover:opacity-80 transition">Projects</Link>
    <Link href="#" className="hover:opacity-80 transition">Our Mission</Link>
  </div>

  <div className="flex-1 flex justify-center">
    <div className="flex items-center w-[301] px-16 py-7 pl-11 bg-[#721111] text-white space-x-4">
      <Link href="#" className="hover:opacity-80 transition">GitHub</Link>
      <Image src="/EOTC_languages.png" alt="Languages" width={24} height={24} />
      <Image src="/Toggle.png" alt="Toggle" width={24} height={24} />
    </div>
  </div>  

  <Link href="#" className="bg-[#721111] hover:bg-[#5a0d0d] text-white font-bold py-2 px-6 rounded-full transition-colors shadow-lg">
    Join us
  </Link>
</div>

        <button className="md:hidden text-gray-800" onClick={() => setIsOpen(!isOpen)}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden px-6 pb-4 space-y-4">
          <Link href="#" className="block text-[#721111] font-medium">Projects</Link>
          <Link href="#" className="block text-[#721111] font-medium">Our Mission</Link>
          <Link href="#" className="block bg-[#721111] text-white font-medium py-2 px-4 rounded">GitHub</Link>
          <div className="flex items-center space-x-4">
            <Image src="/EOTC_languages.png" alt="Languages" width={24} height={24} />
            <Image src="/Toggle.png" alt="Toggle" width={24} height={24} />
          </div>
          <Link href="#" className="block bg-[#721111] text-white font-bold py-2 px-6 rounded-full">Join us</Link>
        </div>
      )}
    </nav>
  );
}