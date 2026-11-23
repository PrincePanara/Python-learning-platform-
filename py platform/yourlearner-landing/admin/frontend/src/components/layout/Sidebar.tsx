import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import {
  LayoutDashboardIcon,
  LayersIcon,
  GraduationCapIcon,
  BarChart3Icon,
  SettingsIcon,
  PanelLeftCloseIcon,
  PanelLeftOpenIcon,
  LogOutIcon,
  SparklesIcon,
  CodeIcon } from
'lucide-react';
import { cn } from '../../utils/cn';
import { Tooltip } from '../ui/Tooltip';

const nav = [
{ to: '/', label: 'Dashboard', icon: LayoutDashboardIcon, end: true },
{ to: '/modules', label: 'Modules', icon: LayersIcon, end: false },
{ to: '/courses', label: 'Courses', icon: GraduationCapIcon, end: false },
{ to: '/practice', label: 'Practice', icon: CodeIcon, end: false },
{ to: '/analytics', label: 'Analytics', icon: BarChart3Icon, end: false },
{ to: '/settings', label: 'Settings', icon: SettingsIcon, end: false }];


interface SidebarProps {
  collapsed: boolean;
  onToggle: () => void;
  mobileOpen: boolean;
  onCloseMobile: () => void;
}

export function Sidebar({ collapsed, onToggle, mobileOpen, onCloseMobile }: SidebarProps) {
  return (
    <>
      <AnimatePresence>
        {mobileOpen &&
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onCloseMobile}
          className="fixed inset-0 z-40 bg-ink/25 backdrop-blur-[2px] lg:hidden" />

        }
      </AnimatePresence>

      <motion.aside
        animate={{ width: collapsed ? 72 : 248 }}
        transition={{ type: 'spring', stiffness: 420, damping: 40 }}
        className={cn(
          'fixed inset-y-0 left-0 z-50 flex flex-col border-r border-line bg-surface lg:sticky lg:top-0 lg:z-30 lg:h-screen lg:translate-x-0',
          mobileOpen ? 'translate-x-0' : '-translate-x-full',
          'transition-transform duration-300 ease-out'
        )}
        style={{ width: collapsed ? 72 : 248 }}>
        
        <SidebarBody collapsed={collapsed} onToggle={onToggle} onNavigate={onCloseMobile} />
      </motion.aside>
    </>);

}

function SidebarBody({
  collapsed,
  onToggle,
  onNavigate




}: {collapsed: boolean;onToggle: () => void;onNavigate: () => void;}) {
  const navigate = useNavigate();

  return (
    <div className="flex h-full flex-col overflow-hidden">
      <div className={cn('flex h-16 items-center gap-2.5 px-4', collapsed && 'justify-center px-0')}>
        <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-[10px] bg-ink">
          <SparklesIcon className="h-4 w-4 text-surface" />
        </span>
        {!collapsed &&
        <div className="min-w-0">
            <p className="truncate text-[14px] font-semibold tracking-[-0.02em] text-ink">Atlas Learn</p>
            <p className="truncate text-2xs text-faint">Admin workspace</p>
          </div>
        }
      </div>

      <nav aria-label="Primary" className="scrollbar-thin flex-1 space-y-0.5 overflow-y-auto px-3 py-3">
        {!collapsed &&
        <p className="px-2 pb-2 pt-1 text-2xs font-semibold uppercase tracking-[0.08em] text-faint">
            Workspace
          </p>
        }
        {nav.map((item) =>
        <NavItem key={item.to} {...item} collapsed={collapsed} onNavigate={onNavigate} />
        )}
      </nav>

      <div className="space-y-1 border-t border-line p-3">
        <button
          onClick={() => navigate('/settings')}
          className={cn(
            'flex w-full items-center gap-2.5 rounded-xl p-2 text-left transition-colors duration-200 hover:bg-canvas',
            collapsed && 'justify-center'
          )}>
          
          <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-line bg-canvas text-[11px] font-semibold text-ink">
            RK
          </span>
          {!collapsed &&
          <span className="min-w-0">
              <span className="block truncate text-[13px] font-medium text-ink">Rhea Kapoor</span>
              <span className="block truncate text-2xs text-faint">Super admin</span>
            </span>
          }
        </button>

        <SidebarAction
          icon={LogOutIcon}
          label="Log out"
          collapsed={collapsed}
          onClick={() => undefined} />
        
        <SidebarAction
          icon={collapsed ? PanelLeftOpenIcon : PanelLeftCloseIcon}
          label={collapsed ? 'Expand sidebar' : 'Collapse sidebar'}
          collapsed={collapsed}
          onClick={onToggle} />
        
      </div>
    </div>);

}

function NavItem({
  to,
  label,
  icon: Icon,
  end,
  collapsed,
  onNavigate







}: {to: string;label: string;icon: typeof LayersIcon;end: boolean;collapsed: boolean;onNavigate: () => void;}) {
  const content =
  <NavLink
    to={to}
    end={end}
    onClick={onNavigate}
    className={({ isActive }) =>
    cn(
      'group relative flex items-center gap-2.5 rounded-xl px-2.5 py-2 text-[13.5px] font-medium transition-colors duration-200',
      collapsed && 'justify-center px-0',
      isActive ? 'bg-canvas text-ink' : 'text-muted hover:bg-canvas/70 hover:text-ink'
    )
    }>
    
      {({ isActive }) =>
    <>
          {isActive &&
      <motion.span
        layoutId="sidebar-active"
        transition={{ type: 'spring', stiffness: 460, damping: 38 }}
        className="absolute left-0 top-1/2 h-5 w-[2px] -translate-y-1/2 rounded-full bg-ink" />

      }
          <Icon className="h-[18px] w-[18px] shrink-0" />
          {!collapsed && <span className="truncate">{label}</span>}
        </>
    }
    </NavLink>;


  return collapsed ?
  <Tooltip label={label} side="right" className="w-full">
      <span className="w-full">{content}</span>
    </Tooltip> :

  content;

}

function SidebarAction({
  icon: Icon,
  label,
  collapsed,
  onClick





}: {icon: typeof LayersIcon;label: string;collapsed: boolean;onClick: () => void;}) {
  return (
    <button
      onClick={onClick}
      aria-label={label}
      className={cn(
        'flex w-full items-center gap-2.5 rounded-xl px-2.5 py-2 text-[13.5px] font-medium text-muted transition-colors duration-200 hover:bg-canvas hover:text-ink',
        collapsed && 'justify-center px-0'
      )}>
      
      <Icon className="h-[18px] w-[18px] shrink-0" />
      {!collapsed && <span className="truncate">{label}</span>}
    </button>);

}