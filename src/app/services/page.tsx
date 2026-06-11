"use client";

import { useState } from "react";
import Link from "next/link";

const services = [
  {
    id: "wordpress",
    icon: "🌐",
    badge: "Most Popular",
    title: "WordPress Development",
    tagline: "Custom, Powerful & Easy to Manage",
    desc: "I build stunning WordPress websites tailored to your brand — from simple blogs to complex business sites. Every project is crafted with clean code, responsive design, and SEO in mind.",
    color: "#3b82f6",
    gradient: "from-blue-500/20 to-blue-600/5",
    borderGlow: "hover:border-blue-500/60",
    subServices: [
      {
        icon: "✍️",
        title: "Blog Website",
        desc: "Engaging, SEO-optimised blog websites that grow your audience and establish your authority in any niche.",
        features: ["Custom blog layout", "Category & tag system", "Author profiles", "Comment moderation", "RSS feed setup"],
      },
      {
        icon: "🏢",
        title: "Business Website",
        desc: "Professional multi-page business websites that convert visitors into leads and showcase your services.",
        features: ["Service pages", "Lead capture forms", "Google Maps integration", "Team pages", "Testimonial sections"],
      },
      {
        icon: "🎨",
        title: "Portfolio Website",
        desc: "Stunning portfolio sites that highlight your work beautifully and make a lasting impression on potential clients.",
        features: ["Project gallery", "Case study pages", "Skills showcase", "Client logos section", "Contact integration"],
      },
      {
        icon: "👤",
        title: "Personal Website",
        desc: "Your personal brand, online. A clean, modern personal site that tells your story and opens doors.",
        features: ["About me page", "Resume / CV section", "Social media links", "Blog integration", "Custom domain setup"],
      },
    ],
  },
  {
    id: "woocommerce",
    icon: "🛒",
    badge: "E-Commerce",
    title: "WooCommerce Store Development",
    tagline: "Launch & Scale Your Online Store",
    desc: "End-to-end WooCommerce store setup and management. I help you sell online with a store that's fast, secure, and built to convert — from product listing to checkout.",
    color: "#a855f7",
    gradient: "from-purple-500/20 to-purple-600/5",
    borderGlow: "hover:border-purple-500/60",
    subServices: [
      {
        icon: "🔧",
        title: "Store Maintenance",
        desc: "Keep your WooCommerce store running at peak performance with regular updates, backups, and health checks.",
        features: ["Plugin updates", "Theme updates", "Performance monitoring", "Weekly backups", "Uptime monitoring"],
      },
      {
        icon: "📊",
        title: "Store Management",
        desc: "Full ongoing management of your store — so you can focus on your business while I handle the tech.",
        features: ["Order management", "Customer support setup", "Discount & coupon setup", "Inventory control", "Sales reports"],
      },
      {
        icon: "📦",
        title: "Product Listing",
        desc: "Professional product listings that are optimised for SEO and designed to maximise conversions.",
        features: ["Bulk product upload", "SEO product titles", "Image optimisation", "Variant setup", "Category organisation"],
      },
      {
        icon: "🔍",
        title: "Product Hunting",
        desc: "Research and identify winning products for your niche using data-driven analysis and market trends.",
        features: ["Niche research", "Competitor analysis", "Trend identification", "Supplier sourcing", "Profit margin analysis"],
      },
      {
        icon: "💳",
        title: "Payment Gateways",
        desc: "Integrate the most trusted and popular payment gateways so your customers can pay with confidence.",
        features: ["Stripe integration", "PayPal setup", "Razorpay / local gateways", "Secure checkout", "Multi-currency support"],
      },
    ],
  },
  {
    id: "seo",
    icon: "🔍",
    badge: "Growth",
    title: "SEO Optimization",
    tagline: "Rank Higher. Load Faster. Stay Secure.",
    desc: "Comprehensive SEO and technical optimisation services that improve your search rankings, protect your website, and ensure it runs flawlessly for every visitor.",
    color: "#10b981",
    gradient: "from-emerald-500/20 to-emerald-600/5",
    borderGlow: "hover:border-emerald-500/60",
    subServices: [
      {
        icon: "⚡",
        title: "Speed Optimization",
        desc: "Blazing-fast load times with optimised images, caching, CDN setup, and Core Web Vitals improvements.",
        features: ["Image compression", "Browser caching", "CDN integration", "Code minification", "Core Web Vitals fix"],
      },
      {
        icon: "🛡️",
        title: "Security Features",
        desc: "Harden your website against threats with firewall setup, malware scanning, and security hardening.",
        features: ["Malware scanning", "Firewall setup", "Login protection", "Security headers", "Vulnerability patches"],
      },
      {
        icon: "🔒",
        title: "Secure Payments",
        desc: "Ensure your checkout process is fully secure with SSL, PCI compliance, and trusted gateway integrations.",
        features: ["SSL certificate setup", "HTTPS migration", "PCI compliance check", "Secure checkout audit", "Payment encryption"],
      },
      {
        icon: "🐛",
        title: "Bug Fixing",
        desc: "Diagnose and fix any WordPress or WooCommerce bugs — broken layouts, plugin conflicts, white screens, and more.",
        features: ["Plugin conflict resolution", "White screen of death fix", "404 error fixing", "JS / CSS errors", "Database repair"],
      },
      {
        icon: "🌐",
        title: "Domain Transfer",
        desc: "Seamless domain transfer and DNS management with zero downtime and full support throughout the process.",
        features: ["Domain migration", "DNS management", "Nameserver update", "Email setup", "Zero downtime transfer"],
      },
      {
        icon: "🔄",
        title: "Website Maintenance",
        desc: "Ongoing maintenance packages to keep your website updated, secure, and performing at its best.",
        features: ["Monthly updates", "Backup management", "Content updates", "Performance reports", "Priority support"],
      },
    ],
  },
];

