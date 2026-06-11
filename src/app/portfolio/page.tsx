"use client";

import { useState } from "react";
import Link from "next/link";

// Define categories for filtering
const categories = ["All", "WordPress", "WooCommerce", "SEO & Speed"];

// Sample premium client projects
const projects = [
  {
    title: "Apex Gym & Fitness",
    category: "WordPress",
    niche: "Business Website",
    desc: "A high-conversion multi-page WordPress website with custom class booking schedules, membership registration, and contact forms.",
    tags: ["WordPress", "Elementor Pro", "Booking Engine", "Responsive Design"],
    color: "from-blue-600 to-indigo-600",
    gradient: "from-blue-500/10 to-indigo-500/5",
    link: "#",
    clientReview: "“Jhon delivered exactly what we needed. The booking system runs flawlessly and our members love the new look!” — Sarah K., Manager",
  },
  {
    title: "Velo Gear E-Store",
    category: "WooCommerce",
    niche: "WooCommerce Store",
    desc: "A modern, high-performance cycling equipment store built on WooCommerce featuring custom product attributes, Stripe payments, and automated invoice systems.",
    tags: ["WooCommerce", "Payment Gateways", "Product Listing", "Speed Optimized"],
    color: "from-purple-600 to-pink-600",
    gradient: "from-purple-500/10 to-pink-500/5",
    link: "#",
    clientReview: "“Sales are up by 25% since Jhon optimized our checkout process and layout. Outstanding WooCommerce developer.” — Mark S., Founder",
  },
  {
    title: "EduLearn LMS Platform",
    category: "WordPress",
    niche: "E-Learning Portal",
    desc: "A complete education management system featuring course enrollments, online video lessons, interactive quizzes, and certificates.",
    tags: ["WordPress", "LearnDash LMS", "Custom Theme", "Stripe Checkout"],
    color: "from-teal-600 to-emerald-600",
    gradient: "from-teal-500/10 to-emerald-500/5",
    link: "#",
    clientReview: "“Jhon was a pleasure to work with. He built a complex LMS portal that is easy for both teachers and students to use.” — Dr. Alan T., Director",
  },
  {
    title: "EcoGlow Cosmetics",
    category: "WooCommerce",
    niche: "E-Commerce",
    desc: "An aesthetic, minimalist cosmetics brand store with customized cart flows, product hunting curation, and optimized product variation selectors.",
    tags: ["WooCommerce", "Product Hunting", "Cart Optimization", "SSL Secure"],
    color: "from-rose-500 to-orange-500",
    gradient: "from-rose-500/10 to-orange-500/5",
    link: "#",
    clientReview: "“Highly professional. The page loads instantly and the layout displays our premium skincare range perfectly.” — Jessica L., Owner",
  },
  {
    title: "SaaSify Portal",
    category: "SEO & Speed",
    niche: "Technical SEO & Speed Fix",
    desc: "Full performance overhaul for a SaaS landing page, increasing Core Web Vitals performance score from 35 to 98 and optimizing indexability.",
    tags: ["Technical SEO", "Speed Optimization", "Core Web Vitals", "Gzip/CDN"],
    color: "from-cyan-500 to-blue-500",
    gradient: "from-cyan-500/10 to-blue-500/5",
    link: "#",
    clientReview: "“Our organic traffic doubled in just 3 months after Jhon resolved our indexation errors and page load speeds.” — David R., CMO",
  },
  {
    title: "HealthLink Wellness",
    category: "WordPress",
    niche: "Blog & Personal Brand",
    desc: "A fast-loading, ad-optimized blog website utilizing Gutenberg blocks and custom schemas for top-tier Google search visibility.",
    tags: ["WordPress", "Gutenberg", "RankMath SEO", "AdSense Ready"],
    color: "from-amber-500 to-yellow-600",
    gradient: "from-amber-500/10 to-yellow-600/5",
    link: "#",
    clientReview: "“Easy to publish articles, looks super clean, and ranking well on Google for our primary keywords.” — Elena G., Editor",
  },
];

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState("All");

  const filteredProjects = activeTab === "All"
    ? projects
    : projects.filter((project) => project.category === activeTab);

  return (
    <div className="min-h-screen">
      {/* ═══ Header Section ═══ */}
      <section className="relative py-20 px-[5%] overflow-hidden">
        {/* Animated background orbs */}
        <div className="absolute top-0 right-10 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[90px] pointer-events-none" />
        <div className="absolute bottom-0 left-10 w-[300px] h-[300px] bg-purple-500/5 rounded-full blur-[80px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-accent/20 bg-accent/5 text-xs font-bold tracking-widest uppercase text-accent mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
            My Portfolio
          </div>
          <h1 className="font-display text-5xl md:text-7xl font-bold leading-tight mb-6">
            Recent Client{" "}
            <span className="bg-gradient-to-r from-accent to-purple-500 bg-clip-text text-transparent">
              Works
            </span>
          </h1>
          <p className="text-muted text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Take a look at real-world WordPress & WooCommerce stores, business websites, and SEO campaigns I’ve delivered for clients globally.
          </p>
        </div>
      </section>

      {/* ═══ Filter Tabs ═══ */}
      <section className="px-[5%] pb-12 max-w-7xl mx-auto">
        <div className="flex flex-wrap justify-center gap-3">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveTab(category)}
              className={`px-5 py-2.5 rounded-xl font-semibold text-sm transition-all duration-300 ${
                activeTab === category
                  ? "bg-accent text-white shadow-lg shadow-accent/20 scale-105"
                  : "bg-surface border border-border text-muted hover:text-text hover:border-accent/50"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </section>

      {/* ═══ Portfolio Grid ═══ */}
      <section className="px-[5%] pb-24 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className="group bg-surface border border-border rounded-2xl overflow-hidden hover:border-accent/40 transition-all duration-500 flex flex-col h-full"
            >
              {/* Dynamic Gradient Header Visual */}
              <div className={`h-48 bg-gradient-to-br ${project.color} p-6 relative flex flex-col justify-between overflow-hidden`}>
                {/* Visual grid pattern */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:14px_24px] pointer-events-none" />
                
                {/* Floating orb/glow inside card header */}
                <div className="absolute -bottom-8 -right-8 w-24 h-24 bg-white/10 rounded-full blur-xl group-hover:scale-150 transition-transform duration-700 pointer-events-none" />
                
                <span className="bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-bold px-3 py-1.5 rounded-lg w-max z-10">
                  {project.niche}
                </span>

                <div className="z-10">
                  <h3 className="font-display text-2xl font-bold text-white leading-tight">
                    {project.title}
                  </h3>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <p className="text-muted text-sm leading-relaxed mb-5">
                    {project.desc}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, tIndex) => (
                      <span
                        key={tIndex}
                        className="text-[11px] font-semibold px-2.5 py-1 rounded-md bg-surface2 border border-border text-muted group-hover:text-accent group-hover:border-accent/20 transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Client Review Box */}
                {project.clientReview && (
                  <div className="border-l-2 border-accent/30 bg-accent/[0.02] p-3 rounded-r-lg mb-6">
                    <p className="text-muted text-[12px] italic leading-relaxed">
                      {project.clientReview}
                    </p>
                  </div>
                )}

                {/* Action button */}
                <div className="pt-4 border-t border-border flex items-center justify-between">
                  <span className="text-xs font-bold text-muted group-hover:text-accent transition-colors">
                    {project.category}
                  </span>
                  <Link
                    href={project.link}
                    className="inline-flex items-center gap-1 text-sm font-semibold text-accent hover:underline group-hover:translate-x-1 transition-transform"
                  >
                    View details &rarr;
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ═══ CTA Banner ═══ */}
      <section className="px-[5%] pb-24">
        <div className="max-w-4xl mx-auto relative rounded-3xl overflow-hidden border border-accent/20 bg-surface p-10 md:p-16 text-center">
          <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse at center, var(--accent) 5%, transparent 70%)", opacity: 0.08 }} />
          
          <div className="relative">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Need a Custom Solution for Your Business?
            </h2>
            <p className="text-muted text-base md:text-lg mb-8 max-w-xl mx-auto leading-relaxed">
              Whether you need an online WooCommerce store, a secure WordPress website, or better Google rankings, I am here to help you build it.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-accent text-white px-8 py-3.5 rounded-xl font-bold hover:bg-blue-600 transition-all duration-300 hover:scale-105"
              >
                💬 Hire Me
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center gap-2 border border-border text-text px-8 py-3.5 rounded-xl font-bold hover:border-accent hover:text-accent transition-all duration-300"
              >
                🛠️ Browse Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
