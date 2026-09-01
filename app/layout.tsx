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
  title: 'Global IT Field Services | 55+ Countries, 24/7×365 | ApexTech Solutions',
  description:
    'ApexTech Solutions delivers certified, multilingual field engineers across 55+ countries — Smart Hands, IMAC, Data Centre Support and Ekahau-certified wireless surveys, dispatched within a 2-hour SLA, 24/7×365.',
  keywords: [
    'global IT field services',
    'smart hands support',
    'IMAC services',
    'data centre support engineers',
    'wireless survey services',
    '24/7 field engineer dispatch',
    'ApexTech Solutions',
  ],
  openGraph: {
    title: 'Global IT Field Services | 55+ Countries, 24/7×365 | ApexTech Solutions',
    description:
      'Powered by Engineers, Backed by Results. Certified multilingual field engineers across 55+ countries, available 24/7×365.',
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
