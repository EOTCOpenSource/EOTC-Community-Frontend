"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { Fade, Slide } from "react-awesome-reveal";

interface Channel {
  id: number;
  name: string;
  description: string;
  image: string;
  link: string;
}

export default function CommunityIntro() {
  const t = useTranslations("communityintro");
  const channels: Channel[] = [
    {
      id: 1,
      name: "Introduction",
      description: "Say hello here. Tell us your name and why you joined.",
      image: "/EOTC_Introduction.png",
      link: "https://t.me/EOTCOpenSource/7",
    },
    {
      id: 3,
      name: "Project-ideas",
      description: "Share your new ideas for projects here.",
      image: "/EOTC_ProjectIdeas.png",
      link: "https://t.me/EOTCOpenSource/15",
    },
    {
      id: 5,
      name: "Design or UI/UX",
      description: "Share designs and logos and UI design here.",
      image: "/EOTC_Design.png",
      link: "https://t.me/EOTCOpenSource/492",
    },
    {
      id: 7,
      name: "Help and Questions",
      description: "If you need help, ask here.",
      image: "/EOTC_Help.png",
      link: "https://t.me/EOTC_Support",
    },
    {
      id: 2,
      name: "Announcements",
      description: "Important news from the admins.",
      image: "/EOTC_Announcement.png",
      link: "https://t.me/EOTCOpenSource/4",
    },
    {
      id: 4,
      name: "Development",
      description: "Talk about code and computers here.",
      image: "/EOTC_Dev't.png",
      link: "https://t.me/EOTCOpenSource/17",
    },
    {
      id: 6,
      name: "Content and Writing",
      description: "For working on text and translation.",
      image: "/EOTC_Content.png",
      link: "https://t.me/EOTCOpenSource/21",
    },
    {
      id: 8,
      name: "Faith and Resources",
      description: "Share links about our faith here.",
      image: "/EOTC_Resources.png",
      link: "https://t.me/EOTCOpenSource/26",
    },
  ];

  return (
    <section className="w-full bg-[#F9FAFB] py-16 px-6 md:px-12 relative">
      <div className="container mx-auto max-w-6xl relative">
        <div className="text-center mb-16">
          <Fade
            delay={200} // Wait 200ms before starting
            duration={1000} // Animation lasts 1 second
            triggerOnce // Only animate once
            fraction={0.5} // Start animation when element is 50% visible
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Welcome to the EOTC OpenSource Telegram Community!
            </h2>
          </Fade>
          <Fade delay={400} duration={1000} triggerOnce fraction={0.5}>
            <p className="text-lg text-gray-700">
              Our goal is to make free tools, like apps and websites, to help
              the Church and its members.
            </p>
          </Fade>
        </div>

        <div className="relative mt-12 mb-20">
          {/* {middle road like separator for desktop users only} */}
          <div
            className="absolute hidden md:flex flex-col items-center pt-14 gap-16 bg-primary w-[100px] overflow-hidden rounded-[10px]"
            style={{
              left: "50%",
              top: "-50px",
              bottom: "-50px",
              transform: "translateX(-50%)",
            }}
          >
            <span className="w-1 h-[8rem] bg-gray-50"></span>
            <span className="w-1 h-[8rem] bg-gray-50"></span>
            <span className="w-1 h-[8rem] bg-gray-50"></span>
            <span className="w-1 h-[8rem] bg-gray-50"></span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-64 gap-y-12 relative z-10">
            <div className="space-y-12">
              {channels.map((channel, index) => {
                if (channel.id % 2 == 0) {
                  return null;
                }

                return (
                  <Slide direction="left" triggerOnce key={channel.id}>
                    <ChannelItem channel={channel} index={index} />
                  </Slide>
                );
              })}
            </div>

            <div className="space-y-12 mt-12">
              {channels.map((channel, index) => {
                if (channel.id % 2 !== 0) {
                  return null;
                }

                return (
                  <Slide direction="right" triggerOnce key={channel.id}>
                    <ChannelItem channel={channel} index={index} />
                  </Slide>
                );
              })}
            </div>
          </div>
        </div>

        <div className="text-center mt-20">
          <p className="text-lg text-gray-700">
            {t("We Excited")}
            <br />
            {t("First please")}
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
          alt={channel.name}
          width={80}
          height={80}
          className="rounded-lg hover:scale-105 transition-transform duration-200"
        />
      </div>
      <div className="mt-[-20px]">
        <h3 className="text-xl font-bold text-primary mb-4">
          <Link
            href={channel.link}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            <span className="md:hidden inline">{index + 1}</span>
            <span className="md:inline hidden">{channel.id}</span>
             .
            {" "}
            {t(`${channel.name}.name`)}
          </Link>
        </h3>
        <p className="text-gray-600 mt-0.5">
          {t(`${channel.name}.description`)}
        </p>
      </div>
    </div>
  );
}
