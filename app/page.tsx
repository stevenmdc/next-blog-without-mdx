export default function HomePage() {
  return (
    <div className="prose prose-neutral dark:prose-invert max-w-none">
      <h1>John Smith</h1>
      
      <br />
      
      <p>This is my portfolio, blog, and personal website.</p>
      
      <h2>Examples</h2>
      
      <ul>
        <li><a href="/n/1">5 Tiny CLI Tricks You (Probably) Didn't Know</a></li>
        <li><a href="/n/2">6 Sneaky JavaScript Patterns to Cut Boilerplate</a></li>
        <li><a href="/n/3">6 CSS Patterns to Cut Boilerplate</a></li>
        <li><a href="/n/4">Example without MDX</a></li>
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