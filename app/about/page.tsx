'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import { Award, Target, Heart, Zap, Users, CheckCircle } from 'lucide-react';

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20 pb-16">
        {/* Page Header */}
        <section className="bg-gradient-to-r from-primary-600 to-secondary-600 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">About SSV LIFECARE</h1>
            <p className="text-lg text-white/90">Building trust through quality pharmaceutical solutions</p>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Who We Are */}
          <section className="mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="section-title mb-6">Who We Are</h2>
                <p className="text-gray-700 text-lg leading-relaxed mb-4">
                  SSV LIFECARE is a quality-focused pharmaceutical company committed to delivering premium healthcare solutions. Our extensive product portfolio addresses diverse therapeutic segments with a focus on excellence, safety, and reliability.
                </p>
                <p className="text-gray-700 text-lg leading-relaxed mb-4">
                  With a strong presence across India, we have built a reputation as a trusted partner for healthcare professionals, distributors, stockists, hospitals, and pharmacies.
                </p>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Our commitment extends beyond products—we are dedicated to supporting our business partners with professional services, reliable supply chains, and continuous quality assurance.
                </p>
              </div>
              <div className="bg-gradient-to-br from-primary-100 to-secondary-100 rounded-2xl p-12 h-96 flex items-center justify-center">
                <div className="text-8xl">🏥</div>
              </div>
            </div>
          </section>

          {/* Our Mission */}
          <section className="mb-16 card-primary">
            <div className="flex items-start gap-6">
              <Target className="text-primary-600 flex-shrink-0 mt-2" size={40} />
              <div>
                <h2 className="text-2xl font-bold text-primary-700 mb-3">Our Mission</h2>
                <p className="text-gray-700 text-lg leading-relaxed">
                  To provide quality-focused pharmaceutical products that contribute to better health outcomes. We strive to build lasting partnerships with healthcare professionals and business partners through reliability, transparency, and professional excellence.
                </p>
              </div>
            </div>
          </section>

          {/* Our Vision */}
          <section className="mb-16 card-primary">
            <div className="flex items-start gap-6">
              <Zap className="text-secondary-600 flex-shrink-0 mt-2" size={40} />
              <div>
                <h2 className="text-2xl font-bold text-secondary-700 mb-3">Our Vision</h2>
                <p className="text-gray-700 text-lg leading-relaxed">
                  To establish SSV LIFECARE as a leading pharmaceutical brand recognized for quality, innovation, and commitment to healthcare excellence. We envision a comprehensive portfolio spanning multiple therapeutic segments with strong market presence and healthcare partnerships.
                </p>
              </div>
            </div>
          </section>

          {/* Our Values */}
          <section className="mb-16">
            <h2 className="section-title mb-12 text-center">Our Core Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: Heart,
                  title: 'Quality First',
                  description: 'Unwavering commitment to product quality and safety standards in every aspect of our operations.',
                },
                {
                  icon: Users,
                  title: 'Partnership & Trust',
                  description: 'Building strong, transparent relationships with healthcare partners, distributors, and stakeholders.',
                },
                {
                  icon: Award,
                  title: 'Excellence',
                  description: 'Continuous pursuit of excellence in pharmaceutical manufacturing, distribution, and customer service.',
                },
              ].map((value, index) => (
                <div key={index} className="card-primary text-center">
                  <value.icon className="text-primary-600 mx-auto mb-4" size={40} />
                  <h3 className="text-xl font-bold text-primary-700 mb-3">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Our Commitment */}
          <section className="mb-16">
            <h2 className="section-title mb-12 text-center">Our Commitment</h2>
            <div className="space-y-4">
              {[
                'Delivering quality pharmaceutical products that meet rigorous safety and efficacy standards',
                'Supporting healthcare professionals with comprehensive product information and technical support',
                'Building sustainable partnerships with distributors and business partners',
                'Maintaining ethical business practices and regulatory compliance',
                'Continuous innovation and expansion of our therapeutic portfolio',
                'Professional support and reliable supply chain management',
              ].map((commitment, index) => (
                <div key={index} className="flex items-start gap-4 p-4 bg-primary-50 rounded-lg">
                  <CheckCircle className="text-primary-600 flex-shrink-0 mt-1" size={24} />
                  <p className="text-gray-700 text-lg">{commitment}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Why Choose Us */}
          <section>
            <h2 className="section-title mb-12 text-center">Why Choose SSV LIFECARE</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                { title: 'Quality Focus', description: 'Premium quality products meeting international standards' },
                { title: 'Diverse Portfolio', description: 'Products spanning multiple therapeutic segments' },
                { title: 'Reliable Supply', description: 'Consistent availability and dependable distribution' },
                { title: 'Professional Support', description: 'Dedicated assistance for all business partners' },
                { title: 'Transparency', description: 'Clear communication and ethical business practices' },
                { title: 'Growth Partnership', description: 'Commitment to mutual success with our partners' },
              ].map((item, index) => (
                <div key={index} className="card-primary">
                  <h3 className="text-lg font-bold text-primary-700 mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>

      <Footer />
      <WhatsAppButton />
    </>
  );
}
