// Contenido del sitio. Editá estos datos para actualizar textos sin tocar los componentes
// (con "npm run dev" corriendo, los cambios se ven al instante en el navegador).
// Estructura basada en "Propuesta Web - Osmiss V2" (sitio público). En la plataforma final
// estos datos vendrán del Backoffice (módulos: Carrusel, Planes, Noticias, FAQ y Logos).
// NOTA: prestaciones, noticias, teléfonos y prestadores son de ejemplo; reemplazalos por los reales.

export const DATA = {
  config: {
    // Link a la cartilla de OSMISS publicada en bymovi (completar con la URL real).
    cartillaUrl: "#",
    telefono: "0800-000-0000",
    guardia: "0800-000-0001",
    email: "contacto@osmiss.org.ar",
    direccion: "Dirección de la sede central",
    horario: "Lunes a viernes de 8 a 18 hs",
    // Endpoint de la API que reenvía los formularios a Zoho CRM. Vacío = modo demo (no envía).
    formulariosApi: "",
  },

  menu: [
    { id: "home", label: "Home" },
    { id: "planes", label: "Planes" },
    { id: "cartilla", label: "Cartilla" },
    { id: "novedades", label: "Novedades" },
    { id: "prevencion", label: "Prevención" },
    { id: "institucional", label: "Institucional" },
    { id: "faq", label: "FAQ" },
    { id: "tramites", label: "Trámites" },
    { id: "contactos", label: "Contactos" },
  ],

  // Carrusel principal: título, bajada, CTA, destino, orden y estado (activo).
  // "imagen" e "imagenMobile" son opcionales; si no hay imagen se usa el fondo degradado.
  slides: [
    {
      orden: 1,
      activo: true,
      tipo: "Planes",
      titulo: "OSMISS-500, nuestro plan más completo",
      bajada: "Habitación individual, cobertura en todo el país y atención preferencial para vos y tu familia.",
      cta: "Conocé el plan",
      destino: "planes/osmiss-500",
      imagen: "",
      imagenMobile: "",
      fondo: "linear-gradient(120deg, #0b3d91 0%, #1565c0 55%, #26a69a 100%)",
    },
    {
      orden: 2,
      activo: true,
      tipo: "Planes",
      titulo: "Un plan para cada etapa de tu vida",
      bajada: "Del OSMISS-100 al OSMISS-500: compará y elegí la cobertura que mejor se adapta a vos.",
      cta: "Comparar planes",
      destino: "planes",
      imagen: "",
      imagenMobile: "",
      fondo: "linear-gradient(120deg, #00695c 0%, #26a69a 60%, #80cbc4 100%)",
    },
    {
      orden: 3,
      activo: true,
      tipo: "Noticias",
      titulo: "Campaña de vacunación antigripal 2026",
      bajada: "Acercate a los vacunatorios adheridos con tu credencial. Sin costo para afiliados.",
      cta: "Leer la nota",
      destino: "novedades/vacunacion-antigripal-2026",
      imagen: "",
      imagenMobile: "",
      fondo: "linear-gradient(120deg, #4527a0 0%, #5e35b1 55%, #1e88e5 100%)",
    },
    {
      orden: 4,
      activo: true,
      tipo: "Noticias",
      titulo: "Ya podés usar tu credencial digital",
      bajada: "Llevala siempre en el celular y presentala en todos los prestadores de la cartilla.",
      cta: "Ver novedades",
      destino: "novedades/credencial-digital",
      imagen: "",
      imagenMobile: "",
      fondo: "linear-gradient(120deg, #bf360c 0%, #f4511e 55%, #ffb300 100%)",
    },
  ],

  // Planes: nombre, imagen, descripción, características, beneficios e información adicional.
  planes: [
    {
      id: "osmiss-100",
      nombre: "OSMISS-100",
      bajada: "Cobertura esencial",
      imagen: "",
      descripcion: "La cobertura básica para cuidar tu salud día a día, con acceso a médicos de cartilla y guardia las 24 horas.",
      caracteristicas: ["Consultas médicas en cartilla", "Guardia 24 hs", "Medicamentos al 40%", "Análisis clínicos básicos"],
      beneficios: ["Credencial digital", "Atención telefónica"],
      infoAdicional: "Ideal para personas jóvenes que buscan una cobertura simple y accesible.",
    },
    {
      id: "osmiss-150",
      nombre: "OSMISS-150",
      bajada: "Cobertura ampliada",
      imagen: "",
      descripcion: "Sumá especialistas sin derivación y odontología general a tu cobertura esencial.",
      caracteristicas: ["Todo lo del OSMISS-100", "Especialistas sin derivación", "Odontología general", "Medicamentos al 50%"],
      beneficios: ["Credencial digital", "Descuentos en farmacias adheridas"],
      infoAdicional: "Pensado para quienes necesitan consultar especialistas con frecuencia.",
    },
    {
      id: "osmiss-200",
      nombre: "OSMISS-200",
      bajada: "Cobertura integral",
      imagen: "",
      descripcion: "Cobertura integral con internación, óptica y kinesiología para vos y tu grupo familiar.",
      caracteristicas: ["Todo lo del OSMISS-150", "Internación en habitación compartida", "Óptica y kinesiología", "Medicamentos al 60%"],
      beneficios: ["Credencial digital", "Descuentos en farmacias", "Plan materno infantil"],
      infoAdicional: "Recomendado para familias.",
    },
    {
      id: "osmiss-500",
      nombre: "OSMISS-500",
      bajada: "Cobertura superadora",
      destacado: true,
      imagen: "",
      descripcion: "Nuestro plan más completo: máxima cobertura, habitación individual y atención en todo el país.",
      caracteristicas: [
        "Todo lo del OSMISS-200",
        "Internación en habitación individual",
        "Cobertura en todo el país",
        "Ortodoncia e implantes",
        "Medicamentos al 80%",
        "Atención preferencial y telemedicina",
      ],
      beneficios: ["Credencial digital", "Telemedicina 24 hs", "Asistencia al viajero", "Línea de atención exclusiva"],
      infoAdicional: "La opción superadora para quienes buscan la cobertura más amplia y sin preocupaciones.",
    },
  ],

  // Bloque "Por qué elegirnos".
  porQueElegirnos: [
    { icono: "🩺", titulo: "Amplia cartilla", texto: "Profesionales y centros de atención en todo el país." },
    { icono: "⏱️", titulo: "Atención 24 hs", texto: "Guardia y asistencia médica todos los días del año." },
    { icono: "📱", titulo: "Gestión digital", texto: "Credencial digital y trámites online, sin filas." },
    { icono: "🤝", titulo: "Cercanía", texto: "Un equipo que te acompaña y responde tus consultas." },
  ],

  // Logos de prestadores para el carrusel horizontal del Home. "logo" = URL de imagen (opcional).
  logos: [
    { nombre: "Clínica San Martín", logo: "" },
    { nombre: "Sanatorio Central", logo: "" },
    { nombre: "Centro Odontológico Sur", logo: "" },
    { nombre: "Laboratorio Andes", logo: "" },
    { nombre: "Óptica Visión", logo: "" },
    { nombre: "Kinesio Salud", logo: "" },
    { nombre: "Diagnóstico Integral", logo: "" },
    { nombre: "Farmacias del Pueblo", logo: "" },
  ],

  // Noticias / Novedades: listado y ficha individual.
  noticias: [
    {
      id: "vacunacion-antigripal-2026",
      fecha: "15/10/2026",
      titulo: "Campaña de vacunación antigripal 2026",
      resumen: "Ya está disponible la vacuna antigripal en los vacunatorios adheridos.",
      cuerpo: [
        "Comenzó la campaña de vacunación antigripal 2026 para todos nuestros afiliados.",
        "Podés acercarte a cualquiera de los vacunatorios adheridos presentando tu credencial (física o digital) y tu DNI. La aplicación no tiene costo.",
        "Recordá que la vacuna es especialmente importante para mayores de 65 años, embarazadas y personas con enfermedades crónicas.",
      ],
    },
    {
      id: "credencial-digital",
      fecha: "02/10/2026",
      titulo: "Nueva credencial digital",
      resumen: "Descargá la credencial digital y usala en todos los prestadores de la cartilla.",
      cuerpo: [
        "Ahora tu credencial OSMISS también está disponible en formato digital.",
        "Es válida en todos los prestadores de la cartilla y reemplaza a la credencial física.",
      ],
    },
    {
      id: "ampliamos-cartilla",
      fecha: "20/09/2026",
      titulo: "Ampliamos la cartilla en el interior",
      resumen: "Sumamos nuevos centros médicos y farmacias en distintas provincias.",
      cuerpo: [
        "Seguimos creciendo: incorporamos nuevos prestadores en distintas provincias del país.",
        "Consultá la cartilla actualizada para encontrar el más cercano a tu domicilio.",
      ],
    },
  ],

  // Muestra local de cartilla. La cartilla oficial se consulta en bymovi (config.cartillaUrl).
  cartilla: [
    { nombre: "Clínica San Martín", especialidad: "Clínica médica", localidad: "CABA" },
    { nombre: "Centro Odontológico Sur", especialidad: "Odontología", localidad: "Lanús" },
    { nombre: "Dra. Laura Gómez", especialidad: "Pediatría", localidad: "La Plata" },
    { nombre: "Dr. Martín Pérez", especialidad: "Cardiología", localidad: "CABA" },
    { nombre: "Óptica Visión", especialidad: "Óptica", localidad: "Quilmes" },
    { nombre: "Kinesio Salud", especialidad: "Kinesiología", localidad: "Córdoba" },
  ],

  prevencion: [
    { titulo: "Controles anuales", texto: "Realizá un chequeo médico completo al menos una vez al año." },
    { titulo: "Vacunación", texto: "Mantené tu calendario de vacunas al día y el de tu familia." },
    { titulo: "Alimentación saludable", texto: "Incorporá frutas, verduras y agua en tu dieta diaria." },
    { titulo: "Actividad física", texto: "30 minutos de actividad por día mejoran tu salud cardiovascular." },
  ],

  // Quiénes somos.
  institucional: {
    intro: "OSMISS es una obra social comprometida con la salud y el bienestar de sus afiliados, brindando una cobertura accesible, humana y de calidad.",
    bloques: [
      { titulo: "Misión", texto: "Brindar a nuestros afiliados una cobertura de salud accesible, humana y de calidad." },
      { titulo: "Visión", texto: "Ser la obra social de referencia por la excelencia de sus servicios y la cercanía con sus afiliados." },
      { titulo: "Valores", texto: "Compromiso, transparencia, respeto y vocación de servicio." },
    ],
  },

  // Preguntas frecuentes organizadas por categorías.
  faq: [
    {
      categoria: "Afiliación",
      preguntas: [
        { p: "¿Cómo me afilio a OSMISS?", r: "Completá el formulario “Quiero afiliarme” y un asesor se va a comunicar con vos. También podés acercarte a nuestras sedes con tu DNI." },
        { p: "¿Puedo sumar a mi grupo familiar?", r: "Sí, podés incluir a tu cónyuge e hijos. Indicalo en los comentarios del formulario de afiliación." },
      ],
    },
    {
      categoria: "Planes",
      preguntas: [
        { p: "¿Cómo cambio de plan?", r: "Solicitalo desde Trámites o Contactos. El cambio se hace efectivo a partir del mes siguiente." },
        { p: "¿Cuál es el plan más completo?", r: "El OSMISS-500 es nuestro plan superador, con la cobertura más amplia." },
      ],
    },
    {
      categoria: "Cartilla y atención",
      preguntas: [
        { p: "¿Dónde consulto los prestadores?", r: "En la sección Cartilla, donde también encontrás el acceso a la cartilla completa y actualizada." },
        { p: "¿Qué hago ante una urgencia?", r: "Comunicate con la guardia 24 hs o dirigite al centro de guardia más cercano de la cartilla." },
      ],
    },
  ],

  tramites: [
    { titulo: "Afiliación", texto: "Alta de titular y grupo familiar.", destino: "afiliarme" },
    { titulo: "Cambio de plan", texto: "Solicitá pasar a otro plan.", destino: "contactos" },
    { titulo: "Reclamos", texto: "Contanos tu inconveniente para resolverlo.", destino: "contactos" },
    { titulo: "Sugerencias", texto: "Ayudanos a mejorar nuestro servicio.", destino: "contactos" },
    { titulo: "Credencial", texto: "Reimpresión o credencial digital.", destino: "contactos" },
    { titulo: "Cartilla", texto: "Encontrá prestadores cerca tuyo.", destino: "cartilla" },
  ],
};
