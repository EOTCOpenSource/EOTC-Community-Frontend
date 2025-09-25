'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="w-full bg-[#181818] py-24">
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between">
        
        <div className="flex items-center space-x-4 mb-6 md:mb-0">
          <Image 
            src="/EOTC_logo.png" 
            alt="EOTC Logo" 
            width={60} 
            height={60}
           
          />
          <span className="text-2xl font-bold text-white">EOTC OpenSource</span>
        </div>

        <nav className="flex gap-6 text-white font-medium flex-wrap justify-center md:justify-start">
          <Link href="#" className="hover:opacity-80 transition-colors duration-200">Terms and services</Link>
          <Link href="#" className="hover:opacity-80 transition-colors duration-200">Home</Link>
          <Link href="#" className="hover:opacity-80 transition-colors duration-200">About</Link>
          <Link href="#" className="hover:opacity-80 transition-colors duration-200">Community</Link>
        </nav>

        <div className="mt-6 md:mt-0">
          <Link 
            href="https://t.me/EOTCOpenSource" 
            className="bg-[#721111] hover:bg-[#5a0d0d] text-white font-bold py-2 px-6 rounded-full transition-colors shadow-lg inline-block"
          >
            Join Us
          </Link>
        </div>

      </div>

      <div className="container mx-auto px-6 md:px-12 mt-12 pt-6 border-t border-gray-700">
        <p className="text-gray-400 text-center text-sm">
          &copy; {new Date().getFullYear()} EOTC OpenSource. All rights reserved.
        </p>
      </div>
    </footer>
  );
}