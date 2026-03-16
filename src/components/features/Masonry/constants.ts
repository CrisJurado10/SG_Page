export interface CardData {
  id: string;
  title: string;
  shortText: string;
  fullText: string;
  imageUrl: string;
}

export const MOCK_CARDS: CardData[] = [
  {
    id: '1',
    title: 'Tarjetas de Crédito Premium',
    shortText: 'Descubre los beneficios exclusivos de nuestras tarjetas metálicas.',
    fullText: 'Acceso a salas VIP en aeropuertos de todo el mundo, seguros de viaje integrales y un programa de recompensas inigualable que te devuelve hasta un 5% en compras. Sin comisiones internacionales.',
    imageUrl: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: '2',
    title: 'Inversiones Automatizadas',
    shortText: 'Haz que tu dinero trabaje para ti con nuestros portafolios.',
    fullText: 'Nuestro algoritmo balancea tu portafolio diariamente según las condiciones del mercado y tu perfil de riesgo. Invierte en acciones, bonos y ETFs globales desde solo $10.',
    imageUrl: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: '3',
    title: 'Pagos Internacionales',
    shortText: 'Envía y recibe dinero en más de 50 divisas al instante.',
    fullText: 'Olvídate de las altas tarifas bancarias. Convierte divisas al tipo de cambio interbancario real y envía transferencias que llegan en segundos. Ideal para operaciones globales.',
    imageUrl: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: '4',
    title: 'Ahorro Inteligente',
    shortText: 'Alcanza tus metas financieras sin esfuerzo con reglas.',
    fullText: 'Configura reglas como "redondear mis compras" o "guardar el 10%". Crea múltiples bóvedas para diferentes objetivos y observa cómo crecen con nuestra tasa preferencial.',
    imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: '5',
    title: 'Seguridad Biométrica',
    shortText: 'Tu cuenta protegida por la tecnología más avanzada.',
    fullText: 'Implementamos reconocimiento facial y dactilar para autorizar transacciones. Tus fondos están asegurados y utilizamos encriptación AES-256 para proteger tus datos.',
    imageUrl: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: '6',
    title: 'Cripto Exchange',
    shortText: 'Compra, vende y almacena activos digitales 24/7.',
    fullText: 'Accede al mercado cripto desde la misma app. Intercambia Bitcoin, Ethereum y stablecoins con los spreads más bajos, manteniendo el control total de tus llaves privadas.',
    imageUrl: 'https://images.unsplash.com/photo-1621416894569-0f39ed31d247?auto=format&fit=crop&q=80&w=800',
  }
];
