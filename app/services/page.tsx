'use client';

import { useState } from 'react';
import { Check, ChevronDown, Clock } from 'lucide-react';
import { PageHero } from '@/components/site/page-hero';
import { Section } from '@/components/site/section';
import { Reveal } from '@/components/site/reveal';
import { Button } from '@/components/site/button';
import { services } from '@/lib/data/services';
import { cn } from '@/lib/utils';

export default function ServicesPage() {
  const [openId, setOpenId] = useState<string | null>(services[0].slug);

  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Field Services That Keep Your Infrastructure Running"
        description="Whatever the ticket — a single break-fix call, a store refresh, or a multi-country rollout — ApexTech dispatches the right certified engineer to the right site, backed by one accountable team and one SLA."
      />

      <Section variant="default">
        <div className="mx-auto max-w-4xl">
          <div className="space-y-3">
            {services.map((service, i) => {
              const isOpen = openId === service.slug;
              return (
                <Reveal key={service.slug} delay={i * 50}>
                  <div
                    id={service.slug}
                    className={cn(
                      'overflow-hidden rounded-2xl border bg-white transition-all duration-300',
                      isOpen
                        ? 'border-navy-300 card-shadow-hover'
                        : 'border-navy-100 card-shadow hover:border-navy-200'
                    )}
                  >
                    <button
                      onClick={() => setOpenId(isOpen ? null : service.slug)}
                      className="flex w-full items-center justify-between gap-4 p-5 text-left md:p-6"
                    >
                      <div className="flex-1">
                        <div className="flex items-center gap-3">
                          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-navy-950 text-[12px] font-bold text-white">
                            {String(i + 1).padStart(2, '0')}
                          </span>
                          <h3 className="text-[15px] font-semibold text-navy-950 md:text-base">
                            {service.title}
                          </h3>
                        </div>
                        <p className="mt-2 pl-11 text-[13px] leading-relaxed text-navy-400">
                          {service.tagline}
                        </p>
                      </div>
                      <ChevronDown
                        className={cn(
                          'h-5 w-5 shrink-0 text-navy-500 transition-transform duration-300',
                          isOpen && 'rotate-180'
                        )}
                      />
                    </button>

                    <div
                      className={cn(
                        'grid transition-all duration-300 ease-in-out',
                        isOpen
                          ? 'grid-rows-[1fr] opacity-100'
                          : 'grid-rows-[0fr] opacity-0'
                      )}
                    >
                      <div className="overflow-hidden">
                        <div className="border-t border-navy-100 p-5 md:p-6">
                          <p className="text-[14px] leading-relaxed text-navy-700">
                            {service.description}
                          </p>

                          {service.subTypes && (
                            <div className="mt-5 grid gap-3 sm:grid-cols-3">
                              {service.subTypes.map((sub) => (
                                <div
                                  key={sub.name}
                                  className="rounded-xl border border-navy-100 bg-navy-50 p-4"
                                >
                                  <p className="text-[13px] font-semibold text-navy-950">
                                    {sub.name}
                                  </p>
                                  <p className="mt-1.5 text-[12px] leading-snug text-navy-400">
                                    {sub.description}
                                  </p>
                                </div>
                              ))}
                            </div>
                          )}

                          <div className="mt-5 grid gap-6 md:grid-cols-2">
                            <div>
                              <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.15em] text-navy-500">
                                Includes
                              </p>
                              <ul className="space-y-2">
                                {service.includes.map((item) => (
                                  <li
                                    key={item}
                                    className="flex items-start gap-2 text-[13px] text-navy-700"
                                  >
                                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-navy-600" />
                                    {item}
                                  </li>
                                ))}
                              </ul>
                            </div>
                            {service.slaTiers && (
                              <div>
                                <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.15em] text-navy-500">
                                  SLA Tiers
                                </p>
                                <div className="flex flex-wrap gap-2">
                                  {service.slaTiers.map((tier) => (
                                    <span
                                      key={tier}
                                      className="flex items-center gap-1.5 rounded-full border border-navy-200 bg-navy-50 px-3 py-1.5 text-[12px] font-medium text-navy-700"
                                    >
                                      <Clock className="h-3 w-3" />
                                      {tier}
                                    </span>
                                  ))}
                                </div>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>

          <Reveal>
            <div className="mt-12 rounded-2xl bg-navy-950 p-8 text-center md:p-10">
              <h2 className="text-xl font-bold text-white md:text-2xl">
                Not sure which service fits your ticket?
              </h2>
              <p className="mx-auto mt-3 max-w-lg text-[14px] text-navy-200">
                Let us scope the right service and SLA for your environment, from
                one-off site calls to multi-country rollouts.
              </p>
              <div className="mt-6">
                <Button href="/contact" variant="inverse" size="lg">
                  Become a Partner
                </Button>
              </div>
            </div>
          </Reveal>
        </div>
      </Section>
    </>
  );
}
