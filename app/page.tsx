// This is a Next.js 13+ app directory example
// app/page.tsx

'use client'

import { motion } from 'framer-motion'
import { SocialLinks } from './components/ui/SocialLinks'
import { SelectedProjects } from './components/ui/SelectedProjects'

export default function HomePage() {
  return (
    <div className='prose prose-neutral dark:prose-invert max-w-none'>
      <motion.div
        initial={{ opacity: 0 , y: 25, filter: "blur(10px)" }}
        animate={{ opacity: 1 , y: 0, filter: "blur(0px)" }}
        transition={{ duration: 0.5, delay: 0.2 }}>
        <h1 className='font-semibold'>John Smith</h1>
        <br />
        <p className='text-neutral-400'>
          This is my portfolio, blog, and personal website.
        </p>
        <p className='text-neutral-400'>
          I'm a software engineer based in San Francisco, CA. I love building
          things that live on the internet.
          <br />
          I'm currently working at <a href='https://vercel.com'>Vercel</a> on
          the
          <a
            href='https://nextjs.org'
            className='hover:underline hover:text-blue-500'>
            {' '}
            Next.js
          </a>{' '}
          team.
        </p>
      </motion.div>

      <motion.div
        className='mt-8'
        initial={{ opacity: 0 , y: 25, filter: "blur(10px)"  }}
        animate={{ opacity: 1 , y: 0, filter: "blur(0px)"  }}
        transition={{ duration: 0.5, delay: 0.3 }}>
        <h2 className='font-semibold'>Selected Projects</h2>
        <SelectedProjects />
      </motion.div>

      <motion.div
        className='mt-8'
        initial={{ opacity: 0 , y: 25, filter: "blur(10px)"  }}
        animate={{ opacity: 1 , y: 0, filter: "blur(0px)"  }}
        transition={{ duration: 0.5, delay: 0.4 }}>
        <h2 className='font-semibold'>Articles récents</h2>
        <ul className='space-y-3 mt-2 text-neutral-400'>
          <li className='rounded-md hover:bg-neutral-400/20 hover:text-white'>
            <a href='/articles/cli-tricks' className='block p-4'>
              • 5 Tiny CLI Tricks You (Probably) Didn't Know
            </a>
          </li>
          <li className='rounded-md hover:bg-neutral-400/20 hover:text-white'>
            <a href='/articles/javascript-patterns' className='block p-4'>
              • 6 Sneaky JavaScript Patterns to Cut Boilerplate
            </a>
          </li>
          <li className='rounded-md hover:bg-neutral-400/20 hover:text-white'>
            <a href='/articles/css-patterns' className='block p-4'>
              • 6 CSS Patterns to Cut Boilerplate
            </a>
          </li>
          <li className='rounded-md hover:bg-neutral-400/20 hover:text-white'>
            <a href='/articles/nextjs-mdx-showdown' className='block p-4'>
              • Next.js Blog: MDX vs. Raw React Components
            </a>
          </li>
        </ul>
      </motion.div>

      <motion.div
        className='mt-8'
        initial={{ opacity: 0 , y: 25, filter: "blur(10px)"  }}
        animate={{ opacity: 1 , y: 0, filter: "blur(0px)"  }}
        transition={{ duration: 0.5, delay: 0.5 }}>
        <h2 className='font-semibold'>Stack</h2>
        <ul className='p-4 space-y-3 text-neutral-400'>
          <li>• Next.js / React</li>
          <li>• Tailwind CSS</li>
          <li>• TypeScript</li>
          <li>• Vercel</li>
        </ul>
      </motion.div>

      <motion.div
        className='mt-8'
        initial={{ opacity: 0 , y: 25, filter: "blur(10px)"  }}
        animate={{ opacity: 1 , y: 0, filter: "blur(0px)"  }}
        transition={{ duration: 0.5, delay: 0.6 }}>
        <h2 className='font-semibold'>Code</h2>
        <ul className='space-y-3 p-4 text-neutral-400'>
          <li>
            <a
              href='https://github.com/leerob/next-mdx-blog'
              className='group hover:text-blue-500  transition-all duration-200 hover:scale-105'>
              • next-mdx-blog
              <span className='group-hover:opacity-100 font-light opacity-0 transition-opacity duration-200 ml-1'>
                ↗
              </span>
            </a>
          </li>
          <li>
            <a
              href='https://github.com/stevenmdc/next-noir-portfolio'
              className='group hover:text-blue-500  transition-all duration-200 hover:scale-105'>
              • next-noir-portfolio
              <span className='group-hover:opacity-100 font-light opacity-0 transition-opacity duration-200 ml-1'>
                ↗
              </span>
            </a>
          </li>
        </ul>
      </motion.div>

      <motion.div
        className='mt-8'
        initial={{ opacity: 0 , y: 25, filter: "blur(10px)"  }}
        animate={{ opacity: 1 , y: 0, filter: "blur(0px)"  }}
        transition={{ duration: 0.5, delay: 0.7 }}>
        <h2 className='font-semibold'>Connect</h2>
        <ul className='space-y-3 p-4 text-neutral-400'>
          <li>
            feel free to reach out via email at{' '}
            <a
              href='mailto:youremail@gmail.com'
              className='hover:underline hover:text-blue-500'
              aria-label='Envoyez-moi un e-mail'>
              youremail@gmail.com
            </a>
          </li>
          <li>
            <SocialLinks />
          </li>
        </ul>
      </motion.div>
    </div>
  )
}
