import { applyTheme, getInitialTheme, type Theme } from "@/lib/theme"
import { Sun, Moon } from "lucide-react"
import { useEffect, useState } from "react"

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window !== "undefined") {
      return getInitialTheme()
    }
    return "light"
  })

  useEffect(() => {
    applyTheme(theme)
  }, [theme])

  const toggle = () => setTheme(prev => prev === "light" ? "dark" : "light")

  return (
    <button 
      onClick={toggle}>
      {theme === "light" ? <Sun className="size-4" /> : <Moon className="size-4" />}
    </button>
  )
}
