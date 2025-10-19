"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Fade } from "react-awesome-reveal";
import { useTranslations } from "next-intl";

type Project = {
  id: number;
  title: string;
  description: string;
  status: "active" | "completed" | "pending";
  type: "website" | "application" | "other";
  liveUrl?: string;
  mockupImage: string;
};

export default function Projects() {
  const t = useTranslations("projects");

  const [activeTab, setActiveTab] = useState<"all" | "active" | "completed" | "pending">("all");
  const [activeType, setActiveType] = useState<"all" | "website" | "application">("all");
  const [forceShowAll, setForceShowAll] = useState(false);

  const projects: Project[] = [
    {
      id: 1,
      title: "80 Wehado Bible JSON",
      description: "Modern digital Bible in JSON format",
      status: "completed",
      type: "website",
      liveUrl: "https://80-weahadu.vercel.app/",
      mockupImage: "/EOTC_mockup2.png",
    },
    {
      id: 2,
      title: "Community Website",
      description: "EOTC community website, everything about the community.",
      status: "completed",
      type: "website",
      liveUrl: "https://eotc-community-frontend.vercel.app/",
      mockupImage: "/EOTC_mockup.png",
    },
    {
      id: 3,
      title: "Menged Ale",
      description: "Faith-Based Mental Health App for Ethiopian Orthodox Youth.",
      status: "pending",
      type: "application",
      mockupImage: "/BDR_mockup.png",
    },
    {
      id: 4,
      title: "Boru Meda Q&A Platform",
      description: "Collect people's questions and deliver them to our holy church.",
      status: "pending",
      type: "website",
      mockupImage: "/EOTC_mockup.png",
    },
    {
      id: 5,
      title: "80 Weahadu Bible API",
      description: "Backend service for Bible content",
      status: "active",
      type: "application",
      mockupImage: "/EOTC_mockup3.png",
    },
    {
      id: 6,
      title: "80 Weahadu Bible Json",
      description: "Modern digital Bible in JSON format",
      status: "completed",
      type: "website",
      liveUrl: "https://80-weahadu.vercel.app/",
      mockupImage: "/EOTC_mockup2.png",
    },
    {
      id: 7,
      title: "EOTC Admin Dashboard",
      description: "Administration control panel",
      status: "pending",
      type: "application",
      mockupImage: "/BDR_mockup.png",
    },
    {
      id: 8,
      title: "EOTC yemariam Zikr",
      description: "Monthly yemariam Tsiwa for the community",
      status: "pending",
      type: "website",
      mockupImage: "/EOTC_mockup3.png",
    },
  ];

  const filteredProjects = projects.filter((project) => {
    if (forceShowAll) return true;
    const statusMatch = activeTab === "all" || project.status === activeTab;
    const typeMatch = activeType === "all" || project.type === activeType;
    return statusMatch && typeMatch;
  });

  const handleViewAll = () => setForceShowAll(true);

  const handleFilterClick = (type: "status" | "projectType", value: string) => {
    setForceShowAll(false);
    if (type === "status") setActiveTab(value as any);
    else setActiveType(value as any);
  };

  return (
    <section
      id="projects-section"
      className="w-full bg-white dark:bg-[#0F0F0F] transition-colors duration-500 py-16 md:py-24 px-6 md:px-12"
    >
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 md:mb-16">
          <Fade delay={200} duration={1000} triggerOnce fraction={0.5} cascade>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4 transition-colors duration-500">
              {t("ourProjects")}
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto transition-colors duration-500">
              {t("description")}
            </p>
          </Fade>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-6">
          {["allProjects", "active", "completed", "pending"].map((status) => (
            <button
              key={status}
              onClick={() =>
                handleFilterClick("status", status === "allProjects" ? "all" : status)
              }
              className={`px-6 py-2 rounded-full font-medium transition-colors duration-300 ${
                activeTab === (status === "allProjects" ? "all" : status)
                  ? "bg-[#721111] text-white"
                  : "bg-gray-100 dark:bg-[#181818] text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-[#252525]"
              }`}
            >
              {t(`filters.${status}`)}
            </button>
          ))}
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {["allTypes", "website", "application"].map((type) => (
            <button
              key={type}
              onClick={() =>
                handleFilterClick("projectType", type === "allTypes" ? "all" : type)
              }
              className={`px-6 py-2 rounded-full font-medium transition-colors duration-300 ${
                activeType === (type === "allTypes" ? "all" : type)
                  ? "bg-[#721111] text-white"
                  : "bg-gray-100 dark:bg-[#181818] text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-[#252525]"
              }`}
            >
              {t(`filters.${type}`)}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <Fade delay={100} duration={600} triggerOnce fraction={0.5} cascade>
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="bg-white dark:bg-[#181818] rounded-xl border border-gray-200 dark:border-gray-700 hover:shadow-md transition-all overflow-hidden"
              >
                <div className="relative w-full h-48 bg-gray-100 dark:bg-[#252525]">
                  <Image
                    src={project.mockupImage}
                    alt={`${project.title} mockup`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <span className="text-sm font-medium text-[#721111] uppercase tracking-wider">
                      {t(`status.${project.status}`)}
                    </span>
                    <span className="text-sm font-medium text-[#721111] uppercase tracking-wider">
                      {t(`type.${project.type}`)}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4 transition-colors">
                    {project.description}
                  </p>
                  {project.status === "completed" && project.liveUrl && (
                    <Link
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block mt-2 text-[#721111] font-medium hover:underline text-sm"
                    >
                      {t("viewLive")}
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </Fade>
        </div>

        <div className="text-center">
          <button
            onClick={handleViewAll}
            className="bg-[#721111] hover:bg-[#5a0d0d] text-white font-bold py-3 px-8 rounded-full transition-colors inline-block"
          >
            {t("viewAll")}
          </button>
        </div>
      </div>
    </section>
  );
}
