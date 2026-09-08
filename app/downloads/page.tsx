'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import { Download, FileText } from 'lucide-react';

interface DownloadItem {
  title: string;
  description: string;
  icon: string;
  fileName: string;
}

const downloadItems: DownloadItem[] = [
  {
    title: 'Product Catalogue',
    description: 'Complete product portfolio with detailed information',
    icon: '📋',
    fileName: 'ssv-lifecare-catalogue.pdf',
  },
  {
    title: 'Company Profile',
    description: 'Corporate overview and company information',
    icon: '🏢',
    fileName: 'ssv-lifecare-company-profile.pdf',
  },
  {
    title: 'Product List',
    description: 'Quick reference list of all products',
    icon: '📝',
    fileName: 'ssv-lifecare-product-list.pdf',
  },
  {
    title: 'Price List',
    description: 'Pricing information for business partners',
    icon: '💰',
    fileName: 'ssv-lifecare-price-list.pdf',
  },
];

export default function DownloadsPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20 pb-16">
        {/* Page Header */}
        <section className="bg-gradient-to-r from-primary-600 to-secondary-600 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Downloads</h1>
            <p className="text-lg text-white/90">Access important documents and resources</p>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Download Resources */}
          <section className="mb-16">
            <h2 className="section-title mb-12 text-center">Available Resources</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {downloadItems.map((item, index) => (
                <div key={index} className="card-primary">
                  <div className="flex items-start gap-4 mb-4">
                    <span className="text-4xl">{item.icon}</span>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-primary-700">{item.title}</h3>
                      <p className="text-gray-600 text-sm mt-1">{item.description}</p>
                    </div>
                  </div>
                  <button className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors font-semibold">
                    <Download size={18} />
                    Download PDF
                  </button>
                </div>
              ))}
            </div>
          </section>

          {/* Certificates Section */}
          <section className="mb-16">
            <h2 className="section-title mb-8 text-center">Certificates & Licenses</h2>
            <div className="card-primary">
              <p className="text-gray-700 mb-6">
                SSV LIFECARE maintains necessary certifications and compliance documentation. Please contact us for detailed certificates and licenses information.
              </p>
              <button className="inline-flex items-center gap-2 px-6 py-3 border border-primary-600 text-primary-600 rounded-lg hover:bg-primary-50 transition-colors font-semibold">
                <FileText size={20} />
                Request Certificates
              </button>
            </div>
          </section>

          {/* Documentation Guide */}
          <section>
            <h2 className="section-title mb-8 text-center">Need Help?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: 'Product Information',
                  description: 'Need detailed product specifications and usage information?',
                  action: 'Contact Us',
                },
                {
                  title: 'Business Enquiries',
                  description: 'Looking for distribution or partnership opportunities?',
                  action: 'Get in Touch',
                },
                {
                  title: 'Technical Support',
                  description: 'Have questions about our products or services?',
                  action: 'Chat on WhatsApp',
                },
              ].map((item, index) => (
                <div key={index} className="card-primary text-center">
                  <h3 className="text-lg font-bold text-primary-700 mb-3">{item.title}</h3>
                  <p className="text-gray-600 mb-4 text-sm">{item.description}</p>
                  <button className="button-primary text-sm">{item.action}</button>
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
