import { ImageWithFallback } from "./figma/ImageWithFallback";

const monturas = [
  {
    id: 1,
    nombre: "Urbana Air",
    marca: "VisionPlus",
    tipo: "Montura ligera",
    precio: "$296,700 COP",
    img: "https://images.unsplash.com/photo-1766998224439-9f048ed4d687?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBleWVnbGFzc2VzJTIwZnJhbWVzJTIwZmFzaGlvbnxlbnwxfHx8fDE3NzI2MzExNTB8MA&ixlib=rb-4.1.0&q=80&w=1080",
    tag: "Más vendida",
    tagColor: "#00F0FF",
  },
  {
    id: 2,
    nombre: "Clásica Pro",
    marca: "OcularLux",
    tipo: "Acetato premium",
    precio: "$434,700 COP",
    img: "https://images.unsplash.com/photo-1667964394311-0875e16ccbef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBkZXNpZ25lciUyMGdsYXNzZXMlMjBjb2xsZWN0aW9uJTIwZGlzcGxheXxlbnwxfHx8fDE3NzI2MzExNTN8MA&ixlib=rb-4.1.0&q=80&w=1080",
    tag: "Premium",
    tagColor: "#FFFF00",
  },
  {
    id: 3,
    nombre: "Ejecutiva S",
    marca: "MetalFrame",
    tipo: "Titanio ultraligero",
    precio: "$572,700 COP",
    img: "https://images.unsplash.com/photo-1770657886087-3b616c6822a3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMHdlYXJpbmclMjBzdHlsaXNoJTIwZ2xhc3NlcyUyMHBvcnRyYWl0fGVufDF8fHx8MTc3MjYzMTE1NHww&ixlib=rb-4.1.0&q=80&w=1080",
    tag: "Nuevo",
    tagColor: "#00F0FF",
  },
  {
    id: 4,
    nombre: "Sport Vision",
    marca: "ActiveSight",
    tipo: "Deportiva flexible",
    precio: "$342,700 COP",
    img: "https://images.unsplash.com/photo-1758598305480-176fb2ee4d5c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW4lMjB3ZWFyaW5nJTIwZ2xhc3NlcyUyMHNtaWxpbmclMjBjb25maWRlbnR8ZW58MXx8fHwxNzcyNjMxMTU2fDA&ixlib=rb-4.1.0&q=80&w=1080",
    tag: "Colección 2025",
    tagColor: "#FFFF00",
  },
];

export function Catalogo() {
  return (
    <section
      id="catalogo"
      className="py-16 sm:py-20 md:py-24 px-4 sm:px-6"
      style={{ background: "linear-gradient(180deg, #ffffff 0%, #f7f7f9 100%)" }}
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
              Catálogo destacado
            </span>
          </div>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl tracking-tight mb-4"
            style={{ fontFamily: "Inter, sans-serif", fontWeight: 800, color: "#0a0a0a" }}
          >
            Monturas que definen{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #00F0FF, #00b8cc)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              tu estilo
            </span>
          </h2>
          <p
            className="text-base max-w-xl mx-auto"
            style={{ fontFamily: "Inter, sans-serif", color: "#666", lineHeight: 1.7 }}
          >
            Seleccionamos cuidadosamente las mejores marcas y modelos para que encuentres
            la montura perfecta que combine con tu personalidad y necesidades visuales.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {monturas.map((m) => (
            <div
              key={m.id}
              className="group relative flex flex-col rounded-3xl overflow-hidden transition-all duration-300 hover:-translate-y-2 cursor-pointer"
              style={{
                background: "rgba(255,255,255,0.8)",
                backdropFilter: "blur(16px)",
                border: "1px solid rgba(255,255,255,0.8)",
                boxShadow: "0 4px 24px rgba(0,0,0,0.06)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow =
                  "0 20px 60px rgba(0,240,255,0.14), 0 4px 24px rgba(0,0,0,0.06)";
                (e.currentTarget as HTMLElement).style.border =
                  "1px solid rgba(0,240,255,0.25)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow =
                  "0 4px 24px rgba(0,0,0,0.06)";
                (e.currentTarget as HTMLElement).style.border =
                  "1px solid rgba(255,255,255,0.8)";
              }}
            >
              {/* Image */}
              <div className="relative overflow-hidden h-44 sm:h-48 md:h-52">
                <ImageWithFallback
                  src={m.img}
                  alt={m.nombre}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Tag */}
                <div
                  className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs"
                  style={{
                    fontFamily: "Inter, sans-serif",
                    fontWeight: 600,
                    background:
                      m.tagColor === "#00F0FF"
                        ? "rgba(0,240,255,0.85)"
                        : "rgba(255,255,0,0.85)",
                    color: m.tagColor === "#00F0FF" ? "#003840" : "#3a3a00",
                    backdropFilter: "blur(8px)",
                  }}
                >
                  {m.tag}
                </div>
              </div>

              {/* Info */}
              <div className="flex flex-col gap-3 p-5">
                <div>
                  <p
                    className="text-xs mb-1"
                    style={{ fontFamily: "Inter, sans-serif", fontWeight: 500, color: "#00a8b5" }}
                  >
                    {m.marca}
                  </p>
                  <h3
                    className="text-base"
                    style={{ fontFamily: "Inter, sans-serif", fontWeight: 700, color: "#0a0a0a" }}
                  >
                    {m.nombre}
                  </h3>
                  <p
                    className="text-xs"
                    style={{ fontFamily: "Inter, sans-serif", color: "#999" }}
                  >
                    {m.tipo}
                  </p>
                </div>

                <div className="flex items-center justify-between pt-2" style={{ borderTop: "1px solid rgba(0,0,0,0.06)" }}>
                  <span
                    className="text-base"
                    style={{ fontFamily: "Inter, sans-serif", fontWeight: 700, color: "#0a0a0a" }}
                  >
                    {m.precio}
                  </span>
                  <button
                    className="px-4 py-2 rounded-xl text-xs transition-all duration-200 hover:scale-105"
                    style={{
                      fontFamily: "Inter, sans-serif",
                      fontWeight: 600,
                      background: "linear-gradient(135deg, #00F0FF22, #00F0FF44)",
                      color: "#00888f",
                      border: "1px solid rgba(0,240,255,0.3)",
                    }}
                  >
                    Ver detalle
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a
            href="#contacto"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl text-sm transition-all duration-300 hover:scale-105"
            style={{
              fontFamily: "Inter, sans-serif",
              fontWeight: 600,
              background: "rgba(255,255,255,0.9)",
              color: "#0a0a0a",
              border: "1px solid rgba(0,0,0,0.1)",
              backdropFilter: "blur(12px)",
              boxShadow: "0 4px 24px rgba(0,0,0,0.06)",
            }}
          >
            Ver catálogo completo →
          </a>
        </div>
      </div>
    </section>
  );
}
