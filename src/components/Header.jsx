import { useState } from "react";
import { DATA } from "../data.js";
import { BarraUrgencias } from "./Urgencias.jsx";

// Menú horizontal superior
export default function Header({ pagina }) {
  const [abierto, setAbierto] = useState(false);
  const cerrar = () => setAbierto(false);
  return (
    <header className="header">
      <BarraUrgencias />
      <div className="contenedor header-principal">
        <a href="#home" className="logo">OSMISS<span>.</span></a>
        <button className="btn-menu" aria-label="Abrir menú" onClick={() => setAbierto(!abierto)}>☰</button>
        <nav className={"nav" + (abierto ? " abierto" : "")}>
          <ul>
            {DATA.menu.map((item) => (
              <li key={item.id}>
                <a
                  href={"#" + item.id}
                  className={(pagina === item.id ? "activo" : "") + (item.urgente ? " nav-urgente" : "")}
                  onClick={cerrar}
                >
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
