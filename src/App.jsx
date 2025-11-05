import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Sparkles,
  Rocket,
  Bot,
  ShoppingBag,
  Star,
  MapPin,
  Camera,
  Palette,
  Megaphone,
  MessageCircle,
  PhoneCall,
  ChevronRight,
  Users,
  GaugeCircle,
  ShieldCheck,
  Mail,
  CalendarCheck,
  Cpu,
  BarChart3,
  Layers,
  Globe,
  BookOpen,
  Handshake,
} from "lucide-react";

// Landing page for Sudarshan AI Labs
// TailwindCSS + Framer Motion

const floatIn = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const stagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const AURORA_FEATURES = [
  {
    icon: Camera,
    title: "Reel-ready storytelling",
    desc: "Shots, scripts & trending audio combos lined up for Lucknow reels.",
    tone: "from-[#FFB347] to-[#FF2D92]",
  },
  {
    icon: Palette,
    title: "Nawabi design system",
    desc: "Gradient palettes inspired by riverfront sunsets + Chikan textures.",
    tone: "from-[#7F00FF] to-[#00FFFF]",
  },
  {
    icon: Megaphone,
    title: "Campaign control tower",
    desc: "Realtime AI prompts to balance Insta, WhatsApp & on-ground buzz.",
    tone: "from-[#00F1A0] to-[#00A3FF]",
  },
];

const AURORA_RITUALS = [
  {
    step: "Sense",
    title: "Mohalla radar on",
    desc: "40+ community taps decode jokes, jargons & hyperlocal seasons.",
    stat: "40+ communities",
  },
  {
    step: "Script",
    title: "Campaign storyboard",
    desc: "AI co-writes hooks, shotlists & CTA flows for Insta + street teams.",
    stat: "6x faster approvals",
  },
  {
    step: "Spark",
    title: "Launch & loop",
    desc: "Daily alerts on best-performing memes, offers & WhatsApp leads.",
    stat: "24h learning cycles",
  },
];

const AURORA_PODS = [
  {
    tag: "Hazratganj Fashion",
    metric: "+212% walk-ins",
    desc: "Window-to-WhatsApp journeys with AI stylists + geo-fenced reels.",
    glow: "from-[#FFB347] via-[#FF2D92] to-[#7B2FF7]",
  },
  {
    tag: "Fun Republic",
    metric: "5x combo ROI",
    desc: "Movie-night snack drops coordinated by meme calendars & QR hunts.",
    glow: "from-[#00F1A0] via-[#00FFFF] to-[#0061FF]",
  },
  {
    tag: "Creator Guild",
    metric: "30 collabs / 45d",
    desc: "Podcast booths + reel templates powering multi-brand creator swaps.",
    glow: "from-[#FF8C00] via-[#FF2D92] to-[#7B2FF7]",
  },
];

const DAYLIGHT_PACKAGES = [
  {
    name: "Starter HQ",
    price: "₹89 Launchpad",
    description: "Perfect for MSMEs testing AI-first storefronts.",
    features: [
      "1-page microsite + WhatsApp ordering",
      "Social bios + highlight covers refresh",
      "1 growth experiment idea with scripts",
    ],
  },
  {
    name: "Growth Retainer",
    price: "₹12,999 / quarter",
    description: "Strategy + content ops + lead nurturing in Hinglish.",
    features: [
      "Full funnel dashboard + AI nudges",
      "Reels, carousels & ad creatives each sprint",
      "Monthly Lucknow pop-up activations",
    ],
  },
  {
    name: "Investor Mode",
    price: "Custom roadmap",
    description: "For funded teams scaling across UP & NCR.",
    features: [
      "Pitch narrative + PR + founder brand kit",
      "Predictive media spend optimizer",
      "CX automation with Hindi voice bots",
    ],
  },
];

const DAYLIGHT_METRICS = [
  {
    icon: Users,
    label: "MSME & creator partners",
    value: "120+",
  },
  {
    icon: GaugeCircle,
    label: "Avg. campaign uplift",
    value: "3.2x",
  },
  {
    icon: ShieldCheck,
    label: "Compliance ready",
    value: "GST • Udyam • DPDP",
  },
];

const DAYLIGHT_FAQ = [
  {
    question: "What do I get in the ₹89 launchpad?",
    answer:
      "Brand questionnaire, AI-styled microsite, WhatsApp CTA setup and a ready-to-run promo idea within 72 hours.",
  },
  {
    question: "Can you work in Hindi + Hinglish?",
    answer:
      "Bilkul. Scripts, captions, bots and IVRs are tuned for regional audiences so the brand sounds like your gali.",
  },
  {
    question: "Do you integrate existing tools?",
    answer:
      "Yes, we plug into Shopify, Zoho, Razorpay, Google Workspace or even your favourite spreadsheets.",
  },
];

const GLOBAL_RESOURCES = [
  {
    icon: BookOpen,
    title: "Lucknow 2025 Growth Playbook",
    description:
      "City-wise campaign moments, desi buyer personas and AI prompts to launch in 72 hours.",
    cta: "Download outline",
    href: "#contact",
    accent: "from-[#00F1A0] via-[#00FFFF] to-[#7B2FF7]",
  },
  {
    icon: Globe,
    title: "AI Commerce Stack Tour",
    description:
      "Live demo of microsites, WhatsApp flows and CRM automations stitched for MSMEs.",
    cta: "Watch preview",
    href: "#contact",
    accent: "from-[#FFB347] via-[#FF2D92] to-[#7F00FF]",
  },
  {
    icon: Handshake,
    title: "Sudarshan Demo Nights",
    description:
      "Monthly meetups with creators, investors and founders testing ideas with us.",
    cta: "Book a seat",
    href: "#contact",
    accent: "from-[#0EA5E9] via-[#22D3EE] to-[#A855F7]",
  },
];

const TOOL_STACK = {
  neo: [
    {
      icon: Cpu,
      title: "Realtime Meme Radar",
      detail: "AI listens to trending sounds, keywords and mohalla jokes to plan daily reels.",
      pill: "Trend Sense",
    },
    {
      icon: MessageCircle,
      title: "Lead Loop Automations",
      detail: "WhatsApp, Instagram DM & email follow-ups synced with Hinglish-ready scripts.",
      pill: "24x7 Assist",
    },
    {
      icon: BarChart3,
      title: "Omnichannel Dashboard",
      detail: "Single cockpit with ad spend, footfall alerts and conversion nudges in one view.",
      pill: "Live KPIs",
    },
  ],
  aurora: [
    {
      icon: Palette,
      title: "Cinematic Storyboards",
      detail: "Frame-by-frame shoot guides with lighting, props and hooklines for every reel.",
      pill: "Creator Pods",
    },
    {
      icon: Camera,
      title: "Riverfront Content Kits",
      detail: "Gear checklists, moodboards and caption cues inspired by Lucknow&apos;s hotspots.",
      pill: "Field Ready",
    },
    {
      icon: Megaphone,
      title: "Amplify + Track",
      detail: "Media mix planner balancing OOH, Insta ads and micro-influencer swaps in real time.",
      pill: "Campaign IQ",
    },
  ],
  daylight: [
    {
      icon: Layers,
      title: "Growth OS Templates",
      detail: "Investor decks, OKR sheets and automation SOPs ready for fast-moving teams.",
      pill: "Docs + Ops",
    },
    {
      icon: ShieldCheck,
      title: "Compliance Toolkit",
      detail: "DPDP-ready capture forms, GST invoicing flows and audit-friendly logs.",
      pill: "Peace of Mind",
    },
    {
      icon: Sparkles,
      title: "AI Content Copilots",
      detail: "Generate scripts, ads and nurture emails in minutes with Hindi + English variants.",
      pill: "Ship Faster",
    },
  ],
};

const MOBILE_PREVIEWS = {
  neo: {
    heading: "Aurora HQ mobile cockpit",
    subheading: "Swipe-ready flows so your team can act on insights between chai breaks.",
    metric: "+37% mobile-qualified leads",
    gradient: "from-[#00F1A0] via-[#00FFFF] to-[#7B2FF7]",
    highlights: [
      "Instant CTA buttons for WhatsApp, calls and Maps",
      "Story prompts triggered by trending sounds",
      "Voice notes summarising campaign health daily",
    ],
  },
  aurora: {
    heading: "Riverfront Canvas on mobile",
    subheading: "Tap through cinematic storyboards, shotlists and collab checklists on the go.",
    metric: "+52% creator collab speed",
    gradient: "from-[#FFB347] via-[#FF2D92] to-[#7F00FF]",
    highlights: [
      "AR preview of reel angles and lighting cues",
      "Drag-and-drop caption bank with Hinglish hashtags",
      "Collab approvals with swipe-to-sign briefs",
    ],
  },
  daylight: {
    heading: "Daylight investor dashboards",
    subheading: "Mobile analytics with board-ready summaries and compliance alerts.",
    metric: "15 min weekly check-ins",
    gradient: "from-[#0EA5E9] via-[#22D3EE] to-[#A855F7]",
    highlights: [
      "North-star KPIs vs. targets updated live",
      "Investor-ready notes auto drafted after reviews",
      "WhatsApp digests with next best experiments",
    ],
  },
};

