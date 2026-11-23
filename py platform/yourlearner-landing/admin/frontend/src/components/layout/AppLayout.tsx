import React, { useEffect, useState } from 'react';
import { useLocation, useOutlet } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { PlusIcon } from 'lucide-react';
import { Sidebar } from './Sidebar';
import { Topbar } from './Topbar';
import { CommandPalette } from './CommandPalette';
import { QuickAddModal } from '../dashboard/QuickAddModal';

export function AppLayout() {
  const [collapsed, setCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [paletteOpen, setPaletteOpen] = useState(false);
  const [quickAdd, setQuickAdd] = useState(false);
  const { pathname } = useLocation();
  const element = useOutlet();

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setPaletteOpen((o) => !o);
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    window.scrollTo({ top: 0 });
  }, [pathname]);

  return (
    <div className="flex min-h-screen w-full bg-canvas">
      <Sidebar
        collapsed={collapsed}
        onToggle={() => setCollapsed((c) => !c)}
        mobileOpen={mobileOpen}
        onCloseMobile={() => setMobileOpen(false)} />
      

      <div className="flex min-w-0 flex-1 flex-col">
        <Topbar
          onOpenPalette={() => setPaletteOpen(true)}
          onOpenMobileNav={() => setMobileOpen(true)}
          onQuickAdd={() => setQuickAdd(true)} />
        

        <main className="mx-auto w-full max-w-[1440px] flex-1 px-4 py-6 sm:px-6 sm:py-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={pathname}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}>
              
              {element ? React.cloneElement(element as React.ReactElement, { key: pathname }) : null}
            </motion.div>
          </AnimatePresence>
        </main>
      </div>

      <button
        onClick={() => setQuickAdd(true)}
        aria-label="Quick add"
        className="fixed bottom-5 right-5 z-30 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-ink text-surface shadow-lift transition-transform duration-200 hover:scale-105 active:scale-95 sm:hidden">
        
        <PlusIcon className="h-5 w-5" />
      </button>

      <CommandPalette open={paletteOpen} onClose={() => setPaletteOpen(false)} />
      <QuickAddModal open={quickAdd} onClose={() => setQuickAdd(false)} />
    </div>);

}