import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { PlusIcon, EyeIcon, CopyIcon, ArchiveIcon } from 'lucide-react';
import { PageHeader } from '../components/layout/PageHeader';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Badge } from '../components/ui/Badge';
import { SearchInput, Select } from '../components/ui/Field';
import { TableShell, Th, Td, Tr } from '../components/ui/Table';
import { EmptyState } from '../components/ui/States';

export function Practice() {
  const navigate = useNavigate();
  const [problems, setProblems] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState('');
  const [difficulty, setDifficulty] = useState('All levels');

  useEffect(() => {
    const fetchProblems = async () => {
      try {
        const res = await fetch('http://localhost:8000/api/v1/problems');
        if (res.ok) {
          const data = await res.json();
          setProblems(data);
        }
      } catch (err) {
        console.error('Failed to fetch problems', err);
      } finally {
        setLoading(false);
      }
    };
    fetchProblems();
  }, []);

  const filtered = problems.filter((p) => {
    const matchesQuery = p.title.toLowerCase().includes(query.toLowerCase()) || 
                         p.tags.some((t: string) => t.toLowerCase().includes(query.toLowerCase()));
    const matchesDifficulty = difficulty === 'All levels' || p.difficulty === difficulty;
    return matchesQuery && matchesDifficulty;
  });

  return (
    <div className="space-y-6">
      <PageHeader
        title="Practice Problems"
        description="Manage coding challenges, test cases, and difficulty levels."
        actions={
          <Button variant="primary" size="md" onClick={() => navigate('/practice/new')}>
            <PlusIcon className="h-3.5 w-3.5" />
            New problem
          </Button>
        }
      />

      <Card className="rounded-3xl border border-line bg-surface shadow-soft overflow-hidden">
        <div className="flex flex-col gap-3 p-4 sm:flex-row sm:items-center sm:p-5">
          <SearchInput
            value={query}
            onChange={setQuery}
            placeholder="Search problems or tags..."
            className="sm:max-w-xs sm:flex-1"
          />
          
          <Select
            label="Difficulty"
            value={difficulty}
            onChange={setDifficulty}
            options={['All levels', 'Easy', 'Medium', 'Hard']}
            className="sm:w-44"
          />
        </div>

        {loading ? (
          <div className="p-12 text-center text-muted">Loading problems...</div>
        ) : filtered.length === 0 ? (
          <EmptyState
            title="No problems found"
            description="Nothing matches that search. Try a different term or reset the filters."
            action={<Button onClick={() => { setQuery(''); setDifficulty('All levels'); }}>Reset</Button>}
          />
        ) : (
          <div className="pt-0">
            <TableShell>
              <thead>
                <tr>
                  <Th>Number</Th>
                  <Th>Title</Th>
                  <Th>Difficulty</Th>
                  <Th>Acceptance</Th>
                  <Th>Company</Th>
                  <Th>XP Reward</Th>
                  <Th align="right">Actions</Th>
                </tr>
              </thead>
              <tbody>
                {filtered.map((p) => (
                  <Tr key={p.id}>
                    <Td className="font-medium">{p.number}</Td>
                    <Td>
                      <div className="flex flex-col">
                        <span className="truncate font-medium">{p.title}</span>
                        <div className="flex gap-1 mt-1">
                          {p.tags.slice(0, 2).map((t: string) => (
                            <span key={t} className="text-[10px] bg-canvas text-muted px-1.5 py-0.5 rounded border border-line">{t}</span>
                          ))}
                          {p.tags.length > 2 && <span className="text-[10px] text-faint">+{p.tags.length - 2}</span>}
                        </div>
                      </div>
                    </Td>
                    <Td>
                      <Badge 
                        tone={p.difficulty === 'Easy' ? 'success' : p.difficulty === 'Medium' ? 'warning' : 'critical'}
                      >
                        {p.difficulty}
                      </Badge>
                    </Td>
                    <Td className="text-muted">{p.acceptance}</Td>
                    <Td className="text-muted">{p.company}</Td>
                    <Td className="font-medium">+{p.xp}</Td>
                    <Td align="right">
                      <div className="flex justify-end gap-2">
                        <Button size="sm" onClick={() => navigate(`/practice/${p.id}`)}>
                          <EyeIcon className="h-3.5 w-3.5" />
                        </Button>
                      </div>
                    </Td>
                  </Tr>
                ))}
              </tbody>
            </TableShell>
          </div>
        )}
      </Card>
    </div>
  );
}
