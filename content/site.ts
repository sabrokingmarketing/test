/**
 * ALL BUSINESS TEXT LIVES HERE.
 * Edit this file to change wording, contact details or the brand colour.
 * Every fact below comes from sabrokingmarketing.co.za.
 * Search for "TODO" to find details that are still missing.
 */

export const site = {
  name: "SA Broking Marketing",
  shortName: "SBM",
  url: "https://sabrokingmarketing.co.za", // TODO: change if this site goes live on a different web address
  tagline: "Building the next big company.",
  description:
    "SA Broking Marketing designs, builds and launches websites, apps, branding and digital marketing for ambitious businesses, from Krugersdorp, South Africa and beyond.",
  founded: "2026",
  parent: { name: "SA Broking Services", url: "https://sabroking.co.za" },

  // Brand colour (used for buttons, links and small highlights only)
  brand: {
    primary: "#2467E3",
  },

  contact: {
    phoneDisplay: "+27 66 220 2498",
    phoneHref: "tel:+27662202498",
    // TODO: confirm +27 66 220 2498 is on WhatsApp. Your website does not list a WhatsApp number.
    whatsappNumber: "27662202498",
    whatsappMessage: "Hi Kelvin, I found you on the SA Broking Marketing website and would like to chat about a project.",
    email: "kelvin@sabroking.co.za",
    address: {
      street: "282 Voortrekker Road",
      city: "Krugersdorp",
      region: "Gauteng",
      country: "ZA",
      full: "282 Voortrekker Road, Krugersdorp",
    },
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=282+Voortrekker+Road+Krugersdorp",
    // TODO: add your office hours. Your website does not list them.
    hours: null as string | null,
  },

  social: [
    { label: "LinkedIn", href: "https://www.linkedin.com/in/kelvin-van-wyk-1b53132ab" },
    { label: "Instagram", href: "https://www.instagram.com/kelvin_kellies/" },
  ],

  nav: [
    { label: "Services", href: "/services" },
    { label: "Work", href: "/work" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],

  hero: {
    eyebrow: "Digital studio · Krugersdorp",
    title: "Building the next big company.",
    subtitle:
      "Websites, apps, branding and marketing, engineered for scale. We turn ambitious ideas into digital work that grows your business.",
    image: { src: "/images/hero.jpg", alt: "Flowing blue light waves on a black background" },
  },

  // From the About page. TODO: these two counts disagree on your live site
  // (home page says "5+ projects launched", About page says "120+ successful projects"). Confirm which is right.
  stats: [
    { value: "5+", label: "Years of experience" },
    { value: "120+", label: "Successful projects" },
    { value: "98%", label: "Clients satisfied" },
    { value: "5.0", label: "Client rating" },
  ],

  clients: [
    { name: "FireMatic Africa", logo: "/images/clients/firematic-africa.png" },
    { name: "One Property Holdings", logo: "/images/clients/one-property-holdings.png" },
    { name: "Pro-Plan Consulting Engineers", logo: "/images/clients/pro-plan.png" },
    { name: "NJ Middleton Attorneys", logo: "/images/clients/nj-middleton-attorneys.png" },
    { name: "The Pocket CA", logo: "/images/clients/the-pocket-ca.png" },
    { name: "Vandlovu Group", logo: "/images/clients/vandlovu-group.png" },
    { name: "Enyuka Property Holdings", logo: "/images/clients/enyuka-property-holdings.png" },
    { name: "ibuntu", logo: "/images/clients/ibuntu.png" },
    { name: "milu baby", logo: "/images/clients/milu-baby.png" },
    { name: "Eighty", logo: "/images/clients/eighty.png" },
  ],

  services: [
    {
      slug: "ui-ux-design",
      icon: "PenTool",
      title: "UI/UX Design",
      short: "Beautiful, functional design that makes your brand stand out.",
      body: "From web design and UI/UX to branding and front-end development, we craft digital work that is beautiful, functional and built to make your brand stand out.",
      points: ["Web design", "UI/UX", "Branding", "Front-end development"],
      image: { src: "/images/brand-aloha.jpg", alt: "Hand holding a bright orange branded shopping bag" },
    },
    {
      slug: "web-development",
      icon: "Code2",
      title: "Web Development",
      short: "Fast, scalable websites and funnels that convert.",
      body: "We build scalable websites and conversion-driven funnels. Fast, responsive and built on modern tech to perform on every screen.",
      points: ["Business websites", "Sales funnels", "Landing pages", "Fast on every screen"],
      image: { src: "/images/responsive-phone.jpg", alt: "SA Broking Marketing website shown on a smartphone" },
    },
    {
      slug: "app-development",
      icon: "Smartphone",
      title: "App Development",
      short: "Mobile and web apps with clean code and seamless UX.",
      body: "We build intuitive, high-performing mobile and web apps, partnering with leading developers to deliver clean code, seamless UX and full cross-platform compatibility.",
      points: ["Mobile apps", "Web apps", "Cross-platform", "Clean, maintainable code"],
      image: { src: "/images/business-tablet.jpg", alt: "Business person using a tablet, in black and white" },
    },
    {
      slug: "digital-marketing",
      icon: "Megaphone",
      title: "Digital Marketing",
      short: "SEO, social, content and ads that help you scale.",
      body: "Full-stack digital marketing: SEO, social media, content and online advertising, built to help ambitious businesses scale.",
      points: ["SEO", "Social media", "Content", "Online advertising"],
      image: { src: "/images/brand-car.jpg", alt: "Black sports car in motion on a highway" },
    },
    {
      slug: "drone-photography",
      icon: "Camera",
      title: "Drone Photography & Video",
      short: "Aerial photos and cinematic 4K video, ready to publish.",
      body: "World-class aerial drone photography and cinematic video. Striking imagery, motion and storytelling, all in one service.",
      points: [
        "Aerial photography: high-resolution stills that show scale, location and detail",
        "Cinematic video: smooth 4K motion and reveal shots for properties, events and brands",
        "All-in-one delivery: captured, colour-graded and ready to publish",
      ],
      image: { src: "/images/drone-aerial.jpg", alt: "Aerial drone photo of a house and pool surrounded by trees" },
      isNew: true,
    },
  ],

  automation: {
    title: "Automate your marketing.",
    intro:
      "An all-in-one system for business owners. We set it up and hand it over. You plan content, design posters, write captions with AI, schedule posts and manage your website and funnels from one place.",
    features: [
      "AI caption writer",
      "Poster design tools",
      "Content planner and calendar",
      "Automated scheduling",
      "Multi-platform publishing",
    ],
    platforms: ["Instagram", "Facebook", "LinkedIn", "TikTok", "YouTube", "X"],
    steps: ["Set up", "Hand over", "Plan & create", "Schedule", "Grow"],
    plans: [
      {
        name: "Posting System",
        price: "R780",
        period: "per month",
        summary: "Everything you need to plan, design and publish your social content.",
        includes: [
          "Content planner and calendar",
          "Poster design tools",
          "AI caption writer",
          "Automated scheduling",
          "Multi-platform publishing",
          "Full access",
        ],
      },
      {
        name: "Complete Business System",
        price: "R2 500",
        period: "per month",
        summary: "The Posting System plus everything your business runs on.",
        includes: [
          "Everything in the Posting System",
          "Business website",
          "Sales funnels and landing pages",
          "Business automations",
          "Lead capture and follow-ups",
        ],
        featured: true,
      },
    ],
  },

  reasons: [
    {
      icon: "Handshake",
      title: "Direct access. No middlemen.",
      body: "You work straight with the team doing the work. No layers, just direct, high-quality work that delivers.",
    },
    {
      icon: "BadgeCheck",
      title: "Honest timelines, clear prices.",
      body: "No hidden fees or surprise invoices. Clear upfront pricing and an honest scope from the start.",
    },
    {
      icon: "InfinityIcon",
      title: "Unlimited revisions. Long-term support.",
      body: "We don't chase quick wins. We build long-term partnerships and keep refining until it's right.",
    },
  ],

  values: [
    { title: "Creative excellence", body: "Work that is strategic, considered and aligned with your brand and your ambitions." },
    { title: "Client-centred", body: "We listen first and design second, so the work reflects your vision and grows your business." },
    { title: "Efficiency first", body: "Fast turnarounds without cutting corners. Clear communication and on-time delivery." },
    { title: "Transparent pricing", body: "No hidden fees or surprise invoices. Clear upfront pricing and honest scope." },
  ],

  process: [
    { step: "01", title: "Contact us", body: "WhatsApp, call or email. Tell us about your idea, brand or brief." },
    { step: "02", title: "Discovery meeting", body: "We get to know your business and agree on scope, timeline and price." },
    { step: "03", title: "Roll-out", body: "We design, build and launch, then stay on to support you." },
  ],

  work: [
    {
      slug: "pro-plan-consulting-engineers",
      client: "Pro-Plan Consulting Engineers",
      type: "Website",
      year: "2026",
      image: "/images/work/pro-plan-consulting-engineers.jpg",
      alt: "Pro-Plan Consulting Engineers website shown on a laptop",
    },
    {
      slug: "one-property-holdings",
      client: "One Property Holdings",
      type: "Website",
      year: "2026",
      image: "/images/work/one-property-holdings.jpg",
      alt: "One Property Holdings website shown on a laptop",
    },
    {
      slug: "sa-broking-services",
      client: "SA Broking Services",
      type: "Website · App · Marketing",
      year: "2026",
      image: "/images/work/sa-broking-services.jpg",
      alt: "SA Broking Services website shown on a laptop",
    },
    {
      slug: "firematic-africa",
      client: "FireMatic Africa",
      type: "Website",
      year: "2026",
      image: "/images/work/firematic-africa.jpg",
      alt: "FireMatic Africa website shown on a laptop",
    },
  ],

  // Wording as shown on your live site (the site itself shortens each review).
  testimonials: [
    {
      quote:
        "SA Broking Marketing has played an integral role in helping us start, shape, and scale our business. Kelvin van Wyk and his team are true “solutionists”…",
      name: "Calvin De Bruin",
      role: "Founder / Co-Founder",
    },
    {
      quote:
        "We had a great experience dealing with Kelvin van Wyk from SA Broking Services Marketing Division. The service was professional, effective, and…",
      name: "Selwyn Smith",
      role: "Group Chairman",
    },
    {
      quote:
        "SA Broking Marketing assisted us at NJ Middleton Attorneys with our website, and the experience was excellent from start to finish…",
      name: "Nicole Middleton",
      role: "CEO, NJ Middleton Attorneys",
    },
    {
      quote:
        "I would just like to thank Kelvin van Wyk from SA Broking Services Marketing for the excellent service we received…",
      name: "Gert van Wyk",
      role: "", // TODO: add Gert van Wyk's role or company
    },
  ],

  about: {
    title: "The founder, up close.",
    body: [
      "Kelvin van Wyk founded SA Broking Marketing on a simple idea: bring strategy, marketing, design and digital expertise under one roof, then partner closely with businesses that are ready to grow.",
      "No layers, no middlemen. Just direct, high-quality work that delivers. We are a young, hungry South African studio building digital work for ambitious brands, from South Africa and beyond.",
    ],
  },

  faqs: [
    {
      q: "What services do you offer?",
      a: "UI/UX design and branding, web development and funnels, app development, digital marketing (SEO, social media, content and online advertising), drone photography and video, and an automated marketing system you run yourself.",
    },
    {
      q: "How long does a typical project take?",
      // TODO: add typical project timelines if you want to share them.
      a: "Every project is different. You get an honest timeline at the discovery meeting, before any work starts.",
    },
    {
      q: "Do you work with clients outside of South Africa?",
      a: "Yes. We are based in Krugersdorp and build digital work for brands in South Africa and beyond.",
    },
    {
      q: "What does it cost to work with you?",
      // TODO: add website and app project price ranges if you want to show them.
      a: "Pricing is clear and upfront, with no hidden fees. Our automated marketing systems start at R780 a month. For websites, apps and campaigns, we quote after a short discovery meeting.",
    },
  ],
} as const;

export const whatsappHref = `https://wa.me/${site.contact.whatsappNumber}?text=${encodeURIComponent(site.contact.whatsappMessage)}`;
