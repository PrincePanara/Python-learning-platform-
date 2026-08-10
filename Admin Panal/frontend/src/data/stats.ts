import type { CompactStat, Stat } from '../types';

export const heroStats: Stat[] = [
{
  id: 'total-students',
  label: 'Total students',
  value: '48,219',
  delta: 12.4,
  trend: 'up',
  icon: 'Users',
  series: [22, 26, 25, 31, 34, 33, 39, 44, 47, 52, 58, 63],
  status: 'Healthy'
},
{
  id: 'active-students',
  label: 'Active students',
  value: '31,904',
  delta: 6.1,
  trend: 'up',
  icon: 'Activity',
  series: [30, 32, 31, 35, 33, 38, 40, 39, 44, 46, 48, 51],
  status: 'Healthy'
},
{
  id: 'completion-rate',
  label: 'Course completion rate',
  value: '68.4%',
  delta: 2.8,
  trend: 'up',
  icon: 'CircleCheck',
  series: [51, 53, 52, 56, 58, 57, 60, 62, 61, 65, 67, 68],
  status: 'On target'
},
{
  id: 'avg-quiz',
  label: 'Average quiz score',
  value: '76.2',
  delta: -1.4,
  trend: 'down',
  icon: 'Gauge',
  series: [80, 79, 81, 78, 77, 79, 78, 76, 77, 75, 76, 76],
  status: 'Watch'
},
{
  id: 'ai-conversations',
  label: 'AI tutor conversations',
  value: '128,470',
  delta: 34.7,
  trend: 'up',
  icon: 'Sparkles',
  series: [12, 18, 21, 27, 30, 38, 44, 52, 61, 74, 88, 104],
  status: 'Surging'
},
{
  id: 'revenue',
  label: 'Total revenue',
  value: '$412,860',
  delta: 9.2,
  trend: 'up',
  icon: 'CreditCard',
  series: [180, 196, 210, 205, 232, 248, 261, 280, 305, 330, 372, 412],
  status: 'Healthy'
}];


export const compactStats: CompactStat[] = [
{ id: 'new-today', label: 'New students today', value: '312', delta: 4.2, trend: 'up' },
{ id: 'courses', label: 'Total courses', value: '184', delta: 3.1, trend: 'up' },
{ id: 'modules', label: 'Total modules', value: '1,246', delta: 5.4, trend: 'up' },
{ id: 'lessons', label: 'Total lessons', value: '9,871', delta: 7.8, trend: 'up' },
{ id: 'practice', label: 'Practice questions', value: '42,310', delta: 11.2, trend: 'up' },
{ id: 'quiz-q', label: 'Quiz questions', value: '18,904', delta: 6.6, trend: 'up' },
{ id: 'notes', label: 'Total notes', value: '7,412', delta: 2.3, trend: 'up' },
{ id: 'resources', label: 'Total resources', value: '5,038', delta: 1.9, trend: 'up' },
{ id: 'assignments', label: 'Assignments submitted', value: '26,715', delta: 8.4, trend: 'up' },
{ id: 'certificates', label: 'Certificates issued', value: '11,203', delta: 5.1, trend: 'up' },
{ id: 'dau', label: 'Daily active users', value: '8,942', delta: 3.3, trend: 'up' },
{ id: 'wau', label: 'Weekly active users', value: '21,655', delta: 4.8, trend: 'up' },
{ id: 'mau', label: 'Monthly active users', value: '38,127', delta: 6.2, trend: 'up' },
{ id: 'avg-time', label: 'Avg. learning time', value: '42m 18s', delta: 1.1, trend: 'up' },
{ id: 'subs', label: 'Subscriptions', value: '9,486', delta: 7.4, trend: 'up' },
{ id: 'pending', label: 'Pending reviews', value: '64', delta: -12.5, trend: 'down' },
{ id: 'live', label: 'Live learners', value: '1,284', delta: 0, trend: 'flat' },
{ id: 'inactive', label: 'Inactive students', value: '4,902', delta: -2.7, trend: 'down' },
{ id: 'blocked', label: 'Blocked users', value: '38', delta: 0, trend: 'flat' },
{ id: 'registrations', label: 'New registrations', value: '1,905', delta: 9.6, trend: 'up' }];