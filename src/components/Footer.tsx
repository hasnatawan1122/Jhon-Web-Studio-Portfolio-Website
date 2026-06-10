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
        <Link href="https://twitter.com" target="_blank" className="text-muted hover:text-accent transition-colors text-sm">
          Twitter
        </Link>
        <Link href="https://linkedin.com" target="_blank" className="text-muted hover:text-accent transition-colors text-sm">
          LinkedIn
        </Link>
        <Link href="https://github.com" target="_blank" className="text-muted hover:text-accent transition-colors text-sm">
          GitHub
        </Link>
      </div>
    </footer>
  );
}
