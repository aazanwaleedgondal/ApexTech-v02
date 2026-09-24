'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  ChevronDown,
  Menu,
  X,
  ArrowRight,
  Cpu,
  Wrench,
  Network,
  Settings2,
  ShieldCheck,
  Zap,
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { navLinks } from '@/lib/data/site';
import { services } from '@/lib/data/services';
import { Button } from '@/components/site/button';
import Image from 'next/image';

const serviceIcons = [
  Cpu,
  Wrench,
  Network,
  Settings2,
  ShieldCheck,
  Zap,
];

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const pathname = usePathname();

  /* ========================================================= */
  /* SCROLL HANDLER */
  /* ========================================================= */

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    handleScroll();

    window.addEventListener('scroll', handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  /* ========================================================= */
  /* CLOSE MENUS ON ROUTE CHANGE */
  /* ========================================================= */

  useEffect(() => {
    setMobileOpen(false);
    setServicesOpen(false);
  }, [pathname]);

  /* ========================================================= */
  /* BODY SCROLL LOCK */
  /* ========================================================= */

  useEffect(() => {
    if (mobileOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }

    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, [mobileOpen]);

  /* ========================================================= */
  /* MOBILE MENU TOGGLE */
  /* ========================================================= */

  const handleMobileToggle = (
    event: React.PointerEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
    event.stopPropagation();

    setServicesOpen(false);
    setMobileOpen((current) => !current);
  };

  /* ========================================================= */
  /* CLOSE MOBILE MENU */
  /* ========================================================= */

  const closeMobileMenu = () => {
    setMobileOpen(false);
  };

  return (
    <>
      {/* ===================================================== */}
      {/* HEADER */}
      {/* ===================================================== */}

      <header
        className={cn(
          `
          fixed
          inset-x-0
          top-0
          z-[9999]
          isolate
          w-full
          transition-all
          duration-500
          `,
          scrolled
            ? 'border-b border-white/10 bg-navy-950/95 backdrop-blur-xl'
            : 'border-b border-white/[0.06] bg-navy-950/90 backdrop-blur-sm'
        )}
      >
        {/* ================================================= */}
        {/* TOP TECHNICAL ACCENT */}
        {/* ================================================= */}

        <div
          className={cn(
            'pointer-events-none absolute left-0 right-0 top-0 h-px transition-opacity duration-500',
            scrolled
              ? 'bg-blue-400/30 opacity-100'
              : 'bg-white/10 opacity-60'
          )}
        />

        {/* ================================================= */}
        {/* HEADER INNER */}
        {/* ================================================= */}

        <div className="relative z-[10000] mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-[72px] items-center justify-between">
            {/* =============================================== */}
            {/* LOGO */}
            {/* =============================================== */}

            <Link 
              href="/"
              onClick={closeMobileMenu}
              className="
                relative
                z-[10001]
                flex
                shrink-0
                items-center
              "
            >
              <Image
                src="/images/logo/lo.png"
                alt="ApexTech Solutions logo"
                width={200}
                height={60}
                className="
                  h-12
                  w-auto
                  object-contain
                  opacity-95
                  transition-all
                  duration-300
                  hover:opacity-100
                "
                priority
              />
            </Link>

            {/* =============================================== */}
            {/* DESKTOP NAVIGATION */}
            {/* =============================================== */}

            <nav className="hidden items-center gap-1 lg:flex">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;

                /* =========================================== */
                /* SERVICES */
                /* =========================================== */

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
                          `
                          group
                          relative
                          flex
                          items-center
                          gap-1.5
                          px-3.5
                          py-2.5
                          text-[12px]
                          font-medium
                          tracking-[0.01em]
                          transition-colors
                          duration-200
                          `,
                          isActive
                            ? 'text-white'
                            : 'text-white/75 hover:text-white'
                        )}
                      >
                        {link.label}

                        <ChevronDown
                          className={cn(
                            'h-3.5 w-3.5 transition-all duration-300',
                            servicesOpen && 'rotate-180',
                            isActive
                              ? 'text-blue-400'
                              : 'text-white/30 group-hover:text-white/60'
                          )}
                        />

                        <span
                          className={cn(
                            `
                            absolute
                            bottom-0
                            left-3.5
                            right-3.5
                            h-px
                            origin-left
                            bg-blue-400
                            transition-transform
                            duration-300
                            `,
                            isActive
                              ? 'scale-x-100'
                              : 'scale-x-0 group-hover:scale-x-100'
                          )}
                        />
                      </Link>

                      {/* ===================================== */}
                      {/* SERVICES DROPDOWN */}
                      {/* ===================================== */}

                      {servicesOpen && (
                        <div className="absolute left-1/2 top-full z-[10002] w-[680px] -translate-x-1/2 pt-3">
                          <div
                            className="
                              overflow-hidden
                              border
                              border-slate-200
                              bg-white
                              shadow-[0_24px_60px_rgba(15,23,42,0.16)]
                              animate-fade-in
                            "
                          >
                            {/* DROPDOWN HEADER */}

                            <div className="flex items-center justify-between border-b border-slate-100 px-5 py-3">
                              <div className="flex items-center gap-3">
                                <span className="h-6 w-[2px] bg-blue-600" />

                                <h3 className="text-[12px] font-semibold tracking-tight text-slate-900">
                                  Technology & Engineering Services
                                </h3>
                              </div>

                              <span className="hidden text-[8px] font-medium uppercase tracking-[0.16em] text-slate-400 sm:block">
                                Field Service Network
                              </span>
                            </div>

                            {/* SERVICES GRID */}

                            <div className="grid grid-cols-3">
                              {services.map((service, index) => {
                                const Icon =
                                  serviceIcons[
                                    index % serviceIcons.length
                                  ];

                                return (
                                  <Link
                                    key={service.slug}
                                    href={`/services#${service.slug}`}
                                    className="
                                      group
                                      relative
                                      flex
                                      min-h-[78px]
                                      min-w-0
                                      w-full
                                      items-center
                                      gap-3
                                      border-b
                                      border-slate-100
                                      px-5
                                      py-3.5
                                      transition-all
                                      duration-200
                                      hover:bg-blue-50/50
                                    "
                                  >
                                    {/* ICON */}

                                    <div
                                      className="
                                        flex
                                        h-8
                                        w-8
                                        shrink-0
                                        items-center
                                        justify-center
                                        rounded-full
                                        border
                                        border-slate-200
                                        bg-slate-50
                                        text-slate-400
                                        transition-all
                                        duration-300
                                        group-hover:border-blue-200
                                        group-hover:bg-blue-50
                                        group-hover:text-blue-600
                                        group-hover:shadow-[0_0_0_4px_rgba(59,130,246,0.06)]
                                      "
                                    >
                                      <Icon
                                        className="
                                          h-3.5
                                          w-3.5
                                          transition-transform
                                          duration-300
                                          group-hover:scale-110
                                        "
                                      />
                                    </div>

                                    {/* CONTENT */}

                                    <div className="min-w-0 flex-1">
                                      <div className="flex items-center justify-between gap-2">
                                        <p
                                          className="
                                            truncate
                                            text-[11px]
                                            font-semibold
                                            leading-tight
                                            text-slate-800
                                            transition-colors
                                            duration-200
                                            group-hover:text-navy-800
                                          "
                                        >
                                          {service.title}
                                        </p>

                                        <ArrowRight
                                          className="
                                            h-3
                                            w-3
                                            shrink-0
                                            -translate-x-1
                                            text-navy-600
                                            opacity-0
                                            transition-all
                                            duration-200
                                            group-hover:translate-x-0
                                            group-hover:opacity-100
                                          "
                                        />
                                      </div>

                                      <div className="mt-2 flex items-center gap-1.5">
                                        <span
                                          className="
                                            h-px
                                            w-5
                                            bg-slate-200
                                            transition-all
                                            duration-300
                                            group-hover:w-8
                                            group-hover:bg-blue-500
                                          "
                                        />

                                        <span
                                          className="
                                            text-[7px]
                                            font-semibold
                                            uppercase
                                            tracking-[0.12em]
                                            text-slate-300
                                            transition-colors
                                            duration-300
                                            group-hover:text-navy-500
                                          "
                                        >
                                          Explore
                                        </span>
                                      </div>
                                    </div>

                                    {/* HOVER INDICATOR */}

                                    <span
                                      className="
                                        absolute
                                        bottom-0
                                        left-0
                                        h-[2px]
                                        w-0
                                        bg-blue-600
                                        transition-all
                                        duration-300
                                        group-hover:w-full
                                      "
                                    />
                                  </Link>
                                );
                              })}
                            </div>

                            {/* FOOTER */}

                            <div className="flex items-center justify-between bg-navy-950 px-5 py-3">
                              <p className="text-[12px] font-medium text-white/75">
                                Need a custom engineering solution?
                              </p>

                              <Link
                                href="/contact"
                                className="
                                  group
                                  flex
                                  items-center
                                  gap-1.5
                                  text-[8px]
                                  font-bold
                                  uppercase
                                  tracking-[0.1em]
                                  text-blue-100
                                  transition-colors
                                  hover:text-white
                                "
                              >
                                Talk to us

                                <ArrowRight
                                  className="
                                    h-3
                                    w-3
                                    transition-transform
                                    duration-200
                                    group-hover:translate-x-1
                                  "
                                />
                              </Link>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                }

                /* =========================================== */
                /* NORMAL DESKTOP LINK */
                /* =========================================== */

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={cn(
                      `
                      group
                      relative
                      px-3.5
                      py-2.5
                      text-[12px]
                      font-medium
                      tracking-[0.01em]
                      transition-colors
                      duration-200
                      `,
                      isActive
                        ? 'text-white'
                        : 'text-white/75 hover:text-white'
                    )}
                  >
                    {link.label}

                    <span
                      className={cn(
                        `
                        absolute
                        bottom-0
                        left-3.5
                        right-3.5
                        h-px
                        origin-left
                        bg-blue-400
                        transition-transform
                        duration-300
                        `,
                        isActive
                          ? 'scale-x-100'
                          : 'scale-x-0 group-hover:scale-x-100'
                      )}
                    />
                  </Link>
                );
              })}
            </nav>

            {/* =============================================== */}
            {/* RIGHT SIDE */}
            {/* =============================================== */}

            <div className="relative z-[10001] flex items-center gap-3">
              {/* DESKTOP CTA */}

              <Button
                href="/contact"
                variant="inverse"
                size="sm"
                className="
                  hidden
                  h-10
                  rounded-none
                  border
                  border-blue-400/30
                  bg-white-700
                  px-5
                  text-[10px]
                  font-semibold
                  uppercase
                  tracking-[0.09em]
                  text-white
                  shadow-none
                  transition-all
                  duration-300
                  hover:-translate-y-0.5
                  sm:inline-flex
                "
              >
                Become a Partner

                <ArrowRight className="ml-2 h-3.5 w-3.5" />
              </Button>

              {/* =========================================== */}
              {/* HAMBURGER */}
              {/* =========================================== */}

              <button
                type="button"
                aria-label={
                  mobileOpen ? 'Close menu' : 'Open menu'
                }
                aria-expanded={mobileOpen}
                onPointerDown={handleMobileToggle}
                className="
                  relative
                  z-[10003]
                  flex
                  h-10
                  w-10
                  touch-manipulation
                  select-none
                  items-center
                  justify-center
                  border
                  border-white/10
                  bg-white/[0.03]
                  text-white/80
                  outline-none
                  transition-all
                  duration-200
                  hover:border-white/20
                  hover:bg-white/[0.07]
                  hover:text-white
                  active:scale-95
                  lg:hidden
                "
              >
                <span className="pointer-events-none">
                  {mobileOpen ? (
                    <X className="h-5 w-5" />
                  ) : (
                    <Menu className="h-5 w-5" />
                  )}
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* ================================================= */}
        {/* MOBILE MENU */}
        {/* ================================================= */}

        <div
          className={cn(
            `
            absolute
            left-0
            right-0
            top-full
            z-[10002]
            max-h-[calc(100vh-72px)]
            overflow-y-auto
            border-t
            border-white/10
            bg-navy-950
            shadow-[0_20px_50px_rgba(0,0,0,0.35)]
            transition-all
            duration-300
            lg:hidden
            `,
            mobileOpen
              ? 'pointer-events-auto visible translate-y-0 opacity-100'
              : 'pointer-events-none invisible -translate-y-2 opacity-0'
          )}
        >
          {/* BACKGROUND */}

          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            <div
              className="
                absolute
                -right-40
                top-20
                h-80
                w-80
                rounded-full
                bg-blue-500/[0.05]
                blur-[110px]
              "
            />

            <div
              className="absolute inset-0 opacity-[0.018]"
              style={{
                backgroundImage:
                  'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
                backgroundSize: '48px 48px',
              }}
            />
          </div>

          {/* MOBILE CONTENT */}

          <nav className="relative mx-auto flex max-w-7xl flex-col px-5 py-7 sm:px-6">
            {/* LABEL */}

            <div
              className={cn(
                'mb-4 flex items-center gap-2 transition-all duration-300',
                mobileOpen
                  ? 'translate-x-0 opacity-100'
                  : '-translate-x-3 opacity-0'
              )}
            >
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />

              <span className="text-[9px] font-semibold uppercase tracking-[0.22em] text-white/30">
                Navigation
              </span>
            </div>

            {/* LINKS */}

            {navLinks.map((link, index) => {
              const isActive = pathname === link.href;

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={closeMobileMenu}
                  style={{
                    transitionDelay: mobileOpen
                      ? `${index * 50}ms`
                      : '0ms',
                  }}
                  className={cn(
                    `
                    group
                    flex
                    items-center
                    justify-between
                    border-b
                    border-white/[0.07]
                    py-4
                    text-[14px]
                    font-medium
                    transition-all
                    duration-300
                    `,
                    mobileOpen
                      ? 'translate-x-0 opacity-100'
                      : '-translate-x-3 opacity-0',
                    isActive
                      ? 'text-white'
                      : 'text-white/75 hover:text-white'
                  )}
                >
                  <span>{link.label}</span>

                  <ArrowRight
                    className={cn(
                      'h-4 w-4 transition-all duration-200',
                      isActive
                        ? 'translate-x-0 text-blue-400 opacity-100'
                        : '-translate-x-2 text-white/30 opacity-0 group-hover:translate-x-0 group-hover:opacity-100'
                    )}
                  />
                </Link>
              );
            })}

            {/* CTA */}

            <div
              className={cn(
                'mt-7 transition-all duration-300',
                mobileOpen
                  ? 'translate-y-0 opacity-100'
                  : 'translate-y-2 opacity-0'
              )}
              style={{
                transitionDelay: mobileOpen
                  ? `${navLinks.length * 50 + 50}ms`
                  : '0ms',
              }}
            >
              <Button
                href="/contact"
                variant="inverse"
                size="lg"
                onClick={closeMobileMenu}
                className="
                  h-12
                  w-full
                  rounded-none
                  bg-blue-500
                  text-[10px]
                  font-semibold
                  uppercase
                  tracking-[0.1em]
                  text-white
                  transition-all
                  hover:bg-blue-400
                "
              >
                Become a Partner

                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>

            {/* STATUS */}

            <div
              className={cn(
                'mt-8 flex items-center justify-between border-t border-white/[0.07] pt-5 transition-all duration-300',
                mobileOpen
                  ? 'translate-y-0 opacity-100'
                  : 'translate-y-2 opacity-0'
              )}
            >
              <span className="text-[9px] uppercase tracking-[0.2em] text-white/25">
                Field Service Network
              </span>

              
            </div>
          </nav>
        </div>
      </header>
    </>
  );
}


