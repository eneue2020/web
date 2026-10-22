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
          <p>📞 {CFG.telefono}<br />🚑 Guardia: {CFG.guardia}<br />✉️ {CFG.email}<br />📍 {CFG.direccion}</p>
          <a href="#afiliarme" className="btn btn-destacado">Quiero afiliarme</a>
        </div>
      </div>
      <div className="contenedor footer-legal">© {new Date().getFullYear()} OSMISS · Todos los derechos reservados</div>
    </footer>
  );
}
