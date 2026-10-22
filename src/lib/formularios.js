import { DATA } from "../data.js";

// Envío de formularios a la API que los reenvía a Zoho CRM.
// "formulario" identifica de qué formulario viene (afiliacion | contacto); los campos propios del
// formulario (por ej. "tipo": Consulta / Sugerencia / Reclamo / Quiero afiliarme) van tal cual.
// Si config.formulariosApi está vacío, funciona en modo demo (no envía nada).
// Si hay archivos adjuntos (por ej. el CV), se envía como multipart/form-data en lugar de JSON.
export async function enviarFormulario(formulario, datos) {
  const api = DATA.config.formulariosApi;
  const cuerpo = { ...datos, formulario };
  const conArchivos = Object.values(cuerpo).some((v) => v instanceof File && v.size > 0);
  if (!api) {
    console.info("[modo demo] Formulario", cuerpo);
    return;
  }
  let opciones;
  if (conArchivos) {
    const fd = new FormData();
    Object.entries(cuerpo).forEach(([k, v]) => fd.append(k, v));
    opciones = { method: "POST", body: fd };
  } else {
    opciones = { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(cuerpo) };
  }
  const res = await fetch(api, opciones);
  if (!res.ok) throw new Error("Error " + res.status);
}
