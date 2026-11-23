import React from 'react';
import { cn } from '../../utils/cn';

type Variant = 'primary' | 'secondary' | 'ghost' | 'danger';
type Size = 'sm' | 'md' | 'icon';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
  loading?: boolean;
}

const variants: Record<Variant, string> = {
  primary:
  'bg-ink text-surface hover:opacity-90 active:scale-[0.98] shadow-soft disabled:opacity-40',
  secondary:
  'bg-surface text-ink border border-line hover:bg-canvas active:scale-[0.98] disabled:opacity-40',
  ghost: 'text-muted hover:text-ink hover:bg-canvas active:scale-[0.98]',
  danger: 'bg-surface text-red-600 border border-line hover:bg-red-50 active:scale-[0.98]'
};

const sizes: Record<Size, string> = {
  sm: 'h-8 px-3 text-[13px] gap-1.5 rounded-full',
  md: 'h-10 px-4 text-[13.5px] gap-2 rounded-full',
  icon: 'h-9 w-9 rounded-full justify-center'
};

export function Button({
  variant = 'secondary',
  size = 'md',
  loading = false,
  className,
  children,
  disabled,
  ...rest
}: ButtonProps) {
  return (
    <button
      className={cn(
        'inline-flex items-center font-medium transition-all duration-200 ease-out select-none',
        variants[variant],
        sizes[size],
        className
      )}
      disabled={disabled || loading}
      {...rest}>
      
      {loading &&
      <span
        aria-hidden
        className="h-3.5 w-3.5 animate-spin rounded-full border-2 border-current border-t-transparent opacity-70" />

      }
      {children}
    </button>);

}