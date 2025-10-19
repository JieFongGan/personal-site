"use client";

import { useEffect, useState, useCallback } from "react";
import { LuSun, LuMoon, LuChevronDown, LuLoader } from "react-icons/lu";

const LIGHT_DEFAULT = "light";
const DARK_DEFAULT = "dark";

const THEMES = {
  Light: ["light", "corporate", "cupcake", "retro", "lemonade", "autumn", "valentine"],
  Dark: ["dark", "business", "dracula", "luxury", "halloween", "forest", "synthwave"],
};

const ALL_DARK_THEMES = THEMES.Dark;

export default function ThemeToggle() {
  const [theme, setTheme] = useState<string>("unknown"); // start unknown

  const applyTheme = useCallback((t: string) => {
    if (t === "unknown") return; // don't apply until known
    document.documentElement.setAttribute("data-theme", t);
  }, []);

  const getSystemTheme = useCallback(() => {
    if (typeof window === "undefined") return "unknown";
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? DARK_DEFAULT
      : LIGHT_DEFAULT;
  }, []);

  // detect theme after mount
  useEffect(() => {
    const detected = getSystemTheme();
    if (detected !== "unknown") {
      setTheme(detected);
      applyTheme(detected);
    }
  }, [applyTheme, getSystemTheme]);

  // listen for OS changes
  useEffect(() => {
    if (theme === "unknown") return;
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    const handler = (e: MediaQueryListEvent) => {
      const sysTheme = e.matches ? DARK_DEFAULT : LIGHT_DEFAULT;
      setTheme(sysTheme);
      applyTheme(sysTheme);
    };
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, [applyTheme, theme]);

  const handleThemeChange = useCallback(
    (newTheme: string) => {
      setTheme(newTheme);
      applyTheme(newTheme);
    },
    [applyTheme]
  );

  const isDark = ALL_DARK_THEMES.includes(theme);

  return (
    <div className="fixed top-3 sm:top-4 right-3 sm:right-4 z-[60] theme-dropdown">
      <details className="dropdown dropdown-bottom dropdown-end">
        <summary className="btn btn-glass border border-base-content/10 gap-2 normal-case shadow-md hover:shadow-lg transition-all cursor-pointer">
          <div
            className={`transition-transform duration-500 ${
              isDark ? "rotate-180" : "rotate-0"
            }`}
          >
            {theme === "unknown" ? (
              <LuLoader className="w-5 h-5 animate-spin text-neutral-400" />
            ) : isDark ? (
              <LuMoon className="w-5 h-5 text-blue-400" />
            ) : (
              <LuSun className="w-5 h-5 text-amber-400" />
            )}
          </div>
          <span className="hidden sm:inline font-medium capitalize">
            {theme === "unknown" ? "loading…" : theme}
          </span>
          <LuChevronDown className="w-4 h-4 opacity-70 hidden sm:block transition-transform group-open:rotate-180" />
        </summary>

        {theme !== "unknown" && (
          <ul className="dropdown-content menu xl:menu-horizontal bg-base-200/90 p-2 mt-2 z-[1] lg:min-w-max shadow-xl backdrop-blur-md">
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
                          const details = e.currentTarget.closest("details");
                          if (details) details.removeAttribute("open");
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
      </details>
    </div>
  );
}
