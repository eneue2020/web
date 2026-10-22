import { DATA } from "../data.js";
import { Titulo } from "../components/Layout.jsx";
import { Formulario, Campo } from "../components/Formulario.jsx";

const irAlFormulario = () => document.getElementById("formulario-empresa")?.scrollIntoView({ behavior: "smooth" });

// Empresas: captación de empresas ("Quiero asociar a mi empresa") y atención a empleadores asociados.
export default function Empresas() {
  const EMP = DATA.config.empresas;
  const CFG = DATA.config;
  return (
    <>
      <section className="autorizaciones-hero">
        <div className="contenedor">
          <span className="etiqueta">Empresas y empleadores</span>
          <h1>Quiero asociar a mi empresa</h1>
          <p>
            Brindale a tu equipo la cobertura de OSMISS. Dejanos los datos de tu empresa y un asesor
            se comunica con vos para armar la mejor propuesta.
          </p>
          <div className="acciones">
            <button className="btn btn-destacado btn-grande" onClick={irAlFormulario}>Quiero asociar a mi empresa</button>
            <a href="#planes" className="btn">Ver planes</a>
          </div>
        </div>
      </section>

      <section className="seccion">
        <div className="contenedor">
          <Titulo titulo="¿Por qué elegir OSMISS para tu empresa?" />
          <div className="grilla">
            {EMP.beneficios.map((b) => (
              <div className="tarjeta motivo" key={b.titulo}>
                <div className="icono">{b.icono}</div>
                <h3>{b.titulo}</h3>
                <p>{b.texto}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="seccion seccion-alterna" id="formulario-empresa">
        <div className="contenedor">
          <Titulo titulo="Quiero asociar a mi empresa" bajada="Completá el formulario y te contactamos a la brevedad" />
          <div className="tarjeta form-tarjeta">
            <Formulario
              tipo="empresa"
              textoBoton="Enviar solicitud"
              mensajeOk="¡Gracias por tu interés! Recibimos los datos de tu empresa y un asesor se va a comunicar con vos a la brevedad."
            >
              <div className="fila">
                <Campo label="Razón social" name="razonSocial" required />
                <Campo
                  label="CUIT"
                  name="cuit"
                  inputMode="numeric"
                  pattern="\d{2}-?\d{8}-?\d"
                  title="11 números, con o sin guiones (ej. 30-12345678-9)"
                  placeholder="30-12345678-9"
                  required
                />
              </div>
              <div className="fila">
                <label className="campo">
                  <span>Cantidad de empleados *</span>
                  <select name="empleados" required defaultValue="">
                    <option value="" disabled>Seleccioná una opción</option>
                    {EMP.empleados.map((e) => <option key={e}>{e}</option>)}
                  </select>
                </label>
                <Campo label="Rubro o actividad" name="rubro" />
              </div>
              <div className="fila">
                <Campo label="Localidad" name="localidad" required />
                <Campo label="Provincia" name="provincia" required />
              </div>
              <div className="fila">
                <Campo label="Nombre y apellido del contacto" name="contacto" required />
                <Campo label="Cargo" name="cargo" />
              </div>
              <div className="fila">
                <Campo label="Email" name="email" type="email" required />
                <Campo label="Teléfono" name="telefono" type="tel" required />
              </div>
              <Campo label="Comentarios" name="comentarios" type="textarea" />
            </Formulario>
          </div>
        </div>
      </section>

      <section className="seccion">
        <div className="contenedor">
          <Titulo titulo="¿Tu empresa ya está asociada?" bajada="Escribile directo al sector que resuelve tu consulta" />
          <div className="grilla">
            {EMP.asociadas.map((a) => (
              <div className="tarjeta" key={a.titulo}>
                <h3>{a.titulo}</h3>
                <p style={{ marginBottom: 14 }}>{a.texto}</p>
                <div className="sector-acciones">
                  <a href={"#contactos/" + a.area} className="btn btn-primario">Hacer la consulta</a>
                  <a href={"mailto:" + a.email} className="sector-email">{a.email}</a>
                </div>
              </div>
            ))}
            <div className="tarjeta">
              <h3>Por teléfono</h3>
              <p>
                📞 <a href={"tel:" + CFG.telefonoTel}>{CFG.telefono}</a><br />
                ☎️ <a href={"tel:" + CFG.telefonoInteriorTel}>{CFG.telefonoInterior}</a> (gratis desde el interior)<br />
                🕘 {CFG.horario}
              </p>
            </div>
          </div>
          <div className="aviso info" style={{ marginTop: 24, marginBottom: 0 }}>
            ℹ️ {EMP.aviso} {EMP.ayuda}
          </div>
        </div>
      </section>
    </>
  );
}
