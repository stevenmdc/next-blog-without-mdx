export default function HomePage() {
  return (
    <div className="prose prose-neutral dark:prose-invert max-w-none">
      <h1>John Smith</h1>
      
      <br />
      
      <p>This is my portfolio, blog, and personal website.</p>
      
      <h2>Articles récents</h2>
      
      <ul>
        <li><a href="/articles/cli-tricks">5 Tiny CLI Tricks You (Probably) Didn't Know</a></li>
        <li><a href="/articles/javascript-patterns">6 Sneaky JavaScript Patterns to Cut Boilerplate</a></li>
        <li><a href="/articles/css-patterns">6 CSS Patterns to Cut Boilerplate</a></li>
      </ul>
      
      <h2>Tutoriels</h2>
      
      <ul>
        <li><a href="/tutorials/nextjs-optimization">Optimisation des performances avec Next.js</a></li>
      </ul>
      
      <h2>Features</h2>
      
      <ul>
        <li>Syntax highlighting</li>
        <li>Light/dark mode</li>
        <li>Sitemap support</li>
        <li>Fully customizable</li>
        <li>Optional redirects</li>
        <li>Write in Markdown / MDX</li>
      </ul>
      
      <h2>Stack</h2>
      
      <ul>
        <li>Next.js / React</li>
        <li>Tailwind CSS</li>
        <li>TypeScript</li>
        <li>Vercel</li>
      </ul>
      
      <h2>Code</h2>
      
      <ul>
        <li><a href="https://github.com/leerob/next-mdx-blog">next-mdx-blog</a></li>
      </ul>
    </div>
  );
}