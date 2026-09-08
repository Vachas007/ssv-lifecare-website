'use client';

import Link from 'next/link';
import { Product } from '@/lib/products';
import { MessageCircle, Info } from 'lucide-react';

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const whatsappMessage = `Hello SSV LIFECARE, I am interested in ${product.name}. Please share product information.`;
  const whatsappUrl = `https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <div className="card-primary">
      {/* Featured Badge */}
      {product.featured && (
        <div className="absolute -top-3 -right-3 bg-secondary-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
          Featured
        </div>
      )}

      {/* Product Image Placeholder */}
      <div className="w-full h-40 bg-gradient-to-br from-primary-50 to-secondary-50 rounded-lg mb-4 flex items-center justify-center overflow-hidden">
        {product.image ? (
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="text-center">
            <div className="text-4xl mb-2">💊</div>
            <p className="text-gray-400 text-sm">Product Image</p>
          </div>
        )}
      </div>

      {/* Product Info */}
      <h3 className="text-lg font-bold text-primary-700 mb-2">{product.name}</h3>
      <p className="text-sm text-gray-600 mb-3 line-clamp-2">{product.composition}</p>

      {/* Details */}
      <div className="space-y-1 mb-4 text-xs text-gray-500">
        <p><span className="font-semibold">Category:</span> {product.category}</p>
        <p><span className="font-semibold">Form:</span> {product.dosageForm}</p>
        {product.strength && <p><span className="font-semibold">Strength:</span> {product.strength}</p>}
      </div>

      {/* Buttons */}
      <div className="flex gap-2 pt-4 border-t border-gray-100">
        <Link
          href={`/products/${product.id}`}
          className="flex-1 button-secondary text-center text-sm flex items-center justify-center gap-2"
        >
          <Info size={16} />
          Details
        </Link>
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 button-primary text-center text-sm flex items-center justify-center gap-2"
        >
          <MessageCircle size={16} />
          Enquire
        </a>
      </div>
    </div>
  );
};

export default ProductCard;
