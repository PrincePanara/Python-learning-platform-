import React, { useState } from 'react';
import { DownloadIcon } from 'lucide-react';
import { PageHeader } from '../components/layout/PageHeader';
import { Card, CardHeader } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Tabs, SegmentedControl } from '../components/ui/Tabs';
import { CompactStatCard } from '../components/dashboard/StatCard';
import { Progress } from '../components/ui/Sparkline';
import { Badge } from '../components/ui/Badge';
import {
  GrowthChart,
  HoursChart,
  ScoreDistribution,
  RevenueChart,
  DeviceDonut,
  RankedList,
  FunnelChart,
  CountryList } from
'../components/charts/Charts';
import { LearningHeatmap } from '../components/charts/Heatmap';
// Empty data fallbacks to replace removed mock data
const studentGrowth: any[] = [];
const learningHours: any[] = [];
const quizPerformance: any[] = [];
const revenueSeries: any[] = [];
const deviceUsage: any[] = [];
const popularCourses: any[] = [];
const completionFunnel: any[] = [];
const countryDistribution: any[] = [];
import { useScreenInit } from '../useScreenInit.js';

const studentMetrics = [
{ id: 's1', label: 'Total students', value: '48,219', delta: 12.4, trend: 'up' as const },
{ id: 's2', label: 'Average score', value: '76.2', delta: -1.4, trend: 'down' as const },
{ id: 's3', label: 'Completion rate', value: '68.4%', delta: 2.8, trend: 'up' as const },
{ id: 's4', label: 'Study time / learner', value: '6h 12m', delta: 3.9, trend: 'up' as const },
{ id: 's5', label: 'Attendance', value: '81.3%', delta: 1.2, trend: 'up' as const },
{ id: 's6', label: 'AI tutor usage', value: '62.7%', delta: 18.4, trend: 'up' as const }];


const platformMetrics = [
{ id: 'p1', label: 'Retention (30d)', value: '74.1%', delta: 2.1, trend: 'up' as const },
{ id: 'p2', label: 'Engagement score', value: '8.4 / 10', delta: 0.6, trend: 'up' as const },
{ id: 'p3', label: 'Conversion rate', value: '4.9%', delta: -0.4, trend: 'down' as const },
{ id: 'p4', label: 'Traffic (30d)', value: '842k', delta: 11.7, trend: 'up' as const },
{ id: 'p5', label: 'Course growth', value: '+18', delta: 6.3, trend: 'up' as const },
{ id: 'p6', label: 'Revenue (30d)', value: '$64,100', delta: 9.2, trend: 'up' as const }];


const weakTopics = [
{ name: 'Backpropagation maths', learners: 2140 },
{ name: 'Consistency models', learners: 1860 },
{ name: 'Vector index tuning', learners: 1420 },
{ name: 'Dynamic programming', learners: 1180 }];


const strongTopics = [
{ name: 'Prompt patterns', learners: 4820 },
{ name: 'Python fundamentals', learners: 4310 },
{ name: 'REST API design', learners: 3740 },
{ name: 'Data cleaning', learners: 3120 }];


const mostViewed = [
{ label: 'Course', name: 'Applied Machine Learning', views: '128,420' },
{ label: 'Module', name: 'Foundations of Neural Networks', views: '74,180' },
{ label: 'Lesson', name: 'Backpropagation from first principles', views: '41,905' },
{ label: 'Resource', name: 'Neural-Nets-Cheatsheet.pdf', views: '38,210' },
{ label: 'Notes', name: 'Optimizers at a glance', views: '29,640' },
{ label: 'Question', name: 'Predict the conv output shape', views: '24,118' }];


