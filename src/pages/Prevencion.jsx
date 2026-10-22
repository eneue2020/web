import { DATA } from "../data.js";
import { Pagina } from "../components/Layout.jsx";

export default function Prevencion() {
  return (
    <Pagina titulo="Prevención" bajada="Cuidarte hoy es vivir mejor mañana">
      <div className="grilla">
        {DATA.prevencion.map((p) => (
          <div className="tarjeta" key={p.titulo}><h3>{p.titulo}</h3><p>{p.texto}</p></div>
        ))}
      </div>
    </Pagina>
  );
}
