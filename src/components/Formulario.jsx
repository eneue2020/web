import { useState } from "react";
import { enviarFormulario } from "../lib/formularios.js";

// Formulario genérico con confirmación de envío y protección antispam (campo trampa oculto).
export function Formulario({ tipo, children, textoBoton, mensajeOk }) {
  const [estado, setEstado] = useState("inicial"); // inicial | enviando | ok | error
  const [errorArchivo, setErrorArchivo] = useState("");

  const alEnviar = async (e) => {
    e.preventDefault();
    const datos = Object.fromEntries(new FormData(e.target));
    if (datos.website) return; // los bots completan el campo oculto
    delete datos.website;
    // Adjuntos: validar tamaño (data-max-mb) y extensión (accept) antes de enviar.
    for (const input of e.target.querySelectorAll('input[type="file"]')) {
      const archivo = input.files[0];
      if (!archivo) continue;
      const maxMb = Number(input.dataset.maxMb || 5);
      const extensiones = (input.accept || "").split(",").map((x) => x.trim().toLowerCase()).filter(Boolean);
      if (archivo.size > maxMb * 1024 * 1024) return setErrorArchivo(`El archivo supera los ${maxMb} MB.`);
      if (extensiones.length && !extensiones.some((x) => archivo.name.toLowerCase().endsWith(x))) {
        return setErrorArchivo(`Formato no admitido. Usá: ${extensiones.join(", ")}.`);
      }
    }
    setErrorArchivo("");
    setEstado("enviando");
    try {
      await enviarFormulario(tipo, datos);
      setEstado("ok");
    } catch {
      setEstado("error");
    }
  };

  if (estado === "ok") {
    return <div className="aviso">{mensajeOk || "¡Gracias! Recibimos tus datos y nos vamos a comunicar con vos a la brevedad."}</div>;
  }

  return (
    <form className="form" onSubmit={alEnviar}>
      <input type="text" name="website" className="trampa" tabIndex="-1" autoComplete="off" aria-hidden="true" />
      {children}
      {errorArchivo && <div className="aviso error">{errorArchivo}</div>}
      {estado === "error" && <div className="aviso error">No pudimos enviar el formulario. Intentá nuevamente.</div>}
      <button className="btn btn-primario" type="submit" disabled={estado === "enviando"}>
        {estado === "enviando" ? "Enviando..." : textoBoton}
      </button>
    </form>
  );
}

export function Campo({ label, ...props }) {
  return (
    <label className="campo">
      <span>{label}{props.required && " *"}</span>
      {props.type === "textarea" ? <textarea {...props} /> : <input {...props} />}
    </label>
  );
}
