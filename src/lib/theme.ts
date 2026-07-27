export type Theme = "light" | "dark"

export const THEME_ICONS: Record<Theme, string> = {
  light: "/logo-meta.svg",
  dark: "/logo-meta-dark.svg",
}

export function getInitialTheme(): Theme {
  const stored = localStorage.getItem("theme")
  if (stored === "dark" || (!stored && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
    return "dark"
  }
  return "light"
}

export function updateThemeIcon(theme: Theme) {
  const link = document.querySelector<HTMLLinkElement>("link[data-theme-icon]")
  if (link) {
    link.href = THEME_ICONS[theme]
  }
}

export function applyTheme(theme: Theme) {
  const root = document.documentElement
  if (theme === "dark") {
    root.classList.add("dark")
  } else {
    root.classList.remove("dark")
  }
  localStorage.setItem("theme", theme)
  updateThemeIcon(theme)
}
