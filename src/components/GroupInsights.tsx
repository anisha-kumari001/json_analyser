import React from 'react';
import { Target, Lightbulb, Users, TrendingUp } from 'lucide-react';

interface GroupInsightsProps {
  data: any;
}

export default function GroupInsights({ data }: GroupInsightsProps) {
  const groups = data.Groups || [];

  const getGroupIcon = (groupName: string) => {
    if (groupName.includes('Tag:')) return Target;
    if (groupName.includes('Security')) return Users;
    return TrendingUp;
  };

  const getGroupColor = (index: number) => {
    const colors = [
      'bg-blue-500', 'bg-indigo-500', 'bg-purple-500', 'bg-green-500',
      'bg-red-500', 'bg-orange-500', 'bg-yellow-500', 'bg-emerald-500'
    ];
    return colors[index % colors.length];
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Group Insights</h2>
        <p className="text-gray-600">Analysis and recommendations for issue groups</p>
      </div>

      {/* Group Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {groups.map((group: any, index: number) => {
          const Icon = getGroupIcon(group.GroupMetaData.GroupName);
          return (
            <div key={group.GroupMetaData.GroupID} className="bg-white rounded-lg shadow p-4">
              <div className="flex items-center justify-between mb-2">
                <div className={`${getGroupColor(index)} p-2 rounded-lg`}>
                  <Icon className="w-5 h-5 text-white" />
                </div>
                <span className="text-2xl font-bold text-gray-900">
                  {group.ItemsList?.length || 0}
                </span>
              </div>
              <h3 className="font-semibold text-gray-800 text-sm mb-1 truncate">
                {group.GroupMetaData.GroupName}
              </h3>
              <p className="text-xs text-gray-500 line-clamp-2">
                {group.GroupMetaData.GroupDescription}
              </p>
            </div>
          );
        })}
      </div>

      {/* Detailed Group Analysis */}
      <div className="space-y-6">
        {groups.map((group: any, index: number) => (
          <div key={group.GroupMetaData.GroupID} className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex items-start gap-4 mb-6">
              <div className={`${getGroupColor(index)} p-3 rounded-lg`}>
                {React.createElement(getGroupIcon(group.GroupMetaData.GroupName), {
                  className: "w-6 h-6 text-white"
                })}
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-bold text-gray-900">
                    {group.GroupMetaData.GroupName}
                  </h3>
                  <span className="text-lg font-semibold text-gray-600">
                    {group.ItemsList?.length || 0} items
                  </span>
                </div>
                <p className="text-gray-600 mb-4">
                  {group.GroupMetaData.GroupDescription}
                </p>
                <p className="text-sm text-gray-700">
                  {group.GroupMetaData.Summary}
                </p>
              </div>
            </div>

            {/* Insights Section */}
            {group.GroupMetaData.Insight && (
              <div className="mb-6 p-4 bg-blue-50 rounded-lg border-l-4 border-blue-400">
                <div className="flex items-center gap-2 mb-2">
                  <Lightbulb className="w-5 h-5 text-blue-600" />
                  <h4 className="font-semibold text-blue-900">Key Insights</h4>
                </div>
                <p className="text-sm text-blue-800 leading-relaxed">
                  {group.GroupMetaData.Insight}
                </p>
              </div>
            )}

            {/* Actions Section */}
            {group.GroupMetaData.Actions && (
              <div className="p-4 bg-green-50 rounded-lg border-l-4 border-green-400">
                <div className="flex items-center gap-2 mb-2">
                  <Target className="w-5 h-5 text-green-600" />
                  <h4 className="font-semibold text-green-900">Recommended Actions</h4>
                </div>
                <p className="text-sm text-green-800 leading-relaxed">
                  {group.GroupMetaData.Actions}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Summary Statistics */}
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Group Distribution</h3>
        <div className="space-y-3">
          {groups.map((group: any, index: number) => {
            const itemCount = group.ItemsList?.length || 0;
            const totalItems = groups.reduce((sum: number, g: any) => sum + (g.ItemsList?.length || 0), 0);
            const percentage = totalItems > 0 ? (itemCount / totalItems) * 100 : 0;

            return (
              <div key={group.GroupMetaData.GroupID} className="flex items-center gap-3">
                <div className="w-32 text-sm font-medium text-gray-700 truncate">
                  {group.GroupMetaData.GroupName.replace('Tag: ', '')}
                </div>
                <div className="flex-1 bg-gray-200 rounded-full h-4 relative">
                  <div
                    className={`h-4 rounded-full ${getGroupColor(index)} transition-all duration-300`}
                    style={{ width: `${percentage}%` }}
                  ></div>
                </div>
                <div className="w-16 text-sm text-gray-500 text-right">
                  {itemCount} ({Math.round(percentage)}%)
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}