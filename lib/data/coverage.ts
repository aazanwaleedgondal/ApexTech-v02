export type Region = {
  name: string;
  countries: number;
  engineers: number;
  description: string;
};

export const regions: Region[] = [
  {
    name: 'North America',
    countries: 3,
    engineers: 420,
    description: 'Coverage across the US, Canada, and Mexico with regional forward stocking.',
  },
  {
    name: 'South America',
    countries: 8,
    engineers: 180,
    description: 'Engineers in major metros from Brazil to Chile.',
  },
  {
    name: 'EMEA',
    countries: 28,
    engineers: 650,
    description: 'Our largest footprint — covering Europe, Middle East, and Africa.',
  },
  {
    name: 'APAC',
    countries: 14,
    engineers: 390,
    description: 'From Singapore to Sydney, with hubs in key markets.',
  },
  {
    name: 'Australia',
    countries: 2,
    engineers: 110,
    description: 'Coverage across Australia and New Zealand, including remote sites.',
  },
];

export const coverageStats = {
  countries: 55,
  engineers: 1750,
  availability: '24/7',
  responseTime: '2h',
};

export type SlaTier = {
  name: string;
  response: string;
  description: string;
  bestFor: string;
};

export const slaTiers: SlaTier[] = [
  {
    name: '2-Hour',
    response: 'On-site within 2 hours',
    description:
      'Our fastest response tier. A certified engineer is dispatched and on-site within 2 hours of ticket creation — for critical outages and high-priority incidents.',
    bestFor: 'Critical outages, data centre incidents, production down',
  },
  {
    name: '4-Hour',
    response: 'On-site within 4 hours',
    description:
      'A balanced tier for urgent but non-critical issues. The engineer arrives within 4 hours, with full diagnostics and remediation.',
    bestFor: 'Hardware failures, network issues, business-hours urgency',
  },
  {
    name: '8-Hour',
    response: 'On-site within 8 hours',
    description:
      'For issues that need same-day attention but tolerate a longer window. Cost-effective while still same-day.',
    bestFor: 'Non-critical hardware, peripheral failures, single-user issues',
  },
  {
    name: 'Next Business Day',
    response: 'On-site next business day',
    description:
      'Our most economical tier. Scheduled for the next business day — ideal for planned work and low-priority issues.',
    bestFor: 'Planned IMAC, low-priority break-fix, scheduled maintenance',
  },
];

export type ForwardStockingLocation = {
  city: string;
  region: string;
  note: string;
};

export const forwardStockingLocations: ForwardStockingLocation[] = [
  { city: 'London', region: 'EMEA', note: 'Primary EMEA hub — spares & staging' },
  { city: 'Frankfurt', region: 'EMEA', note: 'Data centre spares depot' },
  { city: 'Dubai', region: 'EMEA', note: 'Middle East staging point' },
  { city: 'Singapore', region: 'APAC', note: 'APAC distribution hub' },
  { city: 'Sydney', region: 'Australia', note: 'Oceania spares & staging' },
  { city: 'New York', region: 'North America', note: 'East Coast forward stocking' },
  { city: 'Dallas', region: 'North America', note: 'Central US depot' },
  { city: 'São Paulo', region: 'South America', note: 'Latin America hub' },
];
