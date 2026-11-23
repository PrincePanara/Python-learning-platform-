import React from 'react';
import { InboxIcon, TriangleAlertIcon, CircleCheckIcon } from 'lucide-react';
import { cn } from '../../utils/cn';

export function EmptyState({
  title,
  description,
  action,
  className





}: {title: string;description: string;action?: React.ReactNode;className?: string;}) {
  return (
    <div className={cn('flex flex-col items-center justify-center px-6 py-16 text-center', className)}>
      <span className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-line bg-canvas">
        <InboxIcon className="h-5 w-5 text-faint" />
      </span>
      <p className="text-[14px] font-semibold text-ink">{title}</p>
      <p className="mt-1 max-w-sm text-[13px] leading-5 text-muted">{description}</p>
      {action && <div className="mt-5">{action}</div>}
    </div>);

}

export function ErrorState({ title, description }: {title: string;description: string;}) {
  return (
    <div className="flex items-start gap-3 rounded-2xl border border-line bg-surface p-4">
      <TriangleAlertIcon className="mt-0.5 h-4 w-4 shrink-0 text-amber-500" />
      <div>
        <p className="text-[13.5px] font-medium text-ink">{title}</p>
        <p className="mt-0.5 text-[12.5px] leading-5 text-muted">{description}</p>
      </div>
    </div>);

}

export function SuccessState({ title, description }: {title: string;description: string;}) {
  return (
    <div className="flex items-start gap-3 rounded-2xl border border-line bg-surface p-4">
      <CircleCheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500" />
      <div>
        <p className="text-[13.5px] font-medium text-ink">{title}</p>
        <p className="mt-0.5 text-[12.5px] leading-5 text-muted">{description}</p>
      </div>
    </div>);

}

export function Skeleton({ className }: {className?: string;}) {
  return <div className={cn('animate-pulse rounded-lg bg-canvas', className)} />;
}

export function SkeletonRows({ rows = 5 }: {rows?: number;}) {
  return (
    <div className="space-y-3 p-5">
      {Array.from({ length: rows }).map((_, i) =>
      <div key={i} className="flex items-center gap-4">
          <Skeleton className="h-9 w-9 rounded-[10px]" />
          <Skeleton className="h-3 flex-1" />
          <Skeleton className="h-3 w-20" />
          <Skeleton className="h-3 w-12" />
        </div>
      )}
    </div>);

}