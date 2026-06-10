"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="w-9 h-9" />;
  }

  const isDark = theme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="relative flex items-center justify-center w-9 h-9 rounded-full bg-surface2 border border-border text-text hover:text-accent transition-colors overflow-hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
      aria-label="Toggle Theme"
    >
      <div
        className={`absolute transition-all duration-300 transform ${
          isDark ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
        }`}
      >
        <Moon className="w-4 h-4" />
      </div>
      <div
        className={`absolute transition-all duration-300 transform ${
          isDark ? "translate-y-full opacity-0" : "translate-y-0 opacity-100"
        }`}
      >
        <Sun className="w-4 h-4" />
      </div>
    </button>
  );
}
