import React from 'react';
import { motion } from 'framer-motion';
import * as Icons from 'lucide-react';
import { Card } from '../ui/Card';
import { Delta } from '../ui/Badge';
import { Sparkline } from '../ui/Sparkline';
import type { CompactStat, Stat } from '../../types';

function resolveIcon(name: string) {
  const lookup = Icons as unknown as Record<string, React.ComponentType<{className?: string;}>>;
  return lookup[`${name}Icon`] ?? Icons.CircleIcon;
}

export function StatCard({ stat, index = 0 }: {stat: Stat;index?: number;}) {
  const Icon = resolveIcon(stat.icon);
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, delay: index * 0.04, ease: [0.22, 1, 0.36, 1] }}>
      
      <Card className="group h-full p-5 hover:shadow-lift">
        <div className="flex items-start justify-between gap-3">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-[10px] border border-line bg-canvas">
            <Icon className="h-4 w-4 text-ink" />
          </span>
          {stat.status &&
          <span className="inline-flex items-center gap-1.5 text-2xs font-medium text-muted">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500" />
              </span>
              {stat.status}
            </span>
          }
        </div>

        <p className="mt-4 text-[12.5px] font-medium text-muted">{stat.label}</p>
        <div className="mt-1 flex items-baseline gap-2">
          <p className="text-[26px] font-semibold tracking-[-0.03em] text-ink tabular-nums">{stat.value}</p>
          <Delta value={stat.delta} />
        </div>

        <div className="mt-4 -mb-1">
          <Sparkline data={stat.series} positive={stat.trend !== 'down'} className="w-full" />
        </div>
      </Card>
    </motion.div>);

}

export function CompactStatCard({ stat }: {stat: CompactStat;}) {
  return (
    <div className="group flex flex-col justify-between rounded-2xl border border-line bg-surface p-4 transition-all duration-200 hover:shadow-soft">
      <p className="truncate text-[12px] font-medium text-muted">{stat.label}</p>
      <div className="mt-2 flex items-baseline justify-between gap-2">
        <p className="text-[18px] font-semibold tracking-[-0.02em] text-ink tabular-nums">{stat.value}</p>
        <Delta value={stat.delta} />
      </div>
    </div>);

}