'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowRight, Check, ChevronDown } from 'lucide-react';
import { Button } from '@/components/site/button';
import { Section, SectionHeading } from '@/components/site/section';
import { Card } from '@/components/site/card';
import { Reveal } from '@/components/site/reveal';
import { Icon } from '@/components/site/icon';
import { RotatingHeadline } from '@/components/site/rotating-headline';
import { LogoCarousel } from '@/components/site/logo-carousel';
import { WorldMap } from '@/components/site/world-map';
import { FloatingDots } from '@/components/site/floating-dots';
import {
  trustBar,
  whatWeDo,
  howItWorks,
  sectorsPreview,
  whyApexTech,
  testimonials,
  faqs,
} from '@/lib/data/site';
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '@/components/ui/accordion';
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from '@/components/ui/select';

const heroSlides = [
  {
    image:
      "https://images.unsplash.com/photo-1602016736566-7ed6a58894bd?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    eyebrow: "01 / REQUEST",
    title: "Service request received",
    description: "A new request enters the platform.",
  },
  {
    image:
      "https://plus.unsplash.com/premium_photo-1664302288981-41c246f5153c?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    eyebrow: "02 / MATCH",
    title: "Engineer matched",
    description: "A qualified local engineer is assigned.",
  },
  {
    image:
      "https://i.pinimg.com/1200x/be/69/a6/be69a6583672c75a52d78664bf2d5db9.jpg",
    eyebrow: "03 / DISPATCH",
    title: "On-site support",
    description: "The engineer arrives at the service location.",
  },
  {
    image:
      "https://plus.unsplash.com/premium_photo-1661422248310-8c124cdfb9a5?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    eyebrow: "04 / SIGN-OFF",
    title: "Work completed",
    description: "Documentation and sign-off close the ticket.",
  },
];

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBar />
      <WhatWeDo />
      <HowItWorks />
      <TheCompany />
      <SectorsPreview />
      {/* <CoverageSection /> */}
      <WhyApexTech />
      {/* <ClientLogos /> */}
      <Testimonials />
      <ContactStrip />
      {/* <FaqSection /> */}
    </>
  );
}

// function Hero() {
//   return (
//     <section className="relative overflow-hidden bg-white pt-32 pb-20 md:pt-40 md:pb-28">

//       {/* Animated colorful dots */}
//       <FloatingDots />

//       {/* Very subtle background glow */}
//       <div className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-blue-100/30 blur-[120px]" />

//       {/* Content */}
//       <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
//         <div className="mx-auto max-w-3xl text-center">

//           <p className="animate-fade-up text-[11px] font-semibold uppercase tracking-[0.2em] text-blue-950 font-hikasami ">
//             Powered by Engineers, Backed by Results
//           </p>

//           <h1 className="font-hikasami mt-6 text-3xl font-bold leading-tight tracking-tight text-gray-900 md:text-4xl md:text-[44px]">
//             Global <RotatingHeadline />
//             <br />
//             <span className="text-blue-950">
//               That Keep Your Business Running
//             </span>
//           </h1>

//           <p className="mx-auto mt-6 max-w-2xl text-[14px] leading-relaxed text-gray-600 md:text-[15px]">
//             A worldwide network of certified, multilingual engineers — from L1
//             deskside support to L5 data centre specialists — ready to dispatch to
//             your site within your SLA, 24/7×365. Wherever your infrastructure
//             lives, we get the right engineer to the right site, every time.
//           </p>

//           <div className="font-hikasami mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
//             <Button href="/contact" size="lg">
//               Become a Partner
//             </Button>

//             <Button href="/services" variant="outline" size="lg">
//               Explore Our Services
//             </Button>
//           </div>

//         </div>
//       </div>
//     </section>
//   );
// }




