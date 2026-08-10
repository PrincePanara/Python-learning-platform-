import React, { useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { PlusIcon, StarIcon, CopyIcon, ArchiveIcon, EyeIcon, UsersIcon, ClockIcon } from 'lucide-react';
import { PageHeader } from '../components/layout/PageHeader';
import { Card, CardHeader } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Badge, StatusBadge } from '../components/ui/Badge';
import { SearchInput, Select } from '../components/ui/Field';
import { SegmentedControl } from '../components/ui/Tabs';
import { Progress } from '../components/ui/Sparkline';
import { TableShell, Th, Td, Tr, Thumb } from '../components/ui/Table';
import { EmptyState } from '../components/ui/States';
import { Drawer } from '../components/ui/Overlay';
import { TextField, Toggle } from '../components/ui/Field';
import { useCourses } from '../contexts/CourseContext';
import type { CourseRow } from '../types';
import { useScreenInit } from '../useScreenInit.js';

export function Courses() {
  const navigate = useNavigate();
  const { courses } = useCourses();
  const screenInit = useScreenInit();
  const [view, setView] = useState(screenInit.view ?? 'Grid');
  const [query, setQuery] = useState('');
  const [difficulty, setDifficulty] = useState('All levels');

  const filtered = useMemo(
    () =>
    courses.filter(
      (c) =>
      `${c.name} ${c.instructor}`.toLowerCase().includes(query.toLowerCase()) && (
      difficulty === 'All levels' || c.difficulty === difficulty)
    ),
    [query, difficulty]
  );

  return (
    <div className="space-y-6">
      <PageHeader
        title="Courses"
        description="Catalogue-level control: pricing, instructors, publication and certification."
        actions={
        <>
            <SegmentedControl options={['Grid', 'Table']} value={view} onChange={setView} layoutId="course-view" />
            <Button variant="primary" size="md" onClick={() => navigate('/courses/new')}>
              <PlusIcon className="h-3.5 w-3.5" />
              New course
            </Button>
          </>
        } />
      



      {filtered.length === 0 ?
        <Card className="rounded-3xl border border-line bg-surface shadow-soft overflow-hidden">
          <div className="flex flex-col gap-3 p-4 sm:flex-row sm:items-center sm:p-5">
            <SearchInput
              value={query}
              onChange={setQuery}
              placeholder="Search courses or instructors…"
              className="sm:max-w-sm sm:flex-1" />
            
            <Select
              label="Difficulty"
              value={difficulty}
              onChange={setDifficulty}
              options={['All levels', 'Beginner', 'Intermediate', 'Advanced']}
              className="sm:w-44" />
          </div>
          <EmptyState
            title="No courses found"
            description="Nothing matches that search. Try a different term or reset the difficulty filter."
            action={<Button onClick={() => {setQuery('');setDifficulty('All levels');}}>Reset</Button>} />
        </Card>
      : view === 'Grid' ?
      <>
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center mb-6">
          <SearchInput
            value={query}
            onChange={setQuery}
            placeholder="Search courses or instructors…"
            className="sm:max-w-sm sm:flex-1" />
          
          <Select
            label="Difficulty"
            value={difficulty}
            onChange={setDifficulty}
            options={['All levels', 'Beginner', 'Intermediate', 'Advanced']}
            className="sm:w-44" />
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
          {filtered.map((c) =>
        <Card key={c.id} className="group flex flex-col overflow-hidden hover:shadow-lift">
              <div className="flex items-start justify-between gap-3 border-b border-line bg-canvas/60 p-5">
                <Thumb label={c.thumb} className="h-11 w-11 rounded-xl text-[13px]" />
                <StatusBadge status={c.status} />
              </div>
              <div className="flex flex-1 flex-col p-5">
                <h3 className="text-[15px] font-semibold tracking-[-0.015em] text-ink">{c.name}</h3>
                <p className="mt-1.5 line-clamp-2 text-[13px] leading-6 text-muted">{c.description}</p>

                <div className="mt-4 flex flex-wrap items-center gap-2">
                  <Badge>{c.difficulty}</Badge>
                  <Badge>{c.language}</Badge>
                  {c.discount > 0 && <Badge tone="accent">{c.discount}% off</Badge>}
                </div>

                <dl className="mt-4 grid grid-cols-3 gap-3 border-t border-line pt-4 text-center">
                  <div>
                    <dt className="text-2xs text-muted">Modules</dt>
                    <dd className="text-[14px] font-semibold tabular-nums text-ink">{c.modules}</dd>
                  </div>
                  <div>
                    <dt className="text-2xs text-muted">Lessons</dt>
                    <dd className="text-[14px] font-semibold tabular-nums text-ink">{c.lessons}</dd>
                  </div>
                  <div>
                    <dt className="text-2xs text-muted">Students</dt>
                    <dd className="text-[14px] font-semibold tabular-nums text-ink">
                      {c.students.toLocaleString('en-US')}
                    </dd>
                  </div>
                </dl>

                <div className="mt-4">
                  <div className="mb-1.5 flex items-center justify-between text-2xs text-muted">
                    <span>Completion</span>
                    <span className="tabular-nums">{c.completion}%</span>
                  </div>
                  <Progress value={c.completion} />
                </div>

                <div className="mt-auto flex items-center justify-between gap-3 pt-5">
                  <span className="flex items-center gap-3 text-[12.5px] text-muted">
                    <span className="inline-flex items-center gap-1">
                      <StarIcon className="h-3.5 w-3.5" />
                      {c.rating > 0 ? c.rating.toFixed(1) : '—'}
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <ClockIcon className="h-3.5 w-3.5" />
                      {c.duration}
                    </span>
                  </span>
                  <span className="text-[14px] font-semibold tabular-nums text-ink">${c.price}</span>
                </div>

                <div className="mt-4 flex gap-2 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                  <Button size="sm" className="flex-1" onClick={() => navigate(`/courses/${c.id}`)}>
                    <EyeIcon className="h-3.5 w-3.5" />
                    Details
                  </Button>
                  <Button size="sm" aria-label="Duplicate course"><CopyIcon className="h-3.5 w-3.5" /></Button>
                  <Button size="sm" aria-label="Archive course"><ArchiveIcon className="h-3.5 w-3.5" /></Button>
                </div>
              </div>
            </Card>
          )}
        </div>
      </> :

      <Card className="rounded-3xl border border-line bg-surface shadow-soft overflow-hidden">
          <div className="flex flex-col gap-3 p-4 sm:flex-row sm:items-center sm:p-5">
            <SearchInput
              value={query}
              onChange={setQuery}
              placeholder="Search courses or instructors…"
              className="sm:max-w-xs sm:flex-1" />
            
            <Select
              label="Difficulty"
              value={difficulty}
              onChange={setDifficulty}
              options={['All levels', 'Beginner', 'Intermediate', 'Advanced']}
              className="sm:w-44" />
          </div>
          <div className="pt-0">
            <TableShell>
              <thead>
                <tr>
                  <Th>Course</Th>
                  <Th>Instructor</Th>
                  <Th>Level</Th>
                  <Th align="right">Price</Th>
                  <Th align="right">Modules</Th>
                  <Th align="right">Students</Th>
                  <Th>Completion</Th>
                  <Th align="right">Rating</Th>
                  <Th>Status</Th>
                </tr>
              </thead>
              <tbody>
                {filtered.map((c) =>
              <Tr key={c.id} onClick={() => navigate(`/courses/${c.id}`)}>
                    <Td>
                      <span className="flex items-center gap-3">
                        <Thumb label={c.thumb} />
                        <span className="truncate font-medium">{c.name}</span>
                      </span>
                    </Td>
                    <Td className="text-muted">{c.instructor}</Td>
                    <Td className="text-muted">{c.difficulty}</Td>
                    <Td align="right">${c.price}</Td>
                    <Td align="right">{c.modules}</Td>
                    <Td align="right">{c.students.toLocaleString('en-US')}</Td>
                    <Td>
                      <span className="flex items-center gap-2">
                        <Progress value={c.completion} className="w-20" />
                        <span className="text-[12.5px] tabular-nums text-muted">{c.completion}%</span>
                      </span>
                    </Td>
                    <Td align="right">{c.rating > 0 ? c.rating.toFixed(1) : '—'}</Td>
                    <Td><StatusBadge status={c.status} /></Td>
                  </Tr>
              )}
              </tbody>
            </TableShell>
          </div>
        </Card>
      }
    </div>);
}