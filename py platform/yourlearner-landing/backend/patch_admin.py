import os
import re

# Path to the files
admin_dir = r"C:\Users\SHYAM\Downloads\Python-learning-platform--main\Python-learning-platform--main\Admin Panal\frontend\src"
dashboard_file = os.path.join(admin_dir, "pages", "Dashboard.tsx")
charts_file = os.path.join(admin_dir, "components", "charts", "Charts.tsx")
heatmap_file = os.path.join(admin_dir, "components", "charts", "Heatmap.tsx")

# 1. Fix Dashboard.tsx mappings
with open(dashboard_file, 'r', encoding='utf-8') as f:
    content = f.read()

# Replace `data.someArray.map` with `(data?.someArray || []).map`
content = re.sub(r'\{data\.heroStats\.map', r'{(data?.heroStats || []).map', content)
content = re.sub(r'\{data\.compactStats\.map', r'{(data?.compactStats || []).map', content)

# Check for empty charts
content = re.sub(r'<GrowthChart data=\{data\.studentGrowth\} />', r'{data?.studentGrowth?.length > 0 ? <GrowthChart data={data.studentGrowth} /> : <div className="p-4 text-sm text-gray-500">No data</div>}', content)
content = re.sub(r'<HoursChart data=\{data\.learningHours\} />', r'{data?.learningHours?.length > 0 ? <HoursChart data={data.learningHours} /> : <div className="p-4 text-sm text-gray-500">No data</div>}', content)
content = re.sub(r'<ScoreDistribution data=\{data\.quizPerformance\} />', r'{data?.quizPerformance?.length > 0 ? <ScoreDistribution data={data.quizPerformance} /> : <div className="p-4 text-sm text-gray-500">No data</div>}', content)
content = re.sub(r'<DeviceDonut data=\{data\.deviceUsage\} />', r'{data?.deviceUsage?.length > 0 ? <DeviceDonut data={data.deviceUsage} /> : <div className="p-4 text-sm text-gray-500">No data</div>}', content)
content = re.sub(r'<RankedList items=\{data\.popularCourses\} />', r'{data?.popularCourses?.length > 0 ? <RankedList items={data.popularCourses} /> : <div className="p-4 text-sm text-gray-500">No data</div>}', content)
content = re.sub(r'<FunnelChart data=\{data\.completionFunnel\} />', r'{data?.completionFunnel?.length > 0 ? <FunnelChart data={data.completionFunnel} /> : <div className="p-4 text-sm text-gray-500">No data</div>}', content)
content = re.sub(r'<CountryList data=\{data\.countryDistribution\} />', r'{data?.countryDistribution?.length > 0 ? <CountryList data={data.countryDistribution} /> : <div className="p-4 text-sm text-gray-500">No data</div>}', content)
content = re.sub(r'<RevenueChart data=\{data\.revenueSeries\} />', r'{data?.revenueSeries?.length > 0 ? <RevenueChart data={data.revenueSeries} /> : <div className="p-4 text-sm text-gray-500">No data</div>}', content)

with open(dashboard_file, 'w', encoding='utf-8') as f:
    f.write(content)


# 2. Fix Charts.tsx
with open(charts_file, 'r', encoding='utf-8') as f:
    charts = f.read()

# Fix FunnelChart top value crash
charts = re.sub(r'const top = data\[0\]\.value;', r'const top = data?.[0]?.value || 1;', charts)

# Fix RankedList max value crash
charts = re.sub(r'const max = Math\.max\(\.\.\.items\.map\(\(i\) => i\.learners\)\);', r'const max = Math.max(...items.map((i) => i.learners), 1);', charts)

with open(charts_file, 'w', encoding='utf-8') as f:
    f.write(charts)


# 3. Fix Heatmap.tsx
with open(heatmap_file, 'r', encoding='utf-8') as f:
    heatmap = f.read()

heatmap = re.sub(r'const max = Math\.max\(\.\.\.heatmap\.flat\(\)\);', r'const flatHeatmap = heatmap.flat();\n  const max = flatHeatmap.length > 0 ? Math.max(...flatHeatmap) : 1;', heatmap)

with open(heatmap_file, 'w', encoding='utf-8') as f:
    f.write(heatmap)

print("Patched Admin UI code successfully.")
