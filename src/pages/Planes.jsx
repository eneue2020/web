import { useEffect, useRef, useState } from "react";
import { DATA } from "../data.js";
import { BENEFICIOS } from "../beneficios.js";
import { Pagina, Titulo, NoEncontrado } from "../components/Layout.jsx";
import CuadroBeneficios from "../components/CuadroBeneficios.jsx";
import { GrillaPlanes } from "../components/Planes.jsx";
import { CtaAfiliarme } from "../components/Bloques.jsx";

const COMPARATIVA = [
  ["Consultas médicas", "✔", "✔", "✔", "✔"],
  ["Especialistas sin derivación", "—", "✔", "✔", "✔"],
  ["Odontología", "—", "General", "General", "Completa + ortodoncia"],
  ["Internación", "—", "—", "Compartida", "Individual"],
  ["Medicamentos", "40%", "50%", "60%", "80%"],
  ["Cobertura nacional", "—", "—", "—", "✔"],
];

function PlanDetalle({ id }) {
  const [verBeneficios, setVerBeneficios] = useState(false);
  const cuadroRef = useRef(null);
  useEffect(() => {
    if (verBeneficios) cuadroRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [verBeneficios]);
  useEffect(() => setVerBeneficios(false), [id]);

  const plan = DATA.planes.find((p) => p.id === id);
  if (!plan) return <NoEncontrado />;
  const cartillaUrl = DATA.config.appUrl; // la cartilla se consulta en la app de afiliados
  const cuadro = BENEFICIOS[plan.id];
  return (
    <section className="seccion">
      <div className="contenedor">
        <a href="#planes" className="volver">← Todos los planes</a>
        <div className={"plan-ficha" + (plan.destacado ? " destacado" : "")}>
          <div className="plan-ficha-imagen" style={plan.imagen ? { backgroundImage: `url("${plan.imagen}")` } : null}>
            {!plan.imagen && <span>{plan.nombre}</span>}
            {plan.destacado && <span className="cinta">★ PLAN SUPERADOR</span>}
          </div>
          <div className="plan-ficha-texto">
            <h1>{plan.nombre}</h1>
            <p className="bajada">{plan.bajada}</p>
            <p>{plan.descripcion}</p>
            <div className="acciones">
              <a href={"#afiliarme/" + plan.id} className="btn btn-destacado">Quiero afiliarme</a>
              {cuadro && (
                <button
                  className="btn btn-primario"
                  onClick={() => (verBeneficios ? cuadroRef.current?.scrollIntoView({ behavior: "smooth" }) : setVerBeneficios(true))}
                  aria-expanded={verBeneficios}
                >
                  Beneficios
                </button>
              )}
              <a href={cartillaUrl} target="_blank" rel="noopener" className="btn btn-secundario">Ver cartilla</a>
            </div>
          </div>
        </div>
        {cuadro && verBeneficios && (
          <div ref={cuadroRef} className="cuadro-contenedor">
            <CuadroBeneficios plan={plan} cuadro={cuadro} />
            <div className="cuadro-cta">
              <p><strong>¿Te convence el {plan.nombre}?</strong> Sumate hoy y empezá a disfrutar de tu cobertura.</p>
              <a href={"#afiliarme/" + plan.id} className="btn btn-destacado">Quiero afiliarme</a>
            </div>
          </div>
        )}
        <div className="grilla" style={{ marginTop: 32 }}>
          <div className="tarjeta">
            <h3>Características</h3>
            <ul className="lista-check">{plan.caracteristicas.map((c) => <li key={c}>{c}</li>)}</ul>
          </div>
          <div className="tarjeta">
            <h3>Beneficios</h3>
            <ul className="lista-check">{plan.beneficios.map((b) => <li key={b}>{b}</li>)}</ul>
          </div>
          <div className="tarjeta">
            <h3>Información adicional</h3>
            <p>{plan.infoAdicional}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Planes({ detalle }) {
  if (detalle) return <PlanDetalle id={detalle} />;
  return (
    <>
      <Pagina titulo="Nuestros planes" bajada="Elegí la cobertura ideal para vos y tu familia">
        <GrillaPlanes />
      </Pagina>
      <section className="seccion" style={{ paddingTop: 0 }}>
        <div className="contenedor">
          <Titulo titulo="Comparativa de planes" />
          <div className="tabla-wrap">
            <table>
              <thead>
                <tr>
                  <th>Prestación</th>
                  {DATA.planes.map((p) => (
                    <th key={p.id} className={p.destacado ? "col-destacada" : ""}>{p.nombre}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {COMPARATIVA.map(([nombre, ...valores]) => (
                  <tr key={nombre}>
                    <td>{nombre}</td>
                    {valores.map((v, i) => (
                      <td key={i} className={DATA.planes[i]?.destacado ? "col-destacada" : ""}>{v}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
      <CtaAfiliarme />
    </>
  );
}
