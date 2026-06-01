# 🌟 Calculadora

Una calculadora hecha con React, TypeScript y Vite.

🔗 **Deploy:** [https://calculadora-sarita.netlify.app/](https://calculadora-sarita.netlify.app/)

---

## Stack

- **Runtime / Package manager:** Bun
- **Framework:** React 19 + Vite
- **Lenguaje:** TypeScript
- **Testing:** Vitest + Testing Library
- **Linting:** ESLint (Standard style, sin punto y coma, max 120 chars)
- **Documentación:** Storybook

---

## Funcionalidades

- Suma, resta, multiplicación, división y módulo
- Operaciones encadenadas con resultados intermedios
- Límite de 9 caracteres en el display (punto y signo cuentan)
- Muestra `ERROR` para resultados negativos o mayores a 999,999,999
- Punto decimal
- Botón `+/-` para cambiar el signo
- Decoraciones kawaii animadas ✨

---

## Correr el proyecto

```bash
bun install
bun run dev
```

## Comandos disponibles

```bash
bun run dev          # servidor local en localhost:5173
bun test             # correr todos los tests
bun run lint         # verificar estilo de código
bun run storybook    # storybook en localhost:6006
bun run build        # build de producción
```

---

## Estructura

```
src/
├── calculator/
│   └── buttons.ts        # definición de botones
├── components/
│   ├── Calculator.tsx
│   ├── Display.tsx
│   ├── Button.tsx
│   ├── ButtonGrid.tsx
│   └── Decorations.tsx
├── hooks/
│   └── useCalculator.ts  # toda la lógica
├── stories/
│   ├── Button.stories.ts
│   ├── Display.stories.ts
│   └── Calculator.stories.ts
└── tests/
    └── useCalculator.test.ts
```