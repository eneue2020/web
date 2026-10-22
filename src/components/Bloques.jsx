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

// Accesos rápidos del Home: lo que más buscan los afiliados, a un toque.
export function AccesosRapidos() {
  const CFG = DATA.config;
  const tel = CFG.urgencias.telefonos[0];
  const accesos = [
    { icono: "✅", titulo: "Autorizaciones", texto: "Pedila online en la App", href: CFG.autorizaciones.url, externo: true },
    { icono: "🩺", titulo: "Cartilla", texto: "Encontrá prestadores", href: "#cartilla" },
    { icono: "💳", titulo: "Credencial digital", texto: "Llevala en tu celular", href: CFG.credencialUrl, externo: true },
    { icono: "🚑", titulo: "Urgencias 24 hs", texto: tel.numero, href: "tel:" + tel.tel, urgente: true },
  ];
  return (
    <nav className="accesos" aria-label="Accesos rápidos">
      {accesos.map((a) => (
        <a
          key={a.titulo}
          href={a.href}
          className={"acceso" + (a.urgente ? " acceso-urgente" : "")}
          {...(a.externo ? { target: "_blank", rel: "noopener" } : {})}
        >
          <span className="acceso-icono">{a.icono}</span>
          <span>
            <strong>{a.titulo}</strong>
            <small>{a.texto}</small>
          </span>
        </a>
      ))}
    </nav>
  );
}

// Logos con link a las instituciones vinculadas (solo las que tienen URL cargada).
export function Instituciones() {
  const lista = DATA.config.instituciones.filter((i) => i.url);
  return (
    <div className="instituciones">
      {lista.map((i) => (
        <a key={i.nombre} href={i.url} target="_blank" rel="noopener" className="institucion" title={i.nombre}>
          {i.logo ? <img src={i.logo} alt={i.nombre} loading="lazy" /> : <span>{i.corto}</span>}
          <small>{i.corto}</small>
        </a>
      ))}
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
