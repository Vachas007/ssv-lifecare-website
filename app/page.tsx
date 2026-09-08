'use client';

import { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import ProductCard from '@/components/ProductCard';
import ProductSearch from '@/components/ProductSearch';
import { initialProducts, Product } from '@/lib/products';
import { ArrowRight, CheckCircle, Users, Pill, Zap } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);

  useEffect(() => {
    setProducts(initialProducts);
    setFilteredProducts(initialProducts.filter((p) => p.featured).slice(0, 6));
  }, []);

  const handleSearch = (term: string) => {
    const filtered = products.filter(
      (product) =>
        product.name.toLowerCase().includes(term.toLowerCase()) ||
        product.composition.toLowerCase().includes(term.toLowerCase()) ||
        product.category.toLowerCase().includes(term.toLowerCase())
    );
    setFilteredProducts(filtered);
  };

  return (
    <>
      <Navbar />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative min-h-screen bg-gradient-to-br from-primary-50 via-white to-secondary-50 overflow-hidden flex items-center">
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-secondary-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <div className="animate-slideUp">
                <div className="inline-block mb-6">
                  <span className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-secondary-100 text-secondary-700 text-sm font-semibold">
                    <Zap size={16} />
                    <span>Premium Pharmaceutical Solutions</span>
                  </span>
                </div>

                <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gradient leading-tight">
                  Committed to Better Health.
                </h1>

                <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                  Quality-focused pharmaceutical solutions for a healthier tomorrow.
                </p>

                <p className="text-lg text-gray-600 mb-10 leading-relaxed">
                  SSV LIFECARE is committed to building a trusted healthcare portfolio through quality-focused pharmaceutical products, professional partnerships and responsible healthcare solutions.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/products" className="button-primary inline-flex items-center justify-center gap-2">
                    Explore Products <ArrowRight size={20} />
                  </Link>
                  <Link href="/catalogue" className="button-secondary inline-flex items-center justify-center gap-2">
                    View Catalogue <ArrowRight size={20} />
                  </Link>
                </div>
              </div>

              {/* Right Visual */}
              <div className="relative h-96 md:h-[500px] animate-fadeIn">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-100 to-secondary-100 rounded-3xl"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-6xl md:text-8xl">💊</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Search Section */}
        <section className="bg-white py-12 sticky top-16 z-30 shadow-md">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-center">
              <ProductSearch products={products} onSearch={handleSearch} />
            </div>
          </div>
        </section>

        {/* Trust Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="section-title">Healthcare. Quality. Commitment.</h2>
              <p className="section-subtitle">Our core values driving pharmaceutical excellence</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: Pill,
                  title: 'Quality Focus',
                  description: 'Premium quality pharmaceutical products meeting international standards.',
                  stat: 'XX+ Products',
                },
                {
                  icon: Users,
                  title: 'Growing Portfolio',
                  description: 'Expanding therapeutic segments to serve diverse healthcare needs.',
                  stat: 'XX+ Segments',
                },
                {
                  icon: CheckCircle,
                  title: 'Healthcare Partnerships',
                  description: 'Strong collaborations with hospitals, clinics, and healthcare providers.',
                  stat: 'XX+ Partners',
                },
                {
                  icon: Zap,
                  title: 'Professional Support',
                  description: 'Dedicated support for distributors, pharmacies, and business partners.',
                  stat: 'XX+ Locations',
                },
              ].map((item, index) => (
                <div key={index} className="card-primary text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary-100 to-secondary-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <item.icon className="text-primary-600" size={32} />
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-primary-700">{item.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{item.description}</p>
                  <p className="text-2xl font-bold text-secondary-600">{item.stat}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Products Section */}
        <section className="py-20 bg-gradient-to-br from-primary-50 to-secondary-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="section-title">Featured Products</h2>
              <p className="section-subtitle">Explore our premium pharmaceutical portfolio</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {filteredProducts.slice(0, 6).map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>

            <div className="text-center">
              <Link href="/products" className="button-primary inline-flex items-center gap-2">
                Explore Complete Portfolio <ArrowRight size={20} />
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="gradient-primary py-16 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Partner With Us?</h2>
            <p className="text-lg mb-8 text-white/90">
              Join our growing network of distributors, stockists, and healthcare partners.
            </p>
            <Link href="/business" className="inline-block px-8 py-3 bg-white text-primary-700 font-bold rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-105">
              Explore Business Opportunities
            </Link>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppButton />
    </>
  );
}
