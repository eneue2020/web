import { DATA } from "../data.js";

export default function Footer() {
  const CFG = DATA.config;
  return (
    <footer className="footer">
      <div className="contenedor footer-grilla">
        <div>
          <a href="#home" className="logo logo-footer">OSMISS<span>.</span></a>
          <p>Obra social comprometida con tu salud y la de tu familia.</p>
        </div>
        <div>
          <strong>Navegación</strong>
          <ul>
            {DATA.menu.map((m) => <li key={m.id}><a href={"#" + m.id}>{m.label}</a></li>)}
          </ul>
        </div>
        <div>
          <strong>Planes</strong>
          <ul>
            {DATA.planes.map((p) => <li key={p.id}><a href={"#planes/" + p.id}>{p.nombre}</a></li>)}
          </ul>
        </div>
        <div>
          <strong>Contacto</strong>
          <p>
            📞 <a href={"tel:" + CFG.telefonoTel}>{CFG.telefono}</a><br />
            Interior (gratis): <a href={"tel:" + CFG.telefonoInteriorTel}>{CFG.telefonoInterior}</a><br />
            ✉️ <a href={"mailto:" + CFG.email}>{CFG.email}</a><br />
            📍 {CFG.direccion}, CABA<br />
            🕘 {CFG.horario}
          </p>
          <a href="#afiliarme" className="btn btn-destacado">Quiero afiliarme</a>
        </div>
      </div>
      <div className="contenedor footer-instituciones">
        <strong>Instituciones vinculadas</strong>
        <ul>
          {CFG.instituciones.filter((i) => i.url).map((i) => (
            <li key={i.nombre}><a href={i.url} target="_blank" rel="noopener" title={i.nombre}>{i.corto}</a></li>
          ))}
        </ul>
      </div>
      <div className="contenedor footer-legal">
        © {new Date().getFullYear()} OSMISS · Obra Social de Ministros, Secretarios y Subsecretarios · RNOS {CFG.rnos} · CUIT {CFG.cuit}
        <br />
        SSSalud: <a href={"tel:" + CFG.sssalud.telefonoTel}>{CFG.sssalud.telefono}</a> · {CFG.sssalud.horario}
      </div>
    </footer>
  );
}
