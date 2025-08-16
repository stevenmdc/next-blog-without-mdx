'use client';
import React from 'react';
import { motion } from 'framer-motion';

const AboutPage = () => (
  <div className='space-y-8'>
    <motion.h1 
      className='text-3xl font-bold text-neutral-400 dark:text-white mb-4'
      initial={{ opacity: 0 , y: 25, filter: "blur(10px)"  }}
      animate={{ opacity: 1 , y: 0, filter: "blur(0px)"  }}
      transition={{ duration: 0.5 }}
    >
      About Me
    </motion.h1>
    <motion.p 
      className='text-base text-neutral-400 dark:text-neutral-400 mb-6'
      initial={{ opacity: 0 , y: 25, filter: "blur(10px)"  }}
      animate={{ opacity: 1 , y: 0, filter: "blur(0px)"  }}
      transition={{ duration: 0.5, delay: 0.1 }}
    >
      Welcome to my next-blog-portfolio! 
    </motion.p>
    <motion.p 
      className='text-base text-neutral-400 dark:text-neutral-400 mb-6'
      initial={{ opacity: 0 , y: 25, filter: "blur(10px)"  }}
      animate={{ opacity: 1 , y: 0, filter: "blur(0px)"  }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      I'm a perpetually
      broke but wildly passionate developer, scraping by on instant noodles and
      dreams of clean code.  
    </motion.p>
    <motion.p 
      className='text-base text-neutral-400 dark:text-neutral-400 mb-6'
      initial={{ opacity: 0 , y: 25, filter: "blur(10px)"  }}
      animate={{ opacity: 1 , y: 0, filter: "blur(0px)"  }}
      transition={{ duration: 0.5, delay: 0.3 }}
    >
      I sling modern web apps with Next.js, React, and
      TypeScript like a caffeine-fueled wizard, turning bugs into features and
      deadlines into adrenaline rushes. 
    </motion.p>
    <motion.p 
      className='text-base text-neutral-400 dark:text-neutral-400 mb-6'
      initial={{ opacity: 0 , y: 25, filter: "blur(10px)"  }}
      animate={{ opacity: 1 , y: 0, filter: "blur(0px)"  }}
      transition={{ duration: 0.5, delay: 0.4 }}
    >
      Join me in this broke-dev saga where
      passion != paycheck, and every line of code is a step closer to my next
      ramen bowl.
    </motion.p>
  </div>
)

export default AboutPage
