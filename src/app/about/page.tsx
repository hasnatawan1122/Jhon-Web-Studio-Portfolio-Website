export default function About() {
  return (
    <div className="py-20 px-[5%] max-w-7xl mx-auto min-h-[calc(100vh-200px)]">
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-16 items-start">
        {/* Photo Section */}
        <div className="lg:sticky lg:top-[90px]">
          <div className="w-full aspect-[3/4] bg-surface border border-border rounded-2xl flex items-center justify-center text-7xl relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent pointer-events-none" />
            👨‍💻
          </div>
          <h2 className="font-display text-xl font-semibold mt-4 text-center">Jhon</h2>
          <p className="text-sm text-accent text-center mt-1">WordPress & WooCommerce Expert</p>
        </div>

        {/* Content Section */}
        <div>
          <h2 className="font-display text-3xl md:text-4xl font-bold leading-tight mb-6">
            Hi, I'm Jhon. I build high-performance WordPress websites.
          </h2>
          <div className="text-muted text-base leading-relaxed space-y-4 mb-10">
            <p>
              I started my journey in web development over 3 years ago. Since then, I've helped dozens of businesses, from local shops to large eCommerce brands, establish a strong online presence.
            </p>
            <p>
              My approach is simple: understand the business goal, design a clean interface, and build it on a solid, fast, and secure WordPress foundation. I don't just build websites; I build tools that help your business grow.
            </p>
          </div>

          <h3 className="font-display text-2xl font-semibold mb-4">Core Skills</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {[
              "WordPress Core", "WooCommerce", "PHP & MySQL", 
              "HTML5 & CSS3", "JavaScript", "React / Next.js",
              "Tailwind CSS", "Elementor Pro", "SEO Optimization",
              "Web Performance", "Git & GitHub", "Figma to WP"
            ].map((skill, i) => (
              <div key={i} className="bg-surface border border-border rounded-lg px-4 py-3 text-sm font-medium flex items-center gap-2">
                <span className="w-2 h-2 bg-accent rounded-full shrink-0" />
                {skill}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
