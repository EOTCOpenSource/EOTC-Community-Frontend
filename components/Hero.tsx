"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { Fade } from "react-awesome-reveal";

export default function Hero() {
  const t = useTranslations("hero");

  return (
    <section className="relative w-full bg-gray-50 pt-24 min-h-screen pb-16 overflow-hidden flex flex-col justify-center">
      {/* Mobile background blob */}
      <div
        className="absolute md:hidden w-[100px] left-1/2 transform -translate-x-1/2 top-0 bottom-0 z-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(114, 17, 17, 0) 0%, rgba(114, 17, 17, 0.904) 29.81%, #721111 59.14%, rgba(114, 17, 17, 0) 100%)",
        }}
      ></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Mobile */}
        <div className="md:hidden flex flex-col items-center">
          <div className="text-center max-w-2xl space-y-6">
            <h1 className="text-4xl font-bold leading-tight">
              <Fade
                cascade
                delay={200}
                duration={1000}
                fraction={0.5}
                triggerOnce
              >
                <span className="block text-primary">
                  {t("Faith Meets Code")}
                </span>
                <span className="block text-primary">
                  {t("Culture Meets Innovation")}
                </span>
              </Fade>
            </h1>
          </div>

          <div className="relative my-8 w-full max-w-[300px] min-w-[200px]">
            <div className="relative z-10">
              <Image
                src="/EOTC_church.png"
                alt="EOTC Church"
                width={600}
                height={600}
                className="mx-auto"
              />
            </div>
          </div>

          <div className="text-center max-w-2xl">
            <p className="text-lg text-[#000000] mb-6">
              {t("mobileDescription")}
            </p>
            <Link
              href="https://t.me/EOTCOpenSource"
              className="mt-8 bg-primary hover:bg-primary-600 text-white font-bold py-3 px-8 rounded-full transition-colors inline-block"
            >
              {t("joinButton")}
            </Link>
          </div>
        </div>

        {/* Desktop */}
        <div className="hidden md:grid md:grid-cols-2 md:gap-8 items-center">
          <div className="absolute pointer-events-none -left-10 top-1/2 -translate-y-1/2 -z-12 w-[70vw] h-[70vw] md:w-[40vw] md:h-[40vw] rounded-full bg-[#72111108]" />
          <div className="text-center md:text-left max-w-xl space-y-6 md:mr-8 flex-1">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mt-8">
              <Fade delay={200} duration={1000} cascade triggerOnce>
                <span className="block text-gray-800 pt-5">
                  {t("Faith Meets Code")}
                </span>
                <span className="block text-primary mb-5">
                  {t("Culture Meets Innovation")}
                </span>
              </Fade>
            </h1>

            <Fade delay={940} duration={1000} cascade triggerOnce>
              <p className="text-base sm:text-lg md:text-xl text-gray-600 py-4">
                {t("desktopDescription")}
              </p>
            </Fade>

            <Link
              href="https://t.me/EOTCOpenSource"
              className="bg-primary hover:bg-primary-600 text-white font-bold py-4 px-10 my-8 rounded-full transition-colors inline-block"
            >
              {t("joinButtonDesktop")}
            </Link>
          </div>

          <div className="hidden md:flex flex-1 justify-center items-center mb-8 md:mb-0">
            <div className="relative w-full flex flex-col items-center justify-center">
              <div className="relative z-20 flex justify-center items-end w-full">
                <Image
                  src="/EOTC_church.png"
                  alt="EOTC Church"
                  width={400}
                  height={400}
                  className="mx-auto w-full max-w-lg md:max-w-xl lg:max-w-2xl xl:max-w-3xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative blob bar - full height of hero section, starts below Navbar */}
      <div
        className="blob-bar absolute top-24 right-56 hidden md:block bg-primary z-0 mx-auto h-full"
        style={{ width: "16vw", height: "calc(100% - 6rem)" }}
      >
        <span
          style={{
            borderRadius: "50% 50% 0 0",
            boxShadow: "0px -5px 8px white",
          }}
          className="absolute left-0 bottom-0 w-full h-16 rounded-[1rem 1rem] bg-gray-100 block"
        ></span>
      </div>

      <div
        className="hidden md:block bg-red-500 absolute left-0 bottom-0 w-full h-14 pointer-events-none"
        style={{
          background:
            "linear-gradient(180deg, rgba(255, 255, 255, 0.2) 4.08%, #FFFFFF 14.95%)",
        }}
      />
    </section>
  );
}
