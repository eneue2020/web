import { DATA } from "../data.js";
import { Titulo } from "../components/Layout.jsx";

const PASOS = [
  { titulo: "Ingresá a la App OSMISS", texto: "Entrá con tu usuario. Si es tu primera vez, registrate (se hace una sola vez)." },
  { titulo: "Elegí “Pedidos de autorización”", texto: "Desde el inicio de la app, tocá la opción de autorizaciones." },
  { titulo: "Enviá tu orden médica", texto: "Cargá la foto o el archivo de la orden que te indicó tu médico." },
  { titulo: "Recibí la respuesta", texto: "Te avisamos por mensajes y notificaciones de la app." },
];

// Autorizaciones: explica el trámite y redirige a la app de afiliados.
export default function Autorizaciones() {
  const AUT = DATA.config.autorizaciones;
  return (
    <>
      <section className="autorizaciones-hero">
        <div className="contenedor">
          <span className="etiqueta">Online · sin turnos ni filas</span>
          <h1>Autorizaciones</h1>
          <p>
            Pedí la autorización de tus prácticas, estudios y recetas desde la App OSMISS,
            cuando quieras y desde donde estés.
          </p>
          <div className="acciones">
            <a href={AUT.url} target="_blank" rel="noopener" className="btn btn-destacado btn-grande">Pedir autorización en la App</a>
            <a href={AUT.registroUrl} target="_blank" rel="noopener" className="btn">¿Primera vez? Cómo registrarte</a>
          </div>
        </div>
      </section>

      <section className="seccion">
        <div className="contenedor">
          <Titulo titulo="¿Cómo pido una autorización?" bajada="En 4 pasos, desde tu celular o tu computadora" />
          <ol className="pasos">
            {PASOS.map((p, i) => (
              <li key={p.titulo} className="tarjeta">
                <span className="paso-numero">{i + 1}</span>
                <h3>{p.titulo}</h3>
                <p>{p.texto}</p>
              </li>
            ))}
          </ol>
          <p style={{ textAlign: "center", marginTop: 28 }}>
            <a href={AUT.url} target="_blank" rel="noopener" className="btn btn-primario btn-grande">Ir a Pedidos de autorización</a>
          </p>
        </div>
      </section>

      <section className="seccion seccion-alterna">
        <div className="contenedor">
          <div className="urgencias-info">
            <div className="tarjeta">
              <h3>¿Qué es una autorización?</h3>
              <p>
                Es el trámite previo que se realiza cuando tu médico te indica una práctica, un estudio o una
                receta que lo requiere. Una vez autorizada, podés atenderte con el prestador.
              </p>
            </div>
            <div className="tarjeta">
              <h3>¿Quiénes pueden usar la App?</h3>
              <p>
                Los afiliados activos de los planes OSMISS-100, OSMISS-150 y OSMISS-200. Si no sos afiliado activo,
                comunicate con el sector Afiliaciones para regularizar tu situación.
              </p>
              <a href="#contactos/afiliaciones" className="leer-mas">Contactar a Afiliaciones →</a>
            </div>
            <div className="tarjeta">
              <h3>¿Tenés dudas?</h3>
              <p>Escribile al sector Autorizaciones y te ayudamos con tu pedido.</p>
              <a href={"mailto:" + AUT.email} className="leer-mas">{AUT.email}</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
