import { useEffect } from "react";
import { DATA } from "./data.js";
import { useRuta } from "./hooks/useRuta.js";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import { NoEncontrado } from "./components/Layout.jsx";
import Home from "./pages/Home.jsx";
import Planes from "./pages/Planes.jsx";
import Cartilla from "./pages/Cartilla.jsx";
import Novedades from "./pages/Novedades.jsx";
import Prevencion from "./pages/Prevencion.jsx";
import Institucional from "./pages/Institucional.jsx";
import FAQ from "./pages/FAQ.jsx";
import Tramites from "./pages/Tramites.jsx";
import Contactos from "./pages/Contactos.jsx";
import Afiliarme from "./pages/Afiliarme.jsx";
import Urgencias from "./pages/Urgencias.jsx";
import { BotonUrgencias } from "./components/Urgencias.jsx";

const PAGINAS = {
  home: Home, planes: Planes, cartilla: Cartilla, novedades: Novedades,
  prevencion: Prevencion, institucional: Institucional, faq: FAQ,
  tramites: Tramites, contactos: Contactos, afiliarme: Afiliarme,
  urgencias: Urgencias,
};

export default function App() {
  const { pagina, detalle } = useRuta();
  const Componente = PAGINAS[pagina] || NoEncontrado;

  useEffect(() => {
    const item = DATA.menu.find((m) => m.id === pagina);
    document.title = (item && pagina !== "home" ? item.label + " | " : "") + "OSMISS - Obra Social";
  }, [pagina]);

  return (
    <>
      <Header pagina={pagina} />
      <main><Componente detalle={detalle} /></main>
      <Footer />
      {pagina !== "urgencias" && <BotonUrgencias />}
    </>
  );
}
