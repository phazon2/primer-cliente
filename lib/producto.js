// Configuracion del producto. Un repo, un negocio.
export const PRODUCTO = {
  "id": "primercliente",
  "categoria": "Entrepreneurship & Job Creation",
  "nombre": "Primer Cliente",
  "tagline": "No te falta un plan de negocios. Te falta que alguien diga que sí.",
  "subtitulo": "Cuenta qué sabes hacer y recibe la propuesta que tu primer cliente puede aprobar: alcance, precio, plazo y forma de pago, lista para mandar.",
  "inputLabel": "Captura de tu CV, tu perfil o una foto de tu trabajo",
  "inputAlt": "O escribe qué sabes hacer",
  "altPlaceholder": "Ej: sé editar videos, hago uñas, arreglo computadores, enseño matemáticas, cocino para eventos...",
  "precio": "$5.990",
  "ancla": "menos que un día de trabajo",
  "mpLink": "https://mpago.la/2DV3pVZ",
  "privacidad": "Tus datos se procesan en el momento y no se almacenan.",
  "prompt": "Eres el estratega de Primer Cliente, un servicio chileno que convierte una habilidad en un servicio vendible y consigue el primer cliente pagado.\n\nTu tarea, en español de Chile, tono directo y realista (nada de coaching motivacional):\n1. DIAGNÓSTICO: qué vende realmente esta persona, a quién le sirve, qué tan competido está y cuál es su ventaja concreta.\n2. PLAN de 14 días: pasos para tener el servicio listo y salir a vender (definir oferta, precio, dónde están los clientes, cuántos contactar por día). Acciones específicas, no consejos.\n3. GUION DE VENTA: el mensaje exacto para contactar, y dónde encontrar a los primeros prospectos (tipos de lugares, grupos, negocios locales concretos según el rubro).\nLos precios deben ser realistas para Chile y explicados (cómo se calculan, no inventados).\n\nDESTINATARIO DEL ARTEFACTO: lo que produces no es para quien lo sube, es para el primer cliente que tiene que aprobar y pagar. Escríbelo en el registro y con la estructura que ESE destinatario espera recibir.\n\nCUÁNDO NEGARTE: Si no queda claro qué sabe hacer la persona o para quién, NO inventes un servicio: pregunta lo que falta. Una propuesta genérica mandada a un cliente real quema el contacto y no hay segundo intento.",
  "schema": "{\n  \"resumen\": \"2-3 frases: qué servicio va a vender, a quién y a qué precio\",\n  \"prueba\": \"Primer Cliente\",\n  \"diagnostico\": [ { \"eje\": \"aspecto del negocio\", \"nivel\": \"fuerte\" | \"medio\" | \"debil\", \"evidencia\": \"por qué se evalúa así\" } ],\n  \"drills\": [ { \"eje\": \"guion de contacto\", \"enunciado\": \"el mensaje completo listo para copiar y enviar\", \"alternativas\": [\"A) por WhatsApp\", \"B) en persona\", \"C) por Instagram\", \"D) a un negocio local\"], \"correcta\": \"A\", \"solucion\": \"dónde encontrar los primeros 20 prospectos y en qué orden contactarlos\" } ],\n  \"ruta\": [ { \"dia\": 1, \"foco\": \"paso del día\", \"tarea\": \"qué hacer exactamente\", \"porque\": \"qué acerca al primer cliente\" } ]\n}\nLa ruta debe tener 14 entradas. Los drills: 2 guiones listos.",
  "claim": "Los cursos de emprendimiento producen planes de negocio, que es un documento que el emprendedor se escribe a sí mismo. Primer Cliente produce el único documento que otra persona tiene que firmar: la propuesta de servicio.",
  "barrera": "La barrera es de incentivos: el negocio de la formación se cobra por adelantado y por curso terminado, así que su producto es el plan y no el cliente. Nadie en esa cadena cobra por que aparezca el primer pago real.",
  "destinatario": "el primer cliente que tiene que aprobar y pagar",
  "competidores": "Sercotec, los cursos de emprendimiento de las municipalidades y CORFO entregan formación y capital semilla, no clientes. Nuestra propuesta puede ser el entregable final de sus propios programas.",
  "labels": {
    "plan": "Tus 14 días hasta el primer pago",
    "artefactos": "Tu propuesta, lista para mandar"
  }
};
