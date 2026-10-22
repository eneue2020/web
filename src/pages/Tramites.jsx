import { DATA } from "../data.js";
import { Pagina } from "../components/Layout.jsx";

export default function Tramites() {
  return (
    <Pagina titulo="Trámites" bajada="Gestioná tus trámites de forma rápida">
      <div className="grilla">
        {DATA.tramites.map((t) => (
          <div className="tarjeta" key={t.titulo}>
            <h3>{t.titulo}</h3>
            <p style={{ marginBottom: 16 }}>{t.texto}</p>
            <a href={"#" + t.destino} className="btn btn-primario">Iniciar</a>
          </div>
        ))}
      </div>
    </Pagina>
  );
}
