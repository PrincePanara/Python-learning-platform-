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
  const [step, setStep] = useState(1);
  const [saving, setSaving] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    instructor: 'Admin',
    difficulty: 'Beginner',
    language: 'Python',
    price: 0,
    duration: '4 weeks',
    thumb: 'https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=500&q=80',
  });

  const handleContinue = () => {
    if (selected === 'course') {
      setStep(2);
    } else {
      // Other options not implemented yet
      onClose();
    }
  };

  const handleCreate = async () => {
    setSaving(true);
    try {
      const res = await fetch("http://localhost:8000/api/v1/courses/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });
      if (res.ok) {
        onClose();
        // Reset state for next open
        setTimeout(() => setStep(1), 300);
      } else {
        console.error("Failed to create course");
      }
    } catch (err) {
      console.error(err);
    } finally {
      setSaving(false);
    }
  };

  return (
    <Modal
      open={open}
      onClose={() => { onClose(); setTimeout(() => setStep(1), 300); }}
      title={step === 1 ? "Quick add" : "Create New Course"}
      description={step === 1 ? "Start something new without leaving the dashboard." : "Fill in the basic details for your new course."}
      className="max-w-2xl"
      footer={
      <>
          {step === 2 && <Button onClick={() => setStep(1)}>Back</Button>}
          {step === 1 && <Button onClick={onClose}>Cancel</Button>}
          <Button variant="primary" loading={saving} onClick={step === 1 ? handleContinue : handleCreate}>
            {step === 1 ? "Continue" : "Create Course"}
          </Button>
        </>
      }>
      
      {step === 1 ? (
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
      ) : (
        <div className="flex flex-col gap-4 py-2">
          <div className="flex flex-col gap-1">
            <label className="text-xs font-semibold text-ink">Course Name</label>
            <input 
              type="text" 
              placeholder="e.g. Advanced Python 101"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              className="px-3 py-2 border border-line rounded-lg text-sm bg-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/20"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-xs font-semibold text-ink">Description</label>
            <textarea 
              placeholder="What will students learn?"
              value={formData.description}
              onChange={(e) => setFormData({...formData, description: e.target.value})}
              className="px-3 py-2 border border-line rounded-lg text-sm bg-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/20 h-24"
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col gap-1">
              <label className="text-xs font-semibold text-ink">Language</label>
              <input 
                type="text" 
                value={formData.language}
                onChange={(e) => setFormData({...formData, language: e.target.value})}
                className="px-3 py-2 border border-line rounded-lg text-sm bg-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/20"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-xs font-semibold text-ink">Difficulty</label>
              <select 
                value={formData.difficulty}
                onChange={(e) => setFormData({...formData, difficulty: e.target.value})}
                className="px-3 py-2 border border-line rounded-lg text-sm bg-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/20"
              >
                <option>Beginner</option>
                <option>Intermediate</option>
                <option>Advanced</option>
              </select>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col gap-1">
              <label className="text-xs font-semibold text-ink">Price ($)</label>
              <input 
                type="number" 
                value={formData.price}
                onChange={(e) => setFormData({...formData, price: parseFloat(e.target.value) || 0})}
                className="px-3 py-2 border border-line rounded-lg text-sm bg-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/20"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-xs font-semibold text-ink">Duration</label>
              <input 
                type="text" 
                value={formData.duration}
                onChange={(e) => setFormData({...formData, duration: e.target.value})}
                className="px-3 py-2 border border-line rounded-lg text-sm bg-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/20"
              />
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-xs font-semibold text-ink">Thumbnail URL</label>
            <input 
              type="text" 
              value={formData.thumb}
              onChange={(e) => setFormData({...formData, thumb: e.target.value})}
              className="px-3 py-2 border border-line rounded-lg text-sm bg-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/20"
            />
          </div>
        </div>
      )}
    </Modal>);

}