import React, { useId } from 'react';

interface SparklineProps {
  data: number[];
  className?: string;
  positive?: boolean;
  height?: number;
}

export function Sparkline({ data, className, positive = true, height = 36 }: SparklineProps) {
  const id = useId();
  const width = 120;
  const min = Math.min(...data);
  const max = Math.max(...data);
  const span = max - min || 1;
  const step = width / (data.length - 1 || 1);

  const points = data.map((v, i) => {
    const x = i * step;
    const y = height - (v - min) / span * (height - 6) - 3;
    return [x, y] as const;
  });

  const line = points.map(([x, y], i) => `${i === 0 ? 'M' : 'L'}${x.toFixed(1)},${y.toFixed(1)}`).join(' ');
  const area = `${line} L${width},${height} L0,${height} Z`;
  const stroke = positive ? 'var(--ink)' : '#dc2626';

  return (
    <svg
      role="img"
      aria-label="trend sparkline"
      viewBox={`0 0 ${width} ${height}`}
      preserveAspectRatio="none"
      className={className}
      style={{ height }}>
      
      <defs>
        <linearGradient id={`sp-${id}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={stroke} stopOpacity="0.14" />
          <stop offset="100%" stopColor={stroke} stopOpacity="0" />
        </linearGradient>
      </defs>
      <path d={area} fill={`url(#sp-${id})`} />
      <path d={line} fill="none" stroke={stroke} strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" />
    </svg>);

}

export function Progress({ value, className }: {value: number;className?: string;}) {
  return (
    <div className={className}>
      <div
        className="h-2 w-full overflow-hidden rounded-full bg-canvas/60 shadow-inner"
        role="progressbar"
        aria-valuenow={value}
        aria-valuemin={0}
        aria-valuemax={100}>
        
        <div
          className="h-full rounded-full bg-ink transition-[width] duration-700 ease-out"
          style={{ width: `${Math.min(100, Math.max(0, value))}%` }} />
        
      </div>
    </div>);

}