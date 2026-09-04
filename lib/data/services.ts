// export type ServiceItem = {
//   slug: string;
//   title: string;
//   tagline: string;
//   description: string;
//   includes: string[];
//   slaTiers?: string[];
//   subTypes?: { name: string; description: string }[];
// };

// // export const services: ServiceItem[] = [
// //   {
// //     slug: 'smart-hands',
// //     title: 'Smart Hands / Break-Fix',
// //     tagline: 'On-demand certified engineers for urgent on-site fixes.',
// //     description:
// //       'When something breaks, you need a trusted engineer on-site fast. Our Smart Hands service dispatches certified local engineers to diagnose, repair, and restore operations — typically within your SLA window. We handle everything from a failed drive swap to a full rack rebuild, with full photo documentation and sign-off.',
// //     includes: [
// //       'Hardware diagnostics & component replacement',
// //       'Cable tracing and replacement',
// //       'Power cycling and physical resets',
// //       'Photo-verified before/after documentation',
// //       'Real-time ticket updates and sign-off',
// //     ],
// //     slaTiers: ['2-Hour', '4-Hour', '8-Hour', 'Next Business Day'],
// //   },
// //   {
// //     slug: 'imac',
// //     title: 'IMAC / IMACD Services',
// //     tagline: 'Install, Move, Add, Change, Dispose — handled end-to-end.',
// //     description:
// //       'Whether you are refreshing 50 desks or relocating an entire data hall, our IMAC teams plan, schedule, and execute installations, moves, additions, changes, and disposals with minimal disruption. Pre-staged equipment, coordinated scheduling, and post-deployment validation keep your business running.',
// //     includes: [
// //       'Workstation & server installation',
// //       'Office and rack relocations',
// //       'Equipment adds and upgrades',
// //       'Configuration changes and re-cabling',
// //       'Decommissioning and secure disposal',
// //     ],
// //     slaTiers: ['Same-Day', 'Next Business Day', 'Scheduled'],
// //   },
// //   {
// //     slug: 'data-centre-support',
// //     title: 'Data Centre Support',
// //     tagline: 'Hands-on support inside your colocation and private facilities.',
// //     description:
// //       'Our engineers operate inside colocation sites and private data centres worldwide — performing rack-and-stack, cabling, cross-connects, smart-hands calls, and routine health checks. We coordinate with your remote NOC so every action is verified and logged.',
// //     includes: [
// //       'Rack & stack and rail installation',
// //       'Structured and patch cabling',
// //       'Cross-connects and circuit verification',
// //       'Environmental and power monitoring checks',
// //       'Coordinated remote-hands with your NOC',
// //     ],
// //     slaTiers: ['2-Hour', '4-Hour', 'Scheduled'],
// //   },
// //   {
// //     slug: 'third-party-maintenance',
// //     title: 'Third-Party Maintenance',
// //     tagline: 'Extend the life of your hardware beyond OEM support.',
// //     description:
// //       'Keep legacy and mixed-vendor infrastructure running with our independent maintenance contracts. We provide parts, labour, and certified engineers at a fraction of OEM renewal costs — covering servers, storage, networking, and more.',
// //     includes: [
// //       'Multi-vendor hardware coverage',
// //       'Spare parts logistics & forward stocking',
// //       'Preventative maintenance visits',
// //       'Break-fix dispatch within SLA',
// //       'Single contract for mixed estates',
// //     ],
// //     slaTiers: ['4-Hour', '8-Hour', 'Next Business Day'],
// //   },
// //   {
// //     slug: 'network-services',
// //     title: 'Network Services',
// //     tagline: 'Design, deploy, and troubleshoot wired and wireless networks.',
// //     description:
// //       'From switch replacements to full LAN/WAN refreshes, our network engineers handle installation, configuration, testing, and troubleshooting across Cisco, Juniper, Arista, HPE/Aruba and more. We work to your runbooks and validate every change.',
// //     includes: [
// //       'Switch, router & firewall installation',
// //       'Cable testing and certification',
// //       'Configuration per your runbooks',
// //       'Pre- and post-change validation',
// //       'Wireless controller setup',
// //     ],
// //     slaTiers: ['4-Hour', '8-Hour', 'Next Business Day'],
// //   },
// //   {
// //     slug: 'deskside-euc',
// //     title: 'Deskside / EUC Support',
// //     tagline: 'On-site end-user computing support for your workforce.',
// //     description:
// //       'Our deskside engineers support your employees directly — setting up workstations, resolving hardware issues, performing OS rebuilds, and handling peripherals. Ideal for offices without a dedicated local IT team.',
// //     includes: [
// //       'Workstation setup & imaging',
// //       'Hardware troubleshooting & repair',
// //       'Peripheral installation (printers, docks, monitors)',
// //       'OS rebuilds and data migration',
// //       'User onboarding and offboarding',
// //     ],
// //     slaTiers: ['Same-Day', 'Next Business Day'],
// //   },
// //   {
// //     slug: 'wireless-survey',
// //     title: 'Wireless Survey',
// //     tagline: 'Ekahau-certified site surveys for reliable Wi-Fi coverage.',
// //     description:
// //       'A strong wireless network starts with a proper survey. Our Ekahau-certified engineers perform detailed site surveys, heat-mapping, and design validation so your Wi-Fi performs in the real world — not just on paper.',
// //     includes: [
// //       'Pre-deployment predictive design',
// //       'On-site active & passive surveys',
// //       'Ekahau heat-map generation',
// //       'Coverage, capacity & roaming analysis',
// //       'Post-deployment validation survey',
// //     ],
// //     subTypes: [
// //       {
// //         name: 'Predictive Survey',
// //         description:
// //           'A modelled design based on floor plans before any hardware is installed — ideal for new builds and refreshes.',
// //       },
// //       {
// //         name: 'Active Survey',
// //         description:
// //           'Walking the site with a calibrated adapter to measure real-world signal, noise, and roaming behaviour.',
// //       },
// //       {
// //         name: 'Post-Deployment Validation',
// //         description:
// //           'Confirming the installed network meets the design spec — coverage, capacity, and client roaming.',
// //       },
// //     ],
// //   },
// //   {
// //     slug: 'itad',
// //     title: 'IT Asset Disposition (ITAD)',
// //     tagline: 'Secure, certified decommissioning and recycling of IT assets.',
// //     description:
// //       'Retiring hardware should be safe and responsible. Our ITAD service handles secure data destruction, asset tagging, certified recycling, and full audit trails — with certificates of destruction for compliance.',
// //     includes: [
// //       'Secure data wiping & destruction',
// //       'Certificate of destruction',
// //       'Asset decommissioning & removal',
// //       'Responsible recycling (WEEE compliant)',
// //       'Full chain-of-custody audit trail',
// //     ],
// //   },
// //   {
// //     slug: 'staff-augmentation',
// //     title: 'Staff Augmentation',
// //     tagline: 'Skilled engineers on-site or remote, for as long as you need.',
// //     description:
// //       'When you need extra capacity — a rollout, a migration, or covering a gap — we provide vetted engineers on a contract basis. Scale your team up or down without the overhead of permanent hires.',
// //     includes: [
// //       'Short and long-term placements',
// //       'On-site, remote, or hybrid',
// //       'Pre-vetted, certified engineers',
// //       'Rollout & migration teams',
// //       'Single point of contact for coordination',
// //     ],
// //   },
// // ];



