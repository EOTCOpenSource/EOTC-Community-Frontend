"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";

export default function Purpose() {
  const t = useTranslations("purpose"); 

  const purposes = [
    {
      icon: "/EOTC_mission.png",
      titleKey: "missionTitle",
      descKey: "missionDescription",
    },
    {
      icon: "/EOTC_goal.png",
      titleKey: "goalTitle",
      descKey: "goalDescription",
    },
    {
      icon: "/EOTC_group.png",
      titleKey: "joinTitle",
      descKey: "joinDescription",
    },
  ];

  return (
    <section
      id="purpose-section"
      className="w-full bg-white py-16 md:py-24 px-6 md:px-12"
    >
      <div className="container mx-auto max-w-6xl">
        {/* Heading */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 tracking-tight">
            {t("heading")}
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 font-normal max-w-2xl mx-auto">
            {t("subheading")}
          </p>
        </div>

        {/* Purpose Cards */}
        <div className="flex flex-col md:flex-row gap-6 md:gap-8 justify-center items-stretch">
          {purposes.map((item, idx) => (
            <div
              key={idx}
              className="flex-1 bg-white rounded-xl p-8 flex flex-col items-center text-center border border-gray-200 hover:shadow-md transition-all"
            >
              <div className="relative mb-6">
                <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-white border-2 border-[#721111] flex items-center justify-center">
                  <div className="w-12 h-12 md:w-14 md:h-14 relative">
                    <Image
                      src={item.icon}
                      alt={t(item.titleKey)}
                      width={56}
                      height={56}
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
                {t(item.titleKey)}
              </h3>
              <p className="text-gray-600 mb-6 flex-grow whitespace-pre-line">
                {t(item.descKey)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
