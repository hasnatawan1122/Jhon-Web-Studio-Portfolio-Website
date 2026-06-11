import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-surface border-t border-border py-10 px-[5%] flex flex-col sm:flex-row items-center justify-between gap-4 mt-auto transition-colors duration-300">
      <div className="font-display font-bold text-base text-text">
        Jhon <span className="text-accent">Web</span> Studio
      </div>
      <p className="text-muted text-sm text-center sm:text-left">
        &copy; {new Date().getFullYear()} Jhon Web Studio. All rights reserved.
      </p>
      <div className="flex gap-6">
        {/* Replace these URLs with your actual profile links */}
        <Link href="https://instagram.com/YOUR_USERNAME" target="_blank" className="text-muted hover:text-accent transition-colors text-sm">
          Instagram
        </Link>
        <Link href="https://facebook.com/YOUR_USERNAME" target="_blank" className="text-muted hover:text-accent transition-colors text-sm">
          Facebook
        </Link>
        <Link href="mailto:your.email@example.com" className="text-muted hover:text-accent transition-colors text-sm">
          Email
        </Link>
      </div>
    </footer>
  );
}