// export const services: ServiceItem[] = [
//   {
//     slug: 'web-development',
//     title: 'Web Development',
//     tagline: 'Modern, responsive websites and web applications built for your business.',
//     description:
//       'We build fast, scalable, and user-friendly websites and web applications tailored to your business goals. From company websites and landing pages to complex business platforms, we create solutions that look great and perform reliably across devices.',
//     includes: [
//       'Business and corporate websites',
//       'Custom web applications',
//       'Responsive and mobile-friendly development',
//       'Frontend and backend development',
//       'Performance and security optimization',
//     ],
//     subTypes: [
//       {
//         name: 'Business Websites',
//         description:
//           'Professional websites designed to establish your online presence and turn visitors into customers.',
//       },
//       {
//         name: 'Custom Web Applications',
//         description:
//           'Powerful browser-based applications built around your unique business processes and requirements.',
//       },
//       {
//         name: 'Landing Pages',
//         description:
//           'High-converting landing pages designed for campaigns, products, services, and lead generation.',
//       },
//     ],
//   },

//   {
//     slug: 'mobile-app-development',
//     title: 'Mobile App Development',
//     tagline: 'Scalable mobile applications designed for modern users.',
//     description:
//       'We design and develop mobile applications that deliver smooth experiences across smartphones and tablets. From business apps and customer portals to custom mobile products, we build solutions focused on performance, usability, and scalability.',
//     includes: [
//       'Android and iOS application development',
//       'Cross-platform mobile applications',
//       'Custom UI implementation',
//       'API and backend integration',
//       'App testing and performance optimization',
//     ],
//     subTypes: [
//       {
//         name: 'Business Apps',
//         description:
//           'Custom mobile applications that help businesses manage operations, customers, and workflows.',
//       },
//       {
//         name: 'Customer Apps',
//         description:
//           'Engaging mobile experiences that allow your customers to access your products and services anywhere.',
//       },
//       {
//         name: 'Cross-Platform Apps',
//         description:
//           'Efficient applications built for multiple platforms while maintaining a consistent user experience.',
//       },
//     ],
//   },

