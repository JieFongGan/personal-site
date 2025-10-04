"use client";

import { useEffect, useState } from "react";
import { LuSun, LuMoon } from "react-icons/lu";

// Global theme constants
const LIGHT_THEME = "corporate";
const DARK_THEME = "dracula";
const THEME_KEY = "theme";

type ThemeType = typeof LIGHT_THEME | typeof DARK_THEME;

export default function ThemeToggle() {
  const [theme, setTheme] = useState<ThemeType>(LIGHT_THEME);

  // Apply theme to <html> attribute
  const applyTheme = (t: ThemeType) => {
    document.documentElement.setAttribute("data-theme", t);
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem(THEME_KEY) as ThemeType | null;

    if (savedTheme) {
      setTheme(savedTheme);
      applyTheme(savedTheme);
    } else {
      // Check system preference
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      const initialTheme = prefersDark ? DARK_THEME : LIGHT_THEME;

      setTheme(initialTheme);
      applyTheme(initialTheme);
    }

    // Watch for system theme changes
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = (e: MediaQueryListEvent) => {
      if (!localStorage.getItem(THEME_KEY)) {
        const newTheme = e.matches ? DARK_THEME : LIGHT_THEME;
        setTheme(newTheme);
        applyTheme(newTheme);
      }
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  // Update <html> when user toggles
  useEffect(() => {
    applyTheme(theme);
  }, [theme]);

  const toggleTheme = () => {
    const newTheme = theme === LIGHT_THEME ? DARK_THEME : LIGHT_THEME;
    setTheme(newTheme);
    localStorage.setItem(THEME_KEY, newTheme);
  };

  return (
    <div className="fixed top-4 right-4 z-50">
      <button
        onClick={toggleTheme}
        className="btn btn-circle bg-base-200 hover:bg-base-300 border border-base-content/20 shadow transition-transform duration-500 hover:scale-110"
      >
        <div
          className={`transition-all duration-500 transform ${
            theme === LIGHT_THEME ? "rotate-0 scale-100" : "rotate-180 scale-110"
          }`}
        >
          {theme === LIGHT_THEME ? (
            <LuSun className="w-6 h-6 text-amber-400" />
          ) : (
            <LuMoon className="w-6 h-6 text-blue-400" />
          )}
        </div>
      </button>
    </div>
  );
}
