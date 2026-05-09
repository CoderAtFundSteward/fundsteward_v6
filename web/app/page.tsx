import type { ReactNode } from "react";
import Link from "next/link";
import { FundStewardLogo } from "@/components/fundsteward-logo";

export default function Home() {
  return (
    <>
      {/* NAVIGATION BAR */}
      <nav className="sticky top-0 z-50 border-b border-white/5 bg-primary/95 px-6 py-5 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="text-secondary">
              <FundStewardLogo size={28} />
            </div>
            <span className="text-xl font-bold tracking-tight text-white">
              FundSteward
            </span>
          </div>
          <div className="hidden items-center gap-10 md:flex">
            <a
              className="text-xs font-semibold uppercase tracking-widest text-white/70 transition-colors hover:text-white"
              href="#"
            >
              Product
            </a>
            <a
              className="text-xs font-semibold uppercase tracking-widest text-white/70 transition-colors hover:text-white"
              href="#"
            >
              Integrations
            </a>
            <a
              className="text-xs font-semibold uppercase tracking-widest text-white/70 transition-colors hover:text-white"
              href="#"
            >
              Pricing
            </a>
            <a
              className="text-xs font-semibold uppercase tracking-widest text-white/70 transition-colors hover:text-white"
              href="#"
            >
              Contact
            </a>
          </div>
          <div className="flex items-center gap-4">
            <Link
              href="/login"
              className="hidden text-[10px] font-bold uppercase tracking-widest text-white/80 transition-colors hover:text-white sm:inline"
            >
              Sign in
            </Link>
            <button
              type="button"
              className="rounded-full bg-secondary px-7 py-2.5 text-[10px] font-bold uppercase tracking-widest text-primary transition-all hover:bg-accent"
            >
              Request Demo
            </button>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative overflow-hidden px-6 pb-36 pt-28">
        <div className="mx-auto max-w-4xl text-center">
          <div className="flex flex-col items-center space-y-8">
            <div className="inline-flex items-center rounded-full border border-secondary/20 bg-secondary/10 px-4 py-1.5 text-[10px] font-bold uppercase tracking-widest text-secondary">
              Now in Private Beta
            </div>
            <h1 className="letter-spacing-tight text-5xl font-extrabold leading-[1.1] text-primary lg:text-7xl">
              Fund-level financial intelligence for mission-driven organizations.
            </h1>
            <p className="max-w-2xl text-lg leading-relaxed text-on-surface-variant">
              Automated financial oversight by connecting your organization&apos;s
              mission to QuickBooks, Tithe.ly, and Planning Center.
            </p>
            <div className="flex flex-wrap justify-center gap-4 pt-4">
              <button
                type="button"
                className="gold-gradient editorial-shadow rounded-lg px-10 py-5 text-sm font-extrabold uppercase tracking-widest text-primary transition-all hover:scale-[1.02]"
              >
                Request a Demo
              </button>
              <button
                type="button"
                className="rounded-lg border-2 border-primary px-10 py-5 text-sm font-extrabold uppercase tracking-widest text-primary transition-all hover:bg-primary hover:text-white"
              >
                Learn More
              </button>
            </div>
            <div className="flex flex-wrap justify-center gap-x-10 gap-y-4 pt-8">
              <div className="flex items-center gap-2.5 text-primary">
                <span
                  className="material-symbols-outlined text-secondary text-xl"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  check_circle
                </span>
                <span className="text-sm font-bold tracking-tight">
                  Automated reconciliation
                </span>
              </div>
              <div className="flex items-center gap-2.5 text-primary">
                <span
                  className="material-symbols-outlined text-secondary text-xl"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  check_circle
                </span>
                <span className="text-sm font-bold tracking-tight">
                  Real-time reporting
                </span>
              </div>
              <div className="flex items-center gap-2.5 text-primary">
                <span
                  className="material-symbols-outlined text-secondary text-xl"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  check_circle
                </span>
                <span className="text-sm font-bold tracking-tight">
                  Mission-aligned insights
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROBLEM */}
      <section className="bg-primary px-6 py-32">
        <div className="mx-auto max-w-7xl">
          <div className="mb-24 text-center">
            <h2 className="letter-spacing-tight mb-6 text-4xl font-extrabold text-white">
              The $24,000 annual report.
            </h2>
            <p className="mx-auto max-w-2xl text-lg leading-relaxed text-white/60">
              Manual reconciliation and fund accounting shouldn&apos;t cost you an
              entire staff salary. Reclaim your time for the mission.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="group rounded-2xl border border-white/10 bg-white/5 p-10 transition-colors hover:border-secondary/30">
              <span className="material-symbols-outlined mb-6 block text-4xl text-secondary">
                schedule
              </span>
              <h3 className="mb-3 text-2xl font-bold text-white">
                40+ hours per month
              </h3>
              <p className="text-sm leading-relaxed text-white/50">
                The average time spent by non-profit admins manually syncing giving
                data with accounting software.
              </p>
            </div>
            <div className="group rounded-2xl border border-white/10 bg-white/5 p-10 transition-colors hover:border-secondary/30">
              <span className="material-symbols-outlined mb-6 block text-4xl text-secondary">
                warning
              </span>
              <h3 className="mb-3 text-2xl font-bold text-white">
                $2,000 Monthly cost
              </h3>
              <p className="text-sm leading-relaxed text-white/50">
                Labor costs hidden in spreadsheets, manual entry, and year-end
                audit preparation delays.
              </p>
            </div>
            <div className="group rounded-2xl border border-white/10 bg-white/5 p-10 transition-colors hover:border-secondary/30">
              <span className="material-symbols-outlined mb-6 block text-4xl text-secondary">
                verified
              </span>
              <h3 className="mb-3 text-2xl font-bold text-white">
                $18,000/yr Saved
              </h3>
              <p className="text-sm leading-relaxed text-white/50">
                Automated fund accounting reduces overhead and provides board-ready
                reports in seconds.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="bg-white px-6 py-32">
        <div className="mx-auto max-w-7xl">
          <h2 className="letter-spacing-tight mb-24 text-center text-4xl font-extrabold text-primary">
            Connect. Sync. Insight.
          </h2>
          <div className="relative grid gap-16 md:grid-cols-3">
            <div className="absolute left-[15%] right-[15%] top-12 z-0 hidden h-[2px] bg-outline md:block" />
            <div className="relative z-10 flex flex-col items-center text-center">
              <div className="gold-gradient editorial-shadow mb-8 flex h-24 w-24 items-center justify-center rounded-full border-8 border-white text-3xl font-extrabold text-primary">
                1
              </div>
              <div className="space-y-3">
                <h3 className="text-xl font-bold text-primary">Connect Platforms</h3>
                <p className="px-4 text-sm leading-relaxed text-on-surface-variant">
                  Securely link your QuickBooks Online and giving platforms like
                  Tithe.ly in minutes.
                </p>
              </div>
            </div>
            <div className="relative z-10 flex flex-col items-center text-center">
              <div className="gold-gradient editorial-shadow mb-8 flex h-24 w-24 items-center justify-center rounded-full border-8 border-white text-3xl font-extrabold text-primary">
                2
              </div>
              <div className="space-y-3">
                <h3 className="text-xl font-bold text-primary">Automated Sync</h3>
                <p className="px-4 text-sm leading-relaxed text-on-surface-variant">
                  FundSteward maps every donation to the correct chart of accounts
                  and fund class automatically.
                </p>
              </div>
            </div>
            <div className="relative z-10 flex flex-col items-center text-center">
              <div className="gold-gradient editorial-shadow mb-8 flex h-24 w-24 items-center justify-center rounded-full border-8 border-white text-3xl font-extrabold text-primary">
                3
              </div>
              <div className="space-y-3">
                <h3 className="text-xl font-bold text-primary">Instant Reporting</h3>
                <p className="px-4 text-sm leading-relaxed text-on-surface-variant">
                  Generate statement of activities and restricted fund reports with
                  one click for board meetings.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INTEGRATIONS */}
      <section className="bg-background px-6 py-32">
        <div className="mx-auto max-w-7xl text-center">
          <h2 className="letter-spacing-tight mb-20 text-4xl font-extrabold text-primary">
            Built on the tools you already use.
          </h2>
          <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-5">
            <IntegrationCard
              icon="account_balance"
              title="QuickBooks"
              description="The source of truth for your ledger."
            />
            <IntegrationCard
              icon="volunteer_activism"
              title="Tithe.ly"
              description="Direct integration for church giving."
            />
            <IntegrationCard
              icon="event_note"
              title="Planning Center"
              description="Seamless member data syncing."
            />
            <IntegrationCard
              icon="payments"
              title="Pushpay"
              description="Enterprise donation management."
            />
            <IntegrationCard
              icon="security"
              title="Plaid"
              description="Bank-level secure connectivity."
            />
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className="bg-white px-6 py-32">
        <div className="mx-auto max-w-7xl">
          <div className="mb-24 text-center">
            <h2 className="letter-spacing-tight mb-6 text-4xl font-extrabold text-primary">
              Pricing that replaces your CPA invoice.
            </h2>
            <p className="text-lg text-on-surface-variant">
              Transparent pricing for every stage of institutional growth.
            </p>
          </div>
          <div className="grid items-center gap-10 md:grid-cols-3">
            <div className="editorial-shadow flex flex-col rounded-2xl border border-outline bg-white p-12">
              <div className="mb-10">
                <h4 className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-secondary">
                  Intelligence
                </h4>
                <div className="flex items-baseline gap-2">
                  <span className="text-5xl font-extrabold tracking-tighter text-primary">
                    $99
                  </span>
                  <span className="text-sm font-semibold text-on-surface-variant">
                    /month
                  </span>
                </div>
              </div>
              <ul className="mb-12 flex-grow space-y-5">
                <PricingItem>Up to 2 Integrations</PricingItem>
                <PricingItem>Daily Auto-Sync</PricingItem>
                <PricingItem>Email Support</PricingItem>
              </ul>
              <button
                type="button"
                className="w-full rounded-lg border-2 border-primary py-4 text-xs font-extrabold uppercase tracking-widest text-primary transition-all hover:bg-primary hover:text-white"
              >
                Get Started
              </button>
            </div>

            <div className="editorial-shadow relative z-10 flex scale-105 flex-col rounded-2xl border-2 border-secondary bg-white p-12">
              <div className="gold-gradient absolute -top-5 left-1/2 -translate-x-1/2 rounded-full px-6 py-2 text-[10px] font-extrabold uppercase tracking-widest text-primary">
                Most Popular
              </div>
              <div className="mb-10">
                <h4 className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-secondary">
                  Platform
                </h4>
                <div className="flex items-baseline gap-2">
                  <span className="text-5xl font-extrabold tracking-tighter text-primary">
                    $199
                  </span>
                  <span className="text-sm font-semibold text-on-surface-variant">
                    /month
                  </span>
                </div>
              </div>
              <ul className="mb-12 flex-grow space-y-5">
                <PricingItem emphasized>Unlimited Integrations</PricingItem>
                <PricingItem emphasized>Real-time Sync</PricingItem>
                <PricingItem emphasized>Priority Board Reports</PricingItem>
                <PricingItem emphasized>Concierge Onboarding</PricingItem>
              </ul>
              <button
                type="button"
                className="gold-gradient editorial-shadow w-full rounded-lg py-5 text-xs font-extrabold uppercase tracking-widest text-primary transition-all hover:scale-[1.02]"
              >
                Get Started
              </button>
            </div>

            <div className="editorial-shadow flex flex-col rounded-2xl border border-outline bg-white p-12">
              <div className="mb-10">
                <h4 className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-secondary">
                  Enterprise
                </h4>
                <div className="flex items-baseline gap-2">
                  <span className="text-5xl font-extrabold tracking-tighter text-primary">
                    Custom
                  </span>
                </div>
              </div>
              <ul className="mb-12 flex-grow space-y-5">
                <PricingItem>Multi-entity Management</PricingItem>
                <PricingItem>Custom API Access</PricingItem>
                <PricingItem>Dedicated Success Manager</PricingItem>
              </ul>
              <button
                type="button"
                className="w-full rounded-lg border-2 border-primary py-4 text-xs font-extrabold uppercase tracking-widest text-primary transition-all hover:bg-primary hover:text-white"
              >
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="bg-primary px-6 py-32">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="letter-spacing-tight mb-6 text-4xl font-extrabold text-white">
            Request early access.
          </h2>
          <p className="mx-auto mb-16 max-w-2xl text-lg text-white/60">
            We are currently in a private beta with selected mission-driven partners.
            Apply now to be first in line for our next rollout.
          </p>
          <div className="editorial-shadow rounded-2xl border border-white/10 bg-white/5 p-12 text-left">
            <div className="mb-8 grid grid-cols-1 gap-8 md:grid-cols-2">
              <div className="space-y-3">
                <label className="text-[10px] font-extrabold uppercase tracking-widest text-white/40">
                  Full Name
                </label>
                <input
                  className="w-full rounded-lg border border-white/10 bg-white/5 px-5 py-4 text-white placeholder:text-white/20 transition-all focus:border-secondary focus:ring-0"
                  placeholder="Jane Doe"
                  type="text"
                  name="fullName"
                  autoComplete="name"
                />
              </div>
              <div className="space-y-3">
                <label className="text-[10px] font-extrabold uppercase tracking-widest text-white/40">
                  Organization
                </label>
                <input
                  className="w-full rounded-lg border border-white/10 bg-white/5 px-5 py-4 text-white placeholder:text-white/20 transition-all focus:border-secondary focus:ring-0"
                  placeholder="Grace Community"
                  type="text"
                  name="organization"
                  autoComplete="organization"
                />
              </div>
            </div>
            <div className="mb-10 space-y-3">
              <label className="text-[10px] font-extrabold uppercase tracking-widest text-white/40">
                Work Email
              </label>
              <input
                className="w-full rounded-lg border border-white/10 bg-white/5 px-5 py-4 text-white placeholder:text-white/20 transition-all focus:border-secondary focus:ring-0"
                placeholder="jane@organization.org"
                type="email"
                name="email"
                autoComplete="email"
              />
            </div>
            <button
              type="button"
              className="gold-gradient editorial-shadow w-full rounded-lg py-5 text-sm font-extrabold uppercase tracking-widest text-primary transition-all hover:scale-[1.01]"
            >
              Send Us an Email
            </button>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/5 bg-primary px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-20 grid grid-cols-1 gap-16 md:grid-cols-2 lg:grid-cols-4">
            <div className="space-y-8">
              <div className="flex items-center gap-3">
                <div className="text-secondary">
                  <FundStewardLogo size={24} />
                </div>
                <span className="text-xl font-bold tracking-tight text-white">
                  FundSteward
                </span>
              </div>
              <p className="max-w-xs text-sm leading-relaxed text-white/40">
                Headquartered in Nashville, TN.
                <br />
                Empowering stewards of capital since 2024.
              </p>
            </div>
            <div>
              <h5 className="mb-8 text-[10px] font-extrabold uppercase tracking-[0.2em] text-white">
                Platform
              </h5>
              <ul className="space-y-5 text-sm font-medium text-white/50">
                <li>
                  <a className="transition-colors hover:text-secondary" href="#">
                    Product Overview
                  </a>
                </li>
                <li>
                  <a className="transition-colors hover:text-secondary" href="#">
                    Integrations
                  </a>
                </li>
                <li>
                  <a className="transition-colors hover:text-secondary" href="#">
                    Security
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h5 className="mb-8 text-[10px] font-extrabold uppercase tracking-[0.2em] text-white">
                Company
              </h5>
              <ul className="space-y-5 text-sm font-medium text-white/50">
                <li>
                  <a className="transition-colors hover:text-secondary" href="#">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a className="transition-colors hover:text-secondary" href="#">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a className="transition-colors hover:text-secondary" href="#">
                    Contact Support
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h5 className="mb-8 text-[10px] font-extrabold uppercase tracking-[0.2em] text-white">
                Connect
              </h5>
              <div className="flex gap-5">
                <a
                  className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 text-white/50 transition-all hover:border-secondary hover:text-secondary"
                  href="#"
                  aria-label="Email"
                >
                  <span className="material-symbols-outlined text-xl">mail</span>
                </a>
                <a
                  className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 text-white/50 transition-all hover:border-secondary hover:text-secondary"
                  href="#"
                  aria-label="Share"
                >
                  <span className="material-symbols-outlined text-xl">share</span>
                </a>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-between gap-8 border-t border-white/5 pt-10 md:flex-row">
            <p className="text-[11px] font-medium tracking-wide text-white/30">
              © 2024 FundSteward Inc. All rights reserved.
            </p>
            <p className="max-w-lg text-center text-[10px] font-medium italic leading-relaxed text-white/20 md:text-right">
              QuickBooks is a registered trademark of Intuit Inc. Tithe.ly is a
              trademark of Tithe.ly. FundSteward is an independent software provider.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}

function IntegrationCard({
  icon,
  title,
  description,
}: {
  icon: string;
  title: string;
  description: string;
}) {
  return (
    <div className="editorial-shadow flex flex-col items-center gap-5 rounded-xl border border-outline bg-white p-10 transition-all hover:-translate-y-2">
      <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-background">
        <span className="material-symbols-outlined text-3xl text-primary">
          {icon}
        </span>
      </div>
      <div className="space-y-1">
        <h4 className="text-sm font-bold uppercase tracking-wider text-primary">
          {title}
        </h4>
        <p className="text-[11px] text-on-surface-variant">{description}</p>
      </div>
    </div>
  );
}

function PricingItem({
  children,
  emphasized,
}: {
  children: ReactNode;
  emphasized?: boolean;
}) {
  return (
    <li
      className={`flex items-center gap-4 text-sm ${emphasized ? "font-bold text-primary" : "font-medium text-on-surface-variant"}`}
    >
      <span className="material-symbols-outlined text-lg text-secondary">check</span>
      {children}
    </li>
  );
}
