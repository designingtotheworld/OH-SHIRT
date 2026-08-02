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
      }
    ]
  },
  {
    id: "tiempos",
    category: "3. Pedidos y Tiempos de Entrega",
    iconName: "Clock",
    items: [
      {
        id: "tie-1",
        question: "¿Cuánto tiempo se demora la entrega?",
        answer: "El proceso de confección comienza una vez que se entregan completas las planillas (nombres, apodos y talles) junto con el comprobante del pago inicial. Generalmente estimamos un plazo de tres meses, aunque en muchos casos el pedido puede estar listo antes."
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
          "En un solo pago: Accediendo al valor promocional al contado.",
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
  }
];
