'use client';

import { ArrowRight, Quote } from 'lucide-react';
import { PageHero } from '@/components/site/page-hero';
import { Section } from '@/components/site/section';
import { Reveal } from '@/components/site/reveal';
import { Button } from '@/components/site/button';
import { sectors } from '@/lib/data/sectors';

// Temporary sector images for testing.
// Replace these with local /public/images/sectors/... images later.
const sectorImages = [
  {
    image:
      'https://i.pinimg.com/736x/3b/f3/a5/3bf3a559a7ff6d147bbc514445bc2bad.jpg',
    alt: 'Biomedical engineer maintaining medical equipment in a hospital',
  },
  {
    image:
      'https://images.unsplash.com/photo-1622675363311-3e1904dc1885?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'Industrial technician performing machinery maintenance',
  },
  {
    image:
      'https://i.pinimg.com/1200x/fe/40/2a/fe402a8b56d2c11aea9c080926fa52e1.jpg',
    alt: 'Retail POS technology and technical support',
  },
  {
    image:
      'https://i.pinimg.com/736x/88/42/36/884236422a25dcaeb4d9eedd56cfe7fc.jpg',
    alt: 'Engineer performing server maintenance in a data center',
  },
];

export default function SectorsPage() {
  return (
    <>
      <PageHero
        eyebrow="Sectors"
        title="Built for the Industries That Can't Afford Downtime"
        description="Every sector has its own definition of downtime and its own tolerance for it. We tailor dispatch speed, engineer skill sets, and reporting to match what your industry actually needs."
        backgroundImage="https://i.pinimg.com/736x/44/a6/85/44a685bf6385e9fe6c7a563c0e10986b.jpg"
      />

      <Section variant="default">
        <div className="mx-auto max-w-5xl space-y-8">
          {sectors.map((sector, i) => {
            const sectorImage =
              sectorImages[i % sectorImages.length];

            return (
              <Reveal key={sector.slug} delay={i * 60}>
                <div
                  id={sector.slug}
                  className="overflow-hidden rounded-2xl border border-navy-100 bg-white card-shadow"
                >
                  {/* Sector Image */}
                  <div className="relative h-56 w-full overflow-hidden lg:h-64">
                    <img
                      src={sectorImage.image}
                      alt={`${sector.name} field service`}
                      className="h-full w-full object-cover transition-transform duration-500 hover:scale-[1.02]"
                    />

                    {/* Dark gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-navy-950/20 to-transparent" />

                    {/* Image label */}
                    <div className="absolute bottom-5 left-6 lg:left-8">
                      <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white/70">
                        Sector {String(i + 1).padStart(2, '0')}
                      </span>

                      <h2 className="mt-1 text-2xl font-bold text-white lg:text-3xl">
                        {sector.name}
                      </h2>
                    </div>
                  </div>

                  {/* Sector Content */}
                  <div className="grid lg:grid-cols-12">
                    {/* Left: sector summary */}
                    <div className="flex flex-col justify-center bg-navy-950 p-6 lg:col-span-3 lg:p-8">
                      <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-navy-300">
                        Field Support
                      </span>

                      <h3 className="mt-2 text-xl font-bold text-white">
                        {sector.name}
                      </h3>

                      <div className="mt-4 h-px w-10 bg-navy-600" />

                      <p className="mt-4 text-[12px] leading-relaxed text-navy-300">
                        Technical support built around uptime, response speed,
                        and reliable field execution.
                      </p>
                    </div>

                    {/* Right: case study */}
                    <div className="p-6 lg:col-span-9 lg:p-8">
                      <p className="text-[14px] leading-relaxed text-navy-700">
                        {sector.intro}
                      </p>

                      {/* Challenge + Engagement */}
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
            );
          })}
        </div>

        {/* CTA */}
        <Reveal>
          <div className="mx-auto mt-12 max-w-5xl rounded-2xl bg-navy-950 p-8 text-center md:p-10">
            <h2 className="text-xl font-bold text-white md:text-2xl">
              Don't see your industry listed?
            </h2>

            <p className="mx-auto mt-3 max-w-lg text-[14px] text-navy-200">
              Our engineer network covers far more than these four sectors —
              get in touch and we will scope your field support needs.
            </p>

            <div className="mt-6">
              <Button href="/contact" variant="inverse" size="lg">
                Get In Touch
                <ArrowRight className="ml-1 h-3.5 w-3.5" />
              </Button>
            </div>
          </div>
        </Reveal>
      </Section>
    </>
  );
}