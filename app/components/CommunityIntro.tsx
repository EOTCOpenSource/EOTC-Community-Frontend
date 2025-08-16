'use client';
import Image from 'next/image';

export default function CommunityIntro() {
  const channels = [
    {
      id: 1,
      name: "Introduction",
      description: "Say hello here. Tell us your name and why you joined.",
      image: "/EOTC_Introduction.png"
    },
    {
      id: 3,
      name: "Project-ideas",
      description: "Share your new ideas for projects here.",
      image: "/EOTC_ProjectIdeas.png"
    },
    {
      id: 5,
      name: "Design or UI/UX",
      description: "Share designs and logos and UI design here.",
      image: "/EOTC_Design.png"
    },
    
    {
      id: 7,
      name: "Help and Questions",
      description: "If you need help, ask here.",
      image: "/EOTC_Help.png"
    },
    {
      id: 2,
      name: "Announcements",
      description: "Important news from the admins.",
      image: "/EOTC_Announcement.png"
    },
    {
      id: 4,
      name: "Development",
      description: "Talk about code and computers here.",
      image: "/EOTC_Dev't.png"
    },
    {
      id: 6,
      name: "Content and Writing",
      description: "For working on text and translation.",
      image: "/EOTC_Content.png"
    },
    
    {
      id: 8,
      name: "Faith and Resources",
      description: "Share links about our faith here.",
      image: "/EOTC_Resources.png"
    }
  ];

  return (
    <section className="w-full bg-[#F9FAFB] py-16 px-6 md:px-12 relative">
      <div className="container mx-auto max-w-6xl relative">


        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#721111] mb-4">
            Welcome to the EOTC OpenSource Telegram Community!
          </h2>
          <p className="text-lg text-gray-700">
            Our goal is to make free tools, like apps and websites, to help the Church and its members.
          </p>
        </div>



<div className="relative mt-12 mb-20">
  <div 
    className="absolute hidden md:block bg-[#721111] w-[100px] rounded-[10px]"
    style={{
      left: '50%',
      top: "-50px",
      bottom: "-50px",
      transform: 'translateX(-50%)',
    }}
  ></div>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-64 gap-y-12 relative z-10">
    <div className="space-y-12">
      {channels.slice(0, 4).map((channel) => (
        <ChannelItem key={channel.id} channel={channel} />
      ))}
    </div>
    
    <div className="space-y-12 mt-12">
      {channels.slice(4).map((channel) => (
        <ChannelItem key={channel.id} channel={channel} />
      ))}
    </div>
  </div>
</div>
        <div className="text-center mt-20">
          <p className="text-lg text-gray-700">
            We are excited to build things with you.<br />
            First, please go to the introductions topic and say hello!
          </p>
        </div>
      </div>
    </section>
  );
}

// Channel item component
function ChannelItem({ channel }: { channel: any }) {
  return (
    <div className="flex items-start space-x-6">
      <div className="flex-shrink-0 mt-6">
        <Image 
          src={channel.image} 
          alt={channel.name} 
          width={80} 
          height={80}
          className="rounded-lg hover:scale-105 transition-transform duration-200"
        />
      </div>
      <div className="mt-[-20px]">
        <h3 className="text-xl font-bold text-[#721111] mb-10">
          {channel.id}. {channel.name}
        </h3>
        <p className="text-gray-600 mt-0.5">
          {channel.description}
        </p>
      </div>
    </div>
  );
}