function Hero() {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((current) => (current + 1) % heroSlides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const slide = heroSlides[activeSlide];

  return (
    <section className="relative overflow-hidden bg-navy-950 text-white">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-40 top-20 h-[420px] w-[420px] rounded-full bg-blue-500/[0.05] blur-[120px]" />

        <div className="absolute -right-40 bottom-0 h-[420px] w-[420px] rounded-full bg-cyan-500/[0.04] blur-[120px]" />

        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 pb-20 pt-16 lg:px-8 lg:pb-28 lg:pt-24">
        <div className="grid items-center gap-14 lg:grid-cols-[0.92fr_1.08fr] lg:gap-20">
          {/* ========================================================= */}
          {/* LEFT */}
          {/* ========================================================= */}

          <div>
            {/* Eyebrow */}
            <div className="mb-7 mt-md-7 mt-8 inline-flex items-center gap-3 bg-white/[0.035] px-3.5 py-2">


              <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/60">
                Powered by Engineers, Backed by Results
              </span>
            </div>

            {/* Heading */}
            <h1 className="w-full text-3xl font-semibold leading-[1.05] tracking-[-0.045em] sm:text-3xl lg:text-[3rem]">
              Global IT Field Services
              <br />

              <p className="my-3 text-white/35">
               That Keep Your Business
              </p>
              <p className="my-3 text-white/35">
               Running
              </p>
            </h1>

            {/* Description */}
            <p className="mt-7 max-w-xl text-base leading-7 text-white/50 md:text-lg">
              Connect your service requests with qualified local engineers,
              dispatched on-site within your agreed SLA — with complete
              visibility from request to sign-off.
            </p>

            {/* CTA */}
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href="/contact"
                className="
                  inline-flex
                  h-12
                  items-center
                  justify-center
                  bg-white
                  px-6
                  text-sm
                  font-semibold
                  text-navy-800
                  transition-all
                  duration-300
                  hover:bg-blue-100
                  hover:shadow-[0_5px_12px_rgba(59,130,246,0.25)]
                "
              >
                Raise a Service Request

                <span className="ml-3 text-lg">→</span>
              </a>

              <a style={{ display: 'none' }}
                href="#how-it-works"
                className="
                  inline-flex
                  h-12
                  items-center
                  justify-center
                  border
                  border-white/15
                  bg-white/[0.03]
                  px-6
                  text-sm
                  font-semibold
                  text-white
                  transition-all
                  duration-300
                  hover:border-white/30
                  hover:bg-white/[0.06]
                "
              >
                See How It Works
              </a>
            </div>

            {/* Trust points */}
            <div className="mt-10 flex flex-wrap gap-x-7 gap-y-3 border-t border-white/10 pt-6">
              <div className="flex items-center gap-2 text-xs text-white/45">
                <span className="text-emerald-400">✓</span>
                24/7 × 365 Availability 
              </div>

              <div className="flex items-center gap-2 text-xs text-white/45">
                <span className="text-emerald-400">✓</span>
                2-Hour SLA Response 
              </div>

              <div className="flex items-center gap-2 text-xs text-white/45">
                <span className="text-emerald-400">✓</span>
                Ekahau Certified Partner
              </div>
            </div>
          </div>

          {/* ========================================================= */}
          {/* RIGHT - DEEPLY BLENDED IMAGE SLIDER */}
          {/* ========================================================= */}

          <div className="relative mx-auto w-full max-w-[720px]">
            {/* Large atmospheric glow */}
            <div className="pointer-events-none absolute -inset-20 bg-blue-500/[0.055] blur-[130px]" />

            <div
              className="
      relative
      aspect-[4/3]
      overflow-hidden
      [mask-image:radial-gradient(ellipse_75%_68%_at_58%_50%,black_30%,rgba(0,0,0,0.85)_50%,rgba(0,0,0,0.4)_72%,transparent_100%)]
      [-webkit-mask-image:radial-gradient(ellipse_75%_68%_at_58%_50%,black_30%,rgba(0,0,0,0.85)_50%,rgba(0,0,0,0.4)_72%,transparent_100%)]
    "
            >
              {heroSlides.map((item, index) => (
                <div
                  key={item.image}
                  className={`
          absolute
          inset-[-6%]
          transition-all
          duration-[1600ms]
          ease-out
          ${activeSlide === index
                      ? "scale-100 opacity-100"
                      : "scale-[1.08] opacity-0"
                    }
        `}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="
            h-full
            w-full
            object-cover
            saturate-[0.8]
          "
                  />

                  {/* Heavy navy blending */}
                  <div
                    className="
            absolute
            inset-0
            bg-navy-950/20
          "
                  />

                  {/* LEFT — strongest blend into text */}
                  <div
                    className="
            absolute
            inset-y-0
            left-0
            w-[65%]
            bg-gradient-to-r
            from-navy-950
            via-navy-950/75
            to-transparent
          "
                  />

                  {/* RIGHT — fade into background */}
                  <div
                    className="
            absolute
            inset-y-0
            right-0
            w-[30%]
            bg-gradient-to-l
            from-navy-950
            via-navy-950/45
            to-transparent
          "
                  />

                  {/* TOP — fade */}
                  <div
                    className="
            absolute
            inset-x-0
            top-0
            h-[35%]
            bg-gradient-to-b
            from-navy-950
            via-navy-950/45
            to-transparent
          "
                  />

                  {/* BOTTOM — fade */}
                  <div
                    className="
            absolute
            inset-x-0
            bottom-0
            h-[38%]
            bg-gradient-to-t
            from-navy-950
            via-navy-950/55
            to-transparent
          "
                  />

                  {/* Slight overall blue/navy tint */}
                  <div className="absolute inset-0 bg-blue-950/[0.08]" />
                </div>
              ))}

              {/* ===================================================== */}
              {/* CONTENT — floating naturally inside the image */}
              {/* ===================================================== */}

              <div className="absolute bottom-[10%] left-[12%] right-[10%]">
                <div className="max-w-md">
                  <p style={{ display: 'none' }}
                    key={`eyebrow-${activeSlide}`}
                    className="animate-[fadeIn_0.5s_ease-out] text-[10px] font-semibold uppercase tracking-[0.22em] text-blue-300"
                  >
                    {slide.eyebrow}
                  </p>

                  <h2
                    key={`title-${activeSlide}`}
                    className="mt-2 animate-[fadeIn_0.5s_ease-out] text-xl font-semibold tracking-tight text-white md:text-2xl"
                  >
                    {slide.title}
                  </h2>

                  <p
                    key={`description-${activeSlide}`}
                    className="mt-1 animate-[fadeIn_0.5s_ease-out] text-xs text-white/50 md:text-sm"
                  >
                    {slide.description}
                  </p>
                </div>

                {/* Progress */}
                <div className="mt-5 flex items-center gap-2">
                  {heroSlides.map((_, index) => (
                    <button
                      key={index}
                      type="button"
                      onClick={() => setActiveSlide(index)}
                      aria-label={`Show slide ${index + 1}`}
                      className="group relative h-1 overflow-hidden bg-white/15"
                    >
                      <span
                        className={`
                absolute inset-y-0 left-0 transition-all
                ${activeSlide === index
                            ? "w-full bg-blue-400"
                            : "w-0 bg-white/40"
                          }
              `}
                      />

                      <span className="block h-1 w-10 md:w-14" />
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Very subtle floating stage indicator */}
            <div className="absolute bottom-3 left-2 hidden sm:block" style={{ display: 'none' }}>
              <div className="flex items-center gap-3 text-white/35">
                <span className="text-[9px] uppercase tracking-[0.2em]">
                  Stage
                </span>

                <span className="text-sm font-medium text-white/70">
                  {String(activeSlide + 1).padStart(2, "0")}
                </span>

                <span className="text-xs text-white/25">
                  / {String(heroSlides.length).padStart(2, "0")}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom border */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-white/10" />

      {/* Animation */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(5px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}

function TrustBar() {
  return (
    <div className="border-b border-navy-100 bg-white" style={{ display: 'none' }}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-y-4 py-5 sm:flex sm:flex-row sm:items-center sm:justify-between sm:gap-4">
          {trustBar.map((item, i) => (
            <div
              key={item.label}
              className={`
                font-hikasami
                flex
                items-center
                justify-center
                gap-2.5
                text-center
                sm:justify-start
                ${i < trustBar.length - 1
                  ? 'sm:border-r sm:border-navy-100 sm:pr-6'
                  : ''
                }
              `}
            >
              <Icon
                name={item.icon}
                className="h-4 w-4 shrink-0 text-navy-600"
              />

              <span className="text-[15px] font-semibold text-navy-700">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function WhatWeDo() {
  return (
    <Section variant="default">
      <SectionHeading
        eyebrow="What We Do"
        title="Field services that keep your infrastructure running"
        description="From a single break-fix call to a global rollout, we dispatch the right engineer to the right site — every time."
      />

      {/* 2 Cards Per Row on Desktop */}
      <div className="grid gap-6 lg:grid-cols-2">
        {whatWeDo.map((item, i) => (
          <Reveal key={item.title} delay={i * 100}>
            <Link
              href={item.href}
              className="pointer-events-show block h-full"
            >
              <Card
                className={`
                  service-card
                  service-card-${i + 1}
                  group
                  relative
                  h-full
                  min-h-[300px]
                  overflow-hidden
                  border
                  border-navy-100
                  bg-white
                  p-0
                  transition-all
                  duration-500
                  ease-out

                  hover:-translate-y-2
                  hover:border-transparent
                  hover:shadow-xl
                `}
              >
                {/* Animated Background Glow */}
                <div
                  className="
                    pointer-events-none
                    absolute
                    -right-20
                    -top-20
                    z-0
                    h-48
                    w-48
                    rounded-full
                    opacity-[0.04]
                    blur-3xl
                    transition-all
                    duration-700
                    group-hover:scale-[1.8]
                    group-hover:opacity-[0.10]
                  "
                  style={{
                    backgroundColor: item.glow,
                  }}
                />

                {/* Content Layout */}
                <div className="relative z-10 flex h-full flex-col sm:flex-row">

                  {/* IMAGE */}
                  <div className="relative h-56 w-full shrink-0 overflow-hidden sm:h-auto sm:w-[42%]">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="
                        h-full
                        w-full
                        object-cover
                        transition-transform
                        duration-700
                        ease-out
                        group-hover:scale-110
                      "
                    />

                    {/* Image Overlay */}
                    <div
                      className="
                        absolute
                        inset-0
                        bg-gradient-to-r
                        from-black/5
                        via-transparent
                        to-white/20
                        transition-opacity
                        duration-500
                        group-hover:opacity-60
                      "
                    />

                    {/* Image Gradient */}
                    <div
                      className="
                        absolute
                        inset-0
                        bg-gradient-to-t
                        from-navy-950/50
                        via-transparent
                        to-transparent
                        opacity-50
                      "
                    />

                    {/* Icon */}
                    <div
                      className="
                        absolute
                        bottom-5
                        left-5
                        flex
                        h-12
                        w-12
                        items-center
                        justify-center
                        rounded-xl
                        border
                        border-white/40
                        bg-white/90
                        shadow-lg
                        backdrop-blur-sm
                        transition-all
                        duration-500
                        group-hover:scale-110
                        group-hover:-rotate-3
                      "
                      style={{
                        color: item.iconColor,
                      }}
                    >
                      <Icon
                        name={item.icon}
                        className="h-5 w-5"
                      />
                    </div>
                  </div>

                  {/* TEXT CONTENT */}
                  <div className="relative flex flex-1 flex-col justify-center p-6 lg:p-7">

                    {/* Small Label */}

                    {/* Title */}
                    <h3
                      className="
                        text-[18px]
                        font-semibold
                        leading-snug
                        text-navy-950
                        transition-all
                        duration-500
                        group-hover:translate-x-1
                      "
                    >
                      {item.title}
                    </h3>

                    {/* Description */}
                    <p
                      className="
                        mt-3
                        text-[14px]
                        leading-[1.7]
                        text-navy-400
                        transition-colors
                        duration-500
                        group-hover:text-navy-500
                      "
                    >
                      {item.description}
                    </p>

                    {/* Read More */}
                    <div
                      className="
                        mt-6
                        flex
                        items-center
                        gap-2
                        text-[13px]
                        font-semibold
                        text-navy-700
                      "
                    >
                      <span
                        className="
                          transition-colors
                          duration-300
                          group-hover:text-navy-950
                        "
                      >
                        Read More
                      </span>

                      <ArrowRight
                        className="
                          h-4
                          w-4
                          transition-all
                          duration-500
                          ease-out
                          group-hover:translate-x-2
                        "
                      />
                    </div>

                    {/* Bottom Gradient */}
                    <div
                      className="
                        absolute
                        bottom-0
                        left-0
                        h-[3px]
                        w-0
                        transition-all
                        duration-700
                        ease-out
                        group-hover:w-full
                      "
                      style={{
                        background: item.gradient,
                      }}
                    />
                  </div>
                </div>

                {/* Animated Shine */}
                <div
                  className="
                    pointer-events-none
                    absolute
                    -left-[120%]
                    top-0
                    z-20
                    h-full
                    w-1/3
                    skew-x-[-20deg]
                    bg-gradient-to-r
                    from-transparent
                    via-white/40
                    to-transparent
                    transition-all
                    duration-1000
                    group-hover:left-[140%]
                  "
                />
              </Card>
            </Link>
          </Reveal>
        ))}
      </div>

      {/* View All */}
      <div className="mt-10 text-center">
        <Button href="/services" variant="outline" size="default">
          View All Services
          <ArrowRight className="ml-1 h-3.5 w-3.5" />
        </Button>
      </div>

      <style jsx>{`
        .service-card {
          transform-style: preserve-3d;
        }

        .service-card-1:hover {
          box-shadow:
            0 20px 45px rgba(59, 130, 246, 0.12),
            0 0 0 1px rgba(59, 130, 246, 0.12);
        }

        .service-card-2:hover {
          box-shadow:
            0 20px 45px rgba(139, 92, 246, 0.12),
            0 0 0 1px rgba(139, 92, 246, 0.12);
        }

        .service-card-3:hover {
          box-shadow:
            0 20px 45px rgba(16, 185, 129, 0.12),
            0 0 0 1px rgba(16, 185, 129, 0.12);
        }

        .service-card-4:hover {
          box-shadow:
            0 20px 45px rgba(245, 158, 11, 0.12),
            0 0 0 1px rgba(245, 158, 11, 0.12);
        }
      `}</style>
    </Section>
  );
}

function HowItWorks() {
  return (
    <Section
      variant="off-white"
      className="relative overflow-hidden bg-navy-950 text-white"
    >
      <div className="relative z-10">
        {/* Header */}
        <div className="mb-16 flex flex-col gap-6 md:mb-20 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-8 bg-blue-400" />

              <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-blue-300">
                How It Works
              </p>
            </div>

            <h2 className="text-3xl font-semibold leading-[1.15] tracking-[-0.03em] text-white md:text-3xl">
              A straightforward process
              <br />
              <span className="text-white/40">Built around your goals</span>
            </h2>
          </div>

          <p className="max-w-sm text-sm leading-6 text-white/45 md:pb-1">
            From the first conversation to final delivery, every stage is
            clear, collaborative, and focused on moving your project forward.
          </p>
        </div>

        {/* Process */}
        <div className="relative">
          {/* Main timeline */}
          <div className="absolute left-0 right-0 top-[56px] hidden h-px bg-white/10 md:block" />

          <div className="grid md:grid-cols-4">
            {howItWorks.map((step, i) => (
              <Reveal key={step.step} delay={i * 120}>
                <div
                  className={`
                    group relative
                    border-white/10
                    md:min-h-[430px]
                    md:border-l
                    ${i === howItWorks.length - 1 ? "md:border-r" : ""}
                  `}
                >
                  {/* Step number */}
                  <div className="relative z-10 flex h-[112px] items-start px-5 pt-2 md:px-7">
                    <div
                      className="
                        flex
                        h-14
                        w-14
                        items-center
                        justify-center
                        rounded-full
                        border
                        border-white/15
                        bg-navy-950
                        text-sm
                        font-medium
                        text-white
                        transition-all
                        duration-300
                        group-hover:border-blue-400/60
                        group-hover:bg-navy-700
                      "
                    >
                      {String(step.step).padStart(2, "0")}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="px-5 pb-8 md:px-7">
                    {/* Image */}
                    <div className="relative mb-7 aspect-[4/3] overflow-hidden bg-white/5">
                      <img
                        src={step.image}
                        alt={step.title}
                        className="
                          h-full
                          w-full
                          object-cover
                          grayscale-r
                          transition-all
                          duration-700
                          group-hover:scale-105
                          group-hover:grayscale-0
                        "
                      />

                      {/* Image overlay */}
                      <div className="absolute inset-0 bg-navy-950/20 transition-opacity duration-500 group-hover:opacity-0" />

                      {/* Image corner */}
                      <div className="absolute bottom-0 left-0 h-8 w-8 border-b-2 border-l-2 border-white/50 transition-all duration-500 group-hover:h-12 group-hover:w-12 group-hover:border-blue-400" />
                    </div>

                    {/* Label */}
                    <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-blue-300/70">
                      Step {String(step.step).padStart(2, "0")}
                    </p>

                    {/* Title */}
                    <h3 className="text-lg font-semibold tracking-tight text-white">
                      {step.title}
                    </h3>

                    {/* Description */}
                    <p className="mt-3 max-w-[250px] text-[13px] leading-6 text-white/45">
                      {step.description}
                    </p>
                  </div>

                  {/* Bottom hover line */}
                  <div
                    className="
                      absolute
                      bottom-0
                      left-0
                      h-[2px]
                      w-0
                      bg-blue-400
                      transition-all
                      duration-500
                      group-hover:w-full
                    "
                  />
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Bottom statement */}
        <div className="mt-12 flex items-center justify-between border-t border-white/10 pt-6">
          <p className="text-xs text-white/30">
            Simple process. Clear communication. Better outcomes.
          </p>

          <div className="hidden items-center gap-2 text-xs text-white/40 sm:flex">

          </div>
        </div>
      </div>
    </Section>
  );
}

function TheCompany() {
  return (
    <Section variant="default">
      <div className="grid items-center gap-12 lg:grid-cols-2 pointer-events-show">
        {/* Left Content */}
        <Reveal>
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-navy-500">
            The Company
          </p>

          <h2 className="mt-3 text-2xl font-bold leading-tight text-navy-950 md:text-[28px]">
            Global reach, local engineers, one accountable team
          </h2>

          <div className="mt-6 space-y-4 text-[14px] leading-relaxed text-navy-400">
            <p>
              Global reach, local engineers, one accountable team. ApexTech
              Solutions operates a worldwide network of certified field
              engineers and approved partners, giving you on-the-ground coverage
              in 55+ countries without the overhead of building it yourself.
            </p>

            <p>
              We combine directly employed engineers with a vetted partner
              network, so we can scale to thousands of sites while keeping
              quality consistent — every engineer is certified, vetted, and works
              to your runbooks.
            </p>

            <p>
              With forward stocking locations across three regions, we reach remote
              and time-sensitive sites faster, keeping spares close to where they
              are needed most.
            </p>
          </div>

          <div className="mt-8">
            <Button href="/company" variant="primary" size="default">
              Learn More About Us
              <ArrowRight className="ml-1 h-3.5 w-3.5" />
            </Button>
          </div>
        </Reveal>

        {/* Right Image */}
        <div className="relative overflow-hidden rounded-2xl">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="images/all/services.png"
            alt="ApexTech Solutions"
            className="h-[380px] w-full object-cover transition-transform duration-200 hover:scale-105"
          />

          {/* Optional overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-navy-950/30 to-transparent" />
        </div>
      </div>
    </Section>
  );
}

function SectorsPreview() {
  return (
    <Section variant="off-white">
      <SectionHeading
        eyebrow="Sectors"
        title="Built for the industries that can't afford downtime"
        description="We tailor our field services to the realities of each sector we serve."
      />
      <div className="grid gap-5 md:grid-cols-3 pointer-events-show">
        {sectorsPreview.map((sector, i) => (
          <Reveal key={sector.name} delay={i * 100}>
            <Link href={sector.href} className="group block overflow-hidden rounded-xl border border-navy-100 bg-white card-shadow transition-all hover:-translate-y-1 hover:card-shadow-hover">
              <div className="relative h-48 overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={sector.image}
                  alt={sector.name}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/70 to-transparent" />
                <h3 className="absolute bottom-3 left-4 text-lg font-bold text-white">
                  {sector.name}
                </h3>
              </div>
              <div className="p-5">
                <p className="text-[13px] leading-relaxed text-navy-400">
                  {sector.description}
                </p>
                <p className="mt-3 flex items-center gap-1 text-[12px] font-semibold text-navy-700 transition-transform group-hover:translate-x-1">
                  Learn More <ArrowRight className="h-3 w-3" />
                </p>
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
      <div className="mt-10 text-center pointer-events-show">
        <Button href="/sectors" variant="outline" size="default">
          Explore All Sectors <ArrowRight className="ml-1 h-3.5 w-3.5" />
        </Button>
      </div>
    </Section>
  );
}

function CoverageSection() {
  return (
    <Section variant="default">
      <SectionHeading
        eyebrow="Coverage"
        title="One partner, five regions, global reach"
        description="Hover over each region to see our engineer and country coverage."
      />
      <Reveal>
        <WorldMap />
      </Reveal>
      <div className="mt-10 text-center">
        <Button href="/coverage" variant="outline" size="default">
          View Full Coverage <ArrowRight className="ml-1 h-3.5 w-3.5" />
        </Button>
      </div>
    </Section>
  );
}

function WhyApexTech() {
  return (
    <Section variant="navy">
      <SectionHeading
        eyebrow="Why ApexTech"
        title="What you get when you work with us"
        variant="light"
      />
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4 pointer-events-show">
        {whyApexTech.map((item, i) => (
          <Reveal key={item.title} delay={i * 80}>
            <div className="h-full rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all hover:-translate-y-1 hover:border-white/20 hover:bg-white/10">
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 text-white">
                <Icon name={item.icon} className="h-5 w-5" />
              </div>
              <h3 className="text-[15px] font-semibold text-white">
                {item.title}
              </h3>
              <p className="mt-2 text-[13px] leading-relaxed text-navy-200">
                {item.description}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

function ClientLogos() {
  return (
    <Section variant="off-white">
      <div className="mb-8 text-center">
        <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-navy-500">
          Trusted by teams worldwide
        </p>
      </div>
      <Reveal>
        <LogoCarousel />
      </Reveal>
    </Section>
  );
}

function Testimonials() {
  return (
    <Section variant="default">
      <SectionHeading
        eyebrow="Testimonials"
        title="What our clients say"
        description="Feedback from the teams we support and the field programs we run worldwide."
      />
      <div className="grid gap-5 md:grid-cols-3 pointer-events-show">
        {testimonials.map((t, i) => (
          <Reveal key={i} delay={i * 100}>
            <Card className="h-full">
              <div className="mb-4 text-3xl leading-none text-navy-200">&ldquo;</div>
              <p className="text-[14px] leading-relaxed text-navy-700">
                {t.quote}
              </p>
              <div className="mt-6 border-t border-navy-100 pt-4">
                <p className="text-[13px] font-semibold text-navy-950">
                  {t.author}
                </p>
                <p className="text-[12px] text-navy-400">{t.company}</p>
              </div>
            </Card>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

function ContactStrip() {
  const [role, setRole] = useState<string>('');

  return (
    <Section variant="off-white">
      <div className="rounded-2xl border border-navy-100 bg-white p-8 text-center card-shadow md:p-12">

        {/* Heading */}
        <h2 className="text-2xl font-bold text-navy-950 md:text-[28px]">
          Have some questions or want to say hi?
        </h2>

        <p className="mx-auto mt-3 max-w-xl text-[14px] leading-relaxed text-navy-400">
          Tell us a bit about you and we will get you to the right team.
        </p>

        {/* Contact Form */}
        <div className="mx-auto mt-8 flex max-w-2xl flex-col items-stretch gap-4 sm:flex-row sm:items-end">

          {/* Role Select */}
          <div className="flex-1 text-left">
            <label className="mb-1.5 block text-[12px] font-medium text-navy-700">
              Which best describes you?
            </label>

            <Select value={role} onValueChange={setRole}>
              <SelectTrigger className="h-11 w-full rounded-full">
                <SelectValue placeholder="Select your role" />
              </SelectTrigger>

              <SelectContent>
                <SelectItem value="engineer">
                  Engineer
                </SelectItem>
                <SelectItem value="customer">
                  Customer
                </SelectItem>
                <SelectItem value="business-owner">
                  Business Owner
                </SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Button */}
          <div className="sm:shrink-0">
            <Button
              href="/contact"
              variant="primary"
              size="lg"
              className="h-11 w-full sm:w-auto"
            >
              Get In Touch
              <ArrowRight className="ml-1 h-3.5 w-3.5" />
            </Button>
          </div>

        </div>
      </div>
    </Section>
  );
}

function FaqSection() {
  return (
    <Section variant="default">
      <SectionHeading
        eyebrow="FAQ"
        title="Questions we hear often"
        description="If you do not see your question here, just reach out — we are happy to help."
      />
      <div className="mx-auto max-w-3xl">
        <Accordion type="single" collapsible className="rounded-2xl border border-navy-100 bg-white px-5 card-shadow">
          {faqs.map((faq) => (
            <AccordionItem key={faq.question} value={faq.question} className="border-navy-100">
              <AccordionTrigger className="text-left text-[14px] font-semibold text-navy-950 hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-[13px] leading-relaxed text-navy-400">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </Section>
  );
}
