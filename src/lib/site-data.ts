export const CONTACT = {
  phoneDisplay: "7300055922",
  phoneHref: "tel:7300055922",
  whatsappDisplay: "+91 73000 55922",
  whatsappHref:
    "https://wa.me/917300055922?text=" +
    encodeURIComponent(
      "Hello PEARLCON DIGITAL, I would like to discuss PR and digital marketing services for my brand.",
    ),
  emailDisplay: "Contact@pearlcon.in",
  emailHref: "mailto:contact@pearlcon.in",
  office: "Jaipur, Rajasthan",
  reach: "Across India",
};

export const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Election Services", href: "#election-services" },
  { label: "Process", href: "#process" },
  { label: "Clients", href: "#clients" },
  { label: "Work", href: "#work" },
  { label: "FAQs", href: "#faqs" },
  { label: "Contact", href: "#contact" },
];

export type Service = { id: string; title: string; description: string };

export const PR_SERVICES: Service[] = [
  {
    id: "media-coverage",
    title: "Media Coverage",
    description: "Newspaper and digital publication opportunities across India.",
  },
  {
    id: "press-releases",
    title: "Press Releases & Outreach",
    description: "Clear press communication supported by focused media outreach.",
  },
  {
    id: "digital-pr",
    title: "Digital PR",
    description: "Online publications amplified through social and digital channels.",
  },
  {
    id: "crisis",
    title: "Crisis & Reputation Management",
    description: "Strategic communication designed to protect brand credibility.",
  },
];

export const DIGITAL_SERVICES: Service[] = [
  {
    id: "social-media",
    title: "Social Media Management",
    description: "Strategy, content planning, publishing, and performance review.",
  },
  {
    id: "content-design",
    title: "Content, Design & Video",
    description: "Copy, graphics, campaigns, reels, and promotional video content.",
  },
  {
    id: "paid-ads",
    title: "Paid Advertising",
    description:
      "Google Ads, Meta Ads, and social campaigns focused on relevant reach and enquiries.",
  },
  {
    id: "brand-strategy",
    title: "Brand Strategy",
    description: "Clear positioning, messaging, audience direction, and digital growth planning.",
  },
];

export const DIGITAL_CAPABILITIES = [
  {
    group: "Website & Digital Presence",
    items: [
      "Candidate / Business Websites",
      "Professional Websites",
      "Premium Dynamic Websites",
      "Website Maintenance",
      "Multilingual Website Support",
      "Landing Pages",
      "Campaign Dashboards",
      "Website Content Updates",
    ],
  },
  {
    group: "Social Media",
    items: [
      "Facebook Management",
      "Instagram Management",
      "YouTube Management",
      "X / Twitter Management",
      "Multi-Platform Social Media Management",
    ],
  },
  {
    group: "Creative & Design",
    items: [
      "Social Media Creatives",
      "Premium Creative Design",
      "Digital Banner Design",
      "Print-Ready Flex Design",
      "Manifesto Design",
      "Digital Visiting Cards",
      "QR Code Solutions",
    ],
  },
  {
    group: "WhatsApp & Automation",
    items: ["WhatsApp Business Setup", "Bulk Messaging Solutions", "WhatsApp Chatbot Setup"],
  },
  {
    group: "Digital Advertising",
    items: [
      "Meta Ads",
      "Google Ads",
      "Campaign Setup",
      "Campaign Management",
      "Performance Optimisation",
    ],
  },
];

export const PROCESS_STEPS = [
  {
    id: "01",
    title: "Understand",
    description: "We study your brand, audience, challenges, and objectives.",
  },
  {
    id: "02",
    title: "Plan",
    description: "We create the right PR and digital roadmap for your goals.",
  },
  {
    id: "03",
    title: "Create",
    description:
      "We develop media communication, content, designs, videos, and campaign assets.",
  },
  {
    id: "04",
    title: "Execute",
    description: "We conduct media outreach, manage digital platforms, and run campaigns.",
  },
  {
    id: "05",
    title: "Improve",
    description: "We review performance and continuously refine the strategy.",
  },
];

