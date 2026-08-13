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

/* ── Social Profile Demo Types ────────────────────────────────────────────── */

export type DemoProfileData = {
  id: string;
  name: string;
  handle: string;
  category: string;
  badge: string;
  badgeColor: string;
  avatarBg: string;
  avatarSymbol: JSX.Element;
  bio: string;
  basePosts: number;
  baseFollowers: number;
  following: number;
  posts: Array<{
    title: string;
    gradient: string;
    tag: string;
  }>;
};

const DEMO_PROFILES: DemoProfileData[] = [
  {
    id: "profile-political",
    name: "Aarav Sharma",
    handle: "@aaravsharma.official",
    category: "Political Leader Concept",
    badge: "DEMO PROFILE",
    badgeColor: "bg-amber-500/15 text-amber-600 dark:text-amber-400 border-amber-500/30",
    avatarBg: "from-amber-500 via-rose-500 to-purple-600",
    avatarSymbol: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-5 w-5 text-white">
        <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3z" />
        <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
        <line x1="12" y1="19" x2="12" y2="22" />
      </svg>
    ),
    bio: "Public service, community initiatives, youth empowerment & development campaigns.",
    basePosts: 124,
    baseFollowers: 42300,
    following: 350,
    posts: [
      { title: "Youth Conclave 2026", gradient: "from-amber-600 to-rose-700", tag: "RALLY" },
      { title: "Rural Education Drive", gradient: "from-orange-500 to-amber-700", tag: "POLICY" },
      { title: "Clean Water Mission", gradient: "from-blue-600 to-indigo-700", tag: "CIVIC" },
      { title: "Townhall Press Address", gradient: "from-purple-600 to-pink-600", tag: "PRESS" },
      { title: "Infrastructure Blueprint", gradient: "from-rose-600 to-red-800", tag: "DEV" },
      { title: "Festival Greetings", gradient: "from-emerald-600 to-teal-700", tag: "COMMUNITY" },
    ],
  },
  {
    id: "profile-doctor",
    name: "Dr. Ananya Mehta",
    handle: "@drananyamehta.md",
    category: "Doctor Concept",
    badge: "DEMO PROFILE",
    badgeColor: "bg-teal-500/15 text-teal-600 dark:text-teal-400 border-teal-500/30",
    avatarBg: "from-teal-400 via-cyan-500 to-blue-600",
    avatarSymbol: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-5 w-5 text-white">
        <path d="M12 2v20M2 12h20" />
      </svg>
    ),
    bio: "Preventive cardiology, medical awareness, health education & patient care.",
    basePosts: 88,
    baseFollowers: 28600,
    following: 190,
    posts: [
      { title: "Heart Health Check Guide", gradient: "from-cyan-600 to-blue-700", tag: "WELLNESS" },
      { title: "Daily Nutrition Habits", gradient: "from-emerald-500 to-teal-600", tag: "HEALTH" },
      { title: "OPD Consultation Launch", gradient: "from-teal-600 to-indigo-600", tag: "CLINIC" },
      { title: "Medical Q&A Live", gradient: "from-blue-500 to-purple-600", tag: "Q&A" },
      { title: "Stress & Sleep Science", gradient: "from-sky-500 to-indigo-700", tag: "CARE" },
      { title: "Community Health Camp", gradient: "from-rose-500 to-pink-600", tag: "CAMP" },
    ],
  },
  {
    id: "profile-businessman",
    name: "Rohan Malhotra",
    handle: "@rohanmalhotra.venture",
    category: "Business Executive Concept",
    badge: "DEMO PROFILE",
    badgeColor: "bg-purple-500/15 text-purple-600 dark:text-purple-400 border-purple-500/30",
    avatarBg: "from-violet-600 via-purple-600 to-indigo-800",
    avatarSymbol: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-5 w-5 text-white">
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      </svg>
    ),
    bio: "Venture growth, enterprise AI, strategic leadership & corporate expansion.",
    basePosts: 156,
    baseFollowers: 64100,
    following: 410,
    posts: [
      { title: "Global Tech Keynote", gradient: "from-slate-700 to-slate-900", tag: "KEYNOTE" },
      { title: "Series-B Milestone", gradient: "from-amber-600 to-orange-700", tag: "VENTURE" },
      { title: "AI Enterprise Strategy", gradient: "from-indigo-600 to-purple-800", tag: "STRATEGY" },
      { title: "CEO Fireside Chat", gradient: "from-blue-600 to-cyan-700", tag: "FIRESIDE" },
      { title: "Leadership Podcast", gradient: "from-violet-600 to-fuchsia-700", tag: "PODCAST" },
      { title: "Annual Innovation Forum", gradient: "from-yellow-600 to-amber-700", tag: "AWARDS" },
    ],
  },
  {
    id: "profile-govt",
    name: "Jaipur Civic Development",
    handle: "@jaipur.civic.dept",
    category: "Government Body Concept",
    badge: "CONCEPT / DEMO",
    badgeColor: "bg-blue-500/15 text-blue-600 dark:text-blue-400 border-blue-500/30",
    avatarBg: "from-blue-600 via-indigo-600 to-slate-900",
    avatarSymbol: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-5 w-5 text-white">
        <polygon points="12 2 2 7 12 12 22 7 12 2" />
        <polyline points="2 17 12 22 22 17" />
        <polyline points="2 12 12 17 22 12" />
      </svg>
    ),
    bio: "Civic infrastructure, smart traffic, green urban projects & citizen updates.",
    basePosts: 210,
    baseFollowers: 89500,
    following: 45,
    posts: [
      { title: "Smart Traffic Corridor", gradient: "from-blue-700 to-indigo-900", tag: "TRAFFIC" },
      { title: "Solar Energy Grid", gradient: "from-emerald-600 to-green-700", tag: "ENERGY" },
      { title: "City Sanitation Drive", gradient: "from-teal-600 to-cyan-700", tag: "CLEAN" },
      { title: "Citizen Portal Launch", gradient: "from-indigo-600 to-blue-700", tag: "HELPLINE" },
      { title: "Public Park Renovation", gradient: "from-emerald-500 to-teal-700", tag: "PARKS" },
      { title: "Heritage Walk Project", gradient: "from-amber-700 to-yellow-800", tag: "HERITAGE" },
    ],
  },
];

