import type { ModuleRow } from '../types';

export const modules: ModuleRow[] = [
{
  id: 'm-01',
  name: 'Foundations of Neural Networks',
  course: 'Applied Machine Learning',
  number: 1,
  lessons: 14,
  practice: 62,
  quiz: 24,
  notes: 9,
  resources: 12,
  students: 7420,
  completion: 82,
  status: 'live',
  created: 'Mar 4, 2026',
  updated: 'Aug 2, 2026',
  thumb: 'FN'
},
{
  id: 'm-02',
  name: 'Gradient Descent & Optimizers',
  course: 'Applied Machine Learning',
  number: 4,
  lessons: 11,
  practice: 48,
  quiz: 20,
  notes: 7,
  resources: 8,
  students: 6890,
  completion: 74,
  status: 'live',
  created: 'Mar 18, 2026',
  updated: 'Jul 29, 2026',
  thumb: 'GD'
},
{
  id: 'm-03',
  name: 'Retrieval Augmented Generation',
  course: 'LLM App Architecture',
  number: 3,
  lessons: 9,
  practice: 34,
  quiz: 16,
  notes: 6,
  resources: 15,
  students: 4120,
  completion: 61,
  status: 'live',
  created: 'Apr 2, 2026',
  updated: 'Aug 6, 2026',
  thumb: 'RA'
},
{
  id: 'm-04',
  name: 'Prompt Patterns & Evaluation',
  course: 'Prompt Engineering Pro',
  number: 2,
  lessons: 8,
  practice: 40,
  quiz: 18,
  notes: 5,
  resources: 7,
  students: 5340,
  completion: 88,
  status: 'live',
  created: 'Feb 11, 2026',
  updated: 'Jul 14, 2026',
  thumb: 'PP'
},
{
  id: 'm-05',
  name: 'Sharding & Partitioning',
  course: 'Systems Design Foundations',
  number: 6,
  lessons: 10,
  practice: 51,
  quiz: 22,
  notes: 8,
  resources: 9,
  students: 6180,
  completion: 57,
  status: 'draft',
  created: 'May 21, 2026',
  updated: 'Aug 7, 2026',
  thumb: 'SP'
},
{
  id: 'm-06',
  name: 'Trees, Tries & Graphs',
  course: 'Data Structures in Python',
  number: 5,
  lessons: 13,
  practice: 74,
  quiz: 28,
  notes: 11,
  resources: 6,
  students: 4910,
  completion: 69,
  status: 'live',
  created: 'Jan 9, 2026',
  updated: 'Jun 30, 2026',
  thumb: 'TG'
},
{
  id: 'm-07',
  name: 'Fine-tuning & LoRA',
  course: 'LLM App Architecture',
  number: 7,
  lessons: 7,
  practice: 26,
  quiz: 14,
  notes: 4,
  resources: 11,
  students: 2860,
  completion: 41,
  status: 'review',
  created: 'Jun 15, 2026',
  updated: 'Aug 8, 2026',
  thumb: 'FL'
},
{
  id: 'm-08',
  name: 'Model Deployment Basics',
  course: 'Applied Machine Learning',
  number: 9,
  lessons: 12,
  practice: 39,
  quiz: 19,
  notes: 6,
  resources: 10,
  students: 3410,
  completion: 34,
  status: 'archived',
  created: 'Dec 2, 2025',
  updated: 'Apr 18, 2026',
  thumb: 'MD'
}];


export const moduleLessons = [
{ id: 'l1', number: 1, title: 'What a neuron actually computes', duration: '12:40', difficulty: 'Easy', status: 'live', ai: false },
{ id: 'l2', number: 2, title: 'Activation functions in practice', duration: '18:05', difficulty: 'Easy', status: 'live', ai: true },
{ id: 'l3', number: 3, title: 'Forward propagation walkthrough', duration: '22:11', difficulty: 'Medium', status: 'live', ai: false },
{ id: 'l4', number: 4, title: 'Backpropagation from first principles', duration: '31:48', difficulty: 'Hard', status: 'review', ai: true },
{ id: 'l5', number: 5, title: 'Weight initialisation strategies', duration: '14:22', difficulty: 'Medium', status: 'draft', ai: false },
{ id: 'l6', number: 6, title: 'Real world: fraud detection net', duration: '26:03', difficulty: 'Hard', status: 'draft', ai: true }];


export const practiceQuestions = [
{ id: 'p1', question: 'Which activation function avoids vanishing gradients for deep nets?', type: 'Multiple choice', difficulty: 'Easy', points: 5, tags: ['activations'] },
{ id: 'p2', question: 'Implement mini-batch gradient descent for a linear model.', type: 'Coding', difficulty: 'Hard', points: 20, tags: ['optimization', 'python'] },
{ id: 'p3', question: 'The derivative of ReLU at x < 0 is ______.', type: 'Fill in the blank', difficulty: 'Easy', points: 3, tags: ['calculus'] },
{ id: 'p4', question: 'Predict the output shape after a 3×3 conv with stride 2.', type: 'Output prediction', difficulty: 'Medium', points: 10, tags: ['cnn'] },
{ id: 'p5', question: 'Why does Adam converge faster than vanilla SGD here?', type: 'Multiple choice', difficulty: 'Medium', points: 8, tags: ['optimizers'] }];


export const moduleResources = [
{ id: 'r1', name: 'Neural-Nets-Cheatsheet.pdf', kind: 'PDF', size: '2.4 MB', downloads: 4210, version: 'v3' },
{ id: 'r2', name: 'Lecture-Deck-Module-1.pptx', kind: 'PPT', size: '11.8 MB', downloads: 2870, version: 'v2' },
{ id: 'r3', name: 'starter-notebook.zip', kind: 'ZIP', size: '840 KB', downloads: 3940, version: 'v5' },
{ id: 'r4', name: 'github.com/atlas/nn-lab', kind: 'GitHub', size: '—', downloads: 1620, version: 'main' },
{ id: 'r5', name: 'Backprop-Derivation.docx', kind: 'Word', size: '620 KB', downloads: 980, version: 'v1' }];