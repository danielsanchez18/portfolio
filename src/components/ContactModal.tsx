import { X, Mail, MessageCircle } from "lucide-react"
import { useEffect } from "react"

export function ContactModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  useEffect(() => {
    if (!open) return
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
    }
    document.addEventListener("keydown", handler)
    return () => document.removeEventListener("keydown", handler)
  }, [open, onClose])

  if (!open) return null

  return (
    <>
      <div className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm" onClick={onClose} />
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-[calc(100%-2rem)] max-w-sm">
        <div className="bg-background backdrop-blur-xl border border-border rounded-2xl py-6 px-4 shadow-2xl space-y-5">
          <div className="flex justify-between pl-4 pr-2">
            <h2 className="text-lg font-medium">Contacto</h2>
            <button onClick={onClose} className="text-muted-foreground hover:text-foreground transition">
              <X className="size-4" />
            </button>
          </div>

          <div className="divide-y divide-red-500">
            <a 
              href="mailto:dsanchez151r@gmail.com" 
              className="px-4 py-2 rounded-lg border border-transparent hover:border-border hover:bg-accent flex items-center gap-3 text-sm transition">
              <Mail className="size-4 text-muted-foreground" /> dsanchez151r@gmail.com
            </a>
            <a 
              href="https://github.com/danielsanchez18" target="_blank" rel="noopener noreferrer" 
              className="px-4 py-2 rounded-lg border border-transparent hover:border-border hover:bg-accent flex items-center gap-3 text-sm transition">
              <svg className="size-4 text-muted-foreground" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33s1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2" />
              </svg>
              /danielsanchez18
            </a>
            <a 
              href="https://www.linkedin.com/in/dsanchezdev/" target="_blank" rel="noopener noreferrer" 
              className="px-4 py-2 rounded-lg border border-transparent hover:border-border hover:bg-accent flex items-center gap-3 text-sm transition">
              <svg className="size-4 text-muted-foreground" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12.51 8.796v1.697a3.74 3.74 0 0 1 3.288-1.684c3.455 0 4.202 2.16 4.202 4.97V19.5h-3.2v-5.072c0-1.21-.244-2.766-2.128-2.766c-1.827 0-2.139 1.317-2.139 2.676V19.5h-3.19V8.796h3.168ZM7.2 6.106a1.61 1.61 0 0 1-.988 1.483a1.595 1.595 0 0 1-1.743-.348A1.607 1.607 0 0 1 5.6 4.5a1.6 1.6 0 0 1 1.6 1.606M7.2 8.809H4V19.5h3.2z" />
              </svg>
              /in/dsanchezdev
            </a>
            <a 
              href="https://wa.me/51936245721" target="_blank" rel="noopener noreferrer" 
              className="px-4 py-2 rounded-lg border border-transparent hover:border-border hover:bg-accent flex items-center gap-3 text-sm transition">
              <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" className="size-4 text-muted-foreground">
                <path d="M0 0h24v24H0z" fill="none" />
                <path fill="currentColor" d="M19.05 4.91A9.82 9.82 0 0 0 12.04 2c-5.46 0-9.91 4.45-9.91 9.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21c5.46 0 9.91-4.45 9.91-9.91c0-2.65-1.03-5.14-2.9-7.01m-7.01 15.24c-1.48 0-2.93-.4-4.2-1.15l-.3-.18l-3.12.82l.83-3.04l-.2-.31a8.26 8.26 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24c2.2 0 4.27.86 5.82 2.42a8.18 8.18 0 0 1 2.41 5.83c.02 4.54-3.68 8.23-8.22 8.23m4.52-6.16c-.25-.12-1.47-.72-1.69-.81c-.23-.08-.39-.12-.56.12c-.17.25-.64.81-.78.97c-.14.17-.29.19-.54.06c-.25-.12-1.05-.39-1.99-1.23c-.74-.66-1.23-1.47-1.38-1.72c-.14-.25-.02-.38.11-.51c.11-.11.25-.29.37-.43s.17-.25.25-.41c.08-.17.04-.31-.02-.43s-.56-1.34-.76-1.84c-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31c-.22.25-.86.85-.86 2.07s.89 2.4 1.01 2.56c.12.17 1.75 2.67 4.23 3.74c.59.26 1.05.41 1.41.52c.59.19 1.13.16 1.56.1c.48-.07 1.47-.6 1.67-1.18c.21-.58.21-1.07.14-1.18s-.22-.16-.47-.28" />
              </svg>
              +51 936 245 721
            </a>
          </div>
        </div>
      </div>
    </>
  )
}
