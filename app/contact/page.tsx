'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import EnquiryForm from '@/components/EnquiryForm';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20 pb-16">
        {/* Page Header */}
        <section className="bg-gradient-to-r from-primary-600 to-secondary-600 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
            <p className="text-lg text-white/90">We're here to help and answer any questions you may have</p>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Information */}
            <div className="lg:col-span-1 space-y-6">
              {/* Office Address */}
              <div className="card-primary">
                <div className="flex items-start gap-4">
                  <MapPin className="text-primary-600 flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h3 className="font-bold text-primary-700 mb-2">Office Address</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      SSV LIFECARE<br />
                      [Company Address]<br />
                      India
                    </p>
                  </div>
                </div>
              </div>

              {/* Phone */}
              <div className="card-primary">
                <div className="flex items-start gap-4">
                  <Phone className="text-primary-600 flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h3 className="font-bold text-primary-700 mb-2">Phone</h3>
                    <p className="text-gray-600 text-sm">+91-XXXX-XXXX-XX</p>
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="card-primary">
                <div className="flex items-start gap-4">
                  <Mail className="text-primary-600 flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h3 className="font-bold text-primary-700 mb-2">Email</h3>
                    <p className="text-gray-600 text-sm break-all">info@ssvlifeccare.com</p>
                    <p className="text-gray-600 text-sm break-all">business@ssvlifeccare.com</p>
                  </div>
                </div>
              </div>

              {/* Working Hours */}
              <div className="card-primary">
                <div className="flex items-start gap-4">
                  <Clock className="text-primary-600 flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h3 className="font-bold text-primary-700 mb-2">Working Hours</h3>
                    <p className="text-gray-600 text-sm">Monday - Friday<br />9:00 AM - 6:00 PM IST</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Forms */}
            <div className="lg:col-span-2">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* General Enquiry Form */}
                <div className="card-primary">
                  <h2 className="text-2xl font-bold text-primary-700 mb-6">General Enquiry</h2>
                  <EnquiryForm />
                </div>

                {/* Product Enquiry Form */}
                <div className="card-primary">
                  <h2 className="text-2xl font-bold text-primary-700 mb-6">Product Enquiry</h2>
                  <EnquiryForm />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
      <WhatsAppButton />
    </>
  );
}
