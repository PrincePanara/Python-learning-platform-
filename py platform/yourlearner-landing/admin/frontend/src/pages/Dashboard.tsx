import React, { useState, useEffect } from 'react';
import { DownloadIcon, SparklesIcon, Loader2 } from 'lucide-react';
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
  RevenueChart 
} from '../components/charts/Charts';
import { LearningHeatmap } from '../components/charts/Heatmap';

// Mock data removed. Dashboard expects the backend API to provide the data.

export function Dashboard() {
  const [range, setRange] = useState('12M');
  const [quickAdd, setQuickAdd] = useState(false);
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const res = await fetch(`http://localhost:8000/api/v1/dashboard/?t=${Date.now()}`);
        if (res.ok) {
          setData(await res.json());
        } else {
          // Fallback to empty data state if backend has no data
          setData({
            heroStats: [],
            compactStats: [],
            studentGrowth: [],
            learningHours: [],
            quizPerformance: [],
            deviceUsage: [],
            popularCourses: [],
            completionFunnel: [],
            countryDistribution: [],
            revenueSeries: [],
            heatmap: [],
            heatmapDays: []
          });
        }
      } catch (err: any) {
        console.error("Dashboard error:", err);
        setError(err.message || "Failed to load dashboard.");
      } finally {
        setLoading(false);
      }
    };
    
    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-96">
        <Loader2 className="w-8 h-8 animate-spin text-gray-400" />
      </div>
    );
  }

  if (error || !data) {
    return (
      <div className="bg-red-50 text-red-600 p-6 rounded-lg text-center">
        <h2 className="text-xl font-bold mb-2">Error Loading Dashboard</h2>
        <p>{error}</p>
      </div>
    );
  }

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
        {(data?.heroStats || []).map((stat: any, i: number) =>
        <StatCard key={stat.id} stat={stat} index={i} />
        )}
      </section>

      <Card>
        <CardHeader title="All metrics" description="The full content and engagement ledger." />
        <div className="grid grid-cols-2 gap-3 p-5 sm:grid-cols-3 lg:grid-cols-5 sm:p-6">
          {(data?.compactStats || []).map((stat: any) =>
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
          
          {data?.studentGrowth?.length > 0 ? <GrowthChart data={data.studentGrowth} /> : <div className="p-4 text-sm text-gray-500">No data</div>}
        </Card>
        <ActivityFeed />
      </div>

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 xl:grid-cols-3">
        <Card>
          <CardHeader title="Daily learning hours" description="Aggregate study time this week." />
          {data?.learningHours?.length > 0 ? <HoursChart data={data.learningHours} /> : <div className="p-4 text-sm text-gray-500">No data</div>}
        </Card>
        <Card>
          <CardHeader title="Quiz performance" description="Learners by score band." />
          {data?.quizPerformance?.length > 0 ? <ScoreDistribution data={data.quizPerformance} /> : <div className="p-4 text-sm text-gray-500">No data</div>}
        </Card>
        <Card>
          <CardHeader title="Device usage" description="Where learning happens." />
          {data?.deviceUsage?.length > 0 ? <DeviceDonut data={data.deviceUsage} /> : <div className="p-4 text-sm text-gray-500">No data</div>}
        </Card>
        <Card>
          <CardHeader title="Popular courses" description="Ranked by active enrolment." />
          {data?.popularCourses?.length > 0 ? <RankedList items={data.popularCourses} /> : <div className="p-4 text-sm text-gray-500">No data</div>}
        </Card>
        <Card>
          <CardHeader title="Completion funnel" description="Enrolment through certification." />
          {data?.completionFunnel?.length > 0 ? <FunnelChart data={data.completionFunnel} /> : <div className="p-4 text-sm text-gray-500">No data</div>}
        </Card>
        <Card>
          <CardHeader title="Country distribution" description="Top learner geographies." />
          {data?.countryDistribution?.length > 0 ? <CountryList data={data.countryDistribution} /> : <div className="p-4 text-sm text-gray-500">No data</div>}
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
          {data?.revenueSeries?.length > 0 ? <RevenueChart data={data.revenueSeries} /> : <div className="p-4 text-sm text-gray-500">No data</div>}
        </Card>
      </div>

      <QuickActions onAction={() => setQuickAdd(true)} />
      <QuickAddModal open={quickAdd} onClose={() => setQuickAdd(false)} />
    </div>);
}