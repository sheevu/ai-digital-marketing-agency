import React from "react";
import { motion } from "framer-motion";
import { Sparkles, Rocket, Bot, ShoppingBag, Star, MapPin } from "lucide-react";

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

export default function SudarshanLanding() {
  return (
    <div className="min-h-screen bg-[#0B0F19] text-white font-['Montserrat',system-ui]">
      {/* Glow background */}
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 -left-20 h-80 w-80 rounded-full bg-gradient-to-br from-[#7F00FF]/50 via-[#00FFFF]/30 to-transparent blur-3xl" />
        <div className="absolute -bottom-40 -right-10 h-96 w-96 rounded-full bg-gradient-to-br from-[#00F1A0]/60 via-[#0061FF]/40 to-transparent blur-3xl" />
      </div>

      {/* NAVBAR */}
      <header className="sticky top-0 z-30 backdrop-blur bg-black/20 border-b border-white/5">
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
            <a href="#about" className="hover:text-white transition">About</a>
            <a href="#services" className="hover:text-white transition">Services</a>
            <a href="#campaigns" className="hover:text-white transition">Campaigns</a>
            <a href="#testimonials" className="hover:text-white transition">Love from Lucknow</a>
          </nav>

          <div className="flex items-center gap-3">
            <button className="hidden rounded-full border border-white/15 px-4 py-1.5 text-xs font-medium text-white/80 backdrop-blur hover:border-emerald-400/70 hover:text-emerald-200 md:inline-flex">
              हिंदी मोड
            </button>
            <a
              href="#cta"
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#00F1A0] to-[#00FFFF] px-4 py-2 text-xs font-semibold text-black shadow-[0_0_25px_rgba(0,241,160,0.7)] hover:-translate-y-0.5 hover:shadow-[0_0_35px_rgba(0,241,160,0.9)] transition"
            >
              <Rocket className="h-4 w-4" />
              <span>Launch my ₹89 Portal</span>
            </a>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4 pb-20 pt-10 md:px-6 md:pt-16">
        {/* HERO */}
        <section id="hero" className="grid gap-10 md:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)] md:items-center">
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="visible"
            className="space-y-6"
          >
            <motion.div variants={floatIn} className="inline-flex items-center gap-2 rounded-full border border-emerald-400/40 bg-black/30 px-3 py-1 text-[11px] uppercase tracking-[0.26em] text-emerald-200/90 shadow-[0_0_20px_rgba(34,197,94,0.5)]">
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
              Sudarshan AI Labs turns chai-table ideas into full-blown brand storms.
              From Hazratganj boutiques to Gomti Nagar cafes, we build AI-powered
              digital shops, social media campaigns and content engines that work
              24x7—so aap chill karo, campaigns run karo.
            </motion.p>

            <motion.div
              variants={floatIn}
              className="grid gap-4 text-xs md:grid-cols-[auto,1fr] md:text-sm"
            >
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href="#cta"
                  className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#7F00FF] via-[#FF8C00] to-[#00FFFF] px-5 py-2 text-sm font-semibold shadow-[0_0_30px_rgba(127,0,255,0.8)] hover:-translate-y-0.5 hover:shadow-[0_0_40px_rgba(127,0,255,1)] transition"
                >
                  <Rocket className="h-4 w-4" />
                  <span>Start at just ₹89</span>
                </a>
                <button className="inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-2 text-xs font-medium text-white/80 hover:border-emerald-400/70 hover:text-emerald-200 transition">
                  <Sparkles className="h-4 w-4" />
                  <span>View 2025 Growth Playbook</span>
                </button>
              </div>

              <dl className="mt-1 grid grid-cols-3 gap-3 text-[11px] text-white/70 md:text-xs">
                <div>
                  <dt className="text-[10px] uppercase tracking-[0.18em] text-white/40">
                    For
                  </dt>
                  <dd>MSMEs • Creators • Startups</dd>
                </div>
                <div>
                  <dt className="text-[10px] uppercase tracking-[0.18em] text-white/40">
                    Location
                  </dt>
                  <dd className="flex items-center gap-1">
                    <MapPin className="h-3 w-3 text-emerald-300" />
                    Lucknow, UP
                  </dd>
                </div>
                <div>
                  <dt className="text-[10px] uppercase tracking-[0.18em] text-white/40">
                    USP
                  </dt>
                  <dd>AI + Desi Marketing + Meme Brain</dd>
                </div>
              </dl>
            </motion.div>
          </motion.div>

          {/* HERO VISUAL */}
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
                    <p className="text-[11px] uppercase tracking-[0.18em] text-white/40">
                      2025 Growth Radar
                    </p>
                    <p className="text-sm text-white/80">
                      AI watches your Instagram, WhatsApp & Google profile and
                      nudges you with next best campaigns.
                    </p>
                    <ul className="mt-3 space-y-1 text-[11px] text-emerald-200/90">
                      <li>• Auto content ideas for reels & static posts</li>
                      <li>• MSME friendly pricing, no agency drama</li>
                      <li>• Hindi + Hinglish copy tuned to your mohalla</li>
                    </ul>
                  </div>

                  <div className="relative">
                    <div className="absolute -inset-3 rounded-[26px] bg-gradient-to-br from-[#00F1A0]/40 via-[#00FFFF]/30 to-transparent blur-2xl" />
                    <div className="relative flex h-40 w-32 flex-col items-center justify-center rounded-[24px] bg-gradient-to-b from-[#001F3F] via-[#050814] to-[#120022] border border-white/10">
                      <Bot className="h-10 w-10 text-emerald-300" />
                      <p className="mt-3 text-center text-[11px] text-white/70">
                        Sudarshan AI Buddy
                      </p>
                      <p className="mt-1 text-center text-[10px] text-emerald-200/90">
                        "Bhai, kal se reel daily. Hashtags ready."
                      </p>
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

        {/* ABOUT SECTION */}
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
                We&apos;re a Lucknow-born, AI-obsessed studio that mixes hardcore
                data with Bollywood-level drama. Whether you&apos;re a Kabab shop in
                Aminabad, a creator jamming at Chacoco Café, or a startup
                pitching at Invest UP, we design AI-first digital journeys that
                feel premium, not pricey.
              </p>
              <div className="mt-6 grid gap-4 text-sm md:grid-cols-3">
                <AboutChip title="₹89 Launchpad" desc="Get your AI-ready digital shop—no coding, bas chai pe baith ke brief do." />
                <AboutChip title="Hindi + Hinglish" desc="Campaigns tuned to your gali, not just global jargon." />
                <AboutChip title="Creator-First" desc="Reels, shorts, carousels and podcasts planned as full seasons." />
              </div>
            </motion.div>

            <motion.div
              variants={floatIn}
              className="relative rounded-3xl border border-white/10 bg-gradient-to-br from-[#120022]/90 via-[#001F3F]/70 to-[#0B0F19]/90 p-5 shadow-[0_0_30px_rgba(0,0,0,0.7)]"
            >
              <p className="text-[11px] uppercase tracking-[0.22em] text-emerald-200/80">
                Lucknow Scene Map
              </p>
              <ul className="mt-3 space-y-3 text-sm text-white/75">
                <li>• Hazratganj boutiques getting Insta storefronts + Google My Business glow-ups.</li>
                <li>• Fun Republic Mall brands running meme-first launch campaigns.</li>
                <li>• Kabab Trail food crawl turned into UGC contests & reel festivals.</li>
                <li>• Chacoco Café creators club using AI to schedule collabs & live pods.</li>
              </ul>
              <p className="mt-4 text-xs text-white/50">
                We plug AI into your existing jugad ecosystem—no culture lost, sirf
                speed and scale added.
              </p>
            </motion.div>
          </motion.div>
        </section>

        {/* SERVICES */}
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

        {/* CAMPAIGN HIGHLIGHTS */}
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

        {/* TESTIMONIALS */}
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

        {/* CTA SECTION */}
        <section
          id="cta"
          className="mt-16 md:mt-24 rounded-[32px] border border-emerald-400/40 bg-gradient-to-r from-[#001F3F] via-[#050814] to-[#120022] p-[1px] shadow-[0_0_40px_rgba(0,241,160,0.4)]"
        >
          <div className="rounded-[30px] bg-black/70 px-6 py-8 md:px-10 md:py-10">
            <div className="flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-[11px] uppercase tracking-[0.25em] text-emerald-200/80">
                  Ready for 2025 growth?
                </p>
                <h3 className="mt-2 font-['Orbitron',system-ui] text-2xl text-white md:text-3xl">
                  Launch your AI-powered digital HQ for just ₹89.
                </h3>
                <p className="mt-3 max-w-xl text-sm text-white/70">
                  Get a Sudarshan AI Portal, socials audit, and one plug-and-play
                  campaign idea tuned to your gali, mall or mohalla. No jargon,
                  sirf result-oriented dhandha.
                </p>
              </div>

              <div className="space-y-3 text-sm">
                <a
                  href="https://wa.me/919999999999?text=Hi%20Sudarshan%20AI%20Labs%2C%20I%20want%20the%20%E2%82%B989%20Lucknow%20Launchpad!"
                  className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#00F1A0] via-[#00FFFF] to-[#7F00FF] px-6 py-3 text-sm font-semibold text-black shadow-[0_0_40px_rgba(0,241,160,0.8)] hover:-translate-y-1 hover:shadow-[0_0_50px_rgba(0,241,160,1)] transition"
                >
                  <Rocket className="h-4 w-4" />
                  <span>DM &quot;Lucknow Launchpad&quot; on WhatsApp</span>
                </a>
                <p className="text-xs text-white/60">
                  Bonus: Free Udyam + Startup India friendly guidance for MSMEs.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="border-t border-white/10 bg-black/40 py-8 text-xs text-white/60">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 md:flex-row md:items-center md:justify-between md:px-6">
          <div>
            <p className="font-semibold text-white/80">Sudarshan AI Labs Pvt. Ltd.</p>
            <p className="mt-1 text-[11px] text-white/50">
              Proudly building from Lucknow for Bharat&apos;s MSMEs, creators &
              startups.
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

// Small subcomponents

function SectionLabel({ children }) {
  return (
    <p className="text-xs uppercase tracking-[0.26em] text-emerald-300/80 flex items-center gap-2">
      <span className="h-[1px] w-6 bg-gradient-to-r from-transparent via-emerald-400/70 to-transparent" />
      {children}
    </p>
  );
}

function SectionHeader({ eyebrow, title, subtitle }) {
  return (
    <div className="space-y-3 max-w-2xl">
      {eyebrow && <SectionLabel>{eyebrow}</SectionLabel>}
      <h2 className="font-['Orbitron',system-ui] text-2xl text-white md:text-3xl">{title}</h2>
      {subtitle && <p className="text-sm text-white/70 md:text-base">{subtitle}</p>}
    </div>
  );
}

function AboutChip({ title, desc }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-4 shadow-[0_0_18px_rgba(0,0,0,0.5)] hover:border-emerald-300/70 hover:shadow-[0_0_26px_rgba(16,185,129,0.7)] transition">
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
          className={`mt-5 inline-flex items-center justify-between gap-2 rounded-full bg-gradient-to-r ${gradient} px-4 py-1.5 text-[11px] font-semibold text-black shadow-[0_0_20px_rgba(0,0,0,0.6)] group-hover:shadow-[0_0_30px_rgba(0,0,0,0.9)] transition`}
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
      className="rounded-3xl border border-white/10 bg-[#050814]/80 p-5 shadow-[0_0_20px_rgba(0,0,0,0.6)] hover:border-emerald-300/60 hover:shadow-[0_0_30px_rgba(16,185,129,0.7)] transition"
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
      className="rounded-3xl border border-white/10 bg-[#050814]/80 p-5 shadow-[0_0_20px_rgba(0,0,0,0.6)] hover:border-[#00FFFF]/60 hover:shadow-[0_0_30px_rgba(6,182,212,0.7)] transition"
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
