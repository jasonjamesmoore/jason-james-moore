# Jason James Moore – Monorepo

This is the monorepo for Jason James Moore’s personal web projects, including his music site, software development portfolio, and public landing page.

##  Structure

```bash
jason-james-moore/
├── music/   # Public site for saxophone lessons, performances, and teaching
├── dev/     # Developer portfolio (React, TypeScript, full-stack work)
└── www/     # Main landing hub at www.jasonjamesmoore.com
```

Each folder is a separate [Next.js](https://nextjs.org/) app managed independently, but stored together for shared branding, consistency, and deployment.

##  Deployment

These projects are deployed via [Vercel](https://vercel.com), each using its own root directory and custom domain:

| Subproject | URL                              | Root Folder |
|------------|----------------------------------|-------------|
| Music Site | [music.jasonjamesmoore.com](https://music.jasonjamesmoore.com) | `/music`     |
| Dev Site   | [dev.jasonjamesmoore.com](https://dev.jasonjamesmoore.com)     | `/dev`       |
| Landing Hub | [www.jasonjamesmoore.com](https://www.jasonjamesmoore.com)    | `/www`       |

##  Tech Stack

- [Next.js](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [ShadCN/UI](https://ui.shadcn.com/)
- Vercel hosting & CI/CD

##  Environment Variables

Each sub-project uses `.env.local` for storing local secrets like API keys, email credentials, or service tokens .