/* ── Number Formatting & Animation Helper ────────────────────────────────── */

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
    const duration = 1200; // 1.2s smooth interpolation
    const startTimestamp = performance.now();

    let animationFrameId: number;

    const step = (now: number) => {
      const elapsed = now - startTimestamp;
      const progress = Math.min(elapsed / duration, 1);
      // Ease-out expo curve
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
      className={`inline-block font-display text-sm font-extrabold transition-all duration-500 ${
        isBumped
          ? "scale-110 text-emerald-500 dark:text-emerald-400 drop-shadow-[0_0_8px_rgba(16,185,129,0.5)]"
          : "text-foreground"
      }`}
    >
      {isFollower ? formatFollowers(displayVal) : displayVal.toLocaleString()}
    </span>
  );
}

/* ── Demo Profile Card Component ─────────────────────────────────────────── */

function DemoProfileCard({
  profile,
  currentPosts,
  currentFollowers,
  delay,
}: {
  profile: DemoProfileData;
  currentPosts: number;
  currentFollowers: number;
  delay: number;
}) {
  return (
    <Reveal as="li" delay={delay}>
      <div className="glass group relative flex flex-col justify-between overflow-hidden rounded-[1.6rem] p-5 transition-all duration-700 [transition-timing-function:var(--ease-out-expo)] hover:-translate-y-1.5 hover:shadow-[var(--shadow-soft)]">
        {/* Shimmer sweep on hover */}
        <div className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/[0.08] to-transparent transition-transform duration-1000 group-hover:translate-x-full" />

        {/* Card Header & Badge */}
        <div>
          <div className="flex items-center justify-between gap-2 border-b border-border/40 pb-3">
            <span
              className={`rounded-full border px-2.5 py-0.5 text-[0.6rem] font-bold uppercase tracking-widest ${profile.badgeColor}`}
            >
              {profile.badge}
            </span>
            <span className="text-[0.62rem] font-semibold tracking-wider text-muted-foreground/60 uppercase">
              {profile.category}
            </span>
          </div>

          {/* Profile Header */}
          <div className="mt-4 flex items-center gap-3">
            {/* Avatar with Gradient Ring */}
            <div className={`relative h-12 w-12 shrink-0 rounded-full bg-gradient-to-br ${profile.avatarBg} p-[2.5px] shadow-md transition-transform duration-500 group-hover:scale-105`}>
              <div className="flex h-full w-full items-center justify-center rounded-full bg-card shadow-inner">
                {profile.avatarSymbol}
              </div>
              <span className="absolute -bottom-0.5 -right-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-emerald-500 text-[0.55rem] text-white shadow-sm ring-2 ring-card">
                ✓
              </span>
            </div>

            {/* Profile Info */}
            <div className="min-w-0 flex-1">
              <h3 className="truncate font-display text-sm font-bold text-foreground">
                {profile.name}
              </h3>
              <p className="truncate text-xs font-medium text-muted-foreground/70">
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
          <div className="mt-4 grid grid-cols-3 rounded-xl border border-border/50 bg-background/50 py-2.5 text-center">
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
              <span className="font-display text-sm font-extrabold text-foreground">
                {profile.following}
              </span>
              <p className="text-[0.58rem] font-bold uppercase tracking-wider text-muted-foreground/70">
                Following
              </p>
            </div>
          </div>

          {/* Bio text */}
          <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
            {profile.bio}
          </p>

          {/* Post Grid (6 tiles) */}
          <div className="mt-4 grid grid-cols-3 gap-1.5">
            {profile.posts.map((post, idx) => (
              <div
                key={idx}
                className="group/tile relative aspect-square overflow-hidden rounded-lg border border-border/30 bg-muted/40 transition-transform duration-300 hover:scale-[1.04]"
              >
                {/* Visual Gradient Background */}
                <div
                  className={`h-full w-full bg-gradient-to-br ${post.gradient} flex flex-col justify-between p-1.5 transition-transform duration-500 group-hover/tile:scale-110`}
                >
                  <span className="self-start rounded bg-black/40 px-1 py-0.5 text-[0.48rem] font-extrabold tracking-wider text-white backdrop-blur-sm">
                    {post.tag}
                  </span>
                  <p className="line-clamp-2 text-[0.52rem] font-bold leading-tight text-white/90 drop-shadow-sm">
                    {post.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Demo Indicator Footer */}
        <div className="mt-4 flex items-center justify-between border-t border-border/40 pt-2.5 text-[0.62rem] text-muted-foreground/70">
          <span className="inline-flex items-center gap-1">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
            Simulated Growth
          </span>
          <span className="font-medium">Portfolio Concept</span>
        </div>
      </div>
    </Reveal>
  );
}

/* ── Main SocialPresence Component ────────────────────────────────────────── */

export function SocialPresence() {
  const [statsMap, setStatsMap] = useState<Record<string, { posts: number; followers: number }>>(() => {
    const initial: Record<string, { posts: number; followers: number }> = {};
    DEMO_PROFILES.forEach((p) => {
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

    // 10-second interval for simulated social profile activity
    const interval = setInterval(() => {
      if (!isTabActive) return;

      setStatsMap((prev) => {
        const next = { ...prev };
        DEMO_PROFILES.forEach((p) => {
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
                and civic development. Explore four sample profile concepts demonstrating active management.
              </p>
            </Reveal>
          </div>

          {/* Live Activity Demo Banner */}
          <Reveal delay={180}>
            <div className="glass flex items-center gap-3 rounded-2xl border border-emerald-500/30 px-4 py-2.5 shadow-sm">
              <span className="relative flex h-3 w-3 shrink-0">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-3 w-3 rounded-full bg-emerald-500" />
              </span>
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
                  Live Simulated Growth
                </p>
                <p className="text-[0.68rem] text-muted-foreground">
                  Updates every 10s • Portfolio Demonstration
                </p>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Profile Grid (4 Concepts) */}
        <ul className="mt-14 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {DEMO_PROFILES.map((profile, i) => (
            <DemoProfileCard
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