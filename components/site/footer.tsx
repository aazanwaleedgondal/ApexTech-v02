import Link from 'next/link';
import { offices } from '@/lib/data/site';

const usefulLinks = [
  { label: 'Home', href: '/' },
  { label: 'Company', href: '/company' },
  { label: 'Services', href: '/services' },
  { label: 'Sectors', href: '/sectors' },
  { label: 'Coverage', href: '/coverage' },
  { label: 'Careers', href: '/careers' },
  { label: 'Contact', href: '/contact' },
];

const resourceLinks = [
  { label: 'Blog', href: '#' },
  { label: 'Terms of Service', href: '#' },
  { label: 'Privacy Policy', href: '#' },
  { label: 'SLA Documentation', href: '#' },
  { label: 'Partner Portal', href: '#' },
];

function FlagBadge({ code }: { code: string }) {
  return (
    <span className="flex h-6 w-8 items-center justify-center rounded bg-white/10 text-[10px] font-bold text-white/80">
      {code}
    </span>
  );
}

export function SiteFooter() {
  return (
    <footer className="bg-navy-950 text-white pointer-events-none">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid gap-12 lg:grid-cols-12">
          {/* Brand */}
          <div className="lg:col-span-4">
            <Link href="/" className="flex items-center gap-2.5">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white">
                <span className="text-navy-950 font-bold text-sm">A</span>
              </div>
              <div className="flex flex-col leading-none">
                <span className="text-white font-bold text-[15px] tracking-tight">
                  ApexTech
                </span>
                <span className="text-navy-300 text-[10px] font-medium tracking-[0.15em] uppercase">
                  Solutions
                </span>
              </div>
            </Link>
            <p className="mt-4 max-w-xs text-[13px] leading-relaxed text-navy-200">
              Global IT field services — delivering with scale and agility.
              Certified multilingual engineers across 55+ countries, available
              24/7 × 365.
            </p>
            <div className="mt-6 flex gap-3">
              <div className="flex items-center gap-2 rounded-lg border border-white/15 bg-white/5 px-3 py-2">
                <span className="text-[10px] font-semibold text-white/70">App Store</span>
              </div>
              <div className="flex items-center gap-2 rounded-lg border border-white/15 bg-white/5 px-3 py-2">
                <span className="text-[10px] font-semibold text-white/70">Google Play</span>
              </div>
            </div>
          </div>

          {/* Useful Links */}
          <div className="lg:col-span-2">
            <h4 className="mb-4 text-[11px] font-semibold uppercase tracking-[0.15em] text-navy-300">
              Useful Links
            </h4>
            <ul className="space-y-2.5">
              {usefulLinks.map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    className="link-underline text-[13px] text-navy-200 hover:text-white"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div className="lg:col-span-2">
            <h4 className="mb-4 text-[11px] font-semibold uppercase tracking-[0.15em] text-navy-300">
              Resources
            </h4>
            <ul className="space-y-2.5">
              {resourceLinks.map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    className="link-underline text-[13px] text-navy-200 hover:text-white"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Offices */}
          <div className="lg:col-span-4">
            <h4 className="mb-4 text-[11px] font-semibold uppercase tracking-[0.15em] text-navy-300">
              Our Offices
            </h4>
            <div className="grid gap-3 sm:grid-cols-2">
              {offices.map((o) => (
                <div
                  key={o.city}
                  className="rounded-xl border border-white/10 bg-white/5 p-3"
                >
                  <div className="flex items-center gap-2">
                    <FlagBadge code={o.flag} />
                    <p className="text-[13px] font-semibold text-white">{o.city}</p>
                  </div>
                  <p className="mt-2 text-[11px] leading-snug text-navy-300">
                    {o.address}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 border-t border-white/10 pt-6">
          <p className="text-center text-[12px] text-navy-300">
            © 2026 ApexTech Solutions | Delivering with Scale and Agility. All
            Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
