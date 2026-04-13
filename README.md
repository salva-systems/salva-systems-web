# Salva Systems Web

Sitio corporativo en Next.js 15 con App Router, TypeScript estricto y arquitectura modular para marketing y captación.

## Stack

- Next.js 15 (App Router)
- TypeScript estricto
- Tailwind CSS
- shadcn/ui (estructura y primitivas UI)
- Framer Motion
- lucide-react
- react-hook-form + zod
- clsx + tailwind-merge

## Estructura

- `/app/(marketing)` rutas públicas (`/`, `/services`, `/cases`, `/team`, `/technical`, `/faq`, `/contact`)
- `/components/layout` shell, cabecera y pie
- `/components/sections` secciones por dominio de página
- `/components/ui` primitivas UI reutilizables
- `/components/shared` componentes transversales
- `/lib/constants` configuración de dominio y locales
- `/lib/content` contenido centralizado (es por defecto, en preparado)
- `/lib/utils` utilidades compartidas

## Desarrollo

```bash
npm install
npm run dev
```

## Calidad

```bash
npm run lint
npm run build
```
