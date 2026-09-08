'use client';

import { MessageCircle } from 'lucide-react';

const WhatsAppButton = () => {
  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '+919876543210';
  const message = 'Hello SSV LIFECARE, I would like to know more about your products and services.';
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group"
      title="Chat with SSV LIFECARE on WhatsApp"
    >
      <MessageCircle size={28} />
      <span className="absolute right-16 bottom-2 bg-green-600 text-white px-3 py-1 rounded text-sm opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
        Chat With Us
      </span>
    </a>
  );
};

export default WhatsAppButton;