// 'use client';

// import { useEffect, useState } from 'react';
// import Link from 'next/link';
// import { usePathname } from 'next/navigation';
// import { ChevronDown, Menu, X, ArrowRight } from 'lucide-react';
// import { cn } from '@/lib/utils';
// import { navLinks } from '@/lib/data/site';
// import { services } from '@/lib/data/services';
// import { Button } from '@/components/site/button';
// import Image from 'next/image';

// export function SiteHeader() {
//   const [scrolled, setScrolled] = useState(false);
//   const [mobileOpen, setMobileOpen] = useState(false);
//   const [servicesOpen, setServicesOpen] = useState(false);
//   const pathname = usePathname();

//   useEffect(() => {
//     const onScroll = () => setScrolled(window.scrollY > 20);

//     onScroll();
//     window.addEventListener('scroll', onScroll, { passive: true });

//     return () => window.removeEventListener('scroll', onScroll);
//   }, []);

//   useEffect(() => {
//     setMobileOpen(false);
//     setServicesOpen(false);
//   }, [pathname]);

//   useEffect(() => {
//     document.body.style.overflow = mobileOpen ? 'hidden' : '';

//     return () => {
//       document.body.style.overflow = '';
//     };
//   }, [mobileOpen]);

//   return (
//     <header
//       className={cn(
//         'fixed inset-x-0 top-0 z-50 transition-all duration-300',
//         scrolled
//           ? 'border-b border-gray-200 bg-white/95 shadow-sm backdrop-blur-xl'
//           : 'border-b border-gray-100 bg-white'
//       )}
//     >
//       <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
//         <div className="flex h-16 items-center justify-between">
//           {/* Logo */}
//           <Link
//             href="/"
//             className="group flex items-center"
//           >
//             <Image
//               src="/images/logo/logo1.webp"
//               alt="ApexTech Solutions logo"
//               width={200}
//               height={60}
//               className="h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-[1.03]"
//               priority
//             />
//           </Link>