const CONTACT_SHORTCUTS = [
  {
    label: "WhatsApp Growth Desk",
    detail: "+91 98765 43210",
    href: "https://wa.me/919876543210?text=Hi%20Sudarshan%20AI%20Labs%2C%20I%20want%20to%20scale%20my%20brand!",
    icon: MessageCircle,
  },
  {
    label: "Email the founders",
    detail: "hello@sudarshanailabs.com",
    href: "mailto:hello@sudarshanailabs.com",
    icon: Mail,
  },
  {
    label: "Book a strategy call",
    detail: "cal.com/sudarshan/30",
    href: "https://cal.com/sudarshan/30",
    icon: CalendarCheck,
  },
];

const STACK_COPY = {
  neo: {
    eyebrow: "AI Control Stack",
    title: "Operate like a Lucknow growth command centre.",
    subtitle:
      "Dashboards, automations and prompts stitched for MSMEs who want the speed of startups without heavy overheads.",
  },
  aurora: {
    eyebrow: "Creator Tech + Ops",
    title: "Everything you need to shoot, ship and amplify cinematic stories.",
    subtitle:
      "A backstage pass of tools, pods and analytics to turn mall launches and café gigs into binge-worthy sagas.",
  },
  daylight: {
    eyebrow: "Founder Operating System",
    title: "Clarity-first templates for board-ready growth teams.",
    subtitle:
      "Frameworks, compliance kits and AI copilots so you can scale across cities with confidence.",
  },
};

const VARIANT_META = {
  neo: {
    label: "Aurora HQ",
    tagline: "Neon growth cockpit for MSMEs",
    accent: "from-[#00F1A0] via-[#00FFFF] to-[#7B2FF7]",
    component: VariantNeo,
  },
  aurora: {
    label: "Riverfront Canvas",
    tagline: "Storytelling meets shor",
    accent: "from-[#FFB347] via-[#FF2D92] to-[#7F00FF]",
    component: VariantAurora,
  },
  daylight: {
    label: "Nawabi Daylight",
    tagline: "Clean, premium & investor-ready",
    accent: "from-[#0EA5E9] via-[#22D3EE] to-[#A855F7]",
    component: VariantDaylight,
  },
};

export default function SudarshanLanding() {
  const [activeVariant, setActiveVariant] = useState("neo");
  const ActiveVariant = VARIANT_META[activeVariant].component;

  return (
    <ActiveVariant
      activeVariant={activeVariant}
      onSwitch={setActiveVariant}
      variants={VARIANT_META}
    />
  );
}

