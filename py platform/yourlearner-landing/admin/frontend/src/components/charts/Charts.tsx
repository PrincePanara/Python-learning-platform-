import React from 'react';
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Line,
  LineChart,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis } from
'recharts';
import { Progress } from '../ui/Sparkline';
import { formatNumber } from '../../utils/cn';

const axis = {
  stroke: 'var(--line)',
  tick: { fill: 'var(--faint)', fontSize: 11 },
  tickLine: false,
  axisLine: false
};

const tooltipStyle = {
  contentStyle: {
    borderRadius: 12,
    border: '1px solid var(--line)',
    background: 'var(--surface)',
    boxShadow: '0 16px 40px -16px rgba(17,17,17,0.18)',
    fontSize: 12,
    color: 'var(--ink)'
  },
  labelStyle: { color: 'var(--muted)', fontSize: 11, marginBottom: 4 },
  cursor: { stroke: 'var(--line)' }
};

export function GrowthChart({ data }: {data: Array<{month: string;students: number;active: number;}>;}) {
  return (
    <div className="h-[280px] w-full px-2 pb-4">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data} margin={{ top: 10, right: 12, left: -12, bottom: 0 }}>
          <defs>
            <linearGradient id="areaInk" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="var(--ink)" stopOpacity={0.16} />
              <stop offset="100%" stopColor="var(--ink)" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid stroke="var(--line)" vertical={false} />
          <XAxis dataKey="month" {...axis} />
          <YAxis {...axis} tickFormatter={(v: number) => formatNumber(v)} width={48} />
          <Tooltip {...tooltipStyle} formatter={(v: number) => formatNumber(v)} />
          <Area
            type="monotone"
            dataKey="students"
            stroke="var(--ink)"
            strokeWidth={2}
            fill="url(#areaInk)"
            name="Total students" />
          
          <Line
            type="monotone"
            dataKey="active"
            stroke="var(--faint)"
            strokeWidth={1.75}
            strokeDasharray="4 4"
            dot={false}
            name="Active" />
          
        </AreaChart>
      </ResponsiveContainer>
    </div>);

}

export function HoursChart({ data }: {data: Array<{day: string;hours: number;}>;}) {
  return (
    <div className="h-[220px] w-full px-2 pb-4">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} margin={{ top: 10, right: 12, left: -16, bottom: 0 }}>
          <CartesianGrid stroke="var(--line)" vertical={false} />
          <XAxis dataKey="day" {...axis} />
          <YAxis {...axis} tickFormatter={(v: number) => formatNumber(v)} width={48} />
          <Tooltip {...tooltipStyle} cursor={{ fill: 'var(--canvas)' }} />
          <Bar dataKey="hours" fill="var(--ink)" radius={[6, 6, 0, 0]} maxBarSize={34} name="Learning hours" />
        </BarChart>
      </ResponsiveContainer>
    </div>);

}

export function ScoreDistribution({ data }: {data: Array<{band: string;learners: number;}>;}) {
  return (
    <div className="h-[220px] w-full px-2 pb-4">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} margin={{ top: 10, right: 12, left: -16, bottom: 0 }}>
          <CartesianGrid stroke="var(--line)" vertical={false} />
          <XAxis dataKey="band" {...axis} />
          <YAxis {...axis} tickFormatter={(v: number) => formatNumber(v)} width={48} />
          <Tooltip {...tooltipStyle} cursor={{ fill: 'var(--canvas)' }} />
          <Bar dataKey="learners" radius={[6, 6, 0, 0]} maxBarSize={44}>
            {data.map((entry, i) =>
            <Cell key={entry.band} fill={i >= 3 ? 'var(--ink)' : 'var(--line)'} />
            )}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>);

}

export function RevenueChart({ data }: {data: Array<{month: string;revenue: number;refunds: number;}>;}) {
  return (
    <div className="h-[240px] w-full px-2 pb-4">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data} margin={{ top: 10, right: 12, left: -8, bottom: 0 }}>
          <CartesianGrid stroke="var(--line)" vertical={false} />
          <XAxis dataKey="month" {...axis} />
          <YAxis {...axis} tickFormatter={(v: number) => `$${formatNumber(v)}`} width={56} />
          <Tooltip {...tooltipStyle} formatter={(v: number) => `$${v.toLocaleString('en-US')}`} />
          <Line type="monotone" dataKey="revenue" stroke="var(--ink)" strokeWidth={2} dot={false} name="Revenue" />
          <Line
            type="monotone"
            dataKey="refunds"
            stroke="var(--faint)"
            strokeWidth={1.75}
            strokeDasharray="4 4"
            dot={false}
            name="Refunds" />
          
        </LineChart>
      </ResponsiveContainer>
    </div>);

}