//   {
//     slug: 'ui-ux-design',
//     title: 'UI/UX Design',
//     tagline: 'Beautiful, intuitive experiences designed around your users.',
//     description:
//       'We design digital experiences that combine clean visual design with intuitive user journeys. Our UI/UX process focuses on understanding your users, simplifying complex workflows, and creating interfaces that are both attractive and easy to use.',
//     includes: [
//       'User interface design',
//       'User experience research',
//       'Wireframes and prototypes',
//       'Design systems and component libraries',
//       'Responsive web and mobile designs',
//     ],
//     subTypes: [
//       {
//         name: 'Web UI/UX',
//         description:
//           'Modern and conversion-focused interfaces for websites and web applications.',
//       },
//       {
//         name: 'Mobile UI/UX',
//         description:
//           'Intuitive mobile experiences designed specifically for touch interactions and smaller screens.',
//       },
//       {
//         name: 'Product Design',
//         description:
//           'End-to-end product design from user flows and wireframes to polished, production-ready interfaces.',
//       },
//     ],
//   },

//   {
//     slug: 'custom-software-development',
//     title: 'Custom Software Development',
//     tagline: 'Business software built around the way your organization works.',
//     description:
//       'Off-the-shelf software does not always fit the way your business operates. We develop custom software solutions that automate processes, centralize information, and solve specific operational challenges.',
//     includes: [
//       'Custom business management systems',
//       'ERP and CRM development',
//       'Workflow automation',
//       'Admin dashboards and portals',
//       'Third-party integrations',
//     ],
//     subTypes: [
//       {
//         name: 'Business Management Systems',
//         description:
//           'Centralized platforms for managing your business operations, data, teams, and workflows.',
//       },
//       {
//         name: 'CRM & ERP Solutions',
//         description:
//           'Custom CRM and ERP platforms designed around your sales, customer, inventory, and operational processes.',
//       },
//       {
//         name: 'Workflow Automation',
//         description:
//           'Automate repetitive business processes and reduce manual work with intelligent software workflows.',
//       },
//     ],
//   },

//   {
//     slug: 'saas-development',
//     title: 'SaaS Development',
//     tagline: 'Scalable SaaS platforms built from idea to production.',
//     description:
//       'We build subscription-based software products with scalable architecture, secure authentication, dashboards, billing, APIs, and administration. Whether you are validating an idea or scaling an existing SaaS product, we can help turn it into a reliable platform.',
//     includes: [
//       'SaaS product development',
//       'Subscription and billing systems',
//       'User authentication and authorization',
//       'Admin and customer dashboards',
//       'API development and integrations',
//     ],
//     subTypes: [
//       {
//         name: 'MVP Development',
//         description:
//           'Launch a focused version of your product quickly to validate your idea and gather real customer feedback.',
//       },
//       {
//         name: 'SaaS Platforms',
//         description:
//           'Full-featured multi-user platforms with subscriptions, dashboards, permissions, and integrations.',
//       },
//       {
//         name: 'SaaS Modernization',
//         description:
//           'Improve and scale existing SaaS applications with better architecture, performance, and functionality.',
//       },
//     ],
//   },

//   {
//     slug: 'ecommerce-development',
//     title: 'E-Commerce Development',
//     tagline: 'Online stores designed to create seamless shopping experiences.',
//     description:
//       'We build e-commerce platforms that make it easy for customers to discover products, place orders, and complete secure payments. From custom storefronts to fully integrated online stores, we create experiences designed for growth and conversions.',
//     includes: [
//       'Custom e-commerce websites',
//       'Product and inventory management',
//       'Shopping carts and checkout',
//       'Payment gateway integration',
//       'Order and customer management',
//     ],
//     subTypes: [
//       {
//         name: 'Custom E-Commerce',
//         description:
//           'Fully customized online stores built around your products, customers, and business processes.',
//       },
//       {
//         name: 'Marketplace Development',
//         description:
//           'Multi-vendor platforms that connect sellers and customers through a centralized marketplace.',
//       },
//       {
//         name: 'E-Commerce Integrations',
//         description:
//           'Connect your store with payment providers, shipping systems, CRMs, ERPs, and other business tools.',
//       },
//     ],
//   },

