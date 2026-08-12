import { useState } from "react";
import {
  Award,
  CheckCircle2,
  ChevronRight,
  Globe,
  Layout,
  Megaphone,
  MessageSquare,
  ShieldAlert,
  Sparkles,
  TrendingUp,
  Users,
  Zap,
} from "lucide-react";

import { CONTACT } from "@/lib/site-data";
import { cn } from "@/lib/utils";
import { GlassButton, Reveal, Section, SectionLabel } from "./primitives";

type CategoryId = "all" | "website" | "social" | "design" | "whatsapp" | "ads" | "special";

interface ServicePlan {
  id: string;
  category: CategoryId;
  title: string;
  tagline: string;
  features: string[];
  highlight?: boolean;
  badge?: string;
  icon: JSX.Element;
  gradient: string;
  accentColor: string;
}

const CATEGORIES: { id: CategoryId; label: string; icon: JSX.Element }[] = [
  { id: "all", label: "All Packages", icon: <Sparkles className="h-4 w-4" /> },
  { id: "website", label: "Website Solutions", icon: <Globe className="h-4 w-4" /> },
  { id: "social", label: "Social Media", icon: <Users className="h-4 w-4" /> },
  { id: "design", label: "Graphic Design", icon: <Layout className="h-4 w-4" /> },
  { id: "whatsapp", label: "WhatsApp & Chatbot", icon: <MessageSquare className="h-4 w-4" /> },
  { id: "ads", label: "Digital Advertising", icon: <Megaphone className="h-4 w-4" /> },
  { id: "special", label: "Specialized Services", icon: <Zap className="h-4 w-4" /> },
];

