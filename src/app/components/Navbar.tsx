import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { label: "Servicios", href: "#servicios" },
    { label: "Brigadas", href: "#brigadas" },
    { label: "Catálogo", href: "#catalogo" },
    { label: "Testimonios", href: "#testimonios" },
    { label: "Contacto", href: "#contacto" },
  ];

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled
          ? "rgba(255,255,255,0.85)"
          : "rgba(255,255,255,0.0)",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(0,240,255,0.15)" : "none",
        boxShadow: scrolled ? "0 2px 32px rgba(0,240,255,0.06)" : "none",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <div
            className="w-9 h-9 rounded-xl flex items-center justify-center"
            style={{ background: "linear-gradient(135deg, #00F0FF, #00b8cc)" }}
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <ellipse cx="10" cy="10" rx="9" ry="5.5" stroke="white" strokeWidth="1.8" />
              <circle cx="10" cy="10" r="2.5" fill="white" />
            </svg>
          </div>
          <span
            className="text-lg tracking-tight"
            style={{ fontFamily: "Inter, sans-serif", fontWeight: 700, color: "#0a0a0a" }}
          >
            Atomo<span style={{ color: "#00F0FF" }}>Salud</span>
          </span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm transition-colors duration-200"
              style={{
                fontFamily: "Inter, sans-serif",
                fontWeight: 500,
                color: "#444",
              }}
              onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "#00C8D4")}
              onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "#444")}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#agenda"
            className="px-5 py-2 rounded-xl text-sm transition-all duration-200 hover:scale-105"
            style={{
              fontFamily: "Inter, sans-serif",
              fontWeight: 600,
              background: "linear-gradient(135deg, #00F0FF, #00b8cc)",
              color: "#0a0a0a",
              boxShadow: "0 4px 16px rgba(0,240,255,0.3)",
            }}
          >
            Agenda tu examen
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div
          className="md:hidden px-6 pb-6 flex flex-col gap-4"
          style={{ background: "rgba(255,255,255,0.95)", backdropFilter: "blur(20px)" }}
        >
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm py-2 border-b"
              style={{
                fontFamily: "Inter, sans-serif",
                fontWeight: 500,
                color: "#444",
                borderColor: "rgba(0,240,255,0.15)",
              }}
              onClick={() => setMobileOpen(false)}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#agenda"
            className="px-5 py-3 rounded-xl text-sm text-center"
            style={{
              fontFamily: "Inter, sans-serif",
              fontWeight: 600,
              background: "linear-gradient(135deg, #00F0FF, #00b8cc)",
              color: "#0a0a0a",
            }}
            onClick={() => setMobileOpen(false)}
          >
            Agenda tu examen
          </a>
        </div>
      )}
    </nav>
  );
}
