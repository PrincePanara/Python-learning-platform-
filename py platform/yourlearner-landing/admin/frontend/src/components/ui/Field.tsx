import React from 'react';
import { SearchIcon, ChevronDownIcon } from 'lucide-react';
import { cn } from '../../utils/cn';

export function SearchInput({
  value,
  onChange,
  placeholder = 'Search…',
  className





}: {value: string;onChange: (v: string) => void;placeholder?: string;className?: string;}) {
  return (
    <div className={cn('relative', className)}>
      <SearchIcon className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-faint" />
      <input
        type="search"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        aria-label={placeholder}
        className="h-10 w-full rounded-full border border-line bg-surface pl-10 pr-4 text-[13.5px] text-ink placeholder:text-faint transition-colors duration-200 hover:border-faint/60 focus:border-ink focus:outline-none" />
      
    </div>);

}

export function Select({
  value,
  onChange,
  options,
  label,
  className






}: {value: string;onChange: (v: string) => void;options: string[];label: string;className?: string;}) {
  return (
    <div className={cn('relative', className)}>
      <select
        aria-label={label}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="h-10 w-full appearance-none rounded-full border border-line bg-surface pl-4 pr-10 text-[13.5px] font-medium text-ink transition-colors duration-200 hover:border-faint/60 focus:border-ink focus:outline-none">
        
        {options.map((o) =>
        <option key={o} value={o}>
            {o}
          </option>
        )}
      </select>
      <ChevronDownIcon className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-faint" />
    </div>);

}

export function TextField({
  label,
  value,
  onChange,
  placeholder,
  hint,
  type = 'text',
  className








}: {label: string;value: string;onChange: (v: string) => void;placeholder?: string;hint?: string;type?: string;className?: string;}) {
  const id = label.toLowerCase().replace(/\s+/g, '-');
  return (
    <div className={cn('space-y-1.5', className)}>
      <label htmlFor={id} className="block text-[13px] font-medium text-ink">
        {label}
      </label>
      <input
        id={id}
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        className="h-10 w-full rounded-full border border-line bg-surface px-4 text-[13.5px] text-ink placeholder:text-faint transition-colors duration-200 hover:border-faint/60 focus:border-ink focus:outline-none" />
      
      {hint && <p className="text-[12px] text-muted">{hint}</p>}
    </div>);

}

export function Toggle({
  checked,
  onChange,
  label,
  description





}: {checked: boolean;onChange: (v: boolean) => void;label: string;description?: string;}) {
  return (
    <div className="flex items-start justify-between gap-6 py-3.5">
      <div className="min-w-0">
        <p className="text-[13.5px] font-medium text-ink">{label}</p>
        {description && <p className="mt-0.5 text-[12.5px] leading-5 text-muted">{description}</p>}
      </div>
      <button
        type="button"
        role="switch"
        aria-checked={checked}
        aria-label={label}
        onClick={() => onChange(!checked)}
        className={cn(
          'relative mt-0.5 h-[22px] w-[38px] shrink-0 rounded-full border transition-colors duration-300',
          checked ? 'border-ink bg-ink' : 'border-line bg-canvas'
        )}>
        
        <span
          className={cn(
            'absolute top-1/2 h-[16px] w-[16px] -translate-y-1/2 rounded-full bg-surface shadow-sm transition-all duration-300 ease-out',
            checked ? 'left-[19px]' : 'left-[2px]'
          )} />
        
      </button>
    </div>);

}

export function TextArea({
  label,
  value,
  onChange,
  placeholder,
  hint,
  rows = 4,
  className
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  hint?: string;
  rows?: number;
  className?: string;
}) {
  const id = label.toLowerCase().replace(/\s+/g, '-');
  return (
    <div className={cn('space-y-1.5', className)}>
      <label htmlFor={id} className="block text-[13px] font-medium text-ink">
        {label}
      </label>
      <textarea
        id={id}
        value={value}
        rows={rows}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        className="w-full resize-y rounded-2xl border border-line bg-surface p-4 text-[13.5px] text-ink placeholder:text-faint transition-colors duration-200 hover:border-faint/60 focus:border-ink focus:outline-none" />
      
      {hint && <p className="text-[12px] text-muted">{hint}</p>}
    </div>
  );
}