const ELECTION_SERVICES: ServicePlan[] = [
  // Website
  {
    id: "web-basic",
    category: "website",
    title: "Basic Candidate Website",
    tagline: "Essential 5-page digital presence for political candidates",
    features: [
      "5 Custom Designed Pages",
      "Candidate Profile & Vision Statement",
      "High-Resolution Photo Gallery",
      "Voter Inquiry & Contact Form",
      "Mobile Responsive & Fast Loading",
    ],
    icon: <Globe className="h-6 w-6" />,
    gradient: "from-blue-500/20 via-indigo-500/10 to-transparent",
    accentColor: "bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/30",
  },
  {
    id: "web-pro",
    category: "website",
    title: "Professional Candidate Website",
    tagline: "Dynamic news, media updates and interactive voter connect",
    highlight: true,
    badge: "Most Popular",
    features: [
      "Dynamic Website Architecture",
      "Press Release & News Section",
      "Interactive Photo & Video Gallery",
      "Advanced Contact & Supporter Form",
      "Speed & SEO Optimisation",
    ],
    icon: <Award className="h-6 w-6" />,
    gradient: "from-amber-500/25 via-orange-500/15 to-transparent",
    accentColor: "bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/30",
  },
  {
    id: "web-premium",
    category: "website",
    title: "Premium Election Website",
    tagline: "Full-scale digital campaign HQ with CMS and WhatsApp integration",
    badge: "Enterprise",
    features: [
      "Dynamic Content Management System (CMS)",
      "Advanced Search Engine Optimisation (SEO)",
      "Real-time Campaign Analytics & Traffic Tracker",
      "Direct WhatsApp Chat Integration",
      "Multilingual Candidate Support Ready",
    ],
    icon: <Sparkles className="h-6 w-6" />,
    gradient: "from-purple-500/20 via-pink-500/10 to-transparent",
    accentColor: "bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-500/30",
  },
  {
    id: "web-maint",
    category: "website",
    title: "Website Maintenance & Backup",
    tagline: "30 days continuous updates, security monitoring and backups",
    features: [
      "Daily / Weekly Content Updates",
      "24/7 Security & Uptime Monitoring",
      "Automated Cloud Backup System",
      "Emergency Fixes & Technical Support",
    ],
    icon: <CheckCircle2 className="h-6 w-6" />,
    gradient: "from-emerald-500/20 via-teal-500/10 to-transparent",
    accentColor: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/30",
  },

  // Social Media
  {
    id: "sm-fb",
    category: "social",
    title: "Facebook Management",
    tagline: "30-day complete Facebook page strategy, post creation and engagement",
    features: [
      "Daily Content & Speech Graphics",
      "Voter Community Management",
      "Event & Rally Highlights Publishing",
      "Page Optimisation & Audience Growth",
    ],
    icon: <Users className="h-6 w-6" />,
    gradient: "from-blue-600/20 via-blue-400/10 to-transparent",
    accentColor: "bg-blue-600/10 text-blue-600 border-blue-600/30",
  },
  {
    id: "sm-ig",
    category: "social",
    title: "Instagram Management",
    tagline: "Youth connect via high-impact Reels, Stories and HD posts",
    highlight: true,
    badge: "Trending",
    features: [
      "Viral Campaign Reels & Shorts Editing",
      "Story Highlights & Campaign Updates",
      "Hashtag & Regional Trend Strategy",
      "Active Follower Engagement",
    ],
    icon: <Sparkles className="h-6 w-6" />,
    gradient: "from-pink-500/25 via-rose-500/15 to-transparent",
    accentColor: "bg-pink-500/10 text-pink-600 border-pink-500/30",
  },
  {
    id: "sm-yt",
    category: "social",
    title: "YouTube Management",
    tagline: "Video optimization, speech clips, shorts and channel growth",
    features: [
      "Speech & Interview Editing",
      "Custom HD Thumbnails & Titles",
      "YouTube Shorts Optimisation",
      "SEO Metadata for Maximum Reach",
    ],
    icon: <TrendingUp className="h-6 w-6" />,
    gradient: "from-red-500/20 via-rose-500/10 to-transparent",
    accentColor: "bg-red-500/10 text-red-600 border-red-500/30",
  },
  {
    id: "sm-all",
    category: "social",
    title: "All Social Media Platforms",
    tagline: "Integrated 30-day command across Facebook, Instagram, X & YouTube",
    badge: "360° Control",
    features: [
      "Unified Cross-Platform Strategy",
      "Daily Multi-Platform Publishing",
      "Crisis Response & Comment Moderation",
      "Comprehensive Monthly Reach Report",
    ],
    icon: <Zap className="h-6 w-6" />,
    gradient: "from-cyan-500/25 via-blue-500/15 to-transparent",
    accentColor: "bg-cyan-500/10 text-cyan-600 border-cyan-500/30",
  },

  // Graphic Design
  {
    id: "des-creative",
    category: "design",
    title: "Graphic & Manifesto Design",
    tagline: "Professional digital posts, flex banners & complete manifesto design",
    features: [
      "Social Media Post Creatives",
      "HD Premium Campaign Graphics",
      "Digital Banner & Hoarding Design",
      "Print-Ready Flex & Poster Layouts",
      "Complete Election Manifesto Design",
    ],
    icon: <Layout className="h-6 w-6" />,
    gradient: "from-violet-500/20 via-purple-500/10 to-transparent",
    accentColor: "bg-violet-500/10 text-violet-600 border-violet-500/30",
  },

  // WhatsApp
  {
    id: "wa-services",
    category: "whatsapp",
    title: "WhatsApp & Chatbot Setup",
    tagline: "Automated 24/7 voter query handling and bulk campaign announcements",
    highlight: true,
    badge: "High Impact",
    features: [
      "Official WhatsApp Business Setup",
      "Automated Interactive Voter Chatbot",
      "Manifesto & Video Broadcast Setup",
      "Instant Auto-Reply to Voter Enquiries",
    ],
    icon: <MessageSquare className="h-6 w-6" />,
    gradient: "from-emerald-500/25 via-green-500/15 to-transparent",
    accentColor: "bg-emerald-500/10 text-emerald-600 border-emerald-500/30",
  },

  // Digital Advertising
  {
    id: "ads-meta-google",
    category: "ads",
    title: "Meta & Google Ads Campaign",
    tagline: "Laser-targeted voter ads on Facebook, Instagram, Google & YouTube",
    features: [
      "Constituency & Demographics Targeting",
      "Meta Ads Setup & Management",
      "Google Search & Display Ads Setup",
      "Continuous Campaign Optimisation",
      "Direct Platform Ad Budget Management",
    ],
    icon: <Megaphone className="h-6 w-6" />,
    gradient: "from-orange-500/20 via-amber-500/10 to-transparent",
    accentColor: "bg-orange-500/10 text-orange-600 border-orange-500/30",
  },

  // Specialized Services
  {
    id: "spec-campaign",
    category: "special",
    title: "Specialized Election Solutions",
    tagline: "Smart digital visiting cards, QR solutions & real-time dashboards",
    badge: "Custom Scoped",
    features: [
      "Interactive Digital Visiting Cards",
      "Candidate QR Code Connect Solutions",
      "Custom Campaign Landing Pages",
      "Press Release Drafting & Outreach",
      "Live Campaign Performance Dashboard",
      "24-Hour Emergency Work Priority",
      "Dedicated Premium Priority Support",
    ],
    icon: <ShieldAlert className="h-6 w-6" />,
    gradient: "from-indigo-500/20 via-blue-500/10 to-transparent",
    accentColor: "bg-indigo-500/10 text-indigo-600 border-indigo-500/30",
  },
];

