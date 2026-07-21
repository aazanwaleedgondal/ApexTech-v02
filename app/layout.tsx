import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { SiteHeader } from '@/components/site/header';
import { SiteFooter } from '@/components/site/footer';
import { PageTransition } from '@/components/site/page-transition';
import { ScrollToTop } from '@/components/site/scroll-to-top';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  metadataBase: new URL('https://apextech.solutions'),
  title: 'ApexTech Solutions — Global IT Field Services',
  description:
    'ApexTech Solutions delivers global IT field services — Smart Hands, IMAC, Data Centre Support, Wireless Survey and more — with certified multilingual engineers across 60+ countries.',
  keywords: [
    'IT field services',
    'smart hands',
    'IMAC',
    'data centre support',
    'wireless survey',
    'global deployments',
    'ApexTech',
  ],
  openGraph: {
    title: 'ApexTech Solutions — Global IT Field Services',
    description:
      'Delivering with Scale and Agility. Certified multilingual engineers across 60+ countries, available 24/7 × 365.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased">
        <div className="relative flex min-h-screen flex-col">
          <SiteHeader />
          <PageTransition>
            <main className="flex-1">{children}</main>
          </PageTransition>
          <SiteFooter />
        </div>
        <ScrollToTop />
      </body>
    </html>
  );
}
