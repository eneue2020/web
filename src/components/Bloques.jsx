import { DATA } from "../data.js";

export function PorQueElegirnos() {
  return (
    <div className="grilla">
      {DATA.porQueElegirnos.map((m) => (
        <div className="tarjeta motivo" key={m.titulo}>
          <div className="icono">{m.icono}</div>
          <h3>{m.titulo}</h3>
          <p>{m.texto}</p>
        </div>
      ))}
    </div>
  );
}

// Carrusel horizontal continuo de logos de prestadores.
export function CarruselLogos() {
  const logos = [...DATA.logos, ...DATA.logos]; // duplicado para el loop infinito
  return (
    <div className="logos">
      <div className="logos-pista">
        {logos.map((l, i) => (
          <div className="logo-item" key={i} aria-hidden={i >= DATA.logos.length}>
            {l.logo ? <img src={l.logo} alt={l.nombre} loading="lazy" /> : <span>{l.nombre}</span>}
          </div>
        ))}
      </div>
    </div>
  );
}

export function CtaAfiliarme() {
  return (
    <section className="cta-banda">
      <div className="contenedor">
        <div>
          <h2>¿Querés ser parte de OSMISS?</h2>
          <p>Dejanos tus datos y un asesor te ayuda a elegir el plan ideal.</p>
        </div>
        <a href="#afiliarme" className="btn btn-destacado">Quiero afiliarme</a>
      </div>
    </section>
  );
}

export function ListaNoticias({ cantidad }) {
  const noticias = cantidad ? DATA.noticias.slice(0, cantidad) : DATA.noticias;
  return (
    <div className="grilla">
      {noticias.map((n) => (
        <article className="tarjeta noticia" key={n.id}>
          <small className="fecha">{n.fecha}</small>
          <h3>{n.titulo}</h3>
          <p>{n.resumen}</p>
          <a href={"#novedades/" + n.id} className="leer-mas">Leer más →</a>
        </article>
      ))}
    </div>
  );
}
