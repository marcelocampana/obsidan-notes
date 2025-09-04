[[Archivo 3]]
# 2) README de Proyecto de CLI (`README.md`)

```markdown
---
title: "README del Proyecto CLI 'metrix'"
author: "Marcelo Campana"
repo: "github.com/marcelo/metrix"
license: "MIT"
version: "0.3.1"
created: 2025-09-03
tags: ["cli", "analytics", "nodejs", "seo"]
---

# metrix — CLI para métricas SEO y analítica

[![CI](https://img.shields.io/github/actions/workflow/status/marcelo/metrix/ci.yml)](https://github.com/marcelo/metrix/actions)
[![NPM](https://img.shields.io/npm/v/@wetmometro/metrix)](https://www.npmjs.com/package/@wetmometro/metrix)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

`metrix` es una herramienta de línea de comandos para **unificar datos de Search Console y GA4**, generar **tablas de oportunidades** y exportar reportes Markdown.

> **Objetivo:** entregar un backlog priorizado en minutos.

---

## Índice

- [Características](#características)
- [Instalación](#instalación)
- [Uso rápido](#uso-rápido)
- [Configuración](#configuración)
- [Estructura del proyecto](#estructura-del-proyecto)
- [Ejemplos](#ejemplos)
- [Contribuir](#contribuir)
- [Licencia](#licencia)
- [Changelog](#changelog)

---

## Características

- Importa CSV (Search Console) y JSON (GA4).
- Reglas de oportunidad: `CTR < umbral` y `8 ≤ posición ≤ 15`.
- Exporta **Markdown** y **CSV**.
- Plug-ins de puntuación (extensible).

---

## Instalación

```bash
npm i -g @wetmometro/metrix
# o local
npm i @wetmometro/metrix --save-dev