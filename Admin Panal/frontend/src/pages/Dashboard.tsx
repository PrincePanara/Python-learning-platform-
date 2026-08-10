import React, { useState } from 'react';
import { DownloadIcon, SparklesIcon } from 'lucide-react';
import { PageHeader } from '../components/layout/PageHeader';
import { Card, CardHeader } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { SegmentedControl } from '../components/ui/Tabs';
import { StatCard, CompactStatCard } from '../components/dashboard/StatCard';
import { ActivityFeed } from '../components/dashboard/ActivityFeed';
import { QuickActions } from '../components/dashboard/QuickActions';
import { QuickAddModal } from '../components/dashboard/QuickAddModal';
import {
  GrowthChart,
  HoursChart,
  ScoreDistribution,
  DeviceDonut,
  RankedList,
  FunnelChart,
  CountryList,
  RevenueChart } from
'../components/charts/Charts';
import { LearningHeatmap } from '../components/charts/Heatmap';
import { heroStats, compactStats } from '../data/stats';
import {
  studentGrowth,
  learningHours,
  quizPerformance,
  deviceUsage,
  popularCourses,
  completionFunnel,
  countryDistribution,
  revenueSeries } from
'../data/charts';

export function Dashboard() {
  const [range, setRange] = useState('12M');
  const [quickAdd, setQuickAdd] = useState(false);

  return (
    <div className="space-y-6">
      <PageHeader
        title="Platform overview"
        description="Everything happening across Atlas Learn — enrolment, engagement, content health and revenue."
        actions={
        <>
            <SegmentedControl
            options={['7D', '30D', '12M']}
            value={range}
            onChange={setRange}
            layoutId="range-seg" />
          
            <Button size="md">
              <DownloadIcon className="h-3.5 w-3.5" />
              Export
            </Button>
            <Button variant="primary" size="md" onClick={() => setQuickAdd(true)}>
              <SparklesIcon className="h-3.5 w-3.5" />
              Generate with AI
            </Button>
          </>
        } />
      

      <section aria-label="Key metrics" className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {heroStats.map((stat, i) =>
        <StatCard key={stat.id} stat={stat} index={i} />
        )}
      </section>

      <Card>
        <CardHeader title="All metrics" description="The full content and engagement ledger." />
        <div className="grid grid-cols-2 gap-3 p-5 sm:grid-cols-3 lg:grid-cols-5 sm:p-6">
          {compactStats.map((stat) =>
          <CompactStatCard key={stat.id} stat={stat} />
          )}
        </div>
      </Card>

      <div className="grid grid-cols-1 gap-4 xl:grid-cols-3">
        <Card className="xl:col-span-2">
          <CardHeader
            title="Student growth"
            description="Total vs. active learners over the last 12 months."
            action={<Button size="sm" variant="ghost">Details</Button>} />
          
          <GrowthChart data={studentGrowth} />
        </Card>
        <ActivityFeed />
      </div>

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 xl:grid-cols-3">
        <Card>
          <CardHeader title="Daily learning hours" description="Aggregate study time this week." />
          <HoursChart data={learningHours} />
        </Card>
        <Card>
          <CardHeader title="Quiz performance" description="Learners by score band." />
          <ScoreDistribution data={quizPerformance} />
        </Card>
        <Card>
          <CardHeader title="Device usage" description="Where learning happens." />
          <DeviceDonut data={deviceUsage} />
        </Card>
        <Card>
          <CardHeader title="Popular courses" description="Ranked by active enrolment." />
          <RankedList items={popularCourses} />
        </Card>
        <Card>
          <CardHeader title="Completion funnel" description="Enrolment through certification." />
          <FunnelChart data={completionFunnel} />
        </Card>
        <Card>
          <CardHeader title="Country distribution" description="Top learner geographies." />
          <CountryList data={countryDistribution} />
        </Card>
      </div>

      <div className="grid grid-cols-1 gap-4 xl:grid-cols-3">
        <Card className="xl:col-span-2">
          <CardHeader
            title="Learning heatmap"
            description="Concurrent learners by hour of day across the week." />
          
          <LearningHeatmap />
        </Card>
        <Card>
          <CardHeader title="Revenue analytics" description="Gross revenue vs. refunds." />
          <RevenueChart data={revenueSeries} />
        </Card>
      </div>

      <QuickActions onAction={() => setQuickAdd(true)} />
      <QuickAddModal open={quickAdd} onClose={() => setQuickAdd(false)} />
    </div>);

}