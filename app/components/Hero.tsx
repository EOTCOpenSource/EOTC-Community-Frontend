import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative w-full bg-gray-50 pt-28 pb-24 overflow-hidden">
      <div 
        className="absolute md:hidden w-[100px] left-1/2 transform -translate-x-1/2 top-0 bottom-0 z-0"
        style={{
          background: 'linear-gradient(180deg, rgba(114, 17, 17, 0) 0%, rgba(114, 17, 17, 0.904) 29.81%, #721111 59.14%, rgba(114, 17, 17, 0) 100%)',
        }}
      ></div>

      <div className="relative z-10 container mx-auto px-6 md:px-12">
        <div className="md:hidden flex flex-col items-center">
          <div className="text-center max-w-2xl space-y-6">
            <h1 className="text-4xl font-bold leading-tight">
              <span className="block text-primary">Faith Meets Code</span>
              <span className="block text-primary">Culture Meets Innovation</span>
            </h1>
          </div>

          <div className="relative my-8 w-full max-w-[300px]">
            <div className="relative z-10">
              <Image 
                src="/EOTC_church.png" 
                alt="EOTC Church" 
                width={300}
                height={200}
                className="mx-auto"
              />
            </div>
          </div>

          <div className="text-center max-w-2xl">
            <p className="text-lg text-[#000000] mb-6">
              A collaborative community building open-source digital tools for the Ethiopian Orthodox Tewahedo Church.
            </p>
            <Link 
              href="https://t.me/EOTCOpenSource"
              className="mt-8 bg-primary hover:bg-[#5a0d0d] text-white font-bold py-3 px-8 rounded-full transition-colors inline-block"
            >
              Join our Telegram Community
            </Link>
          </div>
        </div>

        <div className="hidden md:flex md:items-center md:justify-evenly">
          <div className="text-center md:text-left max-w-2xl space-y-6 md:mr-12 flex-1">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              <span className="block text-gray-800">Faith Meets Code</span>
              <span className="block text-primary">Culture Meets Innovation</span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600">
              A collaborative community building open-source digital tools for the Ethiopian Orthodox Tewahedo Church.
            </p>
            
            <Link 
              href="https://t.me/EOTCOpenSource"
              className="mt-8 bg-primary hover:bg-primary-600 text-white font-bold py-3 px-8 rounded-full transition-colors inline-block"
            >
              Join our Telegram Community
            </Link>
          </div>

          <div className="hidden md:block relative flex-1 justify-center items-center mb-8 md:mb-0">
            
            
            <div className="relative z-10">
              <Image 
                src="/EOTC_church.png" 
                alt="EOTC Church" 
                width={600} 
                height={400} 
                className="mx-auto -translate-x-8"
              />
            </div>
          </div>
        </div>
      </div>

      <div 
              className="absolute hidden md:block bg-primary z-0 mx-auto"
              style={{
                width: '250px',
                height: '100vh',
                top: '0', 
                right: '20%', 
                transform: 'translate(0%,0%)',
              }}
            >
             
            </div>

      <div
        className="hidden md:block absolute left-0 bottom-0 w-full h-14 pointer-events-none"
        style={{
          background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.2) 4.08%, #FFFFFF 14.95%)',
        }}
      />

    </section>
  );
}