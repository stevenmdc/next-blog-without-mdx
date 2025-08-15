import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Master the art of animations in React with Framer Motion',
  alternates: {
    canonical: '/articles/FramerMotionGuidePage',
  },
};

export default function FramerMotionGuidePage() {
  return (
    <>
      <article className="prose prose-neutral dark:prose-invert max-w-none">
        <h1 className='text-xl font-semibold text-neutral-400 dark:text-white'>Framer Motion Guide</h1>
        
        <p className='text-neutral-400'>Master the art of animations in React with Framer Motion.</p>
        <br />

      <hr />

      <br />

        
        <h2><strong>Getting Started</strong></h2>
        
        <p>Install Framer Motion:</p>
        
        <pre><code className="language-bash">npm install framer-motion</code></pre>
        
        <p>Basic import and usage:</p>
        
        <pre><code className="language-js">{`import { motion } from 'framer-motion';

function App() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      Hello Framer Motion!
    </motion.div>
  );
}`}</code></pre>
        
        <h2><strong>AnimatePresence</strong></h2>
        
        <p>Use <code>AnimatePresence</code> for exit animations and conditional rendering:</p>
        
        <pre><code className="language-js">{`import { AnimatePresence, motion } from 'framer-motion';

function App() {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          I can fade in and out!
        </motion.div>
      )}
    </AnimatePresence>
  );
}`}</code></pre>
        
        <h2><strong>Basic Animations</strong></h2>
        
        <p>The three main props for animations are <code>initial</code>, <code>animate</code>, and <code>exit</code>:</p>
        
        <pre><code className="language-js">{`import { motion } from 'framer-motion';

function Box() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.5 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      I fade and scale in!
    </motion.div>
  );
}`}</code></pre>
        
        <h2><strong>Variants</strong></h2>
        
        <p>Define reusable animations with variants for cleaner code:</p>
        
        <pre><code className="language-js">{`const boxVariants = {
  hidden: { 
    opacity: 0, 
    scale: 0.5,
    y: 50
  },
  visible: { 
    opacity: 1, 
    scale: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  },
  exit: {
    opacity: 0,
    scale: 0.5,
    transition: {
      duration: 0.3
    }
  }
};

function AnimatedBox() {
  return (
    <motion.div
      variants={boxVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      Using variants for cleaner code!
    </motion.div>
  );
}`}</code></pre>

        <h2><strong>Stagger Animations</strong></h2>
        
        <p>Create beautiful cascade effects with staggered animations:</p>
        
        <pre><code className="language-js">{`const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

function StaggeredList() {
  const items = ['Item 1', 'Item 2', 'Item 3', 'Item 4'];
  
  return (
    <motion.ul
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {items.map((item, index) => (
        <motion.li
          key={index}
          variants={itemVariants}
        >
          {item}
        </motion.li>
      ))}
    </motion.ul>
  );
}`}</code></pre>

        <h2><strong>Hover and Tap Animations</strong></h2>
        
        <p>Add interactive animations with <code>whileHover</code> and <code>whileTap</code>:</p>
        
        <pre><code className="language-js">{`function InteractiveButton() {
  return (
    <motion.button
      whileHover={{ 
        scale: 1.05,
        boxShadow: "0 10px 25px rgba(0,0,0,0.15)"
      }}
      whileTap={{ scale: 0.95 }}
      transition={{ 
        type: "spring", 
        stiffness: 400, 
        damping: 10 
      }}
      className="px-6 py-3 bg-blue-500 text-white rounded-lg"
    >
      Click me!
    </motion.button>
  );
}`}</code></pre>

        <h2><strong>Advanced Animations</strong></h2>
        
        <p>Spring animations for more natural movement:</p>
        
        <pre><code className="language-js">{`const springConfig = {
  type: "spring",
  stiffness: 300,
  damping: 30
};

function SpringBox() {
  return (
    <motion.div
      initial={{ x: -100 }}
      animate={{ x: 0 }}
      transition={springConfig}
    >
      Natural spring movement!
    </motion.div>
  );
}`}</code></pre>

        <h2><strong>Keyframe Animations</strong></h2>
        
        <p>Create complex animations with arrays (keyframes):</p>
        
        <pre><code className="language-js">{`function PulsingCircle() {
  return (
    <motion.div
      animate={{
        scale: [1, 1.2, 1],
        backgroundColor: ["#ff0000", "#00ff00", "#0000ff", "#ff0000"]
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }}
      className="w-20 h-20 rounded-full"
    />
  );
}`}</code></pre>

        <h2><strong>Layout Animations</strong></h2>
        
        <p>Smooth layout changes with the <code>layout</code> prop:</p>
        
        <pre><code className="language-js">{`function LayoutExample() {
  const [isExpanded, setIsExpanded] = useState(false);
  
  return (
    <motion.div
      layout
      onClick={() => setIsExpanded(!isExpanded)}
      className={\`cursor-pointer bg-blue-500 text-white p-4 rounded-lg \${isExpanded ? 'w-80 h-40' : 'w-40 h-20'}\`}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >
      Click to expand!
    </motion.div>
  );
}`}</code></pre>

        <h2><strong>Scroll-Triggered Animations</strong></h2>
        
        <p>Use <code>useInView</code> hook for scroll-based animations:</p>
        
        <pre><code className="language-js">{`import { useInView } from 'framer-motion';
import { useRef } from 'react';

function ScrollTriggered() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      I animate when scrolled into view!
    </motion.div>
  );
}`}</code></pre>

        <h2><strong>Best Practices</strong></h2>
        
        <ul>
          <li><strong>Performance:</strong> Use <code>transform</code> properties (x, y, scale, rotate) for better performance</li>
          <li><strong>Accessibility:</strong> Respect <code>prefers-reduced-motion</code> media query</li>
          <li><strong>Variants:</strong> Use variants for complex animations and better organization</li>
          <li><strong>Springs:</strong> Prefer spring animations over duration-based for more natural feel</li>
        </ul>

        <pre><code className="language-js">{`// Respect user preferences
const shouldReduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const variants = {
  hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: shouldReduceMotion ? 0 : 0.6
    }
  }
};`}</code></pre>

        <h2><strong>Common Patterns</strong></h2>
        
        <p>Here are some popular animation patterns you can use:</p>
        
        <pre><code className="language-js">{`// Fade in up
const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" }
};

// Scale in
const scaleIn = {
  initial: { scale: 0, opacity: 0 },
  animate: { scale: 1, opacity: 1 },
  transition: { duration: 0.5, ease: "backOut" }
};

// Slide in from left
const slideInLeft = {
  initial: { x: -100, opacity: 0 },
  animate: { x: 0, opacity: 1 },
  transition: { duration: 0.6, ease: "easeOut" }
};`}</code></pre>

        <p>
          Framer Motion provides a powerful and intuitive API for creating smooth, 
          performant animations in React. Start with simple animations and gradually 
          explore more advanced features as you become comfortable with the library.
        </p>
      </article>
    </>
  );
}