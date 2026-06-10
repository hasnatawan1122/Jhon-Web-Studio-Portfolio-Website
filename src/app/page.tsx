import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden min-h-[calc(100vh-68px)] flex items-center justify-center py-24 px-[5%]">
        {/* Background Featured Image with Low Transparency */}
        <div className="absolute inset-0 z-0">
          <Image 
            src="/hero.jpg" 
            alt="Hero Background" 
            fill
            className="object-cover opacity-25 dark:opacity-30 pointer-events-none"
            priority
          />
          {/* Subtle gradient overlay to ensure text readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-bg/60 via-transparent to-bg pointer-events-none" />
        </div>

        <div className="relative z-10 w-full flex flex-col items-center text-center max-w-4xl mx-auto mt-[-5vh]">
          {/* Text Content */}
          <div className="inline-flex items-center gap-2 bg-surface/50 backdrop-blur-sm border border-border text-accent text-xs font-bold tracking-wider uppercase px-5 py-2 rounded-full mb-8 shadow-sm">
            ✦ WordPress & WooCommerce Developer
          </div>
          
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-8">
            Building <em className="not-italic text-accent">Websites</em> That Work For Your Business
          </h1>
          
          <p className="text-xl md:text-2xl text-muted mb-12 max-w-[700px] mx-auto leading-relaxed font-medium">
            Hi, I'm Jhon — a freelance WordPress developer helping businesses and entrepreneurs launch fast, beautiful, and conversion-focused websites.
          </p>
          
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            <span className="bg-surface/60 backdrop-blur-sm border border-border text-text text-sm font-semibold px-5 py-2 rounded-lg">⚡ WordPress Expert</span>
            <span className="bg-surface/60 backdrop-blur-sm border border-border text-text text-sm font-semibold px-5 py-2 rounded-lg">🛒 WooCommerce Stores</span>
            <span className="bg-surface/60 backdrop-blur-sm border border-border text-text text-sm font-semibold px-5 py-2 rounded-lg">📱 Mobile Responsive</span>
            <span className="bg-surface/60 backdrop-blur-sm border border-border text-text text-sm font-semibold px-5 py-2 rounded-lg">🔍 SEO Ready</span>
          </div>

          <Link href="/contact" className="inline-block bg-accent hover:bg-blue-600 text-white font-bold text-lg px-10 py-4 rounded-xl shadow-lg hover:shadow-blue-500/25 transition-all hover:-translate-y-1">
            Start Your Project
          </Link>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-surface border-y border-border py-12 px-[5%] relative z-10">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div>
            <div className="font-display text-4xl md:text-5xl font-bold text-accent">30+</div>
            <div className="text-sm font-medium text-muted mt-2 tracking-wide uppercase">Projects Delivered</div>
          </div>
          <div>
            <div className="font-display text-4xl md:text-5xl font-bold text-accent">25+</div>
            <div className="text-sm font-medium text-muted mt-2 tracking-wide uppercase">Happy Clients</div>
          </div>
          <div>
            <div className="font-display text-4xl md:text-5xl font-bold text-accent">3+</div>
            <div className="text-sm font-medium text-muted mt-2 tracking-wide uppercase">Years Experience</div>
          </div>
          <div>
            <div className="font-display text-4xl md:text-5xl font-bold text-accent">100%</div>
            <div className="text-sm font-medium text-muted mt-2 tracking-wide uppercase">Client Satisfaction</div>
          </div>
        </div>
      </section>

      {/* What I Do Section Summary */}
      <section className="relative py-24 px-[5%] w-full overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image 
            src="/services.jpg" 
            alt="Services Background" 
            fill
            className="object-cover opacity-35 dark:opacity-40 pointer-events-none"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-bg/90 via-bg/60 to-bg/90 pointer-events-none" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto w-full">
          <div className="mb-16 text-center md:text-left">
            <div className="text-sm font-bold tracking-[0.15em] uppercase text-accent mb-3">What I Do</div>
            <h2 className="font-display text-4xl md:text-5xl font-bold leading-tight mb-6">
              Services Built Around<br className="hidden md:block" />Your Goals
            </h2>
            <p className="text-muted text-lg max-w-[600px] leading-relaxed mx-auto md:mx-0">
              From a simple blog to a full-scale eCommerce store, I craft WordPress solutions that are clean, fast, and easy to manage.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: "🌐", title: "WordPress Development", desc: "Custom WordPress websites built from scratch or using premium themes." },
              { icon: "🛒", title: "WooCommerce Stores", desc: "Full-featured online stores with product management and payment gateways." },
              { icon: "⚡", title: "Speed Optimization", desc: "Performance audits and optimizations to ensure your site loads fast." },
              { icon: "🔧", title: "Maintenance & Support", desc: "Ongoing maintenance, plugin updates, and technical support." }
            ].map((service, i) => (
              <div key={i} className="bg-surface/60 backdrop-blur-md border border-border rounded-2xl p-8 hover:border-accent hover:shadow-xl hover:shadow-accent/5 hover:-translate-y-2 transition-all duration-300 group">
                <div className="w-14 h-14 bg-accent/10 border border-accent/20 rounded-xl flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="font-display text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-muted text-sm leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <hr className="border-t border-border mx-[5%]" />

      {/* Quick CTA */}
      <section className="py-32 px-[5%] text-center">
        <div className="text-sm font-bold tracking-[0.15em] uppercase text-accent mb-4">Ready to Start?</div>
        <h2 className="font-display text-4xl md:text-5xl font-bold max-w-[600px] mx-auto mb-6">
          Let's Build Something<br />Great Together
        </h2>
        <p className="text-muted text-lg max-w-[500px] mx-auto mb-10">
          Have a project in mind? I'd love to hear about it. Let's talk about how I can help.
        </p>
        <Link href="/contact" className="inline-block bg-accent hover:bg-blue-600 text-white font-bold text-lg px-10 py-4 rounded-xl shadow-lg hover:shadow-blue-500/25 transition-all hover:-translate-y-1">
          Get in Touch
        </Link>
      </section>
    </div>
  );
}
