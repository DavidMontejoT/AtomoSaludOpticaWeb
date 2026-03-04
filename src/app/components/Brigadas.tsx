import { ImageWithFallback } from "./figma/ImageWithFallback";

const brigadaImg =
  "https://images.unsplash.com/photo-1758520144563-3ecbdbccc5cb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBvZmZpY2UlMjB0ZWFtJTIwYnVzaW5lc3MlMjBoZWFsdGglMjBjaGVja3xlbnwxfHx8fDE3NzI2MzExNTN8MA&ixlib=rb-4.1.0&q=80&w=1080";

const beneficios = [
  {
    icon: "🏢",
    title: "En tu empresa",
    desc: "Llevamos el equipo directamente a tus instalaciones. Sin desplazamientos para tus colaboradores.",
  },
  {
    icon: "📋",
    title: "Reporte corporativo",
    desc: "Entregamos un informe detallado del estado visual de tu equipo con recomendaciones preventivas.",
  },
  {
    icon: "⚡",
    title: "Proceso ágil",
    desc: "Examinamos a todo tu personal en un solo día. Planificación eficiente para no interrumpir operaciones.",
  },
  {
    icon: "💼",
    title: "Precios de empresa",
    desc: "Tarifas especiales por volumen y planes de lentes corporativos con descuentos exclusivos.",
  },
];

export function Brigadas() {
  return (
    <section
      id="brigadas"
      className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 relative overflow-hidden"
      style={{ background: "linear-gradient(160deg, #f7feff 0%, #f0feff 100%)" }}
    >
      {/* Decorative blob */}
      <div
        className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full opacity-15 pointer-events-none"
        style={{ background: "radial-gradient(circle, #00F0FF 0%, transparent 70%)" }}
      />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left image */}
        <div className="relative order-2 lg:order-1">
          <div
            className="relative rounded-3xl overflow-hidden"
            style={{
              background: "rgba(255,255,255,0.4)",
              backdropFilter: "blur(12px)",
              border: "1px solid rgba(255,255,255,0.6)",
              boxShadow: "0 24px 64px rgba(0,240,255,0.1), 0 4px 24px rgba(0,0,0,0.06)",
            }}
          >
            <ImageWithFallback
              src={brigadaImg}
              alt="Brigada visual empresarial"
              className="w-full h-[280px] sm:h-[350px] md:h-[380px] lg:h-[420px] object-cover"
            />
          </div>

          {/* Floating stat */}
          <div
            className="absolute -bottom-6 -right-6 px-6 py-5 rounded-2xl"
            style={{
              background: "rgba(255,255,255,0.9)",
              backdropFilter: "blur(20px)",
              border: "1px solid rgba(0,240,255,0.2)",
              boxShadow: "0 12px 40px rgba(0,0,0,0.1)",
            }}
          >
            <p className="text-3xl" style={{ fontFamily: "Inter, sans-serif", fontWeight: 800, color: "#0a0a0a" }}>
              +200
            </p>
            <p className="text-xs" style={{ fontFamily: "Inter, sans-serif", color: "#888" }}>
              empresas confían en nosotros
            </p>
          </div>
        </div>

        {/* Right content */}
        <div className="order-1 lg:order-2 flex flex-col gap-8">
          <div>
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-4"
              style={{
                background: "rgba(255,255,0,0.12)",
                border: "1px solid rgba(200,200,0,0.25)",
              }}
            >
              <span
                className="text-xs tracking-widest uppercase"
                style={{ fontFamily: "Inter, sans-serif", fontWeight: 600, color: "#8a8a00" }}
              >
                Solución B2B
              </span>
            </div>
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl tracking-tight mb-4"
              style={{ fontFamily: "Inter, sans-serif", fontWeight: 800, color: "#0a0a0a" }}
            >
              Brigadas visuales{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #00F0FF, #00b8cc)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                para tu empresa
              </span>
            </h2>
            <p
              className="text-base leading-relaxed max-w-lg"
              style={{ fontFamily: "Inter, sans-serif", color: "#555" }}
            >
              La salud visual de tus colaboradores impacta directamente en su productividad y
              bienestar. Nuestro programa empresarial lleva atención optométrica de calidad
              a tu lugar de trabajo, de forma práctica, profesional y sin interrumpir tus operaciones.
            </p>
          </div>

          {/* Benefits grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {beneficios.map((b) => (
              <div
                key={b.title}
                className="flex flex-col gap-2 p-5 rounded-2xl"
                style={{
                  background: "rgba(255,255,255,0.7)",
                  backdropFilter: "blur(12px)",
                  border: "1px solid rgba(0,0,0,0.06)",
                  boxShadow: "0 4px 16px rgba(0,0,0,0.04)",
                }}
              >
                <span className="text-xl">{b.icon}</span>
                <p className="text-sm" style={{ fontFamily: "Inter, sans-serif", fontWeight: 700, color: "#0a0a0a" }}>
                  {b.title}
                </p>
                <p className="text-xs leading-relaxed" style={{ fontFamily: "Inter, sans-serif", color: "#666" }}>
                  {b.desc}
                </p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="flex flex-wrap gap-4">
            <a
              href="#contacto"
              className="px-8 py-4 rounded-2xl text-sm transition-all duration-300 hover:scale-105 hover:shadow-lg"
              style={{
                fontFamily: "Inter, sans-serif",
                fontWeight: 600,
                background: "linear-gradient(135deg, #e8e800, #c8c800)",
                color: "#2a2a00",
                boxShadow: "0 8px 24px rgba(200,200,0,0.25)",
              }}
            >
              Solicita una cotización →
            </a>
            <a
              href="tel:+525500000000"
              className="px-8 py-4 rounded-2xl text-sm transition-all duration-300 hover:scale-105"
              style={{
                fontFamily: "Inter, sans-serif",
                fontWeight: 600,
                background: "rgba(255,255,255,0.8)",
                color: "#0a0a0a",
                border: "1px solid rgba(0,0,0,0.1)",
                backdropFilter: "blur(8px)",
              }}
            >
              Llamar ahora
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
