import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '6 Sneaky JavaScript Patterns to Cut Boilerplate',
  alternates: {
    canonical: '/articles/javascript-patterns',
  },
};

export default function JavaScriptPatternsPage() {
  return (
    <article className="prose prose-neutral dark:prose-invert max-w-none">
      <h1>6 Sneaky JavaScript Patterns to Cut Boilerplate</h1>
      
      <br />
      
      <p>Micro-optimizations and quality-of-life hacks to keep your scripts lean, readable, and bug-resistant.</p>
      
      <h2><strong>Optional Chaining <code>?.</code> + Nullish Coalescing <code>??</code></strong></h2>
      
      <p>Stop writing five nested guards:</p>
      
      <pre><code className="language-js">{`// Old
const theme = user && user.settings && user.settings.theme
  ? user.settings.theme
  : 'light';

// New
const theme = user?.settings?.theme ?? 'light';`}</code></pre>
      
      <p>Fewer lines, same safety.</p>
      
      <hr />
      
      <h2><strong>Barrel Files for One-Line Imports</strong></h2>
      
      <p>Aggregate related exports into a single "barrel" file:</p>
      
      <pre><code className="language-js">{`// utils/index.js
export * from './format';
export * from './validate';
export * from './fetch';

// SomeComponent.js
import { formatDate, validateEmail, getJSON } from '@/utils';`}</code></pre>
      
      <p>Kill import clutter without sacrificing tree-shaking.</p>
      
      <hr />
      
      <h2><strong>Memoize Pure Functions with a <code>WeakMap</code></strong></h2>
      
      <p>Cache heavy computations tied to objects—no leaks:</p>
      
      <pre><code className="language-js">{`const cache = new WeakMap();

export function expensive(obj) {
  if (cache.has(obj)) return cache.get(obj);
  const result = crunchNumbers(obj); // 🚀 costly
  cache.set(obj, result);
  return result;
}`}</code></pre>
      
      <p>Results follow the object's lifetime—GC does the cleanup.</p>
      
      <hr />
      
      <h2><strong>Tagged Template Literals for Safe HTML</strong></h2>
      
      <p>Prevent XSS without a third-party lib:</p>
      
      <pre><code className="language-js">{`const escape = (strings, ...values) =>
  strings.reduce(
    (acc, str, i) =>
      acc +
      str +
      (values[i]
        ? String(values[i]).replace(/[&<>"']/g, (s) => ({
            '&': '&amp;',
            '<': '&lt;',
            '>': '&gt;',
            '"': '&quot;',
            "'": '&#39;',
          })[s])
        : ''),
    '',
  );

const name = '<script>alert(1)</script>';
document.body.innerHTML = escape\`<p>Hello, \${name}!</p>\`;`}</code></pre>
      
      <p>Zero dependencies, maximum safety.</p>
      
      <hr />
      
      <h2><strong><code>AbortController</code> for Cancellable <code>fetch</code></strong></h2>
      
      <p>Stop orphaning network calls on route changes:</p>
      
      <pre><code className="language-js">{`const controller = new AbortController();
const { signal } = controller;

fetch('/api/data', { signal })
  .then((r) => r.json())
  .catch((e) => {
    if (e.name !== 'AbortError') throw e;
  });

// later…
controller.abort();`}</code></pre>
      
      <p>No more "state update on unmounted component" warnings.</p>
      
      <hr />
      
      <h2><strong>Format Like a Native with <code>Intl</code></strong></h2>
      
      <p>Forget custom helpers—use the built-ins:</p>
      
      <pre><code className="language-js">{`const usd = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
}).format(1999.99); // "$1,999.99"

const isoDate = new Intl.DateTimeFormat('sv-SE').format(new Date());
// "2025-06-05"`}</code></pre>
      
      <p>Locale-aware, performant, and zero bloat.</p>
    </article>
  );
}