---
title: "Cómo medir el rendimiento SEO con ejemplos prácticos"
subtitle: "De cero a un tablero accionable"
author:
  name: "Marcelo Campana"
  email: "marcelo@example.com"
  url: "https://wetmometro.com"
date: 2025-09-03
updated: 2025-09-03
draft: false
lang: es
tags: ["seo", "medición", "analytics", "nuxt-content", "markdown"]
categories: ["Guías", "Tutoriales"]
cover:
  image: "/images/seo-dashboard-cover.webp"
  caption: "Tablero SEO con métricas clave"
  alt: "Dashboard SEO"
readingTime: 12
canonical: "https://wetmometro.com/blog/medir-rendimiento-seo"
series: "SEO práctico"
toc: true
seo:
  title: "Medir rendimiento SEO: guía con ejemplos (plantilla completa)"
  description: "Plantilla de Markdown con ejemplos de tablas, gráficos Mermaid, notas al pie, y snippets reproducibles."
  noindex: false
---




Este artículo guía la creación de un **tablero SEO** con métricas accionables, usando solo Markdown + tu generador estático favorito.

> **Resumen rápido:** Definimos métricas, diseñamos un pipeline simple y publicamos un dashboard con _Nuxt Content_ o _Jekyll_.

---

## Tabla de Contenidos

- [Objetivos](#objetivos)
- [Métricas clave](#métricas-clave)
- [Estructura de carpetas](#estructura-de-carpetas)
- [Implementación (Nuxt Content / Jekyll / Hugo)](#implementación)
- [Tablas y ejemplos](#tablas-y-ejemplos)
- [Gráfico de flujo (Mermaid)](#gráfico-de-flujo-mermaid)
- [Snippets reproducibles](#snippets-reproducibles)
- [Checklist de lanzamiento](#checklist-de-lanzamiento)
- [FAQ](#faq)
- [Notas](#notas)

---

## Objetivos

- **Visibilidad**: detectar páginas con impresiones altas pero CTR bajo.  
- **Conversión**: identificar páginas con tráfico orgánico que no generan leads.
- **Oportunidad**: descubrir keywords cercanas a posición 8–15 para _quick wins_.

---

## Métricas clave

1. **CTR orgánico** = Clics / Impresiones  
2. **Top Keywords** por URL (posición media & volumen).  
3. **Tasa de conversión** por página.  
4. **Tiempo hasta interacción** (TTI) y **LCP** (Core Web Vitals).  

> 💡 **Tip:** combina métricas de Search Console con analítica de conversión (GA4 o tu sistema).

---

## Estructura de carpetas

```text
content/
├─ blog/
│  ├─ 2025-09-03-medir-rendimiento-seo.md
│  └─ images/
│     └─ seo-dashboard-cover.webp
data/
├─ keywords.csv
└─ pages.csv