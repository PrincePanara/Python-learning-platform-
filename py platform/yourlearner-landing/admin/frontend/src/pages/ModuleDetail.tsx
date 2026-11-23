import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import {
  ArrowLeftIcon,
  EyeIcon,
  UploadCloudIcon,
  PlusIcon,
  SparklesIcon,
  DownloadIcon,
  FileIcon } from
'lucide-react';
import { PageHeader } from '../components/layout/PageHeader';
import { Card, CardHeader } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Badge, StatusBadge } from '../components/ui/Badge';
import { Tabs } from '../components/ui/Tabs';
import { Progress } from '../components/ui/Sparkline';
import { TableShell, Th, Td, Tr, Thumb } from '../components/ui/Table';
import { EmptyState, SuccessState } from '../components/ui/States';
import { Drawer } from '../components/ui/Overlay';
import { HoursChart, ScoreDistribution } from '../components/charts/Charts';
import { useScreenInit } from '../useScreenInit.js';
import type { ModuleRow } from '../types';

const TABS = [
'Overview',
'Lessons',
'Notes',
'Practice',
'Quiz',
'Resources',
'Assignments',
'Discussion',
'Announcements',
'Analytics',
'Students',
'Certificates',
'Settings'];


export function ModuleDetail() {
  const { moduleId } = useParams();
  const navigate = useNavigate();
  const screenInit = useScreenInit();
  const [tab, setTab] = useState(screenInit.tab ?? 'Overview');
  const [drawer, setDrawer] = useState<string | null>(null);
  const [mod, setMod] = useState<ModuleRow | null>(null);
  const [loading, setLoading] = useState(true);

  React.useEffect(() => {
    const fetchModule = async () => {
      try {
        const res = await fetch(`http://localhost:8000/api/v1/modules/${moduleId}`);
        if (res.ok) {
          setMod(await res.json());
        }
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchModule();
  }, [moduleId]);

  // Fallbacks for removed mock data
  // Fallbacks for removed mock data
  const moduleLessons: any[] = mod?.lessons_data || [];
  const practiceQuestions: any[] = mod?.practice_questions || [];
  const moduleResources: any[] = mod?.resources_data || [];
  const quizPerformance: any[] = [];
  const learningHours: any[] = [];
  const notesContent: string = mod?.notes_content || "";

  if (loading) {
    return <div className="p-8 text-center text-muted">Loading module...</div>;
  }
  
  if (!mod) {
    return (
      <div className="p-8 text-center text-muted">
        Module not found. <button onClick={() => navigate('/modules')} className="text-blue-500 underline">Go back</button>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <button
        onClick={() => navigate('/modules')}
        className="inline-flex items-center gap-1.5 text-[13px] text-muted transition-colors duration-200 hover:text-ink">
        
        <ArrowLeftIcon className="h-3.5 w-3.5" />
        All modules
      </button>

      <PageHeader
        title={mod.name}
        description={`${mod.course} · Module ${mod.number} · Updated ${mod.updated}`}
        actions={
        <>
            <Button size="md">
              <EyeIcon className="h-3.5 w-3.5" />
              Preview
            </Button>
            <Button size="md">
              <SparklesIcon className="h-3.5 w-3.5" />
              AI generate
            </Button>
            <Button variant="primary" size="md">
              <UploadCloudIcon className="h-3.5 w-3.5" />
              Publish
            </Button>
          </>
        } />
      

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
        {[
        { label: 'Lessons', value: mod.lessons },
        { label: 'Practice questions', value: mod.practice },
        { label: 'Quiz questions', value: mod.quiz },
        { label: 'Notes', value: mod.notes },
        { label: 'Resources', value: mod.resources },
        { label: 'Students', value: mod.students.toLocaleString('en-US') }].
        map((s) =>
        <div key={s.label} className="rounded-2xl border border-line bg-surface p-4">
            <p className="truncate text-[12px] text-muted">{s.label}</p>
            <p className="mt-1.5 text-[20px] font-semibold tracking-[-0.02em] text-ink tabular-nums">{s.value}</p>
          </div>
        )}
      </div>

      <Card>
        <div className="px-3 pt-2 sm:px-4">
          <Tabs tabs={TABS} active={tab} onChange={setTab} layoutId="module-tab" />
        </div>

        {tab === 'Overview' &&
        <div className="grid grid-cols-1 gap-4 p-5 lg:grid-cols-3 sm:p-6">
            <div className="space-y-4 lg:col-span-2">
              <div className="rounded-2xl border border-line p-5">
                <h4 className="text-[14px] font-semibold text-ink">Learning objectives</h4>
                <ul className="mt-3 space-y-2 text-[13px] leading-6 text-muted">
                  <li>· Explain how a single neuron transforms inputs into an activation.</li>
                  <li>· Compare activation functions and their gradient behaviour.</li>
                  <li>· Derive backpropagation for a two-layer network by hand.</li>
                  <li>· Diagnose vanishing and exploding gradients in training runs.</li>
                </ul>
              </div>
              <SuccessState
              title="AI content review passed"
              description="6 of 6 AI-generated lessons cleared factual and tone checks 2 hours ago." />
            
              <div className="rounded-2xl border border-line p-5">
                <h4 className="text-[14px] font-semibold text-ink">Completion</h4>
                <div className="mt-3 flex items-center gap-3">
                  <Progress value={mod.completion} className="flex-1" />
                  <span className="text-[13px] font-medium tabular-nums text-ink">{mod.completion}%</span>
                </div>
                <p className="mt-2 text-[12.5px] text-muted">
                  {Math.round(mod.students * mod.completion / 100).toLocaleString('en-US')} of{' '}
                  {mod.students.toLocaleString('en-US')} enrolled learners finished this module.
                </p>
              </div>
            </div>
            <div className="space-y-3 rounded-2xl border border-line p-5">
              <h4 className="text-[14px] font-semibold text-ink">Details</h4>
              {[
            ['Status', <StatusBadge key="s" status={mod.status} />],
            ['Course', mod.course],
            ['Module number', String(mod.number)],
            ['Created', mod.created],
            ['Last updated', mod.updated],
            ['Certificate', <Badge key="c" tone="accent">Enabled</Badge>]].
            map(([label, value]) =>
            <div key={String(label)} className="flex items-center justify-between gap-3 border-b border-line py-2 last:border-0">
                  <span className="text-[12.5px] text-muted">{label}</span>
                  <span className="text-[13px] text-ink">{value}</span>
                </div>
            )}
            </div>
          </div>
        }

        {tab === 'Lessons' &&
        <>
            <CardHeader
            title="Lessons"
            description="Ordered lesson plan with duration, difficulty and publication state."
            action={
            <Button size="sm" variant="primary" onClick={() => setDrawer('lesson')}>
                  <PlusIcon className="h-3.5 w-3.5" />
                  Add lesson
                </Button>
            } />
          
            <div className="pt-4">
              <TableShell>
                <thead>
                  <tr>
                    <Th align="right" className="w-14">#</Th>
                    <Th>Title</Th>
                    <Th>Duration</Th>
                    <Th>Difficulty</Th>
                    <Th>Source</Th>
                    <Th>Status</Th>
                    <Th align="right">Actions</Th>
                  </tr>
                </thead>
                <tbody>
                  {moduleLessons.map((l) =>
                    <Tr key={l.id} onClick={() => setDrawer('lesson')}>
                      <Td align="right" className="text-faint">{l.id.substring(0, 4)}</Td>
                      <Td className="font-medium">{l.title}</Td>
                      <Td className="tabular-nums text-muted">{l.durationStr || l.duration}</Td>
                      <Td className="text-muted">{l.difficulty || "Beginner"}</Td>
                      <Td>{l.ai ? <Badge tone="accent">AI generated</Badge> : <Badge>Manual</Badge>}</Td>
                      <Td><StatusBadge status={l.isActive ? 'live' : 'draft' as never} /></Td>
                      <Td align="right">
                        <Button size="sm" variant="ghost">Edit</Button>
                      </Td>
                    </Tr>
                )}
                </tbody>
              </TableShell>
            </div>
          </>
        }

        {tab === 'Practice' &&
        <>
            <CardHeader
            title="Practice questions"
            description="Mixed-format bank with hints, explanations and point values."
            action={
            <div className="flex gap-2">
                  <Button size="sm">Bulk import</Button>
                  <Button size="sm">Bulk export</Button>
                  <Button size="sm" variant="primary">
                    <SparklesIcon className="h-3.5 w-3.5" />
                    AI generate
                  </Button>
                </div>
            } />
          
            <div className="pt-4">
              <TableShell>
                <thead>
                  <tr>
                    <Th>Question</Th>
                    <Th>Type</Th>
                    <Th>Difficulty</Th>
                    <Th align="right">Points</Th>
                    <Th>Tags</Th>
                    <Th align="right">Actions</Th>
                  </tr>
                </thead>
                <tbody>
                  {practiceQuestions.map((q) =>
                <Tr key={q.id}>
                      <Td className="max-w-md truncate font-medium">{q.title || q.question}</Td>
                      <Td className="text-muted">{q.category || q.type || "Coding"}</Td>
                      <Td>
                        <Badge tone={q.difficulty === 'Hard' ? 'solid' : 'neutral'}>{q.difficulty || "Medium"}</Badge>
                      </Td>
                      <Td align="right">{q.points || 10}</Td>
                      <Td className="text-muted">{(q.tags || []).join(', ')}</Td>
                      <Td align="right">
                        <Button size="sm" variant="ghost">Preview</Button>
                      </Td>
                    </Tr>
                )}
                </tbody>
              </TableShell>
            </div>
          </>
        }

        {tab === 'Resources' &&
        <>
            <CardHeader
            title="Resources"
            description="Downloadable files and external links attached to this module."
            action={
            <Button size="sm" variant="primary">
                  <PlusIcon className="h-3.5 w-3.5" />
                  Upload
                </Button>
            } />
          
            <div className="grid grid-cols-1 gap-3 p-5 sm:grid-cols-2 lg:grid-cols-3 sm:p-6">
              {moduleResources.map((r) =>
            <div
              key={r.id}
              className="group flex items-start gap-3 rounded-2xl border border-line p-4 transition-all duration-200 hover:-translate-y-px hover:shadow-soft">
              
                  <Thumb label={r.kind.slice(0, 2).toUpperCase()} />
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-[13px] font-medium text-ink">{r.title || r.name}</p>
                    <p className="mt-0.5 text-2xs text-muted">
                      {r.type || r.kind || "Link"} · {r.size || "Unknown"}
                    </p>
                    <p className="mt-2 text-2xs text-faint">
                      {r.url || "Attached file"}
                    </p>
                  </div>
                  <button
                aria-label={`Download ${r.name}`}
                className="rounded-lg p-1.5 text-faint transition-colors duration-200 hover:bg-canvas hover:text-ink">
                
                    <DownloadIcon className="h-4 w-4" />
                  </button>
                </div>
            )}
            </div>
          </>
        }

        {tab === 'Quiz' &&
        <div className="grid grid-cols-1 gap-4 p-5 lg:grid-cols-3 sm:p-6">
            <div className="space-y-3 rounded-2xl border border-line p-5 lg:col-span-2">
              <h4 className="text-[14px] font-semibold text-ink">Module 1 assessment</h4>
              <p className="text-[13px] leading-6 text-muted">
                24 questions drawn at random from the question bank. Learners must score 70% to unlock the next
                module.
              </p>
              <div className="grid grid-cols-2 gap-3 pt-2 sm:grid-cols-4">
                {[
              ['Time limit', '45 min'],
              ['Passing marks', '70%'],
              ['Negative marking', 'Off'],
              ['Shuffle', 'On']].
              map(([k, v]) =>
              <div key={k} className="rounded-xl border border-line bg-canvas/50 p-3">
                    <p className="text-2xs text-muted">{k}</p>
                    <p className="mt-1 text-[13.5px] font-medium text-ink">{v}</p>
                  </div>
              )}
              </div>
            </div>
            <div className="rounded-2xl border border-line p-5">
              <h4 className="text-[14px] font-semibold text-ink">Leaderboard</h4>
              <ol className="mt-3 space-y-2.5">
                {['Hana Sato · 98', 'Dev Patel · 96', 'Liam Fischer · 92', 'Amara Okafor · 91'].map((l, i) =>
              <li key={l} className="flex items-center gap-3 text-[13px] text-ink">
                    <span className="w-5 text-2xs tabular-nums text-faint">{i + 1}</span>
                    {l}
                  </li>
              )}
              </ol>
            </div>
            <div className="lg:col-span-3">
              <Card>
                <CardHeader title="Quiz analytics" description="Score distribution across 4,812 attempts." />
                <ScoreDistribution data={quizPerformance} />
              </Card>
            </div>
          </div>
        }

        {tab === 'Analytics' &&
        <div className="grid grid-cols-1 gap-4 p-5 lg:grid-cols-2 sm:p-6">
            <Card>
              <CardHeader title="Study hours" description="Time spent in this module this week." />
              <HoursChart data={learningHours} />
            </Card>
            <Card>
              <CardHeader title="Score distribution" description="Assessment outcomes." />
              <ScoreDistribution data={quizPerformance} />
            </Card>
          </div>
        }

        {tab === 'Notes' && (
          <div className="p-5 sm:p-6">
            <CardHeader title="Lesson Notes" description="The primary instructional content for this module." />
            <div className="mt-4 rounded-2xl border border-line bg-canvas p-5">
               <pre className="scrollbar-thin overflow-x-auto font-mono text-[13px] leading-6 text-ink whitespace-pre-wrap">
                 {notesContent || "No notes available."}
               </pre>
            </div>
          </div>
        )}

        {['Assignments', 'Discussion', 'Announcements', 'Students', 'Certificates', 'Settings'].includes(
          tab
        ) &&
        <EmptyState
          title={`No ${tab.toLowerCase()} yet`}
          description={`This module has no ${tab.toLowerCase()} configured. Create the first one to make it available to enrolled learners.`}
          action={
          <Button variant="primary">
                <PlusIcon className="h-3.5 w-3.5" />
                Create {tab.toLowerCase().replace(/s$/, '')}
              </Button>
          } />

        }
      </Card>

      <Drawer
        open={drawer === 'lesson'}
        onClose={() => setDrawer(null)}
        title="Lesson editor"
        description="Backpropagation from first principles"
        footer={
        <>
            <Button onClick={() => setDrawer(null)}>Save draft</Button>
            <Button variant="primary" onClick={() => setDrawer(null)}>
              Publish lesson
            </Button>
          </>
        }>
        
        <div className="space-y-5">
          <div className="relative aspect-video rounded-2xl border border-line bg-canvas overflow-hidden">
             <HeroVideoDialog
                className="w-full h-full object-cover"
                animationStyle="from-center"
                videoSrc="https://www.youtube.com/embed/qh3NGpYRG3I?si=4rb-zSdDkVK9qxxb"
                thumbnailSrc="https://images.unsplash.com/photo-1516321497487-e288fb19713f?q=80&w=2070&auto=format&fit=crop"
                thumbnailAlt="Module Video"
              />
          </div>
          <div className="rounded-2xl border border-line">
            <div className="flex items-center gap-2 border-b border-line px-3 py-2 text-2xs text-muted">
              Markdown · Rich text · Code blocks
            </div>
            <pre className="scrollbar-thin overflow-x-auto p-4 font-mono text-[12px] leading-6 text-ink">
{`## Backpropagation

The chain rule lets us attribute error to every weight:

\`\`\`python
grad = (y_hat - y) @ h.T
W -= lr * grad
\`\`\`
`}
            </pre>
          </div>
          <div className="rounded-2xl border border-line p-4">
            <p className="text-[13px] font-medium text-ink">Real world example</p>
            <p className="mt-1 text-[12.5px] leading-6 text-muted">
              Walk through a fraud-detection network that trains on 2M transactions and show how gradient
              magnitude shifts across layers.
            </p>
          </div>
        </div>
      </Drawer>
    </div>);

}