import React from 'react';
import { ChevronLeftIcon, ChevronRightIcon, ChevronsUpDownIcon } from 'lucide-react';
import { cn } from '../../utils/cn';
import { Button } from './Button';

export function TableShell({ children, className }: {children: React.ReactNode;className?: string;}) {
  return (
    <div className={cn('scrollbar-thin w-full overflow-x-auto', className)}>
      <table className="w-full min-w-[840px] border-collapse text-left">{children}</table>
    </div>);

}

export function Th({
  children,
  sortable,
  onSort,
  className,
  align = 'left'






}: {children: React.ReactNode;sortable?: boolean;onSort?: () => void;className?: string;align?: 'left' | 'right' | 'center';}) {
  return (
      <th
        scope="col"
        className={cn(
          'whitespace-nowrap border-b border-line bg-surface px-4 py-3.5 text-2xs font-semibold uppercase tracking-wider text-muted',
          align === 'right' && 'text-right',
          align === 'center' && 'text-center',
          className
        )}>
      
      {sortable ?
      <button
        onClick={onSort}
        className="inline-flex items-center gap-1 transition-colors duration-200 hover:text-ink">
        
          {children}
          <ChevronsUpDownIcon className="h-3 w-3" />
        </button> :

      children
      }
    </th>);

}

interface TdProps extends React.TdHTMLAttributes<HTMLTableCellElement> {
  children?: React.ReactNode;
  className?: string;
  align?: 'left' | 'right' | 'center';
}

export function Td({
  children,
  className,
  align = 'left',
  ...props
}: TdProps) {
  return (
      <td
        {...props}
        className={cn(
          'border-b border-line px-4 py-4 align-middle text-[13.5px] text-ink',
          align === 'right' && 'text-right tabular-nums',
          align === 'center' && 'text-center',
          className
        )}>
      
      {children}
    </td>);

}

export function Tr({
  children,
  className,
  onClick




}: {children: React.ReactNode;className?: string;onClick?: () => void;}) {
  return (
    <tr
      onClick={onClick}
      className={cn(
        'group transition-colors duration-200 hover:bg-canvas/70',
        onClick && 'cursor-pointer',
        className
      )}>
      
      {children}
    </tr>);

}

export function Pagination({
  page,
  pageCount,
  total,
  onPage





}: {page: number;pageCount: number;total: number;onPage: (p: number) => void;}) {
  return (
    <div className="flex flex-col gap-3 px-5 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6">
      <p className="text-[12.5px] text-muted">
        Page <span className="font-medium text-ink">{page}</span> of {pageCount} · {total} results
      </p>
      <div className="flex items-center gap-2">
        <Button size="sm" onClick={() => onPage(Math.max(1, page - 1))} disabled={page === 1}>
          <ChevronLeftIcon className="h-3.5 w-3.5" />
          Previous
        </Button>
        <Button size="sm" onClick={() => onPage(Math.min(pageCount, page + 1))} disabled={page === pageCount}>
          Next
          <ChevronRightIcon className="h-3.5 w-3.5" />
        </Button>
      </div>
    </div>);

}

export function Thumb({ label, className }: {label: string;className?: string;}) {
  return (
    <span
      aria-hidden
      className={cn(
        'inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-[10px] border border-line bg-canvas text-[11px] font-semibold tracking-tight text-ink',
        className
      )}>
      
      {label}
    </span>);

}