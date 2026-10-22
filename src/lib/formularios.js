import { DATA } from "../data.js";

// Envío de formularios a la API que los reenvía a Zoho CRM.
// Si config.formulariosApi está vacío, funciona en modo demo (no envía nada).
export async function enviarFormulario(tipo, datos) {
  const api = DATA.config.formulariosApi;
  if (!api) {
    console.info("[modo demo] Formulario", tipo, datos);
    return;
  }
  const res = await fetch(api, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ tipo, ...datos }),
  });
  if (!res.ok) throw new Error("Error " + res.status);
}
