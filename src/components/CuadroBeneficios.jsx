import { useState } from "react";

// Color de la cobertura: verde si es total/sin cargo, rojo si no está cubierto.
function claseCobertura(texto) {
  const t = texto.toUpperCase();
  if (t.includes("NO CUBIERTO")) return "cob-no";
  if (/(^|\s)(SC|ST|SL)(\s|$)|100%|EXENTO|SIN CARGO/.test(t)) return "cob-total";
  return "";
}

function Tabla({ grupos, columna }) {
  return (
    <div className="tabla-wrap">
      <table className="tabla-beneficios">
        <thead>
          <tr><th>Prestación</th><th>{columna}</th></tr>
        </thead>
        {grupos.map((g, n) => (
          <tbody key={n + g.categoria}>
            <tr className="fila-categoria"><th colSpan="2">{g.categoria}</th></tr>
            {g.items.map((it, i) =>
              it.subtitulo
                ? <tr key={i} className="fila-subtitulo"><td colSpan="2">{it.prestacion}</td></tr>
                : (
                  <tr key={i}>
                    <td>{it.prestacion}</td>
                    <td><span className={"cobertura " + claseCobertura(it.cobertura)}>{it.cobertura}</span></td>
                  </tr>
                )
            )}
          </tbody>
        ))}
      </table>
    </div>
  );
}

// Cuadro de beneficios y coseguros de un plan, con filtro por categoría y buscador.
export default function CuadroBeneficios({ plan, cuadro }) {
  const tieneCoseguros = cuadro.coseguros.length > 0;
  const [vista, setVista] = useState("beneficios");
  const [categoria, setCategoria] = useState("");
  const [busqueda, setBusqueda] = useState("");

  const grupos = vista === "beneficios" ? cuadro.beneficios : cuadro.coseguros;
  const q = busqueda.trim().toLowerCase();
  const filtrados = grupos
    .filter((g) => !categoria || g.categoria === categoria)
    .map((g) => ({
      ...g,
      items: q
        ? g.items.filter((it) => (g.categoria + " " + it.prestacion + " " + it.cobertura).toLowerCase().includes(q))
        : g.items,
    }))
    .filter((g) => g.items.some((it) => !it.subtitulo));

  const cambiarVista = (v) => { setVista(v); setCategoria(""); setBusqueda(""); };

  return (
    <div className="cuadro">
      <div className="cuadro-cabecera">
        <div>
          <h2>Beneficios del plan {plan.nombre}</h2>
          <p>Conocé en detalle qué cubre tu plan y cuánto pagás en cada prestación.</p>
        </div>
        {tieneCoseguros && (
          <div className="faq-tabs cuadro-vistas">
            <button className={vista === "beneficios" ? "activo" : ""} onClick={() => cambiarVista("beneficios")}>Cuadro de beneficios</button>
            <button className={vista === "coseguros" ? "activo" : ""} onClick={() => cambiarVista("coseguros")}>Coseguros</button>
          </div>
        )}
      </div>

      <div className="buscador">
        <input
          placeholder="Buscá una prestación (ej: kinesiología, vacunas, ortodoncia)..."
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
        />
        <select value={categoria} onChange={(e) => setCategoria(e.target.value)}>
          <option value="">Todas las categorías</option>
          {[...new Set(grupos.map((g) => g.categoria))].map((c) => <option key={c}>{c}</option>)}
        </select>
      </div>

      {filtrados.length > 0
        ? <Tabla grupos={filtrados} columna={vista === "beneficios" ? "Cobertura" : "Valor máximo de coseguro"} />
        : <p className="aviso info">No encontramos prestaciones con “{busqueda}”. Probá con otra palabra o consultanos.</p>}

      <div className="cuadro-referencias">
        <strong>Referencias</strong>
        <ul>{cuadro.referencias.map((r) => <li key={r}>{r}</li>)}</ul>
        {cuadro.nota && <p>* Plan PMO (Programa Médico Obligatorio). {cuadro.nota}</p>}
      </div>
    </div>
  );
}
