export type Sector = {
  slug: string;
  name: string;
  intro: string;
  challenge: string;
  engagement: string;
  pullQuote: string;
  outcome: string[];
};

export const sectors: Sector[] = [
  {
    slug: 'retail',
    name: 'Retail',
    intro:
      'Retailers run on uptime. A single store outage means lost revenue and frustrated customers — and with hundreds or thousands of sites, something is always breaking somewhere.',
    challenge:
      'A national retailer needed same-day break-fix across 1,200 stores in 14 countries, with no internal field team and inconsistent local vendors.',
    engagement:
      'We stood up a single point of contact, onboarded certified engineers in every region, and built a ticketing workflow that routed each call to the nearest qualified resource — with photo sign-off and SLA tracking on every ticket.',
    pullQuote:
      'ApexTech became our field team overnight. One number, one SLA, every store covered.',
    outcome: [
      '1,200 stores covered across 14 countries',
      'Average 3.5-hour response on break-fix calls',
      '98% first-visit fix rate',
    ],
  },
  {
    slug: 'enterprise',
    name: 'Enterprise',
    intro:
      'Enterprise IT estates span offices, data centres, and remote workers — often with mixed vendors and legacy hardware that still needs supporting.',
    challenge:
      'A global enterprise was refreshing 8,000 endpoints across 60 offices while keeping day-to-day deskside support running.',
    engagement:
      'We provided a blended team of IMAC and deskside engineers, coordinated rollouts out-of-hours to avoid disruption, and handled legacy hardware through our third-party maintenance contract.',
    pullQuote:
      'They managed the rollout and the day job at the same time. We never lost a day to the refresh.',
    outcome: [
      '8,000 endpoints refreshed in 9 months',
      'Zero unplanned downtime during rollout',
      'Single contract for IMAC, deskside & maintenance',
    ],
  },
  {
    slug: 'data-centre',
    name: 'Data Centre',
    intro:
      'Data centres demand precision. A misrouted cable or a delayed smart-hands call can cascade into a major incident — so every action needs to be fast, documented, and verified.',
    challenge:
      'A colocation customer needed 24/7 smart-hands across 9 facilities in 3 regions, with strict change-control and photo evidence on every action.',
    engagement:
      'We placed on-call engineers near each facility, integrated with their remote NOC, and enforced a photo-verified sign-off workflow on every ticket — from a drive swap to a full rack rebuild.',
    pullQuote:
      'Their engineers feel like an extension of our NOC. Fast, careful, and always documented.',
    outcome: [
      '9 facilities covered, 24/7 × 365',
      '2-hour SLA met on 99.4% of calls',
      '100% photo-verified sign-off',
    ],
  },
  {
    slug: 'healthcare',
    name: 'Healthcare',
    intro:
      'Healthcare IT supports clinicians and patients — where a downed workstation or a failed wireless AP can delay care. Reliability and speed are not optional.',
    challenge:
      'A hospital group needed reliable deskside and wireless support across 22 sites, with strict compliance and zero tolerance for extended downtime.',
    engagement:
      'We provided dedicated deskside engineers per region, ran Ekahau wireless surveys to eliminate dead zones, and operated under the group’s compliance framework with full audit trails.',
    pullQuote:
      'They understand healthcare. Every ticket is treated as urgent, and the documentation is audit-ready.',
    outcome: [
      '22 sites supported with regional engineers',
      'Wireless coverage improved to 99.9%',
      'Full compliance audit trail on every action',
    ],
  },
  {
    slug: 'finance',
    name: 'Finance',
    intro:
      'Financial services run on secure, resilient infrastructure. Every change is controlled, every asset is tracked, and every engineer must be vetted.',
    challenge:
      'A financial institution needed secure IMAC and maintenance across 40 branches and two data centres, with background-checked engineers and strict change windows.',
    engagement:
      'We supplied vetted engineers, scheduled all work inside approved change windows, and provided full chain-of-custody documentation for every asset touched — including secure ITAD for retired hardware.',
    pullQuote:
      'The compliance documentation alone made them worth it. Everything is tracked, signed, and auditable.',
    outcome: [
      '40 branches + 2 data centres covered',
      'All engineers background-checked',
      'Full chain-of-custody on every asset',
    ],
  },
  {
    slug: 'government',
    name: 'Government',
    intro:
      'Public sector deployments require cleared personnel, strict procurement, and the ability to operate across dispersed and sometimes remote locations.',
    challenge:
      'A government agency needed field support across 300 sites, including remote locations, with cleared engineers and a compliant procurement route.',
    engagement:
      'We built a cleared engineer network, established forward stocking in three regions to reach remote sites faster, and operated through an approved procurement framework with full reporting.',
    pullQuote:
      'They reached sites no one else could. The forward stocking model made all the difference.',
    outcome: [
      '300 sites supported, including remote locations',
      'Forward stocking in 3 regions',
      'Full reporting for procurement compliance',
    ],
  },
];
