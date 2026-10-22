import { useState } from "react";
import { enviarFormulario } from "../lib/formularios.js";

// Formulario genérico con confirmación de envío y protección antispam (campo trampa oculto).
export function Formulario({ tipo, children, textoBoton }) {
  const [estado, setEstado] = useState("inicial"); // inicial | enviando | ok | error

  const alEnviar = async (e) => {
    e.preventDefault();
    const datos = Object.fromEntries(new FormData(e.target));
    if (datos.website) return; // los bots completan el campo oculto
    delete datos.website;
    setEstado("enviando");
    try {
      await enviarFormulario(tipo, datos);
      setEstado("ok");
    } catch {
      setEstado("error");
    }
  };

  if (estado === "ok") {
    return <div className="aviso">¡Gracias! Recibimos tus datos y nos vamos a comunicar con vos a la brevedad.</div>;
  }

  return (
    <form className="form" onSubmit={alEnviar}>
      <input type="text" name="website" className="trampa" tabIndex="-1" autoComplete="off" aria-hidden="true" />
      {children}
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
