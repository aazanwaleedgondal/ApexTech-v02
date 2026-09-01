'use client';

import { ArrowRight, Quote } from 'lucide-react';
import { PageHero } from '@/components/site/page-hero';
import { Section } from '@/components/site/section';
import { Reveal } from '@/components/site/reveal';
import { Button } from '@/components/site/button';
import { sectors } from '@/lib/data/sectors';

export default function SectorsPage() {
  return (
    <>
      <PageHero
        eyebrow="Sectors"
        title="Built for the Industries That Can't Afford Downtime"
        description="Every sector has its own definition of downtime — and its own tolerance for it. We tailor dispatch speed, engineer skill sets, and reporting to match what your industry actually needs."
      />

      <Section variant="default">
        <div className="mx-auto max-w-5xl space-y-8">
          {sectors.map((sector, i) => (
            <Reveal key={sector.slug} delay={i * 60}>
              <div
                id={sector.slug}
                className="overflow-hidden rounded-2xl border border-navy-100 bg-white card-shadow"
              >
                <div className="grid lg:grid-cols-12">
                  {/* Left: sector name */}
                  <div className="flex flex-col justify-center bg-navy-950 p-6 lg:col-span-3 lg:p-8">
                    <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-navy-300">
                      Sector {String(i + 1).padStart(2, '0')}
                    </span>
                    <h2 className="mt-2 text-2xl font-bold text-white">
                      {sector.name}
                    </h2>
                  </div>

                  {/* Right: case study */}
                  <div className="p-6 lg:col-span-9 lg:p-8">
                    <p className="text-[14px] leading-relaxed text-navy-700">
                      {sector.intro}
                    </p>

                    <div className="mt-5 grid gap-5 sm:grid-cols-2">
                      <div>
                        <p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-navy-500">
                          The Challenge
                        </p>
                        <p className="mt-2 text-[13px] leading-relaxed text-navy-400">
                          {sector.challenge}
                        </p>
                      </div>
                      <div>
                        <p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-navy-500">
                          Our Engagement
                        </p>
                        <p className="mt-2 text-[13px] leading-relaxed text-navy-400">
                          {sector.engagement}
                        </p>
                      </div>
                    </div>

                    {/* Pull quote */}
                    <div className="mt-5 rounded-xl border-l-2 border-navy-500 bg-navy-50 p-4">
                      <Quote className="h-4 w-4 text-navy-400" />
                      <p className="mt-2 text-[14px] font-medium italic leading-relaxed text-navy-700">
                        {sector.pullQuote}
                      </p>
                    </div>

                    {/* Outcomes */}
                    <div className="mt-5">
                      <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.15em] text-navy-500">
                        Outcomes
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {sector.outcome.map((o) => (
                          <span
                            key={o}
                            className="rounded-full border border-navy-200 bg-white px-3 py-1.5 text-[12px] font-medium text-navy-700"
                          >
                            {o}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="mx-auto mt-12 max-w-5xl rounded-2xl bg-navy-950 p-8 text-center md:p-10">
            <h2 className="text-xl font-bold text-white md:text-2xl">
              Don't see your industry listed?
            </h2>
            <p className="mx-auto mt-3 max-w-lg text-[14px] text-navy-200">
              Our engineer network covers far more than these four sectors — get in
              touch and we will scope your field support needs.
            </p>
            <div className="mt-6">
              <Button href="/contact" variant="inverse" size="lg">
                Get In Touch <ArrowRight className="ml-1 h-3.5 w-3.5" />
              </Button>
            </div>
          </div>
        </Reveal>
      </Section>
    </>
  );
}
