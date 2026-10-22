import { DATA } from "../data.js";
import { Pagina } from "../components/Layout.jsx";
import { CtaAfiliarme } from "../components/Bloques.jsx";

// Trámites a distancia: App OSMISS y sectores de Casa Central.
export default function Tramites() {
  const { app, sectores, ayuda } = DATA.tramites;
  const CFG = DATA.config;
  return (
    <>
      <Pagina titulo="Trámites a distancia" bajada="Hacé tus gestiones sin moverte de tu casa: desde la app o escribiéndole directo al sector que lo resuelve.">
        <div className="app-bloque">
          <div className="app-texto">
            <span className="etiqueta">Nueva</span>
            <h3>{app.titulo}</h3>
            <p>{app.bajada}</p>
            <ul className="app-funciones">
              {app.funciones.map((f) => (
                <li key={f.texto}><span>{f.icono}</span>{f.texto}</li>
              ))}
            </ul>
            <div className="acciones">
              <a href={app.webUrl} target="_blank" rel="noopener" className="btn btn-destacado">Ingresar a la app</a>
              <a href={app.androidUrl} target="_blank" rel="noopener" className="btn">Descargar en Google Play</a>
            </div>
            <p className="app-aclaracion">
              {app.aclaracion}{" "}
              <a href={app.masInfoUrl} target="_blank" rel="noopener">Más información</a>
            </p>
          </div>
          <div className="app-celular" aria-hidden="true">
            <div className="celular">
              <div className="celular-pantalla">
                <strong>OSMISS</strong>
                <div className="credencial">
                  <small>Credencial digital</small>
                  <span>Afiliado/a</span>
                  <small>N° 000000/00</small>
                </div>
                {app.funciones.slice(1, 5).map((f) => (
                  <div className="celular-item" key={f.texto}>{f.icono} {f.texto}</div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Pagina>

      <section className="seccion seccion-alterna">
        <div className="contenedor">
          <div className="seccion-titulo">
            <h2>¿Qué trámite necesitás hacer?</h2>
            <p>Escribile directo al sector que lo resuelve y te respondemos a la brevedad</p>
          </div>
          <div className="sectores">
            {sectores.map((s) => (
              <article className="tarjeta sector" key={s.id}>
                <div className="sector-cabecera">
                  <span className="icono">{s.icono}</span>
                  <div>
                    <h3>{s.nombre}</h3>
                    <small>{s.para}</small>
                  </div>
                </div>
                <ul className="lista-check">
                  {s.tramites.map((t) => <li key={t}>{t}</li>)}
                </ul>
                <div className="sector-acciones">
                  {s.id === "gerencia-medica" && (
                    <a href={CFG.autorizaciones.url} target="_blank" rel="noopener" className="btn btn-destacado">Pedir autorización</a>
                  )}
                  <a href={"#contactos/" + s.id} className="btn btn-primario">Hacer la consulta</a>
                  <a href={"mailto:" + s.email} className="sector-email">{s.email}</a>
                </div>
              </article>
            ))}
          </div>
          <div className="aviso info" style={{ marginTop: 28, marginBottom: 0 }}>
            💡 {ayuda}
          </div>
          <p className="tramites-telefono">
            ¿Preferís llamar? <a href={"tel:" + CFG.telefonoTel}><strong>{CFG.telefono}</strong></a> o, desde el interior,
            sin cargo al <a href={"tel:" + CFG.telefonoInteriorTel}><strong>{CFG.telefonoInterior}</strong></a> · {CFG.horario}.
          </p>
        </div>
      </section>

      <CtaAfiliarme />
    </>
  );
}
