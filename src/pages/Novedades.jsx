import { DATA } from "../data.js";
import { Pagina, NoEncontrado } from "../components/Layout.jsx";
import { ListaNoticias } from "../components/Bloques.jsx";

function NotaDetalle({ id }) {
  const n = DATA.noticias.find((x) => x.id === id);
  if (!n) return <NoEncontrado />;
  return (
    <section className="seccion">
      <div className="contenedor nota">
        <a href="#novedades" className="volver">← Todas las novedades</a>
        <small className="fecha">{n.fecha}</small>
        <h1>{n.titulo}</h1>
        <p className="nota-resumen">{n.resumen}</p>
        {n.cuerpo.map((parrafo, i) => <p key={i}>{parrafo}</p>)}
      </div>
    </section>
  );
}

export default function Novedades({ detalle }) {
  if (detalle) return <NotaDetalle id={detalle} />;
  return (
    <Pagina titulo="Novedades" bajada="Enterate de las últimas noticias de OSMISS">
      <ListaNoticias />
    </Pagina>
  );
}
