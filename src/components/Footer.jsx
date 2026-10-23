import { DATA } from "../data.js";

export default function Footer() {
  const CFG = DATA.config;
  return (
    <footer className="footer">
      <div className="contenedor footer-grilla">
        <div>
          <a href="#home" className="logo logo-footer">OSMISS<span>.</span></a>
          <p>Obra social comprometida con tu salud y la de tu familia.</p>
          <a href="#trabaja-con-nosotros" className="footer-empleo">
            💼 ¿Querés formar parte de nuestro equipo? <strong>Envianos tu CV</strong>
          </a>
        </div>
        <div>
          <strong>Navegación</strong>
          <ul>
            {DATA.menu.map((m) => <li key={m.id}><a href={"#" + m.id}>{m.label}</a></li>)}
            <li><a href="#trabaja-con-nosotros">Trabajá con nosotros</a></li>
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
          <p className="footer-urgencias">
            🚑 Urgencias 24 hs:{" "}
            {CFG.urgencias.telefonos.map((t, i) => (
              <span key={t.tel}>{i > 0 && " · "}<a href={"tel:" + t.tel}>{t.numero}</a></span>
            ))}
          </p>
          <p>
            📞 <a href={"tel:" + CFG.telefonoTel}>{CFG.telefono}</a><br />
            Interior (gratis): <a href={"tel:" + CFG.telefonoInteriorTel}>{CFG.telefonoInterior}</a><br />
            ✉️ <a href={"mailto:" + CFG.email}>{CFG.email}</a><br />
            📍 {CFG.direccion}, CABA<br />
            🕘 {CFG.horario}
          </p>
          <a href="#afiliarme" className="btn btn-destacado">Quiero afiliarme</a>
          <p className="footer-app">
            <strong>📱 Descargá la App OSMISS</strong>
            <a href={DATA.tramites.app.androidUrl} target="_blank" rel="noopener">Google Play</a>
            {" · "}
            <a href={DATA.tramites.app.iosUrl} target="_blank" rel="noopener">App Store</a>
          </p>
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
