import React from 'react';
import { heatmap, heatmapDays } from '../../data/charts';
import { Tooltip } from '../ui/Tooltip';

export function LearningHeatmap() {
  const max = Math.max(...heatmap.flat());
  return (
    <div className="px-5 pb-6 pt-4 sm:px-6">
      <div className="scrollbar-thin overflow-x-auto">
        <div className="min-w-[560px]">
          {heatmap.map((row, r) =>
          <div key={heatmapDays[r]} className="mb-1 flex items-center gap-2">
              <span className="w-8 shrink-0 text-2xs text-faint">{heatmapDays[r]}</span>
              <div className="flex flex-1 gap-1">
                {row.map((v, c) => {
                const intensity = v / max;
                return (
                  <Tooltip
                    key={c}
                    className="flex-1"
                    label={`${heatmapDays[r]} ${String(c).padStart(2, '0')}:00 · ${v} learners`}>
                    
                      <span
                      className="h-4 w-full min-w-[10px] flex-1 rounded-[3px] transition-transform duration-150 hover:scale-125"
                      style={{
                        background:
                        intensity < 0.08 ? 'var(--canvas)' : `color-mix(in srgb, var(--ink) ${Math.round(intensity * 92)}%, var(--surface))`,
                        border: '1px solid var(--line)'
                      }} />
                    
                    </Tooltip>);

              })}
              </div>
            </div>
          )}
          <div className="mt-3 flex items-center justify-end gap-2 pl-10 text-2xs text-faint">
            Less
            {[0.05, 0.3, 0.55, 0.8, 1].map((s) =>
            <span
              key={s}
              className="h-3 w-3 rounded-[3px]"
              style={{
                background: `color-mix(in srgb, var(--ink) ${Math.round(s * 92)}%, var(--surface))`,
                border: '1px solid var(--line)'
              }} />

            )}
            More
          </div>
        </div>
      </div>
    </div>);

}