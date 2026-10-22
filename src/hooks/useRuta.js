import { useEffect, useState } from "react";

// Navegación por hash: #planes, #planes/osmiss-500, #novedades/<id>
function leer() {
  const [pagina, detalle] = (window.location.hash.replace("#", "") || "home").split("/");
  return { pagina, detalle };
}

export function useRuta() {
  const [ruta, setRuta] = useState(leer);
  useEffect(() => {
    const alCambiar = () => { setRuta(leer()); window.scrollTo(0, 0); };
    window.addEventListener("hashchange", alCambiar);
    return () => window.removeEventListener("hashchange", alCambiar);
  }, []);
  return ruta;
}
