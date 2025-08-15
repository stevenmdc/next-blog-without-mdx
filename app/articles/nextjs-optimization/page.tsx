// app/articles/nextjs-optimization/page.tsx
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Next.js Performance Optimization Tricks You Should Know",
  alternates: {
    canonical: '/articles/nextjs-optimization',
  },
};

export default function NextJSOptimizationTutorial() {
  return (
    <article className="prose prose-neutral dark:prose-invert max-w-none">
      <h1 className='text-xl font-semibold text-neutral-400 dark:text-white'>Next.js Performance Optimization Tricks You Should Know</h1>
      
      <br />
      
      <p className='text-neutral-400'>Essential techniques to supercharge your Next.js applications and deliver blazing-fast user experiences.</p>
      
      <br />

      <hr />

      <br />
      
      <h2><strong>Image Optimization with next/image</strong></h2>
      
      <p>Automatically optimize images with resizing, compression, and modern formats:</p>
      
      <pre><code className="language-tsx">{`import Image from 'next/image'

export default function ProductCard() {
  return (
    <div className="card">
      <Image
        src="/product.jpg"
        alt="Product description"
        width={300}
        height={200}
        priority // For above-the-fold images
        placeholder="blur"
        blurDataURL="data:image/jpeg;base64,..."
      />
    </div>
  )
}`}</code></pre>

      <h3>Key Benefits:</h3>
      <ul>
        <li>• Automatic lazy loading</li>
        <li>• Modern image formats (WebP, AVIF)</li>
        <li>• Responsive resizing</li>
        <li>• Prevents Cumulative Layout Shift (CLS)</li>
      </ul>
      
      <br />
      
      <hr />
      
      <br />
      
      <h2><strong>Code Splitting with dynamic imports</strong></h2>
      
      <p>Load components only when needed to reduce initial bundle size:</p>
      
      <pre><code className="language-tsx">{`import dynamic from 'next/dynamic'
import { Suspense } from 'react'

const HeavyComponent = dynamic(() => import('../components/HeavyComponent'), {
  loading: () => <p>Loading...</p>,
  ssr: false // Disable SSR for this component
})

export default function Dashboard() {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <HeavyComponent />
      </Suspense>
    </div>
  )
}`}</code></pre>
      
      <br />
      
      <hr />
      
      <br />
      
      <h2><strong>Font Optimization with next/font</strong></h2>
      
      <p>Eliminate layout shifts caused by font loading:</p>
      
      <pre><code className="language-tsx">{`import { Inter } from 'next/font/google'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.className}>
      <body>{children}</body>
    </html>
  )
}`}</code></pre>
      
      <br />
      
      <hr />
      
      <br />
      
      <h2><strong>Smart Caching with App Router</strong></h2>
      
      <p>Granular control over data fetching and revalidation:</p>
      
      <pre><code className="language-tsx">{`async function getProducts() {
  const res = await fetch('https://api.example.com/products', {
    next: { 
      revalidate: 3600, // Revalidate every hour
      tags: ['products'] // For targeted invalidation
    }
  })
  
  return res.json()
}`}</code></pre>
      
      <br />
      
      <hr />
      
      <br />
      
      <h2><strong>SEO Optimization with Metadata API</strong></h2>
      
      <p>Dynamically generate SEO metadata for each page:</p>
      
      <pre><code className="language-tsx">{`export async function generateMetadata({ params }) {
  const product = await getProduct(params.id)
  
  return {
    title: \`\${product.name} - My Store\`,
    openGraph: {
      title: product.name,
      images: [product.image],
    }
  }
}`}</code></pre>
      
      <blockquote>
        <p>💡 <em>Pro-tip:</em> Use <code>@next/bundle-analyzer</code> to identify optimization opportunities in your bundles.</p>
      </blockquote>
      
      <br />
      
      <h2><strong>Conclusion</strong></h2>
      
      <p>By applying these Next.js optimization techniques - image handling, code splitting, font optimization, smart caching, and SEO - you can dramatically improve your application's performance and user experience.</p>
      
      <p>For deeper dives, check out the <a href="https://nextjs.org/docs">official Next.js documentation</a> for more examples and best practices.</p>
    </article>
  );
}