const process = [
  { step: "01", title: "Discovery", desc: "We discuss your goals, audience, and project requirements in detail.", icon: "💬" },
  { step: "02", title: "Planning", desc: "I create a clear scope, timeline, and cost estimate tailored to your needs.", icon: "📋" },
  { step: "03", title: "Development", desc: "I build your website with clean code, best practices, and attention to detail.", icon: "💻" },
  { step: "04", title: "Review", desc: "You review the work, give feedback, and I make any requested revisions.", icon: "👁️" },
  { step: "05", title: "Launch", desc: "Your site goes live. I handle deployment, testing, and final optimisation.", icon: "🚀" },
];

export default function Services() {
  const [activeService, setActiveService] = useState(0);
  const [activeSubService, setActiveSubService] = useState(0);

  const current = services[activeService];

  return (
    <div className="min-h-screen">
      {/* ═══ Hero Banner ═══ */}
      <section className="relative py-24 px-[5%] overflow-hidden">
        {/* Animated background orbs */}
        <div
          className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full pointer-events-none"
          style={{
            background: `radial-gradient(circle, ${current.color}18 0%, transparent 70%)`,
            filter: "blur(60px)",
            transition: "background 0.8s ease",
          }}
        />
        <div
          className="absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full pointer-events-none"
          style={{
            background: `radial-gradient(circle, ${current.color}10 0%, transparent 70%)`,
            filter: "blur(80px)",
            transition: "background 0.8s ease",
          }}
        />

        <div className="relative max-w-7xl mx-auto text-center">
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border text-xs font-bold tracking-widest uppercase mb-6"
            style={{
              borderColor: `${current.color}40`,
              color: current.color,
              backgroundColor: `${current.color}10`,
              transition: "all 0.5s ease",
            }}
          >
            <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: current.color }} />
            Services
          </div>
          <h1 className="font-display text-5xl md:text-7xl font-bold leading-tight mb-6">
            What I{" "}
            <span
              style={{
                background: `linear-gradient(135deg, ${current.color}, ${current.color}80)`,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                transition: "all 0.5s ease",
              }}
            >
              Offer
            </span>
          </h1>
          <p className="text-muted text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Professional web development services designed to help your business grow, sell, and thrive online.
          </p>
        </div>
      </section>

      {/* ═══ Service Tabs ═══ */}
      <section className="px-[5%] pb-6 max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          {services.map((svc, i) => (
            <button
              key={svc.id}
              onClick={() => { setActiveService(i); setActiveSubService(0); }}
              className="group relative flex items-center gap-3 px-6 py-4 rounded-2xl border font-semibold text-sm transition-all duration-500 overflow-hidden"
              style={{
                borderColor: activeService === i ? `${svc.color}60` : "var(--border)",
                backgroundColor: activeService === i ? `${svc.color}12` : "var(--surface)",
                color: activeService === i ? svc.color : "var(--muted)",
                boxShadow: activeService === i ? `0 0 30px ${svc.color}20` : "none",
              }}
            >
              {/* Animated shine effect */}
              <span
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  background: `linear-gradient(135deg, ${svc.color}08 0%, transparent 60%)`,
                }}
              />
              <span className="text-xl">{svc.icon}</span>
              <span className="relative">{svc.title}</span>
              {activeService === i && (
                <span
                  className="ml-auto text-[10px] font-bold px-2 py-0.5 rounded-full"
                  style={{ backgroundColor: `${svc.color}20`, color: svc.color }}
                >
                  {svc.badge}
                </span>
              )}
            </button>
          ))}
        </div>
      </section>

      {/* ═══ Active Service Detail ═══ */}
      <section className="px-[5%] py-12 max-w-7xl mx-auto">
        {/* Service Header */}
        <div
          className="relative rounded-3xl border p-8 md:p-12 mb-10 overflow-hidden transition-all duration-700"
          style={{
            borderColor: `${current.color}30`,
            backgroundColor: "var(--surface)",
          }}
        >
          {/* BG gradient */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: `radial-gradient(ellipse at top right, ${current.color}10 0%, transparent 60%)`,
            }}
          />
          <div className="relative flex flex-col md:flex-row md:items-center gap-6">
            <div
              className="w-20 h-20 rounded-2xl flex items-center justify-center text-4xl shrink-0"
              style={{
                backgroundColor: `${current.color}15`,
                border: `1px solid ${current.color}30`,
              }}
            >
              {current.icon}
            </div>
            <div className="flex-1">
              <div
                className="text-xs font-bold tracking-widest uppercase mb-2"
                style={{ color: current.color }}
              >
                {current.badge}
              </div>
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-2">{current.title}</h2>
              <p className="text-muted text-lg mb-4">{current.tagline}</p>
              <p className="text-muted leading-relaxed max-w-2xl">{current.desc}</p>
            </div>
            <Link
              href="/contact"
              className="shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-lg"
              style={{
                backgroundColor: current.color,
                boxShadow: `0 4px 20px ${current.color}40`,
              }}
            >
              Get Started →
            </Link>
          </div>
        </div>

        {/* Sub Services Grid */}
        <div className="mb-4">
          <h3 className="font-display text-xl font-bold mb-2 text-muted uppercase tracking-wider text-sm">
            What&apos;s Included
          </h3>
        </div>

        <div className={`grid gap-5 mb-12 ${current.subServices.length === 4 ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-4" : current.subServices.length === 5 ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5" : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"}`}>
          {current.subServices.map((sub, i) => (
            <div
              key={i}
              onClick={() => setActiveSubService(i)}
              className="group relative cursor-pointer rounded-2xl border p-6 transition-all duration-400 overflow-hidden"
              style={{
                borderColor: activeSubService === i ? `${current.color}60` : "var(--border)",
                backgroundColor: activeSubService === i ? `${current.color}08` : "var(--surface)",
                boxShadow: activeSubService === i ? `0 8px 32px ${current.color}20` : "none",
                transform: activeSubService === i ? "translateY(-4px)" : "translateY(0)",
              }}
            >
              {/* Hover shine */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{ background: `linear-gradient(135deg, ${current.color}06 0%, transparent 70%)` }}
              />

              {/* Active indicator bar */}
              {activeSubService === i && (
                <div
                  className="absolute top-0 left-0 right-0 h-0.5 rounded-t-2xl"
                  style={{ backgroundColor: current.color }}
                />
              )}

              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-4 transition-all duration-300"
                style={{
                  backgroundColor: activeSubService === i ? `${current.color}20` : "var(--surface2)",
                  border: `1px solid ${activeSubService === i ? current.color + "40" : "var(--border)"}`,
                }}
              >
                {sub.icon}
              </div>
              <h4
                className="font-display font-bold text-lg mb-2 transition-colors duration-300"
                style={{ color: activeSubService === i ? current.color : "var(--text)" }}
              >
                {sub.title}
              </h4>
              <p className="text-muted text-sm leading-relaxed">{sub.desc}</p>

              {/* Expand indicator */}
              <div
                className="mt-4 text-xs font-semibold flex items-center gap-1 transition-all duration-300"
                style={{ color: activeSubService === i ? current.color : "var(--faint)" }}
              >
                {activeSubService === i ? "✓ Selected" : "Click to expand"}
                <span className={`transition-transform duration-300 ${activeSubService === i ? "rotate-90" : ""}`}>→</span>
              </div>
            </div>
          ))}
        </div>

        {/* Expanded Sub-service Details */}
        <div
          className="rounded-3xl border p-8 md:p-10 transition-all duration-500 overflow-hidden"
          style={{
            borderColor: `${current.color}30`,
            background: `linear-gradient(135deg, var(--surface) 0%, ${current.color}06 100%)`,
          }}
        >
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-2/5">
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl mb-5"
                style={{ backgroundColor: `${current.color}20`, border: `1px solid ${current.color}40` }}
              >
                {current.subServices[activeSubService].icon}
              </div>
              <h3
                className="font-display text-2xl md:text-3xl font-bold mb-3"
                style={{ color: current.color }}
              >
                {current.subServices[activeSubService].title}
              </h3>
              <p className="text-muted leading-relaxed text-base mb-6">
                {current.subServices[activeSubService].desc}
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-sm text-white transition-all duration-300 hover:scale-105"
                style={{ backgroundColor: current.color, boxShadow: `0 4px 16px ${current.color}40` }}
              >
                Enquire Now →
              </Link>
            </div>
            <div className="md:w-3/5">
              <div className="text-xs font-bold tracking-widest uppercase text-muted mb-4">What You Get</div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {current.subServices[activeSubService].features.map((feat, j) => (
                  <div
                    key={j}
                    className="flex items-center gap-3 p-3 rounded-xl border transition-all duration-300"
                    style={{
                      borderColor: `${current.color}20`,
                      backgroundColor: `${current.color}08`,
                    }}
                  >
                    <span
                      className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold shrink-0"
                      style={{ backgroundColor: `${current.color}25`, color: current.color }}
                    >
                      ✓
                    </span>
                    <span className="text-sm font-medium">{feat}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ All Services Overview Strip ═══ */}
      <section className="px-[5%] py-16 bg-surface border-y border-border">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="text-xs font-bold tracking-[0.15em] uppercase text-accent mb-2">Everything at a Glance</div>
            <h2 className="font-display text-3xl md:text-4xl font-bold">All My Services</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.map((svc, si) => (
              <div
                key={svc.id}
                className="rounded-2xl border p-6 transition-all duration-500 group hover:-translate-y-1 cursor-pointer"
                style={{
                  borderColor: `${svc.color}25`,
                  backgroundColor: "var(--bg)",
                }}
                onClick={() => { setActiveService(si); setActiveSubService(0); }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-5"
                  style={{ backgroundColor: `${svc.color}15`, border: `1px solid ${svc.color}30` }}
                >
                  {svc.icon}
                </div>
                <h3
                  className="font-display text-xl font-bold mb-2 group-hover:opacity-90 transition-colors"
                  style={{ color: svc.color }}
                >
                  {svc.title}
                </h3>
                <p className="text-muted text-sm mb-4 leading-relaxed">{svc.desc.slice(0, 100)}…</p>
                <div className="flex flex-wrap gap-2">
                  {svc.subServices.map((s, j) => (
                    <span
                      key={j}
                      className="text-[11px] font-medium px-2.5 py-1 rounded-lg"
                      style={{ backgroundColor: `${svc.color}12`, color: svc.color }}
                    >
                      {s.title}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ Process Section ═══ */}
      <section className="px-[5%] py-20 max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <div className="text-xs font-bold tracking-[0.15em] uppercase text-accent mb-2">How It Works</div>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">My Work Process</h2>
          <p className="text-muted text-lg max-w-xl mx-auto">
            A simple, transparent process — from first message to final launch.
          </p>
        </div>

        <div className="relative">
          {/* Connector line (desktop) */}
          <div className="hidden lg:block absolute top-10 left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {process.map((item, i) => (
              <div
                key={i}
                className="relative flex flex-col items-center text-center group"
              >
                {/* Step Circle */}
                <div
                  className="relative w-20 h-20 rounded-full border-2 border-accent flex items-center justify-center text-3xl mb-5 transition-all duration-500 group-hover:scale-110 group-hover:[box-shadow:0_0_20px_#3b82f640] bg-surface z-10"
                >
                  {item.icon}
                  <span
                    className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-accent text-white text-[10px] font-bold flex items-center justify-center"
                  >
                    {item.step}
                  </span>
                </div>
                <h4 className="font-display text-lg font-bold mb-2">{item.title}</h4>
                <p className="text-muted text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ CTA Banner ═══ */}
      <section className="px-[5%] pb-24">
        <div className="max-w-4xl mx-auto relative rounded-3xl overflow-hidden border border-accent/30 bg-surface p-10 md:p-16 text-center">
          {/* BG decoration */}
          <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse at center, #3b82f615 0%, transparent 70%)" }} />
          <div className="absolute top-0 left-0 w-64 h-64 rounded-full pointer-events-none" style={{ background: "radial-gradient(circle, #a855f712 0%, transparent 70%)", filter: "blur(40px)" }} />
          <div className="absolute bottom-0 right-0 w-64 h-64 rounded-full pointer-events-none" style={{ background: "radial-gradient(circle, #10b98112 0%, transparent 70%)", filter: "blur(40px)" }} />

          <div className="relative">
            <div className="text-5xl mb-5">🚀</div>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Ready to Start Your Project?
            </h2>
            <p className="text-muted text-lg mb-8 max-w-xl mx-auto leading-relaxed">
              Let&apos;s talk about what you need. I&apos;ll get back to you within 24 hours with a clear plan and quote.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-accent text-white px-8 py-4 rounded-xl font-bold text-base hover:bg-blue-600 transition-all duration-300 hover:scale-105 hover:shadow-[0_8px_32px_#3b82f640]"
              >
                💬 Let&apos;s Work Together
              </Link>
              <Link
                href="/portfolio"
                className="inline-flex items-center justify-center gap-2 border border-border text-text px-8 py-4 rounded-xl font-bold text-base hover:border-accent hover:text-accent transition-all duration-300"
              >
                🎯 See My Work
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
