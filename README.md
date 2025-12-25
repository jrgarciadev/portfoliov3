# Junior Garcia's Portfolio

This is a portfolio site template complete with a blog. Includes:

- **Next.js 16.1.1** with App Router
- **React 19.2.3** with React Compiler
- **TypeScript 5.9.3**
- MDX and Markdown support (via next-mdx-remote)
- Optimized for SEO (sitemap, robots, JSON-LD schema)
- RSS Feed
- HeroUI v3 (beta) - [v3.heroui.com](https://v3.heroui.com)
- Dynamic OG images
- Syntax highlighting (sugar-high)
- Tailwind CSS v4
- Dark mode support (next-themes)
- Vercel Speed Insights / Web Analytics
- Inter font (via next/font/google)
- Turbopack for fast development

## Demo

https://jrgarciadev.com

## How to Use

Clone the repository and install dependencies:

```bash
git clone <repo-url>
cd jrgarciadev
pnpm install
```

Then, run Next.js in development mode (with Turbopack):

```bash
pnpm dev
```

Build for production:

```bash
pnpm build
pnpm start
```

## Blog

The blog infrastructure is set up and ready to use. To enable blog posts, uncomment the return statement in `app/blog/utils.ts` and add your MDX files to `app/blog/posts/`.