//   {
//     slug: 'digital-marketing',
//     title: 'Digital Marketing',
//     tagline: 'Data-driven marketing strategies designed to grow your business.',
//     description:
//       'We help businesses reach the right audience, generate qualified leads, and turn online traffic into measurable business results. Our marketing strategies combine content, campaigns, analytics, and conversion optimization.',
//     includes: [
//       'Digital marketing strategy',
//       'Social media marketing',
//       'Content marketing',
//       'Lead generation campaigns',
//       'Conversion optimization',
//     ],
//     subTypes: [
//       {
//         name: 'Social Media Marketing',
//         description:
//           'Build awareness and engagement through strategic content and campaigns across social platforms.',
//       },
//       {
//         name: 'Lead Generation',
//         description:
//           'Reach potential customers and build consistent pipelines of qualified business leads.',
//       },
//       {
//         name: 'Content Marketing',
//         description:
//           'Create valuable content that builds authority, attracts your target audience, and supports conversions.',
//       },
//     ],
//   },

//   {
//     slug: 'seo-services',
//     title: 'SEO Services',
//     tagline: 'Improve search visibility and attract more qualified organic traffic.',
//     description:
//       'We optimize websites to improve their visibility in search engines and attract users who are actively looking for your products or services. Our approach combines technical optimization, content strategy, and ongoing performance analysis.',
//     includes: [
//       'Technical SEO',
//       'On-page SEO',
//       'Keyword research',
//       'Content optimization',
//       'SEO performance monitoring',
//     ],
//     subTypes: [
//       {
//         name: 'Technical SEO',
//         description:
//           'Improve website structure, performance, crawlability, indexing, and technical health.',
//       },
//       {
//         name: 'On-Page SEO',
//         description:
//           'Optimize pages, content, headings, metadata, and internal linking for better search visibility.',
//       },
//       {
//         name: 'Local SEO',
//         description:
//           'Improve your visibility in local search results and help nearby customers discover your business.',
//       },
//     ],
//   },

//   {
//     slug: 'branding-graphic-design',
//     title: 'Branding & Graphic Design',
//     tagline: 'Build a recognizable brand with a strong and consistent visual identity.',
//     description:
//       'We help businesses establish a professional visual identity that communicates who they are and what they stand for. From logos and brand guidelines to marketing graphics, we create designs that keep your brand consistent across every touchpoint.',
//     includes: [
//       'Logo design',
//       'Brand identity development',
//       'Brand guidelines',
//       'Marketing and social media graphics',
//       'Business and promotional materials',
//     ],
//     subTypes: [
//       {
//         name: 'Brand Identity',
//         description:
//           'Create a cohesive visual identity including logos, colors, typography, and brand guidelines.',
//       },
//       {
//         name: 'Social Media Design',
//         description:
//           'Professional visual content designed to make your social media presence consistent and engaging.',
//       },
//       {
//         name: 'Marketing Design',
//         description:
//           'Design promotional materials that communicate your products, services, and campaigns effectively.',
//       },
//     ],
//   },

//   {
//     slug: 'api-system-integration',
//     title: 'API & System Integration',
//     tagline: 'Connect your software, services, and business systems seamlessly.',
//     description:
//       'We integrate the tools and platforms your business depends on so information can move seamlessly between systems. From payment gateways and CRMs to third-party APIs and internal applications, we build reliable integrations that reduce manual work.',
//     includes: [
//       'REST API development',
//       'Third-party API integration',
//       'Payment gateway integration',
//       'CRM and ERP integrations',
//       'Data synchronization and automation',
//     ],
//     subTypes: [
//       {
//         name: 'API Development',
//         description:
//           'Secure and scalable APIs that allow your applications and services to communicate with each other.',
//       },
//       {
//         name: 'Third-Party Integrations',
//         description:
//           'Connect external platforms and services with your existing applications and business systems.',
//       },
//       {
//         name: 'Payment Integration',
//         description:
//           'Integrate secure payment solutions and subscription billing into your web and mobile applications.',
//       },
//     ],
//   },
// ];



export type ServiceItem = {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  image: string;
  includes: string[];
  slaTiers?: string[];
  subTypes?: { name: string; description: string }[];
};

