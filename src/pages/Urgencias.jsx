import { DATA } from "../data.js";
import { Titulo } from "../components/Layout.jsx";

// Sección Urgencias: números destacados y fáciles de tocar en el celular.
export default function Urgencias() {
  const URG = DATA.config.urgencias;
  return (
    <>
      <section className="urgencias-hero">
        <div className="contenedor">
          <span className="etiqueta">Atención {URG.horario}</span>
          <h1>Urgencias y emergencias</h1>
          <p>Ante una urgencia, llamá al {URG.nombre} ({URG.prestador}). Te atienden de inmediato.</p>
          <div className="urgencias-numeros">
            {URG.telefonos.map((t) => (
              <a key={t.tel} href={"tel:" + t.tel} className="urgencias-numero" aria-label={"Llamar a urgencias al " + t.numero}>
                <span>📞 Tocá para llamar</span>
                <strong>{t.numero}</strong>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="seccion">
        <div className="contenedor">
          <Titulo titulo="¿Qué servicios incluye?" bajada={"Todo coordinado por " + URG.prestador + ", " + URG.horario + "."} />
          <div className="grilla">
            {URG.servicios.map((s) => (
              <div className="tarjeta motivo" key={s.titulo}>
                <div className="icono">{s.icono}</div>
                <h3>{s.titulo}</h3>
                <p>{s.texto}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="seccion seccion-alterna">
        <div className="contenedor">
          <div className="urgencias-info">
            <div className="tarjeta">
              <h3>Al llamar, tené a mano</h3>
              <ul className="lista-check">
                <li>Tu credencial OSMISS (física o digital)</li>
                <li>Tu DNI</li>
                <li>La dirección exacta donde estás y un teléfono de contacto</li>
              </ul>
            </div>
            <div className="tarjeta">
              <h3>Emergencias sin cargo</h3>
              <p>
                Las emergencias (código rojo) no tienen coseguro. Las consultas médicas a domicilio (código verde)
                pueden tener coseguro según tu plan: consultalo en el cuadro de beneficios.
              </p>
              <a href="#planes" className="btn btn-primario" style={{ marginTop: 14 }}>Ver planes y beneficios</a>
            </div>
            <div className="tarjeta">
              <h3>Si no podés comunicarte</h3>
              <p style={{ marginBottom: 12 }}>Ante una emergencia con riesgo de vida, también podés llamar a:</p>
              <div className="urgencias-publicos">
                {URG.publicos.map((p) => (
                  <a key={p.numero} href={"tel:" + p.numero}>
                    <strong>{p.numero}</strong>
                    <span>{p.nombre}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
