import React from 'react';
import { cn } from '../../utils/cn';

export function PageHeader({
  title,
  description,
  actions,
  className





}: {title: string;description?: string;actions?: React.ReactNode;className?: string;}) {
  return (
    <div className={cn('flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between', className)}>
      <div className="min-w-0">
        <h2 className="text-[22px] font-semibold tracking-[-0.025em] text-ink sm:text-[26px]">{title}</h2>
        {description && <p className="mt-1.5 max-w-2xl text-[13.5px] leading-6 text-muted">{description}</p>}
      </div>
      {actions && <div className="flex shrink-0 flex-wrap items-center gap-2">{actions}</div>}
    </div>);

}