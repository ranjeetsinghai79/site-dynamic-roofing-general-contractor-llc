import type { SiteConfig } from "@core/web/types"

export const config: SiteConfig = {
  business: {
    name: "Dynamic Roofing",
    tagline: "YOUR ROOF, OUR PRIORITY",
    phone: "(972) 422-4500",
    phoneHref: "tel:+19724224500",
    email: "info@dynamicroofing.com",
    address: "123 Main St",
    city: "Plano",
    serviceAreas: ["DFW Metroplex", "Plano", "Texas"],
    license: "TX Roofing Contractor",
    since: "2006",
    google_rating: "4.9",
    review_count: "200",
    emergency: true,
    theme: "forest",
    niche: "roofing",
  },

  services: [
    { icon: "home", title: "Residential Roofing", desc: "Expert installation and repair for all residential roof types, ensuring lasting protection.", urgent: false },
    { icon: "briefcase", title: "Commercial Roofing", desc: "Specialized roofing solutions for businesses, designed for durability and minimal disruption.", urgent: false },
    { icon: "hammer", title: "Roof Replacement", desc: "Complete roof replacement services using high-quality materials for superior longevity.", urgent: false },
    { icon: "wrench", title: "Roof Repair", desc: "Prompt and effective repairs for leaks, damage, and wear to extend your roof's life.", urgent: true },
    { icon: "shield-check", title: "Storm Damage Repair", desc: "Rapid response and expert repair for roofs damaged by hail, wind, or severe weather.", urgent: true },
    { icon: "droplets", title: "Gutter Services", desc: "Installation, repair, and cleaning of gutters to protect your home's foundation and landscaping.", urgent: false }
  ],

  testimonials: [
    { name: "Sarah L.", location: "Plano, TX", stars: 5, text: "Dynamic Roofing replaced our entire roof after a hailstorm last spring. From the initial free inspection to the final cleanup, their team was incredibly professional and efficient. They handled all the insurance paperwork, which was a huge relief. Our new roof looks fantastic and has already withstood a few heavy storms without a hitch. Highly recommend their quality work!" },
    { name: "Mark T.", location: "Dallas, TX", stars: 5, text: "We had a persistent leak that several other companies couldn't fix. Dynamic Roofing came out, quickly identified the problem, and completed the repair within a day. The crew was courteous, explained everything clearly, and the price was fair. It's been six months, and no more leaks! So grateful for their expertise." },
    { name: "Jessica R.", location: "Frisco, TX", stars: 5, text: "I needed an emergency repair after a tree branch fell on my roof. Dynamic Roofing responded within hours, secured the area, and provided a temporary fix to prevent further damage. They then returned to complete a full repair, which was done flawlessly. Their promptness and attention to detail during a stressful time were truly impressive." }
  ],

  trustBadges: [
    "GAF Master Elite Contractor", "BBB A+ Rated", "Licensed & Insured", "24/7 Emergency Service", "Free Roof Inspections", "Serving DFW Since 2006"
  ],

  stats: [
    { value: 4.9, label: "Google Rating", suffix: "★", decimals: 1 },
    { value: 1000, label: "Roofs Installed", suffix: "+", decimals: 0 },
    { value: 17, label: "Yrs Experience", suffix: "+", decimals: 0 }
  ],

  reasons: [
    { icon: "clock", title: "Fast Response", desc: "We prioritize urgent requests, ensuring quick service when you need it most." },
    { icon: "dollar-sign", title: "Upfront Pricing", desc: "Clear, detailed estimates with no hidden fees, so you know exactly what to expect." },
    { icon: "award", title: "Certified Pros", desc: "Our team consists of highly trained and certified roofing specialists." },
    { icon: "thumbs-up", title: "Satisfaction Guarantee", desc: "We stand behind our work with a commitment to your complete satisfaction." },
    { icon: "phone", title: "24/7 Support", desc: "Our team is available around the clock for emergencies and inquiries." },
    { icon: "truck", title: "Fully Equipped", desc: "We arrive with all the necessary tools and materials for efficient, quality work." }
  ],

  formServiceOptions: ["Residential Roofing", "Commercial Roofing", "Roof Replacement", "Roof Repair", "Roof Inspection", "Gutter Services", "Storm Damage Repair", "Emergency Roof Repair"]
}

// Backward-compat re-exports
export const BUSINESS = config.business
export const SERVICES = config.services!
export const TESTIMONIALS = config.testimonials!
export const TRUST_BADGES = config.trustBadges!