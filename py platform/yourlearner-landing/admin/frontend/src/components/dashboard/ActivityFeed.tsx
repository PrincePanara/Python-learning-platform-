import React from 'react';
import * as Icons from 'lucide-react';
import { Card, CardHeader } from '../ui/Card';
import { Button } from '../ui/Button';
const activities: any[] = [];
function resolveIcon(name: string) {
  const lookup = Icons as unknown as Record<string, React.ComponentType<{className?: string;}>>;
  return lookup[`${name}Icon`] ?? Icons.CircleIcon;
}

export function ActivityFeed() {
  return (
    <Card className="flex h-full flex-col">
      <CardHeader
        title="Recent activity"
        description="Live events across students, content and admins."
        action={
        <Button size="sm" variant="ghost">
            View all
          </Button>
        } />
      
      <ol className="flex-1 px-5 py-4 sm:px-6">
        {activities.map((item, i) => {
          const Icon = resolveIcon(item.icon);
          const last = i === activities.length - 1;
          return (
            <li key={item.id} className="relative flex gap-3 pb-5 last:pb-0">
              {!last && <span className="absolute left-[15px] top-9 h-[calc(100%-1.75rem)] w-px bg-line" />}
              <span className="relative z-10 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-line bg-surface">
                <Icon className="h-3.5 w-3.5 text-muted" />
              </span>
              <div className="min-w-0 flex-1 pt-1">
                <p className="text-[13px] text-ink">
                  <span className="font-medium">{item.actor}</span>
                  <span className="text-muted"> · {item.type}</span>
                </p>
                <p className="mt-0.5 truncate text-[12.5px] text-muted">{item.detail}</p>
              </div>
              <span className="shrink-0 pt-1 text-2xs text-faint">{item.time}</span>
            </li>);

        })}
      </ol>
    </Card>);

}