//           {/* Desktop Navigation */}
//           <nav className="hidden lg:flex items-center gap-1">
//             {navLinks.map((link) => {
//               const isActive = pathname === link.href;

//               if (link.megaMenu) {
//                 return (
//                   <div
//                     key={link.href}
//                     className="relative"
//                     onMouseEnter={() => setServicesOpen(true)}
//                     onMouseLeave={() => setServicesOpen(false)}
//                   >
//                     <Link
//                       href={link.href}
//                       className={cn(
//                         'group flex items-center gap-1.5 rounded-xl px-3.5 py-2.5 text-[13px] font-medium transition-all duration-200',
//                         isActive
//                           ? 'bg-blue-50 text-blue-950'
//                           : 'text-gray-600 hover:bg-gray-50 hover:text-gray-950'
//                       )}
//                     >
//                       {link.label}

//                       <ChevronDown
//                         className={cn(
//                           'h-3.5 w-3.5 transition-transform duration-200',
//                           servicesOpen && 'rotate-180',
//                           isActive
//                             ? 'text-blue-500'
//                             : 'text-gray-400 group-hover:text-gray-600'
//                         )}
//                       />
//                     </Link>

//                     {/* Services Dropdown */}
//                     {servicesOpen && (
//                       <div className="absolute left-1/2 top-full z-50 w-[680px] -translate-x-1/2 pt-3">
//                         <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white p-3 shadow-[0_20px_60px_rgba(15,23,42,0.12)] animate-fade-in">

