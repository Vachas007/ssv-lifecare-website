'use client';

import { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import ProductCard from '@/components/ProductCard';
import ProductSearch from '@/components/ProductSearch';
import { initialProducts, Product, PRODUCT_CATEGORIES, DOSAGE_FORMS } from '@/lib/products';
import { Filter, X } from 'lucide-react';

export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>(initialProducts);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(initialProducts);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedDosageForm, setSelectedDosageForm] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [showFilters, setShowFilters] = useState(false);

  useEffect(() => {
    let result = products;

    if (searchTerm) {
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          p.composition.toLowerCase().includes(searchTerm.toLowerCase()) ||
          p.category.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (selectedCategory) {
      result = result.filter((p) => p.category === selectedCategory);
    }

    if (selectedDosageForm) {
      result = result.filter((p) => p.dosageForm === selectedDosageForm);
    }

    setFilteredProducts(result);
  }, [searchTerm, selectedCategory, selectedDosageForm, products]);

  const clearFilters = () => {
    setSearchTerm('');
    setSelectedCategory(null);
    setSelectedDosageForm(null);
  };

  return (
    <>
      <Navbar />
      <main className="pt-20 pb-16">
        {/* Page Header */}
        <section className="bg-gradient-to-r from-primary-600 to-secondary-600 text-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Products</h1>
            <p className="text-lg text-white/90">Discover our comprehensive pharmaceutical product portfolio</p>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Search & Filters */}
          <div className="mb-8 space-y-6">
            {/* Search Bar */}
            <ProductSearch products={products} onSearch={setSearchTerm} />

            {/* Filter Toggle Button */}
            <div className="flex items-center justify-between">
              <div className="text-gray-600 font-medium">
                Showing {filteredProducts.length} product{filteredProducts.length !== 1 ? 's' : ''}
              </div>
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center gap-2 px-4 py-2 border border-primary-300 text-primary-600 rounded-lg hover:bg-primary-50 transition-colors lg:hidden"
              >
                <Filter size={20} />
                Filters
              </button>
            </div>

            {/* Active Filters Display */}
            {(selectedCategory || selectedDosageForm || searchTerm) && (
              <div className="flex flex-wrap gap-2 items-center">
                <span className="text-sm text-gray-600">Active filters:</span>
                {searchTerm && (
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm flex items-center gap-2">
                    {searchTerm}
                    <button onClick={() => setSearchTerm('')} className="hover:text-blue-900">
                      <X size={14} />
                    </button>
                  </span>
                )}
                {selectedCategory && (
                  <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm flex items-center gap-2">
                    {selectedCategory}
                    <button onClick={() => setSelectedCategory(null)} className="hover:text-green-900">
                      <X size={14} />
                    </button>
                  </span>
                )}
                {selectedDosageForm && (
                  <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm flex items-center gap-2">
                    {selectedDosageForm}
                    <button onClick={() => setSelectedDosageForm(null)} className="hover:text-purple-900">
                      <X size={14} />
                    </button>
                  </span>
                )}
                <button
                  onClick={clearFilters}
                  className="text-sm text-gray-600 hover:text-gray-900 font-semibold ml-auto"
                >
                  Clear all
                </button>
              </div>
            )}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar Filters */}
            <div className={`${showFilters ? 'block' : 'hidden'} lg:block lg:col-span-1`}>
              <div className="bg-white rounded-lg shadow-card p-6 sticky top-32 space-y-6">
                <h3 className="text-lg font-bold text-primary-700">Filters</h3>

                {/* Category Filter */}
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3 text-sm">Category</h4>
                  <div className="space-y-2 max-h-48 overflow-y-auto">
                    {PRODUCT_CATEGORIES.map((category) => (
                      <label key={category} className="flex items-center cursor-pointer hover:bg-gray-50 p-2 rounded">
                        <input
                          type="checkbox"
                          checked={selectedCategory === category}
                          onChange={(e) =>
                            setSelectedCategory(e.target.checked ? category : null)
                          }
                          className="w-4 h-4 text-primary-600 rounded accent-primary-600"
                        />
                        <span className="ml-2 text-sm text-gray-600">{category}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Dosage Form Filter */}
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3 text-sm">Dosage Form</h4>
                  <div className="space-y-2 max-h-40 overflow-y-auto">
                    {DOSAGE_FORMS.map((form) => (
                      <label key={form} className="flex items-center cursor-pointer hover:bg-gray-50 p-2 rounded">
                        <input
                          type="checkbox"
                          checked={selectedDosageForm === form}
                          onChange={(e) =>
                            setSelectedDosageForm(e.target.checked ? form : null)
                          }
                          className="w-4 h-4 text-primary-600 rounded accent-primary-600"
                        />
                        <span className="ml-2 text-sm text-gray-600">{form}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Clear Filters */}
                {(selectedCategory || selectedDosageForm) && (
                  <button
                    onClick={clearFilters}
                    className="w-full px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors text-sm font-medium"
                  >
                    Clear Filters
                  </button>
                )}
              </div>
            </div>

            {/* Products Grid */}
            <div className="lg:col-span-3">
              {filteredProducts.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {filteredProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <p className="text-xl text-gray-500 mb-4">No products found</p>
                  <p className="text-gray-400 mb-6">Try adjusting your filters or search terms</p>
                  <button
                    onClick={clearFilters}
                    className="button-primary"
                  >
                    Clear Filters
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>

      <Footer />
      <WhatsAppButton />
    </>
  );
}
