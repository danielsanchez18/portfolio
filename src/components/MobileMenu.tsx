import { Button } from "@/components/ui/button"
import { X, Menu } from "lucide-react"
import { ThemeToggle } from "@/components/ThemeToggle"
import { useEffect, useState } from "react"

const links = [
  { href: "/", label: "Inicio" },
  { href: "/proyectos", label: "Proyectos" },
  { href: "/experiencia", label: "Experiencia" },
  { href: "/blog", label: "Blog" },
]

export function MobileMenu() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => { document.body.style.overflow = "" }
  }, [open])

  const close = () => setOpen(false)

  return (
    <>
      <Button variant="outline" className="md:hidden h-fit p-2" onClick={() => setOpen(true)}>
        <Menu className="size-6" />
      </Button>

      {open && (
        <div className="fixed inset-0 z-40 bg-black/50 md:hidden" onClick={close} />
      )}

      <div
        data-sidebar
        className={`md:hidden fixed top-0 right-0 z-50 h-dvh w-full bg-background border-l border-border
          transition-transform duration-300 ease-in-out
          ${open ? "translate-x-0" : "translate-x-full"}
          flex flex-col`}
      >
        <div className="flex items-center justify-between px-5 pt-3">          
          <ThemeToggle />
          <Button variant="ghost" size="icon" onClick={close} className="ml-auto">
            <X className="size-5" />
          </Button>
        </div>

        <nav className="flex-1 flex flex-col p-5 gap-1">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={close}
              className="text-xl uppercase py-5 px-4 text-center rounded-lg hover:bg-muted transition-colors"
            >
              {link.label}
            </a>
          ))}
          
          <Button 
            className="h-fit text-xl uppercase py-5 px-4 rounded-lg hover:bg-muted hover:text-white transition-colors"
          >
            Contacto
          </Button>
        </nav>

        <div className="mt-auto border-t space-y-1 border-boder px-5 py-7">
          <h1 className="uppercase text-3xl">Daniel Sánchez</h1>
          <p className="uppercase">Desarollador de software</p>
        </div>
      </div>
    </>
  )
}
