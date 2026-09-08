'use client';

import { useState, useEffect } from 'react';
import { Search } from 'lucide-react';
import { Product } from '@/lib/products';

interface ProductSearchProps {
  products: Product[];
  onSearch: (term: string) => void;
}

const ProductSearch = ({ products, onSearch }: ProductSearchProps) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  useEffect(() => {
    if (searchTerm.length === 0) {
      setSuggestions([]);
      setShowSuggestions(false);
      return;
    }

    const uniqueSuggestions = new Set<string>();
    const searchLower = searchTerm.toLowerCase();

    products.forEach((product) => {
      if (product.name.toLowerCase().includes(searchLower)) {
        uniqueSuggestions.add(product.name);
      }
      if (product.composition.toLowerCase().includes(searchLower)) {
        product.composition.split('+').forEach((comp) => {
          const trimmed = comp.trim();
          if (trimmed.toLowerCase().includes(searchLower)) {
            uniqueSuggestions.add(trimmed);
          }
        });
      }
      if (product.category.toLowerCase().includes(searchLower)) {
        uniqueSuggestions.add(product.category);
      }
    });

    setSuggestions(Array.from(uniqueSuggestions).slice(0, 8));
    setShowSuggestions(true);
  }, [searchTerm, products]);

  const handleSearch = (term: string = searchTerm) => {
    onSearch(term);
    setSearchTerm(term);
    setShowSuggestions(false);
  };

  return (
    <div className="relative w-full max-w-2xl">
      <div className="relative">
        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
          placeholder="Search by medicine name, composition or category..."
          className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-primary-500 transition-colors"
        />
      </div>

      {/* Suggestions Dropdown */}
      {showSuggestions && suggestions.length > 0 && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
          {suggestions.map((suggestion, index) => (
            <button
              key={index}
              onClick={() => handleSearch(suggestion)}
              className="w-full text-left px-4 py-2 hover:bg-gray-50 transition-colors border-b border-gray-100 last:border-b-0"
            >
              <Search className="inline-block mr-2 text-gray-400" size={16} />
              {suggestion}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductSearch;