//                           <div className="mb-2 flex items-center justify-between px-3 py-2">
//                             <div>
//                               <p className="text-[11px] font-semibold uppercase mt-2 text-blue-950">
//                                 What we do
//                               </p>
//                               <p className="mt-0.5 text-sm font-semibold text-gray-900">
//                                 Technology & Engineering Services
//                               </p>
//                             </div>
//                           </div>

//                           <div className="grid grid-cols-2 gap-1">
//                             {services.map((s) => (
//                               <Link
//                                 key={s.slug}
//                                 href={`/services#${s.slug}`}
//                                 className="group rounded-xl p-3.5 transition-all duration-200 hover:bg-gray-50"
//                               >
//                                 <div className="flex items-start justify-between">
//                                   <p className="text-[13px] font-semibold text-gray-900 transition-colors group-hover:text-blue-950">
//                                     {s.title}
//                                   </p>

//                                   <ArrowRight
//                                     className="mt-0.5 h-3.5 w-3.5 -translate-x-1 opacity-0 transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100 text-blue-500"
//                                   />
//                                 </div>

//                                 <p className="mt-1 text-[12px] leading-relaxed text-gray-500">
//                                   {s.tagline}
//                                 </p>
//                               </Link>
//                             ))}
//                           </div>

//                           {/* Dropdown CTA */}
//                           <div className="mt-2 flex items-center justify-between rounded-xl bg-gray-950 px-5 py-4">
//                             <div>
//                               <p className="text-[12px] font-medium text-white">
//                                 Need something not listed?
//                               </p>
//                               <p className="mt-0.5 text-[11px] text-gray-400">
//                                 Let&apos;s discuss your requirements.
//                               </p>
//                             </div>

