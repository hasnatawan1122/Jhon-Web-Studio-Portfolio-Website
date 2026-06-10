export default function Services() {
  const services = [
    {
      icon: "🌐",
      title: "WordPress Website Development",
      desc: "End-to-end WordPress development — from design to deployment. I build websites that are beautiful, functional, and easy for you to manage.",
      features: ["Custom theme development", "Page builder integration (Elementor, Gutenberg)", "Plugin setup & configuration", "Contact forms & integrations", "Mobile responsive design"]
    },
    {
      icon: "🛒",
      title: "WooCommerce Store Setup",
      desc: "Launch your online store with WooCommerce. I set up everything you need to start selling — from product pages to payment gateways.",
      features: ["Full WooCommerce setup", "Product catalog & categories", "Payment gateway integration", "Shipping & tax configuration", "Order management system"]
    },
    {
      icon: "🎨",
      title: "Theme Customization",
      desc: "Already have a theme but want a unique look? I customize WordPress themes to match your brand perfectly.",
      features: ["Brand color & font implementation", "Layout adjustments", "Custom CSS styling", "Child theme development", "Header & footer customization"]
    },
    {
      icon: "🔍",
      title: "SEO & Performance",
      desc: "Optimize your website for search engines and speed. I implement technical SEO best practices to help you rank higher.",
      features: ["On-page SEO setup (Yoast / RankMath)", "Site speed optimization", "Image compression & lazy loading", "Caching & CDN setup", "Core Web Vitals improvement"]
    },
    {
      icon: "🔒",
      title: "Security & Maintenance",
      desc: "Keep your website safe, updated, and running smoothly with my ongoing maintenance and security services.",
      features: ["WordPress core & plugin updates", "Malware scanning & removal", "SSL certificate setup", "Daily / weekly backups", "Uptime monitoring"]
    },
    {
      icon: "🚀",
      title: "Website Migration",
      desc: "Moving to a new host or rebuilding your site? I handle WordPress migrations with zero downtime and no data loss.",
      features: ["Host-to-host migration", "HTTP to HTTPS migration", "URL structure migration", "Database & file transfer", "301 redirects setup"]
    }
  ];

  return (
    <div className="py-20 px-[5%] max-w-7xl mx-auto">
      <div className="mb-14">
        <div className="text-xs font-bold tracking-[0.12em] uppercase text-accent mb-2">Services</div>
        <h1 className="font-display text-4xl md:text-5xl font-bold leading-tight mb-4">
          What I Offer
        </h1>
        <p className="text-muted text-lg max-w-[520px] leading-relaxed">
          Professional web development services designed to help your business grow online.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
        {services.map((service, i) => (
          <div key={i} className="bg-surface border border-border rounded-xl p-8 hover:border-accent hover:-translate-y-1 transition-all duration-300">
            <div className="w-12 h-12 bg-accent/10 border border-accent/20 rounded-xl flex items-center justify-center text-2xl mb-6">
              {service.icon}
            </div>
            <h3 className="font-display text-xl font-semibold mb-3">{service.title}</h3>
            <p className="text-muted text-sm leading-relaxed mb-6">{service.desc}</p>
            <ul className="flex flex-col gap-2">
              {service.features.map((feature, j) => (
                <li key={j} className="flex items-start gap-2 text-sm text-muted">
                  <span className="text-accent font-bold">→</span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <hr className="border-t border-border mb-20" />

      {/* Process Section */}
      <div>
        <div className="mb-14">
          <div className="text-xs font-bold tracking-[0.12em] uppercase text-accent mb-2">My Process</div>
          <h2 className="font-display text-3xl md:text-4xl font-bold leading-tight mb-4">
            How I Work
          </h2>
          <p className="text-muted text-lg max-w-[520px] leading-relaxed">
            A simple, transparent process from first contact to final launch.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {[
            { step: "01", title: "Discovery", desc: "We talk about your goals, audience, and requirements." },
            { step: "02", title: "Planning", desc: "I put together a clear scope, timeline, and cost estimate." },
            { step: "03", title: "Development", desc: "I build your website with clean code and best practices." },
            { step: "04", title: "Review", desc: "You review the work and request any changes." },
            { step: "05", title: "Launch", desc: "Your site goes live. I handle deployment and final checks." }
          ].map((item, i) => (
            <div key={i} className="bg-surface border border-border rounded-xl p-6 relative">
              <div className="font-display text-5xl font-bold text-border leading-none mb-4">{item.step}</div>
              <h4 className="font-display text-lg font-semibold mb-2">{item.title}</h4>
              <p className="text-muted text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
