import { SocialLinks } from './components/ui/SocialLinks'
import { SelectedProjects } from './components/ui/SelectedProjects'

export default function HomePage() {
  return (
    <div className="prose prose-neutral dark:prose-invert max-w-none">
      <h1 className="font-semibold">John Smith</h1>

      <br />

      <p className="text-neutral-400">
        This is my portfolio, blog, and personal website.
      </p>

      <p className="text-neutral-400">
        I’m a software engineer based in San Francisco, CA. I love building
        things that live on the internet.
        <br />
        I’m currently working at <a href="https://vercel.com">Vercel</a> on the
        <a
          href="https://nextjs.org"
          className="hover:underline hover:text-blue-500"
        >
          {' '}
          Next.js
        </a>{' '}
        team.
      </p>
      <div className="mt-8">
        <h2 className="font-semibold">Selected Projects</h2>
        {/* This section is dynamically populated with projects */}
        <SelectedProjects />
      </div>
      <div className="mt-8">
        <h2 className="font-semibold">Articles récents</h2>

        <ul className="space-y-3  text-neutral-400">
          <li className="p-4 rounded-md hover:bg-neutral-400/20 hover:text-white">
            <a href="/articles/cli-tricks">
              • 5 Tiny CLI Tricks You (Probably) Didn't Know
            </a>
          </li>
          <li className="p-4 rounded-md hover:bg-neutral-400/20 hover:text-white">
            <a href="/articles/javascript-patterns">
              • 6 Sneaky JavaScript Patterns to Cut Boilerplate
            </a>
          </li>
          <li className="p-4 rounded-md hover:bg-neutral-400/20 hover:text-white">
            <a href="/articles/css-patterns">
              • 6 CSS Patterns to Cut Boilerplate
            </a>
          </li>
          <li className="p-4 rounded-md hover:bg-neutral-400/20 hover:text-white">
            <a href="/articles/nextjs-mdx-showdown">
              • Next.js Blog: MDX vs. Raw React Components
            </a>
          </li>
        </ul>
      </div>

      <div className="mt-8">
        <h2 className="font-semibold">Stack</h2>

        <ul className="p-4 space-y-3 text-neutral-400">
          <li>• Next.js / React</li>
          <li>• Tailwind CSS</li>
          <li>• TypeScript</li>
          <li>• Vercel</li>
        </ul>
      </div>

      <div className="mt-8">
        <h2 className="font-semibold">Code</h2>
        <ul className="space-y-3 p-4 text-neutral-400">
          <li>
            <a
              href="https://github.com/leerob/next-mdx-blog"
              className="group hover:text-blue-500  transition-all duration-200 hover:scale-105"
            >
              • next-mdx-blog
              <span className="group-hover:opacity-100 font-light opacity-0 transition-opacity duration-200 ml-1">
                ↗
              </span>
            </a>
          </li>
          <li>
            <a
              href="https://github.com/stevenmdc/next-portfolio-without-mdx"
              className="group hover:text-blue-500  transition-all duration-200 hover:scale-105"
            >
              • next-portfolio-without-mdx
              <span className="group-hover:opacity-100 font-light opacity-0 transition-opacity duration-200 ml-1">
                ↗
              </span>
            </a>
          </li>
        </ul>
      </div>
      <div className="mt-8">
        <h2 className="font-semibold">Connect</h2>
        <ul className="space-y-3 p-4 text-neutral-400">
          <li>
            feel free to reach out via email at{' '}
            <a
              href="mailto:johnsmith@gmail.com"
              className="hover:underline hover:text-blue-500"
              aria-label="Envoyez-moi un e-mail"
            >
              johnsmith@gmail.com
            </a>
          </li>
          <li>
            <SocialLinks />
          </li>
        </ul>
      </div>
    </div>
  )
}
