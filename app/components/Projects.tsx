'use client';
import { useState } from 'react';

type Project = {
  id: number;
  title: string;
  description: string;
  status: 'active' | 'completed' | 'pending';
};

export default function Projects() {
  const [activeTab, setActiveTab] = useState<'all' | 'active' | 'completed' | 'pending'>('all');

  const projects: Project[] = [
    {
      id: 1,
      title: "80 Wehado Bible JSON",
      description: "Modern dashboard design for e-commerce platforms",
      status: "active"
    },
    {
      id: 2,
      title: "Community Website",
      description: "User-friendly banking app interface design",
      status: "completed"
    },
    {
      id: 3,
      title: "EOTC APP",
      description: "Responsive portfolio built with React",
      status: "pending"
    },
    {
      id: 4,
      title: "EOTC",
      description: "Modern landing page with animations",
      status: "pending"
    },
    {
      id: 5,
      title: "80 Weahadu Bible json",
      description: "Modern dashboard design for e-commerce platforms",
      status: "active"
    },
    {
      id: 6,
      title: "Community Website",
      description: "User-friendly banking app interface design",
      status: "completed"
    },
    {
      id: 7,
      title: "EOTC APP",
      description: "Responsive portfolio built with React",
      status: "pending"
    },
    {
      id: 8,
      title: "EOTC",
      description: "Modern landing page with animations",
      status: "pending"
    }
  ];

  const filteredProjects = activeTab === 'all' 
    ? projects 
    : projects.filter(project => project.status === activeTab);

  return (
    <section className="w-full bg-white py-16 md:py-24 px-6 md:px-12">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            OUR PROJECTS
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto">
            Here's what we're building right now. Your help is needed!
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <button
            onClick={() => setActiveTab('all')}
            className={`px-6 py-2 rounded-full font-medium ${activeTab === 'all' ? 'bg-[#721111] text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
          >
            All Projects
          </button>
          <button
            onClick={() => setActiveTab('active')}
            className={`px-6 py-2 rounded-full font-medium ${activeTab === 'active' ? 'bg-[#721111] text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
          >
            Active
          </button>
          <button
            onClick={() => setActiveTab('completed')}
            className={`px-6 py-2 rounded-full font-medium ${activeTab === 'completed' ? 'bg-[#721111] text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
          >
            Completed
          </button>
          <button
            onClick={() => setActiveTab('pending')}
            className={`px-6 py-2 rounded-full font-medium ${activeTab === 'pending' ? 'bg-[#721111] text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
          >
            Pending
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {filteredProjects.map((project) => (
            <div key={project.id} className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-md transition-all">
                
                <span className="text-sm font-medium text-[#721111] uppercase tracking-wider">
                  {project.status}
                </span>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              
            </div>
          ))}
        </div>

        <div className="text-center">
          <button className="bg-[#721111] hover:bg-[#5a0d0d] text-white font-bold py-3 px-8 rounded-full transition-colors inline-block">
            VIEW ALL PROJECTS
          </button>
        </div>
      </div>
    </section>
  );
}