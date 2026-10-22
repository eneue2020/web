import { DATA } from "../data.js";
import { Titulo } from "../components/Layout.jsx";
import { Formulario, Campo } from "../components/Formulario.jsx";

// Trabajá con nosotros: búsqueda de talentos con envío de CV.
export default function TrabajaConNosotros() {
  const RRHH = DATA.config.rrhh;
  return (
    <>
      <section className="autorizaciones-hero">
        <div className="contenedor">
          <span className="etiqueta">Trabajá con nosotros</span>
          <h1>¿Querés formar parte de nuestro equipo?</h1>
          <p>
            Envianos tu CV. Buscamos personas comprometidas con la salud y con vocación de servicio
            para acompañar a nuestros afiliados todos los días.
          </p>
          <div className="acciones">
            <button
              className="btn btn-destacado btn-grande"
              onClick={() => document.getElementById("formulario-cv")?.scrollIntoView({ behavior: "smooth" })}
            >
              Enviar mi CV
            </button>
          </div>
        </div>
      </section>

      <section className="seccion">
        <div className="contenedor">
          <Titulo titulo="¿Por qué trabajar en OSMISS?" />
          <div className="grilla">
            {RRHH.motivos.map((m) => (
              <div className="tarjeta motivo" key={m.titulo}>
                <div className="icono">{m.icono}</div>
                <h3>{m.titulo}</h3>
                <p>{m.texto}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="seccion seccion-alterna" id="formulario-cv">
        <div className="contenedor">
          <Titulo titulo="Envianos tu CV" bajada="Completá tus datos y adjuntá tu currículum. Lo vamos a tener en cuenta para próximas búsquedas." />
          <div className="tarjeta form-tarjeta">
            <Formulario
              tipo="cv"
              textoBoton="Enviar mi CV"
              mensajeOk="¡Gracias por tu interés en sumarte a OSMISS! Recibimos tu CV y nos vamos a contactar si tu perfil se ajusta a alguna búsqueda."
            >
              <div className="fila">
                <Campo label="Nombre" name="nombre" required />
                <Campo label="Apellido" name="apellido" required />
              </div>
              <div className="fila">
                <Campo label="Email" name="email" type="email" required />
                <Campo label="Teléfono" name="telefono" type="tel" required />
              </div>
              <label className="campo">
                <span>Área de interés *</span>
                <select name="areaInteres" required defaultValue="">
                  <option value="" disabled>Seleccioná un área</option>
                  {RRHH.areas.map((a) => <option key={a}>{a}</option>)}
                </select>
              </label>
              <label className="campo">
                <span>Adjuntá tu CV * <small className="ayuda">(PDF, DOC o DOCX, hasta {RRHH.maxMb} MB)</small></span>
                <input
                  type="file"
                  name="cv"
                  accept=".pdf,.doc,.docx"
                  data-max-mb={RRHH.maxMb}
                  required
                  className="campo-archivo"
                />
              </label>
              <Campo label="Contanos sobre vos (opcional)" name="mensaje" type="textarea" />
              <label className="campo-check">
                <input type="checkbox" name="consentimiento" value="si" required />
                <span>Acepto que OSMISS guarde mis datos y mi CV para procesos de selección.</span>
              </label>
            </Formulario>
          </div>
        </div>
      </section>
    </>
  );
}
