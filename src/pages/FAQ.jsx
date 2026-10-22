import { useState } from "react";
import { DATA } from "../data.js";
import { Pagina } from "../components/Layout.jsx";

// Preguntas frecuentes organizadas por categorías y acordeones.
export default function FAQ() {
  const [categoria, setCategoria] = useState(DATA.faq[0].categoria);
  const [abierta, setAbierta] = useState(null);
  const grupo = DATA.faq.find((g) => g.categoria === categoria);
  return (
    <Pagina titulo="Preguntas frecuentes">
      <div className="faq">
        <div className="faq-tabs">
          {DATA.faq.map((g) => (
            <button
              key={g.categoria}
              className={g.categoria === categoria ? "activo" : ""}
              onClick={() => { setCategoria(g.categoria); setAbierta(null); }}
            >
              {g.categoria}
            </button>
          ))}
        </div>
        {grupo.preguntas.map((f, i) => (
          <div className="faq-item" key={f.p}>
            <button onClick={() => setAbierta(abierta === i ? null : i)} aria-expanded={abierta === i}>
              {f.p} <span>{abierta === i ? "−" : "+"}</span>
            </button>
            {abierta === i && <div className="respuesta">{f.r}</div>}
          </div>
        ))}
      </div>
    </Pagina>
  );
}