export const CLIENTS = [
  { name: "St Xavier's College, Jaipur", logo: "/assets/clients/st-xaviers-college-jaipur.png" },
  {
    name: "Fire & Security Association of India",
    logo: "/assets/clients/fire-security-association-india.png",
  },
  { name: "Hotel The Lalit, Jaipur", logo: "/assets/clients/hotel-the-lalit-jaipur.png" },
  { name: "Raffles University", logo: "/assets/clients/raffles-university.png" },
  { name: "Taxila Business School", logo: "/assets/clients/taxila-business-school.png" },
  { name: "Akshaya Patra", logo: "/assets/clients/akshaya-patra.png" },
  { name: "Rotary International Club", logo: "/assets/clients/rotary-international-club.png" },
  { name: "SRN International School", logo: "/assets/clients/srn-international-school.png" },
  { name: "ISKCON Jaipur", logo: "/assets/clients/iskcon-jaipur.png" },
  { name: "Hilton Jaipur", logo: "/assets/clients/hilton-jaipur.png" },
  { name: "We The Women Foundation", logo: "/assets/clients/we-the-women-foundation.png" },
  {
    name: "Hotel and Restaurant Association of Rajasthan",
    logo: "/assets/clients/hotel-restaurant-association-rajasthan.png",
  },
  { name: "Chanakya IAS Academy", logo: "/assets/clients/chanakya-ias-academy.png" },
  { name: "Marriott Jaipur", logo: "/assets/clients/marriott-jaipur.png" },
  { name: "DPS School, Jaipur", logo: "/assets/clients/dhruva-school.png" },
  { name: "Holiday Inn, Jaipur", logo: "/assets/clients/holiday-inn-jaipur.png" },
];

export type WorkCategory =
  | "Media Coverage"
  | "Social Media"
  | "Creative"
  | "Video"
  | "Paid Campaigns";

export type WorkItem = {
  id: string;
  title: string;
  category: WorkCategory;
  image: string;
  feature?: boolean;
};

export const MEDIA_COVERAGE: WorkItem[] = [
  {
    id: "media-01",
    title: "TiE Global Summit — investor lounge and AI panel coverage",
    category: "Media Coverage",
    image: "/assets/media/media-01.png",
    feature: true,
  },
  {
    id: "media-02",
    title: "Holi celebration feature, Hotel The Lalit Jaipur",
    category: "Media Coverage",
    image: "/assets/media/media-02.png",
  },
  {
    id: "media-03",
    title: "Panel discussion coverage, Dainik Bhaskar Jaipur",
    category: "Media Coverage",
    image: "/assets/media/media-03.png",
  },
  {
    id: "media-04",
    title: "Transform HR conclave coverage",
    category: "Media Coverage",
    image: "/assets/media/media-04.png",
  },
  {
    id: "media-05",
    title: "Formidium AI Dialogue, First India",
    category: "Media Coverage",
    image: "/assets/media/media-05.png",
  },
];

export const SOCIAL_PROFILES: WorkItem[] = [
  {
    id: "social-carnet",
    title: "Carnet de Voyages — Instagram page managed by us",
    category: "Social Media",
    image: "/assets/social/carnet-de-voyages.png",
  },
  {
    id: "social-12notez",
    title: "12Notez Studio — Instagram page managed by us",
    category: "Social Media",
    image: "/assets/social/12notez.png",
  },
  {
    id: "social-tedx",
    title: "TEDxBITJaipur — Instagram page managed by us",
    category: "Social Media",
    image: "/assets/social/tedx-bit-jaipur.png",
  },
  {
    id: "social-sunmoon",
    title: "Sun Moon Timber — Instagram page managed by us",
    category: "Social Media",
    image: "/assets/social/sunmoon-timber.png",
  },
];

export const WORK_ITEMS: WorkItem[] = [
  ...MEDIA_COVERAGE,
];

export const WORK_FILTERS: Array<WorkCategory | "All"> = [
  "All",
  "Media Coverage",
  "Social Media",
  "Creative",
  "Video",
  "Paid Campaigns",
];

