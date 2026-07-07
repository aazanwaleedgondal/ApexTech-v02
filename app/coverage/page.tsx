'use client';

import { ArrowRight, MapPin, Clock, Check } from 'lucide-react';
import { PageHero } from '@/components/site/page-hero';
import { Section, SectionHeading } from '@/components/site/section';
import { Reveal } from '@/components/site/reveal';
import { Button } from '@/components/site/button';
import { WorldMap } from '@/components/site/world-map';
import { regions, slaTiers, forwardStockingLocations } from '@/lib/data/coverage';

export default function CoveragePage() {
  return (
    <>
      <PageHero
        eyebrow="Coverage"
        title="Global coverage, local engineers"
        description="Five regions, 55+ countries, and forward stocking locations that keep spares close to where they are needed. Here is the full picture."
      />

      {/* Map */}
      <Section variant="default">
        <SectionHeading
          eyebrow="Global Footprint"
          title="Where we operate"
          description="Hover over each region marker to see country and engineer counts."
        />
        <Reveal>
          <WorldMap />
        </Reveal>
      </Section>

      {/* Regions detail */}
      <Section variant="off-white">
        <SectionHeading
          eyebrow="Regions"
          title="Coverage by region"
        />
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {regions.map((region, i) => (
            <Reveal key={region.name} delay={i * 70}>
              <div className="h-full rounded-xl border border-navy-100 bg-white p-5 card-shadow transition-all hover:-translate-y-1 hover:card-shadow-hover">
                <div className="flex items-center justify-between">
                  <h3 className="text-[15px] font-semibold text-navy-950">
                    {region.name}
                  </h3>
                  <MapPin className="h-4 w-4 text-navy-400" />
                </div>
                <p className="mt-2 text-[13px] leading-relaxed text-navy-400">
                  {region.description}
                </p>
                <div className="mt-4 flex gap-4 border-t border-navy-100 pt-3">
                  <div>
                    <p className="text-lg font-bold text-navy-950">
                      {region.countries}
                    </p>
                    <p className="text-[11px] text-navy-400">Countries</p>
                  </div>
                  <div>
                    <p className="text-lg font-bold text-navy-950">
                      {region.engineers.toLocaleString()}
                    </p>
                    <p className="text-[11px] text-navy-400">Engineers</p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* SLA Tier Table */}
      <Section variant="default">
        <SectionHeading
          eyebrow="SLA Tiers"
          title="Response time tiers"
          description="Choose the response window that matches the urgency of each site. Mix and match across your estate."
        />
        <Reveal>
          <div className="overflow-hidden rounded-2xl border border-navy-100 card-shadow">
            {/* Desktop table */}
            <div className="hidden md:block">
              <table className="w-full">
                <thead>
                  <tr className="bg-navy-950 text-white">
                    <th className="px-6 py-4 text-left text-[12px] font-semibold uppercase tracking-wide">
                      Tier
                    </th>
                    <th className="px-6 py-4 text-left text-[12px] font-semibold uppercase tracking-wide">
                      Response
                    </th>
                    <th className="px-6 py-4 text-left text-[12px] font-semibold uppercase tracking-wide">
                      Description
                    </th>
                    <th className="px-6 py-4 text-left text-[12px] font-semibold uppercase tracking-wide">
                      Best For
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {slaTiers.map((tier, i) => (
                    <tr
                      key={tier.name}
                      className={i % 2 === 0 ? 'bg-white' : 'bg-navy-50'}
                    >
                      <td className="px-6 py-4">
                        <span className="flex items-center gap-2 text-[14px] font-bold text-navy-950">
                          <Clock className="h-4 w-4 text-navy-500" />
                          {tier.name}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-[13px] font-medium text-navy-700">
                        {tier.response}
                      </td>
                      <td className="px-6 py-4 text-[13px] leading-relaxed text-navy-400">
                        {tier.description}
                      </td>
                      <td className="px-6 py-4 text-[13px] text-navy-400">
                        {tier.bestFor}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            {/* Mobile cards */}
            <div className="divide-y divide-navy-100 md:hidden">
              {slaTiers.map((tier) => (
                <div key={tier.name} className="p-5">
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-navy-500" />
                    <span className="text-[15px] font-bold text-navy-950">
                      {tier.name}
                    </span>
                  </div>
                  <p className="mt-2 text-[13px] font-medium text-navy-700">
                    {tier.response}
                  </p>
                  <p className="mt-2 text-[13px] leading-relaxed text-navy-400">
                    {tier.description}
                  </p>
                  <p className="mt-2 text-[12px] text-navy-400">
                    <span className="font-semibold">Best for:</span>{' '}
                    {tier.bestFor}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </Section>

      {/* Forward Stocking */}
      <Section variant="off-white">
        <SectionHeading
          eyebrow="Forward Stocking"
          title="Spares where you need them"
          description="We keep critical spares staged in eight locations worldwide, so engineers arrive with the parts they need — not just a diagnosis."
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {forwardStockingLocations.map((loc, i) => (
            <Reveal key={loc.city} delay={i * 60}>
              <div className="rounded-xl border border-navy-100 bg-white p-5 card-shadow transition-all hover:-translate-y-1 hover:card-shadow-hover">
                <div className="flex items-center gap-2">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-navy-950">
                    <MapPin className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <p className="text-[14px] font-semibold text-navy-950">
                      {loc.city}
                    </p>
                    <p className="text-[11px] text-navy-400">{loc.region}</p>
                  </div>
                </div>
                <p className="mt-3 text-[12px] leading-snug text-navy-400">
                  {loc.note}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section variant="navy">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-white md:text-[28px]">
            Want coverage in a country we do not list yet?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-[14px] text-navy-200">
            We onboard new regions regularly. Tell us where you need coverage and
            we will make it happen.
          </p>
          <div className="mt-8">
            <Button href="/contact" variant="inverse" size="lg">
              Request Coverage <ArrowRight className="ml-1 h-3.5 w-3.5" />
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
