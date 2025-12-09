# Epic Portfolio

A modern, interactive portfolio built with React, TypeScript, Vite, and Tailwind CSS.

## Features

- 🎨 Beautiful, modern design with smooth animations
- 🎲 "I Feel Lucky" button with 7 epic random effects
- 📱 Fully responsive design
- ⚡ Fast performance with Vite
- 🔒 Fully typed with TypeScript
- 🧩 Modular component architecture
- 🎯 Custom hooks for reusable logic

## Tech Stack

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Styling
- **Custom Hooks** - Reusable logic

## Project Structure

```
src/
├── components/
│   ├── common/          # Reusable UI components
│   ├── effects/         # Visual effect components
│   └── sections/        # Page section components
├── hooks/               # Custom React hooks
├── types/               # TypeScript type definitions
├── constants/           # App constants and data
├── styles/              # Global styles
├── App.tsx              # Main app component
└── main.tsx             # Entry point
```

## Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn/pnpm

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start development server:
```bash
npm run dev
```

3. Build for production:
```bash
npm run build
```

4. Preview production build:
```bash
npm run preview
```

## Component Architecture

### Common Components
- `Button` - Reusable button with variants
- `Badge` - Status/notification badge
- `TechBadge` - Technology stack badge
- `StatCard` - Statistics display card
- `SkillBadge` - Skill tag with animation
- `SectionTitle` - Section heading component

### Section Components
- `Navigation` - Top navigation bar
- `Hero` - Hero section with animated title
- `Work` - Projects showcase section
- `ProjectCard` - Individual project card
- `About` - About me section
- `Contact` - Contact section
- `Footer` - Footer component
- `Loading` - Loading screen

### Effect Components
- `CustomCursor` - Custom cursor effect
- `Particles` - Particle animation system
- `FloatingShapes` - Parallax floating shapes
- `LuckyModeOverlays` - Special effect overlays

### Custom Hooks
- `useMousePosition` - Track mouse position
- `useCustomCursor` - Custom cursor logic
- `useFloatingShapes` - Floating shapes animation
- `useParticles` - Particle system management
- `useLuckyMode` - "I Feel Lucky" button logic

## Customization

### Update Projects
Edit `src/constants/index.ts` to modify the `PROJECTS` array.

### Change Themes
Modify the `THEMES` object in `src/constants/index.ts`.

### Add New Lucky Modes
1. Add the mode type to `src/types/index.ts`
2. Add the mode to `LUCKY_MODES` in `src/constants/index.ts`
3. Implement the effect in `src/components/effects/LuckyModeOverlays.tsx`

## License

MIT

