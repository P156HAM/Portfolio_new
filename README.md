# Hamdi Almasalmeh — Portfolio

Personal portfolio of Hamdi Almasalmeh, a full-stack developer in Gothenburg,
Sweden, building AI-powered web and mobile products.

Built with **React 18**, **TypeScript**, **Vite**, and **Tailwind CSS**.

## Highlights

- Editorial, content-first design with light & dark themes (respects system preference)
- Case-study project section (incl. the open-source [`logslim`](https://www.npmjs.com/package/logslim) npm package)
- Accessible: semantic landmarks, focus-visible styles, reduced-motion support
- SEO-ready: Open Graph & Twitter cards, JSON-LD `Person` schema, sitemap & robots

## Develop

```bash
npm install
npm run dev      # start the dev server
npm run build    # type-check + production build
npm run preview  # preview the production build
npm run lint     # lint
```

## Structure

```
src/
├── components/
│   ├── common/      # Button, SectionTitle, ThemeToggle, Reveal
│   └── sections/    # Navigation, Hero, Work, ProjectCard, About, Contact, Footer
├── hooks/           # useTheme
├── constants/       # projects, skills, social links, contact
├── types/           # shared TypeScript types
├── styles/          # global CSS + design tokens
└── App.tsx
```

## Before deploying

Replace the placeholder domain `https://hamdi-almasalmeh.netlify.app/` with your real
URL in `index.html` (canonical, Open Graph, Twitter) and in
`public/robots.txt` + `public/sitemap.xml`.

## License

MIT
