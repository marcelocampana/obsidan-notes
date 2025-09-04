---
title: "Escribir en Markdown"
author: "Marcelo Campana"
date: 2025-09-03
tags: ["markdown", "ejemplo", "documentación", "tutorial"]
categories: ["guías", "formato", "desarrollo"]
description: "Un documento de prueba que muestra todas las propiedades, estilos y sintaxis disponibles en Markdown."
version: "1.0.0"
license: "CC BY-SA 4.0"
---



Este documento demuestra **todas las formas de dar formato** con Markdown.  
Puedes usarlo para probar renderizadores, editores, o como plantilla inicial.  

---
[Archivo 3](#Archivo3)
## Encabezados

# Título H1
## Título H2
### Título H3
#### Título H4
##### Título H5
###### Título H6

---

## Párrafos y Estilos de Texto

Este es un párrafo normal.  
Puedes usar **negrita**, *cursiva*, ~~tachado~~, o incluso <u>subrayado</u> (con HTML).  

Texto en `inline code` y variables como `x = y + 2`.  

---

## Citas y Notas

> Esto es una cita en Markdown.  
> Puede tener múltiples líneas.  

::: tip
Esto es una **nota de tipo "tip"** (algunos renderizadores como VuePress la soportan).  
:::

::: warning
⚠️ Esto es una advertencia importante.  
:::

---

## Listas

### Lista desordenada
- Manzana
- Pera
  - Sublista
    - Sub-sublista
- Naranja

### Lista ordenada
1. Paso uno
2. Paso dos
   3. Paso dos punto uno
   4. Paso dos punto dos
5. Paso tres

---

## Enlaces

[Enlace a Google](https://www.google.com)  
[Enlace interno](#tablas)  
[Enlace con título](https://www.wikipedia.org "Ir a Wikipedia")  

---

## Imágenes

Imagen con texto alternativo:

![Logo de Markdown](https://upload.wikimedia.org/wikipedia/commons/4/48/Markdown-mark.svg "Markdown")

---

## Tablas

| Columna 1 | Columna 2 | Columna 3 |
|-----------|-----------|-----------|
| Texto     | **Bold**  | `Código`  |
| Item 1    | Item 2    | Item 3    |
| Larga     | Más       | Información |

---

## Código

Bloques de código con sintaxis:

```bash
# Ejemplo en bash
echo "Hola Mundo"