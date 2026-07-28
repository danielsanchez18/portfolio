import { useState } from "react"
import { ThemeToggle } from "./ThemeToggle"
import { ContactModal } from "./ContactModal"

export function NavActions() {
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <>
      <div className="ml-auto flex items-center">
        <ThemeToggle />
      </div>
      <button
        onClick={() => setModalOpen(true)}
        className="bg-primary/5 hover:bg-primary/15 backdrop-blur-sm text-accent-foreground px-3 py-1.5 text-sm rounded-full border"
      >
        Contacto
      </button>
      <ContactModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  )
}
