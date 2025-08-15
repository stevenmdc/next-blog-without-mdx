import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '6 CSS Patterns to Cut Boilerplate',
  alternates: {
    canonical: '/articles/css-patterns',
  },
}

export default function CSSPatternsPage() {
  return (
    <article className='prose prose-neutral dark:prose-invert max-w-none'>
      <h1  className='text-xl font-semibold text-neutral-400 dark:text-white'>
        6 CSS Patterns to Cut Boilerplate
      </h1>

      <br />

      <p className='text-neutral-400'>
        Micro-optimizations and quality-of-life hacks to keep your styles tight,
        maintainable, and future-proof.
      </p>
      <br />

      <hr />

      <br />

      <h2>
        <strong>
          <code>:where()</code> for Zero-Specificity Resets
        </strong>
      </h2>

      <p>
        Stop fighting cascade weight—wrap base rules in <code>:where()</code>:
      </p>

      <pre>
        <code className='language-css'>{`:where(h1, h2, h3) {
  font-weight: 600;
  line-height: 1.2;
  margin: 0;
}`}</code>
      </pre>

      <p>
        Selectors inside <code>:where()</code> weigh <em>0</em>, so your utility
        classes still win.
      </p>

      <br />

      <hr />

      <br />

      <h2>
        <strong>Logical Properties &gt; Four-Direction Madness</strong>
      </h2>

      <p>
        Goodbye <code>padding-left</code> vs. <code>padding-right</code>. One
        line covers LTR <em>and</em> RTL:
      </p>

      <pre>
        <code className='language-css'>{`.card {
  padding-inline: 1rem;  /* left & right */
  padding-block: 0.75rem; /* top & bottom */
}`}</code>
      </pre>

      <p>No more media-query hacks when direction changes.</p>

      <br />

      <hr />

      <br />

      <h2>
        <strong>
          Style Parent Elements with <code>:has()</code>
        </strong>
      </h2>

      <p>JavaScript who? Let CSS drive state:</p>

      <pre>
        <code className='language-css'>{`/* Outline group when any input is invalid */
.form:has(input:invalid) {
  outline: 2px solid var(--danger);
}`}</code>
      </pre>

      <p>Parent-aware styling—finally native.</p>

      <br />

      <hr />

      <br />

      <h2>
        <strong>Container Queries for Truly Responsive Components</strong>
      </h2>

      <p>
        Skip breakpoint soup; size to <em>context</em> instead of viewport:
      </p>

      <pre>
        <code className='language-css'>{`.card {
  container-type: inline-size;
}

@container (max-width: 350px) {
  .card {
    grid-template-columns: 1fr; /* stack on narrow cards */
  }
}`}</code>
      </pre>

      <p>Components that adapt wherever you drop them.</p>

      <br />

      <hr />

      <br />

      <h2>
        <strong>
          <code>accent-color</code> &amp; <code>color-scheme</code> → Native
          Theming
        </strong>
      </h2>

      <p>Theme form controls and scrollbars with one property:</p>

      <pre>
        <code className='language-css'>{`:root {
  color-scheme: dark light;
  accent-color: hsl(265 87% 67%); /* 💜 */
}`}</code>
      </pre>

      <p>Instant brand vibes, zero third-party widgets.</p>

      <br />

      <hr />

      <br />

      <h2>
        <strong>
          <code>@layer</code> to Tame the Cascade
        </strong>
      </h2>

      <p>Group utilities, components, and overrides—predictably:</p>

      <pre>
        <code className='language-css'>{`@layer reset, base, utilities, components, overrides;

/* later in the file… */
@layer utilities {
  .text-center { text-align: center; }
}`}</code>
      </pre>

      <p>No more "why is Tailwind beating my button styles?".</p>
    </article>
  )
}
