// Genera un PDF descargable con la descripción completa de cada plan en public/pdf/.
// Uso: npm run pdfs   (requiere Google Chrome o Microsoft Edge instalado)
// Volver a correrlo cada vez que cambie src/descripciones.js o los datos de contacto.
import { execFileSync } from "node:child_process";
import { existsSync, mkdirSync, mkdtempSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join, resolve } from "node:path";
import { pathToFileURL } from "node:url";
import { DATA } from "../src/data.js";
import { DESCRIPCIONES } from "../src/descripciones.js";

const NAVEGADORES = [
  process.env.CHROME_PATH,
  "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe",
  "C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe",
  "C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe",
  "C:\\Program Files\\Microsoft\\Edge\\Application\\msedge.exe",
  "/usr/bin/google-chrome",
  "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
].filter(Boolean);

const navegador = NAVEGADORES.find((p) => existsSync(p));
if (!navegador) {
  console.error("No se encontró Chrome ni Edge. Indicá la ruta con la variable CHROME_PATH.");
  process.exit(1);
}

const CFG = DATA.config;
const salida = resolve("public/pdf");
mkdirSync(salida, { recursive: true });
const temporal = mkdtempSync(join(tmpdir(), "osmiss-pdf-"));

const escapar = (s) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
const fecha = new Date().toLocaleDateString("es-AR", { day: "2-digit", month: "2-digit", year: "numeric" });

function documento(plan, desc) {
  const indice = desc.capitulos.map((c, i) => `<li><a href="#cap-${i}">${escapar(c.titulo)}</a></li>`).join("");
  const capitulos = desc.capitulos
    .map((c, i) => `<section class="capitulo" id="cap-${i}"><h2>${escapar(c.titulo)}</h2>${c.html}</section>`)
    .join("");
  return `<!doctype html><html lang="es"><head><meta charset="utf-8"><title>Detalle completo ${plan.nombre}</title>
<style>
  @page { size: A4; margin: 18mm 16mm 20mm; }
  * { box-sizing: border-box; }
  body { font-family: "Segoe UI", Roboto, Arial, sans-serif; color: #1f2937; font-size: 10.5pt; line-height: 1.5; margin: 0; }
  .portada { background: linear-gradient(130deg, #0b3d91, #1565c0 60%, #26a69a); color: #fff; padding: 22px 24px; border-radius: 10px; margin-bottom: 18px; }
  .portada .marca { font-weight: 800; font-size: 14pt; letter-spacing: .5px; }
  .portada h1 { margin: 6px 0 2px; font-size: 22pt; }
  .portada p { margin: 0; opacity: .9; }
  .indice { border: 1px solid #e5e7eb; border-radius: 10px; padding: 12px 18px; margin-bottom: 18px; }
  .indice h2 { font-size: 12pt; color: #0b3d91; margin: 0 0 6px; }
  .indice ol { columns: 2; margin: 0; padding-left: 0; list-style: none; font-size: 9.5pt; }
  .indice a { color: #1f2937; text-decoration: none; }
  .capitulo h2 { color: #0b3d91; font-size: 13pt; border-bottom: 2px solid #26a69a; padding-bottom: 4px; margin: 20px 0 8px; break-after: avoid; }
  h5 { font-size: 11pt; color: #1565c0; margin: 12px 0 4px; break-after: avoid; }
  h6 { font-size: 10.5pt; margin: 10px 0 4px; break-after: avoid; }
  p { margin: 0 0 8px; }
  ul { margin: 0 0 8px; padding-left: 18px; }
  li { margin-bottom: 2px; }
  a { color: #1565c0; }
  .pie { margin-top: 24px; padding-top: 10px; border-top: 1px solid #e5e7eb; font-size: 8.5pt; color: #6b7280; }
</style></head><body>
<div class="portada">
  <div class="marca">OSMISS</div>
  <h1>Plan ${plan.nombre}</h1>
  <p>Descripción completa del plan · ${escapar(plan.bajada)}</p>
</div>
<nav class="indice"><h2>Contenido</h2><ol>${indice}</ol></nav>
${capitulos}
<div class="pie">
  OSMISS · Obra Social de Ministros, Secretarios y Subsecretarios · RNOS ${CFG.rnos} · CUIT ${CFG.cuit}<br>
  ${CFG.direccion}, ${CFG.localidad} · ${CFG.telefono} · ${CFG.email}<br>
  Urgencias 24 hs: ${CFG.urgencias.telefonos.map((t) => t.numero).join(" / ")} · Documento generado el ${fecha}.
</div>
</body></html>`;
}

for (const plan of DATA.planes) {
  const desc = DESCRIPCIONES[plan.descripcionCompleta || plan.id];
  if (!desc) {
    console.log(`- ${plan.nombre}: sin descripción, se omite`);
    continue;
  }
  const html = join(temporal, `${plan.id}.html`);
  const pdf = join(salida, `detalle-${plan.id}.pdf`);
  writeFileSync(html, documento(plan, desc), "utf8");
  execFileSync(navegador, [
    "--headless=new",
    "--disable-gpu",
    "--no-pdf-header-footer",
    `--print-to-pdf=${pdf}`,
    pathToFileURL(html).href,
  ], { stdio: "ignore" });
  console.log(`✓ ${plan.nombre} → public/pdf/detalle-${plan.id}.pdf`);
}

rmSync(temporal, { recursive: true, force: true });
