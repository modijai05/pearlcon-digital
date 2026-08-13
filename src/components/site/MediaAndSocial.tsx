import { useEffect, useRef, useState } from "react";
import { MEDIA_COVERAGE } from "@/lib/site-data";
import { Reveal, Section, SectionLabel, useReducedMotion } from "./primitives";

export function MediaCoverage() {
  return (
    <Section id="media">
      <div className="grid gap-10 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:items-end">
        <div>
          <Reveal>
            <SectionLabel>Media Coverage</SectionLabel>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="mt-7 display-xl text-[clamp(2.1rem,5.2vw,4.2rem)]">
              Seen in print.
            </h2>
          </Reveal>
        </div>
        <Reveal delay={140}>
          <p className="max-w-md text-sm leading-relaxed text-muted-foreground lg:justify-self-end">
            Newspaper and digital placements secured for our clients through focused media
            outreach.
          </p>
        </Reveal>
      </div>

      <ul className="mt-14 columns-1 gap-5 sm:columns-2 lg:columns-3 [&>li]:mb-5 [&>li]:break-inside-avoid">
        {MEDIA_COVERAGE.map((item, i) => (
          <Reveal as="li" key={item.id} delay={Math.min(i, 5) * 70}>
            <figure className="glass overflow-hidden rounded-[1.5rem] p-3">
              <img
                src={item.image}
                alt={item.title}
                loading="lazy"
                className="w-full rounded-[1.1rem] object-cover"
              />
              <figcaption className="px-2 pb-1 pt-3 text-xs leading-relaxed text-muted-foreground">
                {item.title}
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </ul>
    </Section>
  );
}

/* ── Illustrative DP Vectors ─────────────────────────────────────────────── */

function PoliticalLeaderDP() {
  return (
    <svg viewBox="0 0 100 100" fill="none" className="h-full w-full rounded-full">
      <defs>
        <linearGradient id="pol-bg" x1="0" y1="0" x2="100" y2="100" gradientUnits="userSpaceOnUse">
          <stop stopColor="#F97316" />
          <stop offset="0.5" stopColor="#DC2626" />
          <stop offset="1" stopColor="#7C3AED" />
        </linearGradient>
      </defs>
      <rect width="100" height="100" fill="url(#pol-bg)" />
      {/* Sunburst Rays */}
      <circle cx="50" cy="50" r="42" stroke="white" strokeWidth="1" strokeDasharray="3 3" opacity="0.3" />
      {/* Editorial Leader Vector */}
      <path d="M50 25 C41 25 35 32 35 41 C35 50 41 55 50 55 C59 55 65 50 65 41 C65 32 59 25 50 25 Z" fill="white" />
      <path d="M22 88 C22 68 34 60 50 60 C66 60 78 68 78 88 Z" fill="white" opacity="0.9" />
      {/* Podium & Mic */}
      <rect x="42" y="70" width="16" height="25" rx="3" fill="#FDE047" />
      <circle cx="50" cy="52" r="3" fill="#1E293B" />
      <path d="M47 52 L42 62" stroke="#1E293B" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function DoctorDP() {
  return (
    <svg viewBox="0 0 100 100" fill="none" className="h-full w-full rounded-full">
      <defs>
        <linearGradient id="doc-bg" x1="0" y1="0" x2="100" y2="100" gradientUnits="userSpaceOnUse">
          <stop stopColor="#06B6D4" />
          <stop offset="0.5" stopColor="#0D9488" />
          <stop offset="1" stopColor="#2563EB" />
        </linearGradient>
      </defs>
      <rect width="100" height="100" fill="url(#doc-bg)" />
      {/* Medical Halo Circle */}
      <circle cx="50" cy="50" r="44" stroke="white" strokeWidth="1.5" opacity="0.25" />
      {/* Doctor Vector Avatar */}
      <path d="M50 23 C42 23 36 30 36 39 C36 48 42 53 50 53 C58 53 64 48 64 39 C64 30 58 23 50 23 Z" fill="white" />
      <path d="M24 88 C24 66 35 58 50 58 C65 58 76 66 76 88 Z" fill="white" opacity="0.95" />
      {/* Stethoscope */}
      <path d="M38 60 C38 72 62 72 62 60" stroke="#0D9488" strokeWidth="3.5" strokeLinecap="round" />
      <circle cx="50" cy="74" r="4.5" fill="#38BDF8" />
      {/* Cross Badge */}
      <path d="M72 26 V34 M68 30 H76" stroke="#5EEAD4" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}

function BusinessmanDP() {
  return (
    <svg viewBox="0 0 100 100" fill="none" className="h-full w-full rounded-full">
      <defs>
        <linearGradient id="biz-bg" x1="0" y1="0" x2="100" y2="100" gradientUnits="userSpaceOnUse">
          <stop stopColor="#6366F1" />
          <stop offset="0.5" stopColor="#4F46E5" />
          <stop offset="1" stopColor="#0F172A" />
        </linearGradient>
      </defs>
      <rect width="100" height="100" fill="url(#biz-bg)" />
      {/* Geometric Skyline Lines */}
      <path d="M15 85 V60 H30 V45 H45 V35 H60 V50 H75 V65 H90 V85 Z" fill="white" opacity="0.1" />
      {/* Executive Vector Avatar */}
      <path d="M50 24 C42 24 37 30 37 39 C37 47 42 53 50 53 C58 53 63 47 63 39 C63 30 58 24 50 24 Z" fill="white" />
      <path d="M23 88 C23 66 35 58 50 58 C65 58 77 66 77 88 Z" fill="white" opacity="0.9" />
      {/* Tie */}
      <polygon points="50,58 53,68 50,82 47,68" fill="#F59E0B" />
    </svg>
  );
}

function GovernmentBodyDP() {
  return (
    <svg viewBox="0 0 100 100" fill="none" className="h-full w-full rounded-full">
      <defs>
        <linearGradient id="gov-bg" x1="0" y1="0" x2="100" y2="100" gradientUnits="userSpaceOnUse">
          <stop stopColor="#1E3A8A" />
          <stop offset="0.5" stopColor="#1E40AF" />
          <stop offset="1" stopColor="#065F46" />
        </linearGradient>
      </defs>
      <rect width="100" height="100" fill="url(#gov-bg)" />
      {/* Emblem Dome Architecture Vector */}
      <path d="M50 18 C30 18 22 34 22 42 H78 C78 34 70 18 50 18 Z" fill="white" opacity="0.95" />
      <rect x="22" y="44" width="56" height="6" fill="#F59E0B" />
      {/* Columns */}
      <rect x="26" y="52" width="6" height="26" fill="white" />
      <rect x="38" y="52" width="6" height="26" fill="white" />
      <rect x="50" y="52" width="6" height="26" fill="white" />
      <rect x="62" y="52" width="6" height="26" fill="white" />
      <rect x="74" y="52" width="6" height="26" fill="white" />
      <rect x="18" y="80" width="64" height="7" fill="#F59E0B" />
    </svg>
  );
}

/* ── Profile Definition ─────────────────────────────────────────────────── */

export type IllustrativeProfile = {
  id: string;
  name: string;
  handle: string;
  category: string;
  avatarComponent: JSX.Element;
  bio: string;
  basePosts: number;
  baseFollowers: number;
  following: number;
  mainPostImage: string;
  mainPostTitle: string;
  mainPostTag: string;
  mainPostOffset?: string;
};

const P_IMG = "/assets/instagram/political-leader-posts.png";
const D_IMG = "/assets/instagram/doctor-posts.png";
const B_IMG = "/assets/instagram/business-posts.png";
const G_IMG = "/assets/instagram/government-posts.png";

const PROFILES: IllustrativeProfile[] = [
  {
    id: "political-leader",
    name: "Political Leader",
    handle: "@political.leader",
    category: "Public Service & Leadership",
    avatarComponent: <PoliticalLeaderDP />,
    bio: "Public service outreach, community development campaigns, policy & civic communication.",
    basePosts: 124,
    baseFollowers: 42300,
    following: 350,
    mainPostImage: P_IMG,
    mainPostTitle: "Keynote Address & Public Service Mission",
    mainPostTag: "FEATURED POST",
    mainPostOffset: "50% 25%",
  },
  {
    id: "doctor",
    name: "Doctor",
    handle: "@doctor.care",
    category: "Healthcare & Medical",
    avatarComponent: <DoctorDP />,
    bio: "Preventive cardiology, medical awareness graphics, clinical guidance & wellness education.",
    basePosts: 88,
    baseFollowers: 28600,
    following: 190,
    mainPostImage: D_IMG,
    mainPostTitle: "Preventive Cardiology & Clinical Guidance",
    mainPostTag: "HEALTHCARE",
    mainPostOffset: "50% 25%",
  },
  {
    id: "businessman",
    name: "Businessman",
    handle: "@businessman.exec",
    category: "Business & Enterprise",
    avatarComponent: <BusinessmanDP />,
    bio: "Venture scaling, enterprise AI strategy, corporate governance & executive leadership.",
    basePosts: 156,
    baseFollowers: 64100,
    following: 410,
    mainPostImage: B_IMG,
    mainPostTitle: "Enterprise AI Strategy & Global Tech Summit",
    mainPostTag: "EXECUTIVE",
    mainPostOffset: "50% 25%",
  },
  {
    id: "government-body",
    name: "Government Body",
    handle: "@government.body",
    category: "Civic & Public Services",
    avatarComponent: <GovernmentBodyDP />,
    bio: "Civic infrastructure updates, smart traffic corridors, green city initiatives & public information.",
    basePosts: 210,
    baseFollowers: 89500,
    following: 45,
    mainPostImage: G_IMG,
    mainPostTitle: "Smart Infrastructure & Solar Energy Grid",
    mainPostTag: "CIVIC UPDATE",
    mainPostOffset: "50% 25%",
  },
];

/* ── Number Formatting & Counter Component ────────────────────────────────── */

function formatFollowers(num: number): string {
  if (num >= 1000000) {
    return (num / 1000000).toFixed(1) + "M";
  }
  if (num >= 1000) {
    return (num / 1000).toFixed(1) + "K";
  }
  return num.toLocaleString();
}

function SmoothCounter({
  value,
  isFollower = false,
}: {
  value: number;
  isFollower?: boolean;
}) {
  const [displayVal, setDisplayVal] = useState(value);
  const [isBumped, setIsBumped] = useState(false);
  const prevVal = useRef(value);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (prevVal.current === value) return;

    setIsBumped(true);
    const bumpTimeout = setTimeout(() => setIsBumped(false), 1400);

    if (reducedMotion) {
      setDisplayVal(value);
      prevVal.current = value;
      return () => clearTimeout(bumpTimeout);
    }

    const startVal = prevVal.current;
    const diff = value - startVal;
    const duration = 1200;
    const startTimestamp = performance.now();

    let animationFrameId: number;

    const step = (now: number) => {
      const elapsed = now - startTimestamp;
      const progress = Math.min(elapsed / duration, 1);
      const ease = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      const current = Math.floor(startVal + diff * ease);

      setDisplayVal(current);

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(step);
      } else {
        setDisplayVal(value);
        prevVal.current = value;
      }
    };

    animationFrameId = requestAnimationFrame(step);

    return () => {
      cancelAnimationFrame(animationFrameId);
      clearTimeout(bumpTimeout);
    };
  }, [value, reducedMotion]);

  return (
    <span
      className={`inline-block font-display text-sm font-black transition-all duration-500 ${
        isBumped
          ? "scale-110 text-emerald-500 dark:text-emerald-400 drop-shadow-[0_0_8px_rgba(16,185,129,0.5)]"
          : "text-foreground"
      }`}
    >
      {isFollower ? formatFollowers(displayVal) : displayVal.toLocaleString()}
    </span>
  );
}

/* ── Profile Card Component ──────────────────────────────────────────────── */

function ProfileShowcaseCard({
  profile,
  currentPosts,
  currentFollowers,
  delay,
}: {
  profile: IllustrativeProfile;
  currentPosts: number;
  currentFollowers: number;
  delay: number;
}) {
  return (
    <Reveal as="li" delay={delay}>
      <div className="glass group relative flex flex-col justify-between overflow-hidden rounded-[1.6rem] p-5 transition-all duration-700 [transition-timing-function:var(--ease-out-expo)] hover:-translate-y-1.5 hover:shadow-[var(--shadow-soft)]">
        {/* Hover Shimmer */}
        <div className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/[0.08] to-transparent transition-transform duration-1000 group-hover:translate-x-full" />

        <div>
          {/* Category Bar */}
          <div className="flex items-center justify-between border-b border-border/40 pb-3">
            <span className="text-[0.62rem] font-bold uppercase tracking-widest text-primary/80">
              {profile.category}
            </span>
            <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
          </div>

          {/* Profile Header */}
          <div className="mt-4 flex items-center gap-3.5">
            {/* Avatar Ring */}
            <div className="relative h-13 w-13 shrink-0 rounded-full p-[2px] shadow-md transition-transform duration-500 group-hover:scale-105 bg-gradient-to-br from-amber-500 via-rose-500 to-purple-600">
              <div className="h-full w-full overflow-hidden rounded-full bg-card">
                {profile.avatarComponent}
              </div>
              <span className="absolute -bottom-0.5 -right-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-emerald-500 text-[0.55rem] text-white shadow-sm ring-2 ring-card">
                ✓
              </span>
            </div>

            {/* Profile Info */}
            <div className="min-w-0 flex-1">
              <h3 className="truncate font-display text-base font-extrabold text-foreground tracking-tight">
                {profile.name}
              </h3>
              <p className="truncate text-xs font-semibold text-muted-foreground/70">
                {profile.handle}
              </p>
            </div>

            {/* Instagram Icon */}
            <svg
              viewBox="0 0 24 24"
              className="h-5 w-5 shrink-0 text-muted-foreground/40 transition-colors duration-300 group-hover:text-pink-500"
              fill="currentColor"
              aria-hidden
            >
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
            </svg>
          </div>

          {/* Stats Bar */}
          <div className="mt-4 grid grid-cols-3 rounded-xl border border-border/50 bg-background/50 py-2.5 text-center shadow-inner">
            <div>
              <SmoothCounter value={currentPosts} />
              <p className="text-[0.58rem] font-bold uppercase tracking-wider text-muted-foreground/70">
                Posts
              </p>
            </div>
            <div className="border-x border-border/40">
              <SmoothCounter value={currentFollowers} isFollower />
              <p className="text-[0.58rem] font-bold uppercase tracking-wider text-muted-foreground/70">
                Followers
              </p>
            </div>
            <div>
              <span className="font-display text-sm font-black text-foreground">
                {profile.following}
              </span>
              <p className="text-[0.58rem] font-bold uppercase tracking-wider text-muted-foreground/70">
                Following
              </p>
            </div>
          </div>

          {/* Bio Description */}
          <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
            {profile.bio}
          </p>

          {/* Single Showcase Post Image (Single image display just like DP) */}
          <div className="mt-4 overflow-hidden rounded-2xl border border-border/50 relative aspect-[4/3] group/post shadow-md">
            <img
              src={profile.mainPostImage}
              alt={profile.name}
              loading="lazy"
              className="h-full w-full object-cover group-hover/post:scale-105 transition-transform duration-700"
              style={{ objectPosition: profile.mainPostOffset }}
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent z-[1]" />

            {/* Tag & Badge */}
            <div className="absolute top-3 left-3 right-3 flex items-center justify-between z-10">
              <span className="rounded-md bg-black/60 px-2.5 py-1 text-[0.6rem] font-bold uppercase tracking-wider text-white backdrop-blur-md border border-white/20">
                {profile.mainPostTag}
              </span>
              <span className="text-[0.6rem] font-bold text-white/90 backdrop-blur-md bg-white/20 px-2.5 py-0.5 rounded-full border border-white/20">
                Featured Content
              </span>
            </div>

            {/* Title Caption */}
            <div className="absolute bottom-3 left-3 right-3 z-10">
              <p className="text-xs font-black leading-snug text-white drop-shadow-md tracking-tight">
                {profile.mainPostTitle}
              </p>
            </div>
          </div>
        </div>

        {/* Card Footer */}
        <div className="mt-4 border-t border-border/40 pt-2.5 text-center text-[0.62rem] font-semibold text-muted-foreground/60">
          PEARLCON DIGITAL SOCIAL SHOWCASE
        </div>
      </div>
    </Reveal>
  );
}

/* ── Main SocialPresence Component ────────────────────────────────────────── */

export function SocialPresence() {
  const [statsMap, setStatsMap] = useState<Record<string, { posts: number; followers: number }>>(() => {
    const initial: Record<string, { posts: number; followers: number }> = {};
    PROFILES.forEach((p) => {
      initial[p.id] = { posts: p.basePosts, followers: p.baseFollowers };
    });
    return initial;
  });

  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    let isTabActive = true;

    const handleVisibilityChange = () => {
      isTabActive = document.visibilityState === "visible";
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    // 10-second interval for social profile activity counters
    const interval = setInterval(() => {
      if (!isTabActive) return;

      setStatsMap((prev) => {
        const next = { ...prev };
        PROFILES.forEach((p) => {
          // Posts increase by random 2 - 5 every 10 seconds
          const postIncrement = Math.floor(Math.random() * 4) + 2;
          // Followers increase by random 2000 - 5000 every 10 seconds
          const followerIncrement = Math.floor(Math.random() * 3001) + 2000;

          const current = next[p.id] ?? { posts: p.basePosts, followers: p.baseFollowers };
          next[p.id] = {
            posts: current.posts + postIncrement,
            followers: current.followers + followerIncrement,
          };
        });
        return next;
      });
    }, 10000);

    return () => {
      clearInterval(interval);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  return (
    <Section id="social">
      <div ref={sectionRef as never}>
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <Reveal>
              <SectionLabel>Social Media We Manage</SectionLabel>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="mt-7 max-w-3xl display-xl text-[clamp(2.1rem,5.2vw,4.2rem)]">
                Pages we run, day after day.
              </h2>
            </Reveal>
            <Reveal delay={140}>
              <p className="mt-5 max-w-lg text-sm leading-relaxed text-muted-foreground">
                We design and manage social media profiles across public service, healthcare, business,
                and civic sectors. Explore four category concepts demonstrating active page management.
              </p>
            </Reveal>
          </div>
        </div>

        {/* Profile Grid (4 Concepts) */}
        <ul className="mt-14 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {PROFILES.map((profile, i) => (
            <ProfileShowcaseCard
              key={profile.id}
              profile={profile}
              currentPosts={statsMap[profile.id]?.posts ?? profile.basePosts}
              currentFollowers={statsMap[profile.id]?.followers ?? profile.baseFollowers}
              delay={i * 90}
            />
          ))}
        </ul>
      </div>
    </Section>
  );
}