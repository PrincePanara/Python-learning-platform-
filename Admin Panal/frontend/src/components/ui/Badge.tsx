import React from 'react';
import { cn } from '../../utils/cn';
import type { StatusTone } from '../../types';

const dot: Record<StatusTone, string> = {
  live: 'bg-emerald-500',
  draft: 'bg-faint',
  archived: 'bg-transparent border border-faint',
  review: 'bg-amber-500',
  neutral: 'bg-ink'
};

const label: Record<StatusTone, string> = {
  live: 'Published',
  draft: 'Draft',
  archived: 'Archived',
  review: 'In review',
  neutral: 'Active'
};

export function StatusBadge({ status, className }: {status: StatusTone;className?: string;}) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 rounded-full border border-line bg-surface px-2.5 py-1 text-2xs font-medium text-muted',
        className
      )}>
      
      <span className={cn('h-1.5 w-1.5 rounded-full', dot[status])} />
      {label[status]}
    </span>);

}

export function Badge({
  children,
  className,
  tone = 'neutral'




}: {children: React.ReactNode;className?: string;tone?: 'neutral' | 'solid' | 'accent';}) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-2xs font-medium',
        tone === 'neutral' && 'border border-line bg-canvas text-muted',
        tone === 'solid' && 'bg-ink text-surface',
        tone === 'accent' && 'bg-accent/10 text-accent',
        className
      )}>
      
      {children}
    </span>);

}

export function Delta({ value, className }: {value: number;className?: string;}) {
  const flat = value === 0;
  return (
    <span
      className={cn(
        'inline-flex items-center gap-0.5 text-[12px] font-medium tabular-nums',
        flat ? 'text-faint' : value > 0 ? 'text-emerald-600' : 'text-red-600',
        className
      )}>
      
      {flat ? '—' : `${value > 0 ? '+' : ''}${value.toFixed(1)}%`}
    </span>);

}