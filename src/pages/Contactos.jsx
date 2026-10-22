import { DATA } from "../data.js";
import { Pagina } from "../components/Layout.jsx";
import { Formulario, Campo } from "../components/Formulario.jsx";

// Formulario Contacto / Sugerencias / Reclamos: tipo, nombre, apellido, email, teléfono y mensaje.
export default function Contactos() {
  const CFG = DATA.config;
  return (
    <Pagina titulo="Contactos" bajada="Consultas, sugerencias y reclamos">
      <div className="grilla contacto">
        <div className="tarjeta">
          <h3>Canales de atención</h3>
          <p>📞 {CFG.telefono} ({CFG.horario})</p>
          <p>📞 Interior del país (gratuito): {CFG.telefonoInterior}</p>
          <p>🚑 Guardia 24 hs: {CFG.guardia}</p>
          <p>✉️ {CFG.email}</p>
          <p>📍 {CFG.direccion}</p>
        </div>
        <div className="tarjeta">
          <Formulario tipo="contacto" textoBoton="Enviar">
            <label className="campo">
              <span>Tipo *</span>
              <select name="tipo" required defaultValue="">
                <option value="" disabled>Seleccioná una opción</option>
                <option>Consulta</option>
                <option>Sugerencia</option>
                <option>Reclamo</option>
              </select>
            </label>
            <div className="fila">
              <Campo label="Nombre" name="nombre" required />
              <Campo label="Apellido" name="apellido" required />
            </div>
            <div className="fila">
              <Campo label="Email" name="email" type="email" required />
              <Campo label="Teléfono" name="telefono" type="tel" />
            </div>
            <Campo label="Mensaje" name="mensaje" type="textarea" required />
          </Formulario>
        </div>
      </div>
    </Pagina>
  );
}
