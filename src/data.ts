export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  bullets?: string[];
  extraNote?: string;
  exampleBox?: {
    title: string;
    description: string;
    bullets: string[];
  };
}

export interface FAQCategory {
  id: string;
  category: string;
  iconName: string;
  items: FAQItem[];
}

export const faqCategories: FAQCategory[] = [
  {
    id: "materiales",
    category: "1. Materiales y Calidad",
    iconName: "Sparkles",
    items: [
      {
        id: "mat-1",
        question: "¿Qué tela usan para las prendas de abrigo?",
        answer: "Utilizamos tela de frisa invisible de algodón de excelente calidad, garantizando prendas suaves, abrigadas y duraderas."
      },
      {
        id: "mat-2",
        question: "¿Qué tela utilizan para las remeras y qué características tiene?",
        answer: "Para las remeras utilizamos algodón jersey peinado 24/1. Es una tela de alta calidad, de trama más cerrada y compacta, lo que la hace muy suave al tacto, resistente a los lavados y evita que se deforme fácilmente. El proceso de peinado elimina las fibras más cortas, logrando una superficie más limpia y prolija."
      },
      {
        id: "mat-3",
        question: "¿Qué colores de telas tienen disponibles?",
        answer: "Hay una gran variedad de colores, pero la disponibilidad exacta depende de la época del año. Te recomendamos consultar la disponibilidad vigente al momento de hacer el pedido."
      }
    ]
  },
  {
    id: "diseno",
    category: "2. Tipos de Diseño, Confección y Modelos",
    iconName: "Scissors",
    items: [
      {
        id: "dis-1",
        question: "¿Cómo se pueden diseñar las bases de las prendas?",
        answer: "Trabajamos con dos estilos de confección sobre los cuales después se realiza la estampa personalizada:",
        bullets: [
          "Modelo Liso (Un solo color): La base de la prenda está hecha completamente de una sola tela y color (por ejemplo, todo el buzo en azul marino), y arriba se le estampa el diseño que elijan.",
          "Modelo Combinado (Más de un color y detalles): Es un diseño más complejo y personalizado que utiliza más de un color de tela en una misma prenda (por ejemplo, la capucha de un color, el cuerpo de otro y un vivo o cinta decorativa en la manga). Y por supuesto, ¡también lleva la estampa arriba!"
        ]
      },
      {
        id: "dis-2",
        question: "¿Qué modelos de prendas se pueden hacer?",
        answer: "Trabajamos con los formatos clásicos y también nos adaptamos a las tendencias actuales:",
        bullets: [
          "Campera (con cierre) y Canguro (con bolsillo delantero y sin cierre).",
          "Cuello tortuga (con un diseño de cuello alto y abrigado).",
          "Modelos en tendencia: Si tenés en mente algún corte o formato que esté de moda en este momento (como los cortes tipo foxie fit u otros), ¡consultanos! Si está disponible, lo podemos armar para tu curso."
        ]
      },
      {
        id: "dis-3",
        question: "¿Hacen bordados en las prendas?",
        answer: "Generalmente no realizamos bordados tradicionales. Actualmente utilizamos técnicas avanzadas de estampa que simulan el estilo del bordado con una terminación excelente. Esto nos permite ofrecer opciones mucho más cómodas (¡no pican ni raspan en el interior de la prenda!), más livianas y considerablemente más económicas para los egresados.",
        extraNote: "💡 De todas formas, si tu curso tiene una idea muy particular o específica en mente, ¡podemos evaluar la posibilidad!"
      },
      {
        id: "dis-4",
        question: "¿Se puede enviar un diseño propio o boceto hecho por los chicos?",
        answer: "¡Sí, totalmente! Si los chicos o la comisión del curso armaron su propio boceto, idea o dibujo, nos lo pueden enviar sin problema. Nosotros nos encargamos de adaptarlo, digitalizarlo y prepararlo para que quede con excelente calidad en la estampa de la prenda."
      },
      {
        id: "dis-5",
        question: "¿Podemos combinar el color de tela de un modelo con la estampa de otro?",
        answer: "¡Sí, exactamente! Todos nuestros diseños son 100% personalizables. Podés elegir la estampa que más te guste de un modelo y combinarla libremente con los colores de tela o corte de cualquier otro. Armamos la propuesta a la medida justa de lo que busque el curso."
      },
      {
        id: "dis-6",
        question: "¿Pueden pedir algunos chicos campera y otros buzo?",
        answer: "¡Sí, totalmente! Dentro del mismo pedido del curso, cada alumno puede elegir el formato que le resulte más cómodo (campera con cierre o buzo canguro), manteniendo la misma línea de diseño, colores y estampas para todo el grupo."
      }
    ]
  },
  {
    id: "tiempos",
    category: "3. Pedidos, Ubicación y Entrega",
    iconName: "Clock",
    items: [
      {
        id: "tie-1",
        question: "¿Cuánto tiempo se demora la entrega?",
        answer: "El proceso de confección comienza una vez que se entregan completas las planillas (nombres, apodos y talles) junto con el comprobante del pago inicial. Generalmente estimamos un plazo de tres meses, aunque en muchos casos el pedido puede estar listo antes."
      },
      {
        id: "tie-2",
        question: "¿Dónde están ubicados y hacen envíos?",
        answer: "Estamos ubicados en Zona Norte, Escobar. Realizamos envíos a todo el país para que tu curso pueda recibir sus buzos en cualquier punto de Argentina."
      },
      {
        id: "tie-3",
        question: "¿Dónde se pueden ver los buzos y comprobar la calidad?",
        answer: "No contamos con un showroom abierto al público general. Sin embargo, si están cerca de la zona podemos coordinar un punto de encuentro en común y llevarles muestras para que las vean en persona. También ofrecemos realizar una reunión virtual (Zoom) en donde van a poder ver la calidad de las prendas en vivo y sacarse todas las dudas en directo."
      },
      {
        id: "tie-4",
        question: "¿Qué pasa si entra un alumno nuevo al curso? (Nuevos ingresos)",
        answer: "¡Se lo hacemos igual! Si se incorpora un compañero nuevo al curso después de haber cerrado el pedido, le confeccionamos la prenda con el mismo diseño del grupo al precio actualizado al momento de solicitarlo."
      }
    ]
  },
  {
    id: "productos",
    category: "4. Productos y Precios",
    iconName: "ShoppingBag",
    items: [
      {
        id: "pro-1",
        question: "¿Se puede pedir únicamente la remera o solo el buzo?",
        answer: "¡Sí, por supuesto! Cada institución elige qué prendas quiere hacer. Si solo necesitan remera o solo buzo, se puede pedir de forma independiente. De todas formas, si eligen pedir ambos, armamos el combo donde la remera accede a un precio preferencial."
      }
    ]
  },
  {
    id: "pagos",
    category: "5. Métodos y Formas de Pago",
    iconName: "CreditCard",
    items: [
      {
        id: "pag-1",
        question: "¿Cuáles son las formas de pago disponibles?",
        answer: "Se puede abonar de dos maneras:",
        bullets: [
          "En un solo pago: Accediendo al precio promocional en un solo pago.",
          "En dos cuotas: Divididas en meses consecutivos, las cuales cuentan con un recargo del 10%."
        ]
      },
      {
        id: "pag-2",
        question: "¿Cómo se realiza la gestión del dinero?",
        answer: "Para mantener la organización del grupo, un padre o responsable se encarga de juntar el dinero de todos y se realiza una única transferencia por el total correspondiente.",
        exampleBox: {
          title: "Ejemplo práctico de financiación (Combo Buzo + Remera):",
          description: "Supongamos que el buzo de referencia vale $10 y la remera en combo vale $5 (total: $15):",
          bullets: [
            "En un solo pago: Abonás el total ($15).",
            "En dos cuotas: Al total del combo se le aplica el recargo del 10% (quedando en $16,5), dividido en dos cuotas mensuales consecutivas de $8.25."
          ]
        }
      }
    ]
  },
  {
    id: "cuidado",
    category: "6. Cuidado de las Prendas",
    iconName: "Sparkles",
    items: [
      {
        id: "cui-1",
        question: "¿Cómo debemos lavar y cuidar las prendas para que la estampa y los colores duren intactos?",
        answer: "¡Tratalas con amor para que te acompañen impecables durante todo el año! Para conservar los colores vivos y la calidad de la estampa, te recomendamos seguir estos consejos:",
        bullets: [
          "🌊 Lavar con agua fría y con la estampa hacia adentro (dada vuelta).",
          "🌀 Ojo con el secarropa: Es súper cómodo, pero si lo usás mucho, el calor extremo podría resquebrajar la estampa y achicar un poco la prenda.",
          "💨 ¿Planchar? ¡Nunca directo sobre la estampa!: Si planchás, usá baja temperatura y jamás pases la plancha sobre el estampado.",
          "🧪 Lavandina... Mhmm, mejor no: Evitá blanqueadores o lavandina para no alterar los tonos de la tela.",
          "☀️ Secado recomendado: Para mantener vivos los colores, no seques la prenda directo al sol. Y si lo hacés, siempre con la estampa hacia adentro."
        ]
      }
    ]
  }
];
