
import Link from 'next/link';
import Image from 'next/image';
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
  { label: 'Terms of Service', href: '#' },
  { label: 'Privacy Policy', href: '#' },
  { label: 'SLA Documentation', href: '#' },
  { label: 'Partner Portal', href: '#' },
];

function FlagBadge({ flag }: { flag: string }) {
  return (
    <span className="flex h-7 w-9 shrink-0 items-center justify-center text-xl">
      {flag}
    </span>
  );
}

export function SiteFooter() {
  return (
    <footer className="bg-navy-950 text-white">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-12">

          {/* Brand */}
          <div className="lg:col-span-4">
            <Link href="/" className="flex items-center">
              <Image
                src="/images/logo/lo.png"
                alt="ApexTech Solutions"
                width={200}
                height={60}
                className="h-12 w-auto object-contain"
              />
            </Link>

            <p className="mt-4 max-w-xs text-[13px] leading-relaxed text-navy-200">
              Global IT field services — certified, multilingual engineers
              across 5+ countries, available 24/7×365.
            </p>

            <div className="mt-6 flex gap-3" style={{display: 'none'}}>
              <div className="flex items-center gap-2 rounded-lg border border-white/15 bg-white/5 px-3 py-2">
                <span className="text-[10px] font-semibold text-white/70">
                  App Store
                </span>
              </div>

              <div className="flex items-center gap-2 rounded-lg border border-white/15 bg-white/5 px-3 py-2">
                <span className="text-[10px] font-semibold text-white/70">
                  Google Play
                </span>
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

          {/* Contact */}
          <div className="lg:col-span-4">
            <h4 className="mb-4 text-[11px] font-semibold uppercase tracking-[0.15em] text-navy-300">
              Get In Touch
            </h4>

            <p className="mb-5 max-w-sm text-[12px] leading-relaxed text-navy-300">
              Ready to deliver reliable IT field services wherever your
              clients need support. Reach out today.
            </p>

            <div className="space-y-4">

              {/* Email */}
              <a
                href="mailto:info@apextechsolutions.com"
                className="group flex items-start gap-3"
              >
                <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-md border border-white/10 bg-white/5 text-[10px] font-bold text-white/70">
                  E
                </span>

                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-navy-400">
                    Email
                  </p>

                  <p className="mt-0.5 text-[12px] text-navy-200 transition-colors group-hover:text-white">
                    info@apextechsolutions.com
                  </p>
                </div>
              </a>

              {/* Phone */}
              <a
                href="tel:+447460080254"
                className="group flex items-start gap-3"
              >
                <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-md border border-white/10 bg-white/5 text-[10px] font-bold text-white/70">
                  P
                </span>

                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-navy-400">
                    Phone
                  </p>

                  <p className="mt-0.5 text-[12px] text-navy-200 transition-colors group-hover:text-white">
                    +44 7460 080254
                  </p>
                </div>
              </a>


              {/* Address */}
              {offices.map((o) => (
                <div key={o.city} className="flex items-start gap-3">
                  <FlagBadge flag={o.flag} />

                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-navy-400">
                      Address
                    </p>

                    <p className="mt-0.5 text-[12px] leading-relaxed text-navy-200">
                      {o.address}
                    </p>

                    <p className="mt-1 text-[12px] font-semibold text-white">
                      {o.city}, {o.country}
                    </p>
                  </div>
                </div>
              ))}

            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 border-t border-white/10 pt-6">
          <p className="text-center text-[12px] text-navy-300">
            © 2026 ApexTech Solutions | Powered by Engineers, Backed by
            Results. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
