export default function Contact() {
  return (
    <div className="py-20 px-[5%] max-w-7xl mx-auto min-h-[calc(100vh-200px)]">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        {/* Contact Info */}
        <div>
          <h1 className="font-display text-4xl md:text-5xl font-bold leading-tight mb-4">
            Let's Talk About Your Next Project
          </h1>
          <p className="text-muted text-lg leading-relaxed mb-10">
            Fill out the form to get in touch, or use the contact information below. I usually respond within 24 hours.
          </p>

          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-4 bg-surface border border-border rounded-xl p-4">
              <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center text-xl shrink-0">
                📧
              </div>
              <div>
                <strong className="block text-sm font-semibold">Email</strong>
                <span className="text-sm text-muted">jhomathewjhon@gmail.com</span>
              </div>
            </div>

            <div className="flex items-center gap-4 bg-surface border border-border rounded-xl p-4">
              <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center text-xl shrink-0">
                📱
              </div>
              <div>
                <strong className="block text-sm font-semibold">Phone no</strong>
                <span className="text-sm text-muted">+123345677897</span>
              </div>
            </div>

            <div className="flex items-center gap-4 bg-surface border border-border rounded-xl p-4">
              <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center text-xl shrink-0">
                🌐
              </div>
              <div className="flex flex-col">
                <strong className="block text-sm font-semibold">Social Media</strong>
                <div className="flex gap-3 text-sm mt-1">
                  <a href="https://www.instagram.com/web_tech_develpoers/" target="_blank" rel="noopener noreferrer" className="text-muted hover:text-accent transition-colors">Instagram</a>
                  <span className="text-border">•</span>
                  <a href="https://web.facebook.com/profile.php?id=61575062536644" target="_blank" rel="noopener noreferrer" className="text-muted hover:text-accent transition-colors">Facebook</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-surface border border-border rounded-2xl p-8">
          <h3 className="font-display text-xl font-semibold mb-6">Send me a message</h3>

          <form className="flex flex-col gap-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1.5">
                <label htmlFor="name" className="text-sm font-semibold text-muted">Name</label>
                <input
                  type="text"
                  id="name"
                  className="bg-surface2 border border-border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-accent transition-colors"
                  placeholder="John Doe"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label htmlFor="email" className="text-sm font-semibold text-muted">Email</label>
                <input
                  type="email"
                  id="email"
                  className="bg-surface2 border border-border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-accent transition-colors"
                  placeholder="john@example.com"
                />
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="subject" className="text-sm font-semibold text-muted">Subject</label>
              <select
                id="subject"
                className="bg-surface2 border border-border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-accent transition-colors appearance-none"
              >
                <option value="new_project">New Project Setup</option>
                <option value="maintenance">Maintenance</option>
                <option value="other">Other Inquiry</option>
              </select>
            </div>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="message" className="text-sm font-semibold text-muted">Message</label>
              <textarea
                id="message"
                rows={5}
                className="bg-surface2 border border-border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-accent transition-colors resize-y"
                placeholder="Tell me about your project..."
              />
            </div>

            <button
              type="button"
              className="w-full bg-accent hover:bg-blue-600 text-white font-semibold py-3 rounded-lg mt-2 transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
