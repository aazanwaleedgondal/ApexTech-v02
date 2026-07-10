'use client';

import { useState } from 'react';
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

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBar />
      <WhatWeDo />
      {/* <HowItWorks /> */}
      {/* <TheCompany /> */}
      {/* <SectorsPreview /> */}
      {/* <CoverageSection /> */}
      {/* <WhyApexTech /> */}
      {/* <ClientLogos /> */}
      {/* <Testimonials /> */}
      {/* <ContactStrip /> */}
      {/* <FaqSection /> */}
    </>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden bg-navy-950 pt-32 pb-20 md:pt-40 md:pb-28">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-[0.07]">
        <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>
      {/* Glow */}
      <div className="absolute -top-40 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-navy-600/20 blur-[120px]" />
      <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-navy-700/20 blur-[100px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="animate-fade-up text-[11px] font-semibold uppercase tracking-[0.2em] text-navy-300">
            Delivering with Scale and Agility
          </p>
          <h1 className="mt-6 text-3xl font-bold leading-tight tracking-tight text-white md:text-5xl md:text-[52px]">
            Global <RotatingHeadline />
            <br />
            <span className="text-navy-300">on demand, anywhere.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-[14px] leading-relaxed text-navy-200 md:text-[15px]">
            A worldwide network of certified, multilingual engineers — from L1
            deskside to L5 data centre specialists — ready to dispatch within
            your SLA, 24/7 × 365.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button href="/#contact" variant="inverse" size="lg">
              Become a Partner
            </Button>
            <Button href="/#services" variant="outlineLight" size="lg">
              Explore Our Services
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

function TrustBar() {
  return (
    <div className="border-b border-navy-100 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-4 py-5 sm:flex-row">
          {trustBar.map((item, i) => (
            <div
              key={item.label}
              className={`flex items-center gap-2.5 ${
                i < trustBar.length - 1 ? 'sm:border-r sm:border-navy-100 sm:pr-6' : ''
              }`}
            >
              <Icon name={item.icon} className="h-4 w-4 text-navy-600" />
              <span className="text-[12px] font-semibold text-navy-700">
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
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {whatWeDo.map((item, i) => (
          <Reveal key={item.title} delay={i * 80}>
            <Link href={item.href} className="block h-full pointer-events-none">
              <Card className="group h-full hover:-translate-y-1 hover:card-shadow-hover">
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-navy-50 text-navy-700 transition-colors group-hover:bg-navy-950 group-hover:text-white">
                  <Icon name={item.icon} className="h-5 w-5" />
                </div>
                <h3 className="text-[15px] font-semibold text-navy-950">
                  {item.title}
                </h3>
                <p className="mt-2 text-[13px] leading-relaxed text-navy-400">
                  {item.description}
                </p>
                <p className="mt-4 flex items-center gap-1 text-[12px] font-semibold text-navy-700 transition-transform group-hover:translate-x-1">
                  Read More <ArrowRight className="h-3 w-3" />
                </p>
              </Card>
            </Link>
          </Reveal>
        ))}
      </div>
      <div className="mt-10 text-center pointer-events-none">
        <Button href="/services" variant="outline" size="default">
          View All Services <ArrowRight className="ml-1 h-3.5 w-3.5" />
        </Button>
      </div>
    </Section>
  );
}

function HowItWorks() {
  return (
    <Section variant="off-white">
      <SectionHeading
        eyebrow="How It Works"
        title="From request to sign-off in four steps"
      />
      <div className="grid gap-4 md:grid-cols-4">
        {howItWorks.map((step, i) => (
          <Reveal key={step.step} delay={i * 100}>
            <div className="relative h-full rounded-xl border border-navy-100 bg-white p-6 card-shadow">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-navy-950 text-[14px] font-bold text-white">
                {step.step}
              </div>
              <h3 className="mt-4 text-[14px] font-semibold text-navy-950">
                {step.title}
              </h3>
              <p className="mt-2 text-[12px] leading-relaxed text-navy-400">
                {step.description}
              </p>
              {i < howItWorks.length - 1 && (
                <ArrowRight className="absolute -right-3 top-10 hidden h-5 w-5 text-navy-300 md:block" />
              )}
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

function TheCompany() {
  return (
    <Section variant="default">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <Reveal>
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-navy-500">
            The Company
          </p>
          <h2 className="mt-3 text-2xl font-bold leading-tight text-navy-950 md:text-[28px]">
            Global reach, local engineers, one accountable team
          </h2>
          <div className="mt-6 space-y-4 text-[14px] leading-relaxed text-navy-400">
            <p>
              ApexTech Solutions operates a worldwide network of certified field
              engineers and approved partners — giving you on-the-ground
              coverage in 55+ countries without the overhead of building it
              yourself.
            </p>
            <p>
              We combine our own directly employed engineers with a vetted
              partner network, so we can scale to thousands of sites while
              keeping quality consistent. Every engineer is certified, vetted,
              and works to your runbooks.
            </p>
            <p>
              With forward stocking locations across three regions, we reach
              remote and time-sensitive sites faster — keeping spares close to
              where they are needed most.
            </p>
          </div>
          <div className="mt-8">
            <Button href="/company" variant="primary" size="default">
              Learn More About Us <ArrowRight className="ml-1 h-3.5 w-3.5" />
            </Button>
          </div>
        </Reveal>
        <Reveal delay={150}>
          <div className="grid grid-cols-2 gap-4">
            {[
              { stat: '55+', label: 'Countries covered' },
              { stat: '1,750+', label: 'Certified engineers' },
              { stat: '8', label: 'Forward stocking locations' },
              { stat: '24/7', label: 'Availability, 365 days' },
            ].map((item) => (
              <div
                key={item.label}
                className="rounded-xl border border-navy-100 bg-navy-50 p-6 text-center"
              >
                <p className="text-3xl font-bold text-navy-950">{item.stat}</p>
                <p className="mt-1 text-[12px] font-medium text-navy-400">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
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
      <div className="grid gap-5 md:grid-cols-3">
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
      <div className="mt-10 text-center">
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
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
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
        description="Real feedback from the teams we support — placeholder quotes, ready to be replaced with client input."
      />
      <div className="grid gap-5 md:grid-cols-3">
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
        <h2 className="text-2xl font-bold text-navy-950 md:text-[28px]">
          Have some questions or want to say hi?
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-[14px] text-navy-400">
          Tell us a bit about you and we will get you to the right team.
        </p>
        <div className="mx-auto mt-6 flex max-w-md flex-col gap-3 sm:flex-row sm:items-center">
          <div className="flex-1 text-left">
            <label className="mb-1.5 block text-[12px] font-medium text-navy-700">
              Which best describes you?
            </label>
            <Select value={role} onValueChange={setRole}>
              <SelectTrigger className="h-11 rounded-full">
                <SelectValue placeholder="Select your role" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="engineer">Engineer</SelectItem>
                <SelectItem value="customer">Customer</SelectItem>
                <SelectItem value="business-owner">Business Owner</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="flex items-end">
            <Button href="/contact" variant="primary" size="lg" className="w-full sm:w-auto">
              Get In Touch <ArrowRight className="ml-1 h-3.5 w-3.5" />
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
