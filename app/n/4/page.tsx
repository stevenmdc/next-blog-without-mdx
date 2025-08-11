import React from 'react';
import { highlight } from 'sugar-high';

// Composants MDX réutilisés
const components = {
  h1: (props: React.ComponentPropsWithoutRef<'h1'>) => (
    <h1 className="font-medium pt-12 mb-0" {...props} />
  ),
  h2: (props: React.ComponentPropsWithoutRef<'h2'>) => (
    <h2
      className="text-gray-800 dark:text-zinc-200 font-medium mt-8 mb-3"
      {...props}
    />
  ),
  h3: (props: React.ComponentPropsWithoutRef<'h3'>) => (
    <h3
      className="text-gray-800 dark:text-zinc-200 font-medium mt-8 mb-3"
      {...props}
    />
  ),
  p: (props: React.ComponentPropsWithoutRef<'p'>) => (
    <p className="text-gray-800 dark:text-zinc-300 leading-snug" {...props} />
  ),
  ul: (props: React.ComponentPropsWithoutRef<'ul'>) => (
    <ul
      className="text-gray-800 dark:text-zinc-300 list-disc pl-5 space-y-1"
      {...props}
    />
  ),
  li: (props: React.ComponentPropsWithoutRef<'li'>) => <li className="pl-1" {...props} />,
  strong: (props: React.ComponentPropsWithoutRef<'strong'>) => (
    <strong className="font-medium" {...props} />
  ),
  em: (props: React.ComponentPropsWithoutRef<'em'>) => (
    <em className="font-medium" {...props} />
  ),
  a: ({ href, children, ...props }: React.ComponentPropsWithoutRef<'a'>) => {
    const className =
      'text-blue-500 hover:text-blue-700 dark:text-gray-400 hover:dark:text-gray-300 dark:underline dark:underline-offset-2 dark:decoration-gray-800';
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
        {...props}
      >
        {children}
      </a>
    );
  },
  code: ({ children, ...props }: React.ComponentPropsWithoutRef<'code'>) => {
    const codeHTML = highlight(children as string);
    return (
      <code 
        className="bg-gray-100 dark:bg-zinc-800 px-1 py-0.5 rounded text-sm font-mono"
        dangerouslySetInnerHTML={{ __html: codeHTML }} 
        {...props} 
      />
    );
  },
  blockquote: (props: React.ComponentPropsWithoutRef<'blockquote'>) => (
    <blockquote
      className="ml-[0.075em] border-l-3 border-gray-300 pl-4 text-gray-700 dark:border-zinc-600 dark:text-zinc-300"
      {...props}
    />
  ),
};

// Composant pour les blocs de code
const CodeBlock = ({ children, language }: { children: string; language?: string }) => {
  const codeHTML = highlight(children);
  return (
    <div className="my-6">
      <pre className="bg-gray-50 dark:bg-zinc-900 p-4 rounded-lg overflow-x-auto">
        <code 
          className="text-sm font-mono"
          dangerouslySetInnerHTML={{ __html: codeHTML }}
        />
      </pre>
    </div>
  );
};

