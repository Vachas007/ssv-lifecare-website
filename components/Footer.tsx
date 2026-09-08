'use client';

import Link from 'next/link';
import { Mail, Phone, MapPin, Linkedin, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-primary-900 to-primary-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h3 className="text-lg font-bold mb-4 flex items-center space-x-2">
              <div className="w-8 h-8 bg-secondary-500 rounded-lg flex items-center justify-center">
                <span className="text-primary-900 font-bold text-sm">SSV</span>
              </div>
              <span>SSV LIFECARE</span>
            </h3>
            <p className="text-gray-200 text-sm leading-relaxed">
              Committed to building a trusted healthcare portfolio through quality-focused pharmaceutical products.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-md font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-gray-200">
              <li><Link href="/" className="hover:text-secondary-400 transition-colors">Home</Link></li>
              <li><Link href="/about" className="hover:text-secondary-400 transition-colors">About Us</Link></li>
              <li><Link href="/products" className="hover:text-secondary-400 transition-colors">Products</Link></li>
              <li><Link href="/catalogue" className="hover:text-secondary-400 transition-colors">Catalogue</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-md font-bold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-gray-200">
              <li><Link href="/quality" className="hover:text-secondary-400 transition-colors">Quality</Link></li>
              <li><Link href="/business" className="hover:text-secondary-400 transition-colors">Business Opportunities</Link></li>
              <li><Link href="/downloads" className="hover:text-secondary-400 transition-colors">Downloads</Link></li>
              <li><Link href="/contact" className="hover:text-secondary-400 transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-md font-bold mb-4">Contact</h4>
            <div className="space-y-3 text-sm text-gray-200">
              <div className="flex items-start space-x-3">
                <Phone size={18} className="mt-1 flex-shrink-0" />
                <p>+91-XXXX-XXXX-XX</p>
              </div>
              <div className="flex items-start space-x-3">
                <Mail size={18} className="mt-1 flex-shrink-0" />
                <p>info@ssvlifeccare.com</p>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin size={18} className="mt-1 flex-shrink-0" />
                <p>India</p>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-primary-700 mt-8 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <p className="text-sm text-gray-300 text-center md:text-left">
              &copy; 2024 SSV LIFECARE. All rights reserved.
            </p>
            <div className="flex justify-center md:justify-end space-x-6">
              <Link href="/privacy" className="text-sm text-gray-300 hover:text-secondary-400 transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-sm text-gray-300 hover:text-secondary-400 transition-colors">
                Terms & Conditions
              </Link>
              <Link href="/disclaimer" className="text-sm text-gray-300 hover:text-secondary-400 transition-colors">
                Disclaimer
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
