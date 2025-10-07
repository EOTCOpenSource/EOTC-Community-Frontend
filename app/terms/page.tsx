"use client";

import Footer from "@/components/Footer";

export default function TermsPage() {
  return (
    <>
      <section className="min-h-screen bg-gray-50 py-24 px-6 md:px-20 flex flex-col items-center text-center">
        <div className="max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Terms of Service
          </h1>

          <p className="text-lg text-gray-700 mb-10 leading-relaxed">
            Welcome to EOTC OpenSource. By using our website, you agree to comply with
            and be bound by the following terms and conditions. Please read them carefully.
          </p>

          <div className="bg-white rounded-2xl shadow-md p-8 mb-6">
            <h2 className="text-2xl font-bold text-primary mb-4">Use of Website</h2>
            <p className="text-gray-700 leading-relaxed">
              You may use our website for lawful purposes only. You agree not to engage
              in activities that may harm the website or other users.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-md p-8 mb-6">
            <h2 className="text-2xl font-bold text-primary mb-4">Intellectual Property</h2>
            <p className="text-gray-700 leading-relaxed">
              All content, logos, and materials on this website are the property of
              EOTC OpenSource and may not be copied or used without permission.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-md p-8">
            <h2 className="text-2xl font-bold text-primary mb-4">Changes to Terms</h2>
            <p className="text-gray-700 leading-relaxed">
              We reserve the right to update these terms at any time. Continued use
              of the website constitutes acceptance of any changes.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