export const services: ServiceItem[] = [

    {
    slug: 'wireless-survey',
    title: 'Wireless Survey (Ekahau Certified)',
    tagline:
      'Ekahau-certified wireless surveys for reliable coverage, capacity, and performance.',
    image: '/images/services/wireless.jpg',
    description:
      'A wireless network is only as good as the survey behind it. Our Ekahau-certified engineers conduct pre- and post-deployment surveys — heat mapping, interference detection, and access point placement — so your Wi-Fi performs under real-world load, not just on paper.',
    includes: [
      'Predictive and on-site AP-on-a-stick surveys',
      'Signal, coverage, and capacity heat mapping',
      'Interference detection and remediation recommendations',
      'Post-deployment validation surveys',
    ],
  },

  {
    slug: 'smart-hands-break-fix',
    title: 'Smart Hands / Break-Fix Support',
    tagline:
      'Fast on-site engineering support for hardware faults and urgent break-fix needs.',
    image: '/images/services/smart.jpg',
    description:
      'When hardware fails, every hour of downtime costs you. Our Smart Hands engineers arrive on-site to diagnose faults, swap parts, and restore service fast — covering servers, switches, desktops, printers, and point-of-sale hardware.',
    includes: [
      'Rack & stack, cable patching, and equipment install/removal',
      'Device reboots, visual inspections, and remote-hands support',
      'Rapid diagnostics with photo-verified reporting on every ticket',
    ],
  },

  {
    slug: 'imac-services',
    title: 'IMAC Services (Install, Move, Add, Change, Dispose)',
    tagline:
      'End-to-end support for installations, moves, hardware changes, and decommissioning.',
    image: '/images/services/imac.jpg',
    description:
      'Office moves, hardware refreshes, and decommissions are disruptive when they are not planned properly. Our IMAC teams handle the full lifecycle end-to-end, coordinating around your business hours so operations continue uninterrupted.',
    includes: [
      'New device installation and workstation setup',
      'Office and site relocations',
      'Hardware upgrades and asset replacement',
      'Secure decommissioning and disposal',
    ],
  },

  {
    slug: 'data-centre-support',
    title: 'Data Centre Support',
    tagline:
      'Specialist engineering support for colocation and private data centre environments.',
    image: '/images/services/data.jpg',
    description:
      'Mission-critical environments need engineers who understand uptime, security, and compliance — not just hardware. ApexTech data centre engineers are L2/L3-qualified specialists trained to work inside colocation and private facilities without disrupting live operations.',
    includes: [
      'Server, switch, and router installation',
      'Structured cabling and patching',
      'Hardware replacement and component-level diagnostics',
      '24/7 smart-hands coverage with full sign-off documentation',
    ],
  },


  {
    slug: 'networking-support',
    title: 'Networking Support',
    tagline:
      'On-site and remote network support for installations, upgrades, and troubleshooting.',
    image: '/images/services/networking.jpg',
    description:
      'From new site installations to live troubleshooting, our network engineers keep connectivity running across your estate — on-site or remote, whenever an issue threatens business continuity.',
    includes: [
      'Network device installation and infrastructure upgrades',
      'Real-time on-site and remote troubleshooting',
      'Structured network cabling',
    ],
  },

  {
    slug: 'hardware-support',
    title: 'Hardware Support',
    tagline:
      'On-site installation, repair, and replacement for critical IT hardware.',
    image: '/images/services/hardware.jpg',
    description:
      'On-site hardware installation and repair for desktops, laptops, servers, printers, and POS equipment. Our engineers diagnose faults, replace failed components, and configure replacement hardware so end users are back up and running with minimal disruption.',
    includes: [
      'Desktop, laptop, and server hardware installation',
      'Component-level repair and part replacement',
      'Printer, POS, and peripheral hardware support',
    ],
  },

  {
    slug: 'third-party-maintenance',
    title: 'Third-Party Maintenance (TPM)',
    tagline:
      'Extend the useful life of your hardware beyond OEM warranty without OEM support premiums.',
    image: '/images/services/third.jpg',
    description:
      'Keep critical systems running beyond OEM warranty without paying OEM premiums. Our engineers handle component swaps, health checks, and diagnostics across legacy and hybrid environments, extending the useful life of your hardware investment — an alternative to costly OEM support contracts on equipment that is still doing its job.',
    includes: [
      'Hard drive and component replacement',
      'Routine health checks and system diagnostics',
      'Support for legacy and end-of-warranty equipment',
    ],
  },
];