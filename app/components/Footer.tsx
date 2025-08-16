'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="w-full bg-[#181818] py-32">
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between">
        
        {/* Left: Logo and brand */}
        <div className="flex items-center space-x-4 mb-6 md:mb-0">
          <Image 
            src="/EOTC_logo.png" 
            alt="EOTC Logo" 
            width={40} 
            height={40}
          />
          <span className="text-2xl font-bold text-white">EOTC OpenSource</span>
        </div>

        {/* Middle: Navigation links */}
        <nav className="flex gap-6 text-white font-medium flex-wrap justify-center md:justify-start">
          <Link href="#" className="hover:opacity-80 transition-colors duration-200">Terms and services</Link>
          <Link href="#" className="hover:opacity-80 transition-colors duration-200">Home</Link>
          <Link href="#" className="hover:opacity-80 transition-colors duration-200">About</Link>
          <Link href="#" className="hover:opacity-80 transition-colors duration-200">Community</Link>
        </nav>

        {/* Right: Join Us button */}
        <div className="mt-6 md:mt-0">
          <Link 
            href="#" 
            className="bg-[#721111] hover:bg-[#5a0d0d] text-white font-bold py-2 px-6 rounded-full transition-colors shadow-lg"
          >
            Join Us
          </Link>
        </div>

      </div>
    </footer>
  );
}
