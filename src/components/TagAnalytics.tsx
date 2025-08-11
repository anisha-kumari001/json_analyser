import React, { useMemo } from 'react';
import { Tag, TrendingUp, Users, Clock } from 'lucide-react';

interface TagAnalyticsProps {
  data: any;
}

export default function TagAnalytics({ data }: TagAnalyticsProps) {
  const items = data.Items || [];

  const tagAnalytics = useMemo(() => {
    const tagMap = new Map<string, {
      count: number;
      items: any[];
      assignees: Set<string>;
      avgResolutionTime: number;
      description?: string;
    }>();

    items.forEach((item: any) => {
      if (item.tags && item.tags.length > 0) {
        item.tags.forEach((tag: any) => {
          if (!tagMap.has(tag.name)) {
            tagMap.set(tag.name, {
              count: 0,
              items: [],
              assignees: new Set(),
              avgResolutionTime: 0,
              description: tag.description
            });
          }
          
          const tagData = tagMap.get(tag.name)!;
          tagData.count++;
          tagData.items.push(item);
          if (item.content.assignee_name) {
            tagData.assignees.add(item.content.assignee_name);
          }
        });
      } else {
        // Handle untagged items
        if (!tagMap.has('Untagged')) {
          tagMap.set('Un tagged', {
            count: 0,
            items: [],
            assignees: new Set(),
            avgResolutionTime: 0
          });
        }
        const untaggedData = tagMap.get('Untagged')!;
        untaggedData.count++;
        untaggedData.items.push(item);
        if (item.content.assignee_name) {
          untaggedData.assignees.add(item.content.assignee_name);
        }
      }
    });

    return Array.from(tagMap.entries())
      .map(([name, data]) => ({ name, ...data }))
      .sort((a, b) => b.count - a.count);
  }, [items]);

  const getTagColor = (index: number) => {
    const colors = [
      'bg-blue-500', 'bg-indigo-500', 'bg-purple-500', 'bg-pink-500',
      'bg-red-500', 'bg-orange-500', 'bg-yellow-500', 'bg-green-500',
      'bg-emerald-500', 'bg-teal-500', 'bg-cyan-500', 'bg-sky-500'
    ];
    return colors[index % colors.length];
  };

  const maxCount = Math.max(...tagAnalytics.map(tag => tag.count));

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Tag Analytics</h2>
        <p className="text-gray-600">Distribution and analysis of issue tags</p>
      </div>

      {/* Tag Distribution Chart */}
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Tag Distribution</h3>
        <div className="space-y-3">
          {tagAnalytics.map((tag, index) => (
            <div key={tag.name} className="flex items-center gap-3">
              <div className="w-24 text-sm font-medium text-gray-700 truncate">
                {tag.name}
              </div>
              <div className="flex-1 bg-gray-200 rounded-full h-6 relative">
                <div
                  className={`h-6 rounded-full ${getTagColor(index)} transition-all duration-300`}
                  style={{ width: `${(tag.count / maxCount) * 100}%` }}
                ></div>
                <span className="absolute inset-0 flex items-center justify-center text-xs font-semibold text-white">
                  {tag.count}
                </span>
              </div>
              <div className="w-16 text-sm text-gray-500 text-right">
                {Math.round((tag.count / items.length) * 100)}%
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Tag Details */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {tagAnalytics.slice(0, 6).map((tag, index) => (
          <div key={tag.name} className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <div className={`w-3 h-3 rounded-full ${getTagColor(index)}`}></div>
                <h3 className="text-lg font-semibold text-gray-800">{tag.name}</h3>
              </div>
              <span className="text-2xl font-bold text-gray-900">{tag.count}</span>
            </div>

            {tag.description && (
              <p className="text-sm text-gray-600 mb-4 line-clamp-3">
                {tag.description}
              </p>
            )}

            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 text-gray-500" />
                <div>
                  <p className="text-xs text-gray-500">Assignees</p>
                  <p className="text-sm font-semibold text-gray-800">{tag.assignees.size}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-gray-500" />
                <div>
                  <p className="text-xs text-gray-500">Frequency</p>
                  <p className="text-sm font-semibold text-gray-800">
                    {Math.round((tag.count / items.length) * 100)}%
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Top Assignees by Tag */}
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Most Active Tags</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {tagAnalytics.slice(0, 3).map((tag, index) => (
            <div key={tag.name} className="text-center p-4 bg-gray-50 rounded-lg">
              <div className={`w-12 h-12 ${getTagColor(index)} rounded-full flex items-center justify-center mx-auto mb-2`}>
                <Tag className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-semibold text-gray-800">{tag.name}</h4>
              <p className="text-2xl font-bold text-gray-900 mt-1">{tag.count}</p>
              <p className="text-xs text-gray-500">
                {tag.assignees.size} assignee{tag.assignees.size !== 1 ? 's' : ''}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}