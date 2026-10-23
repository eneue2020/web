// Contenido del sitio. Editá estos datos para actualizar textos sin tocar los componentes
// (con "npm run dev" corriendo, los cambios se ven al instante en el navegador).
// Estructura basada en "Propuesta Web - Osmiss V2" (sitio público). En la plataforma final
// estos datos vendrán del Backoffice (módulos: Carrusel, Planes, Noticias, FAQ y Logos).
// NOTA: prestaciones, noticias y prestadores son de ejemplo; reemplazalos por los reales.
// Los datos de contacto y las FAQ son los del sitio actual (osmiss.org.ar).

export const DATA = {
  config: {
    // App de afiliados OSMISS en bymovi, donde está publicada la cartilla.
    appUrl: "https://osmiss-app.bymovi.com/",
    cartillaUrl: "https://osmiss-app.bymovi.com/cartilla",
    // Cartilla embebida en la sección Cartilla. Medidas de la app de bymovi (Ionic split-pane):
    // el menú lateral mide 25% del ancho (entre 270 y 380 px) y aparece desde 992 px.
    // Si bymovi cambia su diseño, ajustar acá esos valores y el alto de la barra superior.
    cartillaEmbed: {
      url: "https://osmiss-app.bymovi.com/cartilla",
      menu: { porcentaje: 0.25, min: 270, max: 380, breakpoint: 992 },
      altoEncabezado: 65,
    },
    telefono: "(011) 4334-6611",
    telefonoTel: "+541143346611",
    telefonoInterior: "0800-345-OSMISS (6764)",
    telefonoInteriorTel: "08003456764",
    email: "info@osmiss.org.ar",
    direccion: "Paraguay 661, 2° piso",
    localidad: "(C1057AAG) Ciudad de Buenos Aires",
    mapaUrl: "https://maps.app.goo.gl/6KXKt7Ua6w6kS43D9",
    mapaEmbed: "https://www.google.com/maps?q=Paraguay+661,+C1057AAG+CABA,+Argentina&output=embed",
    horario: "Lunes a viernes de 9 a 17 hs",
    rnos: "002501",
    cuit: "30-70897857-0",
    // Emails por área, para que cada consulta llegue directo a quien la resuelve.
    emails: [
      { area: "Consultas generales", email: "info@osmiss.org.ar", texto: "Información sobre planes, cobertura y la obra social." },
      { area: "Afiliaciones", email: "afiliaciones@osmiss.org.ar", texto: "Sumate a OSMISS, cambio de obra social, credenciales y grupo familiar." },
      { area: "Autorizaciones", email: "autorizaciones@osmiss.org.ar", texto: "Prácticas, estudios e internaciones que requieren autorización." },
      { area: "Control de aportes", email: "control.aportes@osmiss.org.ar", texto: "Consultas sobre aportes y situación de empadronamiento." },
      { area: "Gerencia médica", email: "gerencia.medica@osmiss.org.ar", texto: "Consultas médicas y de prestaciones." },
    ],
    // Autorizaciones: pantalla "Pedidos de autorización" de la app de afiliados (pide iniciar sesión).
    autorizaciones: {
      url: "https://osmiss-app.bymovi.com/pedidos-autorizacion",
      email: "autorizaciones@osmiss.org.ar",
      // Paso a paso del registro en la app (publicado en osmiss.org.ar/cobertura-plan200.html).
      registroUrl: "https://drive.google.com/file/d/1W7dtKNdsi2H_fvHa0HoBH7wYHoMxYGVg/view?usp=drive_link",
    },
    credencialUrl: "https://osmiss-app.bymovi.com/credencial-digital",
    // Empresas (#empresas): formulario "Quiero asociar a mi empresa" (formulario: "empresa") y
    // atención a empleadores ya asociados. Fuente: https://www.osmiss.org.ar/empresas.html
    empresas: {
      // Destino del formulario "Quiero asociar a mi empresa", por ahora por email
      // hasta que se defina cómo ingresa al CRM.
      email: "contrataciones@osmiss.org.ar",
      // Beneficios: textos de ejemplo orientados a captar empresas; validar con OSMISS.
      beneficios: [
        { icono: "👥", titulo: "Cobertura para todo tu equipo", texto: "Planes para tus empleados y su grupo familiar, con atención en todo el país." },
        { icono: "📱", titulo: "Gestión simple y digital", texto: "Credencial digital, autorizaciones y cartilla desde la App OSMISS." },
        { icono: "🤝", titulo: "Atención personalizada", texto: "Un equipo dedicado para acompañar a tu empresa en altas, bajas y aportes." },
      ],
      empleados: ["1 a 10", "11 a 50", "51 a 200", "Más de 200"],
      // Atención a empresas ya asociadas (contenido del sitio actual).
      asociadas: [
        { titulo: "Control de aportes", texto: "Verificar empleados, verificar aportes y saldar deudas.", email: "control.aportes@osmiss.org.ar", area: "control-aportes" },
        { titulo: "Afiliaciones", texto: "Altas, bajas, cambios de prestación y credenciales de tus empleados.", email: "afiliaciones@osmiss.org.ar", area: "afiliaciones" },
      ],
      aviso: "OSMISS Casa Central es la única entidad que puede confirmar la correcta afiliación de sus empleados, la correcta imputación de aportes o el pago de aportes atrasados.",
      ayuda: "Al escribirnos, incluí una breve reseña de tu consulta, el CUIT y el nombre de la empresa, y un teléfono de contacto.",
    },
    // Trabajá con nosotros (#trabaja-con-nosotros): recepción de CV. El formulario se envía con
    // formulario: "cv", destinatario (email) y el archivo adjunto en el campo "cv" (multipart).
    // Luego ingresa al CRM (a definir: directo desde el formulario o desde el email específico de RRHH).
    rrhh: {
      email: "info@osmiss.org.ar", // destino PROVISORIO de los CV: OSMISS va a definir un email específico
      maxMb: 5,
      areas: ["Atención al afiliado", "Administración", "Afiliaciones", "Auditoría médica", "Sistemas", "Otra"],
      motivos: [
        { icono: "🤝", titulo: "Vocación de servicio", texto: "Trabajamos todos los días para cuidar la salud de nuestros afiliados y sus familias." },
        { icono: "📈", titulo: "Crecimiento", texto: "Valoramos el aprendizaje y el desarrollo profesional de cada integrante del equipo." },
        { icono: "💙", titulo: "Buen clima", texto: "Un equipo cercano, que se apoya y trabaja con respeto y compromiso." },
      ],
    },
    // Urgencias y emergencias. Fuente: https://www.osmiss.org.ar/cobertura-plan200.html
    // Se muestran en la barra superior, el botón flotante (celular), la sección Urgencias y el footer.
    urgencias: {
      prestador: "VITTAL",
      nombre: "Centro Coordinador de Urgencias",
      horario: "24 hs, los 365 días del año",
      telefonos: [
        { numero: "0810-333-8888", tel: "08103338888" },
        { numero: "(011) 4000-8888", tel: "+541140008888" },
      ],
      servicios: [
        { icono: "🚑", titulo: "Emergencias médicas", texto: "Situaciones con riesgo de vida que requieren atención inmediata." },
        { icono: "⚕️", titulo: "Urgencias médicas", texto: "Atención rápida ante un problema de salud que no puede esperar." },
        { icono: "🏠", titulo: "Médico a domicilio", texto: "Consulta médica en tu casa cuando no podés trasladarte." },
        { icono: "💻", titulo: "Telemedicina", texto: "Consulta con un médico a distancia, desde tu celular o computadora." },
      ],
      // Números públicos nacionales, por si no se puede comunicar con el centro coordinador.
      publicos: [
        { nombre: "SAME (Ciudad de Buenos Aires)", numero: "107" },
        { nombre: "Emergencias", numero: "911" },
      ],
    },
    // Instituciones vinculadas (Institucional y footer). Sin "url" se muestra solo el logo, sin link
    // (y no aparece en el footer); sin "url" ni "logo" no se muestra.
    // Logos tomados del sitio actual de OSMISS; para producción conviene servirlos desde /public.
    instituciones: [
      { nombre: "Superintendencia de Servicios de Salud", corto: "SSSalud", url: "https://www.argentina.gob.ar/sssalud", logo: "https://www.osmiss.org.ar/images/logo-sss.png" },
      { nombre: "Círculo de Ministros, Secretarios y Subsecretarios", corto: "Círculo de Ministros", url: "http://circulodeministros.com.ar/", logo: "https://www.osmiss.org.ar/images/logo-circulo.jpg" },
      { nombre: "Mutualidad del Círculo de Ministros", corto: "Mutualidad del Círculo", url: "https://www.mutualdelcirculodeministros.org.ar/", logo: "https://www.osmiss.org.ar/images/logo-mutual.jpg" },
      { nombre: "Fipem", corto: "Fipem", url: "", logo: "https://www.osmiss.org.ar/images/logo-fipemcolor.png" }, // completar URL
      { nombre: "Funsalud", corto: "Funsalud", url: "", logo: "https://www.osmiss.org.ar/images/logo-funsalud2.jpg" }, // completar URL
    ],
    // Superintendencia de Servicios de Salud (dato obligatorio para obras sociales).
    sssalud: {
      telefono: "0800-222-SALUD (72583)",
      telefonoTel: "080022272583",
      horario: "Lunes a viernes de 8 a 16 hs",
      direccion: "Bartolomé Mitre 434, PB, CABA",
    },
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
    { id: "autorizaciones", label: "Autorizaciones" },
    { id: "empresas", label: "Empresas" },
    { id: "contactos", label: "Contactos" },
    { id: "urgencias", label: "Urgencias", urgente: true },
  ],

  // Carrusel principal: título, bajada, CTA, destino, orden y estado (activo).
  // "imagen" e "imagenMobile" son opcionales; si no hay imagen se usa el fondo degradado.
  // Fotos de Unsplash (licencia libre, uso comercial permitido). Para producción, reemplazar por fotos propias
  // o descargarlas y servirlas desde /public.
  slides: [
    {
      orden: 1,
      activo: true,
      tipo: "Planes",
      titulo: "OSMISS-500, nuestro plan más completo",
      bajada: "Habitación individual, cobertura en todo el país y atención preferencial para vos y tu familia.",
      cta: "Conocé el plan",
      destino: "planes/osmiss-500",
      imagen: "https://images.unsplash.com/photo-1758691462126-2ee47c8bf9e7?auto=format&fit=crop&w=1920&h=800&q=75",
      imagenMobile: "https://images.unsplash.com/photo-1758691462126-2ee47c8bf9e7?auto=format&fit=crop&crop=faces&w=800&h=1000&q=70",
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
      imagen: "https://images.unsplash.com/photo-1758691462666-6470b740f544?auto=format&fit=crop&w=1920&h=800&q=75",
      imagenMobile: "https://images.unsplash.com/photo-1758691462666-6470b740f544?auto=format&fit=crop&crop=faces&w=800&h=1000&q=70",
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
      imagen: "https://images.unsplash.com/photo-1576765974102-b756026ecee3?auto=format&fit=crop&w=1920&h=800&q=75",
      imagenMobile: "https://images.unsplash.com/photo-1576765974102-b756026ecee3?auto=format&fit=crop&crop=faces&w=800&h=1000&q=70",
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
      imagen: "https://images.unsplash.com/photo-1512428559087-560fa5ceab42?auto=format&fit=crop&w=1920&h=800&q=75",
      imagenMobile: "https://images.unsplash.com/photo-1512428559087-560fa5ceab42?auto=format&fit=crop&crop=faces&w=800&h=1000&q=70",
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
      // Sin descripción propia publicada: usa la descripción completa del OSMISS-200 (src/descripciones.js).
      descripcionCompleta: "osmiss-200",
      nombre: "OSMISS-500",
      bajada: "Cobertura superadora",
      destacado: true,
      // Sin cuadro propio publicado: usa el cuadro de beneficios del OSMISS-200 (src/beneficios.js).
      cuadroBeneficios: "osmiss-200",
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

  // Prestadores destacados para el carrusel horizontal del Home.
  // "logo" = ruta de la imagen, por ej. "logos/prestadores/fleni.png" (archivo en public/logos/prestadores/).
  // Sin logo se muestra el nombre. Usar logos provistos o autorizados por cada prestador.
  logos: [
    { nombre: "IMAC", logo: "" },
    { nombre: "Centro Médico Monserrat", logo: "" },
    { nombre: "Sanatorio del Oeste", logo: "" },
    { nombre: "San Camilo", logo: "" },
    { nombre: "Anchorena", logo: "" },
    { nombre: "Bazterrica", logo: "" },
    { nombre: "FLENI", logo: "" },
    { nombre: "Favaloro", logo: "" },
    { nombre: "Arauz", logo: "" },
    { nombre: "GEDYT", logo: "" },
    { nombre: "Sanatorio Modelo Caseros", logo: "" },
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
    // Dirección. Fuente: https://www.osmiss.org.ar/osmiss.html#direccion
    direccion: {
      presidente: {
        nombre: "Ing. Néstor E. Fernández",
        cargo: "Presidente",
        // Foto del sitio actual; para producción conviene servirla desde /public.
        foto: "https://www.osmiss.org.ar/images/direccion001.gif",
      },
      marcoLegal: [
        "Inscripta en el Registro Nacional de Obras Sociales bajo el Nº 0-0250-1, OSMISS es una entidad con jurisdicción en todo el territorio de la República Argentina, conforme a lo dispuesto por la Resolución de la Superintendencia de Servicios de Salud Nº 027/04, que la encuadra en los términos del Art. 1º Inc. h) de la Ley 23.660, e incluida en el Registro del Sistema Nacional Integrado de Salud en el marco de la Ley 23.661.",
        "Tales disposiciones han sido validadas por la Superintendencia de Servicios de Salud por la Resolución Nº 309/05.",
        "La conducción de OSMISS, determinada en el Registro Nacional de Obras Sociales y convalidada por el Certificado Nº 1976/04 RNOS, está integrada por:",
      ],
      autoridades: [
        { cargo: "Presidente", nombre: "Ing. Néstor Eduardo FERNÁNDEZ" },
        { cargo: "Vicepresidente", nombre: "Dr. Juan José BABODO" },
        { cargo: "Tesorero", nombre: "Lic. Alberto Joaquín UGALDE" },
        { cargo: "Secretario de Acción Social", nombre: "Dr. Ismael MATA" },
        { cargo: "Secretaria de Actas", nombre: "Ing. Juan Carlos BASILE" },
      ],
      comisionRevisora: [
        "Dr. Jorge Ricardo MACRI",
        "Dr. Francisco Alejo Roberto DOMINGUEZ JOURNET",
        "Dr. Domingo Olimpio RODRIGUEZ",
      ],
    },
  },

  // Preguntas frecuentes organizadas por categorías.
  // Datos tomados de https://www.osmiss.org.ar/preguntas.html, con redacción orientada a captar afiliados.
  // "r" puede ser un texto o una lista de párrafos; los párrafos que empiezan con "- " se muestran como lista.
  // "cta" (opcional) agrega un botón al final de la respuesta: { texto, destino }.
  faq: [
    {
      categoria: "Sumate a OSMISS",
      preguntas: [
        {
          p: "¿Cómo me paso a OSMISS?",
          r: [
            "¡Es más simple de lo que pensás! Si ya tenés una obra social, podés elegir OSMISS y hacer el cambio. Solo necesitás:",
            "- DNI, LC, LE o CI",
            "- Tu último recibo de sueldo",
            "¿No sabés cuál es tu obra social actual? Consultalo sin costo en la Superintendencia de Servicios de Salud al 0800-222-72583.",
            "Podés acercar la documentación a nuestra sede de Paraguay 661, 2° piso (Sector Afiliaciones). Avisanos antes de venir al (011) 4334-6611 y te esperamos. Si estás en el interior, llamanos y te indicamos dónde entregarla.",
          ],
          cta: { texto: "Quiero afiliarme", destino: "afiliarme" },
        },
        {
          p: "¿Cómo sé si ya estoy afiliado?",
          r: [
            "Solo OSMISS Casa Central o la Superintendencia de Servicios de Salud (SSSalud) pueden confirmar tu afiliación, ya sea directa o derivada.",
            "Si tenés dudas, el titular puede escribirnos a afiliaciones@osmiss.org.ar con su consulta, DNI, CUIL, nombre y apellido y un teléfono de contacto, o llamarnos al (011) 4334-6611. Te respondemos a la brevedad.",
          ],
        },
        {
          p: "¿Estar dado de alta es lo mismo que estar empadronado?",
          r: [
            "No, y es importante conocer la diferencia para empezar a usar tu cobertura:",
            "- Dado de alta (activo): tu empleador ya realiza correctamente los aportes a la obra social.",
            "- Empadronado: además de tener los aportes, completaste el trámite que te habilita a atenderte con los profesionales de OSMISS.",
            "Completá los dos pasos y disfrutá de todos los beneficios de tu plan.",
          ],
        },
        {
          p: "¿Qué es el alta temprana?",
          r: "Es la inscripción que realiza tu empleador ante ARCA (ex AFIP) para informar a los empleados por los que hará los aportes de cargas sociales. Es el primer paso para que tus aportes lleguen a OSMISS.",
        },
        {
          p: "¿Qué significa ser beneficiario no activo?",
          r: [
            "Significa que, por tu situación de empadronamiento, por el momento no podés recibir prestaciones médicas. Suele deberse a:",
            "- Opción por otra obra social",
            "- Falta de aportes patronales",
            "- Datos de la empresa sin actualizar en OSMISS",
            "- Documentación pendiente de presentar",
            "Tiene solución: acercate a nuestra sede y te ayudamos a regularizar tu situación.",
          ],
          cta: { texto: "Contactanos", destino: "contactos" },
        },
        {
          p: "¿Dónde tramito mi credencial?",
          r: "Llamanos al (011) 4334-6611 y pedí por el sector Afiliaciones, o acercate a nuestra sede. Te ayudamos a tenerla lo antes posible.",
        },
      ],
    },
    {
      categoria: "Atención y cobertura",
      preguntas: [
        {
          p: "¿Qué hago ante una urgencia o emergencia?",
          r: [
            "Llamá al Centro Coordinador de Urgencias (VITTAL), que atiende las 24 hs, los 365 días del año:",
            "- 0810-333-8888",
            "- (011) 4000-8888",
            "Cubre emergencias y urgencias médicas, médico a domicilio y telemedicina. Tené a mano tu credencial y tu DNI.",
          ],
          cta: { texto: "Ver urgencias", destino: "urgencias" },
        },
        {
          p: "¿Tengo cobertura en todo el país?",
          r: [
            "Sí. Cuando viajes a otra parte del país fuera de tu localidad de atención, podés atenderte por guardia. Solo presentá:",
            "- Tu credencial OSMISS (provisoria o definitiva)",
            "- DNI o cédula de identidad",
          ],
        },
        {
          p: "¿Qué necesito para atenderme?",
          r: [
            "Para atenderte en centros ambulatorios y guardias, presentá siempre:",
            "- Tu credencial OSMISS (provisoria o definitiva)",
            "- DNI o cédula de identidad",
          ],
        },
        {
          p: "¿Qué es un prestador?",
          r: "Son los profesionales, centros y lugares que te brindan atención médica como afiliado de OSMISS. Podés consultarlos en nuestra cartilla.",
          cta: { texto: "Ver cartilla", destino: "cartilla" },
        },
        {
          p: "¿Qué es un centro ambulatorio?",
          r: "Es el lugar donde recibís atención médica de distintas especialidades, sin necesidad de internación.",
        },
        {
          p: "¿Qué es una autorización y cuándo la necesito?",
          r: "Es un trámite previo que se realiza cuando tu médico te indica una práctica, un estudio o una receta que lo requiere. Podés pedirla online desde la App OSMISS, en “Pedidos de autorización”, enviando tu orden médica.",
          cta: { texto: "Cómo pedir una autorización", destino: "autorizaciones" },
        },
        {
          p: "¿Dónde queda la sede de OSMISS?",
          r: "Te esperamos en Paraguay 661, 2° piso, Ciudad de Buenos Aires, de lunes a viernes de 9 a 17 hs. También podés llamarnos al (011) 4334-6611 o, desde el interior, sin cargo al 0800-345-6764.",
        },
      ],
    },
    {
      categoria: "Medicamentos",
      preguntas: [
        {
          p: "¿Qué es el vademécum?",
          r: [
            "Es el listado de medicamentos que OSMISS cubre para sus afiliados. Hay distintos vademécum según el plan, cada uno con su porcentaje de cobertura:",
            "- PMI (Plan Materno Infantil)",
            "- PPI (Plan Privilegio Infantil)",
            "- Ambulatorio",
          ],
        },
        {
          p: "¿Qué son las monodrogas, principios activos o genéricos?",
          r: [
            "Son el componente del medicamento que actúa para curar una enfermedad o aliviar sus síntomas.",
            "Un mismo genérico puede venderse con distintos nombres comerciales y a distintos precios, según la marca, la publicidad o el envase. Pero la droga es siempre la misma: elegir por genérico te permite cuidar tu salud y también tu bolsillo.",
          ],
        },
      ],
    },
  ],

  // Trámites a distancia. Fuente: https://www.osmiss.org.ar/tramitesadistancia.html
  tramites: {
    app: {
      titulo: "App OSMISS (osmiss-bymovi)",
      bajada: "Tu obra social en el celular: resolvé la mayoría de tus trámites en minutos, cuando quieras y desde donde estés.",
      aclaracion: "Disponible para afiliados activos a los planes OSMISS-100, OSMISS-150 y OSMISS-200.",
      webUrl: "https://osmiss-app.bymovi.com/",
      androidUrl: "https://play.google.com/store/apps/details?id=com.webexport.osmiss",
      iosUrl: "https://apps.apple.com/ar/app/osmiss/id6778929323",
      instructivoUrl: "https://drive.google.com/file/d/1W7dtKNdsi2H_fvHa0HoBH7wYHoMxYGVg/view",
      // Pasos para empezar a usar la app (fuente: nota "Nueva app OSMISS-bymovi").
      pasos: {
        web: {
          titulo: "Desde la web",
          detalle: "Desde tu PC, celular o tablet, sin instalar nada.",
          pasos: [
            "Ingresá a osmiss-app.bymovi.com desde tu navegador.",
            "Registrate. Se hace una sola vez (salteá este paso si ya lo hiciste).",
            "Iniciá sesión con tu número de DNI como usuario y la contraseña que creaste.",
            "¡Listo! Ya podés empezar a usarla.",
          ],
        },
        movil: {
          titulo: "Desde la app en tu celular",
          detalle: "Para Android y iPhone. Te sugerimos permitir la ubicación para encontrar prestadores cercanos.",
          pasos: [
            "Buscá “OSMISS” en Google Play o en la App Store (verificá que sea la app oficial) o usá los botones de esta página.",
            "Descargá e instalá la app. Leé los avisos y habilitá los permisos que te pide.",
            "Registrate. Se hace una sola vez (salteá este paso si ya lo hiciste desde la web).",
            "Iniciá sesión con tu número de DNI como usuario y la contraseña que creaste.",
          ],
        },
      },
      masInfoUrl: "https://osmiss.org.ar/news2/2026/05/22/nueva-app-osmiss-bymovi/",
      funciones: [
        { icono: "💳", texto: "Credencial digital tuya y de tu grupo familiar" },
        { icono: "✅", texto: "Pedidos de autorización" },
        { icono: "🩺", texto: "Cartilla de prestadores actualizada" },
        { icono: "📄", texto: "Trámites administrativos" },
        { icono: "🚑", texto: "Emergencias y contactos" },
        { icono: "🔔", texto: "Mensajes y notificaciones" },
      ],
    },
    // "id" se usa para preseleccionar el área en el formulario de Contactos (#contactos/<id>).
    sectores: [
      {
        id: "afiliaciones",
        nombre: "Afiliaciones",
        icono: "👨‍👩‍👧",
        para: "Afiliados y empleadores",
        email: "afiliaciones@osmiss.org.ar",
        tramites: ["Alta de afiliados", "Baja", "Cambio de prestación", "Cambio de datos personales", "Control de aportes", "Credencial"],
      },
      {
        id: "gerencia-medica",
        nombre: "Gerencia Médica",
        icono: "🩺",
        para: "Afiliados y efectores",
        email: "gerencia.medica@osmiss.org.ar",
        tramites: ["Autorizar una orden o una receta", "Consultar la cartilla", "Consultar dónde atenderte", "Consultar coseguros"],
      },
      {
        id: "control-aportes",
        nombre: "Control de Aportes",
        icono: "📊",
        para: "Afiliados y empleadores",
        email: "control.aportes@osmiss.org.ar",
        tramites: ["Verificar empleados", "Verificar aportes", "Verificar y saldar deudas"],
      },
      {
        id: "info",
        nombre: "Otras consultas",
        icono: "💬",
        para: "Público en general",
        email: "info@osmiss.org.ar",
        tramites: ["Información general", "Consultas sobre planes y cobertura", "Sugerencias y reclamos"],
      },
    ],
    ayuda: "Para resolver tu trámite más rápido, contanos brevemente tu consulta e incluí tu CUIL/CUIT, nombre y apellido (o el nombre de la institución) y un teléfono de contacto.",
  },
};
