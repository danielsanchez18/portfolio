import { useState, useRef, useEffect } from "react";
import { FolderGit2, Briefcase, User, ChevronDown } from "lucide-react";

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  return (
    <div ref={menuRef} className="sm:hidden relative">
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-expanded={isOpen}
        aria-haspopup="true"
        aria-label="Menú de navegación"
        className={`bg-primary/5 hover:bg-primary/15 backdrop-blur-sm text-accent-foreground px-3 py-1.5 text-sm rounded-full border flex items-center gap-1.5 transition-all duration-200 cursor-pointer ${
          isOpen ? "bg-primary/5 border-border" : ""
        }`}
      >
        <svg
          className="size-5 text-accent-foreground"
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          viewBox="0 0 24 24"
        >
          <path d="M0 0h24v24H0z" fill="none" />
          <path
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M5 17h8m-8-5h14M5 7h8"
          />
        </svg>
        <span>Menu</span>
      </button>

      {isOpen && (
        <div
          role="menu"
          aria-orientation="vertical"
          className="absolute left-0 top-full mt-4 w-48 rounded-2xl border border-border bg-background dark:bg-accent/90 backdrop-blur-xl p-1 z-50 animate-in fade-in-0 zoom-in-95 duration-150 ease-out"
        >
          <div className="flex flex-col gap-0.5">
            <a
              href="#proyectos"
              role="menuitem"
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-2.5 px-3 py-2 text-sm rounded-xl text-foreground/90 hover:text-foreground hover:bg-primary/10 transition-colors duration-150"
            >
              <span>Proyectos</span>
            </a>

            <a
              href="#experiencia"
              role="menuitem"
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-2.5 px-3 py-2 text-sm rounded-xl text-foreground/90 hover:text-foreground hover:bg-primary/10 transition-colors duration-150"
            >
              <span>Experiencia</span>
            </a>

            <a
              href="#blog"
              role="menuitem"
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-2.5 px-3 py-2 text-sm rounded-xl text-foreground/90 hover:text-foreground hover:bg-primary/10 transition-colors duration-150"
            >
              <span>Sobre mí</span>
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
