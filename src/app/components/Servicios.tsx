const servicios = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <ellipse cx="14" cy="14" rx="12" ry="7.5" stroke="#00C8D4" strokeWidth="1.8" />
        <circle cx="14" cy="14" r="3.5" fill="#00C8D4" />
      </svg>
    ),
    title: "Examen Visual Completo",
    desc: "Evaluación integral de tu salud ocular con equipos de última generación. Detectamos miopía, astigmatismo, hipermetropía y patologías tempranas.",
    highlight: "Desde $350 MXN",
    accentColor: "#00F0FF",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <rect x="4" y="10" width="20" height="8" rx="4" stroke="#00C8D4" strokeWidth="1.8" />
        <circle cx="10" cy="14" r="2" stroke="#00C8D4" strokeWidth="1.5" />
        <circle cx="18" cy="14" r="2" stroke="#00C8D4" strokeWidth="1.5" />
        <line x1="12" y1="14" x2="16" y2="14" stroke="#00C8D4" strokeWidth="1.5" />
      </svg>
    ),
    title: "Monturas de Diseño",
    desc: "Más de 500 modelos de las mejores marcas internacionales. Encuentra el marco perfecto que exprese tu personalidad y estilo.",
    highlight: "+500 modelos",
    accentColor: "#00F0FF",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <rect x="3" y="7" width="22" height="14" rx="3" stroke="#b8b800" strokeWidth="1.8" />
        <path d="M8 14h12M14 10v8" stroke="#b8b800" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    title: "Brigadas Empresariales",
    desc: "Llevamos la salud visual a tu empresa. Programa de exámenes colectivos, diagnóstico preventivo y entrega de lentes en el lugar de trabajo.",
    highlight: "Programa B2B",
    accentColor: "#FFFF00",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <rect x="4" y="6" width="20" height="16" rx="3" stroke="#b8b800" strokeWidth="1.8" />
        <path d="M9 14l3 3 7-6" stroke="#b8b800" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Certificado para Conducción",
    desc: "Examen visual oficial y certificación médica requerida para trámites de licencia de conducir. Rápido, preciso y con validez legal.",
    highlight: "Entrega inmediata",
    accentColor: "#FFFF00",
  },
];

export function Servicios() {
  return (
    <section
      id="servicios"
      className="py-16 sm:py-20 md:py-24 px-4 sm:px-6"
      style={{ background: "#ffffff" }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-4"
            style={{
              background: "rgba(0,240,255,0.08)",
              border: "1px solid rgba(0,240,255,0.2)",
            }}
          >
            <span
              className="text-xs tracking-widest uppercase"
              style={{ fontFamily: "Inter, sans-serif", fontWeight: 600, color: "#00a8b5" }}
            >
              Nuestros servicios
            </span>
          </div>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl tracking-tight mb-4"
            style={{ fontFamily: "Inter, sans-serif", fontWeight: 800, color: "#0a0a0a" }}
          >
            Todo lo que tu visión necesita
          </h2>
          <p
            className="text-base max-w-xl mx-auto"
            style={{ fontFamily: "Inter, sans-serif", color: "#666", lineHeight: 1.7 }}
          >
            Ofrecemos una gama completa de servicios especializados para el cuidado de tu salud visual,
            desde diagnóstico hasta la selección de tu montura perfecta.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {servicios.map((s) => (
            <div
              key={s.title}
              className="group relative flex flex-col gap-4 p-7 rounded-3xl transition-all duration-300 hover:-translate-y-1 cursor-default"
              style={{
                background: "rgba(255,255,255,0.7)",
                backdropFilter: "blur(16px)",
                border: "1px solid rgba(0,0,0,0.07)",
                boxShadow: "0 4px 24px rgba(0,0,0,0.05)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow =
                  `0 12px 40px rgba(0,240,255,0.12), 0 4px 24px rgba(0,0,0,0.05)`;
                (e.currentTarget as HTMLElement).style.border =
                  `1px solid rgba(0,240,255,0.2)`;
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow =
                  "0 4px 24px rgba(0,0,0,0.05)";
                (e.currentTarget as HTMLElement).style.border =
                  "1px solid rgba(0,0,0,0.07)";
              }}
            >
              {/* Icon */}
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center"
                style={{
                  background:
                    s.accentColor === "#00F0FF"
                      ? "rgba(0,240,255,0.1)"
                      : "rgba(255,255,0,0.12)",
                }}
              >
                {s.icon}
              </div>

              {/* Content */}
              <div className="flex flex-col gap-2 flex-1">
                <h3
                  className="text-base"
                  style={{ fontFamily: "Inter, sans-serif", fontWeight: 700, color: "#0a0a0a" }}
                >
                  {s.title}
                </h3>
                <p
                  className="text-sm leading-relaxed flex-1"
                  style={{ fontFamily: "Inter, sans-serif", color: "#666" }}
                >
                  {s.desc}
                </p>
              </div>

              {/* Highlight badge */}
              <div
                className="inline-flex items-center px-3 py-1.5 rounded-xl w-fit text-xs"
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontWeight: 600,
                  background:
                    s.accentColor === "#00F0FF"
                      ? "rgba(0,240,255,0.12)"
                      : "rgba(255,255,0,0.18)",
                  color: s.accentColor === "#00F0FF" ? "#00888f" : "#7a7a00",
                }}
              >
                {s.highlight}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
