export type Trend = 'up' | 'down' | 'flat';

export type StatusTone = 'live' | 'draft' | 'archived' | 'review' | 'neutral';

export interface Stat {
  id: string;
  label: string;
  value: string;
  delta: number;
  trend: Trend;
  icon: string;
  series: number[];
  status?: string;
  hint?: string;
}

export interface CompactStat {
  id: string;
  label: string;
  value: string;
  delta: number;
  trend: Trend;
}

export interface ModuleRow {
  id: string;
  name: string;
  course: string;
  number: number;
  lessons: number;
  practice: number;
  quiz: number;
  notes: number;
  resources: number;
  students: number;
  completion: number;
  status: StatusTone;
  created: string;
  updated: string;
  thumb: string;
}

export interface CourseRow {
  id: string;
  name: string;
  description: string;
  instructor: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  language: string;
  price: number;
  discount: number;
  status: StatusTone;
  duration: string;
  modules: number;
  lessons: number;
  students: number;
  completion: number;
  rating: number;
  reviews: number;
  thumb: string;
}

export interface ActivityItem {
  id: string;
  type: string;
  actor: string;
  detail: string;
  time: string;
  icon: string;
}