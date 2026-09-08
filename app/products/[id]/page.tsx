'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import EnquiryForm from '@/components/EnquiryForm';
import { initialProducts } from '@/lib/products';
import Link from 'next/link';
import { ArrowLeft, Download, Share2 } from 'lucide-react';

interface ProductPageProps {
  params: {
    id: string;
  };
}

export function generateStaticParams() {
  return initialProducts.map((product) => ({
    id: product.id,
  }));
}

export default function ProductPage({ params }: ProductPageProps) {
  const product = initialProducts.find((p) => p.id === params.id);

  if (!product) {
    return (
      <>
        <Navbar />
        <main className="pt-20 pb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
            <h1 className="text-4xl font-bold mb-4">Product Not Found</h1>
            <p className="text-gray-600 mb-8">Sorry, we couldn't find this product.</p>
            <Link href="/products" className="button-primary">
              Back to Products
            </Link>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  const relatedProducts = initialProducts
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  return (
    <>
      <Navbar />
      <main className="pt-20 pb-16">
        {/* Breadcrumb */}
        <div className="bg-gray-50 border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <Link href="/products" className="hover:text-primary-600 transition-colors">
                Products
              </Link>
              <span>/</span>
              <Link href={`/products?category=${product.category}`} className="hover:text-primary-600 transition-colors">
                {product.category}
              </Link>
              <span>/</span>
              <span className="text-primary-600 font-semibold">{product.name}</span>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Back Button */}
          <Link href="/products" className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 font-semibold mb-8 group">
            <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
            Back to Products
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Left Column - Product Image & Details */}
            <div className="lg:col-span-2">
              {/* Product Image */}
              <div className="bg-gradient-to-br from-primary-50 to-secondary-50 rounded-2xl p-12 mb-8 h-96 flex items-center justify-center">
                {product.image ? (
                  <img
                    src={product.image}
                    alt={product.name}
                    className="max-w-full max-h-full object-contain"
                  />
                ) : (
                  <div className="text-center">
                    <div className="text-8xl mb-4">💊</div>
                    <p className="text-gray-400">Product Image</p>
                  </div>
                )}
              </div>

              {/* Product Basic Info */}
              <div className="mb-8">
                <h1 className="text-4xl font-bold text-primary-700 mb-3">{product.name}</h1>
                <div className="flex flex-wrap gap-3 mb-6">
                  <span className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-semibold">
                    {product.category}
                  </span>
                  <span className="px-3 py-1 bg-secondary-100 text-secondary-700 rounded-full text-sm font-semibold">
                    {product.dosageForm}
                  </span>
                  {product.strength && (
                    <span className="px-3 py-1 bg-accent-100 text-accent-700 rounded-full text-sm font-semibold">
                      {product.strength}
                    </span>
                  )}
                </div>
              </div>

              {/* Detailed Information */}
              <div className="space-y-8">
                {/* Composition */}
                <div className="card-primary">
                  <h2 className="text-2xl font-bold text-primary-700 mb-4">Product Composition</h2>
                  <p className="text-gray-700 leading-relaxed text-lg">{product.composition}</p>
                </div>

                {/* Product Information */}
                <div className="card-primary">
                  <h2 className="text-2xl font-bold text-primary-700 mb-4">Product Information</h2>
                  <div className="space-y-4 text-gray-700">
                    <div>
                      <p className="font-semibold text-gray-900">Therapeutic Segment</p>
                      <p>{product.therapeuticSegment}</p>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Dosage Form</p>
                      <p>{product.dosageForm}</p>
                    </div>
                    {product.strength && (
                      <div>
                        <p className="font-semibold text-gray-900">Strength</p>
                        <p>{product.strength}</p>
                      </div>
                    )}
                    {product.packSize && (
                      <div>
                        <p className="font-semibold text-gray-900">Pack Size</p>
                        <p>{product.packSize}</p>
                      </div>
                    )}
                    {product.description && (
                      <div>
                        <p className="font-semibold text-gray-900">Description</p>
                        <p>{product.description}</p>
                      </div>
                    )}
                  </div>
                </div>

                {/* Important Disclaimer for Prescription Products */}
                {product.category === 'Prescription / Specialty Products' && (
                  <div className="border-l-4 border-orange-500 bg-orange-50 p-4 rounded">
                    <p className="text-orange-800 font-semibold mb-2">⚠️ Prescription Medicine</p>
                    <p className="text-orange-700 text-sm">
                      Use only under the supervision of a qualified healthcare professional. Do not self-medicate.
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* Right Column - Enquiry Form */}
            <div className="lg:col-span-1">
              <div className="card-primary sticky top-32">
                <h2 className="text-2xl font-bold text-primary-700 mb-6">Request Product Info</h2>
                <EnquiryForm product={product} />
              </div>

              {/* Additional Actions */}
              <div className="mt-6 space-y-3">
                <button className="w-full flex items-center justify-center gap-2 px-4 py-3 border border-primary-300 text-primary-600 rounded-lg hover:bg-primary-50 transition-colors font-semibold">
                  <Download size={20} />
                  Download Info
                </button>
                <button className="w-full flex items-center justify-center gap-2 px-4 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-semibold">
                  <Share2 size={20} />
                  Share Product
                </button>
              </div>
            </div>
          </div>

          {/* Related Products */}
          {relatedProducts.length > 0 && (
            <div className="mt-16 pt-12 border-t border-gray-200">
              <h2 className="text-3xl font-bold text-primary-700 mb-8">Related Products</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {relatedProducts.map((relProduct) => (
                  <Link key={relProduct.id} href={`/products/${relProduct.id}`}>
                    <div className="card-primary h-full cursor-pointer">
                      <div className="h-32 bg-gradient-to-br from-primary-50 to-secondary-50 rounded-lg mb-3 flex items-center justify-center">
                        <span className="text-4xl">💊</span>
                      </div>
                      <h3 className="font-bold text-primary-700 mb-1">{relProduct.name}</h3>
                      <p className="text-xs text-gray-500">{relProduct.dosageForm}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </main>

      <Footer />
      <WhatsAppButton />
    </>
  );
}
