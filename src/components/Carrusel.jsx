import { useEffect, useState } from "react";
import { DATA } from "../data.js";

// Carrusel principal: solo slides activos, ordenados por "orden".
export default function Carrusel() {
  const slides = DATA.slides.filter((s) => s.activo).sort((a, b) => a.orden - b.orden);
  const [actual, setActual] = useState(0);
  const [pausado, setPausado] = useState(false);

  useEffect(() => {
    if (pausado || slides.length < 2) return;
    const id = setInterval(() => setActual((i) => (i + 1) % slides.length), 5000);
    return () => clearInterval(id);
  }, [pausado, slides.length]);

  if (slides.length === 0) return null;
  const ir = (i) => setActual((i + slides.length) % slides.length);

  return (
    <section className="carrusel" onMouseEnter={() => setPausado(true)} onMouseLeave={() => setPausado(false)}>
      {slides.map((s, i) => {
        const estilo = { background: s.fondo };
        if (s.imagen) estilo["--img-desktop"] = `url("${s.imagen}")`;
        if (s.imagenMobile || s.imagen) estilo["--img-mobile"] = `url("${s.imagenMobile || s.imagen}")`;
        return (
          <div key={i} className={"slide" + (i === actual ? " activo" : "") + (s.imagen ? " con-imagen" : "")} style={estilo}>
            <div className="contenedor">
              <div className="slide-contenido">
                <span className="etiqueta">{s.tipo}</span>
                <h1>{s.titulo}</h1>
                <p>{s.bajada}</p>
                <a className="btn" href={"#" + s.destino}>{s.cta}</a>
              </div>
            </div>
          </div>
        );
      })}
      <button className="flecha izq" aria-label="Anterior" onClick={() => ir(actual - 1)}>‹</button>
      <button className="flecha der" aria-label="Siguiente" onClick={() => ir(actual + 1)}>›</button>
      <div className="puntos">
        {slides.map((_, i) => (
          <button key={i} aria-label={"Ir a slide " + (i + 1)} className={i === actual ? "activo" : ""} onClick={() => ir(i)} />
        ))}
      </div>
    </section>
  );
}
