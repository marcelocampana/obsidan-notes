# CLAUDE.md

Este archivo proporciona orientación a Claude Code (claude.ai/code) cuando trabaja con código en este repositorio.

## Comandos de Desarrollo

- **Servidor de desarrollo**: `pnpm dev` - inicia el servidor de desarrollo en http://localhost:3000
- **Construcción**: `pnpm build` - construye la aplicación para producción
- **Vista previa**: `pnpm preview` - vista previa local de la construcción de producción
- **Instalar dependencias**: `pnpm install` - instala todas las dependencias (requerido: pnpm)
- **Linting**: `pnpm lint` - ejecuta verificaciones de ESLint
- **Verificación de tipos**: `pnpm typecheck` - ejecuta verificación de tipos TypeScript

## Arquitectura del Proyecto

Esta es una plantilla de documentación Nuxt 4 usando Nuxt UI Pro y Nuxt Content.

### Stack Tecnológico
- **Framework**: Nuxt 4 con TypeScript
- **Componentes UI**: Nuxt UI Pro exclusivamente
- **Gestión de Contenido**: Nuxt Content con archivos Markdown
- **Estilos**: Tailwind CSS a través del sistema de temas de Nuxt UI Pro
- **Gestor de Paquetes**: pnpm (requerido - ver package.json "packageManager")
- **Íconos**: Iconify con colecciones para Lucide, Simple Icons, VSCode Icons

### Módulos Clave
- `@nuxt/ui-pro`: Sistema de componentes UI y temas
- `@nuxt/content`: Gestión de contenido y navegación
- `@nuxt/image`: Optimización de imágenes
- `@nuxt/icon`: Sistema de íconos
- `nuxt-og-image`: Generación de imágenes Open Graph
- `nuxt-llms`: Integración LLM para documentación
- `@nuxt/fonts`: Optimización de fuentes

### Estructura de Contenido
El contenido está organizado usando colecciones de Nuxt Content definidas en `content.config.ts`:
- **landing**: Colección de página única para index.md
- **docs**: Páginas de documentación con estructura de navegación
- Los archivos de contenido están en el directorio `/content/`
- La navegación se genera automáticamente desde la estructura de archivos

### Temas y Estilos
- **Configuración de tema**: Centralizada en `app/app.config.ts`
- **Colores primarios**: Naranja (primary), Slate (neutral)
- **CSS personalizado**: Estilos globales mínimos en `app/assets/css/main.css`
- **Enfoque de estilos**: Usar componentes Nuxt UI Pro con configuración de tema, evitar clases Tailwind directas

### Estructura de la Aplicación
- **Layout raíz**: `app/app.vue` - proporciona navegación, búsqueda y layout global
- **Layout docs**: `app/layouts/docs.vue` - layout específico para documentación con navegación lateral
- **Páginas**: Enrutamiento auto-generado con `[...slug].vue` para renderizado de contenido
- **Componentes**: Componentes personalizados en `app/components/` para header, footer y funcionalidad especializada

### Configuración de Contenido
- **Funcionalidad de búsqueda**: Integrada con colecciones de contenido
- **Navegación**: Auto-generada desde la estructura de contenido
- **TOC**: Configurado para profundidad de un solo nivel
- **Pre-renderizado**: Habilitado para homepage y crawling para generación estática

### Notas de Desarrollo
- Usa ESLint con configuración Nuxt y reglas estilísticas (comma dangle: never, brace style: 1tbs)
- La configuración TypeScript extiende desde la configuración auto-generada de Nuxt
- El contenido excluye archivos de vault Obsidian (`.obsidian/**`)
- Soporta integración Nuxt Studio para edición de contenido
- Integración Renovate para actualizaciones de dependencias