export function DeviceDonut({ data }: {data: Array<{name: string;value: number;}>;}) {
  const shades = ['var(--ink)', 'var(--muted)', 'var(--line)'];
  return (
    <div className="flex flex-col items-center gap-4 px-5 pb-6 pt-2 sm:flex-row sm:px-6">
      <div className="h-[150px] w-[150px] shrink-0">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              dataKey="value"
              innerRadius={46}
              outerRadius={70}
              paddingAngle={3}
              stroke="var(--surface)"
              strokeWidth={2}>
              
              {data.map((entry, i) =>
              <Cell key={entry.name} fill={shades[i % shades.length]} />
              )}
            </Pie>
            <Tooltip {...tooltipStyle} formatter={(v: number) => `${v}%`} />
          </PieChart>
        </ResponsiveContainer>
      </div>
      <ul className="w-full space-y-2.5">
        {data.map((d, i) =>
        <li key={d.name} className="flex items-center gap-2.5">
            <span className="h-2 w-2 rounded-full" style={{ background: shades[i % shades.length] }} />
            <span className="flex-1 text-[13px] text-muted">{d.name}</span>
            <span className="text-[13px] font-medium tabular-nums text-ink">{d.value}%</span>
          </li>
        )}
      </ul>
    </div>);

}

export function RankedList({
  items,
  unit = 'learners'



}: {items: Array<{name: string;learners: number;}>;unit?: string;}) {
  const max = Math.max(...items.map((i) => i.learners), 1);
  return (
    <ul className="space-y-4 px-5 pb-6 pt-4 sm:px-6">
      {items.map((item, i) =>
      <li key={item.name}>
          <div className="mb-1.5 flex items-baseline justify-between gap-3">
            <span className="flex min-w-0 items-baseline gap-2">
              <span className="text-2xs tabular-nums text-faint">{String(i + 1).padStart(2, '0')}</span>
              <span className="truncate text-[13px] text-ink">{item.name}</span>
            </span>
            <span className="shrink-0 text-[12.5px] tabular-nums text-muted">
              {item.learners.toLocaleString('en-US')} {unit}
            </span>
          </div>
          <Progress value={item.learners / max * 100} />
        </li>
      )}
    </ul>);

}

export function FunnelChart({ data }: {data: Array<{stage: string;value: number;}>;}) {
  const top = data?.[0]?.value || 1;
  return (
    <ul className="space-y-3 px-5 pb-6 pt-4 sm:px-6">
      {data.map((step, i) => {
        const pct = step.value / top * 100;
        const drop = i === 0 ? 0 : (data[i - 1].value - step.value) / data[i - 1].value * 100;
        return (
          <li key={step.stage} className="rounded-xl border border-line bg-canvas/50 p-3">
            <div className="flex items-baseline justify-between gap-3">
              <span className="text-[13px] font-medium text-ink">{step.stage}</span>
              <span className="text-[12.5px] tabular-nums text-muted">
                {step.value.toLocaleString('en-US')} · {pct.toFixed(0)}%
              </span>
            </div>
            <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-surface">
              <div
                className="h-full rounded-full bg-ink transition-[width] duration-700 ease-out"
                style={{ width: `${pct}%` }} />
              
            </div>
            {i > 0 && <p className="mt-1.5 text-2xs text-faint">−{drop.toFixed(1)}% from previous stage</p>}
          </li>);

      })}
    </ul>);

}

export function CountryList({
  data


}: {data: Array<{country: string;learners: number;share: number;}>;}) {
  return (
    <ul className="divide-y divide-line px-5 pb-2 pt-1 sm:px-6">
      {data.map((c) =>
      <li key={c.country} className="flex items-center gap-4 py-3">
          <span className="flex-1 truncate text-[13px] text-ink">{c.country}</span>
          <Progress value={c.share * 3.5} className="w-24 shrink-0" />
          <span className="w-20 shrink-0 text-right text-[12.5px] tabular-nums text-muted">
            {c.learners.toLocaleString('en-US')}
          </span>
        </li>
      )}
    </ul>);

}