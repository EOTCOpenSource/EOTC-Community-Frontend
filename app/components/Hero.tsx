import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative w-full bg-gray-50 pt-28 pb-24 overflow-hidden">
      <div className="relative z-10 w-full h-full flex flex-col md:flex-row items-center justify-center px-10">
        
        <div className="text-center md:text-left max-w-2xl space-y-6 md:mr-12 ml-36 flex-1">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            <span className="block text-gray-800">Faith Meets Code</span>
            <span className="block text-[#721111]">Culture Meets Innovation</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-600">
            A collaborative community building open-source digital tools for the Ethiopian Orthodox Tewahedo Church, its followers, and its sacred traditions.
          </p>
          
          <Link 
            href="#"
            className="mt-8 bg-[#721111] hover:bg-[#5a0d0d] text-white font-bold py-3 px-8 rounded-full transition-colors inline-block"
          >
            Join our Telegram Community
          </Link>
        </div>

        <div className="relative flex-1 flex justify-center items-center mb-8 md:mb-0">
          <div 
            className="absolute bg-[#721111] z-0"
            style={{
              width: '700px',
              height: '250px',
              top: '50%', 
              left: '50%', 
              transform: 'translate(-50%, -50%) rotate(90deg)',
            }}
          ></div>
          <div className="relative z-10">
            <Image 
              src="/EOTC_church.png" 
              alt="EOTC Church" 
              width={600} 
              height={400} 
              className="mx-auto"
            />
          </div>
        </div>
      </div>
      <div
        className="absolute left-0 bottom-0 w-full h-24 pointer-events-none"
        style={{
          background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.2) 4.08%, #FFFFFF 14.95%)',
        }}
      />
    </section>
  );
}