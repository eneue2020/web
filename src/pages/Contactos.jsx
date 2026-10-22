import { DATA } from "../data.js";
import { Pagina } from "../components/Layout.jsx";
import { Formulario, Campo } from "../components/Formulario.jsx";

// Formulario Contacto / Sugerencias / Reclamos: tipo, nombre, apellido, email, teléfono y mensaje.
export default function Contactos({ detalle }) {
  const CFG = DATA.config;
  const sectores = DATA.tramites.sectores;
  // #contactos/<id> preselecciona el área (viene desde Trámites).
  const area = sectores.find((s) => s.id === detalle);
  return (
    <>
      <Pagina titulo="Contactos" bajada="Estamos para ayudarte. Elegí el canal que te quede más cómodo y te respondemos a la brevedad.">
        <div className="contacto-canales">
          <a className="tarjeta canal" href={"tel:" + CFG.telefonoTel}>
            <span className="icono">📞</span>
            <h3>Llamanos</h3>
            <p className="dato">{CFG.telefono}</p>
            <p>Líneas rotativas · {CFG.horario}</p>
          </a>
          <a className="tarjeta canal" href={"tel:" + CFG.telefonoInteriorTel}>
            <span className="icono">☎️</span>
            <h3>Desde el interior</h3>
            <p className="dato">{CFG.telefonoInterior}</p>
            <p>Llamada gratuita · {CFG.horario}</p>
          </a>
          <a className="tarjeta canal" href={"mailto:" + CFG.email}>
            <span className="icono">✉️</span>
            <h3>Escribinos</h3>
            <p className="dato">{CFG.email}</p>
            <p>Te respondemos a la brevedad</p>
          </a>
          <a className="tarjeta canal" href={CFG.appUrl} target="_blank" rel="noopener">
            <span className="icono">📱</span>
            <h3>App OSMISS</h3>
            <p className="dato">osmiss-bymovi</p>
            <p>Cartilla y gestiones desde tu celular</p>
          </a>
        </div>

        <div className="grilla contacto">
          <div className="tarjeta">
            <h3>Envianos tu consulta</h3>
            <p style={{ marginBottom: 16 }}>
              ¿Querés sumarte, tenés una sugerencia o un reclamo? Completá el formulario y te contactamos.
            </p>
            <Formulario tipo="contacto" textoBoton="Enviar consulta">
              <label className="campo">
                <span>Tipo *</span>
                <select name="tipo" required defaultValue="">
                  <option value="" disabled>Seleccioná una opción</option>
                  <option>Quiero afiliarme</option>
                  <option>Consulta</option>
                  <option>Sugerencia</option>
                  <option>Reclamo</option>
                </select>
              </label>
              <label className="campo">
                <span>Área</span>
                <select name="area" defaultValue={area ? area.nombre : ""} key={detalle || "general"}>
                  <option value="">No estoy seguro/a</option>
                  {sectores.map((s) => <option key={s.id}>{s.nombre}</option>)}
                </select>
              </label>
              <div className="fila">
                <Campo label="Nombre" name="nombre" required />
                <Campo label="Apellido" name="apellido" required />
              </div>
              <div className="fila">
                <Campo label="Email" name="email" type="email" required />
                <Campo label="Teléfono" name="telefono" type="tel" required />
              </div>
              <Campo label="DNI, CUIL o CUIT" name="dni" inputMode="numeric" />
              <Campo label="Mensaje" name="mensaje" type="textarea" required />
              <p className="ayuda">
                Para ayudarte más rápido, contanos brevemente tu consulta e incluí tu DNI o CUIL y un teléfono de contacto.
              </p>
            </Formulario>
          </div>

          <div className="tarjeta sede">
            <h3>Casa Central</h3>
            <p>
              📍 {CFG.direccion}<br />
              {CFG.localidad}<br />
              🕘 {CFG.horario}
            </p>
            <iframe
              className="mapa"
              title="Mapa de OSMISS Casa Central"
              src={CFG.mapaEmbed}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <a href={CFG.mapaUrl} target="_blank" rel="noopener" className="btn btn-secundario">Cómo llegar</a>
          </div>
        </div>
      </Pagina>

      <section className="seccion seccion-alterna">
        <div className="contenedor">
          <div className="seccion-titulo">
            <h2>Escribile directo al área que necesitás</h2>
            <p>Así tu consulta llega a quien puede resolverla</p>
          </div>
          <div className="grilla">
            {CFG.emails.map((e) => (
              <a className="tarjeta canal" href={"mailto:" + e.email} key={e.email}>
                <h3>{e.area}</h3>
                <p>{e.texto}</p>
                <p className="dato">{e.email}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="seccion">
        <div className="contenedor">
          <div className="tarjeta sssalud">
            <h3>Superintendencia de Servicios de Salud</h3>
            <p>
              Órgano de control de obras sociales y entidades de medicina prepaga.{" "}
              <a href={"tel:" + CFG.sssalud.telefonoTel}><strong>{CFG.sssalud.telefono}</strong></a>
              {" "}· {CFG.sssalud.horario} · {CFG.sssalud.direccion}
            </p>
            <p className="legal">OSMISS · RNOS {CFG.rnos} · CUIT {CFG.cuit}</p>
          </div>
        </div>
      </section>
    </>
  );
}
