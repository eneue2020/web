export function Titulo({ titulo, bajada }) {
  return (
    <div className="seccion-titulo">
      <h2>{titulo}</h2>
      {bajada && <p>{bajada}</p>}
    </div>
  );
}

export function Pagina({ titulo, bajada, children }) {
  return (
    <section className="seccion">
      <div className="contenedor">
        <Titulo titulo={titulo} bajada={bajada} />
        {children}
      </div>
    </section>
  );
}

export function NoEncontrado() {
  return (
    <Pagina titulo="Página no encontrada" bajada="El contenido que buscás no existe o fue movido.">
      <p style={{ textAlign: "center" }}><a href="#home" className="btn btn-primario">Volver al inicio</a></p>
    </Pagina>
  );
}
