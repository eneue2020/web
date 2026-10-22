import { DATA } from "../data.js";
import { Pagina } from "../components/Layout.jsx";
import { Formulario, Campo } from "../components/Formulario.jsx";

// Formulario "Quiero afiliarme": nombre, apellido, DNI, teléfono, email, fecha de nacimiento, comentarios.
export default function Afiliarme({ detalle }) {
  const plan = DATA.planes.find((p) => p.id === detalle);
  return (
    <Pagina titulo="Quiero afiliarme" bajada="Completá tus datos y un asesor se comunicará con vos">
      <div className="tarjeta form-tarjeta">
        <Formulario tipo="afiliacion" textoBoton="Enviar solicitud">
          <div className="fila">
            <Campo label="Nombre" name="nombre" required />
            <Campo label="Apellido" name="apellido" required />
          </div>
          <div className="fila">
            <Campo label="DNI" name="dni" inputMode="numeric" pattern="[0-9]{7,8}" title="7 u 8 números, sin puntos" required />
            <Campo label="Fecha de nacimiento" name="fechaNacimiento" type="date" required />
          </div>
          <div className="fila">
            <Campo label="Teléfono" name="telefono" type="tel" required />
            <Campo label="Email" name="email" type="email" required />
          </div>
          <label className="campo">
            <span>Plan de interés</span>
            <select name="plan" defaultValue={plan ? plan.nombre : ""}>
              <option value="">Todavía no lo sé</option>
              {DATA.planes.map((p) => <option key={p.id}>{p.nombre}</option>)}
            </select>
          </label>
          <Campo label="Comentarios" name="comentarios" type="textarea" />
        </Formulario>
      </div>
    </Pagina>
  );
}
