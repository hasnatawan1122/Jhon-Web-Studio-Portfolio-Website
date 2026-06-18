export default function About() {
  return (
    <div className="py-20 px-[5%] max-w-7xl mx-auto min-h-[calc(100vh-200px)]">
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-16 items-start">
        {/* Photo Section */}
        <div className="lg:sticky lg:top-[90px]">
          <div className="w-full aspect-[3/4] bg-surface border border-border rounded-2xl flex items-center justify-center text-7xl relative overflow-hidden">
            <picture className="w-full h-full block rounded-2xl overflow-hidden">
              <img src="/images/about-photo.png" alt="John Mathew portrait" className="w-full h-full object-cover" />
            </picture>
            <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent pointer-events-none" />
          </div>
          <h2 className="font-display text-xl font-semibold mt-4 text-center">John Mathew</h2>
          <p className="text-sm text-accent text-center mt-1">WordPress & WooCommerce Expert</p>
        </div>

        {/* Content Section */}
        <div>
          <h2 className="font-display text-3xl md:text-4xl font-bold leading-tight mb-6">
            Hi, I'm John Mathew.
            I build high-performance WordPress websites.
          </h2>
          <div className="text-muted text-base leading-relaxed space-y-4 mb-10">
            <p>
              I started my journey in web development over <strong>7+ years ago</strong>. What began as a passion for coding quickly evolved into a full-fledged career. Over the past seven years, I've had the privilege of working on a diverse range of projects—from simple business sites to complex, high-traffic e-commerce platforms.
            </p>
            <p>
              This journey has allowed me to master the intricacies of web performance, responsive design, and user experience. My approach is simple: understand the business goal, design a clean interface, and build it on a solid, fast, and secure foundation. I don't just build websites; I build tools that help your business grow.
            </p>
          </div>

          <h3 className="font-display text-2xl font-semibold mb-6">Working History</h3>
          <div className="space-y-8 mb-12">
            {/* History Item 1 */}
            <div className="border-l-2 border-accent pl-6 relative">
              <div className="absolute w-3 h-3 bg-accent rounded-full -left-[7px] top-1.5 shadow-[0_0_10px_rgba(59,130,246,0.8)]" />
              <h4 className="font-bold text-xl text-text">Senior Web Developer</h4>
              <p className="text-sm font-semibold text-accent mb-3">Freelance & Agency Work • 2025 - Present</p>
              <p className="text-muted text-sm leading-relaxed">
                Led the development of numerous custom WordPress themes and WooCommerce stores. Specialised in optimizing website performance, implementing advanced SEO strategies, and delivering pixel-perfect designs that drive conversions.
              </p>
            </div>
            
            {/* History Item 2 */}
            <div className="border-l-2 border-border pl-6 relative">
              <div className="absolute w-3 h-3 bg-surface border-2 border-muted rounded-full -left-[7px] top-1.5" />
              <h4 className="font-bold text-xl text-text">Frontend Developer</h4>
              <p className="text-sm font-semibold text-muted mb-3">PS Estimation llc • 2022 - 2024</p>
              <p className="text-muted text-sm leading-relaxed">
                Collaborated with design and backend teams to build responsive, user-friendly web applications. Focused on translating Figma designs into clean, maintainable HTML, CSS, and JavaScript code.
              </p>
            </div>
            
            {/* History Item 3 */}
            <div className="border-l-2 border-border pl-6 relative">
              <div className="absolute w-3 h-3 bg-surface border-2 border-muted rounded-full -left-[7px] top-1.5" />
              <h4 className="font-bold text-xl text-text">Junior Web Developer</h4>
              <p className="text-sm font-semibold text-muted mb-3">Neptune Solutions • 2019 - 2022</p>
              <p className="text-muted text-sm leading-relaxed">
                Assisted in the maintenance and updates of client websites. Gained hands-on experience with WordPress core, basic PHP, and plugin customization, laying the groundwork for my development career.
              </p>
            </div>
          </div>

          <h3 className="font-display text-2xl font-semibold mb-4">Core Skills</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {[
              "WordPress Core", "WooCommerce", "PHP & MySQL", 
              "HTML5 & CSS3", "JavaScript", "React / Next.js",
              "Tailwind CSS", "Elementor Pro", "SEO Optimization",
              "Web Performance", "Git & GitHub", "Wix to WP"
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
