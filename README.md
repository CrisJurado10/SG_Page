# SG SynerGy | Arquitectura Frontend de Alto Rendimiento

[![Live Demo](https://img.shields.io/badge/Demo-Live%20Now-success?style=for-the-badge&logo=vercel)](https://cj-dev-showcase.vercel.app/)
[![GitHub Repo](https://img.shields.io/badge/Code-Repository-black?style=for-the-badge&logo=github)](https://github.com/CrisJurado10/SG_Page)
[![Stack](https://img.shields.io/badge/Stack-React%2018%20%7C%20TS%20%7C%20Vite-blue?style=for-the-badge&logo=react)]()

Bienvenidos a la implementación técnica de **SG SynerGy**. Este repositorio no es solo una prueba de concepto, sino un ecosistema Frontend diseñado bajo estándares de grado de producción. La arquitectura prioriza el rendimiento absoluto, mitigación de cuellos de botella en el *Main Thread*, y una escalabilidad modular, demostrando competencias de ingeniería a nivel *Senior Staff*.

El enfoque central ha sido prescindir de librerías de terceros innecesarias, aprovechando las APIs nativas del navegador y el motor de reconciliación de React 18 para ofrecer una experiencia fluida e inquebrantable a **60fps**.

---

## Rendimiento y Rendering (60fps)

* **Interpolación Habilitada por GPU (Zero Layout Thrashing):** La expansión interactiva de las tarjetas omite el cálculo costoso del DOM tradicional basado en `max-height`. En su lugar, hemos implementado una técnica de vanguardia utilizando **CSS Grid (de `0fr` a `1fr`)**. Esta decisión delega la interpolación matemática al *Compositor Thread* del navegador, evitando bloqueos en el *Main Thread* y manteniendo un framerate sólido de 60fps, incluso en dispositivos móviles de gama de entrada.
* **Desacople del Scroll Pipeline:** Los eventos de scroll intensivos (como el efecto Parallax) están rigurosamente orquestados mediante `requestAnimationFrame`. Modificamos exclusivamente propiedades aceleradas por hardware (`translate3d`), previniendo repintados (*repaints*) y reflujos (*reflows*) masivos durante la interacción del usuario.
* **Tracking Sub-Pixel (Hero Mouse Move):** Se implementó el requisito del sutil movimiento 3D interactivo sobre el Hero combinando listeners pasivos del ratón con interpolación en variables CSS (`--x`, `--y`). Esto traslada la carga visual del motor JS a las primitivas de CSS, garantizando que el *Tilt Effect* opere sin devaluar los fotogramas del video de fondo.
* **Baseline Visual Alignment (Pixel Perfect):** En el desarrollo del Footer, se implementó un sistema de offsets compensatorios (`md:pt-2`) para lograr una alineación visual perfecta (*Baseline Alignment*) entre elementos de diferentes jerarquías tipográficas (Logo vs. Títulos), garantizando una armonía estética de alta gama.

## Gestión Crítica de Memoria y Tipado

* **Mitigación Activa de Memory Leaks:** El hook personalizado `useScrollReveal` interactúa directamente con la API nativa `IntersectionObserver`. Más allá de simplemente detener la observación (`unobserve`), el ciclo de vida del componente invoca proactivamente `observer.disconnect()` tras detectar la intersección. Esto destruye la instancia del observador de raíz, previniendo fugas de memoria por *Detached DOM Nodes*.
* **Optimización de Heap Allocation:** Las constantes estáticas (como rutas de navegación y mapas de SVGs sociales) se han extraído a nivel de módulo, reduciendo drásticamente el *overhead* de asignación de memoria y sobrecarga del *Garbage Collector* en cada ciclo de renderizado.
* **Zero-Runtime Type Safety & Bundle Optimization:** Bajo la regla estricta `verbatimModuleSyntax`, el proyecto utiliza exclusivamente **Type-Only Imports** (`import type`). Esto garantiza que el compilador de TypeScript elimine por completo las dependencias de tipos en el bundle final de producción, reduciendo el tiempo de transpilación y eliminando código "fantasma" que no aporta al runtime.

## Arquitectura y Escalabilidad (SRP / SoC)

* **Patrón de Orquestación y Desacoplamiento:** Se migró de una estructura monolítica a una arquitectura modular basada en el *Single Responsibility Principle*. Componentes críticos como `Navbar`, `Hero` y `MasonryGrid` actúan puramente como capas de composición, delegando la lógica compleja a **Custom Hooks** especializados (`useScrollSpy`, `useMouseInteraction`, etc.) y la representación visual a sub-componentes atómicos memoizados.
* **Estado Activo Dinámico (Navbar Contextual):** La barra de navegación gestiona de manera reactiva su *Active State* escuchando el contexto de desplazamiento para inyectar marcadores semánticos (`aria-current="page"`) y transformaciones visuales dinámicas, asegurando que el usuario comprenda espacialmente su ubicación en la SPA sin recargas de página.
* **Memoización Quirúrgica (`React.memo`):** En estructuras repetitivas como el *Masonry Grid*, la interacción local (ej. expandir una tarjeta) está aislada. Mediante el uso de `memo`, garantizamos que solo el nodo interactuado sufra repintado, salvaguardando el rendimiento general de la lista.
* **Seguridad de Tipos Genérica (`<T extends HTMLElement>`):** Los hooks personalizados se diseñaron con interfaces genéricas avanzadas. Esto proporciona inferencia estricta en tiempo de compilación para los componentes consumidores, erradicando prácticas frágiles como el casteo forzado de tipos (`as React.RefObject`).
* **Patrones DRY (Don't Repeat Yourself):** Los bloques de UI redundantes se renderizan dinámicamente mapeando una Única Fuente de Verdad (*Single Source of Truth*). Escalar la interfaz ahora requiere modificar una sola línea de configuración estática, minimizando el riesgo de deuda técnica.

## Estrategia de Testing (Vitest y A11y)

El testing no se concibe como un agregado secundario, sino como el contrato de integridad funcional del software. Se eligió **Vitest** por su soporte nativo de *ES Modules* y su paridad total con el pipeline de transformación de Vite.

* **Asserciones centradas en la Semántica (A11y-First):** Las pruebas rechazan la fragilidad de buscar elementos por clases CSS. El *Test Suite* se apoya estrictamente en consultas semánticas del DOM (`getByRole`, `getByLabelText`), certificando que la interfaz sea robusta y accesible para tecnologías de asistencia.

---

## Mejoras Futuras (Si tuviera más tiempo)

1. **Virtualización del DOM:** Despliegue de técnicas de *Windowing* para el Grid de servicios en caso de escalar a 100+ elementos concurrentes.
2. **Server-Side Rendering (SSR):** Migración a Next.js (App Router) para consolidar el *Time to First Byte* (TTFB).
3. **Estado Global Predictivo:** Integración de *Zustand* si el flujo evoluciona a requerir hidratación compleja de estado de sesión.
4. **Testing Automatizado (E2E):** Integración de Playwright en pipelines de CI/CD para validación de regresión visual.

---

## Stack Tecnológico

* **Core:** React 18, TypeScript (Modo Estricto & VerbatimModuleSyntax)
* **Build Tool:** Vite 6 (ESM, Fast Refresh, Tree-shaking Optimizado)
* **Arquitectura de Estilos:** Tailwind CSS (Columnas CSS Puras, GPU Transforms)
* **Calidad y Testing:** Vitest, React Testing Library, RTL/jest-dom
* **Integridad de Código:** ESLint, Prettier

## Despliegue Local

```bash
# 1. Clonar el repositorio
git clone [https://github.com/CrisJurado10/SG_Page.git](https://github.com/CrisJurado10/SG_Page.git)

# 2. Instalar dependencias
npm ci

# 3. Desplegar el servidor de desarrollo
npm run dev

# 4. Ejecutar y validar la suite de pruebas
npm run test
```

---
*Diseñado y estructurado con rigor técnico por [Cristian Jurado](https://github.com/CrisJurado10).*