function VariantNeo({ activeVariant, onSwitch, variants }) {
  return (
    <div className="min-h-screen bg-[#0B0F19] text-white font-['Montserrat',system-ui]">
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 -left-20 h-80 w-80 rounded-full bg-gradient-to-br from-[#7F00FF]/50 via-[#00FFFF]/30 to-transparent blur-3xl" />
        <div className="absolute -bottom-40 -right-10 h-96 w-96 rounded-full bg-gradient-to-br from-[#00F1A0]/60 via-[#0061FF]/40 to-transparent blur-3xl" />
      </div>

      <VariantSwitcher
        activeVariant={activeVariant}
        onSwitch={onSwitch}
        variants={variants}
      />

      <header className="sticky top-0 z-30 border-b border-white/5 bg-black/20 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:px-6">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-[#7F00FF] to-[#00FFFF] shadow-[0_0_25px_rgba(127,0,255,0.7)]">
              <Bot className="h-6 w-6" />
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-emerald-300/80">Sudarshan AI Labs</p>
              <p className="text-sm text-white/70">Lucknow • MSME Growth Engine</p>
            </div>
          </div>

          <nav className="hidden items-center gap-6 text-sm text-white/70 md:flex">
            <a href="#about" className="transition hover:text-white">
              About
            </a>
            <a href="#services" className="transition hover:text-white">
              Services
            </a>
            <a href="#campaigns" className="transition hover:text-white">
              Campaigns
            </a>
            <a href="#testimonials" className="transition hover:text-white">
              Love from Lucknow
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <button className="hidden rounded-full border border-white/15 px-4 py-1.5 text-xs font-medium text-white/80 backdrop-blur transition hover:border-emerald-400/70 hover:text-emerald-200 md:inline-flex">
              हिंदी मोड
            </button>
            <a
              href="#cta"
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#00F1A0] to-[#00FFFF] px-4 py-2 text-xs font-semibold text-black shadow-[0_0_25px_rgba(0,241,160,0.7)] transition hover:-translate-y-0.5 hover:shadow-[0_0_35px_rgba(0,241,160,0.9)]"
            >
              <Rocket className="h-4 w-4" />
              <span>Launch my ₹89 Portal</span>
            </a>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4 pb-20 pt-10 md:px-6 md:pt-16">
        <section id="hero" className="grid gap-10 md:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)] md:items-center">
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="visible"
            className="space-y-6"
          >
            <motion.div
              variants={floatIn}
              className="inline-flex items-center gap-2 rounded-full border border-emerald-400/40 bg-black/30 px-3 py-1 text-[11px] uppercase tracking-[0.26em] text-emerald-200/90 shadow-[0_0_20px_rgba(34,197,94,0.5)]"
            >
              <Sparkles className="h-3 w-3" />
              <span>AI Enabled Growth • Lucknow Launchpad</span>
            </motion.div>

            <motion.h1
              variants={floatIn}
              className="font-['Orbitron',system-ui] text-3xl leading-tight sm:text-4xl md:text-5xl"
            >
              <span className="block text-white">India&apos;s Chillest</span>
              <span className="mt-1 inline bg-gradient-to-r from-[#00F1A0] via-[#00FFFF] to-[#7B2FF7] bg-clip-text text-transparent">
                AI Marketing HQ from Lucknow
              </span>
            </motion.h1>

            <motion.p
              variants={floatIn}
              className="max-w-xl text-sm leading-relaxed text-white/70 md:text-base"
            >
              Sudarshan AI Labs turns chai-table ideas into full-blown brand storms. From Hazratganj boutiques to Gomti Nagar cafes, we build AI-powered digital shops, social media campaigns and content engines that work 24x7—so aap chill karo, campaigns run karo.
            </motion.p>

            <motion.div
              variants={floatIn}
              className="grid gap-4 text-xs md:grid-cols-[auto,1fr] md:text-sm"
            >
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href="#cta"
                  className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#7F00FF] via-[#FF8C00] to-[#00FFFF] px-5 py-2 text-sm font-semibold shadow-[0_0_30px_rgba(127,0,255,0.8)] transition hover:-translate-y-0.5 hover:shadow-[0_0_40px_rgba(127,0,255,1)]"
                >
                  <Rocket className="h-4 w-4" />
                  <span>Start at just ₹89</span>
                </a>
                <button className="inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-2 text-xs font-medium text-white/80 transition hover:border-emerald-400/70 hover:text-emerald-200">
                  <Sparkles className="h-4 w-4" />
                  <span>View 2025 Growth Playbook</span>
                </button>
              </div>

              <dl className="mt-1 grid grid-cols-3 gap-3 text-[11px] text-white/70 md:text-xs">
                <div>
                  <dt className="text-[10px] uppercase tracking-[0.18em] text-white/40">For</dt>
                  <dd>MSMEs • Creators • Startups</dd>
                </div>
                <div>
                  <dt className="text-[10px] uppercase tracking-[0.18em] text-white/40">Location</dt>
                  <dd className="flex items-center gap-1">
                    <MapPin className="h-3 w-3 text-emerald-300" />
                    Lucknow, UP
                  </dd>
                </div>
                <div>
                  <dt className="text-[10px] uppercase tracking-[0.18em] text-white/40">USP</dt>
                  <dd>AI + Desi Marketing + Meme Brain</dd>
                </div>
              </dl>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative rounded-[32px] bg-gradient-to-br from-[#120022] via-[#001F3F] to-[#0B0F19] p-[2px] shadow-[0_0_30px_rgba(0,0,0,0.7)]">
              <div className="rounded-[30px] bg-[#050814]/90 p-6">
                <div className="flex items-center justify-between text-xs text-white/60">
                  <span className="inline-flex items-center gap-2 text-[11px]">
                    <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.9)]" />
                    Live campaign monitor
                  </span>
                  <span className="rounded-full bg-white/5 px-3 py-1 text-[10px] uppercase tracking-[0.2em]">
                    Hazratganj • Gomti Nagar • Aliganj
                  </span>
                </div>

                <div className="mt-6 flex items-center justify-between gap-3">
                  <div className="space-y-3 text-xs">
                    <p className="text-[11px] uppercase tracking-[0.18em] text-white/40">2025 Growth Radar</p>
                    <p className="text-sm text-white/80">
                      AI watches your Instagram, WhatsApp & Google profile and nudges you with next best campaigns.
                    </p>
                    <ul className="mt-3 space-y-1 text-[11px] text-emerald-200/90">
                      <li>• Auto content ideas for reels & static posts</li>
                      <li>• MSME friendly pricing, no agency drama</li>
                      <li>• Hindi + Hinglish copy tuned to your mohalla</li>
                    </ul>
                  </div>

                  <div className="relative">
                    <div className="absolute -inset-3 rounded-[26px] bg-gradient-to-br from-[#00F1A0]/40 via-[#00FFFF]/30 to-transparent blur-2xl" />
                    <div className="relative flex h-40 w-32 flex-col items-center justify-center rounded-[24px] border border-white/10 bg-gradient-to-b from-[#001F3F] via-[#050814] to-[#120022]">
                      <Bot className="h-10 w-10 text-emerald-300" />
                      <p className="mt-3 text-center text-[11px] text-white/70">Sudarshan AI Buddy</p>
                      <p className="mt-1 text-center text-[10px] text-emerald-200/90">“Bhai, kal se reel daily. Hashtags ready.”</p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 grid grid-cols-3 gap-3 text-[11px]">
                  <StatPill label="Avg. Engagement" value="+173%" tone="emerald" />
                  <StatPill label="Ad Waste Reduced" value="-41%" tone="rose" />
                  <StatPill label="Campaigns Run" value="500+" tone="sky" />
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        <section id="about" className="mt-16 md:mt-24">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={stagger}
            className="grid gap-10 md:grid-cols-[1.3fr,1fr]"
          >
            <motion.div variants={floatIn}>
              <SectionLabel>Why Sudarshan AI Labs?</SectionLabel>
              <h2 className="mt-2 font-['Orbitron',system-ui] text-2xl text-white md:text-3xl">
                From kabab trails to killer funnels.
              </h2>
              <p className="mt-4 text-sm text-white/70 md:text-base">
                We&apos;re a Lucknow-born, AI-obsessed studio that mixes hardcore data with Bollywood-level drama. Whether you&apos;re a Kabab shop in Aminabad, a creator jamming at Chacoco Café, or a startup pitching at Invest UP, we design AI-first digital journeys that feel premium, not pricey.
              </p>
              <div className="mt-6 grid gap-4 text-sm md:grid-cols-3">
                <AboutChip
                  title="₹89 Launchpad"
                  desc="Get your AI-ready digital shop—no coding, bas chai pe baith ke brief do."
                />
                <AboutChip
                  title="Hindi + Hinglish"
                  desc="Campaigns tuned to your gali, not just global jargon."
                />
                <AboutChip
                  title="Creator-First"
                  desc="Reels, shorts, carousels and podcasts planned as full seasons."
                />
              </div>
            </motion.div>

            <motion.div
              variants={floatIn}
              className="relative rounded-3xl border border-white/10 bg-gradient-to-br from-[#120022]/90 via-[#001F3F]/70 to-[#0B0F19]/90 p-5 shadow-[0_0_30px_rgba(0,0,0,0.7)]"
            >
              <p className="text-[11px] uppercase tracking-[0.22em] text-emerald-200/80">Lucknow Scene Map</p>
              <ul className="mt-3 space-y-3 text-sm text-white/75">
                <li>• Hazratganj boutiques getting Insta storefronts + Google My Business glow-ups.</li>
                <li>• Fun Republic Mall brands running meme-first launch campaigns.</li>
                <li>• Kabab Trail food crawl turned into UGC contests & reel festivals.</li>
                <li>• Chacoco Café creators club using AI to schedule collabs & live pods.</li>
              </ul>
              <p className="mt-4 text-xs text-white/50">
                We plug AI into your existing jugaad ecosystem—no culture lost, sirf speed and scale added.
              </p>
            </motion.div>
          </motion.div>
        </section>

        <section id="services" className="mt-16 md:mt-24">
          <SectionHeader
            eyebrow="Best Digital Marketing Services in Lucknow"
            title="AI-first services for MSMEs, creators & startups"
            subtitle="Designed for small teams, big ambitions and tight budgets."
          />

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <ServiceCard
              gradient="from-[#7F00FF] via-[#FF8C00] to-[#00FFFF]"
              title="AI Social Media Studio"
              badge="Top pick"
              price="From ₹1,500/mo"
              points={[
                "Content calendar + captions tuned for Lucknow slang",
                "Auto ideas using ChatGPT & in-house AI tools",
                "Instagram, Facebook, LinkedIn & YouTube shorts",
              ]}
            />

            <ServiceCard
              gradient="from-[#00F1A0] via-[#00FFFF] to-[#0061FF]"
              title="Uni-Commerce Portal"
              badge="₹89 Launchpad"
              price="₹89 one-time"
              points={[
                "Digital shop design + WhatsApp ordering",
                "MSME + Startup India friendly onboarding",
                "Analytics for footfall, DMs & repeat buyers",
              ]}
            />

            <ServiceCard
              gradient="from-[#FF8C00] via-[#FF2D92] to-[#7B2FF7]"
              title="Campaign Strategy Pods"
              badge="For serious growth"
              price="Custom retainer"
              points={[
                "Full-funnel strategy: ads + content + CRM",
                "Quarterly sprints aligned with Invest UP goals",
                "Launch playbooks for new products & cafés",
              ]}
            />
          </div>
        </section>

        <section id="campaigns" className="mt-16 md:mt-24">
          <SectionHeader
            eyebrow="Campaign Highlights"
            title="When AI, memes & mohalla meet"
            subtitle="Real-world vibes, real metrics, real DMs from customers."
          />

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <CampaignCard
              tag="Hazratganj Retail"
              title="From quiet shop to weekend hotspot"
              metric="+212% walk-ins in 60 days"
              desc="Local fashion store + AI powered Insta + GMB + WhatsApp broadcast. Story-based reels + festival drops."
            />
            <CampaignCard
              tag="Fun Republic Mall"
              title="Movie-night combo blitz"
              metric="5x campaign ROI"
              desc="Snack brand collab with cinema halls. AI helped test 20+ ad creatives and keep only 3 killer combos."
            />
            <CampaignCard
              tag="Creator Collective"
              title="Chacoco Café content lab"
              metric="30+ collabs in 45 days"
              desc="Weekly AI-powered brainstorms, reel templates, and cross-shoutouts for local creators & micro-brands."
            />
          </div>
        </section>

        <ToolStack
          variant="neo"
          theme="dark"
          accent={variants[activeVariant].accent}
        />

        <MobileShowcase
          variant="neo"
          theme="dark"
          accent={variants[activeVariant].accent}
        />

        <section id="testimonials" className="mt-16 md:mt-24">
          <SectionHeader
            eyebrow="Testimonials"
            title="What Lucknow says about us"
            subtitle="Thoda emotion, thoda data, full paisa-vasool growth."
          />

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <TestimonialCard
              name="Aisha, Boutique Owner"
              area="Hazratganj"
              quote="Pehle sirf walk-ins. Ab WhatsApp orders, Ganj se bhi bahar. AI ne humko literally map pe daal diya."
            />
            <TestimonialCard
              name="Raghav, Café Founder"
              area="Gomti Nagar"
              quote="Unhone hamare café ko meme character bana diya. Reels dekh ke log specifically 'AI wali coffee' maangte hain."
            />
            <TestimonialCard
              name="Meera, Creator & Coach"
              area="Aliganj"
              quote="Calendar, hooks, captions, even brand pitch deck—sab AI se streamline. Ab finally content pe dhyaan hai, chaos pe nahi."
            />
          </div>
        </section>

        <ResourceStrip
          theme="dark"
          accent={variants[activeVariant].accent}
        />

        <section
          id="cta"
          className="mt-16 md:mt-24 rounded-[32px] border border-emerald-400/40 bg-gradient-to-r from-[#001F3F] via-[#050814] to-[#120022] p-[1px] shadow-[0_0_40px_rgba(0,241,160,0.4)]"
        >
          <div className="rounded-[30px] bg-black/70 px-6 py-8 md:px-10 md:py-10">
            <div className="flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-[11px] uppercase tracking-[0.25em] text-emerald-200/80">Ready for 2025 growth?</p>
                <h3 className="mt-2 font-['Orbitron',system-ui] text-2xl text-white md:text-3xl">
                  Launch your AI-powered digital HQ for just ₹89.
                </h3>
                <p className="mt-3 max-w-xl text-sm text-white/70">
                  Get a Sudarshan AI Portal, socials audit, and one plug-and-play campaign idea tuned to your gali, mall or mohalla. No jargon, sirf result-oriented dhandha.
                </p>
              </div>

              <div className="space-y-3 text-sm">
                <a
                  href="https://wa.me/919999999999?text=Hi%20Sudarshan%20AI%20Labs%2C%20I%20want%20the%20%E2%82%B989%20Lucknow%20Launchpad!"
                  className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#00F1A0] via-[#00FFFF] to-[#7F00FF] px-6 py-3 text-sm font-semibold text-black shadow-[0_0_40px_rgba(0,241,160,0.8)] transition hover:-translate-y-1 hover:shadow-[0_0_50px_rgba(0,241,160,1)]"
                >
                  <Rocket className="h-4 w-4" />
                  <span>DM "Lucknow Launchpad" on WhatsApp</span>
                </a>
                <p className="text-xs text-white/60">
                  Bonus: Free Udyam + Startup India friendly guidance for MSMEs.
                </p>
              </div>
            </div>
          </div>
        </section>

        <VariantPreviewRail
          activeVariant={activeVariant}
          onSwitch={onSwitch}
          variants={variants}
          theme="dark"
        />

        <ContactSection
          theme="dark"
          accent={variants[activeVariant].accent}
        />
      </main>

      <footer className="border-t border-white/10 bg-black/40 py-8 text-xs text-white/60">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 md:flex-row md:items-center md:justify-between md:px-6">
          <div>
            <p className="font-semibold text-white/80">Sudarshan AI Labs Pvt. Ltd.</p>
            <p className="mt-1 text-[11px] text-white/50">
              Proudly building from Lucknow for Bharat&apos;s MSMEs, creators & startups.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <p>Made with 🟢 AI, ☕ chai & Lucknow vibes.</p>
            <div className="flex gap-3">
              <a href="#" className="hover:text-emerald-300">
                Instagram
              </a>
              <a href="#" className="hover:text-emerald-300">
                LinkedIn
              </a>
              <a href="#" className="hover:text-emerald-300">
                X (Twitter)
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

function VariantAurora({ activeVariant, onSwitch, variants }) {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#040511] text-white font-['Manrope',system-ui]">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-[-20%] h-[480px] w-[480px] -translate-x-1/2 rounded-full bg-gradient-to-br from-[#FFB347]/30 via-[#FF2D92]/25 to-transparent blur-3xl" />
        <div className="absolute right-[-10%] bottom-[-20%] h-[420px] w-[420px] rounded-full bg-gradient-to-br from-[#00FFFF]/30 via-[#0061FF]/25 to-transparent blur-3xl" />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20 mix-blend-soft-light" />
      </div>

      <VariantSwitcher
        activeVariant={activeVariant}
        onSwitch={onSwitch}
        variants={variants}
      />

      <header className="relative mx-auto flex max-w-6xl flex-col gap-10 px-5 pb-16 pt-16 lg:flex-row lg:items-start lg:pt-24">
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="visible"
          className="space-y-6 lg:w-1/2"
        >
          <motion.span
            variants={floatIn}
            className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[11px] uppercase tracking-[0.3em] text-white/70"
          >
            <Sparkles className="h-4 w-4 text-[#FFB347]" />
            Lucknow riverfront stories
          </motion.span>

          <motion.h1
            variants={floatIn}
            className="text-3xl font-semibold leading-tight md:text-5xl"
          >
            AI paints your brand like a midnight mela — vibrant, local, unforgettable.
          </motion.h1>

          <motion.p
            variants={floatIn}
            className="max-w-xl text-base text-white/70"
          >
            Riverfront Canvas is a cinematic landing experience crafted for MSMEs, creators and malls who love drama minus the chaos. Think guided storyboards, AI-assisted shoots and social-first launch nights that make the city talk.
          </motion.p>

          <motion.div
            variants={floatIn}
            className="flex flex-wrap items-center gap-4"
          >
            <a
              href="#aurora-cta"
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#FFB347] via-[#FF2D92] to-[#7F00FF] px-6 py-3 text-sm font-semibold text-black shadow-[0_0_30px_rgba(255,45,146,0.5)] transition hover:-translate-y-1 hover:shadow-[0_0_45px_rgba(255,45,146,0.7)]"
            >
              <Rocket className="h-4 w-4" />
              <span>Book a reel jam</span>
            </a>
            <button className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-2 text-sm text-white/80 transition hover:border-[#FFB347]/60 hover:text-white">
              <MessageCircle className="h-4 w-4" />
              Let&apos;s discuss campaign beats
            </button>
          </motion.div>

          <motion.div variants={floatIn} className="grid gap-4 sm:grid-cols-3">
            {AURORA_FEATURES.map(({ icon: Icon, title, desc, tone }) => (
              <div
                key={title}
                className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-white/70 shadow-[0_0_20px_rgba(0,0,0,0.5)] transition hover:border-white/20 hover:text-white"
              >
                <span className={`inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-r ${tone} text-black shadow-[0_0_20px_rgba(0,0,0,0.5)]`}>
                  <Icon className="h-5 w-5" />
                </span>
                <p className="mt-3 text-base font-semibold text-white">{title}</p>
                <p className="mt-2 text-xs text-white/70">{desc}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="relative w-full overflow-hidden rounded-[32px] border border-white/10 bg-gradient-to-b from-[#090b1a]/90 via-[#0f172a]/80 to-[#1f2937]/60 p-6 shadow-[0_40px_120px_rgba(8,9,20,0.6)] lg:w-1/2"
        >
          <div className="flex flex-col gap-6">
            {AURORA_RITUALS.map((item, index) => (
              <div key={item.step} className="relative rounded-2xl border border-white/10 bg-white/5 p-5">
                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/10 text-sm font-semibold text-white/80">
                    {index + 1}
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-[0.26em] text-white/50">{item.step}</p>
                    <h3 className="mt-2 text-lg font-semibold text-white">{item.title}</h3>
                    <p className="mt-2 text-sm text-white/70">{item.desc}</p>
                    <span className="mt-3 inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-[11px] text-white/70">
                      <ChevronRight className="h-3 w-3" /> {item.stat}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            {AURORA_PODS.map((pod) => (
              <div
                key={pod.tag}
                className="group rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-white/70 shadow-[0_0_25px_rgba(0,0,0,0.4)] transition hover:border-white/20 hover:shadow-[0_0_40px_rgba(0,0,0,0.5)]"
              >
                <span className="text-[11px] uppercase tracking-[0.22em] text-white/50">{pod.tag}</span>
                <p className="mt-2 text-base font-semibold text-white">{pod.metric}</p>
                <p className="mt-2 text-xs text-white/70">{pod.desc}</p>
                <span className={`mt-4 inline-flex items-center rounded-full bg-gradient-to-r ${pod.glow} px-3 py-1 text-[11px] font-semibold text-black shadow-[0_0_25px_rgba(0,0,0,0.6)]`}>
                  Spotlight campaign
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </header>

      <main className="relative mx-auto max-w-6xl px-5 pb-20">
        <section id="aurora-services" className="mt-6 grid gap-8 lg:grid-cols-[1fr,1.2fr]">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.4 }}
            className="rounded-[32px] border border-white/10 bg-white/5 p-8 shadow-[0_20px_60px_rgba(8,9,20,0.5)]"
          >
            <p className="text-[12px] uppercase tracking-[0.28em] text-white/60">What we orchestrate</p>
            <h2 className="mt-3 text-3xl font-semibold text-white">Campaign pods that feel like backstage passes.</h2>
            <p className="mt-3 text-sm text-white/70">
              Each pod is a mix of AI directors, content strategists and on-ground fixers. Choose the vibe, we script the saga.
            </p>

            <div className="mt-6 space-y-4">
              {[
                "Launch-night choreography with AR filters & LED prompts",
                "Weekly reel & short scripts with localized meme hooks",
                "WhatsApp drip sequences that sound like your best customer",
                "Real-time sales desk with AI suggested upsells",
              ].map((point) => (
                <div key={point} className="flex items-start gap-3 text-sm text-white/80">
                  <span className="mt-1 h-2 w-2 rounded-full bg-gradient-to-r from-[#FFB347] to-[#FF2D92] shadow-[0_0_12px_rgba(255,45,146,0.7)]" />
                  <span>{point}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="rounded-[32px] border border-white/10 bg-gradient-to-br from-white/5 via-white/0 to-white/5 p-[1px]"
          >
            <div className="rounded-[30px] bg-[#080b19]/80 p-6">
              <div className="grid gap-6 sm:grid-cols-2">
                {[
                  {
                    title: "Studio on Wheels",
                    detail: "Mobile creator van with lighting, rigs & AI teleprompter.",
                  },
                  {
                    title: "Festival Editions",
                    detail: "Navratri, Diwali & IPL themed drops matched to mohalla cues.",
                  },
                  {
                    title: "Data Wall",
                    detail: "Monitor conversions, DM intent & footfall heatmaps live.",
                  },
                  {
                    title: "Creator Syndicate",
                    detail: "20+ Lucknow storytellers cross-collabing on your brief.",
                  },
                ].map((tile) => (
                  <div key={tile.title} className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-white/70 shadow-[0_0_20px_rgba(0,0,0,0.4)]">
                    <p className="text-base font-semibold text-white">{tile.title}</p>
                    <p className="mt-2 text-xs text-white/70">{tile.detail}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </section>

        <ToolStack
          variant="aurora"
          theme="dark"
          accent={variants[activeVariant].accent}
        />

        <MobileShowcase
          variant="aurora"
          theme="dark"
          accent={variants[activeVariant].accent}
        />

        <section id="aurora-testimonials" className="mt-20">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.4 }}
          >
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-[12px] uppercase tracking-[0.28em] text-white/60">Live rave reviews</p>
                <h2 className="mt-2 text-3xl font-semibold text-white">Lucknow ke reels bolte hain.</h2>
              </div>
              <p className="max-w-md text-sm text-white/70">
                Brands, cafés and creators share how Riverfront Canvas turned footfalls into fandoms.
              </p>
            </div>

            <div className="mt-8 grid gap-6 md:grid-cols-3">
              {[
                {
                  quote: "They turned our store launch into a reel festival. We trended without a single paid ad.",
                  name: "Diya",
                  role: "Founder, Hazratganj boutique",
                },
                {
                  quote: "Campaign dashboards felt like gaming consoles. Team knew exactly which meme to boost next.",
                  name: "Arjun",
                  role: "Marketing Lead, Fun Republic Mall",
                },
                {
                  quote: "Creator pods + AI prompts = zero creative block. Every week we had a fresh hook to drop.",
                  name: "Rhea",
                  role: "Host, Lucknow Creator Guild",
                },
              ].map((item) => (
                <div key={item.name} className="rounded-3xl border border-white/10 bg-white/5 p-5 text-sm text-white/70 shadow-[0_0_25px_rgba(0,0,0,0.45)]">
                  <p className="text-sm text-white/80">“{item.quote}”</p>
                  <div className="mt-4 text-[11px] uppercase tracking-[0.22em] text-white/50">
                    {item.name}
                    <span className="ml-2 text-white/40">{item.role}</span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </section>

        <ResourceStrip
          theme="dark"
          accent={variants[activeVariant].accent}
        />

        <section id="aurora-cta" className="mt-20 rounded-[34px] border border-white/15 bg-gradient-to-r from-[#FFB347]/40 via-[#FF2D92]/30 to-[#7F00FF]/30 p-[1px]">
          <div className="rounded-[32px] bg-black/50 px-6 py-10 md:px-12 md:py-12">
            <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-xl space-y-4">
                <p className="text-[12px] uppercase tracking-[0.3em] text-white/70">Ready for spotlight?</p>
                <h3 className="text-3xl font-semibold text-white">Launch an AI-directed campaign night this weekend.</h3>
                <p className="text-sm text-white/70">
                  Choose your venue, drop your vibe, and we orchestrate creators, media and merch to make the city queue up.
                </p>
              </div>
              <div className="space-y-3">
                <a
                  href="https://wa.me/919999999999?text=Hi%20Sudarshan%20AI%20Labs%2C%20I%20want%20to%20book%20a%20Riverfront%20Canvas%20campaign!"
                  className="group inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-[#FFB347] via-[#FF2D92] to-[#7B2FF7] px-8 py-3 text-sm font-semibold text-black shadow-[0_0_35px_rgba(255,45,146,0.6)] transition hover:-translate-y-1 hover:shadow-[0_0_50px_rgba(255,45,146,0.8)]"
                >
                  <Rocket className="h-4 w-4" />
                  <span>Plan the drop now</span>
                </a>
                <p className="text-xs text-white/60">Bonus: Guest-list automation + influencer seeding kit included.</p>
              </div>
            </div>
          </div>
        </section>

        <VariantPreviewRail
          activeVariant={activeVariant}
          onSwitch={onSwitch}
          variants={variants}
          theme="dark"
        />

        <ContactSection
          theme="dark"
          accent={variants[activeVariant].accent}
        />
      </main>

      <footer className="border-t border-white/10 bg-black/40 py-10 text-sm text-white/70">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-5 md:flex-row md:items-center md:justify-between">
          <p className="text-white/80">Sudarshan AI Labs • Riverfront Canvas Edition</p>
          <div className="flex flex-wrap gap-4 text-xs uppercase tracking-[0.3em] text-white/50">
            <span>Creator pods</span>
            <span>On-ground ops</span>
            <span>Lucknow + NCR</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

function VariantDaylight({ activeVariant, onSwitch, variants }) {
  const processSteps = [
    {
      title: "Discover",
      desc: "Audit current funnels, decode audience intent & outline KPI baselines.",
    },
    {
      title: "Design",
      desc: "Build content systems, automation flows and launch-ready brand kits.",
    },
    {
      title: "Deliver",
      desc: "Ship experiments, review metrics weekly and scale what the city loves.",
    },
  ];

  return (
    <div className="relative min-h-screen bg-[#F8FAFF] text-slate-900 font-['Inter',system-ui]">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-28 -left-20 h-80 w-80 rounded-full bg-gradient-to-br from-[#0EA5E9]/30 via-[#22D3EE]/20 to-transparent blur-3xl" />
        <div className="absolute bottom-[-30%] right-[-10%] h-96 w-96 rounded-full bg-gradient-to-tl from-[#A855F7]/25 via-[#F472B6]/20 to-transparent blur-3xl" />
      </div>

      <VariantSwitcher
        activeVariant={activeVariant}
        onSwitch={onSwitch}
        variants={variants}
        theme="light"
      />

      <header className="mx-auto max-w-6xl px-5 pb-16 pt-16 md:pt-20">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#0EA5E9] via-[#22D3EE] to-[#A855F7] text-white shadow-lg">
              <Bot className="h-6 w-6" />
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-slate-500">Sudarshan AI Labs</p>
              <p className="text-sm text-slate-600">Lucknow • Growth systems for MSMEs</p>
            </div>
          </div>

          <nav className="flex flex-wrap items-center gap-4 text-xs font-medium text-slate-600 md:text-sm">
            <a href="#daylight-offers" className="rounded-full border border-slate-200 px-4 py-1.5 transition hover:border-slate-400 hover:text-slate-900">
              Services
            </a>
            <a href="#daylight-packages" className="rounded-full border border-slate-200 px-4 py-1.5 transition hover:border-slate-400 hover:text-slate-900">
              Pricing
            </a>
            <a href="#daylight-faq" className="rounded-full border border-slate-200 px-4 py-1.5 transition hover:border-slate-400 hover:text-slate-900">
              FAQ
            </a>
            <a href="#daylight-cta" className="rounded-full border border-slate-200 px-4 py-1.5 transition hover:border-slate-400 hover:text-slate-900">
              Talk to team
            </a>
          </nav>
        </div>

        <div className="mt-12 grid gap-12 lg:grid-cols-[1.1fr,0.9fr] lg:items-center">
          <div className="space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-1 text-[11px] uppercase tracking-[0.3em] text-slate-500 shadow-sm">
              <Sparkles className="h-4 w-4 text-[#0EA5E9]" />
              Nawabi Daylight Framework
            </span>
            <h1 className="text-3xl font-semibold leading-tight md:text-5xl">
              Polished, investor-ready, mobile-first AI marketing suites.
            </h1>
            <p className="text-base text-slate-600">
              Daylight is our premium conversion-focused layout for founders who want clarity, compliance and crisp storytelling. Perfect for pitch decks, venture updates and scaling beyond Lucknow.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#daylight-cta"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#0EA5E9] via-[#22D3EE] to-[#A855F7] px-6 py-3 text-sm font-semibold text-white shadow-lg transition hover:-translate-y-1 hover:shadow-xl"
              >
                <PhoneCall className="h-4 w-4" />
                <span>Schedule a clarity call</span>
              </a>
              <button className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-5 py-2 text-sm text-slate-600 transition hover:border-slate-400 hover:text-slate-900">
                <MessageCircle className="h-4 w-4" />
                Get proposal PDF
              </button>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              {DAYLIGHT_METRICS.map(({ icon: Icon, label, value }) => (
                <div key={label} className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                  <Icon className="h-6 w-6 text-[#0EA5E9]" />
                  <p className="mt-3 text-lg font-semibold text-slate-900">{value}</p>
                  <p className="text-xs text-slate-500">{label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-xl">
            <div className="space-y-5">
              <p className="text-xs uppercase tracking-[0.28em] text-slate-500">Client launch dashboard</p>
              <div className="rounded-2xl border border-slate-100 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-700">Weekly traction snapshot</p>
                <ul className="mt-3 space-y-2 text-sm text-slate-600">
                  <li>• 18% uplift in qualified leads vs. last week</li>
                  <li>• WhatsApp funnels converting @ 32% click-to-chat</li>
                  <li>• AI copy assistant suggests 4 new hook angles</li>
                </ul>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-slate-100 bg-slate-50 p-4">
                  <p className="text-xs uppercase tracking-[0.28em] text-slate-500">Focus</p>
                  <p className="mt-2 text-base font-semibold text-slate-800">Performance + Brand ops</p>
                </div>
                <div className="rounded-2xl border border-slate-100 bg-slate-50 p-4">
                  <p className="text-xs uppercase tracking-[0.28em] text-slate-500">Support</p>
                  <p className="mt-2 text-base font-semibold text-slate-800">Slack, WhatsApp & fortnightly reviews</p>
                </div>
              </div>
              <div className="rounded-2xl border border-dashed border-slate-200 p-4 text-sm text-slate-600">
                <p className="font-medium text-slate-700">Compliance add-ons</p>
                <p className="mt-2 text-xs text-slate-500">
                  GST-ready invoicing, DPDP aligned data capture & investor-ready reporting templates.
                </p>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-5 pb-20">
        <section id="daylight-offers" className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-lg">
          <div className="grid gap-8 lg:grid-cols-[1fr,1fr]">
            <div>
              <p className="text-[12px] uppercase tracking-[0.3em] text-slate-500">What&apos;s inside</p>
              <h2 className="mt-3 text-3xl font-semibold text-slate-900">Operating system for consistent, trackable growth.</h2>
              <p className="mt-3 text-sm text-slate-600">
                A modular stack of AI copilots, creative pods and analytics stitched together for founders who want clarity before scale.
              </p>
            </div>
            <div className="grid gap-4 text-sm text-slate-600">
              {[
                "Strategy war-room with north-star scorecards",
                "Automation blueprints for CRM, WhatsApp & email",
                "Monthly experimentation sprints with documented learnings",
                "Access to Sudarshan Partner Circle: vendors, creators, mentors",
              ].map((point) => (
                <div key={point} className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-gradient-to-r from-[#0EA5E9] to-[#A855F7]" />
                  <span>{point}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <ToolStack
          variant="daylight"
          theme="light"
          accent={variants[activeVariant].accent}
        />

        <MobileShowcase
          variant="daylight"
          theme="light"
          accent={variants[activeVariant].accent}
        />

        <section id="daylight-packages" className="mt-16">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-[12px] uppercase tracking-[0.3em] text-slate-500">Transparent pricing</p>
              <h2 className="mt-2 text-3xl font-semibold text-slate-900">Pick a pack, scale your dhandha.</h2>
            </div>
            <p className="max-w-md text-sm text-slate-600">
              Pricing shown is inclusive of compliance support and AI tooling. Custom bundles available for franchises.
            </p>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {DAYLIGHT_PACKAGES.map((plan) => (
              <div key={plan.name} className="flex h-full flex-col rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                <div className="flex items-center justify-between gap-3">
                  <h3 className="text-lg font-semibold text-slate-900">{plan.name}</h3>
                  <span className="rounded-full bg-slate-100 px-3 py-1 text-[11px] uppercase tracking-[0.2em] text-slate-500">
                    Best for you
                  </span>
                </div>
                <p className="mt-3 text-2xl font-semibold text-[#0EA5E9]">{plan.price}</p>
                <p className="mt-2 text-sm text-slate-600">{plan.description}</p>
                <ul className="mt-4 flex flex-1 flex-col gap-2 text-sm text-slate-600">
                  {plan.features.map((feat) => (
                    <li key={feat} className="flex items-start gap-3">
                      <span className="mt-1 h-2 w-2 rounded-full bg-[#0EA5E9]" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="#daylight-cta"
                  className="mt-5 inline-flex items-center justify-between gap-2 rounded-full border border-slate-200 px-4 py-2 text-sm font-medium text-slate-600 transition hover:border-[#0EA5E9] hover:text-[#0EA5E9]"
                >
                  Explore plan
                  <ChevronRight className="h-4 w-4" />
                </a>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-16 rounded-[32px] border border-slate-200 bg-white p-8 shadow-lg">
          <p className="text-[12px] uppercase tracking-[0.3em] text-slate-500">Process snapshot</p>
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            {processSteps.map((step) => (
              <div key={step.title} className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
                <p className="text-sm font-semibold text-slate-700">{step.title}</p>
                <p className="mt-3 text-sm text-slate-600">{step.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="daylight-faq" className="mt-16">
          <div className="grid gap-6 lg:grid-cols-[0.8fr,1.2fr] lg:items-start">
            <div>
              <p className="text-[12px] uppercase tracking-[0.3em] text-slate-500">Questions?</p>
              <h2 className="mt-2 text-3xl font-semibold text-slate-900">We&apos;ve got crisp answers.</h2>
              <p className="mt-3 text-sm text-slate-600">
                Still unsure? Ping us on WhatsApp and we&apos;ll share tailored roadmaps for your category.
              </p>
            </div>
            <div className="space-y-4">
              {DAYLIGHT_FAQ.map((faq) => (
                <details key={faq.question} className="group rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                  <summary className="cursor-pointer list-none text-sm font-semibold text-slate-800">
                    {faq.question}
                  </summary>
                  <p className="mt-2 text-sm text-slate-600 group-open:text-slate-700">{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <ResourceStrip
          theme="light"
          accent={variants[activeVariant].accent}
        />

        <section id="daylight-cta" className="mt-20 rounded-[36px] border border-slate-200 bg-gradient-to-r from-white via-[#E0F2FE] to-[#F5E8FF] p-[1px] shadow-xl">
          <div className="rounded-[34px] bg-white/70 px-6 py-10 backdrop-blur md:px-12 md:py-12">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div className="space-y-4">
                <p className="text-[12px] uppercase tracking-[0.3em] text-slate-500">Let&apos;s build your AI HQ</p>
                <h3 className="text-3xl font-semibold text-slate-900">Book a 30-min clarity call with our growth partners.</h3>
                <p className="text-sm text-slate-600">
                  Get a tailored rollout plan, sample dashboards and access to investor-friendly reporting templates.
                </p>
              </div>
              <div className="space-y-3">
                <a
                  href="https://wa.me/919999999999?text=Hi%20Sudarshan%20AI%20Labs%2C%20I%20want%20the%20Nawabi%20Daylight%20plan!"
                  className="inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-[#0EA5E9] via-[#22D3EE] to-[#A855F7] px-8 py-3 text-sm font-semibold text-white shadow-lg transition hover:-translate-y-1 hover:shadow-xl"
                >
                  <Rocket className="h-4 w-4" />
                  <span>Reserve my slot</span>
                </a>
                <p className="text-xs text-slate-500">Slots limited to 6 founders per month for deep-dive support.</p>
              </div>
            </div>
          </div>
        </section>

        <VariantPreviewRail
          activeVariant={activeVariant}
          onSwitch={onSwitch}
          variants={variants}
          theme="light"
        />

        <ContactSection
          theme="light"
          accent={variants[activeVariant].accent}
        />
      </main>

      <footer className="border-t border-slate-200 bg-white/80 py-10 text-xs text-slate-500">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-5 md:flex-row md:items-center md:justify-between">
          <p className="font-medium text-slate-600">Sudarshan AI Labs Pvt. Ltd. • Registered in Lucknow, Uttar Pradesh</p>
          <div className="flex flex-wrap gap-3">
            <span>Privacy-first</span>
            <span>MSME Ready</span>
            <span>Global investor decks</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

function ToolStack({ variant, theme = "dark", accent = "from-[#00F1A0] via-[#00FFFF] to-[#7B2FF7]" }) {
  const items = TOOL_STACK[variant] ?? [];
  const copy = STACK_COPY[variant];
  if (!items.length || !copy) return null;

  const isLight = theme === "light";
  const wrapperTone = isLight
    ? "rounded-[32px] border border-slate-200 bg-white shadow-xl"
    : "rounded-[32px] border border-white/10 bg-white/5 shadow-[0_30px_80px_rgba(8,10,35,0.45)] backdrop-blur";
  const textTone = isLight ? "text-slate-700" : "text-white/80";
  const titleTone = isLight ? "text-slate-900" : "text-white";
  const pillTone = isLight
    ? "bg-slate-100 text-slate-600 border-slate-200"
    : "bg-white/10 text-white/80 border-white/20";

  return (
    <section className={`mt-16 md:mt-24 ${textTone}`} aria-labelledby={`${variant}-stack-heading`}>
      <div className={`${wrapperTone} p-6 md:p-8`}>
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className={`text-[11px] uppercase tracking-[0.3em] ${isLight ? "text-slate-500" : "text-white/60"}`}>
              {copy.eyebrow}
            </p>
            <h2 id={`${variant}-stack-heading`} className={`mt-2 text-2xl font-semibold md:text-3xl ${titleTone}`}>
              {copy.title}
            </h2>
            <p className={`mt-3 max-w-2xl text-sm ${textTone}`}>{copy.subtitle}</p>
          </div>
          <span
            className={`inline-flex items-center gap-2 rounded-full border px-4 py-1 text-xs font-semibold uppercase tracking-[0.22em] ${pillTone}`}
          >
            <Sparkles className={`h-3 w-3 ${isLight ? "text-[#0EA5E9]" : "text-emerald-300"}`} />
            Beta tools
          </span>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {items.map(({ icon: Icon, title, detail, pill }) => (
            <div
              key={title}
              className={`flex h-full flex-col justify-between rounded-3xl border p-6 transition hover:-translate-y-1 hover:shadow-xl ${
                isLight ? "border-slate-200 bg-slate-50" : "border-white/10 bg-white/5"
              }`}
            >
              <span className={`inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-r ${accent} text-black shadow-lg`}>
                <Icon className="h-5 w-5" />
              </span>
              <div className="mt-5 space-y-3">
                <p className={`text-lg font-semibold ${titleTone}`}>{title}</p>
                <p className={`text-sm ${textTone}`}>{detail}</p>
              </div>
              <span
                className={`mt-6 inline-flex w-max items-center gap-2 rounded-full border px-3 py-1 text-[11px] font-medium uppercase tracking-[0.2em] ${pillTone}`}
              >
                <ChevronRight className="h-3 w-3" />
                {pill}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function MobileShowcase({ variant, theme = "dark", accent = "from-[#00F1A0] via-[#00FFFF] to-[#7B2FF7]" }) {
  const preview = MOBILE_PREVIEWS[variant];
  if (!preview) return null;

  const isLight = theme === "light";
  const textTone = isLight ? "text-slate-700" : "text-white/80";
  const titleTone = isLight ? "text-slate-900" : "text-white";
  const wrapperTone = isLight
    ? "rounded-[32px] border border-slate-200 bg-white shadow-xl"
    : "rounded-[32px] border border-white/10 bg-white/5 shadow-[0_30px_80px_rgba(8,10,35,0.45)] backdrop-blur";
  const phoneTone = isLight
    ? "border-slate-200 bg-white text-slate-700"
    : "border-white/10 bg-slate-900/95 text-white/80";

  return (
    <section className={`mt-16 md:mt-24 ${textTone}`} aria-labelledby={`${variant}-mobile-heading`}>
      <div className={`${wrapperTone} grid gap-8 p-6 md:grid-cols-[1.1fr,0.9fr] md:p-8`}>
        <div>
          <p className={`text-[11px] uppercase tracking-[0.3em] ${isLight ? "text-slate-500" : "text-white/60"}`}>
            Mobile preview
          </p>
          <h3 id={`${variant}-mobile-heading`} className={`mt-2 text-2xl font-semibold md:text-3xl ${titleTone}`}>
            {preview.heading}
          </h3>
          <p className={`mt-3 max-w-xl text-sm ${textTone}`}>{preview.subheading}</p>

          <ul className="mt-6 space-y-3 text-sm">
            {preview.highlights.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className={`mt-1 h-2 w-2 rounded-full bg-gradient-to-r ${accent}`} />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <span
            className={`mt-6 inline-flex items-center gap-2 rounded-full bg-gradient-to-r ${accent} px-4 py-1.5 text-xs font-semibold text-black shadow-lg`}
          >
            <PhoneCall className="h-4 w-4" />
            {preview.metric}
          </span>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="relative flex items-center justify-center"
        >
          <div className="absolute inset-0 translate-y-6 rounded-[40px] bg-gradient-to-br from-black/40 to-transparent blur-3xl" />
          <div
            className={`relative h-[420px] w-[220px] overflow-hidden rounded-[36px] border p-4 shadow-[0_20px_60px_rgba(8,10,35,0.6)] ${phoneTone}`}
          >
            <div className="mx-auto h-1.5 w-16 rounded-full bg-white/20" />
            <div className="mt-4 flex flex-col gap-3 text-[11px]">
              <div className={`rounded-2xl border bg-gradient-to-r ${accent} p-3 text-black`}>AI insights updating...</div>
              <div className={`rounded-2xl border ${isLight ? "border-slate-200 bg-white" : "border-white/10 bg-white/5"} p-3 text-left`}> 
                <p className={`text-xs font-semibold ${titleTone}`}>Next action</p>
                <p className={`mt-1 text-[11px] ${textTone}`}>Drop a voice note to followers about today&apos;s offer.</p>
              </div>
              <div className={`rounded-2xl border ${isLight ? "border-slate-200 bg-white" : "border-white/10 bg-white/5"} p-3`}> 
                <p className={`text-xs font-semibold ${titleTone}`}>Live metrics</p>
                <p className={`mt-1 text-[11px] ${textTone}`}>DM replies ↑ 28% • Click-to-chat 31%</p>
              </div>
              <div className={`rounded-2xl border ${isLight ? "border-slate-200 bg-white" : "border-white/10 bg-white/5"} p-3`}> 
                <p className={`text-xs font-semibold ${titleTone}`}>Team check-ins</p>
                <p className={`mt-1 text-[11px] ${textTone}`}>Creators ready • Ads approved • Ops synced</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function ResourceStrip({ theme = "dark", accent = "from-[#00F1A0] via-[#00FFFF] to-[#7B2FF7]" }) {
  const isLight = theme === "light";
  const wrapperTone = isLight
    ? "rounded-[32px] border border-slate-200 bg-white shadow-xl"
    : "rounded-[32px] border border-white/10 bg-white/5 shadow-[0_25px_70px_rgba(8,10,35,0.45)] backdrop-blur";
  const textTone = isLight ? "text-slate-700" : "text-white/80";
  const titleTone = isLight ? "text-slate-900" : "text-white";

  return (
    <section className={`mt-16 md:mt-24 ${textTone}`} aria-labelledby="resource-hub-heading">
      <div className={`${wrapperTone} p-6 md:p-8`}>
        <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <p className={`text-[11px] uppercase tracking-[0.3em] ${isLight ? "text-slate-500" : "text-white/60"}`}>
              Resource hub
            </p>
            <h3 id="resource-hub-heading" className={`text-2xl font-semibold md:text-3xl ${titleTone}`}>
              Download playbooks, attend demo nights & stay updated.
            </h3>
          </div>
          <span className={`inline-flex items-center gap-2 rounded-full bg-gradient-to-r ${accent} px-4 py-1.5 text-xs font-semibold text-black shadow-lg`}>
            <Sparkles className="h-4 w-4" />
            Fresh drops monthly
          </span>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {GLOBAL_RESOURCES.map((resource) => (
            <ResourceCard key={resource.title} resource={resource} theme={theme} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ResourceCard({ resource, theme }) {
  const isLight = theme === "light";
  const Icon = resource.icon;

  return (
    <a
      href={resource.href}
      className={`group flex h-full flex-col justify-between rounded-3xl border p-6 transition hover:-translate-y-1 hover:shadow-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current ${
        isLight ? "border-slate-200 bg-slate-50 text-slate-700" : "border-white/10 bg-white/5 text-white/80"
      }`}
    >
      <div>
        <span className={`inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-r ${resource.accent} text-black shadow-lg`}>
          <Icon className="h-5 w-5" />
        </span>
        <p className={`mt-4 text-lg font-semibold ${isLight ? "text-slate-900" : "text-white"}`}>{resource.title}</p>
        <p className="mt-3 text-sm">{resource.description}</p>
      </div>
      <span
        className={`mt-6 inline-flex items-center gap-2 text-sm font-semibold transition ${
          isLight ? "text-[#0EA5E9] group-hover:translate-x-1" : "text-emerald-300 group-hover:translate-x-1"
        }`}
      >
        {resource.cta}
        <ChevronRight className="h-4 w-4" />
      </span>
    </a>
  );
}

function VariantPreviewRail({ activeVariant, onSwitch, variants, theme = "dark" }) {
  const isLight = theme === "light";
  const wrapperTone = isLight
    ? "rounded-[32px] border border-slate-200 bg-white shadow-xl"
    : "rounded-[32px] border border-white/10 bg-white/5 shadow-[0_25px_70px_rgba(8,10,35,0.4)] backdrop-blur";
  const textTone = isLight ? "text-slate-700" : "text-white/80";
  const titleTone = isLight ? "text-slate-900" : "text-white";

  return (
    <section className={`mt-16 md:mt-24 ${textTone}`} aria-labelledby="variant-preview-heading">
      <div className={`${wrapperTone} p-6 md:p-8`}>
        <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <p className={`text-[11px] uppercase tracking-[0.3em] ${isLight ? "text-slate-500" : "text-white/60"}`}>
              Explore variants
            </p>
            <h3 id="variant-preview-heading" className={`text-2xl font-semibold md:text-3xl ${titleTone}`}>
              Preview & switch between Sudarshan AI Labs layouts.
            </h3>
          </div>
          <p className={`text-xs uppercase tracking-[0.28em] ${isLight ? "text-slate-500" : "text-white/60"}`}>
            Viewing: {variants[activeVariant].label}
          </p>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {Object.entries(variants).map(([key, meta]) => {
            const isActive = key === activeVariant;
            return (
              <button
                key={key}
                type="button"
                onClick={() => !isActive && onSwitch(key)}
                className={`flex h-full flex-col items-start gap-3 rounded-3xl border p-5 text-left transition hover:-translate-y-1 hover:shadow-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current ${
                  isLight ? "border-slate-200 bg-slate-50" : "border-white/10 bg-white/5"
                } ${
                  isActive
                    ? isLight
                      ? "ring-2 ring-[#0EA5E9] ring-offset-2 ring-offset-white"
                      : "ring-2 ring-emerald-300/80 ring-offset-2 ring-offset-slate-900/60"
                    : ""
                }`}
                aria-pressed={isActive}
              >
                <span className={`inline-flex items-center gap-2 rounded-full bg-gradient-to-r ${meta.accent} px-3 py-1 text-[11px] font-semibold text-black shadow-lg`}>
                  {meta.label}
                </span>
                <p className={`text-lg font-semibold ${isLight ? "text-slate-900" : "text-white"}`}>{meta.tagline}</p>
                <p className="text-sm">
                  {isActive
                    ? "You&apos;re viewing this experience now."
                    : "Click to preview this design language instantly."}
                </p>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function ContactSection({ theme = "dark", accent = "from-[#00F1A0] via-[#00FFFF] to-[#7B2FF7]" }) {
  const isLight = theme === "light";
  const wrapperTone = isLight
    ? "rounded-[36px] border border-slate-200 bg-white shadow-xl"
    : "rounded-[36px] border border-white/10 bg-white/5 shadow-[0_25px_70px_rgba(8,10,35,0.45)] backdrop-blur";
  const textTone = isLight ? "text-slate-700" : "text-white/80";
  const titleTone = isLight ? "text-slate-900" : "text-white";

  return (
    <section id="contact" className={`mt-16 md:mt-24 ${textTone}`} aria-labelledby="contact-heading">
      <div className={`${wrapperTone} grid gap-10 p-6 md:grid-cols-[1fr,0.9fr] md:p-10`}>
        <div className="space-y-6">
          <span className={`inline-flex items-center gap-2 rounded-full bg-gradient-to-r ${accent} px-4 py-1.5 text-xs font-semibold text-black shadow-lg`}>
            <Sparkles className="h-4 w-4" />
            Talk to Sudarshan AI Labs
          </span>
          <h3 id="contact-heading" className={`text-3xl font-semibold ${titleTone}`}>
            Tell us about your brand & we&apos;ll share a tailored AI launch plan within 24 hours.
          </h3>
          <p className={`text-sm ${textTone}`}>
            Fill the form or use any of the quick links. Our Lucknow + NCR growth partners will reach out with demos, pricing and next steps.
          </p>

          <div className="space-y-3">
            {CONTACT_SHORTCUTS.map(({ label, detail, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                className={`group flex items-center justify-between gap-4 rounded-2xl border px-4 py-3 text-sm transition hover:-translate-y-0.5 hover:shadow-lg ${
                  isLight ? "border-slate-200 bg-slate-50" : "border-white/10 bg-white/5"
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className={`inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-r ${accent} text-black shadow-lg`}>
                    <Icon className="h-5 w-5" />
                  </span>
                  <div>
                    <p className={`text-sm font-semibold ${titleTone}`}>{label}</p>
                    <p className={`text-xs ${textTone}`}>{detail}</p>
                  </div>
                </div>
                <ChevronRight className={`h-4 w-4 ${isLight ? "text-slate-400 group-hover:text-[#0EA5E9]" : "text-white/40 group-hover:text-emerald-300"}`} />
              </a>
            ))}
          </div>
        </div>

        <form
          action="https://formsubmit.co/hello@sudarshanailabs.com"
          method="POST"
          className={`space-y-4 rounded-3xl border p-6 shadow-inner ${
            isLight ? "border-slate-200 bg-slate-50" : "border-white/10 bg-[#050814]/80"
          }`}
        >
          <input type="hidden" name="_subject" value="Sudarshan AI Labs landing inquiry" />
          <input type="hidden" name="_captcha" value="false" />
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="space-y-2 text-sm font-medium">
              <span className={titleTone}>Your name</span>
              <input
                type="text"
                name="name"
                required
                placeholder="Aman Verma"
                className={`w-full rounded-2xl border px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-offset-1 ${
                  isLight
                    ? "border-slate-200 bg-white text-slate-700 focus:ring-[#0EA5E9]"
                    : "border-white/10 bg-white/5 text-white focus:ring-emerald-300"
                }`}
              />
            </label>
            <label className="space-y-2 text-sm font-medium">
              <span className={titleTone}>Work email</span>
              <input
                type="email"
                name="email"
                required
                placeholder="you@brand.com"
                className={`w-full rounded-2xl border px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-offset-1 ${
                  isLight
                    ? "border-slate-200 bg-white text-slate-700 focus:ring-[#0EA5E9]"
                    : "border-white/10 bg-white/5 text-white focus:ring-emerald-300"
                }`}
              />
            </label>
          </div>
          <label className="space-y-2 text-sm font-medium">
            <span className={titleTone}>Brand or company</span>
            <input
              type="text"
              name="brand"
              required
              placeholder="Lucknow Streetwear Co."
              className={`w-full rounded-2xl border px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-offset-1 ${
                isLight
                  ? "border-slate-200 bg-white text-slate-700 focus:ring-[#0EA5E9]"
                  : "border-white/10 bg-white/5 text-white focus:ring-emerald-300"
              }`}
            />
          </label>
          <label className="space-y-2 text-sm font-medium">
            <span className={titleTone}>Growth priority for next 90 days</span>
            <select
              name="priority"
              className={`w-full rounded-2xl border px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-offset-1 ${
                isLight
                  ? "border-slate-200 bg-white text-slate-700 focus:ring-[#0EA5E9]"
                  : "border-white/10 bg-white/5 text-white focus:ring-emerald-300"
              }`}
            >
              <option>Launch new product</option>
              <option>Scale WhatsApp + social sales</option>
              <option>Investor storytelling & PR</option>
              <option>Automation & analytics setup</option>
            </select>
          </label>
          <label className="space-y-2 text-sm font-medium">
            <span className={titleTone}>Tell us about your vibe</span>
            <textarea
              name="message"
              rows="4"
              placeholder="Share launch date, target audience, or current marketing hurdles..."
              className={`w-full rounded-2xl border px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-offset-1 ${
                isLight
                  ? "border-slate-200 bg-white text-slate-700 focus:ring-[#0EA5E9]"
                  : "border-white/10 bg-white/5 text-white focus:ring-emerald-300"
              }`}
            />
          </label>

          <button
            type="submit"
            className={`inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r ${accent} px-6 py-3 text-sm font-semibold text-black shadow-lg transition hover:-translate-y-1 hover:shadow-xl`}
          >
            <Rocket className="h-4 w-4" />
            Send my brief
          </button>

          <p className={`text-xs ${textTone}`}>
            We respect your data. Expect a WhatsApp or email from team Sudarshan within one working day.
          </p>
        </form>
      </div>
    </section>
  );
}

function VariantSwitcher({ activeVariant, onSwitch, variants, theme = "dark" }) {
  const wrapperTone =
    theme === "light"
      ? "bg-white/80 text-slate-700 border-slate-200 shadow-xl"
      : "bg-slate-900/70 text-white/80 border-white/10 shadow-[0_0_30px_rgba(8,8,40,0.35)]";
  const idleTone = theme === "light" ? "bg-slate-900/5 text-slate-600" : "bg-white/10 text-white/70";

  return (
    <div className="fixed bottom-5 left-1/2 z-50 w-full max-w-xl -translate-x-1/2 px-4 md:bottom-auto md:left-auto md:right-6 md:top-6 md:translate-x-0">
      <div className={`flex flex-col gap-2 rounded-3xl border backdrop-blur-xl p-2 md:flex-row ${wrapperTone}`}>
        {Object.entries(variants).map(([key, meta]) => {
          const isActive = key === activeVariant;
          return (
            <button
              key={key}
              onClick={() => onSwitch(key)}
              className={`flex-1 rounded-2xl px-4 py-3 text-left transition focus:outline-none focus:ring-2 focus:ring-offset-2 ${isActive ? `bg-gradient-to-r ${meta.accent} text-slate-900 shadow-lg` : idleTone}`}
            >
              <p className="text-sm font-semibold">{meta.label}</p>
              <p className="text-xs opacity-80">{meta.tagline}</p>
            </button>
          );
        })}
      </div>
    </div>
  );
}

// Small subcomponents

function SectionLabel({ children }) {
  return (
    <p className="flex items-center gap-2 text-xs uppercase tracking-[0.26em] text-emerald-300/80">
      <span className="h-[1px] w-6 bg-gradient-to-r from-transparent via-emerald-400/70 to-transparent" />
      {children}
    </p>
  );
}

function SectionHeader({ eyebrow, title, subtitle }) {
  return (
    <div className="max-w-2xl space-y-3">
      {eyebrow && <SectionLabel>{eyebrow}</SectionLabel>}
      <h2 className="font-['Orbitron',system-ui] text-2xl text-white md:text-3xl">{title}</h2>
      {subtitle && <p className="text-sm text-white/70 md:text-base">{subtitle}</p>}
    </div>
  );
}

function AboutChip({ title, desc }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-4 shadow-[0_0_18px_rgba(0,0,0,0.5)] transition hover:border-emerald-300/70 hover:shadow-[0_0_26px_rgba(16,185,129,0.7)]">
      <div className="flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-emerald-200/90">
        <span className="flex h-6 w-6 items-center justify-center rounded-xl bg-gradient-to-br from-[#00F1A0] via-[#00FFFF] to-[#7B2FF7] text-black shadow-[0_0_18px_rgba(34,197,94,0.8)]">
          <ShoppingBag className="h-3 w-3" />
        </span>
        <span>{title}</span>
      </div>
      <p className="mt-3 text-xs text-white/70">{desc}</p>
    </div>
  );
}

function ServiceCard({ gradient, title, badge, price, points }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.4 }}
      className="group rounded-3xl bg-gradient-to-br from-white/5 via-white/0 to-white/5 p-[1px]"
    >
      <div className="flex h-full flex-col rounded-[22px] bg-[#050814]/90 p-5">
        <div className="flex items-center justify-between gap-3">
          <h3 className="text-lg font-semibold text-white">{title}</h3>
          <span className="rounded-full bg-white/5 px-3 py-1 text-[10px] uppercase tracking-[0.18em] text-emerald-200/90">
            {badge}
          </span>
        </div>

        <p className="mt-3 text-sm text-emerald-200/90">{price}</p>

        <ul className="mt-4 space-y-2 text-xs text-white/70">
          {points.map((p) => (
            <li key={p} className="flex gap-2">
              <span className="mt-[3px] h-1.5 w-1.5 flex-shrink-0 rounded-full bg-gradient-to-r from-[#00F1A0] to-[#00FFFF]" />
              <span>{p}</span>
            </li>
          ))}
        </ul>

        <button
          className={`mt-5 inline-flex items-center justify-between gap-2 rounded-full bg-gradient-to-r ${gradient} px-4 py-1.5 text-[11px] font-semibold text-black shadow-[0_0_20px_rgba(0,0,0,0.6)] transition group-hover:shadow-[0_0_30px_rgba(0,0,0,0.9)]`}
        >
          <span>View sample campaign</span>
          <Sparkles className="h-3 w-3" />
        </button>
      </div>
    </motion.div>
  );
}

function CampaignCard({ tag, title, metric, desc }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.4 }}
      className="rounded-3xl border border-white/10 bg-[#050814]/80 p-5 shadow-[0_0_20px_rgba(0,0,0,0.6)] transition hover:border-emerald-300/60 hover:shadow-[0_0_30px_rgba(16,185,129,0.7)]"
    >
      <p className="text-[11px] uppercase tracking-[0.19em] text-emerald-200/90">{tag}</p>
      <h3 className="mt-2 text-base font-semibold text-white">{title}</h3>
      <p className="mt-1 text-sm text-emerald-300">{metric}</p>
      <p className="mt-3 text-xs text-white/70">{desc}</p>
    </motion.div>
  );
}

function TestimonialCard({ name, area, quote }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.4 }}
      className="rounded-3xl border border-white/10 bg-[#050814]/80 p-5 shadow-[0_0_20px_rgba(0,0,0,0.6)] transition hover:border-[#00FFFF]/60 hover:shadow-[0_0_30px_rgba(6,182,212,0.7)]"
    >
      <p className="text-xs text-white/70">“{quote}”</p>
      <div className="mt-3 flex items-center justify-between text-[11px] text-white/60">
        <div>
          <p className="font-semibold text-white/80">{name}</p>
          <p className="text-white/50">{area}</p>
        </div>
        <Star className="h-4 w-4 text-amber-300" />
      </div>
    </motion.div>
  );
}

function StatPill({ label, value, tone }) {
  const colorMap = {
    emerald: "from-emerald-400/80 to-emerald-300/40",
    rose: "from-rose-400/80 to-rose-300/40",
    sky: "from-sky-400/80 to-sky-300/40",
  };

  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 px-3 py-2 text-[11px] text-white/70">
      <p className="text-[10px] uppercase tracking-[0.2em] text-white/40">{label}</p>
      <p
        className={`mt-1 inline-flex items-center rounded-full bg-gradient-to-r ${colorMap[tone]} px-2 py-0.5 text-xs font-semibold text-black shadow-[0_0_15px_rgba(0,0,0,0.7)]`}
      >
        {value}
      </p>
    </div>
  );
}

