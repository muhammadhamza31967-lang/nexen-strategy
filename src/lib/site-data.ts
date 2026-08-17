export type ServiceKey =
  | "brand-and-design"
  | "web-and-app-development"
  | "software-solutions"
  | "ai-and-automation"
  | "marketing-and-growth"
  | "media-production";

export interface ServiceSummary {
  no: string;
  title: string;
  slug: ServiceKey;
  short: string;
}

export const services: ServiceSummary[] = [
  {
    no: "01",
    title: "Brand & Design",
    slug: "brand-and-design",
    short:
      "Identity, visual systems and design that give your business presence, clarity and confidence.",
  },
  {
    no: "02",
    title: "Web & App Development",
    slug: "web-and-app-development",
    short:
      "Websites, platforms and applications engineered for performance, scale and commercial results.",
  },
  {
    no: "03",
    title: "Software Solutions",
    slug: "software-solutions",
    short:
      "CRM, CMS, portals and custom software shaped around the way your business actually operates.",
  },
  {
    no: "04",
    title: "AI & Automation",
    slug: "ai-and-automation",
    short:
      "Practical AI and automation that removes friction, saves time and compounds efficiency.",
  },
  {
    no: "05",
    title: "Marketing & Growth",
    slug: "marketing-and-growth",
    short:
      "Strategy, campaigns and demand generation that turn attention into measurable opportunity.",
  },
  {
    no: "06",
    title: "Media Production",
    slug: "media-production",
    short:
      "Video and photography that make your brand impossible to overlook across every channel.",
  },
];

export const industries = [
  "Professional Services",
  "Education & Training",
  "Healthcare",
  "Real Estate",
  "Technology",
  "Retail & E-commerce",
  "Hospitality",
  "Industrial & Manufacturing",
  "Energy & Marine",
  "Start-ups & Growing Businesses",
];

export const partners = [
  "Northgate Group",
  "Aurora Health",
  "Meridian Legal",
  "Harbour & Vale",
  "Kestrel Energy",
  "Loom Retail",
  "Cadence Education",
  "Fenwick Marine",
  "Atlas Industrial",
  "Studio Rowe",
];

export const serviceOptions = [
  "Brand & Design",
  "Web & App Development",
  "Software Solutions",
  "AI & Automation",
  "Marketing & Growth",
  "Media Production",
  "Other",
];