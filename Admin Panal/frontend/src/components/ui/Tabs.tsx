import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../utils/cn';

interface TabsProps {
  tabs: string[];
  active: string;
  onChange: (tab: string) => void;
  className?: string;
  layoutId?: string;
}

export function Tabs({ tabs, active, onChange, className, layoutId = 'tab-indicator' }: TabsProps) {
  return (
    <div
      role="tablist"
      aria-label="Section tabs"
      className={cn('scrollbar-thin -mb-px flex gap-1 overflow-x-auto border-b border-line', className)}>
      
      {tabs.map((tab) => {
        const isActive = tab === active;
        return (
          <button
            key={tab}
            role="tab"
            aria-selected={isActive}
            onClick={() => onChange(tab)}
            className={cn(
              'relative shrink-0 px-3 py-2.5 text-[13.5px] font-medium transition-colors duration-200',
              isActive ? 'text-ink' : 'text-muted hover:text-ink'
            )}>
            
            {tab}
            {isActive &&
            <motion.span
              layoutId={layoutId}
              transition={{ type: 'spring', stiffness: 480, damping: 38 }}
              className="absolute inset-x-2 -bottom-px h-[2px] rounded-full bg-ink" />

            }
          </button>);

      })}
    </div>);

}

export function SegmentedControl({
  options,
  value,
  onChange,
  layoutId = 'segment'





}: {options: string[];value: string;onChange: (v: string) => void;layoutId?: string;}) {
  return (
    <div className="inline-flex items-center gap-0.5 rounded-full border border-line bg-canvas p-0.5">
      {options.map((o) => {
        const isActive = o === value;
        return (
          <button
            key={o}
            onClick={() => onChange(o)}
            aria-pressed={isActive}
            className={cn(
              'relative rounded-full px-3 py-1.5 text-[12.5px] font-medium transition-colors duration-200',
              isActive ? 'text-ink' : 'text-muted hover:text-ink'
            )}>
            
            {isActive &&
            <motion.span
              layoutId={layoutId}
              transition={{ type: 'spring', stiffness: 480, damping: 38 }}
              className="absolute inset-0 rounded-full bg-surface shadow-soft" />

            }
            <span className="relative">{o}</span>
          </button>);

      })}
    </div>);

}