//                             <Link
//                               href="/contact"
//                               className="flex items-center gap-1.5 rounded-lg bg-white px-3 py-2 text-[11px] font-semibold text-gray-900 transition-colors hover:bg-blue-50 hover:text-blue-950"
//                             >
//                               Talk to us
//                               <ArrowRight className="h-3 w-3" />
//                             </Link>
//                           </div>
//                         </div>
//                       </div>
//                     )}
//                   </div>
//                 );
//               }

//               return (
//                 <Link
//                   key={link.href}
//                   href={link.href}
//                   className={cn(
//                     'rounded-xl px-3.5 py-2.5 text-[13px] font-medium transition-all duration-200',
//                     isActive
//                       ? 'bg-blue-50 text-blue-950'
//                       : 'text-gray-600 hover:bg-gray-50 hover:text-gray-950'
//                   )}
//                 >
//                   {link.label}
//                 </Link>
//               );
//             })}
//           </nav>

//           {/* Right Side */}
//           <div className="flex items-center gap-2.5">
//             <Button
//               href="/contact"
//               size="sm"
//               className="hidden sm:inline-flex rounded-xl bg-navy-900 px-5 text-[12px] font-semibold text-white shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg"
//             >
//               Become a Partner
//               <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
//             </Button>

//             {/* Mobile Toggle */}
//             <button
//               aria-label="Toggle menu"
//               onClick={() => setMobileOpen((v) => !v)}
//               className="flex h-10 w-10 items-center justify-center rounded-xl border border-gray-200 bg-gray-50 text-gray-800 transition-colors hover:bg-gray-100 lg:hidden"
//             >
//               {mobileOpen ? (
//                 <X className="h-5 w-5" />
//               ) : (
//                 <Menu className="h-5 w-5" />
//               )}
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       {mobileOpen && (
//         <div className="fixed inset-x-0 top-16 bottom-0 z-40 overflow-y-auto border-t border-gray-200 bg-white lg:hidden">
//           <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-5 sm:px-6">
//             {navLinks.map((link, i) => (
//               <Link
//                 key={link.href}
//                 href={link.href}
//                 style={{ animationDelay: `${i * 50}ms` }}
//                 className={cn(
//                   'animate-fade-up rounded-xl px-4 py-3.5 text-[14px] font-medium transition-all',
//                   pathname === link.href
//                     ? 'bg-blue-50 text-blue-950'
//                     : 'text-gray-700 hover:bg-gray-50 hover:text-gray-950'
//                 )}
//               >
//                 {link.label}
//               </Link>
//             ))}

//             <div className="mt-4 border-t border-gray-100 pt-5">
//               <Button
//                 href="/contact"
//                 size="lg"
//                 className="w-full rounded-xl bg-gray-950 text-white hover:bg-blue-600"
//               >
//                 Become a Partner
//                 <ArrowRight className="ml-2 h-4 w-4" />
//               </Button>
//             </div>
//           </nav>
//         </div>
//       )}
//     </header>
//   );
// }