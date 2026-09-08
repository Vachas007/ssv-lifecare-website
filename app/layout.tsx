import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'SSV LIFECARE | Premium Pharmaceutical Products',
  description: 'Quality-focused pharmaceutical solutions for better health. Explore our complete product portfolio.',
  keywords: 'pharmaceutical, medicines, health, SSV LIFECARE, quality drugs',
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://ssvlifeccare.com',
    siteName: 'SSV LIFECARE',
    title: 'SSV LIFECARE | Premium Pharmaceutical Products',
    description: 'Quality-focused pharmaceutical solutions for better health',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900">{children}</body>
    </html>
  );
}
