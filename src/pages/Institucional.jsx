import { DATA } from "../data.js";
import { Pagina, Titulo } from "../components/Layout.jsx";
import { PorQueElegirnos, Instituciones } from "../components/Bloques.jsx";

function Direccion({ direccion }) {
  const { presidente, marcoLegal, autoridades, comisionRevisora } = direccion;
  return (
    <section className="seccion" id="direccion">
      <div className="contenedor">
        <Titulo titulo="Dirección" bajada="Quiénes conducen OSMISS" />
        <div className="direccion">
          <figure className="direccion-presidente tarjeta">
            {presidente.foto && <img src={presidente.foto} alt={"Foto de " + presidente.nombre} loading="lazy" />}
            <figcaption>
              <strong>{presidente.nombre}</strong>
              <span>{presidente.cargo}</span>
            </figcaption>
          </figure>
          <div className="tarjeta direccion-texto">
            {marcoLegal.map((p) => <p key={p}>{p}</p>)}
            <dl className="autoridades">
              {autoridades.map((a) => (
                <div key={a.cargo}>
                  <dt>{a.cargo}</dt>
                  <dd>{a.nombre}</dd>
                </div>
              ))}
              <div className="autoridades-revisora">
                <dt>Comisión Revisora de Cuentas</dt>
                {comisionRevisora.map((n) => <dd key={n}>{n}</dd>)}
              </div>
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Institucional() {
  const inst = DATA.institucional;
  return (
    <>
      <Pagina titulo="Quiénes somos" bajada={inst.intro}>
        <div className="grilla">
          {inst.bloques.map((b) => (
            <div className="tarjeta" key={b.titulo}><h3>{b.titulo}</h3><p>{b.texto}</p></div>
          ))}
        </div>
      </Pagina>
      <section className="seccion seccion-alterna">
        <div className="contenedor">
          <Titulo titulo="¿Por qué elegirnos?" />
          <PorQueElegirnos />
        </div>
      </section>
      <Direccion direccion={inst.direccion} />
      <section className="seccion seccion-alterna">
        <div className="contenedor">
          <Titulo titulo="Instituciones vinculadas" />
          <Instituciones />
        </div>
      </section>
      <section className="cta-banda">
        <div className="contenedor">
          <div>
            <h2>¿Querés formar parte de nuestro equipo?</h2>
            <p>Envianos tu CV y sumate a una obra social que cuida a las personas.</p>
          </div>
          <a href="#trabaja-con-nosotros" className="btn btn-destacado">Envianos tu CV</a>
        </div>
      </section>
    </>
  );
}
