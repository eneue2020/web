import { useState } from "react";
import { DATA } from "../data.js";
import { Pagina } from "../components/Layout.jsx";

// Respuesta: texto o lista de párrafos; los que empiezan con "- " se agrupan como lista.
function Respuesta({ r, cta }) {
  const parrafos = Array.isArray(r) ? r : [r];
  const bloques = [];
  for (const texto of parrafos) {
    if (texto.startsWith("- ")) {
      const ultimo = bloques[bloques.length - 1];
      if (Array.isArray(ultimo)) ultimo.push(texto.slice(2));
      else bloques.push([texto.slice(2)]);
    } else {
      bloques.push(texto);
    }
  }
  return (
    <div className="respuesta">
      {bloques.map((b, i) =>
        Array.isArray(b)
          ? <ul key={i} className="lista-check">{b.map((li) => <li key={li}>{li}</li>)}</ul>
          : <p key={i}>{b}</p>
      )}
      {cta && <a href={"#" + cta.destino} className="btn btn-primario">{cta.texto}</a>}
    </div>
  );
}

// Preguntas frecuentes organizadas por categorías y acordeones.
export default function FAQ() {
  const [categoria, setCategoria] = useState(DATA.faq[0].categoria);
  const [abierta, setAbierta] = useState(0);
  const grupo = DATA.faq.find((g) => g.categoria === categoria);
  return (
    <>
      <Pagina titulo="Preguntas frecuentes" bajada="Todo lo que necesitás saber para sumarte a OSMISS y aprovechar tu cobertura">
        <div className="faq">
          <div className="faq-tabs">
            {DATA.faq.map((g) => (
              <button
                key={g.categoria}
                className={g.categoria === categoria ? "activo" : ""}
                onClick={() => { setCategoria(g.categoria); setAbierta(0); }}
              >
                {g.categoria}
              </button>
            ))}
          </div>
          {grupo.preguntas.map((f, i) => (
            <div className={"faq-item" + (abierta === i ? " abierto" : "")} key={f.p}>
              <button onClick={() => setAbierta(abierta === i ? null : i)} aria-expanded={abierta === i}>
                {f.p} <span>{abierta === i ? "−" : "+"}</span>
              </button>
              {abierta === i && <Respuesta r={f.r} cta={f.cta} />}
            </div>
          ))}
        </div>
      </Pagina>
      <section className="cta-banda">
        <div className="contenedor">
          <div>
            <h2>¿Te quedó alguna duda?</h2>
            <p>Un asesor te ayuda a elegir tu plan y a hacer el cambio de obra social sin complicaciones.</p>
          </div>
          <div className="acciones" style={{ marginTop: 0 }}>
            <a href="#afiliarme" className="btn btn-destacado">Quiero afiliarme</a>
            <a href="#contactos" className="btn">Hacer una consulta</a>
          </div>
        </div>
      </section>
    </>
  );
}
