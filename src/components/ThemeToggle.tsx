import { Button } from "@/components/ui/button"
import { Sun, Moon } from "lucide-react"
import { useEffect, useState } from "react"

export function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">(() => {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem("theme")
      if (stored === "dark" || (!stored && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
        return "dark"
      }
    }
    return "light"
  })

  useEffect(() => {
    const root = document.documentElement
    if (theme === "dark") {
      root.classList.add("dark")
      localStorage.setItem("theme", "dark")
    } else {
      root.classList.remove("dark")
      localStorage.setItem("theme", "light")
    }
  }, [theme])

  const toggle = () => setTheme(prev => prev === "light" ? "dark" : "light")

  return (
    <Button variant="ghost" size="default" className="h-fit py-2.5" onClick={toggle}>
      {theme === "light" ? <Sun className="size-5" /> : <Moon className="size-5" />}
    </Button>
  )
}