export function ElectionServices() {
  const [activeCategory, setActiveCategory] = useState<CategoryId>("all");

  const filteredServices =
    activeCategory === "all"
      ? ELECTION_SERVICES
      : ELECTION_SERVICES.filter((s) => s.category === activeCategory);

  return (
    <Section id="election-services" className="relative overflow-hidden">
      {/* Dynamic Background Glow Orbs */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 left-1/2 h-[450px] w-[650px] -translate-x-1/2 rounded-full bg-gradient-to-r from-blue-500/15 via-indigo-500/20 to-purple-500/15 blur-3xl opacity-70 animate-pulse"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-32 right-10 h-[350px] w-[350px] rounded-full bg-gradient-to-br from-amber-500/15 to-rose-500/15 blur-3xl opacity-60"
      />

      {/* Header Banner */}
      <div className="relative">
        <Reveal>
          <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.16em] text-amber-600 dark:text-amber-400 shadow-sm backdrop-blur-md">
            <Sparkles className="h-3.5 w-3.5 animate-spin [animation-duration:6s]" />
            Specialized Election Division
          </div>
        </Reveal>

        <Reveal delay={80}>
          <h2 className="mt-5 display-xl text-[clamp(2.3rem,5.5vw,4.8rem)] text-foreground">
            Election Digital Services Rate Card 2026
          </h2>
        </Reveal>

        <Reveal delay={140}>
          <p className="mt-5 max-w-3xl text-base font-medium leading-relaxed text-muted-foreground sm:text-lg">
            360° Election Digital Campaign Management for Candidates, Leaders, and Political
            Organisations. High-impact websites, social media command, custom graphics, WhatsApp
            automation, and precision advertising.
          </p>
        </Reveal>
      </div>

      {/* Category Tabs */}
      <Reveal delay={200} className="mt-12">
        <div className="flex flex-wrap items-center gap-2.5 border-b border-border/80 pb-5">
          {CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveCategory(cat.id)}
                className={cn(
                  "group relative inline-flex items-center gap-2 rounded-full px-4 py-2.5 text-xs font-bold uppercase tracking-wider transition-all duration-300",
                  isActive
                    ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20 scale-105"
                    : "glass text-muted-foreground hover:text-foreground hover:bg-card/80 hover:-translate-y-0.5",
                )}
              >
                <span className={cn("transition-transform duration-300 group-hover:scale-110", isActive && "text-amber-300")}>
                  {cat.icon}
                </span>
                {cat.label}
              </button>
            );
          })}
        </div>
      </Reveal>

      {/* Grid of Highlighted Cards */}
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filteredServices.map((service, idx) => (
          <Reveal key={service.id} delay={Math.min(idx * 70, 350)}>
            <div
              className={cn(
                "group relative flex h-full flex-col justify-between overflow-hidden rounded-[1.8rem] border border-border/70 bg-card/60 p-7 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-primary/40 hover:shadow-2xl hover:shadow-primary/10",
                service.highlight && "border-amber-500/40 bg-gradient-to-b from-amber-500/10 via-card/80 to-card shadow-lg shadow-amber-500/5",
              )}
            >
              {/* Top ambient color glow */}
              <div
                className={cn(
                  "pointer-events-none absolute -top-24 -right-24 h-48 w-48 rounded-full bg-gradient-to-br opacity-0 transition-opacity duration-500 group-hover:opacity-100 blur-2xl",
                  service.gradient,
                )}
              />

              <div>
                {/* Header Row: Badge & Icon */}
                <div className="flex items-center justify-between gap-3">
                  <div className={cn("inline-flex items-center gap-2 rounded-xl border px-3 py-1.5 text-xs font-bold transition-transform duration-300 group-hover:scale-110", service.accentColor)}>
                    {service.icon}
                    <span className="capitalize">{service.category}</span>
                  </div>

                  {service.badge && (
                    <span className="inline-flex items-center gap-1 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 px-3 py-1 text-[0.65rem] font-extrabold uppercase tracking-widest text-white shadow-md animate-pulse">
                      <Sparkles className="h-3 w-3" />
                      {service.badge}
                    </span>
                  )}
                </div>

                {/* Title & Description */}
                <h3 className="mt-6 font-display text-xl font-bold tracking-tight text-foreground sm:text-2xl group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="mt-2 text-xs font-medium leading-relaxed text-muted-foreground">
                  {service.tagline}
                </p>

                {/* Features List */}
                <div className="mt-6 space-y-2.5 border-t border-border/60 pt-5">
                  {service.features.map((feat, fi) => (
                    <div key={fi} className="flex items-start gap-2.5">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500" />
                      <span className="text-xs font-semibold leading-snug text-foreground/90">
                        {feat}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Action */}
              <div className="mt-8 border-t border-border/60 pt-5">
                <GlassButton
                  href={`${CONTACT.whatsappHref}&text=${encodeURIComponent(`Hello PEARLCON DIGITAL, I would like to inquire about the Election Service: ${service.title}`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full justify-center group/btn text-xs font-bold uppercase tracking-wider"
                >
                  Inquire Package
                  <ChevronRight className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                </GlassButton>
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      {/* Call to Action Footer Box */}
      <Reveal delay={250} className="mt-16">
        <div className="relative overflow-hidden rounded-[2.2rem] border border-amber-500/30 bg-gradient-to-r from-amber-500/15 via-orange-500/10 to-purple-500/15 p-8 sm:p-12 backdrop-blur-2xl shadow-2xl">
          <div aria-hidden className="pointer-events-none absolute -right-10 -top-10 h-64 w-64 rounded-full bg-amber-500/20 blur-3xl" />
          <div className="relative z-10 grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-amber-500/40 bg-amber-500/20 px-3.5 py-1 text-[0.68rem] font-bold uppercase tracking-widest text-amber-700 dark:text-amber-300">
                Custom Campaign Packages
              </span>
              <h3 className="mt-4 font-display text-2xl font-bold tracking-tight text-foreground sm:text-3xl lg:text-4xl">
                Need a Custom Election Digital Plan?
              </h3>
              <p className="mt-3 max-w-2xl text-sm font-medium leading-relaxed text-muted-foreground">
                Every election campaign is unique. We tailor candidate websites, PR press coverage,
                social media command rooms, and targeted ads specifically for your constituency.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <GlassButton
                href={CONTACT.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary text-primary-foreground hover:bg-primary/90 font-bold"
              >
                Discuss Campaign Strategy
              </GlassButton>
            </div>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
