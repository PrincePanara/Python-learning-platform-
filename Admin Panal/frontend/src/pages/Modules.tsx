import React, { useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { PlusIcon, SlidersHorizontalIcon, Trash2Icon, UploadCloudIcon, MoreHorizontalIcon } from 'lucide-react';
import { PageHeader } from '../components/layout/PageHeader';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { SearchInput, Select } from '../components/ui/Field';
import { StatusBadge } from '../components/ui/Badge';
import { Progress } from '../components/ui/Sparkline';
import { TableShell, Th, Td, Tr, Pagination, Thumb } from '../components/ui/Table';
import { EmptyState } from '../components/ui/States';
import { modules } from '../data/modules';
import type { StatusTone } from '../types';

const PAGE_SIZE = 6;

export function Modules() {
  const navigate = useNavigate();
  const [query, setQuery] = useState('');
  const [course, setCourse] = useState('All courses');
  const [status, setStatus] = useState('All statuses');
  const [sortKey, setSortKey] = useState<'name' | 'students' | 'completion'>('students');
  const [page, setPage] = useState(1);
  const [selected, setSelected] = useState<string[]>([]);

  const courseOptions = ['All courses', ...Array.from(new Set(modules.map((m) => m.course)))];

  const filtered = useMemo(() => {
    const rows = modules.filter((m) => {
      const matchQuery = `${m.name} ${m.course}`.toLowerCase().includes(query.toLowerCase());
      const matchCourse = course === 'All courses' || m.course === course;
      const matchStatus =
      status === 'All statuses' || m.status === status.toLowerCase().split(' ')[0] as StatusTone;
      return matchQuery && matchCourse && matchStatus;
    });
    return [...rows].sort((a, b) =>
    sortKey === 'name' ? a.name.localeCompare(b.name) : Number(b[sortKey]) - Number(a[sortKey])
    );
  }, [query, course, status, sortKey]);

  const pageCount = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const rows = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);
  const allSelected = rows.length > 0 && rows.every((r) => selected.includes(r.id));

  return (
    <div className="space-y-6">
      <PageHeader
        title="Modules"
        description="Every module across the catalogue, with content counts and learner progress."
        actions={
        <>
            <Button size="md">
              <SlidersHorizontalIcon className="h-3.5 w-3.5" />
              Advanced filters
            </Button>
            <Button variant="primary" size="md" onClick={() => navigate('/modules/new')}>
              <PlusIcon className="h-3.5 w-3.5" />
              New module
            </Button>
          </>
        } />
      

      <Card className="rounded-3xl border border-line bg-surface shadow-soft overflow-hidden">
        <div className="flex flex-col gap-3 p-4 sm:flex-row sm:items-center sm:p-5">
          <SearchInput
            value={query}
            onChange={(v) => {
              setQuery(v);
              setPage(1);
            }}
            placeholder="Search modules or courses…"
            className="sm:max-w-xs sm:flex-1" />
          
          <Select label="Course" value={course} onChange={setCourse} options={courseOptions} className="sm:w-52" />
          <Select
            label="Status"
            value={status}
            onChange={setStatus}
            options={['All statuses', 'Live', 'Draft', 'Review', 'Archived']}
            className="sm:w-40" />
          
          <Select
            label="Sort"
            value={sortKey}
            onChange={(v) => setSortKey(v as typeof sortKey)}
            options={['students', 'completion', 'name']}
            className="sm:w-36" />
          
        </div>

        {selected.length > 0 &&
        <div className="flex flex-wrap items-center gap-3 border-y border-line bg-canvas/60 px-5 py-3">
            <p className="text-[13px] font-medium text-ink">{selected.length} selected</p>
            <div className="flex flex-wrap gap-2">
              <Button size="sm">
                <UploadCloudIcon className="h-3.5 w-3.5" />
                Publish
              </Button>
              <Button size="sm">Duplicate</Button>
              <Button size="sm" variant="danger">
                <Trash2Icon className="h-3.5 w-3.5" />
                Delete
              </Button>
            </div>
            <button
            onClick={() => setSelected([])}
            className="ml-auto text-[12.5px] text-muted transition-colors duration-200 hover:text-ink">
            
              Clear
            </button>
          </div>
        }

        {rows.length === 0 ?
        <EmptyState
          title="No modules match those filters"
          description="Try a different course, status, or clear the search to see the full catalogue."
          action={
          <Button
            onClick={() => {
              setQuery('');
              setCourse('All courses');
              setStatus('All statuses');
            }}>
            
                Reset filters
              </Button>
          } /> :


        <>
            <TableShell>
              <thead>
                <tr>
                  <Th className="w-10">
                    <input
                    type="checkbox"
                    aria-label="Select all modules on this page"
                    checked={allSelected}
                    onChange={() =>
                    setSelected(allSelected ? [] : rows.map((r) => r.id))
                    }
                    className="h-3.5 w-3.5 rounded border-line accent-black" />
                  
                  </Th>
                  <Th sortable onSort={() => setSortKey('name')}>Module</Th>
                  <Th>Course</Th>
                  <Th align="right">Lessons</Th>
                  <Th align="right">Practice</Th>
                  <Th align="right">Quiz</Th>
                  <Th align="right">Notes</Th>
                  <Th align="right">Files</Th>
                  <Th sortable onSort={() => setSortKey('students')} align="right">Students</Th>
                  <Th sortable onSort={() => setSortKey('completion')}>Completion</Th>
                  <Th>Status</Th>
                  <Th>Updated</Th>
                  <Th align="right">Actions</Th>
                </tr>
              </thead>
              <tbody>
                {rows.map((m) =>
              <Tr key={m.id} onClick={() => navigate(`/modules/${m.id}`)}>
                    <Td>
                      <input
                    type="checkbox"
                    aria-label={`Select ${m.name}`}
                    checked={selected.includes(m.id)}
                    onClick={(e) => e.stopPropagation()}
                    onChange={() =>
                    setSelected((s) =>
                    s.includes(m.id) ? s.filter((i) => i !== m.id) : [...s, m.id]
                    )
                    }
                    className="h-3.5 w-3.5 rounded border-line accent-black" />
                  
                    </Td>
                    <Td>
                      <span className="flex items-center gap-3">
                        <Thumb label={m.thumb} />
                        <span className="min-w-0">
                          <span className="block truncate text-[13.5px] font-medium text-ink">{m.name}</span>
                          <span className="block text-2xs text-faint">Module {m.number}</span>
                        </span>
                      </span>
                    </Td>
                    <Td className="w-32 whitespace-normal break-words leading-snug text-xs text-muted">{m.course}</Td>
                    <Td align="right">{m.lessons}</Td>
                    <Td align="right">{m.practice}</Td>
                    <Td align="right">{m.quiz}</Td>
                    <Td align="right">{m.notes}</Td>
                    <Td align="right">{m.resources}</Td>
                    <Td align="right">{m.students.toLocaleString('en-US')}</Td>
                    <Td>
                      <span className="flex items-center gap-2">
                        <Progress value={m.completion} className="w-20" />
                        <span className="text-[12.5px] tabular-nums text-muted">{m.completion}%</span>
                      </span>
                    </Td>
                    <Td>
                      <StatusBadge status={m.status} />
                    </Td>
                    <Td className="whitespace-nowrap text-muted">{m.updated}</Td>
                    <Td align="right">
                      <button
                    aria-label={`Actions for ${m.name}`}
                    onClick={(e) => e.stopPropagation()}
                    className="rounded-lg p-1.5 text-faint opacity-0 transition-all duration-200 hover:bg-canvas hover:text-ink group-hover:opacity-100">
                    
                        <MoreHorizontalIcon className="h-4 w-4" />
                      </button>
                    </Td>
                  </Tr>
              )}
              </tbody>
            </TableShell>
            <Pagination page={page} pageCount={pageCount} total={filtered.length} onPage={setPage} />
          </>
        }
      </Card>
    </div>);

}