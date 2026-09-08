'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import { CheckCircle, Shield, Zap, Award } from 'lucide-react';

export default function QualityPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20 pb-16">
        {/* Page Header */}
        <section className="bg-gradient-to-r from-primary-600 to-secondary-600 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Quality & Commitment</h1>
            <p className="text-lg text-white/90">Ensuring pharmaceutical excellence at every step</p>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Quality Focus */}
          <section className="mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="section-title mb-6">Quality Assurance</h2>
                <p className="text-gray-700 text-lg leading-relaxed mb-4">
                  At SSV LIFECARE, quality is not just a commitment—it's the foundation of everything we do. We maintain stringent quality control measures across all stages of manufacturing, packaging, and distribution.
                </p>
                <p className="text-gray-700 text-lg leading-relaxed mb-4">
                  Every product undergoes rigorous testing and quality checks to ensure it meets our high standards and regulatory requirements.
                </p>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Our quality-focused approach ensures that healthcare professionals and patients can trust our products with confidence.
                </p>
              </div>
              <div className="bg-gradient-to-br from-primary-100 to-secondary-100 rounded-2xl p-12 h-96 flex items-center justify-center">
                <Shield className="text-primary-600" size={120} />
              </div>
            </div>
          </section>

          {/* Quality Pillars */}
          <section className="mb-16">
            <h2 className="section-title mb-12 text-center">Our Quality Standards</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: Shield,
                  title: 'Quality Control',
                  description: 'Rigorous testing at every manufacturing stage',
                },
                {
                  icon: Award,
                  title: 'Product Quality',
                  description: 'Premium ingredients and formulation standards',
                },
                {
                  icon: CheckCircle,
                  title: 'Packaging',
                  description: 'Secure and tamper-proof packaging standards',
                },
                {
                  icon: Zap,
                  title: 'Storage & Distribution',
                  description: 'Proper handling and temperature-controlled supply chain',
                },
              ].map((standard, index) => (
                <div key={index} className="card-primary text-center">
                  <standard.icon className="text-primary-600 mx-auto mb-4" size={40} />
                  <h3 className="text-lg font-bold text-primary-700 mb-3">{standard.title}</h3>
                  <p className="text-gray-600 text-sm">{standard.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Quality Practices */}
          <section className="mb-16">
            <h2 className="section-title mb-8 text-center">Quality Practices</h2>
            <div className="space-y-4">
              {[
                'Stringent raw material inspection and testing',
                'Advanced manufacturing processes with quality oversight',
                'Comprehensive product testing before release',
                'Regular quality audits and performance monitoring',
                'Compliance with pharmaceutical regulations and standards',
                'Proper storage and distribution protocols',
                'Continuous improvement initiatives',
                'Training and development of quality personnel',
              ].map((practice, index) => (
                <div key={index} className="flex items-start gap-4 p-4 bg-primary-50 rounded-lg">
                  <CheckCircle className="text-primary-600 flex-shrink-0 mt-1" size={24} />
                  <p className="text-gray-700 text-lg">{practice}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Certifications Section */}
          <section className="card-primary">
            <h2 className="text-2xl font-bold text-primary-700 mb-6">Certifications & Documentation</h2>
            <p className="text-gray-700 mb-6">
              SSV LIFECARE maintains various certifications and compliance documentation. For detailed information about our certifications and quality credentials, please contact our team or download our company profile.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <button className="px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors font-semibold">
                View Certificates
              </button>
              <button className="px-6 py-3 border border-primary-600 text-primary-600 rounded-lg hover:bg-primary-50 transition-colors font-semibold">
                Contact Us
              </button>
            </div>
          </section>
        </div>
      </main>

      <Footer />
      <WhatsAppButton />
    </>
  );
}
