"use client";

import { useEffect, useState, useCallback } from "react";
import { LuSun, LuMoon, LuChevronDown } from "react-icons/lu";

const THEME_KEY = "theme";
const LIGHT_DEFAULT = "light";
const DARK_DEFAULT = "dark";

const THEMES = {
  Light: ["light", "corporate", "cupcake", "retro", "lemonade", "autumn", "valentine"],
  Dark: ["dark", "business", "dracula", "luxury", "halloween", "forest", "synthwave"],
};

const ALL_DARK_THEMES = THEMES.Dark;

export default function ThemeToggle() {
  const [theme, setTheme] = useState<string>(LIGHT_DEFAULT);
  const [open, setOpen] = useState(false);

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

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (!(e.target as HTMLElement).closest(".theme-dropdown")) {
        setOpen(false);
      }
    };
    if (open) document.addEventListener("mousedown", handleClickOutside);
    else document.removeEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [open]);

  const isDark = ALL_DARK_THEMES.includes(theme);

  return (
    <div className="fixed top-3 sm:top-4 right-3 sm:right-4 z-[60] theme-dropdown">
      <div className="dropdown dropdown-bottom dropdown-end">
        <button
          onClick={() => setOpen((prev) => !prev)}
          className="btn btn-glass border border-base-content/10 gap-2 normal-case shadow-md hover:shadow-lg transition-all"
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
          <LuChevronDown
            className={`w-4 h-4 opacity-70 hidden sm:block transition-transform ${
              open ? "rotate-180" : ""
            }`}
          />
        </button>

        {open && (
          <ul
            className="dropdown-content menu xl:menu-horizontal bg-base-200/90 p-2 mt-2 z-1 lg:min-w-max shadow-xl backdrop-blur-md"
          >
            {Object.entries(THEMES).map(([category, themeList]) => (
              <li key={category}>
                <h2 className="menu-title">{category} Themes</h2>
                <ul>
                  {themeList.map((t) => (
                    <li key={t}>
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          handleThemeChange(t);
                        }}
                        className={`capitalize w-full text-left ${
                          theme === t ? "active font-semibold" : ""
                        }`}
                      >
                        {t}
                      </button>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}