import { useState } from "react";
import { DATA } from "../data.js";
import { Pagina } from "../components/Layout.jsx";

export default function Cartilla() {
  const [texto, setTexto] = useState("");
  const [especialidad, setEspecialidad] = useState("");
  const especialidades = [...new Set(DATA.cartilla.map((c) => c.especialidad))];
  const resultados = DATA.cartilla.filter((c) =>
    (c.nombre + " " + c.localidad).toLowerCase().includes(texto.toLowerCase()) &&
    (!especialidad || c.especialidad === especialidad)
  );
  return (
    <Pagina titulo="Cartilla de prestadores" bajada="Buscá profesionales y centros de atención">
      <div className="aviso info">
        Consultá la cartilla completa y actualizada de OSMISS.{" "}
        <a href={DATA.config.cartillaUrl} target="_blank" rel="noopener"><strong>Abrir cartilla oficial →</strong></a>
      </div>
      <div className="buscador">
        <input placeholder="Nombre o localidad..." value={texto} onChange={(e) => setTexto(e.target.value)} />
        <select value={especialidad} onChange={(e) => setEspecialidad(e.target.value)}>
          <option value="">Todas las especialidades</option>
          {especialidades.map((e) => <option key={e}>{e}</option>)}
        </select>
      </div>
      <div className="grilla">
        {resultados.map((c) => (
          <div className="tarjeta" key={c.nombre}>
            <h3>{c.nombre}</h3>
            <p>{c.especialidad} · {c.localidad}</p>
          </div>
        ))}
      </div>
      {resultados.length === 0 && <p>No se encontraron prestadores.</p>}
    </Pagina>
  );
}
