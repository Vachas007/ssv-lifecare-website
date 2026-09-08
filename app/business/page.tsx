'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import EnquiryForm from '@/components/EnquiryForm';
import { Briefcase, TrendingUp, Users, Target } from 'lucide-react';

export default function BusinessPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20 pb-16">
        {/* Page Header */}
        <section className="bg-gradient-to-r from-primary-600 to-secondary-600 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Partner With SSV LIFECARE</h1>
            <p className="text-lg text-white/90">Grow your business with our pharmaceutical portfolio</p>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Introduction */}
          <section className="mb-16 text-center">
            <h2 className="section-title mb-6">Business Partnership Opportunities</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-8">
              SSV LIFECARE offers attractive business opportunities for distributors, stockists, pharmacies, hospitals, and healthcare institutions. Partner with us to access our premium pharmaceutical portfolio and grow your business.
            </p>
          </section>

          {/* Partnership Types */}
          <section className="mb-16">
            <h2 className="section-title mb-12 text-center">Partnership Opportunities</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: Briefcase,
                  title: 'Distributor',
                  description: 'Regional or state-level distribution of our complete product portfolio',
                  highlights: [
                    'Exclusive territories',
                    'Competitive margins',
                    'Marketing support',
                    'Training & assistance',
                  ],
                },
                {
                  icon: Users,
                  title: 'Stockist',
                  description: 'City or locality-level stockist for local market penetration',
                  highlights: [
                    'Focused territories',
                    'Attractive pricing',
                    'Regular supply',
                    'Back-up support',
                  ],
                },
                {
                  icon: Target,
                  title: 'Pharmacy Partner',
                  description: 'Retail pharmacy and healthcare retail partnerships',
                  highlights: [
                    'Direct supply',
                    'Competitive rates',
                    'Product info support',
                    'Promotional materials',
                  ],
                },
                {
                  icon: TrendingUp,
                  title: 'Institutional Sales',
                  description: 'Hospital, clinic and institutional supply partnerships',
                  highlights: [
                    'Bulk supply',
                    'Customized pricing',
                    'Professional support',
                    'Dedicated account manager',
                  ],
                },
              ].map((type, index) => (
                <div key={index} className="card-primary">
                  <type.icon className="text-primary-600 mb-4" size={40} />
                  <h3 className="text-lg font-bold text-primary-700 mb-2">{type.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{type.description}</p>
                  <ul className="space-y-1 text-xs text-gray-600">
                    {type.highlights.map((highlight, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-secondary-500 rounded-full"></span>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Why Partner */}
          <section className="mb-16 bg-gradient-to-br from-primary-50 to-secondary-50 rounded-2xl p-12">
            <h2 className="section-title mb-12 text-center">Why Partner With SSV LIFECARE?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: 'Quality Products',
                  description: 'Premium pharmaceutical portfolio meeting international quality standards',
                },
                {
                  title: 'Growing Portfolio',
                  description: 'Expanding range of products across multiple therapeutic segments',
                },
                {
                  title: 'Professional Support',
                  description: 'Dedicated assistance, training, and marketing support for partners',
                },
                {
                  title: 'Competitive Margins',
                  description: 'Attractive profit margins and pricing structures for business partners',
                },
                {
                  title: 'Reliable Supply',
                  description: 'Consistent availability and dependable supply chain management',
                },
                {
                  title: 'Growth Partnership',
                  description: 'Commitment to mutual success and long-term business relationships',
                },
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary-600 text-white rounded-lg flex items-center justify-center flex-shrink-0 font-bold">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">{item.title}</h3>
                    <p className="text-gray-700">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Partnership Requirements */}
          <section className="mb-16">
            <h2 className="section-title mb-8 text-center">Partnership Requirements</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: 'Distributor Requirements',
                  items: [
                    'Registered distributor with valid licenses',
                    'Adequate storage facilities',
                    'Reliable distribution network',
                    'Commitment to quality service',
                    'Financial capability for bulk orders',
                  ],
                },
                {
                  title: 'Stockist Requirements',
                  items: [
                    'Valid business registration',
                    'Local storage facility',
                    'Retail/wholesale outlet presence',
                    'Market knowledge of territory',
                    'Commitment to promote products',
                  ],
                },
                {
                  title: 'Pharmacy Requirements',
                  items: [
                    'Valid pharmacy license',
                    'Licensed pharmacist on staff',
                    'Proper storage conditions',
                    'Customer base in locality',
                    'Professional credentials',
                  ],
                },
              ].map((req, index) => (
                <div key={index} className="card-primary">
                  <h3 className="text-lg font-bold text-primary-700 mb-4">{req.title}</h3>
                  <ul className="space-y-2">
                    {req.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-gray-700">
                        <span className="w-2 h-2 bg-secondary-500 rounded-full mt-2 flex-shrink-0"></span>
                        <span className="text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Enquiry Section */}
          <section className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <div className="card-primary">
                <h2 className="text-2xl font-bold text-primary-700 mb-6">Business Partnership Enquiry</h2>
                <EnquiryForm />
              </div>
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-1 space-y-4">
              <div className="card-primary">
                <h3 className="font-bold text-primary-700 mb-3">Business Enquiries</h3>
                <p className="text-gray-600 text-sm mb-3">For partnership opportunities, please contact:</p>
                <p className="text-primary-700 font-semibold text-sm">business@ssvlifeccare.com</p>
              </div>

              <div className="card-primary">
                <h3 className="font-bold text-primary-700 mb-3">Quick Contact</h3>
                <p className="text-gray-600 text-sm mb-2">Phone:</p>
                <p className="text-primary-700 font-semibold text-sm mb-4">+91-XXXX-XXXX-XX</p>
                <p className="text-gray-600 text-sm mb-2">WhatsApp:</p>
                <p className="text-primary-700 font-semibold text-sm">+919876543210</p>
              </div>

              <div className="card-primary">
                <h3 className="font-bold text-primary-700 mb-3">Next Steps</h3>
                <ol className="list-decimal pl-4 text-gray-600 text-sm space-y-1">
                  <li>Submit enquiry form</li>
                  <li>Verify credentials</li>
                  <li>Schedule meeting</li>
                  <li>Discuss terms</li>
                  <li>Finalize agreement</li>
                </ol>
              </div>
            </div>
          </section>
        </div>
      </main>

      <Footer />
      <WhatsAppButton />
    </>
  );
}
