import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  SearchIcon,
  BellIcon,
  MessageSquareIcon,
  SunIcon,
  MoonIcon,
  PlusIcon,
  MenuIcon,
  ChevronRightIcon,
  SparklesIcon } from
'lucide-react';
import { cn } from '../../utils/cn';
import { Button } from '../ui/Button';
import { Tooltip } from '../ui/Tooltip';
import { useTheme } from '../../contexts/ThemeContext';

const titles: Record<string, string> = {
  '': 'Dashboard',
  modules: 'Modules',
  courses: 'Courses',
  analytics: 'Analytics',
  settings: 'Settings'
};

interface TopbarProps {
  onOpenPalette: () => void;
  onOpenMobileNav: () => void;
  onQuickAdd: () => void;
}

export function Topbar({ onOpenPalette, onOpenMobileNav, onQuickAdd }: TopbarProps) {
  const { theme, toggle } = useTheme();
  const { pathname } = useLocation();
  const segments = pathname.split('/').filter(Boolean);
  const current = titles[segments[0] ?? ''] ?? 'Overview';

  return (
    <header className="sticky top-0 z-20 border-b border-line bg-surface/85 backdrop-blur-xl">
      <div className="flex h-16 items-center gap-3 px-4 sm:px-6">
        <button
          onClick={onOpenMobileNav}
          aria-label="Open navigation"
          className="rounded-[10px] p-2 text-muted transition-colors duration-200 hover:bg-canvas hover:text-ink lg:hidden">
          
          <MenuIcon className="h-[18px] w-[18px]" />
        </button>

        <div className="min-w-0 flex-1">
          <nav aria-label="Breadcrumb" className="hidden items-center gap-1.5 text-2xs text-faint sm:flex">
            <Link to="/" className="transition-colors duration-200 hover:text-ink">
              Atlas Learn
            </Link>
            <ChevronRightIcon className="h-3 w-3" />
            {segments.length === 0 ?
            <span className="text-muted">Dashboard</span> :

            segments.map((seg, i) =>
            <React.Fragment key={seg + i}>
                  {i > 0 && <ChevronRightIcon className="h-3 w-3" />}
                  <span className={cn(i === segments.length - 1 ? 'text-muted' : '')}>
                    {titles[seg] ?? seg.replace(/-/g, ' ')}
                  </span>
                </React.Fragment>
            )
            }
          </nav>
          <h1 className="truncate text-[15px] font-semibold tracking-[-0.015em] text-ink">{current}</h1>
        </div>

        <button
          onClick={onOpenPalette}
          className="group hidden h-10 w-64 items-center gap-2.5 rounded-xl border border-line bg-canvas px-3 text-left transition-colors duration-200 hover:border-faint/60 xl:flex">
          
          <SearchIcon className="h-4 w-4 text-faint" />
          <span className="flex-1 truncate text-[13px] text-faint">Search or ask AI…</span>
          <kbd className="rounded-md border border-line bg-surface px-1.5 py-0.5 text-2xs text-faint">⌘K</kbd>
        </button>

        <div className="flex items-center gap-1">
          <IconAction label="Search" onClick={onOpenPalette} className="xl:hidden">
            <SearchIcon className="h-4 w-4" />
          </IconAction>
          <IconAction label="AI search" onClick={onOpenPalette}>
            <SparklesIcon className="h-4 w-4" />
          </IconAction>
          <IconAction label="Notifications" badge>
            <BellIcon className="h-4 w-4" />
          </IconAction>
          <IconAction label="Messages" badge>
            <MessageSquareIcon className="h-4 w-4" />
          </IconAction>
          <IconAction label={theme === 'light' ? 'Switch to dark' : 'Switch to light'} onClick={toggle}>
            {theme === 'light' ? <MoonIcon className="h-4 w-4" /> : <SunIcon className="h-4 w-4" />}
          </IconAction>
        </div>

        <Button variant="primary" size="sm" onClick={onQuickAdd} className="hidden sm:inline-flex">
          <PlusIcon className="h-3.5 w-3.5" />
          Quick add
        </Button>

        <button
          aria-label="Your profile"
          className="ml-1 inline-flex h-9 w-9 items-center justify-center rounded-full border border-line bg-canvas text-[11px] font-semibold text-ink transition-shadow duration-200 hover:shadow-soft">
          
          RK
        </button>
      </div>
    </header>);

}

function IconAction({
  label,
  children,
  onClick,
  badge,
  className






}: {label: string;children: React.ReactNode;onClick?: () => void;badge?: boolean;className?: string;}) {
  return (
    <Tooltip label={label} className={className}>
      <button
        onClick={onClick}
        aria-label={label}
        className="relative rounded-[10px] p-2 text-muted transition-colors duration-200 hover:bg-canvas hover:text-ink">
        
        {children}
        {badge &&
        <span className="absolute right-1.5 top-1.5 h-1.5 w-1.5 rounded-full bg-accent ring-2 ring-surface" />
        }
      </button>
    </Tooltip>);

}