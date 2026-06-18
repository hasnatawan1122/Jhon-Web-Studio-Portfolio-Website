import Image from "next/image";
import Link from "next/link";
import { HeroSlider } from "@/components/HeroSlider";

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section — animated slider */}
      <HeroSlider />

      {/* Stats Bar */}
      <section className="bg-surface border-y border-border py-12 px-[5%] relative z-10">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div>
            <div className="font-display text-4xl md:text-5xl font-bold text-accent">77+</div>
            <div className="text-sm font-medium text-muted mt-2 tracking-wide uppercase">Projects Delivered</div>
          </div>
          <div>
            <div className="font-display text-4xl md:text-5xl font-bold text-accent">55+</div>
            <div className="text-sm font-medium text-muted mt-2 tracking-wide uppercase">Trusted Clients</div>
          </div>
          <div>
            <div className="font-display text-4xl md:text-5xl font-bold text-accent">7+</div>
            <div className="text-sm font-medium text-muted mt-2 tracking-wide uppercase">Years Experience</div>
          </div>
          <div>
            <div className="font-display text-4xl md:text-5xl font-bold text-accent">98.9%</div>
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
            className="object-cover opacity-55 pointer-events-none"
          />
          {/* Dark overlay — just enough to keep text readable, not hide the image */}
          <div className="absolute inset-0 bg-black/55 pointer-events-none" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto w-full">
          <div className="mb-16 text-center md:text-left">
            <div className="text-sm font-bold tracking-[0.15em] uppercase text-blue-400 mb-3">What I Do</div>
            <h2 className="font-display text-4xl md:text-5xl font-bold leading-tight mb-6 text-white">
              Services Built Around<br className="hidden md:block" />Your Goals
            </h2>
            <p className="text-gray-300 text-lg max-w-[600px] leading-relaxed mx-auto md:mx-0">
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
              <div key={i} className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 hover:border-blue-400 hover:shadow-xl hover:shadow-blue-500/20 hover:-translate-y-2 transition-all duration-300 group">
                <div className="w-14 h-14 bg-blue-500/20 border border-blue-400/30 rounded-xl flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="font-display text-xl font-bold mb-3 text-white">{service.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{service.desc}</p>
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
