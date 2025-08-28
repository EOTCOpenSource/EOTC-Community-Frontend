'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Languages, Moon } from 'lucide-react';


export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight * 0.3) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);




  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };
  
  return (
    <nav className={`fixed top-0 ${scrolled ? "backdrop-blur-md bg-[#ffffff25]  shadow-md" : ""} left-0 right-0 w-full h-[80px] z-50`}>
      <div className=" mx-auto flex items-center justify-between h-full px-6 md:px-4 lg:px-12">
        <div className="flex items-center">
          <Image src="/EOTC_logo.png" alt="EOTC Logo" width={40} height={40} />
          <span className="text-2xl font-bold text-primary">EOTC OpenSource</span>
        </div>

        <div className="hidden md:flex items-center lg:gap-24 md:gap-20 h-full">
          <div className="flex gap-8 text-primary font-medium">
            <button 
              onClick={() => scrollToSection('projects-section')} 
              className="hover:opacity-80 transition cursor-pointer"
            >
              Projects
            </button>
            <button 
              onClick={() => scrollToSection('purpose-section')} 
              className="hover:opacity-80 transition cursor-pointer"
            >
              Our Mission
            </button>
          </div>

          <div className="flex items-center justify-center h-full mx-6">
            <div className={`flex items-center gap-6 ${scrolled ? "text-primary" :"text-white"}`}>
              <Link href="https://github.com/EOTCOpenSource" className="hover:opacity-80 transition">GitHub</Link>
              <Languages width={24} height={24} className="hover:opacity-80 transition cursor-pointer"/>
              <Moon width={24} height={24} className="hover:opacity-80 transition cursor-pointer"/>              
            </div>
          </div>

          <Link href="https://t.me/EOTCOpenSource" className="bg-primary text-white font-bold py-2 px-6 rounded-full transition-colors shadow-lg">
            Join us
          </Link>
        </div>

        <button 
          className="md:hidden text-gray-800 focus:outline-none" 
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} 
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden bg-white backdrop-blur-lg shadow-lg transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
        <div className="container mx-auto px-6 py-4 space-y-4">
          <button 
            onClick={() => scrollToSection('projects-section')} 
            className="block text-primary font-medium py-2 px-4 rounded-lg hover:bg-gray-50 transition-colors w-full text-left"
          >
            Projects
          </button>
          <button 
            onClick={() => scrollToSection('purpose-section')} 
            className="block text-primary font-medium py-2 px-4 rounded-lg hover:bg-gray-50 transition-colors w-full text-left"
          >
            Our Mission
          </button>
          <Link 
            href="https://github.com/EOTCOpenSource" 
            className="block text-primary font-medium py-2 px-4 rounded-lg hover:bg-gray-50 transition-colors"
            onClick={() => setIsOpen(false)}
          >
            GitHub
          </Link>
          
          <div className="flex items-center space-x-6 py-2 px-4">
            <div className="flex items-center space-x-2">
              <Image 
                src="/language_mobile.png" 
                alt="Languages" 
                width={24} 
                height={24}
              />
            </div>
            <div className="flex items-center space-x-2">
              <Image 
                src="/theme_mobile.png" 
                alt="Theme" 
                width={24} 
                height={24}
              />
            </div>
          </div>
          
          <div className="pt-2 border-t border-gray-100">
            <Link 
              href="https://t.me/EOTCOpenSource" 
              className="block bg-primary text-white font-bold py-3 px-6 rounded-full text-center hover:bg-[#5a0d0d] transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Join us
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}