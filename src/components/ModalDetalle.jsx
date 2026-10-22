import { useEffect, useRef, useState } from "react";

// Modal con la descripción completa del plan. El contenido se carga bajo demanda
// (src/descripciones.js es pesado) y viene limpio desde el script de extracción.
export default function ModalDetalle({ plan, onCerrar }) {
  const [desc, setDesc] = useState(null);
  const cuerpo = useRef(null);
  const cerrar = useRef(null);
  const id = plan.descripcionCompleta || plan.id;
  const pdf = `pdf/detalle-${plan.id}.pdf`;

  useEffect(() => {
    let activo = true;
    import("../descripciones.js").then(({ DESCRIPCIONES }) => activo && setDesc(DESCRIPCIONES[id] || { capitulos: [] }));
    return () => { activo = false; };
  }, [id]);

  // Cerrar con Escape, bloquear el scroll de fondo y poner el foco en el botón cerrar.
  useEffect(() => {
    const alTeclear = (e) => e.key === "Escape" && onCerrar();
    document.addEventListener("keydown", alTeclear);
    const overflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    cerrar.current?.focus();
    return () => {
      document.removeEventListener("keydown", alTeclear);
      document.body.style.overflow = overflow;
    };
  }, [onCerrar]);

  const irA = (i) => cuerpo.current?.querySelector(`#cap-${i}`)?.scrollIntoView({ behavior: "smooth", block: "start" });

  return (
    <div className="modal-fondo" onClick={onCerrar}>
      <div
        className="modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-titulo"
        onClick={(e) => e.stopPropagation()}
      >
        <header className="modal-cabecera">
          <div>
            <small>Descripción completa</small>
            <h2 id="modal-titulo">Plan {plan.nombre}</h2>
          </div>
          <div className="modal-acciones">
            <a href={pdf} download className="btn btn-destacado">⬇ Descargar PDF</a>
            <button ref={cerrar} className="modal-cerrar" onClick={onCerrar} aria-label="Cerrar">✕</button>
          </div>
        </header>

        {!desc ? (
          <p className="modal-cargando">Cargando…</p>
        ) : (
          <div className="modal-contenido">
            <nav className="modal-indice" aria-label="Capítulos">
              <select onChange={(e) => irA(e.target.value)} defaultValue="" aria-label="Ir a un capítulo">
                <option value="" disabled>Ir a un capítulo…</option>
                {desc.capitulos.map((c, i) => <option key={c.titulo} value={i}>{c.titulo}</option>)}
              </select>
              <ol>
                {desc.capitulos.map((c, i) => (
                  <li key={c.titulo}><button onClick={() => irA(i)}>{c.titulo}</button></li>
                ))}
              </ol>
            </nav>
            <div className="modal-cuerpo" ref={cuerpo}>
              {desc.capitulos.map((c, i) => (
                <section key={c.titulo} id={"cap-" + i} className="modal-capitulo">
                  <h3>{c.titulo}</h3>
                  <div dangerouslySetInnerHTML={{ __html: c.html }} />
                </section>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
