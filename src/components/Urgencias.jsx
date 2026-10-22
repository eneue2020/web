import { useState } from "react";
import { DATA } from "../data.js";

const URG = DATA.config.urgencias;

// Barra roja fija arriba del menú (escritorio): números de urgencia siempre a la vista.
export function BarraUrgencias() {
  return (
    <div className="barra-urgencias">
      <div className="contenedor">
        <span className="barra-urgencias-titulo">🚑 Urgencias y emergencias {URG.horario.split(",")[0]}</span>
        <span className="barra-urgencias-numeros">
          {URG.telefonos.map((t) => (
            <a key={t.tel} href={"tel:" + t.tel} aria-label={"Llamar a urgencias al " + t.numero}>📞 {t.numero}</a>
          ))}
        </span>
        <a href="#urgencias" className="barra-urgencias-mas">Más información</a>
      </div>
    </div>
  );
}

// Botón flotante (celular): un toque despliega los números para llamar.
export function BotonUrgencias() {
  const [abierto, setAbierto] = useState(false);
  return (
    <div className={"boton-urgencias" + (abierto ? " abierto" : "")}>
      {abierto && (
        <div className="boton-urgencias-panel" role="dialog" aria-label="Teléfonos de urgencias">
          <strong>Urgencias {URG.horario.split(",")[0]}</strong>
          <small>{URG.nombre} · {URG.prestador}</small>
          {URG.telefonos.map((t) => (
            <a key={t.tel} href={"tel:" + t.tel} className="btn btn-urgencia">📞 Llamar al {t.numero}</a>
          ))}
          <a href="#urgencias" className="boton-urgencias-mas" onClick={() => setAbierto(false)}>Ver más información</a>
        </div>
      )}
      <button
        className="boton-urgencias-disparador"
        onClick={() => setAbierto(!abierto)}
        aria-expanded={abierto}
        aria-label={abierto ? "Cerrar teléfonos de urgencias" : "Ver teléfonos de urgencias"}
      >
        {abierto ? "✕" : "🚑"}
        <span>{abierto ? "Cerrar" : "Urgencias"}</span>
      </button>
    </div>
  );
}
