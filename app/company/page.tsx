'use client';

import { ArrowRight, Check } from 'lucide-react';
import { PageHero } from '@/components/site/page-hero';
import { Section, SectionHeading } from '@/components/site/section';
import { Card } from '@/components/site/card';
import { Reveal } from '@/components/site/reveal';
import { Icon } from '@/components/site/icon';
import { Button } from '@/components/site/button';
import { SkillBar } from '@/components/site/skill-bar';
import { whyApexTech, whoWeWorkWith, expertise } from '@/lib/data/site';

export default function CompanyPage() {
  return (
    <>
      <PageHero
        eyebrow="Company"
        title="Who we are"
        description="A global IT field-services company built on certified engineers, consistent quality, and a single point of contact — so you get scale without the complexity."
      />

      {/* Who We Are */}
      <Section variant="default">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Left Content */}
          <Reveal>
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-navy-500">
              Who We Are
            </p>

            <h2 className="mt-3 text-2xl font-bold leading-tight text-navy-950 md:text-[28px]">
              A worldwide field-engineering network, run as one team
            </h2>

            <div className="mt-6 space-y-4 text-[14px] leading-relaxed text-navy-400">
              <p>
                ApexTech Solutions was founded on a simple idea: global IT
                operations need global field support — but building that
                capability in-house is expensive, slow, and hard to scale.
              </p>

              <p>
                We solve that by combining our own directly employed engineers
                with a rigorously vetted partner network, giving you coverage
                in 55+ countries without the overhead. One contract, one
                coordinator, one accountable team.
              </p>

              <p>
                Every engineer we dispatch is certified, background-checked,
                and works to your runbooks. We hold ourselves to the same
                standard whether the job is a single drive swap or a
                thousand-site rollout.
              </p>
            </div>
          </Reveal>

          {/* Right Image */}
          <Reveal delay={150}>
            <div className="relative overflow-hidden rounded-2xl shadow-xl">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/company-bg1.jpg"
                alt="ApexTech Solutions"
                className="h-[460px] w-full object-cover transition-transform duration-500 hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/30 to-transparent" />
            </div>
          </Reveal>
        </div>
      </Section>

      {/* Why ApexTech */}
      <Section variant="navy">
        <SectionHeading
          eyebrow="Why ApexTech"
          title="The advantages of working with us"
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

      {/* Who We Work With */}
      <Section variant="default">
        <div className="grid gap-12 lg:grid-cols-2">
          <Reveal>
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-navy-500">
              Who We Work With
            </p>

            <h2 className="mt-3 text-2xl font-bold leading-tight text-navy-950 md:text-[28px]">
              The teams and organisations we support
            </h2>

            <p className="mt-4 text-[14px] leading-relaxed text-navy-400">
              We work with anyone who runs IT infrastructure across multiple
              sites — from a handful of offices to thousands of locations
              worldwide.
            </p>
          </Reveal>

          <Reveal delay={150}>
            <ul className="grid gap-3 sm:grid-cols-2">
              {whoWeWorkWith.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2.5 rounded-xl border border-navy-100 bg-white p-3.5 card-shadow"
                >
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-navy-600" />

                  <span className="text-[13px] leading-snug text-navy-700">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </Section>

      {/* Our Expertise */}
      <Section variant="off-white">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Left Image */}
          <Reveal>
            <div className="relative overflow-hidden rounded-2xl shadow-xl">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/company-bg2.jpg"
                alt="ApexTech Solutions expertise"
                className="h-[460px] w-full object-cover transition-transform duration-500 hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/30 to-transparent" />
            </div>
          </Reveal>

          {/* Right Content */}
          <Reveal delay={150}>
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-navy-500">
              Our Expertise
            </p>

            <h2 className="mt-3 text-2xl font-bold leading-tight text-navy-950 md:text-[28px]">
              Deep capability across the full IT stack
            </h2>

            <p className="mt-4 text-[14px] leading-relaxed text-navy-400">
              Our engineers cover everything from deskside support to data
              centre operations. Here is how our capability breaks down across
              the disciplines we work in.
            </p>

            <div className="mt-8 pointer-events-none">
              <Button href="/services" variant="primary" size="default">
                Explore Our Services
                <ArrowRight className="ml-1 h-3.5 w-3.5" />
              </Button>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* Closing CTA */}
      <Section variant="navy">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-white md:text-[28px]">
            Ready to work with a partner that covers the world?
          </h2>

          <p className="mx-auto mt-3 max-w-xl text-[14px] text-navy-200">
            Talk to us about your sites, your SLAs, and your goals — we will
            build a coverage plan that fits.
          </p>

          <div className="pointer-events-none mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button href="/contact" variant="inverse" size="lg">
              Become a Partner
            </Button>

            <Button href="/coverage" variant="outlineLight" size="lg">
              Check Our Coverage
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}