// app/articles/layout.tsx
'use client';
import { motion } from 'framer-motion';


export default function ArticlesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
      <div className='articles-section'>
        <motion.div 
          className='mb-8'
          initial={{ opacity: 0 , y: 25, filter: "blur(10px)"  }}
          animate={{ opacity: 1 , y: 0, filter: "blur(0px)"  }}
          transition={{ duration: 0.5 }}
        >
          <h1 className='text-3xl font-bold text-neutral-400 dark:text-white mb-4'>
            Articles
          </h1>
        </motion.div>
        <motion.hr 
          className='border-gray-200 dark:border-gray-700 mb-8'
          initial={{ opacity: 0 , y: 25, filter: "blur(10px)"  }}
          animate={{ opacity: 1 , y: 0, filter: "blur(0px)"  }}
          transition={{ duration: 0.5, delay: 0.1 }}
        />
        <motion.div
          initial={{ opacity: 0 , y: 25, filter: "blur(10px)"  }}
          animate={{ opacity: 1 , y: 0, filter: "blur(0px)"  }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {children}
        </motion.div>
      </div>
  )
}
