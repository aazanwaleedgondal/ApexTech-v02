'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronDown, Menu, X, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { navLinks, servicesDropdown, sectorsDropdown } from '@/lib/data/site';
import { services } from '@/lib/data/services';
import { sectors } from '@/lib/data/sectors';
import { Button } from '@/components/site/button';

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [sectorsOpen, setSectorsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setServicesOpen(false);
    setSectorsOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-300',
        scrolled
          ? 'border-b border-white/10 bg-navy-950/80 backdrop-blur-xl nav-shadow'
          : 'border-b border-transparent bg-navy-950'
      )}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white transition-transform group-hover:scale-105">
              <span className="text-navy-950 font-bold text-sm">A</span>
            </div>
            <div className="flex flex-col leading-none">
              <span className="text-white font-bold text-[15px] tracking-tight">
                ApexTech
              </span>
              <span className="text-navy-300 text-[10px] font-medium tracking-[0.15em] uppercase">
                Solutions
              </span>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              if (link.megaMenu) {
                return (
                  <div
                    key={link.href}
                    className="relative"
                    onMouseEnter={() => setServicesOpen(true)}
                    onMouseLeave={() => setServicesOpen(false)}
                  >
                    <Link
                      href={link.href}
                      className={cn(
                        'flex items-center gap-1 rounded-lg px-3 py-2 text-[13px] font-medium transition-colors',
                        isActive ? 'text-white' : 'text-navy-200 hover:text-white'
                      )}
                    >
                      {link.label}
                      <ChevronDown
                        className={cn(
                          'h-3.5 w-3.5 transition-transform',
                          servicesOpen && 'rotate-180'
                        )}
                      />
                    </Link>
                    {servicesOpen && (
                      <div className="absolute left-1/2 top-full z-50 w-[640px] -translate-x-1/2 pt-2">
                        <div className="grid grid-cols-2 gap-1 rounded-2xl border border-navy-100 bg-white p-3 card-shadow animate-fade-in">
                          {services.map((s) => (
                            <Link
                              key={s.slug}
                              href={`/services#${s.slug}`}
                              // href={``}
                              className="group rounded-xl p-3 transition-colors hover:bg-navy-50"
                            >
                              <p className="text-[13px] font-semibold text-navy-950 group-hover:text-navy-700">
                                {s.title}
                              </p>
                              <p className="mt-0.5 text-[12px] leading-snug text-navy-400">
                                {s.tagline}
                              </p>
                            </Link>
                          ))}
                          <div className="col-span-2 mt-1 flex items-center justify-between rounded-xl bg-navy-950 px-4 py-3">
                            <p className="text-[12px] text-navy-200">
                              Need something not listed? We probably do it.
                            </p>
                            <Link
                              href="/contact"
                              // href=""
                              className="flex items-center gap-1 text-[12px] font-semibold text-white hover:text-navy-200"
                            >
                              Talk to us <ArrowRight className="h-3 w-3" />
                            </Link>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                );
              }
              if (link.dropdown) {
                return (
                  <div
                    key={link.href}
                    className="relative"
                    onMouseEnter={() => setSectorsOpen(true)}
                    onMouseLeave={() => setSectorsOpen(false)}
                  >
                    <Link
                      href={link.href}
                      className={cn(
                        'flex items-center gap-1 rounded-lg px-3 py-2 text-[13px] font-medium transition-colors',
                        isActive ? 'text-white' : 'text-navy-200 hover:text-white'
                      )}
                    >
                      {link.label}
                      <ChevronDown
                        className={cn(
                          'h-3.5 w-3.5 transition-transform',
                          sectorsOpen && 'rotate-180'
                        )}
                      />
                    </Link>
                    {sectorsOpen && (
                      <div className="absolute left-1/2 top-full z-50 w-64 -translate-x-1/2 pt-2">
                        <div className="rounded-2xl border border-navy-100 bg-white p-2 card-shadow animate-fade-in">
                          {sectors.map((s) => (
                            <Link
                              key={s.slug}
                              href={`/sectors#${s.slug}`}
                              // href={``}
                              className="block rounded-lg px-3 py-2 text-[13px] font-medium text-navy-700 transition-colors hover:bg-navy-50 hover:text-navy-950"
                            >
                              {s.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              }
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    'rounded-lg px-3 py-2 text-[13px] font-medium transition-colors',
                    isActive ? 'text-white' : 'text-navy-200 hover:text-white'
                  )}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* CTA + mobile toggle */}
          <div className="flex items-center gap-3">
            <Button href="/" variant="inverse" size="sm" className="hidden sm:inline-flex">
              Become a Partner
            </Button>
            <button
              aria-label="Toggle menu"
              onClick={() => setMobileOpen((v) => !v)}
              className="lg:hidden flex h-10 w-10 items-center justify-center rounded-lg text-white hover:bg-white/10"
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden fixed inset-0 top-16 z-40 bg-navy-950/95 backdrop-blur-xl overflow-y-auto">
          <nav className="mx-auto max-w-7xl px-4 py-6 flex flex-col gap-1">
            {navLinks.map((link, i) => (
              <Link
                key={link.href}
                href={link.href}
                style={{ animationDelay: `${i * 60}ms` }}
                className={cn(
                  'animate-fade-up border-b border-white/5 py-3 text-[15px] font-medium text-navy-200 hover:text-white',
                  pathname === link.href && 'text-white'
                )}
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-4">
              <Button href="/contact" variant="inverse" size="lg" className="w-full">
                Become a Partner
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
