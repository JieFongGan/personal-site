"use client";

import { useEffect, useState, useCallback } from "react";
import { LuSun, LuMoon, LuChevronDown } from "react-icons/lu";

const THEME_KEY = "theme";
const LIGHT_DEFAULT = "light";
const DARK_DEFAULT = "dark";

const THEMES = {
  light: ["light", "corporate", "cupcake", "retro", "lemonade", "autumn", "cyberpunk"],
  dark: ["dark", "business", "dracula", "luxury", "halloween", "forest", "synthwave"],
};

const ALL_DARK_THEMES = THEMES.dark;

export default function ThemeToggle() {
  const [theme, setTheme] = useState<string>(LIGHT_DEFAULT);

  const applyTheme = useCallback((t: string) => {
    document.documentElement.setAttribute("data-theme", t);
  }, []);

  const getSystemTheme = useCallback(() => {
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    return prefersDark ? DARK_DEFAULT : LIGHT_DEFAULT;
  }, []);

  const handleThemeChange = useCallback((newTheme: string) => {
    setTheme(newTheme);
    sessionStorage.setItem(THEME_KEY, newTheme);
    (document.activeElement as HTMLElement)?.blur();
  }, []);

  // Initialize theme
  useEffect(() => {
    const saved = sessionStorage.getItem(THEME_KEY);
    const initial = saved || getSystemTheme();
    setTheme(initial);
    applyTheme(initial);
  }, [applyTheme, getSystemTheme]);

  // Listen to system theme changes
  useEffect(() => {
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    
    const handler = (e: MediaQueryListEvent) => {
      if (!sessionStorage.getItem(THEME_KEY)) {
        const sysTheme = e.matches ? DARK_DEFAULT : LIGHT_DEFAULT;
        setTheme(sysTheme);
        applyTheme(sysTheme);
      }
    };

    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, [applyTheme]);

  // Apply theme when it changes
  useEffect(() => {
    applyTheme(theme);
  }, [theme, applyTheme]);

  const isDark = ALL_DARK_THEMES.includes(theme);

  return (
    <div className="fixed top-4 right-4 z-50">
      <div className="dropdown dropdown-end">
        <div
          tabIndex={0}
          role="button"
          className="btn btn-sm sm:btn-md btn-glass border border-base-content/10 gap-2 normal-case shadow-md hover:shadow-lg transition-all"
          aria-label="Select theme"
        >
          <div
            className={`transition-transform duration-500 ${
              isDark ? "rotate-180" : "rotate-0"
            }`}
          >
            {isDark ? (
              <LuMoon className="w-5 h-5 text-blue-400" />
            ) : (
              <LuSun className="w-5 h-5 text-amber-400" />
            )}
          </div>
          <span className="hidden sm:inline font-medium capitalize">{theme}</span>
          <LuChevronDown className="w-4 h-4 opacity-70 hidden sm:block" />
        </div>

        <ul
          tabIndex={0}
          className="dropdown-content menu p-2 mt-2 shadow-xl bg-base-200/90 backdrop-blur-md rounded-box w-48 sm:w-56 border border-base-content/10 max-h-80 overflow-y-auto"
        >
          {Object.entries(THEMES).map(([category, themeList]) => (
            <li key={category}>
              <div className="menu-title">
                <span className="text-xs opacity-60 capitalize">{category} Themes</span>
              </div>
              <ul>
                {themeList.map((t) => (
                  <li key={t}>
                    <button
                      onClick={() => handleThemeChange(t)}
                      className={`capitalize ${theme === t ? "active font-semibold" : ""}`}
                    >
                      {t}
                    </button>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}