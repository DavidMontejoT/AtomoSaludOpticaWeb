import { ImageWithFallback } from "./figma/ImageWithFallback";

const heroImg = "/Consultorio_Elegante_Minimalista.jpeg";

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: "linear-gradient(160deg, #f0feff 0%, #ffffff 50%, #f7f7f9 100%)" }}
    >
      {/* Background decorative blobs */}
      <div
        className="absolute top-[-120px] right-[-120px] w-[500px] h-[500px] rounded-full opacity-20 pointer-events-none"
        style={{ background: "radial-gradient(circle, #00F0FF 0%, transparent 70%)" }}
      />
      <div
        className="absolute bottom-[-80px] left-[-80px] w-[350px] h-[350px] rounded-full opacity-10 pointer-events-none"
        style={{ background: "radial-gradient(circle, #FFFF00 0%, transparent 70%)" }}
      />
      {/* Background decorative blobs */}
      <div
        className="absolute top-[-120px] right-[-120px] w-[500px] h-[500px] rounded-full opacity-20 pointer-events-none"
        style={{ background: "radial-gradient(circle, #00F0FF 0%, transparent 70%)" }}
      />
      <div
        className="absolute bottom-[-80px] left-[-80px] w-[350px] h-[350px] rounded-full opacity-10 pointer-events-none"
        style={{ background: "radial-gradient(circle, #FFFF00 0%, transparent 70%)" }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-20 sm:pt-28 pb-12 sm:pb-16 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center w-full">
        {/* Left content */}
        <div className="flex flex-col gap-6">
          {/* Badge */}
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full w-fit"
            style={{
              background: "rgba(0,240,255,0.1)",
              border: "1px solid rgba(0,240,255,0.3)",
            }}
          >
            <span
              className="w-2 h-2 rounded-full animate-pulse"
              style={{ background: "#00F0FF" }}
            />
            <span
              className="text-xs tracking-widest uppercase"
              style={{ fontFamily: "Inter, sans-serif", fontWeight: 600, color: "#00a8b5" }}
            >
              Salud visual de precisión
            </span>
          </div>

          {/* Headline */}
          <h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-none tracking-tight"
            style={{ fontFamily: "Inter, sans-serif", fontWeight: 800, color: "#0a0a0a" }}
          >
            Tu visión{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #00F0FF, #00b8cc)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              merece
            </span>{" "}
            lo mejor.
          </h1>

          {/* Subtitle */}
          <p
            className="text-base sm:text-lg max-w-lg leading-relaxed"
            style={{ fontFamily: "Inter, sans-serif", fontWeight: 400, color: "#555" }}
          >
            Exámenes visuales de alta precisión, monturas de diseño y programas
            especializados para empresas. Cuidamos tu salud visual con tecnología de vanguardia
            y atención personalizada.
          </p>

          {/* Stats */}
          <div className="flex gap-6 sm:gap-8 py-4 flex-wrap">
            {[
              { value: "+5,000", label: "pacientes atendidos" },
              { value: "98%", label: "satisfacción" },
              { value: "+200", label: "empresas aliadas" },
            ].map((s) => (
              <div key={s.label} className="flex flex-col min-w-[80px]">
                <span
                  className="text-xl sm:text-2xl"
                  style={{ fontFamily: "Inter, sans-serif", fontWeight: 700, color: "#0a0a0a" }}
                >
                  {s.value}
                </span>
                <span
                  className="text-[10px] sm:text-xs"
                  style={{ fontFamily: "Inter, sans-serif", fontWeight: 400, color: "#888" }}
                >
                  {s.label}
                </span>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap gap-3 sm:gap-4">
            <a
              id="agenda"
              href="#contacto"
              className="px-6 sm:px-8 py-3 sm:py-4 rounded-2xl text-xs sm:text-sm transition-all duration-300 hover:scale-105 hover:shadow-lg"
              style={{
                fontFamily: "Inter, sans-serif",
                fontWeight: 600,
                background: "linear-gradient(135deg, #00F0FF, #00b8cc)",
                color: "#0a0a0a",
                boxShadow: "0 8px 32px rgba(0,240,255,0.35)",
              }}
            >
              Agenda tu examen →
            </a>
            <a
              href="#catalogo"
              className="px-6 sm:px-8 py-3 sm:py-4 rounded-2xl text-xs sm:text-sm transition-all duration-300 hover:scale-105"
              style={{
                fontFamily: "Inter, sans-serif",
                fontWeight: 600,
                background: "rgba(255,255,255,0.8)",
                color: "#0a0a0a",
                border: "1px solid rgba(0,0,0,0.1)",
                backdropFilter: "blur(8px)",
                boxShadow: "0 4px 16px rgba(0,0,0,0.06)",
              }}
            >
              Conoce nuestras monturas
            </a>
          </div>
        </div>

        {/* Right image */}
        <div className="relative flex justify-center items-center">
          {/* Glow effect */}
          <div
            className="absolute inset-0 rounded-3xl opacity-30 blur-2xl"
            style={{ background: "radial-gradient(circle at 50% 50%, #00F0FF, transparent 70%)" }}
          />
          {/* Glass frame */}
          <div
            className="relative rounded-3xl overflow-hidden w-full max-w-lg"
            style={{
              background: "rgba(255,255,255,0.4)",
              backdropFilter: "blur(12px)",
              border: "1px solid rgba(255,255,255,0.6)",
              boxShadow: "0 24px 64px rgba(0,240,255,0.12), 0 4px 24px rgba(0,0,0,0.08)",
            }}
          >
            <ImageWithFallback
              src={heroImg}
              alt="Examen visual profesional"
              className="w-full h-[300px] sm:h-[380px] md:h-[420px] lg:h-[460px] object-cover"
            />
            {/* Floating card */}
            <div
              className="absolute bottom-6 left-6 right-6 px-5 py-4 rounded-2xl"
              style={{
                background: "rgba(255,255,255,0.75)",
                backdropFilter: "blur(16px)",
                border: "1px solid rgba(255,255,255,0.8)",
                boxShadow: "0 8px 32px rgba(0,0,0,0.08)",
              }}
            >
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: "linear-gradient(135deg, #00F0FF22, #00F0FF44)" }}
                >
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M10 3C5.5 3 2 10 2 10s3.5 7 8 7 8-7 8-7-3.5-7-8-7z" stroke="#00a8b5" strokeWidth="1.5" fill="none" />
                    <circle cx="10" cy="10" r="2.5" fill="#00a8b5" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs" style={{ fontFamily: "Inter, sans-serif", fontWeight: 600, color: "#0a0a0a" }}>
                    Examen visual completo
                  </p>
                  <p className="text-xs" style={{ fontFamily: "Inter, sans-serif", color: "#888" }}>
                    Tecnología de diagnóstico avanzado
                  </p>
                </div>
                <div
                  className="ml-auto px-3 py-1 rounded-full text-xs"
                  style={{
                    fontFamily: "Inter, sans-serif",
                    fontWeight: 600,
                    background: "rgba(0,240,255,0.15)",
                    color: "#00888f",
                  }}
                >
                  Disponible
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
        <span className="text-xs" style={{ fontFamily: "Inter, sans-serif" }}>Desplaza</span>
        <div className="w-px h-8 bg-current animate-pulse" />
      </div>
    </section>
  );
}
