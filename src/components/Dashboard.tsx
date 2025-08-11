import { useState, useMemo } from 'react';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  Area, AreaChart, PieChart, Pie, Cell,
  ScatterChart, Scatter
} from 'recharts';
import { 
  Clock, TrendingUp, AlertTriangle, CheckCircle, 
  Target, Activity, 
  ArrowUp, ArrowDown, Minus, Download
} from 'lucide-react';
import { Filters } from './GlobalFilters';
import ExportComponent from './ExportComponent';
import AdvancedAnalytics from './AdvancedAnalytics';

interface DashboardProps {
  data: any;
  filters: Filters;
}

interface MetricsData {
  totalItems: number;
  resolvedItems: number;
  openItems: number;
  resolutionRate: number;
  avgResolutionTime: number;
  p50ResolutionTime: number;
  p95ResolutionTime: number;
  slaBreaches: number;
  slaCompliance: number;
  topTags: Array<{ name: string; count: number }>;
  assigneeCounts: Array<{ name: string; count: number }>;
  priorityCounts: Array<{ name: string; value: number }>;
  weeklyData: Array<{ week: string; resolved: number; created: number }>;
  resolutionTimes: number[];
}

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8', '#82ca9d'];

// KPI Card Component
function KPICard({ title, value, change, icon: Icon, color, trend, subtitle }: {
  title: string;
  value: string | number;
  change?: number;
  icon: any;
  color: string;
  trend?: number;
  subtitle?: string;
}) {
  const getTrendIcon = () => {
    if (trend && trend > 0) return ArrowUp;
    if (trend && trend < 0) return ArrowDown;
    return Minus;
  };

  const TrendIcon = getTrendIcon();
  const trendColor = trend && trend > 0 ? 'text-green-600' : trend && trend < 0 ? 'text-red-600' : 'text-gray-600';

  return (
    <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-gray-600">{title}</p>
          <p className="text-3xl font-bold text-gray-900 mt-2">{value}</p>
          {subtitle && <p className="text-sm text-gray-500 mt-1">{subtitle}</p>}
        </div>
        <div className={`p-3 rounded-full ${color}`}>
          <Icon className="w-6 h-6 text-white" />
        </div>
      </div>
      {change !== undefined && (
        <div className="mt-4 flex items-center">
          <TrendIcon className={`w-4 h-4 ${trendColor} mr-1`} />
          <span className={`text-sm font-medium ${trendColor}`}>
            {Math.abs(change)}% {trend && trend > 0 ? 'increase' : trend && trend < 0 ? 'decrease' : 'no change'}
          </span>
          <span className="text-sm text-gray-500 ml-1">vs last period</span>
        </div>
      )}
    </div>
  );
}

