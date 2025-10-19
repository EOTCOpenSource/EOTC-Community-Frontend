"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { Fade, Slide } from "react-awesome-reveal";

interface Channel {
  id: number;
  name: string;
  image: string;
  link: string;
}

export default function CommunityIntro() {
  const t = useTranslations("communityintro");

  const channels: Channel[] = [
    { id: 1, name: "Introduction", image: "/EOTC_Introduction.png", link: "https://t.me/EOTCOpenSource/7" },
    { id: 2, name: "Announcements", image: "/EOTC_Announcement.png", link: "https://t.me/EOTCOpenSource/4" },
    { id: 3, name: "Project-ideas", image: "/EOTC_ProjectIdeas.png", link: "https://t.me/EOTCOpenSource/15" },
    { id: 4, name: "Development", image: "/EOTC_Dev't.png", link: "https://t.me/EOTCOpenSource/17" },
    { id: 5, name: "Design", image: "/EOTC_Design.png", link: "https://t.me/EOTCOpenSource/492" },
    { id: 6, name: "Content", image: "/EOTC_Content.png", link: "https://t.me/EOTCOpenSource/21" },
    { id: 7, name: "Help", image: "/EOTC_Help.png", link: "https://t.me/EOTC_Support" },
    { id: 8, name: "Resources", image: "/EOTC_Resources.png", link: "https://t.me/EOTCOpenSource/26" },
  ];

  return (
    <section className="w-full bg-[#F9FAFB] dark:bg-[#0F0F0F] py-16 px-6 md:px-12 relative transition-colors duration-500">
      <div className="container mx-auto max-w-6xl relative">
        <div className="text-center mb-16">
          <Fade delay={200} duration={1000} triggerOnce fraction={0.5}>
            <h2 className="text-3xl md:text-4xl font-bold text-primary dark:text-[#A01818] mb-4">
              {t("title")}
            </h2>
          </Fade>
          <Fade delay={400} duration={1000} triggerOnce fraction={0.5}>
            <p className="text-lg text-gray-700 dark:text-gray-300">{t("subtitle")}</p>
          </Fade>
        </div>

        {/* Middle Road Separator */}
        <div className="relative mt-12 mb-20">
          <div
            className="absolute hidden md:flex flex-col items-center pt-14 gap-16 bg-primary dark:bg-[#A01818] w-[100px] overflow-hidden rounded-[10px]"
            style={{
              left: "50%",
              top: "-50px",
              bottom: "-50px",
              transform: "translateX(-50%)",
            }}
          >
            {[...Array(4)].map((_, i) => (
              <span key={i} className="w-1 h-[8rem] bg-gray-50 dark:bg-[#1a1a1a]"></span>
            ))}
          </div>

          {/* Channels Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-64 gap-y-12 relative z-10">
            {/* Left column: odd IDs */}
            <div className="space-y-12">
              {channels
                .filter((c) => c.id % 2 !== 0)
                .map((channel, i) => (
                  <Slide direction="left" triggerOnce key={channel.id} delay={i * 150}>
                    <ChannelItem channel={channel} index={i} />
                  </Slide>
                ))}
            </div>

            {/* Right column: even IDs */}
            <div className="space-y-12 mt-12">
              {channels
                .filter((c) => c.id % 2 === 0)
                .map((channel, i) => (
                  <Slide direction="right" triggerOnce key={channel.id} delay={i * 150}>
                    <ChannelItem channel={channel} index={i} />
                  </Slide>
                ))}
            </div>
          </div>
        </div>

        {/* Footer Text */}
        <div className="text-center mt-20">
          <p className="text-lg text-gray-700 dark:text-gray-300">
            {t("outro.line1")} <br /> {t("outro.line2")}
          </p>
        </div>
      </div>
    </section>
  );
}

function ChannelItem({ channel, index }: { channel: Channel; index: number }) {
  const t = useTranslations("communityintro.channels");

  return (
    <div className="flex items-start space-x-6">
      <div className="flex-shrink-0 mt-0">
        <Image
          src={channel.image}
          alt={`${channel.name} icon`}
          width={80}
          height={80}
          className="rounded-lg hover:scale-105 transition-transform duration-200"
        />
      </div>
      <div className="mt-[-20px]">
        <h3 className="text-xl font-bold text-primary dark:text-[#A01818] mb-4">
          <Link
            href={channel.link}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            <span className="md:hidden inline">{index + 1}.</span>
            <span className="hidden md:inline">{channel.id}.</span>{" "}
            {t(`${channel.name}.name`)}
          </Link>
        </h3>
        <p className="text-gray-600 dark:text-gray-300 mt-0.5">
          {t(`${channel.name}.description`)}
        </p>
      </div>
    </div>
  );
}
