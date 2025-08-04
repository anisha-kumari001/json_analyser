import React from 'react';
import { FileText, Tag, Users, Calendar, AlertTriangle, CheckCircle } from 'lucide-react';

interface DataOverviewProps {
  data: any;
}

export default function DataOverview({ data }: DataOverviewProps) {
  const items = data.Items || [];
  const groups = data.Groups || [];
  
  const totalItems = items.length;
  const totalGroups = groups.length;
  const uniqueTags = new Set();
  const assignees = new Set();
  const resolvedItems = items.filter((item: any) => item.content.resolved_ts && item.content.resolved_ts !== "0001-01-01T00:00:00Z").length;
  const blockerPriority = items.filter((item: any) => item.content.priority === "Blocker").length;

  items.forEach((item: any) => {
    item.tags?.forEach((tag: any) => uniqueTags.add(tag.name));
    if (item.content.assignee_name) assignees.add(item.content.assignee_name);
  });

  const stats = [
    {
      icon: FileText,
      label: "Total Items",
      value: totalItems,
      color: "bg-blue-500",
      description: "JIRA activities tracked"
    },
    {
      icon: Tag,
      label: "Unique Tags",
      value: uniqueTags.size,
      color: "bg-indigo-500",
      description: "Classification categories"
    },
    {
      icon: Users,
      label: "Assignees",
      value: assignees.size,
      color: "bg-green-500",
      description: "Team members involved"
    },
    {
      icon: CheckCircle,
      label: "Resolved",
      value: resolvedItems,
      color: "bg-emerald-500",
      description: "Completed activities"
    },
    {
      icon: AlertTriangle,
      label: "Blockers",
      value: blockerPriority,
      color: "bg-red-500",
      description: "High priority issues"
    },
    {
      icon: Calendar,
      label: "Groups",
      value: totalGroups,
      color: "bg-purple-500",
      description: "Analysis clusters"
    }
  ];

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Data Overview</h2>
        <p className="text-gray-600">Summary statistics and key metrics from your JIRA activity data</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600 mb-1">{stat.label}</p>
                <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
                <p className="text-xs text-gray-500 mt-1">{stat.description}</p>
              </div>
              <div className={`${stat.color} p-3 rounded-lg`}>
                <stat.icon className="w-6 h-6 text-white" />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-lg shadow-lg p-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Resolution Rate</h3>
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm text-gray-600">Progress</span>
          <span className="text-sm font-semibold text-gray-800">
            {totalItems > 0 ? Math.round((resolvedItems / totalItems) * 100) : 0}%
          </span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-3">
          <div 
            className="bg-green-500 h-3 rounded-full transition-all duration-300"
            style={{ 
              width: totalItems > 0 ? `${(resolvedItems / totalItems) * 100}%` : '0%' 
            }}
          ></div>
        </div>
        <p className="text-xs text-gray-500 mt-2">
          {resolvedItems} of {totalItems} items resolved
        </p>
      </div>
    </div>
  );
}