'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

export default function TermsPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20 pb-16">
        <section className="bg-gradient-to-r from-primary-600 to-secondary-600 text-white py-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold mb-4">Terms & Conditions</h1>
            <p className="text-lg text-white/90">Last updated: September 2024</p>
          </div>
        </section>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold text-primary-700 mt-8 mb-4">Acceptance of Terms</h2>
            <p className="text-gray-700 mb-4">
              By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement.
            </p>

            <h2 className="text-2xl font-bold text-primary-700 mt-8 mb-4">Use License</h2>
            <p className="text-gray-700 mb-4">
              Permission is granted to temporarily download one copy of the materials (information or software) on SSV LIFECARE's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
              <li>Modify or copy the materials</li>
              <li>Use the materials for any commercial purpose or for any public display</li>
              <li>Attempt to decompile or reverse engineer any software contained on the website</li>
              <li>Remove any copyright or other proprietary notations from the materials</li>
              <li>Transfer the materials to another person or "mirror" the materials on any other server</li>
            </ul>

            <h2 className="text-2xl font-bold text-primary-700 mt-8 mb-4">Disclaimer</h2>
            <p className="text-gray-700 mb-4">
              The materials on SSV LIFECARE's website are provided on an 'as is' basis. SSV LIFECARE makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
            </p>

            <h2 className="text-2xl font-bold text-primary-700 mt-8 mb-4">Limitations</h2>
            <p className="text-gray-700 mb-4">
              In no event shall SSV LIFECARE or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on SSV LIFECARE's website.
            </p>

            <h2 className="text-2xl font-bold text-primary-700 mt-8 mb-4">Accuracy of Materials</h2>
            <p className="text-gray-700 mb-4">
              The materials appearing on SSV LIFECARE's website could include technical, typographical, or photographic errors. SSV LIFECARE does not warrant that any of the materials on its website are accurate, complete, or current. SSV LIFECARE may make changes to the materials contained on its website at any time without notice.
            </p>

            <h2 className="text-2xl font-bold text-primary-700 mt-8 mb-4">Links</h2>
            <p className="text-gray-700 mb-4">
              SSV LIFECARE has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by SSV LIFECARE of the site. Use of any such linked website is at the user's own risk.
            </p>

            <h2 className="text-2xl font-bold text-primary-700 mt-8 mb-4">Modifications</h2>
            <p className="text-gray-700 mb-4">
              SSV LIFECARE may revise these terms of service for its website at any time without notice. By using this website, you are agreeing to be bound by the then current version of these terms of service.
            </p>

            <h2 className="text-2xl font-bold text-primary-700 mt-8 mb-4">Governing Law</h2>
            <p className="text-gray-700 mb-4">
              These terms and conditions are governed by and construed in accordance with the laws of India, and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
            </p>

            <h2 className="text-2xl font-bold text-primary-700 mt-8 mb-4">Contact</h2>
            <p className="text-gray-700 mb-4">
              If you have any questions about these Terms & Conditions, please contact us at info@ssvlifeccare.com
            </p>
          </div>
        </div>
      </main>

      <Footer />
      <WhatsAppButton />
    </>
  );
}