const ExampleWithoutMDX = () => {
  return (
    <article className="max-w-4xl mx-auto px-6 py-8">
      <components.h1>
        Optimisation des performances avec Next.js : Guide complet
      </components.h1>

      <components.p>
        Next.js offre de nombreuses fonctionnalités pour optimiser les performances de vos applications React. 
        Dans ce tutoriel, nous explorerons les techniques essentielles pour créer des applications rapides et efficaces.
      </components.p>

      <components.h2>
        1. Optimisation des images avec next/image
      </components.h2>

      <components.p>
        Le composant <components.code>Image</components.code> de Next.js optimise automatiquement vos images 
        en les redimensionnant, les compressant et les servant dans des formats modernes comme WebP.
      </components.p>

      <CodeBlock language="tsx">
{`import Image from 'next/image'

export default function ProductCard() {
  return (
    <div className="card">
      <Image
        src="/product.jpg"
        alt="Description du produit"
        width={300}
        height={200}
        priority // Pour les images above-the-fold
        placeholder="blur"
        blurDataURL="data:image/jpeg;base64,..."
      />
    </div>
  )
}`}
      </CodeBlock>

      <components.h3>Avantages clés :</components.h3>
      <components.ul>
        <components.li>Lazy loading automatique</components.li>
        <components.li>Génération de formats d'images modernes (WebP, AVIF)</components.li>
        <components.li>Redimensionnement responsive automatique</components.li>
        <components.li>Prevention du Cumulative Layout Shift (CLS)</components.li>
      </components.ul>

      <components.h2>
        2. Code splitting avec dynamic imports
      </components.h2>

      <components.p>
        Next.js permet de diviser votre code en plusieurs chunks pour ne charger que ce qui est nécessaire. 
        Utilisez <components.code>dynamic()</components.code> pour importer des composants de manière asynchrone.
      </components.p>

      <CodeBlock language="tsx">
{`import dynamic from 'next/dynamic'
import { Suspense } from 'react'

// Import dynamique avec loading state
const HeavyComponent = dynamic(() => import('../components/HeavyComponent'), {
  loading: () => <p>Chargement...</p>,
  ssr: false // Désactive le SSR pour ce composant
})

// Import conditionnel
const AdminPanel = dynamic(() => import('../components/AdminPanel'), {
  ssr: false
})

export default function Dashboard({ isAdmin }) {
  return (
    <div>
      <h1>Dashboard</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <HeavyComponent />
      </Suspense>
      {isAdmin && <AdminPanel />}
    </div>
  )
}`}
      </CodeBlock>

      <components.h2>
        3. Optimisation des polices avec next/font
      </components.h2>

      <components.p>
        Next.js 13 introduit <components.code>next/font</components.code> qui optimise le chargement des polices 
        et élimine les décalages de mise en page causés par les polices.
      </components.p>

      <CodeBlock language="tsx">
{`// app/layout.tsx
import { Inter, Roboto_Mono } from 'next/font/google'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})

const robotoMono = Roboto_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto-mono',
})

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={\`\${inter.className} \${robotoMono.variable}\`}>
      <body>{children}</body>
    </html>
  )
}`}
      </CodeBlock>

      <components.h2>
        4. Mise en cache et revalidation avec App Router
      </components.h2>

      <components.p>
        L'App Router de Next.js offre un contrôle granulaire sur la mise en cache. 
        Utilisez les options de revalidation pour optimiser les performances de vos données.
      </components.p>

      <CodeBlock language="tsx">
{`// app/products/page.tsx
async function getProducts() {
  const res = await fetch('https://api.example.com/products', {
    next: { 
      revalidate: 3600, // Revalide toutes les heures
      tags: ['products'] // Pour l'invalidation ciblée
    }
  })
  
  if (!res.ok) {
    throw new Error('Failed to fetch products')
  }
  
  return res.json()
}

export default async function ProductsPage() {
  const products = await getProducts()
  
  return (
    <div>
      <h1>Nos Produits</h1>
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  )
}

// Revalidation manuelle
import { revalidateTag } from 'next/cache'

export async function POST() {
  revalidateTag('products')
  return Response.json({ revalidated: true })
}`}
      </CodeBlock>

      <components.h2>
        5. Optimisation des métadonnées pour le SEO
      </components.h2>

      <components.p>
        Next.js 13+ simplifie la gestion des métadonnées avec l'API <components.code>metadata</components.code>.
      </components.p>

      <CodeBlock language="tsx">
{`// app/products/[id]/page.tsx
import type { Metadata } from 'next'

interface Props {
  params: { id: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const product = await getProduct(params.id)
  
  return {
    title: \`\${product.name} - Ma Boutique\`,
    description: product.description,
    openGraph: {
      title: product.name,
      description: product.description,
      images: [product.image],
      type: 'product'
    },
    twitter: {
      card: 'summary_large_image',
      title: product.name,
      description: product.description,
      images: [product.image]
    }
  }
}

export default async function ProductPage({ params }: Props) {
  const product = await getProduct(params.id)
  
  return (
    <div>
      <h1>{product.name}</h1>
      <p>{product.description}</p>
    </div>
  )
}`}
      </CodeBlock>

      <components.blockquote>
        <components.p>
          <components.strong>Astuce Pro :</components.strong> Utilisez les outils de développement de Next.js 
          comme <components.code>@next/bundle-analyzer</components.code> pour analyser la taille de vos bundles 
          et identifier les opportunités d'optimisation.
        </components.p>
      </components.blockquote>

      <components.h2>
        Conclusion
      </components.h2>

      <components.p>
        L'optimisation des performances avec Next.js implique plusieurs aspects : gestion des images, 
        code splitting, optimisation des polices, mise en cache intelligente et SEO. En appliquant ces techniques, 
        vous pouvez considérablement améliorer l'expérience utilisateur et les performances de vos applications.
      </components.p>

      <components.p>
        Pour aller plus loin, consultez la{' '}
        <components.a href="https://nextjs.org/docs">documentation officielle de Next.js</components.a>{' '}
        qui contient de nombreux exemples et bonnes pratiques.
      </components.p>
    </article>
  );
};

export default ExampleWithoutMDX;