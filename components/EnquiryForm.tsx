'use client';

import { useState } from 'react';
import { Product } from '@/lib/products';

interface EnquiryFormProps {
  product?: Product;
  onSubmit?: (data: any) => void;
}

const EnquiryForm = ({ product, onSubmit }: EnquiryFormProps) => {
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    mobile: '',
    whatsapp: '',
    email: '',
    city: '',
    state: '',
    businessType: '',
    message: product ? `Interested in ${product.name}` : '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simulate form submission
      await new Promise((resolve) => setTimeout(resolve, 1000));
      
      if (onSubmit) {
        onSubmit(formData);
      }
      
      setSubmitted(true);
      setFormData({
        fullName: '',
        companyName: '',
        mobile: '',
        whatsapp: '',
        email: '',
        city: '',
        state: '',
        businessType: '',
        message: product ? `Interested in ${product.name}` : '',
      });
      
      setTimeout(() => setSubmitted(false), 3000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Name */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
        <input
          type="text"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          required
          className="input-field"
          placeholder="Your name"
        />
      </div>

      {/* Company */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Company Name *</label>
        <input
          type="text"
          name="companyName"
          value={formData.companyName}
          onChange={handleChange}
          required
          className="input-field"
          placeholder="Your company"
        />
      </div>

      {/* Phone & Mobile */}
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Mobile *</label>
          <input
            type="tel"
            name="mobile"
            value={formData.mobile}
            onChange={handleChange}
            required
            className="input-field"
            placeholder="10-digit number"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">WhatsApp</label>
          <input
            type="tel"
            name="whatsapp"
            value={formData.whatsapp}
            onChange={handleChange}
            className="input-field"
            placeholder="Same as mobile"
          />
        </div>
      </div>

      {/* Email */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="input-field"
          placeholder="your@email.com"
        />
      </div>

      {/* City & State */}
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">City</label>
          <input
            type="text"
            name="city"
            value={formData.city}
            onChange={handleChange}
            className="input-field"
            placeholder="City"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">State</label>
          <input
            type="text"
            name="state"
            value={formData.state}
            onChange={handleChange}
            className="input-field"
            placeholder="State"
          />
        </div>
      </div>

      {/* Business Type */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Business Type</label>
        <select
          name="businessType"
          value={formData.businessType}
          onChange={handleChange}
          className="input-field"
        >
          <option value="">Select business type</option>
          <option value="Distributor">Distributor</option>
          <option value="Stockist">Stockist</option>
          <option value="Pharmacy">Pharmacy</option>
          <option value="Hospital">Hospital</option>
          <option value="Clinic">Clinic</option>
          <option value="Other">Other</option>
        </select>
      </div>

      {/* Message */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          className="input-field resize-none h-24"
          placeholder="Tell us more about your interest..."
        />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full button-primary disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? 'Submitting...' : 'Submit Enquiry'}
      </button>

      {submitted && (
        <div className="p-4 bg-green-50 border border-green-200 rounded-lg text-green-800 text-sm">
          ✓ Thank you! We'll contact you shortly.
        </div>
      )}
    </form>
  );
};

export default EnquiryForm;
