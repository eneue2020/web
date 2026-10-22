import { DATA } from "../data.js";

// Envío de formularios a la API que los reenvía a Zoho CRM.
// "formulario" identifica de qué formulario viene (afiliacion | contacto); los campos propios del
// formulario (por ej. "tipo": Consulta / Sugerencia / Reclamo / Quiero afiliarme) van tal cual.
// Si config.formulariosApi está vacío, funciona en modo demo (no envía nada).
export async function enviarFormulario(formulario, datos) {
  const api = DATA.config.formulariosApi;
  const cuerpo = { ...datos, formulario };
  if (!api) {
    console.info("[modo demo] Formulario", cuerpo);
    return;
  }
  const res = await fetch(api, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(cuerpo),
  });
  if (!res.ok) throw new Error("Error " + res.status);
}
