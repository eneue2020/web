import { DATA } from "../data.js";
import { Pagina } from "../components/Layout.jsx";
import CartillaEmbebida from "../components/CartillaEmbebida.jsx";

export default function Cartilla() {
  return (
    <Pagina titulo="Cartilla de prestadores" bajada="Encontrá médicos, centros de atención y farmacias cerca tuyo">
      <CartillaEmbebida />
      <p className="cartilla-pie">
        ¿Preferís verla en pantalla completa?{" "}
        <a href={DATA.config.cartillaUrl} target="_blank" rel="noopener"><strong>Abrir la cartilla en la App OSMISS →</strong></a>
      </p>
    </Pagina>
  );
}
