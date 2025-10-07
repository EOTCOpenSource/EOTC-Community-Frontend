"use client";

import Link from "next/link";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { Linkedin, Github } from "lucide-react";

export default function Footer() {
  const t = useTranslations("footer");

  return (
    <footer className="w-full bg-[#181818] py-24">
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between">
        <div className="flex items-center space-x-4 mb-6 md:mb-0">
          <Image
            src="/EOTC_logo.png"
            alt={t("logoAlt")}
            width={60}
            height={60}
          />
          <span className="text-2xl font-bold text-white">{t("brand")}</span>
        </div>

        <nav className="flex gap-6 text-white font-medium flex-wrap justify-center md:justify-start">
          <Link
            href="/terms"
            className="hover:opacity-80 transition-colors duration-200"
          >
            {t("terms")}
          </Link>
          <Link
            href="/"
            className="hover:opacity-80 transition-colors duration-200"
          >
            {t("home")}
          </Link>
          <Link
            href="/about"
            className="hover:opacity-80 transition-colors duration-200"
          >
            {t("about")}
          </Link>
          <Link
            href="https://t.me/EOTCOpenSource"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-80 transition-colors duration-200"
          >
            {t("community")}
          </Link>
        </nav>

        <div className="mt-6 md:mt-0 flex items-center gap-6">
          <Link
            href="https://www.linkedin.com/company/eotc-open-source/?viewAsMember=true"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-400 transition"
            aria-label="LinkedIn"
          >
            <Linkedin size={28} />
          </Link>

          <Link
            href="https://github.com/EOTCOpenSource"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-400 transition"
            aria-label="GitHub"
          >
            <Github size={28} />
          </Link>

          <Link
            href="https://t.me/EOTCOpenSource"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#721111] hover:bg-[#5a0d0d] text-white font-bold py-2 px-6 rounded-full transition-colors shadow-lg inline-block"
          >
            {t("join")}
          </Link>
        </div>
      </div>

      <div className="container mx-auto px-6 md:px-12 mt-12 pt-6 border-t border-gray-700">
        <p className="text-gray-400 text-center text-sm">
          &copy; {new Date().getFullYear()} {t("brand")}. {t("rights")}
        </p>
      </div>
    </footer>
  );
}
