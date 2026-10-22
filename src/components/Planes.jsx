import { DATA } from "../data.js";

export function PlanCard({ plan }) {
  return (
    <article className={"plan" + (plan.destacado ? " destacado" : "")}>
      {plan.destacado && <span className="cinta">★ PLAN SUPERADOR</span>}
      <h3>{plan.nombre}</h3>
      <p className="bajada">{plan.bajada}</p>
      <ul>
        {plan.caracteristicas.map((p) => <li key={p}>{p}</li>)}
      </ul>
      <a href={"#planes/" + plan.id} className={"btn " + (plan.destacado ? "btn-destacado" : "btn-primario")}>
        Ver cobertura
      </a>
      <a href={DATA.config.cartillaUrl} target="_blank" rel="noopener" className="link-cartilla">Ver cartilla →</a>
    </article>
  );
}

export function GrillaPlanes() {
  return (
    <div className="planes">
      {DATA.planes.map((plan) => <PlanCard key={plan.id} plan={plan} />)}
    </div>
  );
}
