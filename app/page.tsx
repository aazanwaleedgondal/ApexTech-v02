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

function Hero() {
  return (
    <section className="relative overflow-hidden bg-white pt-32 pb-20 md:pt-40 md:pb-28">

      {/* Animated colorful dots */}
      <FloatingDots />

      {/* Very subtle background glow */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-blue-100/30 blur-[120px]" />

      {/* Content */}
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">

          <p className="animate-fade-up text-[11px] font-semibold uppercase tracking-[0.2em] text-blue-950 font-hikasami ">
            Powered by Engineers, Backed by Results
          </p>

          <h1 className="font-hikasami mt-6 text-3xl font-bold leading-tight tracking-tight text-gray-900 md:text-4xl md:text-[44px]">
            Global <RotatingHeadline />
            <br />
            <span className="text-blue-950">
              That Keep Your Business Running
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-[14px] leading-relaxed text-gray-600 md:text-[15px]">
            A worldwide network of certified, multilingual engineers — from L1
            deskside support to L5 data centre specialists — ready to dispatch to
            your site within your SLA, 24/7×365. Wherever your infrastructure
            lives, we get the right engineer to the right site, every time.
          </p>

          <div className="font-hikasami mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button href="/contact" size="lg">
              Become a Partner
            </Button>

            <Button href="/services" variant="outline" size="lg">
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
                ${
                  i < trustBar.length - 1
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
                    <div
                      className="
                        mb-3
                        text-[11px]
                        font-semibold
                        uppercase
                        tracking-[0.18em]
                        text-navy-400
                      "
                    >
                      Service {String(i + 1).padStart(2, '0')}
                    </div>

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
    <Section variant="off-white" className="bg-navy-950">
      <div className="mb-10 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white">
          How It Works
        </p>

        <h2 className="mt-3 font-bold tracking-tight text-white md:text-2xl">
          From request to sign-off in four steps
        </h2>
      </div>

      <div className="relative grid gap-12 pt-8 md:grid-cols-4 md:gap-6">
        {/* Connecting line */}
        <div
          className="
            pointer-events-none
            absolute
            left-[12%]
            right-[12%]
            top-[84px]
            hidden
            h-px
            bg-gradient-to-r
            from-blue-400
            via-violet-400
            to-cyan-400
            md:block
          "
        />

        {howItWorks.map((step, i) => (
          <Reveal key={step.step} delay={i * 120}>
            <div className="group relative flex h-full flex-col items-center">

              {/* Image + Number */}
              <div className="relative z-20 mb-[-28px]">

                {/* Soft animated glow */}
                <div
                  className="
                    absolute
                    inset-[-12px]
                    rounded-full
                    bg-blue-500/10
                    blur-xl
                    transition-all
                    duration-700
                    group-hover:scale-125
                    group-hover:bg-blue-500/25
                  "
                />

                {/* Image */}
                <div
                  className="
                    relative
                    h-28
                    w-28
                    overflow-hidden
                    rounded-full
                    border-[2px]
                    border-white
                    bg-navy-900
                    shadow-xl
                    transition-all
                    duration-700
                    ease-out
                    group-hover:scale-110
                    group-hover:-rotate-3
                  "
                >
                  <img
                    src={step.image}
                    alt={step.title}
                    className="
                      h-full
                      w-full
                      object-cover
                      transition-transform
                      duration-700
                      group-hover:scale-110
                    "
                  />

                  {/* Image overlay */}
                  <div
                    className="
                      absolute
                      inset-0
                      rounded-full
                      bg-gradient-to-br
                      from-blue-600/10
                      via-transparent
                      to-violet-600/20
                      opacity-60
                      transition-opacity
                      duration-500
                      group-hover:opacity-20
                    "
                  />
                </div>

                {/* Number badge */}
                <div
                  className="
                    absolute
                    -bottom-1
                    -right-1
                    flex
                    h-9
                    w-9
                    items-center
                    justify-center
                    rounded-full
                    border-2
                    border-white
                    bg-navy-950
                    text-[11px]
                    font-bold
                    text-white
                    shadow-lg
                    transition-all
                    duration-500
                    group-hover:scale-110
                    group-hover:bg-blue-900
                  "
                >
                  {step.step}
                </div>
              </div>

              {/* Card */}
              <div
                className="
                  relative
                  w-full
                  flex-1
                  overflow-hidden
                  rounded-2xl
                  border
                  border-white/15
                  bg-white/[0.06]
                  px-6
                  pb-6
                  pt-12
                  text-center
                  shadow-sm
                  backdrop-blur-sm
                  transition-all
                  duration-500
                  ease-out
                  group-hover:-translate-y-2
                  group-hover:border-blue-400/40
                  group-hover:bg-white/[0.09]
                  group-hover:shadow-xl
                "
              >
                {/* Background glow */}
                <div
                  className="
                    pointer-events-none
                    absolute
                    -right-12
                    -top-12
                    h-28
                    w-28
                    rounded-full
                    bg-blue-500
                    opacity-0
                    blur-3xl
                    transition-all
                    duration-700
                    group-hover:scale-150
                    group-hover:opacity-20
                  "
                />

                {/* Title */}
                <h3
                  className="
                    relative
                    text-[15px]
                    font-semibold
                    text-white
                    transition-transform
                    duration-300
                    group-hover:-translate-y-[1px]
                  "
                >
                  {step.title}
                </h3>

                {/* Description */}
                <p
                  className="
                    relative
                    mt-2
                    text-[12px]
                    leading-relaxed
                    text-white
                  "
                >
                  {step.description}
                </p>

                {/* Progress line */}
                <div
                  className="
                    relative
                    mx-auto
                    mt-5
                    h-[2px]
                    w-12
                    overflow-hidden
                    rounded-full
                    bg-white/20
                  "
                >
                  <div
                    className="
                      h-full
                      w-0
                      bg-gradient-to-r
                      from-blue-400
                      to-cyan-400
                      transition-all
                      duration-700
                      group-hover:w-full
                    "
                  />
                </div>
              </div>
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
            src="/images/glob.jpg"
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
