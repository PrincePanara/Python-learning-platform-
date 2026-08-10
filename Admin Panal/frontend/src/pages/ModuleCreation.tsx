import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Trash2Icon, PlusIcon, CodeIcon, ListChecksIcon, BookOpenIcon, UploadCloudIcon, ExternalLinkIcon, InfoIcon, EditIcon, CheckIcon, ArrowUpIcon, ArrowDownIcon, EyeIcon } from 'lucide-react';
import { PageHeader } from '../components/layout/PageHeader';
import { Card, CardHeader } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { TextField, TextArea, Select, SearchInput } from '../components/ui/Field';
import { TableShell, Th, Td, Tr } from '../components/ui/Table';
import { Badge, StatusBadge } from '../components/ui/Badge';
import { Modal } from '../components/ui/Overlay';
import { cn } from '../utils/cn';

type PracticeQuestion = {
  id: number;
  title: string;
  description?: string;
  difficulty: string;
  category: string;
  points: number;
  status: string;
  expectedOutput?: string;
};

type QuizQuestion = {
  id: number;
  question: string;
  topic: string;
  difficulty: string;
  options: string[];
  answer: string;
  explanation?: string;
};

type ResourceItem = {
  id: number;
  title: string;
  description?: string;
  type: string;
  url: string;
  fileName?: string;
};

const sections = ['Summary', 'Notes', 'Code Examples', 'Practice Questions', 'Quiz', 'Resources'];

