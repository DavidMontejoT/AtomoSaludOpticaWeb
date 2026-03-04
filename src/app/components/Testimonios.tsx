const testimonios = [
  {
    nombre: "Andrea Ramírez",
    cargo: "Diseñadora gráfica",
    texto:
      "Llevaba años con molestias visuales creyendo que era algo normal. En AtomoSalud me detectaron astigmatismo en 20 minutos. Ahora trabajo sin dolor de cabeza y mis lentes son preciosos.",
    estrellas: 5,
    avatar: "AR",
    color: "#00F0FF",
  },
  {
    nombre: "Carlos Mendoza",
    cargo: "Director de RRHH — TechMX",
    texto:
      "Contratamos la brigada empresarial para nuestros 120 colaboradores. El proceso fue increíblemente ordenado y eficiente. El reporte fue muy valioso para nuestro programa de bienestar.",
    estrellas: 5,
    avatar: "CM",
    color: "#FFFF00",
  },
  {
    nombre: "Sofía Torres",
    cargo: "Conductora de transporte",
    texto:
      "Necesitaba el certificado visual para renovar mi licencia y en AtomoSalud lo obtuve el mismo día. El examen fue completo y muy profesional. 100% recomendado.",
    estrellas: 5,
    avatar: "ST",
    color: "#00F0FF",
  },
  {
    nombre: "Miguel Ángel Vega",
    cargo: "Emprendedor",
    texto:
      "Me sorprendió la calidad del servicio. Desde el momento en que entré hasta elegir mi montura, todo fue una experiencia premium. Definitivamente mi óptica de confianza.",
    estrellas: 5,
    avatar: "MV",
    color: "#FFFF00",
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: count }).map((_, i) => (
        <span key={i} style={{ color: "#00C8D4", fontSize: "14px" }}>★</span>
      ))}
    </div>
  );
}

export function Testimonios() {
  return (
    <section
      id="testimonios"
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
              Testimonios
            </span>
          </div>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl tracking-tight mb-4"
            style={{ fontFamily: "Inter, sans-serif", fontWeight: 800, color: "#0a0a0a" }}
          >
            Lo que dicen quienes{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #00F0FF, #00b8cc)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              ya confían en nosotros
            </span>
          </h2>
        </div>

        {/* Testimonials grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonios.map((t) => (
            <div
              key={t.nombre}
              className="flex flex-col gap-5 p-7 rounded-3xl"
              style={{
                background: "rgba(255,255,255,0.7)",
                backdropFilter: "blur(16px)",
                border: "1px solid rgba(0,0,0,0.07)",
                boxShadow: "0 4px 24px rgba(0,0,0,0.05)",
              }}
            >
              <Stars count={t.estrellas} />

              <p
                className="text-base leading-relaxed"
                style={{ fontFamily: "Inter, sans-serif", color: "#333", fontStyle: "italic" }}
              >
                "{t.texto}"
              </p>

              <div className="flex items-center gap-4 pt-4" style={{ borderTop: "1px solid rgba(0,0,0,0.06)" }}>
                {/* Avatar */}
                <div
                  className="w-11 h-11 rounded-2xl flex items-center justify-center flex-shrink-0 text-sm"
                  style={{
                    fontFamily: "Inter, sans-serif",
                    fontWeight: 700,
                    background:
                      t.color === "#00F0FF"
                        ? "linear-gradient(135deg, #00F0FF33, #00F0FF66)"
                        : "linear-gradient(135deg, #FFFF0033, #FFFF0066)",
                    color: t.color === "#00F0FF" ? "#007880" : "#606000",
                  }}
                >
                  {t.avatar}
                </div>
                <div>
                  <p
                    className="text-sm"
                    style={{ fontFamily: "Inter, sans-serif", fontWeight: 700, color: "#0a0a0a" }}
                  >
                    {t.nombre}
                  </p>
                  <p
                    className="text-xs"
                    style={{ fontFamily: "Inter, sans-serif", color: "#999" }}
                  >
                    {t.cargo}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust badges */}
        <div className="mt-16 flex flex-wrap justify-center gap-8 opacity-60">
          {[
            "Certificados por SSA",
            "Equipo de diagnóstico digital",
            "Atención personalizada",
            "Garantía en productos",
          ].map((badge) => (
            <div key={badge} className="flex items-center gap-2">
              <span style={{ color: "#00C8D4" }}>✓</span>
              <span
                className="text-xs"
                style={{ fontFamily: "Inter, sans-serif", fontWeight: 500, color: "#666" }}
              >
                {badge}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