export const CASE_STUDY = {
  client: "Formidium",
  objective: "To get the brand noticed through strategic media coverage.",
  strategy: [
    "Media PR through newspaper coverage",
    "Digital PR for online visibility",
    "Social media support for amplification",
  ],
  results: [
    "Featured in 10+ publications",
    "Covered across regional media",
    "Multiple brand mentions secured",
  ],
  image: "/assets/illustrations/case-study.png",
};

export type Testimonial = { quote: string; name: string; role: string };

/** Awaiting approved client reviews. Replace the placeholder text below. */
export const TESTIMONIALS: Testimonial[] = [
  {
    quote: "Insert the client's approved review here.",
    name: "Client Name",
    role: "Designation, Organisation",
  },
  {
    quote: "Insert the client's approved review here.",
    name: "Client Name",
    role: "Designation, Organisation",
  },
  {
    quote: "Insert the client's approved review here.",
    name: "Client Name",
    role: "Designation, Organisation",
  },
];

export const WHY_US = [
  {
    title: "Nationwide Media Reach",
    description: "Media publication opportunities across India.",
  },
  {
    title: "Integrated Expertise",
    description: "PR, social media, content, video, and advertising under one strategy.",
  },
  {
    title: "Digital-First Growth",
    description: "Digital marketing built around business goals—not just regular posting.",
  },
  {
    title: "Tailored Execution",
    description: "Every engagement is shaped around the brand, audience, and objective.",
  },
];

export const FAQS = [
  {
    q: "What does PEARLCON DIGITAL do?",
    a: "PEARLCON DIGITAL is a 360° PR and digital growth agency. We combine nationwide media coverage with modern digital marketing through two divisions: PR & Media, and Digital Marketing.",
  },
  {
    q: "Where are you based and which locations do you serve?",
    a: "Our office is in Jaipur, Rajasthan, and we work with brands across India.",
  },
  {
    q: "What is covered under your PR & Media division?",
    a: "Media coverage in newspapers and digital publications, press releases and media outreach, digital PR, and crisis and reputation management.",
  },
  {
    q: "What is covered under your Digital Marketing division?",
    a: "Social media management, content, design and video, paid advertising on Google and Meta, and brand strategy.",
  },
  {
    q: "Do you work with new brands as well as established ones?",
    a: "Yes. Every engagement is shaped around the brand, its audience, and its objective, so the approach works for both new and established organisations.",
  },
  {
    q: "Can I take only PR, or only digital marketing?",
    a: "Yes. The divisions work well together, but you can engage either one on its own depending on what your brand needs right now.",
  },
  {
    q: "How do you decide which publications to approach?",
    a: "We start by understanding your brand, audience and objectives, then plan the media direction and outreach around the publications that are most relevant to that audience.",
  },
  {
    q: "Can you guarantee that a story will be published?",
    a: "Editorial decisions always sit with the publication. We focus on strong communication, the right story angle, and focused outreach to give your brand the best possible opportunity.",
  },
  {
    q: "What does your working process look like?",
    a: "Five steps: Understand, Plan, Create, Execute, and Improve. We study the brand, build the roadmap, create the assets, run outreach and campaigns, then review performance and refine.",
  },
  {
    q: "How long does it take to see results?",
    a: "Timelines depend on the objective, the division involved, and the campaign scope. We share an indicative timeline as part of the plan before execution begins.",
  },
  {
    q: "Do you also handle websites and creative design?",
    a: "Yes. We handle websites and landing pages, social creatives, banners, print-ready design, digital visiting cards, QR solutions, and WhatsApp business setup and automation.",
  },
  {
    q: "Do you manage paid advertising campaigns?",
    a: "Yes. We handle Meta Ads and Google Ads, including campaign setup, ongoing management, and performance optimisation.",
  },
  {
    q: "How is pricing decided?",
    a: "Every requirement is different, so we scope the work first and then share a proposal. Let's discuss your requirements and we'll recommend the right direction.",
  },
  {
    q: "How do we get started?",
    a: "Send an enquiry through the contact form, call us, or message us on WhatsApp. We'll understand the requirement and recommend the right PR and digital direction.",
  },
  {
    q: "How quickly do you respond to enquiries?",
    a: "We respond to enquiries within one business day.",
  },
];