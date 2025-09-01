"use client";

import { useEffect, useState } from "react";
import { LuSun, LuMoon } from "react-icons/lu";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<"cupcake" | "business">("cupcake");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as "cupcake" | "business" | null;

    if (savedTheme) {
      // If user manually set theme, use it
      setTheme(savedTheme);
      document.documentElement.setAttribute("data-theme", savedTheme);
    } else {
      // No saved theme → check system preference
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

      if (prefersDark) {
        setTheme("business");
        document.documentElement.setAttribute("data-theme", "business");
      } else {
        // Fallback to time-based theme
        const hour = new Date().getHours();
        const timeBasedTheme = hour >= 18 || hour < 6 ? "business" : "cupcake";
        setTheme(timeBasedTheme);
        document.documentElement.setAttribute("data-theme", timeBasedTheme);
      }
    }

    // Listen for system theme changes
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = (e: MediaQueryListEvent) => {
      if (!localStorage.getItem("theme")) {
        const newTheme = e.matches ? "business" : "cupcake";
        setTheme(newTheme);
        document.documentElement.setAttribute("data-theme", newTheme);
      }
    };

    mediaQuery.addEventListener("change", handleChange);

    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    const newTheme = theme === "cupcake" ? "business" : "cupcake";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  return (
    <div className="fixed top-4 right-4 z-50 glass rounded-full">
      <button onClick={toggleTheme} className="btn btn-circle btn-ghost">
        {theme === "cupcake" ? (
          <LuSun className="w-6 h-6" />
        ) : (
          <LuMoon className="w-6 h-6" />
        )}
      </button>
    </div>
  );
}