// components/FlyInSection.tsx
'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function FlyInSection({
  children,
  direction = 'up', // 'up', 'down', 'left', 'right'
  delay = 0.3,
}: {
  children: React.ReactNode;
  direction?: 'up' | 'down' | 'left' | 'right';
  delay?: number;
}) {
  const { ref, inView } = useInView({ triggerOnce: true });

  const variants = {
    hidden: {
      opacity: 0,
      y: direction === 'up' ? 50 : direction === 'down' ? -50 : 0,
      x: direction === 'left' ? 50 : direction === 'right' ? -50 : 0,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut', delay },
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={variants}
    >
      {children}
    </motion.div>
  );
}
