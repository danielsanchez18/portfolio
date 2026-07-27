import { Button } from "@/components/ui/button"
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
    <Button variant="ghost" size="default" className="h-fit py-2.5" onClick={toggle}>
      {theme === "light" ? <Sun className="size-5" /> : <Moon className="size-5" />}
    </Button>
  )
}