export function ModuleCreation() {
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState('Summary');
  
  // Summary State
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [course, setCourse] = useState('Applied Machine Learning');
  const [difficulty, setDifficulty] = useState('Intermediate');
  
  // Notes State
  const [notes, setNotes] = useState('# Introduction to Python Lists\n\nLists are one of the most versatile data types in Python. They are mutable, ordered, and allow duplicate elements.\n\n### Key Concepts:\n- Indexing and Slicing\n- Appending and Removing\n- List Comprehension');
  
  // Code Examples State
  const [codeExamples, setCodeExamples] = useState([
    { id: 1, language: 'Python', code: 'squares = [x**2 for x in range(10)]\nprint(squares)' }
  ]);
  
  // Practice Questions State
  const [practiceQuestions, setPracticeQuestions] = useState<PracticeQuestion[]>([
    { id: 1, title: 'Filter Even Numbers', description: 'Write a function that filters even numbers from a list.', expectedOutput: '[2, 4, 6]', difficulty: 'Easy', category: 'List Comprehension', points: 10, status: 'Draft' },
    { id: 2, title: 'Flatten a 2D Matrix', description: 'Write a function to flatten a matrix.', expectedOutput: '[1, 2, 3, 4]', difficulty: 'Medium', category: 'Nested Loops', points: 20, status: 'Active' }
  ]);
  const [practiceDraft, setPracticeDraft] = useState<PracticeQuestion | null>(null);
  const [isPracticeModalOpen, setIsPracticeModalOpen] = useState(false);
  
  // Quiz State
  const [quizQuestions, setQuizQuestions] = useState<QuizQuestion[]>([
    { id: 1, question: 'Which of the following is NOT a valid way to create a list in Python?', topic: 'Syntax', difficulty: 'Easy', options: ['[]', 'list()', '{}', '[1, 2, 3]'], answer: '{}', explanation: '{} creates a dictionary or set, not a list.' }
  ]);
  const [quizDraft, setQuizDraft] = useState<QuizQuestion | null>(null);
  const [isQuizModalOpen, setIsQuizModalOpen] = useState(false);

  // Resources State
  const [resources, setResources] = useState<ResourceItem[]>([
    { id: 1, title: 'Python Official Documentation: Lists', description: 'Official guide on Python lists.', type: 'Link', url: 'https://docs.python.org/3/tutorial/datastructures.html' }
  ]);
  const [resourceDraft, setResourceDraft] = useState<ResourceItem | null>(null);
  const [isResourceModalOpen, setIsResourceModalOpen] = useState(false);

  const addCodeExample = () => {
    setCodeExamples([...codeExamples, { id: Date.now(), language: 'Python', code: '' }]);
  };

  const handleSavePractice = () => {
    if (!practiceDraft) return;
    if (practiceQuestions.find((q) => q.id === practiceDraft.id)) {
      setPracticeQuestions(practiceQuestions.map((q) => (q.id === practiceDraft.id ? practiceDraft : q)));
    } else {
      setPracticeQuestions([...practiceQuestions, { ...practiceDraft, id: Date.now() }]);
    }
    setIsPracticeModalOpen(false);
  };

  const handleSaveQuiz = () => {
    if (!quizDraft) return;
    if (quizQuestions.find((q) => q.id === quizDraft.id)) {
      setQuizQuestions(quizQuestions.map((q) => (q.id === quizDraft.id ? quizDraft : q)));
    } else {
      setQuizQuestions([...quizQuestions, { ...quizDraft, id: Date.now() }]);
    }
    setIsQuizModalOpen(false);
  };

  const handleSaveResource = () => {
    if (!resourceDraft) return;
    if (resources.find((r) => r.id === resourceDraft.id)) {
      setResources(resources.map((r) => (r.id === resourceDraft.id ? resourceDraft : r)));
    } else {
      setResources([...resources, { ...resourceDraft, id: Date.now() }]);
    }
    setIsResourceModalOpen(false);
  };

  const moveResource = (index: number, direction: 'up' | 'down') => {
    const newResources = [...resources];
    if (direction === 'up' && index > 0) {
      const temp = newResources[index - 1];
      newResources[index - 1] = newResources[index];
      newResources[index] = temp;
    } else if (direction === 'down' && index < newResources.length - 1) {
      const temp = newResources[index + 1];
      newResources[index + 1] = newResources[index];
      newResources[index] = temp;
    }
    setResources(newResources);
  };

  return (
    <div className="space-y-6">
      <PageHeader
        title="Create New Module"
        description="Build a comprehensive learning module with rich content, practice, and quizzes."
        actions={
          <div className="flex gap-3">
            <Button size="md" variant="ghost" onClick={() => navigate('/modules')}>Cancel</Button>
            <Button size="md">Save Draft</Button>
            <Button size="md" variant="primary">Publish Module</Button>
          </div>
        }
      />

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-[220px_minmax(0,1fr)]">
        <nav aria-label="Module sections" className="space-y-5">
          <div>
            <p className="px-2 pb-2 text-2xs font-semibold uppercase tracking-[0.08em] text-faint">Content Setup</p>
            <div className="space-y-0.5">
              {sections.map((item) => (
                <button
                  key={item}
                  onClick={() => setActiveSection(item)}
                  aria-current={activeSection === item ? 'page' : undefined}
                  className={cn(
                    'w-full rounded-full px-3 py-2 text-left text-[13.5px] font-medium transition-colors duration-200',
                    activeSection === item ? 'bg-surface text-ink shadow-soft' : 'text-muted hover:bg-surface/70 hover:text-ink'
                  )}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </nav>

        <div className="space-y-4">
          {activeSection === 'Summary' && (
            <Card className="rounded-3xl border border-line bg-surface shadow-soft">
              <CardHeader title="Module Summary" description="High-level details about this module." />
              <div className="space-y-4 p-5 sm:p-6">
                <TextField label="Module Title" value={title} onChange={setTitle} placeholder="e.g. Advanced Python Data Structures" />
                <TextArea label="Description" value={description} onChange={setDescription} placeholder="What will learners achieve in this module?" rows={3} />
                <div className="grid grid-cols-2 gap-4">
                  <Select
                    label="Parent Course"
                    value={course}
                    onChange={setCourse}
                    options={['Applied Machine Learning', 'Systems Design Foundations', 'Data Structures in Python', 'Unassigned']}
                  />
                  <Select
                    label="Difficulty"
                    value={difficulty}
                    onChange={setDifficulty}
                    options={['Beginner', 'Intermediate', 'Advanced']}
                  />
                </div>
              </div>
            </Card>
          )}

          {activeSection === 'Notes' && (
            <Card className="rounded-3xl border border-line bg-surface shadow-soft">
              <CardHeader title="Lesson Notes" description="The primary instructional content for this module (supports Markdown)." />
              <div className="p-5 sm:p-6">
                <div className="mb-3 flex items-center justify-between rounded-t-2xl border border-line bg-canvas px-4 py-2">
                  <div className="flex gap-2">
                    <span className="text-2xs font-semibold text-faint">MARKDOWN EDITOR</span>
                  </div>
                  <Button size="sm" variant="ghost"><EditIcon className="h-3.5 w-3.5 mr-1" /> Preview</Button>
                </div>
                <TextArea label="" value={notes} onChange={setNotes} rows={16} className="font-mono text-[13px]" />
              </div>
            </Card>
          )}

          {activeSection === 'Code Examples' && (
            <div className="space-y-4">
              {codeExamples.map((example, idx) => (
                <Card key={example.id} className="rounded-3xl border border-line bg-surface shadow-soft">
                  <div className="flex items-center justify-between border-b border-line px-5 py-3 sm:px-6">
                    <h3 className="text-[13.5px] font-medium text-ink">Snippet {idx + 1}</h3>
                    <Button size="sm" variant="ghost" onClick={() => setCodeExamples(codeExamples.filter(c => c.id !== example.id))}>
                      <Trash2Icon className="h-4 w-4 text-red-500" />
                    </Button>
                  </div>
                  <div className="space-y-4 p-5 sm:p-6">
                    <Select
                      label="Language"
                      value={example.language}
                      onChange={(val) => {
                        const newEx = [...codeExamples];
                        newEx[idx].language = val;
                        setCodeExamples(newEx);
                      }}
                      options={['Python', 'JavaScript', 'TypeScript', 'SQL', 'Bash', 'JSON']}
                    />
                    <TextArea
                      label="Code"
                      value={example.code}
                      onChange={(val) => {
                        const newEx = [...codeExamples];
                        newEx[idx].code = val;
                        setCodeExamples(newEx);
                      }}
                      rows={6}
                      className="font-mono text-[13px]"
                    />
                  </div>
                </Card>
              ))}
              <Button variant="secondary" className="w-full justify-center rounded-3xl border-dashed py-6 text-muted hover:text-ink" onClick={addCodeExample}>
                <PlusIcon className="h-4 w-4 mr-2" /> Add Code Snippet
              </Button>
            </div>
          )}

          {activeSection === 'Practice Questions' && (
            <Card className="rounded-3xl border border-line bg-surface shadow-soft overflow-hidden">
              <CardHeader 
                title="Practice Questions" 
                description="Coding challenges or exercises for this module."
                action={
                  <Button 
                    size="sm" 
                    variant="primary" 
                    onClick={() => {
                      setPracticeDraft({ id: 0, title: '', description: '', expectedOutput: '', difficulty: 'Easy', category: 'General', points: 10, status: 'Draft' });
                      setIsPracticeModalOpen(true);
                    }}>
                    <PlusIcon className="h-3.5 w-3.5" />New Question
                  </Button>
                }
              />
              <TableShell>
                <thead>
                  <tr>
                    <Th>Title</Th>
                    <Th>Category</Th>
                    <Th>Difficulty</Th>
                    <Th>Points</Th>
                    <Th>Status</Th>
                    <Th align="right">Actions</Th>
                  </tr>
                </thead>
                <tbody>
                  {practiceQuestions.length === 0 ? (
                    <tr>
                      <Td colSpan={6} className="text-center py-8 text-muted">No practice questions added yet.</Td>
                    </tr>
                  ) : practiceQuestions.map((q) => (
                    <Tr key={q.id}>
                      <Td className="font-medium text-ink">{q.title}</Td>
                      <Td className="text-muted">{q.category}</Td>
                      <Td>
                        <Badge tone={q.difficulty === 'Easy' ? 'accent' : q.difficulty === 'Medium' ? 'solid' : 'neutral'}>
                          {q.difficulty}
                        </Badge>
                      </Td>
                      <Td className="tabular-nums text-muted">{q.points}</Td>
                      <Td>
                        <StatusBadge status={q.status === 'Active' ? 'live' : 'draft'} />
                      </Td>
                      <Td align="right">
                        <div className="flex justify-end gap-1">
                          <Button 
                            size="sm" 
                            variant="ghost" 
                            onClick={() => {
                              setPracticeDraft(q);
                              setIsPracticeModalOpen(true);
                            }}>
                            Edit
                          </Button>
                          <Button 
                            size="sm" 
                            variant="ghost"
                            onClick={() => setPracticeQuestions(practiceQuestions.filter(p => p.id !== q.id))}
                            className="text-red-500 hover:text-red-600">
                            <Trash2Icon className="h-3.5 w-3.5" />
                          </Button>
                        </div>
                      </Td>
                    </Tr>
                  ))}
                </tbody>
              </TableShell>
            </Card>
          )}

          {activeSection === 'Quiz' && (
            <Card className="rounded-3xl border border-line bg-surface shadow-soft overflow-hidden">
              <CardHeader 
                title="Quiz Questions" 
                description="Multiple-choice assessments to test comprehension."
                action={
                  <Button 
                    size="sm" 
                    variant="primary"
                    onClick={() => {
                      setQuizDraft({ id: 0, question: '', options: ['', '', '', ''], answer: '', explanation: '', topic: 'General', difficulty: 'Easy' });
                      setIsQuizModalOpen(true);
                    }}>
                    <PlusIcon className="h-3.5 w-3.5" />New MCQ
                  </Button>
                }
              />
              <TableShell>
                <thead>
                  <tr>
                    <Th>Question</Th>
                    <Th>Topic</Th>
                    <Th>Difficulty</Th>
                    <Th align="right">Actions</Th>
                  </tr>
                </thead>
                <tbody>
                  {quizQuestions.length === 0 ? (
                    <tr>
                      <Td colSpan={4} className="text-center py-8 text-muted">No quiz questions added yet.</Td>
                    </tr>
                  ) : quizQuestions.map((q) => (
                    <Tr key={q.id}>
                      <Td className="max-w-xs truncate font-medium text-ink">{q.question}</Td>
                      <Td className="text-muted">{q.topic}</Td>
                      <Td>
                        <Badge tone="neutral">{q.difficulty}</Badge>
                      </Td>
                      <Td align="right">
                        <div className="flex justify-end gap-1">
                          <Button 
                            size="sm" 
                            variant="ghost"
                            onClick={() => {
                              setQuizDraft(q);
                              setIsQuizModalOpen(true);
                            }}>
                            Edit
                          </Button>
                          <Button size="sm" variant="ghost" onClick={() => setQuizQuestions(quizQuestions.filter(x => x.id !== q.id))} className="text-red-500 hover:text-red-600"><Trash2Icon className="h-3.5 w-3.5" /></Button>
                        </div>
                      </Td>
                    </Tr>
                  ))}
                </tbody>
              </TableShell>
            </Card>
          )}

          {activeSection === 'Resources' && (
            <Card className="rounded-3xl border border-line bg-surface shadow-soft overflow-hidden">
              <CardHeader 
                title="Learning Resources" 
                description="External links, PDFs, or files to supplement the lesson."
                action={
                  <Button 
                    size="sm" 
                    variant="primary"
                    onClick={() => {
                      setResourceDraft({ id: 0, title: '', description: '', type: 'Link', url: '', fileName: '' });
                      setIsResourceModalOpen(true);
                    }}>
                    <PlusIcon className="h-3.5 w-3.5" />Add Resource
                  </Button>
                }
              />
              <TableShell>
                <thead>
                  <tr>
                    <Th>Title</Th>
                    <Th>Type</Th>
                    <Th>Link / Path</Th>
                    <Th align="right">Actions</Th>
                  </tr>
                </thead>
                <tbody>
                  {resources.length === 0 ? (
                    <tr>
                      <Td colSpan={4} className="text-center py-8 text-muted">No resources added yet.</Td>
                    </tr>
                  ) : resources.map((r, index) => (
                    <Tr key={r.id}>
                      <Td className="font-medium text-ink">
                        <div>
                          <p>{r.title}</p>
                          {r.description && <p className="text-[12px] font-normal text-muted mt-0.5">{r.description}</p>}
                        </div>
                      </Td>
                      <Td>
                        <Badge tone="neutral">{r.type}</Badge>
                      </Td>
                      <Td className="max-w-xs truncate text-muted">
                        {r.type === 'Link' || r.type === 'Video' ? (
                          <a href={r.url} target="_blank" rel="noreferrer" className="hover:underline flex items-center gap-1">
                            {r.url} <ExternalLinkIcon className="h-3 w-3" />
                          </a>
                        ) : (
                          <span className="flex items-center gap-1">
                            {r.fileName || 'Uploaded file'} 
                          </span>
                        )}
                      </Td>
                      <Td align="right">
                        <div className="flex justify-end gap-1">
                          <Button size="sm" variant="ghost" disabled={index === 0} onClick={() => moveResource(index, 'up')}>
                            <ArrowUpIcon className="h-3.5 w-3.5" />
                          </Button>
                          <Button size="sm" variant="ghost" disabled={index === resources.length - 1} onClick={() => moveResource(index, 'down')}>
                            <ArrowDownIcon className="h-3.5 w-3.5" />
                          </Button>
                          <Button size="sm" variant="ghost">
                            <EyeIcon className="h-3.5 w-3.5 mr-1" /> Preview
                          </Button>
                          <Button 
                            size="sm" 
                            variant="ghost"
                            onClick={() => {
                              setResourceDraft(r);
                              setIsResourceModalOpen(true);
                            }}>
                            Edit
                          </Button>
                          <Button 
                            size="sm" 
                            variant="ghost" 
                            onClick={() => setResources(resources.filter(x => x.id !== r.id))}
                            className="text-red-500 hover:text-red-600">
                            <Trash2Icon className="h-3.5 w-3.5" />
                          </Button>
                        </div>
                      </Td>
                    </Tr>
                  ))}
                </tbody>
              </TableShell>
            </Card>
          )}
        </div>
      </div>

      {/* Modals */}
      <Modal
        open={isPracticeModalOpen}
        onClose={() => setIsPracticeModalOpen(false)}
        title={practiceDraft?.id === 0 ? 'New Practice Question' : 'Edit Practice Question'}
        description="Add a coding challenge for this module."
        footer={
          <>
            <Button variant="ghost" onClick={() => setIsPracticeModalOpen(false)}>Cancel</Button>
            <Button variant="primary" onClick={handleSavePractice}>Save Question</Button>
          </>
        }
      >
        {practiceDraft && (
          <div className="space-y-4">
            <TextField 
              label="Title" 
              value={practiceDraft.title} 
              onChange={(v) => setPracticeDraft({ ...practiceDraft, title: v })} 
              placeholder="e.g. Reverse a String" 
            />
            <TextArea 
              label="Description" 
              value={practiceDraft.description || ''} 
              onChange={(v) => setPracticeDraft({ ...practiceDraft, description: v })} 
              rows={3} 
            />
            <div className="grid grid-cols-2 gap-4">
              <Select 
                label="Difficulty" 
                value={practiceDraft.difficulty} 
                onChange={(v) => setPracticeDraft({ ...practiceDraft, difficulty: v })} 
                options={['Easy', 'Medium', 'Hard']} 
              />
              <Select 
                label="Status" 
                value={practiceDraft.status} 
                onChange={(v) => setPracticeDraft({ ...practiceDraft, status: v })} 
                options={['Draft', 'Active']} 
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <TextField 
                label="Category" 
                value={practiceDraft.category} 
                onChange={(v) => setPracticeDraft({ ...practiceDraft, category: v })} 
              />
              <TextField 
                label="Points" 
                type="number"
                value={practiceDraft.points.toString()} 
                onChange={(v) => setPracticeDraft({ ...practiceDraft, points: parseInt(v) || 0 })} 
              />
            </div>
            <TextArea 
              label="Expected Output / Test Cases" 
              value={practiceDraft.expectedOutput || ''} 
              onChange={(v) => setPracticeDraft({ ...practiceDraft, expectedOutput: v })} 
              rows={2} 
              className="font-mono text-[13px]"
            />
          </div>
        )}
      </Modal>

      <Modal
        open={isQuizModalOpen}
        onClose={() => setIsQuizModalOpen(false)}
        title={quizDraft?.id === 0 ? 'New MCQ' : 'Edit MCQ'}
        description="Add a multiple-choice question."
        footer={
          <>
            <Button variant="ghost" onClick={() => setIsQuizModalOpen(false)}>Cancel</Button>
            <Button variant="primary" onClick={handleSaveQuiz}>Save MCQ</Button>
          </>
        }
      >
        {quizDraft && (
          <div className="space-y-4">
            <TextArea 
              label="Question" 
              value={quizDraft.question} 
              onChange={(v) => setQuizDraft({ ...quizDraft, question: v })} 
              rows={2} 
            />
            <div className="space-y-2">
              <p className="text-[13px] font-medium text-ink">Options</p>
              {[0, 1, 2, 3].map((i) => (
                <TextField 
                  key={i}
                  label="" 
                  placeholder={`Option ${String.fromCharCode(65 + i)}`}
                  value={quizDraft.options[i] || ''} 
                  onChange={(v) => {
                    const newOpts = [...quizDraft.options];
                    newOpts[i] = v;
                    setQuizDraft({ ...quizDraft, options: newOpts });
                  }} 
                />
              ))}
            </div>
            <Select 
              label="Correct Answer" 
              value={quizDraft.answer} 
              onChange={(v) => setQuizDraft({ ...quizDraft, answer: v })} 
              options={quizDraft.options.filter(Boolean).length > 0 ? quizDraft.options.filter(Boolean) : ['(Fill in options first)']} 
            />
            <TextArea 
              label="Explanation (Optional)" 
              value={quizDraft.explanation || ''} 
              onChange={(v) => setQuizDraft({ ...quizDraft, explanation: v })} 
              rows={2} 
            />
            <div className="grid grid-cols-2 gap-4">
              <Select 
                label="Difficulty" 
                value={quizDraft.difficulty} 
                onChange={(v) => setQuizDraft({ ...quizDraft, difficulty: v })} 
                options={['Easy', 'Medium', 'Hard']} 
              />
              <TextField 
                label="Topic" 
                value={quizDraft.topic} 
                onChange={(v) => setQuizDraft({ ...quizDraft, topic: v })} 
              />
            </div>
          </div>
        )}
      </Modal>

      <Modal
        open={isResourceModalOpen}
        onClose={() => setIsResourceModalOpen(false)}
        title={resourceDraft?.id === 0 ? 'Add Resource' : 'Edit Resource'}
        description="Attach a supplementary file or link."
        footer={
          <>
            <Button variant="ghost" onClick={() => setIsResourceModalOpen(false)}>Cancel</Button>
            <Button variant="primary" onClick={handleSaveResource}>Save Resource</Button>
          </>
        }
      >
        {resourceDraft && (
          <div className="space-y-4">
            <TextField 
              label="Resource Title" 
              value={resourceDraft.title} 
              onChange={(v) => setResourceDraft({ ...resourceDraft, title: v })} 
              placeholder="e.g. Reference Guide" 
            />
            <TextArea 
              label="Description (Optional)" 
              value={resourceDraft.description || ''} 
              onChange={(v) => setResourceDraft({ ...resourceDraft, description: v })} 
              rows={2} 
            />
            <Select 
              label="Resource Type" 
              value={resourceDraft.type} 
              onChange={(v) => setResourceDraft({ ...resourceDraft, type: v })} 
              options={['Link', 'Video', 'PDF', 'Image', 'Document']} 
            />
            
            {(resourceDraft.type === 'Link' || resourceDraft.type === 'Video') ? (
              <TextField 
                label="URL" 
                value={resourceDraft.url} 
                onChange={(v) => setResourceDraft({ ...resourceDraft, url: v })} 
                placeholder="https://..." 
              />
            ) : (
              <div className="space-y-1.5">
                <label className="block text-[13px] font-medium text-ink">Upload File</label>
                <div className="flex items-center justify-center rounded-2xl border-2 border-dashed border-line bg-canvas p-8 text-center transition-colors hover:border-ink/30">
                  <div className="space-y-2">
                    <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-surface shadow-sm">
                      <UploadCloudIcon className="h-5 w-5 text-muted" />
                    </div>
                    <div className="text-[13.5px]">
                      <span className="font-semibold text-ink">Click to upload</span>
                      <span className="text-muted"> or drag and drop</span>
                    </div>
                    <p className="text-[12px] text-muted">
                      {resourceDraft.type === 'PDF' ? 'PDF (max 20MB)' : resourceDraft.type === 'Image' ? 'PNG, JPG, GIF (max 5MB)' : 'DOCX, PPTX (max 20MB)'}
                    </p>
                  </div>
                </div>
                {/* Mock file selection for demonstration */}
                {resourceDraft.fileName && (
                  <p className="text-[12px] font-medium text-green-600 mt-2 flex items-center gap-1">
                    <CheckIcon className="h-3.5 w-3.5" /> Attached: {resourceDraft.fileName}
                  </p>
                )}
                {!resourceDraft.fileName && (
                  <div className="mt-2 text-center">
                    <Button 
                      size="sm" 
                      variant="ghost" 
                      onClick={() => setResourceDraft({ ...resourceDraft, fileName: `mock-${resourceDraft.type.toLowerCase()}-file.${resourceDraft.type === 'PDF' ? 'pdf' : 'png'}` })}>
                      (Mock: Attach file)
                    </Button>
                  </div>
                )}
              </div>
            )}
          </div>
        )}
      </Modal>
    </div>
  );
}
