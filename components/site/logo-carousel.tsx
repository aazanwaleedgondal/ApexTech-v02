'use client';

import { clientLogos } from '@/lib/data/site';

export function LogoCarousel() {
  const logos = [...clientLogos, ...clientLogos];

  return (
    <div className="marquee-paused relative overflow-hidden">
      <div className="marquee flex w-max items-center gap-12">
        {logos.map((logo, i) => (
          <div
            key={`${logo}-${i}`}
            className="flex shrink-0 items-center gap-2.5 opacity-60 transition-opacity hover:opacity-100"
          >
            <div className="flex h-8 w-8 items-center justify-center rounded-md bg-navy-100">
              <span className="text-[11px] font-bold text-navy-700">
                {logo.charAt(0)}
              </span>
            </div>
            <span className="whitespace-nowrap text-[15px] font-semibold tracking-tight text-navy-400">
              {logo}
            </span>
          </div>
        ))}
      </div>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-navy-50 to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-navy-50 to-transparent" />
    </div>
  );
}