// Insight Card Component
function InsightCard({ title, insight, actionable, severity }: {
  title: string;
  insight: string;
  actionable: string;
  severity: string;
}) {
  const severityColors = {
    high: 'border-red-200 bg-red-50',
    medium: 'border-yellow-200 bg-yellow-50',
    low: 'border-blue-200 bg-blue-50',
    info: 'border-gray-200 bg-gray-50'
  };

  const severityIcons = {
    high: AlertTriangle,
    medium: Clock,
    low: Target,
    info: Activity
  };

  const Icon = severityIcons[severity as keyof typeof severityIcons] || Activity;

  return (
    <div className={`p-4 rounded-lg border ${severityColors[severity as keyof typeof severityColors] || severityColors.info}`}>
      <div className="flex items-start gap-3">
        <Icon className="w-5 h-5 text-gray-600 mt-0.5" />
        <div className="flex-1">
          <h4 className="font-medium text-gray-900 mb-2">{title}</h4>
          <p className="text-sm text-gray-700 mb-3">{insight}</p>
          <div className="bg-white rounded p-2 border">
            <p className="text-xs font-medium text-gray-600 mb-1">RECOMMENDED ACTION</p>
            <p className="text-sm text-gray-800">{actionable}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Dashboard({ data, filters }: DashboardProps) {
  const [selectedTab, setSelectedTab] = useState('dashboard');
  
  console.log('Dashboard received data:', data);
  console.log('Dashboard received filters:', filters);
  console.log('Data has dailySummaries:', !!(data as any)?.dailySummaries);
  console.log('Data has Items:', !!(data as any)?.Items);

  // Early return if no data
  if (!data) {
    return (
      <div className="space-y-6">
        <div className="text-center py-12">
          <Activity className="w-16 h-16 mx-auto text-gray-400 mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">No Data Available</h3>
          <p className="text-gray-500">Please provide JSON data using the JSON Input tab to see the dashboard.</p>
        </div>
      </div>
    );
  }

  // Dashboard tabs
  const tabs = [
    { id: 'dashboard', name: 'Dashboard', icon: Activity },
    { id: 'analytics', name: 'Advanced Analytics', icon: TrendingUp },
    { id: 'export', name: 'Export & Reports', icon: Download }
  ];

  // Process data based on filters
  const processedData = useMemo(() => {
    console.log('Processing data in useMemo:', data);
    if (!data) {
      return { items: [], groups: [], metrics: {} as MetricsData };
    }

    // Extract items from different data formats
    let allItems: any[] = [];
    let allGroups: any[] = [];

    // Handle summary format
    if (data.dailySummaries && Array.isArray(data.dailySummaries)) {
      console.log('Found dailySummaries, length:', data.dailySummaries.length);
      data.dailySummaries.forEach((summary: any) => {
        console.log('Processing summary:', summary.id);
        if (summary.contentJSON?.Items) {
          console.log('Found Items in summary:', summary.contentJSON.Items.length);
          allItems.push(...summary.contentJSON.Items);
        }
        if (summary.contentJSON?.Groups) {
          allGroups.push(...summary.contentJSON.Groups);
        }
      });
    } 
    // Handle direct format
    else if (data.Items) {
      console.log('Found direct Items:', data.Items.length);
      allItems = data.Items || [];
      allGroups = data.Groups || [];
    }

    console.log('Total extracted items:', allItems.length);

    // For debugging, let's also return the items count directly
    if (allItems.length === 0) {
      console.warn('No items extracted!');
      return { items: [], groups: [], metrics: {} as MetricsData };
    }

    // Apply filters
    const filteredItems = allItems.filter((item: any) => {
      // Date filter
      if (filters.dateRange.start || filters.dateRange.end) {
        const itemDate = new Date(item.createdAt || item.content?.created_ts);
        if (filters.dateRange.start && itemDate < new Date(filters.dateRange.start)) return false;
        if (filters.dateRange.end && itemDate > new Date(filters.dateRange.end)) return false;
      }

      // Tags filter
      if (filters.selectedTags.length > 0) {
        const itemTags = item.tags?.map((t: any) => t.name) || [];
        if (!filters.selectedTags.some((tag: string) => itemTags.includes(tag))) return false;
      }

      // Priority filter
      if (filters.priorities.length > 0) {
        const priority = item.content?.priority || 'Unknown';
        if (!filters.priorities.includes(priority)) return false;
      }

      // Assignee filter
      if (filters.assignees.length > 0) {
        const assignee = item.content?.assignee_name || 'Unassigned';
        if (!filters.assignees.includes(assignee)) return false;
      }

      // Reporter filter
      if (filters.reporters.length > 0) {
        const reporter = item.content?.reporter_name || 'Unknown';
        if (!filters.reporters.includes(reporter)) return false;
      }

      // Labels filter
      if (filters.labels.length > 0) {
        const itemLabels = item.content?.labels || '';
        if (!filters.labels.some(label => itemLabels.includes(label))) return false;
      }

      // Text search
      if (filters.textSearch.trim()) {
        const searchText = filters.textSearch.toLowerCase();
        const searchableText = [
          item.title,
          item.description,
          item.content?.issue_title,
          item.content?.issue_description
        ].join(' ').toLowerCase();
        if (!searchableText.includes(searchText)) return false;
      }

      return true;
    });

    const metrics = calculateMetrics(filteredItems);

    return { 
      items: filteredItems, 
      groups: allGroups, 
      metrics 
    };
  }, [data, filters]);

  const calculateMetrics = (items: any[]): MetricsData => {
    if (items.length === 0) {
      return {
        totalItems: 0,
        resolvedItems: 0,
        openItems: 0,
        resolutionRate: 0,
        avgResolutionTime: 0,
        p50ResolutionTime: 0,
        p95ResolutionTime: 0,
        slaBreaches: 0,
        slaCompliance: 100,
        topTags: [],
        assigneeCounts: [],
        priorityCounts: [],
        weeklyData: [],
        resolutionTimes: []
      };
    }

    const totalItems = items.length;
    let resolvedItems = 0;
    const resolutionTimes: number[] = [];
    const tagCounts: Record<string, number> = {};
    const assigneeCounts: Record<string, number> = {};
    const priorityCounts: Record<string, number> = {};
    const weeklyData: Record<string, { resolved: number, created: number }> = {};
    let slaBreaches = 0;

    items.forEach(item => {
      // Check if resolved
      const isResolved = item.content?.status_transitions?.some((t: any) => 
        t.to_state?.toLowerCase().includes('closed') || t.to_state?.toLowerCase().includes('resolved')
      );
      
      if (isResolved) {
        resolvedItems++;
        
        // Calculate resolution time
        const createdTime = new Date(item.content?.created_ts || item.createdAt);
        const resolvedTime = new Date(item.content?.resolved_ts || item.updatedAt);
        const resolutionHours = (resolvedTime.getTime() - createdTime.getTime()) / (1000 * 60 * 60);
        
        if (!isNaN(resolutionHours) && resolutionHours >= 0) {
          resolutionTimes.push(resolutionHours);
          
          // Check SLA breach (assuming 48h SLA)
          if (resolutionHours > 48) {
            slaBreaches++;
          }
        }
      }

      // Count tags
      item.tags?.forEach((tag: any) => {
        tagCounts[tag.name] = (tagCounts[tag.name] || 0) + 1;
      });

      // Count assignees
      const assignee = item.content?.assignee_name || 'Unassigned';
      assigneeCounts[assignee] = (assigneeCounts[assignee] || 0) + 1;

      // Count priorities
      const priority = item.content?.priority || 'Unknown';
      priorityCounts[priority] = (priorityCounts[priority] || 0) + 1;

      // Weekly data
      const createdDate = new Date(item.content?.created_ts || item.createdAt);
      const weekKey = `${createdDate.getFullYear()}-W${Math.ceil((createdDate.getDate()) / 7)}`;
      if (!weeklyData[weekKey]) {
        weeklyData[weekKey] = { resolved: 0, created: 0 };
      }
      weeklyData[weekKey].created++;
      
      if (isResolved) {
        weeklyData[weekKey].resolved++;
      }
    });

    const openItems = totalItems - resolvedItems;
    const resolutionRate = totalItems > 0 ? (resolvedItems / totalItems) * 100 : 0;
    
    // Calculate percentiles
    const sortedTimes = resolutionTimes.sort((a, b) => a - b);
    const avgResolutionTime = sortedTimes.length > 0 ? 
      sortedTimes.reduce((a, b) => a + b, 0) / sortedTimes.length : 0;
    const p50ResolutionTime = sortedTimes.length > 0 ? 
      sortedTimes[Math.floor(sortedTimes.length * 0.5)] : 0;
    const p95ResolutionTime = sortedTimes.length > 0 ? 
      sortedTimes[Math.floor(sortedTimes.length * 0.95)] : 0;

    const slaCompliance = totalItems > 0 ? ((totalItems - slaBreaches) / totalItems) * 100 : 100;

    return {
      totalItems,
      resolvedItems,
      openItems,
      resolutionRate,
      avgResolutionTime,
      p50ResolutionTime,
      p95ResolutionTime,
      slaBreaches,
      slaCompliance,
      topTags: Object.entries(tagCounts)
        .map(([name, count]) => ({ name, count }))
        .sort((a, b) => b.count - a.count),
      assigneeCounts: Object.entries(assigneeCounts)
        .map(([name, count]) => ({ name, count }))
        .sort((a, b) => b.count - a.count),
      priorityCounts: Object.entries(priorityCounts)
        .map(([name, value]) => ({ name, value })),
      weeklyData: Object.entries(weeklyData)
        .map(([week, data]) => ({ week, ...data }))
        .sort((a, b) => a.week.localeCompare(b.week)),
      resolutionTimes
    };
  };

  const generateInsights = () => {
    const { metrics } = processedData;
    const insights = [];

    // Resolution rate insight
    if (metrics.resolutionRate < 70) {
      insights.push({
        title: "Low Resolution Rate",
        insight: `Only ${metrics.resolutionRate.toFixed(1)}% of items are resolved. This indicates potential bottlenecks in the resolution process.`,
        actionable: "Review assignment workflows and identify blockers.",
        severity: "high"
      });
    }

    // SLA compliance insight
    if (metrics.slaCompliance < 80) {
      insights.push({
        title: "SLA Compliance Issue",
        insight: `SLA compliance is at ${metrics.slaCompliance.toFixed(1)}% with ${metrics.slaBreaches} breaches.`,
        actionable: "Implement escalation procedures for items approaching SLA deadlines.",
        severity: "high"
      });
    }

    // Resolution time insight
    if (metrics.avgResolutionTime > 48) {
      insights.push({
        title: "Long Resolution Times",
        insight: `Average resolution time is ${metrics.avgResolutionTime.toFixed(1)} hours, which may indicate process inefficiencies.`,
        actionable: "Analyze longest-running items and optimize common resolution paths.",
        severity: "medium"
      });
    }

    // Tag patterns
    if (metrics.topTags.length > 0) {
      const topTag = metrics.topTags[0];
      insights.push({
        title: "Recurring Issue Pattern",
        insight: `"${topTag.name}" appears in ${topTag.count} items (${((topTag.count / metrics.totalItems) * 100).toFixed(1)}% of total).`,
        actionable: `Investigate root cause of ${topTag.name} issues and implement preventive measures.`,
        severity: "medium"
      });
    }

    // Workload distribution
    if (metrics.assigneeCounts.length > 0) {
      const maxLoad = Math.max(...metrics.assigneeCounts.map(a => a.count));
      const minLoad = Math.min(...metrics.assigneeCounts.map(a => a.count));
      if (maxLoad > minLoad * 2) {
        insights.push({
          title: "Uneven Workload Distribution",
          insight: "There's significant imbalance in issue assignment across team members.",
          actionable: "Review and balance workload distribution to improve team efficiency.",
          severity: "low"
        });
      }
    }

    return insights;
  };

  const { metrics } = processedData;
  const insights = generateInsights();

  const renderTabContent = () => {
    switch (selectedTab) {
      case 'analytics':
        return <AdvancedAnalytics data={data} filters={filters} />;
      case 'export':
        return (
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Export & Reports</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">Quick Actions</h4>
                  <ExportComponent data={data} filters={filters} filename="jira_analysis" />
                </div>
                
                <div className="mt-8 p-6 bg-blue-50 rounded-lg">
                  <h4 className="font-medium text-blue-900 mb-3">Automated Reports</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-white rounded p-4 border border-blue-200">
                      <h5 className="font-medium text-gray-900 mb-2">Weekly Summary</h5>
                      <p className="text-sm text-gray-600 mb-3">Automated weekly report with KPIs and trends</p>
                      <button className="text-sm bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700">
                        Configure
                      </button>
                    </div>
                    <div className="bg-white rounded p-4 border border-blue-200">
                      <h5 className="font-medium text-gray-900 mb-2">SLA Alerts</h5>
                      <p className="text-sm text-gray-600 mb-3">Real-time notifications for SLA breaches</p>
                      <button className="text-sm bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700">
                        Configure
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      default:
        return renderDashboardContent();
    }
  };

  const renderDashboardContent = () => (
    <div className="space-y-6">
      {/* Debug Info */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
        <h4 className="font-medium text-blue-900 mb-2">Debug Info</h4>
        <div className="text-sm text-blue-800">
          <div>Data type: {typeof data}</div>
          <div>Has data: {data ? 'Yes' : 'No'}</div>
          <div>Processed items: {processedData.items.length}</div>
          <div>Metrics total items: {processedData.metrics.totalItems}</div>
        </div>
      </div>
      
      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <KPICard
          title="Total Items"
          value={metrics.totalItems || 0}
          icon={Target}
          color="bg-blue-500"
          subtitle={`${metrics.openItems || 0} open, ${metrics.resolvedItems || 0} resolved`}
        />
        <KPICard
          title="Resolution Rate"
          value={`${(metrics.resolutionRate || 0).toFixed(1)}%`}
          icon={CheckCircle}
          color={metrics.resolutionRate >= 80 ? 'bg-green-500' : 'bg-red-500'}
          trend={5}
        />
        <KPICard
          title="Avg Resolution Time"
          value={`${(metrics.avgResolutionTime || 0).toFixed(1)}h`}
          icon={Clock}
          color="bg-yellow-500"
          trend={-3}
          subtitle={`P95: ${(metrics.p95ResolutionTime || 0).toFixed(1)}h`}
        />
        <KPICard
          title="SLA Compliance"
          value={`${(metrics.slaCompliance || 0).toFixed(1)}%`}
          icon={AlertTriangle}
          color={(metrics.slaCompliance || 0) >= 90 ? 'bg-green-500' : 'bg-red-500'}
          subtitle={`${metrics.slaBreaches || 0} breaches`}
        />
      </div>

      {/* Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Weekly Trends */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Weekly Trends</h3>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={metrics.weeklyData || []}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="week" />
              <YAxis />
              <Tooltip />
              <Area type="monotone" dataKey="created" stackId="1" stroke="#8884d8" fill="#8884d8" />
              <Area type="monotone" dataKey="resolved" stackId="2" stroke="#82ca9d" fill="#82ca9d" />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        {/* Top Tags */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Most Common Tags</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={(metrics.topTags || []).slice(0, 8)} layout="horizontal">
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis type="number" />
              <YAxis dataKey="name" type="category" width={80} />
              <Tooltip />
              <Bar dataKey="count" fill="#8884d8" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Priority Distribution */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Priority Distribution</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={metrics.priorityCounts || []}
                cx="50%"
                cy="50%"
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
                label={({ name, percent }: any) => `${name} ${((percent || 0) * 100).toFixed(0)}%`}
              >
                {(metrics.priorityCounts || []).map((_entry: any, index: number) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Assignee Workload */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Assignee Workload</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={(metrics.assigneeCounts || []).slice(0, 10)}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="count" fill="#8884d8" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Resolution Time Distribution */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Resolution Time Distribution</h3>
        <ResponsiveContainer width="100%" height={400}>
          <ScatterChart data={(metrics.resolutionTimes || []).map((time: number, index: number) => ({ index, time }))}>
            <CartesianGrid />
            <XAxis dataKey="index" name="Item" unit="" />
            <YAxis dataKey="time" name="Hours" unit="h" />
            <Tooltip cursor={{ strokeDasharray: '3 3' }} />
            <Scatter name="Resolution Times" data={(metrics.resolutionTimes || []).map((time: number, index: number) => ({ index, time }))} fill="#8884d8" />
          </ScatterChart>
        </ResponsiveContainer>
      </div>

      {/* Insights Section */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          AI-Powered Insights
          <span className="text-sm font-normal text-gray-500 ml-2">({insights.length} insights found)</span>
        </h3>
        
        {insights.length === 0 ? (
          <div className="text-center py-8 text-gray-500">
            <Activity className="w-12 h-12 mx-auto mb-3 opacity-50" />
            <p>No significant insights found. Your processes are running smoothly!</p>
          </div>
        ) : (
          <div className="space-y-4">
            {insights.map((insight, index) => (
              <InsightCard key={index} {...insight} />
            ))}
          </div>
        )}
      </div>
    </div>
  );

  return (
    <div className="space-y-6">
      {/* Tab Navigation */}
      <div className="border-b border-gray-200">
        <nav className="flex space-x-8">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setSelectedTab(tab.id)}
              className={`flex items-center gap-2 py-3 px-1 border-b-2 font-medium text-sm transition-colors ${
                selectedTab === tab.id
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              <tab.icon className="w-4 h-4" />
              {tab.name}
            </button>
          ))}
        </nav>
      </div>

      {/* Tab Content */}
      {renderTabContent()}
    </div>
  );
}
