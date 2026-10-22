import Carrusel from "../components/Carrusel.jsx";
import { Titulo } from "../components/Layout.jsx";
import { GrillaPlanes } from "../components/Planes.jsx";
import { PorQueElegirnos, CarruselLogos, ListaNoticias, CtaAfiliarme } from "../components/Bloques.jsx";

export default function Home() {
  return (
    <>
      <Carrusel />
      <section className="seccion">
        <div className="contenedor">
          <Titulo titulo="Nuestros planes" bajada="Elegí la cobertura ideal para vos y tu familia" />
          <GrillaPlanes />
        </div>
      </section>
      <section className="seccion seccion-alterna">
        <div className="contenedor">
          <Titulo titulo="¿Por qué elegirnos?" />
          <PorQueElegirnos />
        </div>
      </section>
      <section className="seccion">
        <div className="contenedor">
          <Titulo titulo="Nuestros prestadores" bajada="Te atendés con los mejores profesionales" />
        </div>
        <CarruselLogos />
      </section>
      <section className="seccion" style={{ paddingTop: 0 }}>
        <div className="contenedor">
          <Titulo titulo="Últimas novedades" />
          <ListaNoticias cantidad={3} />
          <p style={{ textAlign: "center", marginTop: 28 }}>
            <a href="#novedades" className="btn btn-primario">Ver todas las novedades</a>
          </p>
        </div>
      </section>
      <CtaAfiliarme />
    </>
  );
}
