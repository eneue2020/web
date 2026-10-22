# Sitio web OSMISS

Sitio en React + Vite. Prototipo del sitio público según "Propuesta Web - Osmiss V2".

## Comandos

```bash
npm install      # instalar dependencias (solo la primera vez)
npm run dev      # servidor de desarrollo en http://localhost:5173
npm run build    # genera la versión optimizada en la carpeta dist/
npm run preview  # sirve localmente lo generado en dist/
npm run pdfs     # regenera los PDF de "Ver Detalle Completo" en public/pdf/ (requiere Chrome o Edge)
```

## Estructura

- `src/data.js`: todo el contenido (menú, carrusel, planes, noticias, FAQ, logos, contacto).
- `src/components/`: piezas reutilizables (Header, Footer, Carrusel, cards de planes, formularios).
- `src/pages/`: una página por sección del menú, más `Afiliarme`.
- `src/styles.css`: estilos.
- `prototipo-cdn/`: versión anterior sin Node (React por CDN), solo como respaldo.

## Pendientes de configurar (`src/data.js` → `config`)

- `cartillaUrl`: link a la cartilla oficial en bymovi.
- `formulariosApi`: endpoint que reenvía los formularios a Zoho CRM (vacío = modo demo).
