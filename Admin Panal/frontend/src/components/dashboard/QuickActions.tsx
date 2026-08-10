import React from 'react';
import {
  BookPlusIcon,
  LayersIcon,
  FileTextIcon,
  PaperclipIcon,
  ListChecksIcon,
  BrainIcon,
  UploadCloudIcon,
  SparklesIcon,
  UserPlusIcon,
  ArrowUpRightIcon } from
'lucide-react';
import { Card, CardHeader } from '../ui/Card';

const actions = [
{ label: 'Create course', icon: BookPlusIcon },
{ label: 'Create module', icon: LayersIcon },
{ label: 'Upload notes', icon: FileTextIcon },
{ label: 'Upload resources', icon: PaperclipIcon },
{ label: 'Create quiz', icon: ListChecksIcon },
{ label: 'Practice questions', icon: BrainIcon },
{ label: 'Publish course', icon: UploadCloudIcon },
{ label: 'Generate AI content', icon: SparklesIcon },
{ label: 'Invite students', icon: UserPlusIcon }];


export function QuickActions({ onAction }: {onAction: () => void;}) {
  return (
    <Card>
      <CardHeader title="Quick actions" description="The nine things admins do most." />
      <div className="grid grid-cols-1 gap-2 p-5 sm:grid-cols-3 sm:p-6">
        {actions.map((a) =>
        <button
          key={a.label}
          onClick={onAction}
          className="group flex items-center gap-2.5 rounded-xl border border-line bg-surface px-3 py-2.5 text-left transition-all duration-200 hover:-translate-y-px hover:border-faint/60 hover:shadow-soft">
          
            <a.icon className="h-4 w-4 shrink-0 text-muted transition-colors duration-200 group-hover:text-ink" />
            <span className="flex-1 truncate text-[13px] font-medium text-ink">{a.label}</span>
            <ArrowUpRightIcon className="h-3.5 w-3.5 shrink-0 text-faint opacity-0 transition-opacity duration-200 group-hover:opacity-100" />
          </button>
        )}
      </div>
    </Card>);

}