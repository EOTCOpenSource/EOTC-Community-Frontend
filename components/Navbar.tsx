"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { GithubIcon, Moon, Sun } from "lucide-react";
import LanguageSwitcher from "./ui/ChangeLang";
import { useTranslations } from "next-intl";
import { useTheme } from "next-themes";

export default function Navbar() {
  const t = useTranslations("nav");
  const { theme, setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [gitMembers, setGitMembers] = useState(0);

  useEffect(() => {
    async function fetchMembers() {
      try {
        const res = await fetch("https://api.github.com/orgs/EOTCOpenSource");
        const data = await res.json();
        if (data.followers !== undefined) setGitMembers(data.followers);
      } catch (error) {
        console.error("Error fetching GitHub members:", error);
      }
    }

    fetchMembers();

    const handleScroll = () =>
      setScrolled(window.scrollY > window.innerHeight * 0.3);

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 w-full h-[80px] z-50 transition-colors duration-300 ${
        scrolled
          ? "backdrop-blur-md bg-white shadow-md dark:bg-[#0f0f0f] dark:shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex items-center justify-between h-full px-6 md:px-4 lg:px-12">
        <div className="flex items-center gap-4 md:gap-0 justify-between w-full">
          {/* Logo */}
          <div className="flex items-center">
            <Image
              src="/EOTC_logo.png"
              alt="EOTC Logo"
              width={40}
              height={40}
            />
            <span className="text-2xl font-bold text-primary dark:text-gray-100">
              EOTC OpenSource
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex justify-around flex-1 md:pl-10 lg:pl-20 xl:pl-28 items-center">
            <div className="flex gap-4 md:gap-6 lg:gap-8 text-primary font-medium dark:text-gray-200">
              <button
                onClick={() => scrollToSection("projects-section")}
                className="hover:opacity-80 transition"
              >
                {t("projects")}
              </button>
              <button
                onClick={() => scrollToSection("purpose-section")}
                className="hover:opacity-80 transition"
              >
                {t("mission")}
              </button>
            </div>

            <div className="flex items-center justify-evenly lg:mx-5 xl:mx-[4.6rem] text-primary dark:text-gray-200">
              <div className="flex items-center md:gap-4 lg:gap-6">
                <Link
                  href="https://github.com/EOTCOpenSource"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-80 transition flex gap-1"
                >
                  <GithubIcon /> {t("members", { count: gitMembers })}
                </Link>
                <LanguageSwitcher />

                {/* Theme Toggle */}
                {theme === "light" ? (
                  <Moon
                    width={24}
                    height={24}
                    className="hover:opacity-80 transition cursor-pointer"
                    onClick={() => setTheme("dark")}
                  />
                ) : (
                  <Sun
                    width={24}
                    height={24}
                    className="hover:opacity-80 transition cursor-pointer"
                    onClick={() => setTheme("light")}
                  />
                )}
              </div>
            </div>
          </div>

          {/* Join Button */}
          <div className="w-[8rem] hidden md:flex md:w-[15%] lg:w-[12%] justify-end">
            <Link
              href="https://t.me/EOTCOpenSource"
              className="bg-primary hover:bg-primary-600 text-white mx-auto font-bold py-2 px-6 rounded-full transition-colors shadow-lg dark:shadow-primary/30"
            >
              {t("join")}
            </Link>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-800 dark:text-gray-100 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
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
      <div
        className={`md:hidden bg-white dark:bg-[#181818] backdrop-blur-lg shadow-lg dark:shadow-primary/10 transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <div className="container mx-auto px-6 py-4 space-y-4">
          <button
            onClick={() => scrollToSection("projects-section")}
            className="block text-primary dark:text-gray-200 font-medium py-2 px-4 rounded-lg hover:bg-gray-50 dark:hover:bg-[#222] transition-colors w-full text-left"
          >
            {t("projects")}
          </button>
          <button
            onClick={() => scrollToSection("purpose-section")}
            className="block text-primary dark:text-gray-200 font-medium py-2 px-4 rounded-lg hover:bg-gray-50 dark:hover:bg-[#222] transition-colors w-full text-left"
          >
            {t("mission")}
          </button>
          <Link
            href="https://github.com/EOTCOpenSource"
            target="_blank"
            rel="noopener noreferrer"
            className="flex gap-1 text-primary dark:text-gray-200 font-medium py-2 px-4 rounded-lg hover:bg-gray-50 dark:hover:bg-[#222] transition-colors"
            onClick={() => setIsOpen(false)}
          >
            <GithubIcon /> {t("members", { count: gitMembers })}
          </Link>

          <div className="flex items-center space-x-6 py-2 px-4">
            <LanguageSwitcher />
            {theme === "light" ? (
              <Moon
                width={24}
                height={24}
                className="hover:opacity-80 transition cursor-pointer"
                onClick={() => setTheme("dark")}
              />
            ) : (
              <Sun
                width={24}
                height={24}
                className="hover:opacity-80 transition cursor-pointer"
                onClick={() => setTheme("light")}
              />
            )}
          </div>

          <div className="pt-2 border-t border-gray-100 dark:border-gray-700">
            <Link
              href="https://t.me/EOTCOpenSource"
              className="block bg-primary text-white font-bold py-3 px-6 rounded-full text-center hover:bg-[#5a0d0d] transition-colors dark:shadow-primary/30"
              onClick={() => setIsOpen(false)}
            >
              {t("join")}
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
