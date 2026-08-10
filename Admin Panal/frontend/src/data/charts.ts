export const studentGrowth = [
{ month: 'Jan', students: 22400, active: 14100 },
{ month: 'Feb', students: 25100, active: 15800 },
{ month: 'Mar', students: 27600, active: 17400 },
{ month: 'Apr', students: 30200, active: 19100 },
{ month: 'May', students: 33800, active: 21600 },
{ month: 'Jun', students: 36100, active: 23300 },
{ month: 'Jul', students: 38900, active: 25000 },
{ month: 'Aug', students: 41200, active: 26800 },
{ month: 'Sep', students: 43500, active: 28400 },
{ month: 'Oct', students: 45300, active: 29700 },
{ month: 'Nov', students: 46900, active: 30800 },
{ month: 'Dec', students: 48219, active: 31904 }];


export const learningHours = [
{ day: 'Mon', hours: 4120 },
{ day: 'Tue', hours: 4680 },
{ day: 'Wed', hours: 5010 },
{ day: 'Thu', hours: 4790 },
{ day: 'Fri', hours: 4210 },
{ day: 'Sat', hours: 3180 },
{ day: 'Sun', hours: 2740 }];


export const quizPerformance = [
{ band: '0–20', learners: 320 },
{ band: '21–40', learners: 890 },
{ band: '41–60', learners: 2140 },
{ band: '61–80', learners: 5320 },
{ band: '81–100', learners: 3980 }];


export const completionFunnel = [
{ stage: 'Enrolled', value: 48219 },
{ stage: 'Started', value: 41180 },
{ stage: 'Mid-course', value: 33940 },
{ stage: 'Final quiz', value: 24610 },
{ stage: 'Certified', value: 11203 }];


export const deviceUsage = [
{ name: 'Desktop', value: 52 },
{ name: 'Mobile', value: 34 },
{ name: 'Tablet', value: 14 }];


export const popularCourses = [
{ name: 'Applied Machine Learning', learners: 7420 },
{ name: 'Systems Design Foundations', learners: 6180 },
{ name: 'Prompt Engineering Pro', learners: 5340 },
{ name: 'Data Structures in Python', learners: 4910 },
{ name: 'LLM App Architecture', learners: 4120 }];


export const countryDistribution = [
{ country: 'United States', learners: 12840, share: 27 },
{ country: 'India', learners: 10420, share: 22 },
{ country: 'Germany', learners: 5180, share: 11 },
{ country: 'Brazil', learners: 4310, share: 9 },
{ country: 'United Kingdom', learners: 3620, share: 8 },
{ country: 'Nigeria', learners: 2940, share: 6 }];


export const revenueSeries = [
{ month: 'Jul', revenue: 41200, refunds: 1800 },
{ month: 'Aug', revenue: 44800, refunds: 2100 },
{ month: 'Sep', revenue: 47300, refunds: 1600 },
{ month: 'Oct', revenue: 52900, refunds: 2400 },
{ month: 'Nov', revenue: 58600, refunds: 2000 },
{ month: 'Dec', revenue: 64100, refunds: 2600 }];


export const heatmap: number[][] = Array.from({ length: 7 }, (_, r) =>
Array.from({ length: 24 }, (_, c) => {
  const peak = Math.exp(-Math.pow(c - (r > 4 ? 15 : 19), 2) / 26);
  const weekend = r > 4 ? 0.72 : 1;
  return Math.round(peak * weekend * 100 + (r * 7 + c * 13) % 11);
})
);

export const heatmapDays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];