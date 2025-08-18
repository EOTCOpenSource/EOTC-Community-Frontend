import Image from 'next/image';
import Link from 'next/link';

export default function Purpose() {
  return (
    <section className="w-full bg-white py-16 md:py-24 px-6 md:px-12">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 tracking-tight">
            Our Purpose
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 font-normal max-w-2xl mx-auto">
            Serving the Church through technology, together.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-6 md:gap-8 justify-center items-stretch">

          <div className="flex-1 bg-white rounded-xl p-8 flex flex-col items-center text-center border border-gray-200 hover:shadow-md transition-all">
            <div className="relative mb-6">
              <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-white border-2 border-[#721111] flex items-center justify-center">
                <div className="w-12 h-12 md:w-14 md:h-14 relative">
                  <Image 
                    src="/EOTC_mission.png" 
                    alt="Our Mission" 
                    width={56}
                    height={56}
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
              Our Mission
            </h3>
            <p className="text-gray-600 mb-6 flex-grow">
              To build open-source digital tools that support the Church, its followers, and its sacred traditions.
            </p>
            <Link 
              href="#" 
              className="mt-auto bg-[#721111] hover:bg-[#5a0d0d] text-white font-bold py-2 px-6 rounded-full transition-colors inline-block text-sm md:text-base"
            >
              Get Started
            </Link>
          </div>

          <div className="flex-1 bg-white rounded-xl p-8 flex flex-col items-center text-center border border-gray-200 hover:shadow-md transition-all">
            <div className="relative mb-6">
              <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-white border-2 border-[#721111] flex items-center justify-center">
                <div className="w-12 h-12 md:w-14 md:h-14 relative">
                  <Image 
                    src="/EOTC_goal.png" 
                    alt="Our Goal" 
                    width={56}
                    height={56}
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
              Our Goal
            </h3>
            <p className="text-gray-600 mb-6 flex-grow">
              To empower our community by making spiritual and cultural resources more accessible for generations to come.
            </p>
            <Link 
              href="#" 
              className="mt-auto bg-[#721111] hover:bg-[#5a0d0d] text-white font-bold py-2 px-6 rounded-full transition-colors inline-block text-sm md:text-base"
            >
              Get Started
            </Link>
          </div>

          <div className="flex-1 bg-white rounded-xl p-8 flex flex-col items-center text-center border border-gray-200 hover:shadow-md transition-all">
            <div className="relative mb-6">
              <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-white border-2 border-[#721111] flex items-center justify-center">
                <div className="w-12 h-12 md:w-14 md:h-14 relative">
                  <Image 
                    src="/EOTC_group.png" 
                    alt="Why Join Us" 
                    width={56}
                    height={56}
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
              Why Join Us
            </h3>
            <p className="text-gray-600 mb-6 flex-grow">
              Make your faith with your skills.<br />
              Collaborate with like-minded individuals to create a lasting digital legacy.
            </p>
            <Link 
              href="#" 
              className="mt-auto bg-[#721111] hover:bg-[#5a0d0d] text-white font-bold py-2 px-6 rounded-full transition-colors inline-block text-sm md:text-base"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}