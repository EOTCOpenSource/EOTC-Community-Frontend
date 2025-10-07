"use client";

import Footer from "@/components/Footer"; 
export default function AboutPage() {
  return (
    <>
      <section className="min-h-screen bg-gray-50 py-24 px-6 md:px-20 flex flex-col items-center text-center">
        <div className="max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            About EOTC OpenSource
          </h1>

          <p className="text-lg text-gray-700 mb-10 leading-relaxed">
            A collaborative community building open-source digital tools for the
            <span className="font-semibold"> Ethiopian Orthodox Tewahedo Church</span>,
            its followers, and its sacred traditions.  
            Uniting developers and believers to create impactful and sustainable
            digital solutions.
          </p>

          <div className="bg-white rounded-2xl shadow-md p-8 mb-10">
            <h2 className="text-2xl font-bold text-primary mb-4">Our Mission</h2>
            <p className="text-gray-700 leading-relaxed">
              To build open-source digital tools that support the Church, its followers,
              and its sacred traditions.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-md p-8 mb-10">
            <h2 className="text-2xl font-bold text-primary mb-4">Our Goal</h2>
            <p className="text-gray-700 leading-relaxed">
              To empower our community by making spiritual and cultural resources
              more accessible for generations to come.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-md p-8">
            <h2 className="text-2xl font-bold text-primary mb-4">Why Join Us</h2>
            <p className="text-gray-700 leading-relaxed">
              Unite your faith with your skills. Collaborate with like-minded
              individuals to create a lasting digital legacy for the Ethiopian
              Orthodox Tewahedo Church and its followers.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
