import React, { useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { XIcon } from 'lucide-react';
import { cn } from '../../utils/cn';

function useEscape(open: boolean, onClose: () => void) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, onClose]);
}

interface OverlayProps {
  open: boolean;
  onClose: () => void;
  title: string;
  description?: string;
  children: React.ReactNode;
  footer?: React.ReactNode;
  className?: string;
}

export function Modal({ open, onClose, title, description, children, footer, className }: OverlayProps) {
  useEscape(open, onClose);
  return (
    <AnimatePresence>
      {open &&
      <div className="fixed inset-0 z-50 flex items-end justify-center p-4 sm:items-center">
          <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.18 }}
          onClick={onClose}
          className="absolute inset-0 bg-ink/25 backdrop-blur-[2px]" />
        
          <motion.div
          role="dialog"
          aria-modal="true"
          aria-label={title}
          initial={{ opacity: 0, y: 16, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 8, scale: 0.98 }}
          transition={{ type: 'spring', stiffness: 420, damping: 34 }}
          className={cn(
            'relative w-full max-w-lg overflow-hidden rounded-3xl border border-line bg-surface shadow-lift',
            className
          )}>
          
            <div className="flex items-start justify-between gap-4 px-6 pt-6">
              <div>
                <h2 className="text-[15px] font-semibold tracking-[-0.01em] text-ink">{title}</h2>
                {description && <p className="mt-1 text-[13px] leading-5 text-muted">{description}</p>}
              </div>
              <button
              onClick={onClose}
              aria-label="Close dialog"
              className="rounded-[10px] p-1.5 text-muted transition-colors duration-200 hover:bg-canvas hover:text-ink">
              
                <XIcon className="h-4 w-4" />
              </button>
            </div>
            <div className="px-6 py-5">{children}</div>
            {footer && <div className="flex justify-end gap-2 border-t border-line px-6 py-4">{footer}</div>}
          </motion.div>
        </div>
      }
    </AnimatePresence>);

}

export function Drawer({ open, onClose, title, description, children, footer }: OverlayProps) {
  useEscape(open, onClose);
  return (
    <AnimatePresence>
      {open &&
      <div className="fixed inset-0 z-50">
          <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.18 }}
          onClick={onClose}
          className="absolute inset-0 bg-ink/25 backdrop-blur-[2px]" />
        
          <motion.aside
          role="dialog"
          aria-modal="true"
          aria-label={title}
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          exit={{ x: '100%' }}
          transition={{ type: 'spring', stiffness: 380, damping: 38 }}
          className="absolute right-0 top-0 flex h-full w-full max-w-md flex-col border-l border-line bg-surface shadow-lift sm:right-3 sm:top-3 sm:h-[calc(100%-1.5rem)] sm:rounded-3xl sm:border">
          
            <div className="flex items-start justify-between gap-4 border-b border-line px-6 py-5">
              <div>
                <h2 className="text-[15px] font-semibold tracking-[-0.01em] text-ink">{title}</h2>
                {description && <p className="mt-1 text-[13px] leading-5 text-muted">{description}</p>}
              </div>
              <button
              onClick={onClose}
              aria-label="Close panel"
              className="rounded-[10px] p-1.5 text-muted transition-colors duration-200 hover:bg-canvas hover:text-ink">
              
                <XIcon className="h-4 w-4" />
              </button>
            </div>
            <div className="scrollbar-thin flex-1 overflow-y-auto px-6 py-5">{children}</div>
            {footer && <div className="flex justify-end gap-2 border-t border-line px-6 py-4">{footer}</div>}
          </motion.aside>
        </div>
      }
    </AnimatePresence>);

}