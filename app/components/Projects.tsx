'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

type Project = {
  id: number;
  title: string;
  description: string;
  status: 'active' | 'completed' | 'pending';
  type: 'website' | 'application' | 'other';
  liveUrl?: string;
  mockupImage: string;
};

export default function Projects() {
  const [activeTab, setActiveTab] = useState<'all' | 'active' | 'completed' | 'pending'>('all');
  const [activeType, setActiveType] = useState<'all' | 'website' | 'application'>('all');
  const [forceShowAll, setForceShowAll] = useState(false);

  const projects: Project[] = [
    {
      id: 1,
      title: "80 Wehado Bible JSON",
      description: "Modern digital Bible in JSON format",
      status: "completed",
      type: "website",
      liveUrl: "https://80-weahadu.vercel.app/",
      mockupImage: "/EOTC_mockup2.png"
    },
    {
      id: 2,
      title: "Community Website",
      description: "EOTC community website, everything about the community.",
      status: "completed",
      type: "website",
      liveUrl: "https://eotc-community-frontend.vercel.app/",
      mockupImage: "/EOTC_mockup.png"
    },
    {
      id: 3,
      title: "Menged Ale",
      description: "Faith-Based Mental Health App for Ethiopian Orthodox Youth.",
      status: "pending",
      type: "application",
      mockupImage: "/BDR_mockup.png"
    },
    {
      id: 4,
      title: "Boru Meda Q&A Platform",
      description: "Collect people's questions and deliver them to our holy church.",
      status: "pending",
      type: "website",
      mockupImage: "/EOTC_mockup.png"
    },
    {
      id: 5,
      title: "80 Weahadu Bible API",
      description: "Backend service for Bible content",
      status: "active",
      type: "application",
      mockupImage: "/EOTC_mockup3.png"
    },
    {
      id: 6,
      title: "80 Weahadu Bible Json",
      description: "Modern digital Bible in JSON format",
      status: "completed",
      type: "website",
      liveUrl: "https://80-weahadu.vercel.app/",
      mockupImage: "/EOTC_mockup2.png"
    },
    {
      id: 7,
      title: "EOTC Admin Dashboard",
      description: "Administration control panel",
      status: "pending",
      type: "application",
      mockupImage: "/BDR_mockup.png"
    },
    {
      id: 8,
      title: "EOTC yemariam Zikr",
      description: "monlthly yemariam Tsiwa for the community",
      status: "pending",
      type: "website",
      mockupImage: "/EOTC_mockup3.png"
    }
  ];

  const filteredProjects = projects.filter(project => {
    if (forceShowAll) return true; 
    const statusMatch = activeTab === 'all' || project.status === activeTab;
    const typeMatch = activeType === 'all' || project.type === activeType;
    return statusMatch && typeMatch;
  });

  const handleViewAll = () => {
    setForceShowAll(true);
    
  };
  const handleFilterClick = (type: 'status' | 'projectType', value: string) => {
  setForceShowAll(false);
  if (type === 'status') {
    setActiveTab(value as 'all' | 'active' | 'completed' | 'pending');
  } else {
    setActiveType(value as 'all' | 'website' | 'application');
  }
};

  return (
    <section id='projects-section' className="w-full bg-white py-16 md:py-24 px-6 md:px-12">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            OUR PROJECTS
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto">
  Here&apos;s what we&apos;re building right now. Your help is needed!
</p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-6">
          <button
            onClick={() => handleFilterClick('status', 'all')}
            className={`px-6 py-2 rounded-full font-medium ${activeTab === 'all' ? 'bg-[#721111] text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
          >
            All Projects
          </button>
          <button
            onClick={() => handleFilterClick('status', 'active')}
            className={`px-6 py-2 rounded-full font-medium ${activeTab === 'active' ? 'bg-[#721111] text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
          >
            Active
          </button>
          <button
            onClick={() => handleFilterClick('status', 'completed')}
            className={`px-6 py-2 rounded-full font-medium ${activeTab === 'completed' ? 'bg-[#721111] text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
          >
            Completed
          </button>
          <button
            onClick={() => handleFilterClick('status', 'pending')}
            className={`px-6 py-2 rounded-full font-medium ${activeTab === 'pending' ? 'bg-[#721111] text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
          >
            Pending
          </button>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <button
            onClick={() => handleFilterClick('projectType', 'all')}
            className={`px-6 py-2 rounded-full font-medium ${activeType === 'all' ? 'bg-[#721111] text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
          >
            All Types
          </button>
          <button
            onClick={() => handleFilterClick('projectType', 'website')}
            className={`px-6 py-2 rounded-full font-medium ${activeType === 'website' ? 'bg-[#721111] text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
          >
            Website
          </button>
          <button
            onClick={() => handleFilterClick('projectType', 'application')}
            className={`px-6 py-2 rounded-full font-medium ${activeType === 'application' ? 'bg-[#721111] text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
          >
            Application
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {filteredProjects.map((project) => (
            <div key={project.id} className="bg-white rounded-xl border border-gray-200 hover:shadow-md transition-all overflow-hidden">

              <div className="relative w-full h-48 bg-gray-100">
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
                  {project.status}
                </span>

                  <span className="text-sm font-medium text-[#721111] uppercase tracking-wider">
                  {project.type}
                </span>

                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                
                {project.status === 'completed' && project.liveUrl && (
                  <Link 
                    href={project.liveUrl} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-2 text-[#721111] font-medium hover:underline text-sm"
                  >
                    View Live Project →
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button onClick={handleViewAll} className="bg-[#721111] hover:bg-[#5a0d0d] text-white font-bold py-3 px-8 rounded-full transition-colors inline-block">
            VIEW ALL PROJECTS
          </button>
        </div>
      </div>
    </section>
  );
}