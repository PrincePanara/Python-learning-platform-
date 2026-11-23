import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { cn } from '../../utils/cn';

export function Tooltip({
  label,
  children,
  side = 'top',
  className





}: {label: string;children: React.ReactNode;side?: 'top' | 'right';className?: string;}) {
  const [open, setOpen] = useState(false);
  return (
    <span
      className={cn('relative inline-flex', className)}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      onFocus={() => setOpen(true)}
      onBlur={() => setOpen(false)}>
      
      {children}
      <AnimatePresence>
        {open &&
        <motion.span
          role="tooltip"
          initial={{ opacity: 0, scale: 0.96, y: side === 'top' ? 4 : 0, x: side === 'right' ? -4 : 0 }}
          animate={{ opacity: 1, scale: 1, y: 0, x: 0 }}
          exit={{ opacity: 0, scale: 0.96 }}
          transition={{ duration: 0.14 }}
          className={cn(
            'pointer-events-none absolute z-50 whitespace-nowrap rounded-lg bg-ink px-2 py-1 text-2xs font-medium text-surface shadow-lift',
            side === 'top' && 'bottom-full left-1/2 mb-2 -translate-x-1/2',
            side === 'right' && 'left-full top-1/2 ml-2 -translate-y-1/2'
          )}>
          
            {label}
          </motion.span>
        }
      </AnimatePresence>
    </span>);

}