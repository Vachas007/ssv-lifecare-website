'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20 pb-16">
        <section className="bg-gradient-to-r from-primary-600 to-secondary-600 text-white py-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
            <p className="text-lg text-white/90">Last updated: September 2024</p>
          </div>
        </section>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold text-primary-700 mt-8 mb-4">Introduction</h2>
            <p className="text-gray-700 mb-4">
              SSV LIFECARE ("we", "our", or "us") operates the website. This page informs you of our policies regarding the collection, use, and disclosure of personal data when you use our Service and the choices you have associated with that data.
            </p>

            <h2 className="text-2xl font-bold text-primary-700 mt-8 mb-4">Information Collection and Use</h2>
            <p className="text-gray-700 mb-4">
              We collect several different types of information for various purposes to provide and improve our Service to you.
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
              <li>Personal Data: Name, email address, phone number, city, state, and business information</li>
              <li>Usage Data: Information about how you access and use our website</li>
              <li>Cookies and Tracking: We use cookies to enhance your experience</li>
            </ul>

            <h2 className="text-2xl font-bold text-primary-700 mt-8 mb-4">Use of Data</h2>
            <p className="text-gray-700 mb-4">SSV LIFECARE uses the collected data for various purposes:</p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
              <li>To provide and maintain our Service</li>
              <li>To notify you about changes to our Service</li>
              <li>To allow you to participate in interactive features</li>
              <li>To provide customer support</li>
              <li>To gather analysis or valuable information to improve our Service</li>
              <li>To monitor the usage of our Service</li>
              <li>To detect, prevent and address technical issues</li>
            </ul>

            <h2 className="text-2xl font-bold text-primary-700 mt-8 mb-4">Security of Data</h2>
            <p className="text-gray-700 mb-4">
              The security of your data is important to us but remember that no method of transmission over the Internet or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Data, we cannot guarantee its absolute security.
            </p>

            <h2 className="text-2xl font-bold text-primary-700 mt-8 mb-4">Contact Us</h2>
            <p className="text-gray-700 mb-4">
              If you have any questions about this Privacy Policy, please contact us at info@ssvlifeccare.com
            </p>
          </div>
        </div>
      </main>

      <Footer />
      <WhatsAppButton />
    </>
  );
}
