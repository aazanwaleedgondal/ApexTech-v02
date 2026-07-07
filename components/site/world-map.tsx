'use client';

import { regions, coverageStats } from '@/lib/data/coverage';
import { Counter } from '@/components/site/counter';
import { cn } from '@/lib/utils';

const regionPositions: Record<string, { top: string; left: string }> = {
  'North America': { top: '28%', left: '20%' },
  'South America': { top: '62%', left: '30%' },
  EMEA: { top: '32%', left: '52%' },
  APAC: { top: '45%', left: '75%' },
  Australia: { top: '70%', left: '82%' },
};

export function WorldMap() {
  return (
    <div className="relative">
      {/* Stylized world map */}
      <div className="relative aspect-[2/1] w-full overflow-hidden rounded-2xl border border-navy-100 bg-navy-50">
        <svg
          viewBox="0 0 1000 500"
          className="absolute inset-0 h-full w-full"
          preserveAspectRatio="xMidYMid meet"
        >
          {/* Simplified continent shapes */}
          <g fill="#C7D4E6" opacity="0.6">
            {/* North America */}
            <path d="M120,80 L280,70 L320,120 L300,180 L240,220 L180,210 L140,180 L100,140 Z" />
            {/* South America */}
            <path d="M260,260 L320,250 L340,320 L310,400 L270,420 L250,380 L240,320 Z" />
            {/* Europe */}
            <path d="M470,90 L560,85 L580,130 L540,160 L490,150 L460,120 Z" />
            {/* Africa */}
            <path d="M480,170 L580,165 L600,250 L570,330 L520,350 L490,300 L470,240 Z" />
            {/* Middle East / Asia start */}
            <path d="M580,100 L720,90 L760,140 L740,180 L680,190 L620,170 L590,140 Z" />
            {/* Asia / APAC */}
            <path d="M700,120 L860,110 L900,180 L880,240 L820,260 L760,230 L720,200 L700,160 Z" />
            {/* Australia */}
            <path d="M800,330 L880,320 L900,380 L850,410 L810,390 L790,360 Z" />
          </g>
          {/* Grid dots overlay */}
          <g fill="#9DB3D1" opacity="0.25">
            {Array.from({ length: 20 }).map((_, row) =>
              Array.from({ length: 40 }).map((_, col) => (
                <circle
                  key={`${row}-${col}`}
                  cx={col * 25 + 12}
                  cy={row * 25 + 12}
                  r="1.2"
                />
              ))
            )}
          </g>
        </svg>

        {/* Region markers */}
        {regions.map((region) => {
          const pos = regionPositions[region.name];
          if (!pos) return null;
          return (
            <div
              key={region.name}
              className="group absolute -translate-x-1/2 -translate-y-1/2"
              style={{ top: pos.top, left: pos.left }}
            >
              <div className="relative">
                <span className="absolute -inset-2 animate-ping rounded-full bg-navy-500/30" />
                <span className="relative block h-3 w-3 rounded-full bg-navy-700 ring-2 ring-white" />
              </div>
              <div className="pointer-events-none absolute left-1/2 top-5 z-10 w-44 -translate-x-1/2 rounded-xl border border-navy-100 bg-white p-3 opacity-0 shadow-lg transition-opacity group-hover:opacity-100">
                <p className="text-[12px] font-bold text-navy-950">{region.name}</p>
                <p className="mt-1 text-[11px] text-navy-400">
                  {region.countries} countries · {region.engineers} engineers
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Stats row */}
      <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-4">
        <StatCard label="Countries" value={<Counter end={coverageStats.countries} suffix="+" />} />
        <StatCard label="Certified Engineers" value={<Counter end={coverageStats.engineers} suffix="+" />} />
        <StatCard label="Availability" value={`${coverageStats.availability}`} />
        <StatCard label="Response Time" value={`${coverageStats.responseTime}`} />
      </div>
    </div>
  );
}

function StatCard({ label, value }: { label: string; value: React.ReactNode }) {
  return (
    <div className="rounded-xl border border-navy-100 bg-white p-5 text-center card-shadow">
      <p className="text-2xl font-bold text-navy-950 md:text-3xl">{value}</p>
      <p className="mt-1 text-[12px] font-medium uppercase tracking-wide text-navy-400">
        {label}
      </p>
    </div>
  );
}
