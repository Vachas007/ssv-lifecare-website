'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

export default function DisclaimerPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20 pb-16">
        <section className="bg-gradient-to-r from-primary-600 to-secondary-600 text-white py-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold mb-4">Disclaimer</h1>
            <p className="text-lg text-white/90">Important Legal Disclaimer</p>
          </div>
        </section>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="prose prose-lg max-w-none">
            <div className="bg-orange-50 border-l-4 border-orange-500 p-6 rounded mb-8">
              <h2 className="text-2xl font-bold text-orange-800 mt-0 mb-4">⚠️ Medical Disclaimer</h2>
              <p className="text-orange-900 font-semibold">
                The information provided on this website is intended for general informational and business reference purposes only and should not be considered medical advice.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-primary-700 mt-8 mb-4">Important Information</h2>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
              <li>Medicines should be used only under the guidance of a qualified healthcare professional</li>
              <li>Do not self-diagnose or self-medicate based on information provided on this website</li>
              <li>Product information, availability and indications may vary according to applicable regulations and approved product information</li>
              <li>Always consult with a doctor, pharmacist, or healthcare provider before using any medicine</li>
              <li>The website does not provide medical diagnosis, treatment, or health services</li>
            </ul>

            <h2 className="text-2xl font-bold text-primary-700 mt-8 mb-4">Prescription Products</h2>
            <p className="text-gray-700 mb-4">
              Several products listed on this website are prescription medicines. These products:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
              <li>Require a valid prescription from a qualified healthcare professional</li>
              <li>Should be used only under medical supervision</li>
              <li>Must not be used for self-medication</li>
              <li>Are subject to pharmaceutical regulations and restricted distribution</li>
            </ul>

            <h2 className="text-2xl font-bold text-primary-700 mt-8 mb-4">No Medical Claims</h2>
            <p className="text-gray-700 mb-4">
              SSV LIFECARE does not make the following claims without verified and approved documentation:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
              <li>100% safe or risk-free claims</li>
              <li>Guaranteed cure or permanent cure claims</li>
              <li>No side effects claims</li>
              <li>"Best medicine" or superiority claims without comparison data</li>
              <li>Clinically proven claims without supporting studies</li>
              <li>FDA or other regulatory approval without documentation</li>
            </ul>

            <h2 className="text-2xl font-bold text-primary-700 mt-8 mb-4">Product Information</h2>
            <p className="text-gray-700 mb-4">
              Product information displayed on this website includes:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
              <li>Brand names and product compositions</li>
              <li>Dosage forms and strengths</li>
              <li>Therapeutic categories</li>
              <li>General pharmaceutical information</li>
            </ul>
            <p className="text-gray-700 mb-4">
              This information is subject to change and should be verified with official product documentation and approved product information before use.
            </p>

            <h2 className="text-2xl font-bold text-primary-700 mt-8 mb-4">Limitation of Liability</h2>
            <p className="text-gray-700 mb-4">
              SSV LIFECARE and its employees shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from the use of or reliance on information provided on this website.
            </p>

            <h2 className="text-2xl font-bold text-primary-700 mt-8 mb-4">Regulatory Compliance</h2>
            <p className="text-gray-700 mb-4">
              All products are manufactured and distributed in compliance with applicable pharmaceutical regulations and laws. Customers are responsible for ensuring compliance with local pharmaceutical regulations in their jurisdiction.
            </p>

            <h2 className="text-2xl font-bold text-primary-700 mt-8 mb-4">Changes to This Disclaimer</h2>
            <p className="text-gray-700 mb-4">
              SSV LIFECARE reserves the right to modify this disclaimer at any time. Continued use of the website after such modifications constitutes acceptance of the updated disclaimer.
            </p>

            <h2 className="text-2xl font-bold text-primary-700 mt-8 mb-4">Contact for Verification</h2>
            <p className="text-gray-700 mb-4">
              For verification of product information, approval status, or regulatory documentation, please contact us at info@ssvlifeccare.com
            </p>
          </div>
        </div>
      </main>

      <Footer />
      <WhatsAppButton />
    </>
  );
}
