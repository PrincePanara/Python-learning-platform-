import React, { useState } from 'react';
import {
  BookPlusIcon,
  LayersIcon,
  FileTextIcon,
  PaperclipIcon,
  ListChecksIcon,
  BrainIcon,
  UploadCloudIcon,
  SparklesIcon,
  UserPlusIcon } from
'lucide-react';
import { Modal } from '../ui/Overlay';
import { Button } from '../ui/Button';
import { cn } from '../../utils/cn';

const options = [
{ id: 'course', label: 'Create course', icon: BookPlusIcon, hint: 'Full curriculum shell' },
{ id: 'module', label: 'Create module', icon: LayersIcon, hint: 'Add to a course' },
{ id: 'notes', label: 'Upload notes', icon: FileTextIcon, hint: 'Markdown or rich text' },
{ id: 'resources', label: 'Upload resources', icon: PaperclipIcon, hint: 'PDF, PPT, ZIP, links' },
{ id: 'quiz', label: 'Create quiz', icon: ListChecksIcon, hint: 'Timed, graded' },
{ id: 'practice', label: 'Practice questions', icon: BrainIcon, hint: 'MCQ, coding, blanks' },
{ id: 'publish', label: 'Publish course', icon: UploadCloudIcon, hint: '2 awaiting review' },
{ id: 'ai', label: 'Generate AI content', icon: SparklesIcon, hint: 'Lessons, quizzes, notes' },
{ id: 'invite', label: 'Invite students', icon: UserPlusIcon, hint: 'Email or CSV' }];


export function QuickAddModal({ open, onClose }: {open: boolean;onClose: () => void;}) {
  const [selected, setSelected] = useState('course');
  const [saving, setSaving] = useState(false);

  const handleCreate = () => {
    setSaving(true);
    window.setTimeout(() => {
      setSaving(false);
      onClose();
    }, 900);
  };

  return (
    <Modal
      open={open}
      onClose={onClose}
      title="Quick add"
      description="Start something new without leaving the dashboard."
      className="max-w-2xl"
      footer={
      <>
          <Button onClick={onClose}>Cancel</Button>
          <Button variant="primary" loading={saving} onClick={handleCreate}>
            Continue
          </Button>
        </>
      }>
      
      <div className="grid grid-cols-1 gap-2 sm:grid-cols-3">
        {options.map((o) => {
          const active = o.id === selected;
          return (
            <button
              key={o.id}
              onClick={() => setSelected(o.id)}
              aria-pressed={active}
              className={cn(
                'flex flex-col items-start gap-2 rounded-2xl border p-3.5 text-left transition-all duration-200',
                active ?
                'border-ink bg-canvas shadow-soft' :
                'border-line bg-surface hover:border-faint/60 hover:bg-canvas/60'
              )}>
              
              <o.icon className="h-[18px] w-[18px] text-ink" />
              <span className="text-[13px] font-medium text-ink">{o.label}</span>
              <span className="text-2xs text-muted">{o.hint}</span>
            </button>);

        })}
      </div>
    </Modal>);

}