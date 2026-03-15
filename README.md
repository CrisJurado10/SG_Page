# SG SynerGy | Arquitectura Frontend de Alto Rendimiento

[![Live Demo](https://img.shields.io/badge/Demo-Live%20Now-success?style=for-the-badge&logo=vercel)](https://cj-dev-showcase.vercel.app/)
[![GitHub Repo](https://img.shields.io/badge/Code-Repository-black?style=for-the-badge&logo=github)](https://github.com/CrisJurado10/SG_Page)
[![Stack](https://img.shields.io/badge/Stack-React%2018%20%7C%20TS%20%7C%20Vite-blue?style=for-the-badge&logo=react)]()

Bienvenidos a la implementación técnica de **SG SynerGy**. Este repositorio no es solo una prueba de concepto, sino un ecosistema Frontend diseñado bajo estándares de grado de producción. La arquitectura prioriza el rendimiento absoluto, mitigación de cuellos de botella en el *Main Thread*, y una escalabilidad predecible, demostrando competencias de ingeniería a nivel *Senior Staff*.

El enfoque central ha sido prescindir de librerías de terceros innecesarias, aprovechando las APIs nativas del navegador y el motor de reconciliación de React 18 para ofrecer una experiencia fluida e inquebrantable a **60fps**.

---

## Rendimiento y Rendering (60fps)

* **Interpolación Habilitada por GPU (Zero Layout Thrashing):** La expansión interactiva de las tarjetas omite el cálculo costoso del DOM tradicional basado en `max-height`. En su lugar, hemos implementado una técnica de vanguardia utilizando **CSS Grid (de `0fr` a `1fr`)**. Esta decisión delega la interpolación matemática al *Compositor Thread* del navegador, evitando bloqueos en el *Main Thread* y manteniendo un framerate sólido de 60fps, incluso en dispositivos móviles de gama de entrada, logrando un rendimiento superior sin añadir peso al bundle con librerías de animación externas.
* **Desacople del Scroll Pipeline:** Los eventos de scroll intensivos (como el efecto Parallax) están rigurosamente orquestados mediante `requestAnimationFrame`. Modificamos exclusivamente propiedades aceleradas por hardware (`translate3d`), previniendo repintados (*repaints*) y reflujos (*reflows*) masivos durante la interacción del usuario.
* **Tracking Sub-Pixel (Hero Mouse Move):** Se implementó el requisito del sutil movimiento 3D interactivo sobre el Hero combinando listeners pasivos del ratón con interpolación en variables CSS (`--x`, `--y`). Esto traslada la carga visual del motor JS a las primitivas de CSS, garantizando que el *Tilt Effect* opere sin devaluar los fotogramas del video de fondo.

## Gestión Crítica de Memoria

* **Mitigación Activa de Memory Leaks:** El hook personalizado `useScrollReveal` interactúa directamente con la API nativa `IntersectionObserver`. Más allá de simplemente detener la observación (`unobserve`), el ciclo de vida del componente invoca proactivamente `observer.disconnect()` tras detectar la intersección. Esto destruye la instancia del observador de raíz, previniendo fugas de memoria por *Detached DOM Nodes* en contextos de grids expansivos o navegaciones prolongadas.
* **Optimización de Heap Allocation:** En arquitecturas junior, es común definir arreglos estáticos y configuraciones dentro del cuerpo del componente, lo que provoca que React reserve nueva memoria (*Heap Allocation*) y sobrecargue el *Garbage Collector* en cada ciclo de renderizado. En este proyecto, las constantes estáticas (como rutas de navegación y mapas de SVGs sociales) se han extraído a nivel de módulo, reduciendo drásticamente el *overhead* de asignación de memoria.

## Arquitectura y Escalabilidad (DRY / Type-Safety)

* **Estado Activo Dinámico (Navbar Contextual):** La barra de navegación resuelve el requerimiento de accesibilidad y experiencia de usuario gestionando de manera reactiva su *Active State*. Este estado escucha el contexto de desplazamiento para inyectar marcadores semánticos (`aria-current="page"`) y transformaciones visuales dinámicas (subrayados y opacidades) asegurando que el usuario comprenda espacialmente su ubicación en la SPA sin recargas de página.
* **Memoización Quirúrgica (`React.memo`):** En estructuras repetitivas como el *Masonry Grid*, la interacción con un elemento (ej. expandir una tarjeta) puede provocar que el motor de reconciliación evalúe a todos los hermanos. Mediante una envoltura estricta con `React.memo`, garantizamos que solo el nodo interactuado sufra repintado, salvaguardando el rendimiento general de la lista.
* **Seguridad de Tipos Genérica (`<T extends HTMLElement>`):** Los hooks personalizados se diseñaron con interfaces genéricas avanzadas. Esto proporciona inferencia estricta en tiempo de compilación para los componentes consumidores, erradicando prácticas frágiles como el casteo forzado de tipos (`as React.RefObject`) y garantizando una base de código libre de errores de `undefined`.
* **Patrones DRY (Don't Repeat Yourself):** Los bloques de UI redundantes (como íconos sociales o barras de enlaces) se renderizan dinámicamente mapeando una Única Fuente de Verdad (*Single Source of Truth*). Escalar la interfaz para agregar nuevos enlaces ahora requiere modificar una sola línea de configuración estática, en lugar de replicar extensos bloques de JSX, minimizando el riesgo de deuda técnica.

## Estrategia de Testing (Vitest y A11y)

El testing no se concibe como un agregado secundario, sino como el contrato de integridad funcional del software. Se eligió **Vitest** sobre Jest para aprovechar el soporte nativo de *ES Modules* y compartir el mismo pipeline de transformación que Vite, garantizando máxima paridad de entorno y tiempos de ejecución ultrarrápidos.

* **Asserciones centradas en la Semántica (A11y-First):** Las pruebas rechazan la fragilidad de buscar elementos por clases CSS dinámicas o `data-testid` acoplados a implementación. El *Test Suite* se apoya estrictamente en consultas semánticas del DOM (`getByRole`, `getByLabelText`). De esta manera, si una prueba es exitosa, se certifica no solo que la lógica opera, sino que la interfaz es robusta y accesible para *Screen Readers* y tecnologías de asistencia.

---

## Mejoras Futuras (Si tuviera más tiempo)

1. **Virtualización del DOM:** Despliegue de técnicas de *Windowing* (`react-virtualized` o utilidades propias) para el Grid de servicios en caso de escalar a 100+ elementos concurrentes.
2. **Server-Side Rendering (SSR):** Migración del *shell* estático a Next.js (App Router) para consolidar el *Time to First Byte* (TTFB) y optimizar el rastreo de motores de búsqueda técnicos.
3. **Estado Global Predictivo:** Integración de *Zustand* en la capa de datos si el flujo arquitectónico evoluciona a requerir hidratación compleja de estado de sesión entre sub-dominios.
4. **Testing Automatizado (E2E):** Integración de Playwright en pipelines de CI/CD (GitHub Actions) para validación de regresión visual cruzada entre navegadores.

---

## Stack Tecnológico

* **Core:** React 18, TypeScript (Modo Estricto Activado)
* **Build Tool:** Vite (ESM, Fast Refresh, Tree-shaking Optimizado)
* **Arquitectura de Estilos:** Tailwind CSS (Diseño Utility-First, Columnas CSS Puras, GPU Transforms)
* **Calidad y Testing:** Vitest, React Testing Library, RTL/jest-dom
* **Integridad de Código:** ESLint, Prettier

## Despliegue Local

Para levantar este entorno en máquina local y auditar su arquitectura:

```bash
# 1. Clonar el repositorio
git clone https://github.com/CrisJurado10/SG_Page.git

# 2. Instalar dependencias (Se prioriza 'ci' para asegurar instalaciones deterministas)
npm ci

# 3. Desplegar el servidor de desarrollo de Vite
npm run dev

# 4. Ejecutar y validar la suite de pruebas unitarias/integración
npm run test
```

---
*Diseñado y estructurado con rigor técnico por [Cristian Jurado](https://github.com/CrisJurado10).*
