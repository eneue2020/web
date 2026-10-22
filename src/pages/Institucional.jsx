import { DATA } from "../data.js";
import { Pagina, Titulo } from "../components/Layout.jsx";
import { PorQueElegirnos } from "../components/Bloques.jsx";

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
    </>
  );
}
