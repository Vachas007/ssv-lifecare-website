'use client';

import Link from 'next/link';
import { Menu, X, Phone, MessageCircle } from 'lucide-react';
import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'About Us', href: '/about' },
    { label: 'Products', href: '/products' },
    { label: 'Catalogue', href: '/catalogue' },
    { label: 'Quality', href: '/quality' },
    { label: 'Business', href: '/business' },
    { label: 'Downloads', href: '/downloads' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <nav className="fixed w-full top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-primary-600 to-secondary-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">SSV</span>
            </div>
            <div className="hidden sm:block">
              <p className="text-primary-700 font-bold text-sm">SSV LIFECARE</p>
              <p className="text-gray-500 text-xs">Healthcare Solutions</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-700 hover:text-primary-600 font-medium text-sm transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link href="/contact" className="button-primary text-sm">
              Business Enquiry
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden border-t border-gray-200 bg-white">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block px-3 py-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              <Link href="/contact" className="block px-3 py-2 mt-4 button-primary text-center">
                Business Enquiry
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
