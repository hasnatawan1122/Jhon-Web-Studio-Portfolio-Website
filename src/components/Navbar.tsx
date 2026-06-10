"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { ThemeToggle } from "./ThemeToggle";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/portfolio", label: "Portfolio" },
    { href: "/about", label: "About" },
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-[5%] h-[68px] bg-bg/85 backdrop-blur-md border-b border-border transition-colors duration-300">
        <Link href="/" className="font-display text-lg font-bold text-text flex items-center gap-2.5 hover:opacity-80 transition-opacity">
          <span className="w-2 h-2 bg-accent rounded-full inline-block animate-pulse" />
          Jhon <span className="text-accent">Web</span> Studio
        </Link>
        
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-8 list-none m-0 p-0">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`text-[0.9rem] font-medium transition-colors ${
                    pathname === link.href ? "text-accent" : "text-muted hover:text-text"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            href="/contact"
            className="bg-accent text-white px-4 py-2 rounded-md font-semibold hover:bg-blue-600 transition-colors text-sm"
          >
            Contact Me
          </Link>
          <div className="w-[1px] h-6 bg-border mx-2" />
          <ThemeToggle />
        </div>

        <div className="md:hidden flex items-center gap-4">
          <ThemeToggle />
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-text p-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-md"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="fixed top-[68px] left-0 right-0 bg-surface border-b border-border z-40 p-6 flex flex-col gap-4 shadow-xl md:hidden">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={`text-base font-medium py-2 ${
                pathname === link.href ? "text-accent" : "text-muted hover:text-text"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setIsOpen(false)}
            className="bg-accent text-white px-4 py-3 rounded-md font-semibold text-center mt-2 hover:bg-blue-600 transition-colors"
          >
            Contact Me
          </Link>
        </div>
      )}
    </>
  );
}
