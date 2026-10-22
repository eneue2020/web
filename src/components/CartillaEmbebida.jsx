import { useLayoutEffect, useRef, useState } from "react";
import { DATA } from "../data.js";

// Ancho del menú lateral de la app (Ionic split-pane) para un ancho de ventana dado.
function anchoMenu(anchoVentana, menu) {
  if (anchoVentana < menu.breakpoint) return 0; // en pantallas chicas el menú se oculta solo
  return Math.min(menu.max, Math.max(menu.min, anchoVentana * menu.porcentaje));
}

// Ancho que tiene que tener el iframe para que, sacando el menú, quede exactamente "ancho" visible.
function anchoIframe(ancho, menu) {
  if (ancho + menu.min < menu.breakpoint) return ancho; // sin menú: no hace falta agrandar
  const conMinimo = ancho + menu.min;
  if (anchoMenu(conMinimo, menu) === menu.min) return conMinimo;
  const conMaximo = ancho + menu.max;
  if (anchoMenu(conMaximo, menu) === menu.max) return conMaximo;
  return Math.round(ancho / (1 - menu.porcentaje)); // tramo en que el menú es un porcentaje
}

// Muestra la cartilla de bymovi dentro del sitio, ocultando su menú lateral y su barra superior.
// Como el iframe es de otro dominio no se puede modificar su contenido: se lo agranda y se lo corre
// dentro de un contenedor con overflow hidden, de modo que esas partes quedan fuera de la vista.
export default function CartillaEmbebida() {
  const { url, menu, altoEncabezado } = DATA.config.cartillaEmbed;
  const contenedor = useRef(null);
  const [ancho, setAncho] = useState(0);

  useLayoutEffect(() => {
    const medir = () => setAncho(contenedor.current?.clientWidth || 0);
    medir();
    const obs = new ResizeObserver(medir);
    obs.observe(contenedor.current);
    window.addEventListener("resize", medir);
    return () => { obs.disconnect(); window.removeEventListener("resize", medir); };
  }, []);

  const total = anchoIframe(ancho, menu);
  const corrimiento = Math.ceil(anchoMenu(total, menu));

  return (
    <div className="cartilla-embed" ref={contenedor}>
      {ancho > 0 && (
        <iframe
          src={url}
          title="Cartilla de prestadores OSMISS"
          allow="geolocation"
          style={{
            left: -corrimiento,
            top: -altoEncabezado,
            width: total,
            height: `calc(100% + ${altoEncabezado}px)`,
          }}
        />
      )}
    </div>
  );
}
