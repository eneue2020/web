import { useState } from "react";
import { DATA } from "../data.js";

// Menú horizontal superior
export default function Header({ pagina }) {
  const [abierto, setAbierto] = useState(false);
  const cerrar = () => setAbierto(false);
  return (
    <header className="header">
      <div className="contenedor">
        <a href="#home" className="logo">OSMISS<span>.</span></a>
        <button className="btn-menu" aria-label="Abrir menú" onClick={() => setAbierto(!abierto)}>☰</button>
        <nav className={"nav" + (abierto ? " abierto" : "")}>
          <ul>
            {DATA.menu.map((item) => (
              <li key={item.id}>
                <a href={"#" + item.id} className={pagina === item.id ? "activo" : ""} onClick={cerrar}>
                  {item.label}
                </a>
              </li>
            ))}
            <li className="nav-cta">
              <a href="#afiliarme" className="btn btn-destacado" onClick={cerrar}>Quiero afiliarme</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
