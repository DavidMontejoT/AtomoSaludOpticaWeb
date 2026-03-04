export function Footer() {
  const links = {
    Servicios: [
      "Examen visual",
      "Monturas",
      "Brigadas empresariales",
      "Certificado conducción",
    ],
    Empresa: [
      "Sobre nosotros",
      "Nuestro equipo",
      "Blog de salud visual",
      "Trabaja con nosotros",
    ],
    Legal: [
      "Aviso de privacidad",
      "Términos y condiciones",
      "Política de cookies",
    ],
  };

  return (
    <footer
      id="contacto"
      className="pt-16 sm:pt-20 pb-8 sm:pb-10 px-4 sm:px-6"
      style={{ background: "#0a0a0a" }}
    >
      <div className="max-w-7xl mx-auto">
        {/* CTA Banner */}
        <div
          className="flex flex-col md:flex-row items-center justify-between gap-4 sm:gap-6 p-6 sm:p-8 md:p-10 rounded-2xl sm:rounded-3xl mb-12 sm:mb-16"
          style={{
            background: "linear-gradient(135deg, rgba(0,240,255,0.12) 0%, rgba(0,180,200,0.08) 100%)",
            border: "1px solid rgba(0,240,255,0.2)",
            backdropFilter: "blur(16px)",
          }}
        >
          <div>
            <h3
              className="text-xl sm:text-2xl md:text-3xl mb-2"
              style={{ fontFamily: "Inter, sans-serif", fontWeight: 800, color: "#ffffff" }}
            >
              ¿Listo para ver mejor?
            </h3>
            <p
              className="text-xs sm:text-sm"
              style={{ fontFamily: "Inter, sans-serif", color: "rgba(255,255,255,0.6)" }}
            >
              Agenda tu examen visual hoy. Sin costo de consulta para nuevos pacientes.
            </p>
          </div>
          <a
            href="tel:+525500000000"
            className="flex-shrink-0 px-6 sm:px-8 py-3 sm:py-4 rounded-2xl text-xs sm:text-sm transition-all duration-300 hover:scale-105 whitespace-nowrap"
            style={{
              fontFamily: "Inter, sans-serif",
              fontWeight: 600,
              background: "linear-gradient(135deg, #00F0FF, #00b8cc)",
              color: "#0a0a0a",
              boxShadow: "0 8px 32px rgba(0,240,255,0.3)",
            }}
          >
            Llamar: (55) 0000-0000
          </a>
        </div>

        {/* Main footer grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-10" style={{ borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
          {/* Brand column */}
          <div className="lg:col-span-2 flex flex-col gap-5">
            <div className="flex items-center gap-2">
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
                style={{ fontFamily: "Inter, sans-serif", fontWeight: 700, color: "#ffffff" }}
              >
                Atomo<span style={{ color: "#00F0FF" }}>Salud</span>
              </span>
            </div>

            <p
              className="text-sm leading-relaxed max-w-xs"
              style={{ fontFamily: "Inter, sans-serif", color: "rgba(255,255,255,0.5)" }}
            >
              Especialistas en salud visual con más de 10 años de experiencia. Tecnología
              de vanguardia al servicio de tu bienestar visual.
            </p>

            {/* Horario */}
            <div
              className="p-4 rounded-2xl"
              style={{
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              <p
                className="text-xs mb-2"
                style={{ fontFamily: "Inter, sans-serif", fontWeight: 600, color: "#00C8D4" }}
              >
                Horarios de atención
              </p>
              {[
                { dias: "Lun – Vie", horas: "9:00 – 19:00" },
                { dias: "Sábados", horas: "9:00 – 14:00" },
                { dias: "Domingos", horas: "Cerrado" },
              ].map((h) => (
                <div key={h.dias} className="flex justify-between py-1">
                  <span
                    className="text-xs"
                    style={{ fontFamily: "Inter, sans-serif", color: "rgba(255,255,255,0.5)" }}
                  >
                    {h.dias}
                  </span>
                  <span
                    className="text-xs"
                    style={{
                      fontFamily: "Inter, sans-serif",
                      color: h.horas === "Cerrado" ? "rgba(255,255,255,0.3)" : "rgba(255,255,255,0.8)",
                      fontWeight: 500,
                    }}
                  >
                    {h.horas}
                  </span>
                </div>
              ))}
            </div>

            {/* Social */}
            <div className="flex gap-3">
              {[
                {
                  label: "Instagram",
                  icon: (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                      <rect x="2" y="2" width="20" height="20" rx="5" />
                      <circle cx="12" cy="12" r="4" />
                      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
                    </svg>
                  ),
                },
                {
                  label: "Facebook",
                  icon: (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                    </svg>
                  ),
                },
                {
                  label: "WhatsApp",
                  icon: (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                    </svg>
                  ),
                },
              ].map((s) => (
                <a
                  key={s.label}
                  href="#"
                  aria-label={s.label}
                  className="w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-200 hover:scale-110"
                  style={{
                    background: "rgba(255,255,255,0.07)",
                    color: "rgba(255,255,255,0.6)",
                    border: "1px solid rgba(255,255,255,0.08)",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.color = "#00F0FF";
                    (e.currentTarget as HTMLElement).style.background = "rgba(0,240,255,0.12)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.6)";
                    (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.07)";
                  }}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Links columns */}
          {Object.entries(links).map(([section, items]) => (
            <div key={section} className="flex flex-col gap-4">
              <h4
                className="text-xs tracking-widest uppercase"
                style={{ fontFamily: "Inter, sans-serif", fontWeight: 600, color: "#00C8D4" }}
              >
                {section}
              </h4>
              <ul className="flex flex-col gap-3">
                {items.map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-sm transition-colors duration-200"
                      style={{ fontFamily: "Inter, sans-serif", color: "rgba(255,255,255,0.5)" }}
                      onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "#ffffff")}
                      onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "rgba(255,255,255,0.5)")}
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-6 md:pt-8">
          <p
            className="text-xs"
            style={{ fontFamily: "Inter, sans-serif", color: "rgba(255,255,255,0.3)" }}
          >
            © 2025 AtomoSalud. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-2">
            <div
              className="w-2 h-2 rounded-full animate-pulse"
              style={{ background: "#00F0FF" }}
            />
            <p
              className="text-[10px] sm:text-xs text-center md:text-left"
              style={{ fontFamily: "Inter, sans-serif", color: "rgba(255,255,255,0.3)" }}
            >
              Av. Insurgentes Sur 1234, CDMX · opticavision@email.com
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
