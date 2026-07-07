export type ServiceItem = {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  includes: string[];
  slaTiers?: string[];
  subTypes?: { name: string; description: string }[];
};

export const services: ServiceItem[] = [
  {
    slug: 'smart-hands',
    title: 'Smart Hands / Break-Fix',
    tagline: 'On-demand certified engineers for urgent on-site fixes.',
    description:
      'When something breaks, you need a trusted engineer on-site fast. Our Smart Hands service dispatches certified local engineers to diagnose, repair, and restore operations — typically within your SLA window. We handle everything from a failed drive swap to a full rack rebuild, with full photo documentation and sign-off.',
    includes: [
      'Hardware diagnostics & component replacement',
      'Cable tracing and replacement',
      'Power cycling and physical resets',
      'Photo-verified before/after documentation',
      'Real-time ticket updates and sign-off',
    ],
    slaTiers: ['2-Hour', '4-Hour', '8-Hour', 'Next Business Day'],
  },
  {
    slug: 'imac',
    title: 'IMAC / IMACD Services',
    tagline: 'Install, Move, Add, Change, Dispose — handled end-to-end.',
    description:
      'Whether you are refreshing 50 desks or relocating an entire data hall, our IMAC teams plan, schedule, and execute installations, moves, additions, changes, and disposals with minimal disruption. Pre-staged equipment, coordinated scheduling, and post-deployment validation keep your business running.',
    includes: [
      'Workstation & server installation',
      'Office and rack relocations',
      'Equipment adds and upgrades',
      'Configuration changes and re-cabling',
      'Decommissioning and secure disposal',
    ],
    slaTiers: ['Same-Day', 'Next Business Day', 'Scheduled'],
  },
  {
    slug: 'data-centre-support',
    title: 'Data Centre Support',
    tagline: 'Hands-on support inside your colocation and private facilities.',
    description:
      'Our engineers operate inside colocation sites and private data centres worldwide — performing rack-and-stack, cabling, cross-connects, smart-hands calls, and routine health checks. We coordinate with your remote NOC so every action is verified and logged.',
    includes: [
      'Rack & stack and rail installation',
      'Structured and patch cabling',
      'Cross-connects and circuit verification',
      'Environmental and power monitoring checks',
      'Coordinated remote-hands with your NOC',
    ],
    slaTiers: ['2-Hour', '4-Hour', 'Scheduled'],
  },
  {
    slug: 'third-party-maintenance',
    title: 'Third-Party Maintenance',
    tagline: 'Extend the life of your hardware beyond OEM support.',
    description:
      'Keep legacy and mixed-vendor infrastructure running with our independent maintenance contracts. We provide parts, labour, and certified engineers at a fraction of OEM renewal costs — covering servers, storage, networking, and more.',
    includes: [
      'Multi-vendor hardware coverage',
      'Spare parts logistics & forward stocking',
      'Preventative maintenance visits',
      'Break-fix dispatch within SLA',
      'Single contract for mixed estates',
    ],
    slaTiers: ['4-Hour', '8-Hour', 'Next Business Day'],
  },
  {
    slug: 'network-services',
    title: 'Network Services',
    tagline: 'Design, deploy, and troubleshoot wired and wireless networks.',
    description:
      'From switch replacements to full LAN/WAN refreshes, our network engineers handle installation, configuration, testing, and troubleshooting across Cisco, Juniper, Arista, HPE/Aruba and more. We work to your runbooks and validate every change.',
    includes: [
      'Switch, router & firewall installation',
      'Cable testing and certification',
      'Configuration per your runbooks',
      'Pre- and post-change validation',
      'Wireless controller setup',
    ],
    slaTiers: ['4-Hour', '8-Hour', 'Next Business Day'],
  },
  {
    slug: 'deskside-euc',
    title: 'Deskside / EUC Support',
    tagline: 'On-site end-user computing support for your workforce.',
    description:
      'Our deskside engineers support your employees directly — setting up workstations, resolving hardware issues, performing OS rebuilds, and handling peripherals. Ideal for offices without a dedicated local IT team.',
    includes: [
      'Workstation setup & imaging',
      'Hardware troubleshooting & repair',
      'Peripheral installation (printers, docks, monitors)',
      'OS rebuilds and data migration',
      'User onboarding and offboarding',
    ],
    slaTiers: ['Same-Day', 'Next Business Day'],
  },
  {
    slug: 'wireless-survey',
    title: 'Wireless Survey',
    tagline: 'Ekahau-certified site surveys for reliable Wi-Fi coverage.',
    description:
      'A strong wireless network starts with a proper survey. Our Ekahau-certified engineers perform detailed site surveys, heat-mapping, and design validation so your Wi-Fi performs in the real world — not just on paper.',
    includes: [
      'Pre-deployment predictive design',
      'On-site active & passive surveys',
      'Ekahau heat-map generation',
      'Coverage, capacity & roaming analysis',
      'Post-deployment validation survey',
    ],
    subTypes: [
      {
        name: 'Predictive Survey',
        description:
          'A modelled design based on floor plans before any hardware is installed — ideal for new builds and refreshes.',
      },
      {
        name: 'Active Survey',
        description:
          'Walking the site with a calibrated adapter to measure real-world signal, noise, and roaming behaviour.',
      },
      {
        name: 'Post-Deployment Validation',
        description:
          'Confirming the installed network meets the design spec — coverage, capacity, and client roaming.',
      },
    ],
  },
  {
    slug: 'itad',
    title: 'IT Asset Disposition (ITAD)',
    tagline: 'Secure, certified decommissioning and recycling of IT assets.',
    description:
      'Retiring hardware should be safe and responsible. Our ITAD service handles secure data destruction, asset tagging, certified recycling, and full audit trails — with certificates of destruction for compliance.',
    includes: [
      'Secure data wiping & destruction',
      'Certificate of destruction',
      'Asset decommissioning & removal',
      'Responsible recycling (WEEE compliant)',
      'Full chain-of-custody audit trail',
    ],
  },
  {
    slug: 'staff-augmentation',
    title: 'Staff Augmentation',
    tagline: 'Skilled engineers on-site or remote, for as long as you need.',
    description:
      'When you need extra capacity — a rollout, a migration, or covering a gap — we provide vetted engineers on a contract basis. Scale your team up or down without the overhead of permanent hires.',
    includes: [
      'Short and long-term placements',
      'On-site, remote, or hybrid',
      'Pre-vetted, certified engineers',
      'Rollout & migration teams',
      'Single point of contact for coordination',
    ],
  },
];
