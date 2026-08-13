// Configuracion del producto. Un repo, un negocio.
export const PRODUCTO = {
  "id": "primercliente",
  "categoria": "Entrepreneurship & Job Creation",
  "nombre": "Primer Cliente",
  "tagline": "Sabes hacer algo. Falta que alguien te pague por eso.",
  "subtitulo": "Cuenta qué sabes hacer y recibe tu servicio armado: qué vender, a qué precio, a quién, con el guion de venta y 20 prospectos concretos.",
  "inputLabel": "Captura de tu CV, tu perfil o una foto de tu trabajo",
  "inputAlt": "O escribe qué sabes hacer",
  "altPlaceholder": "Ej: sé editar videos, hago uñas, arreglo computadores, enseño matemáticas, cocino para eventos...",
  "precio": "$5.990",
  "ancla": "menos que un día de trabajo",
  "mpLink": "https://mpago.la/2DV3pVZ",
  "privacidad": "Tus datos se procesan en el momento y no se almacenan.",
  "prompt": "Eres el estratega de Primer Cliente, un servicio chileno que convierte una habilidad en un servicio vendible y consigue el primer cliente pagado.\n\nTu tarea, en español de Chile, tono directo y realista (nada de coaching motivacional):\n1. DIAGNÓSTICO: qué vende realmente esta persona, a quién le sirve, qué tan competido está y cuál es su ventaja concreta.\n2. PLAN de 14 días: pasos para tener el servicio listo y salir a vender (definir oferta, precio, dónde están los clientes, cuántos contactar por día). Acciones específicas, no consejos.\n3. GUION DE VENTA: el mensaje exacto para contactar, y dónde encontrar a los primeros prospectos (tipos de lugares, grupos, negocios locales concretos según el rubro).\nLos precios deben ser realistas para Chile y explicados (cómo se calculan, no inventados).",
  "schema": "{\n  \"resumen\": \"2-3 frases: qué servicio va a vender, a quién y a qué precio\",\n  \"prueba\": \"Primer Cliente\",\n  \"diagnostico\": [ { \"eje\": \"aspecto del negocio\", \"nivel\": \"fuerte\" | \"medio\" | \"debil\", \"evidencia\": \"por qué se evalúa así\" } ],\n  \"drills\": [ { \"eje\": \"guion de contacto\", \"enunciado\": \"el mensaje completo listo para copiar y enviar\", \"alternativas\": [\"A) por WhatsApp\", \"B) en persona\", \"C) por Instagram\", \"D) a un negocio local\"], \"correcta\": \"A\", \"solucion\": \"dónde encontrar los primeros 20 prospectos y en qué orden contactarlos\" } ],\n  \"ruta\": [ { \"dia\": 1, \"foco\": \"paso del día\", \"tarea\": \"qué hacer exactamente\", \"porque\": \"qué acerca al primer cliente\" } ]\n}\nLa ruta debe tener 14 entradas. Los drills: 2 guiones listos."
};