export function Analytics() {
  const screenInit = useScreenInit();
  const [tab, setTab] = useState(screenInit.tab ?? 'Students');
  const [range, setRange] = useState('12M');

  return (
    <div className="space-y-6">
      <PageHeader
        title="Analytics"
        description="Learner outcomes and platform performance, measured the same way every week."
        actions={
        <>
            <SegmentedControl options={['7D', '30D', '12M']} value={range} onChange={setRange} layoutId="an-range" />
            <Button size="md">
              <DownloadIcon className="h-3.5 w-3.5" />
              Export CSV
            </Button>
          </>
        } />
      

      <Tabs tabs={['Students', 'Platform', 'Content']} active={tab} onChange={setTab} layoutId="analytics-tab" />

      {tab === 'Students' &&
      <div className="space-y-4">
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
            {studentMetrics.map((m) =>
          <CompactStatCard key={m.id} stat={m} />
          )}
          </div>

          <div className="flex flex-col gap-4">
            <Card className="rounded-3xl border border-line bg-surface shadow-soft">
              <CardHeader title="Learning progress" description="Total vs. active learners." />
              <GrowthChart data={studentGrowth} />
            </Card>
            <Card className="rounded-3xl border border-line bg-surface shadow-soft">
              <CardHeader title="Quiz performance" description="Learners by score band." />
              <ScoreDistribution data={quizPerformance} />
            </Card>
          </div>

          <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
            <Card className="rounded-3xl border border-line bg-surface shadow-soft">
              <CardHeader title="Weak topics" description="Where learners lose the most points." />
              <RankedList items={weakTopics} unit="learners struggling" />
            </Card>
            <Card className="rounded-3xl border border-line bg-surface shadow-soft">
              <CardHeader title="Strong topics" description="Consistently high scoring areas." />
              <RankedList items={strongTopics} unit="learners mastering" />
            </Card>
            <Card className="rounded-3xl border border-line bg-surface shadow-soft">
              <CardHeader title="Leaderboard" description="Top learners by points this month." />
              <ol className="divide-y divide-line px-5 sm:px-6">
                {[
              ['Hana Sato', 9840],
              ['Dev Patel', 9310],
              ['Liam Fischer', 8905],
              ['Amara Okafor', 8620],
              ['Sofia Marin', 8114]].
              map(([name, pts], i) =>
              <li key={String(name)} className="flex items-center gap-3 py-3">
                    <span className="w-5 text-2xs tabular-nums text-faint">{i + 1}</span>
                    <span className="flex-1 truncate text-[13px] text-ink">{name}</span>
                    {i === 0 && <Badge tone="solid">Top</Badge>}
                    <span className="text-[12.5px] tabular-nums text-muted">{Number(pts).toLocaleString('en-US')} pts</span>
                  </li>
              )}
              </ol>
            </Card>
          </div>

          <Card className="rounded-3xl border border-line bg-surface shadow-soft">
            <CardHeader title="Learning heatmap" description="When learners actually study." />
            <LearningHeatmap />
          </Card>
        </div>
      }

      {tab === 'Platform' &&
      <div className="space-y-4">
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
            {platformMetrics.map((m) =>
          <CompactStatCard key={m.id} stat={m} />
          )}
          </div>

          <div className="grid grid-cols-1 gap-4 xl:grid-cols-3">
            <Card className="xl:col-span-2">
              <CardHeader title="Revenue" description="Gross revenue vs. refunds, last 6 months." />
              <RevenueChart data={revenueSeries} />
            </Card>
            <Card>
              <CardHeader title="Completion funnel" description="Enrolment through certification." />
              <FunnelChart data={completionFunnel} />
            </Card>
          </div>

          <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
            <Card>
              <CardHeader title="Devices" description="Sessions by device class." />
              <DeviceDonut data={deviceUsage} />
            </Card>
            <Card>
              <CardHeader title="Countries" description="Top learner geographies." />
              <CountryList data={countryDistribution} />
            </Card>
            <Card>
              <CardHeader title="Browsers" description="Share of sessions." />
              <ul className="space-y-4 px-5 pb-6 pt-4 sm:px-6">
                {[
              ['Chrome', 62],
              ['Safari', 21],
              ['Edge', 9],
              ['Firefox', 6],
              ['Other', 2]].
              map(([name, share]) =>
              <li key={String(name)}>
                    <div className="mb-1.5 flex justify-between text-[13px]">
                      <span className="text-ink">{name}</span>
                      <span className="tabular-nums text-muted">{share}%</span>
                    </div>
                    <Progress value={Number(share)} />
                  </li>
              )}
              </ul>
            </Card>
          </div>

          <Card>
            <CardHeader title="Daily learning hours" description="Aggregate study time this week." />
            <HoursChart data={learningHours} />
          </Card>
        </div>
      }

      {tab === 'Content' &&
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
          <Card>
            <CardHeader title="Most viewed" description="Top performing content by unique views." />
            <ul className="divide-y divide-line px-5 sm:px-6">
              {mostViewed.map((item) =>
            <li key={item.name} className="flex items-center gap-4 py-3.5">
                  <Badge>{item.label}</Badge>
                  <span className="min-w-0 flex-1 truncate text-[13px] text-ink">{item.name}</span>
                  <span className="shrink-0 text-[12.5px] tabular-nums text-muted">{item.views}</span>
                </li>
            )}
            </ul>
          </Card>
          <Card>
            <CardHeader title="Popular courses" description="Ranked by active enrolment." />
            <RankedList items={popularCourses} />
          </Card>
        </div>
      }
    </div>);

}