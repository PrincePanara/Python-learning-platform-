import React, { useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import {
  SearchIcon,
  LayoutDashboardIcon,
  LayersIcon,
  GraduationCapIcon,
  BarChart3Icon,
  SettingsIcon,
  PlusIcon,
  SparklesIcon,
  CornerDownLeftIcon } from
'lucide-react';
import { cn } from '../../utils/cn';

interface Command {
  id: string;
  label: string;
  group: string;
  icon: typeof LayersIcon;
  to?: string;
}

const commands: Command[] = [
{ id: 'dash', label: 'Go to Dashboard', group: 'Navigate', icon: LayoutDashboardIcon, to: '/' },
{ id: 'mod', label: 'Go to Modules', group: 'Navigate', icon: LayersIcon, to: '/modules' },
{ id: 'crs', label: 'Go to Courses', group: 'Navigate', icon: GraduationCapIcon, to: '/courses' },
{ id: 'ana', label: 'Go to Analytics', group: 'Navigate', icon: BarChart3Icon, to: '/analytics' },
{ id: 'set', label: 'Go to Settings', group: 'Navigate', icon: SettingsIcon, to: '/settings' },
{ id: 'new-course', label: 'Create course', group: 'Actions', icon: PlusIcon, to: '/courses' },
{ id: 'new-module', label: 'Create module', group: 'Actions', icon: PlusIcon, to: '/modules' },
{ id: 'ai-gen', label: 'Generate content with AI', group: 'Actions', icon: SparklesIcon },
{ id: 'ai-ask', label: 'Ask AI about platform health', group: 'AI', icon: SparklesIcon }];


export function CommandPalette({ open, onClose }: {open: boolean;onClose: () => void;}) {
  const [query, setQuery] = useState('');
  const [index, setIndex] = useState(0);
  const navigate = useNavigate();

  const results = useMemo(
    () => commands.filter((c) => c.label.toLowerCase().includes(query.toLowerCase())),
    [query]
  );

  useEffect(() => {
    if (open) {
      setQuery('');
      setIndex(0);
    }
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        setIndex((i) => Math.min(results.length - 1, i + 1));
      }
      if (e.key === 'ArrowUp') {
        e.preventDefault();
        setIndex((i) => Math.max(0, i - 1));
      }
      if (e.key === 'Enter') {
        const item = results[index];
        if (item?.to) navigate(item.to);
        onClose();
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, results, index, navigate, onClose]);

  const groups = Array.from(new Set(results.map((r) => r.group)));

  return (
    <AnimatePresence>
      {open &&
      <div className="fixed inset-0 z-[60] flex items-start justify-center p-4 pt-[12vh]">
          <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.16 }}
          onClick={onClose}
          className="absolute inset-0 bg-ink/25 backdrop-blur-[2px]" />
        
          <motion.div
          role="dialog"
          aria-modal="true"
          aria-label="Command palette"
          initial={{ opacity: 0, y: -8, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -8, scale: 0.98 }}
          transition={{ type: 'spring', stiffness: 440, damping: 34 }}
          className="relative w-full max-w-xl overflow-hidden rounded-3xl border border-line bg-surface shadow-lift">
          
            <div className="flex items-center gap-3 border-b border-line px-4">
              <SearchIcon className="h-4 w-4 text-faint" />
              <input
              autoFocus
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
                setIndex(0);
              }}
              placeholder="Search commands, pages and content…"
              aria-label="Search commands"
              className="h-14 w-full bg-transparent text-[14px] text-ink placeholder:text-faint focus:outline-none" />
            
              <kbd className="rounded-md border border-line px-1.5 py-0.5 text-2xs text-faint">ESC</kbd>
            </div>

            <div className="scrollbar-thin max-h-80 overflow-y-auto p-2">
              {results.length === 0 &&
            <p className="px-3 py-8 text-center text-[13px] text-muted">No matching commands.</p>
            }
              {groups.map((group) =>
            <div key={group} className="mb-1">
                  <p className="px-3 py-1.5 text-2xs font-semibold uppercase tracking-[0.08em] text-faint">
                    {group}
                  </p>
                  {results.
              filter((r) => r.group === group).
              map((item) => {
                const active = results[index]?.id === item.id;
                return (
                  <button
                    key={item.id}
                    onMouseEnter={() => setIndex(results.findIndex((r) => r.id === item.id))}
                    onClick={() => {
                      if (item.to) navigate(item.to);
                      onClose();
                    }}
                    className={cn(
                      'flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left text-[13.5px] transition-colors duration-150',
                      active ? 'bg-canvas text-ink' : 'text-muted hover:bg-canvas/60'
                    )}>
                    
                          <item.icon className="h-4 w-4 shrink-0" />
                          <span className="flex-1 truncate">{item.label}</span>
                          {active && <CornerDownLeftIcon className="h-3.5 w-3.5 text-faint" />}
                        </button>);

              })}
                </div>
            )}
            </div>
          </motion.div>
        </div>
      }
    </AnimatePresence>);

}