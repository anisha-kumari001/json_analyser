import { useState } from 'react';
import { ChevronDown, ChevronRight, Calendar, User, ExternalLink, AlertCircle } from 'lucide-react';

interface GroupIssueDetailsProps {
  data: any;
}

export default function GroupIssueDetails({ data }: GroupIssueDetailsProps) {
  const [expandedGroups, setExpandedGroups] = useState<Set<number>>(new Set());
  
  const groups = data.Groups || [];
  const items = data.Items || [];

  // Create a map of item ID to item object for quick lookup
  const itemsMap = new Map();
  items.forEach((item: any) => {
    itemsMap.set(item.id, item);
  });

  const toggleGroup = (groupId: number) => {
    const newExpanded = new Set(expandedGroups);
    if (newExpanded.has(groupId)) {
      newExpanded.delete(groupId);
    } else {
      newExpanded.add(groupId);
    }
    setExpandedGroups(newExpanded);
  };

  const getGroupIssues = (itemsList: number[]) => {
    return itemsList.map(id => itemsMap.get(id)).filter(Boolean);
  };

  // Debug logging
  console.log('GroupIssueDetails Debug:', {
    totalGroups: groups.length,
    totalItems: items.length,
    sampleGroup: groups[0],
    sampleItem: items[0]
  });

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'Blocker': return 'bg-red-100 text-red-800 border-red-200';
      case 'Critical': return 'bg-orange-100 text-orange-800 border-orange-200';
      case 'Major': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'Minor': return 'bg-blue-100 text-blue-800 border-blue-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const getResolutionStatus = (item: any) => {
    const resolvedTs = item.content?.resolved_ts;
    if (!resolvedTs || resolvedTs === "0001-01-01T00:00:00Z") {
      return { status: 'Open', color: 'bg-red-100 text-red-800' };
    }
    return { status: 'Resolved', color: 'bg-green-100 text-green-800' };
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Group Issue Details</h2>
        <p className="text-gray-600">Detailed breakdown of issues within each group</p>
      </div>

      <div className="space-y-4">
        {groups.map((group: any) => {
          const isExpanded = expandedGroups.has(group.GroupMetaData.GroupID);
          const groupIssues = getGroupIssues(group.ItemsList || []);
          
          return (
            <div key={group.GroupMetaData.GroupID} className="bg-white rounded-lg shadow-lg overflow-hidden">
              {/* Group Header */}
              <div 
                className="p-6 bg-gradient-to-r from-blue-50 to-indigo-50 border-b border-gray-200 cursor-pointer hover:from-blue-100 hover:to-indigo-100 transition-colors"
                onClick={() => toggleGroup(group.GroupMetaData.GroupID)}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    {isExpanded ? (
                      <ChevronDown className="w-5 h-5 text-gray-600" />
                    ) : (
                      <ChevronRight className="w-5 h-5 text-gray-600" />
                    )}
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">
                        {group.GroupMetaData.GroupName}
                      </h3>
                      <p className="text-sm text-gray-600">
                        {group.GroupMetaData.GroupDescription}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full">
                      {groupIssues.length} issues
                    </span>
                    {/* Issue Keys Preview */}
                    {groupIssues.filter(issue => issue.content?.issue_key).length > 0 && (
                      <div className="flex items-center gap-1">
                        <ExternalLink className="w-3 h-3 text-gray-500" />
                        <span className="text-xs text-gray-600">
                          {groupIssues.filter(issue => issue.content?.issue_key).length} keys
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Expanded Content */}
              {isExpanded && (
                <div className="p-6 space-y-4">
                  {/* Group Summary */}
                  {group.GroupMetaData.Summary && (
                    <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                      <h4 className="font-semibold text-blue-900 mb-2">Summary</h4>
                      <p className="text-sm text-blue-800">{group.GroupMetaData.Summary}</p>
                    </div>
                  )}

                  {/* Issue Keys Summary */}
                  {groupIssues.length > 0 && (
                    <div className="p-4 bg-indigo-50 rounded-lg border border-indigo-200">
                      <h4 className="font-semibold text-indigo-900 mb-2 flex items-center gap-2">
                        <ExternalLink className="w-4 h-4" />
                        Issue Keys in this Group
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {(() => {
                          const issuesWithKeys = groupIssues.filter(issue => issue.content?.issue_key);
                          console.log('Issues with keys for group:', group.GroupMetaData.GroupName, issuesWithKeys.map(i => ({
                            id: i.id,
                            issue_key: i.content?.issue_key,
                            title: i.title
                          })));
                          return issuesWithKeys.map((issue: any, index: number) => (
                            <span
                              key={index}
                              className="px-3 py-1 bg-white border border-indigo-300 text-indigo-800 text-sm font-mono rounded-md hover:bg-indigo-100 transition-colors"
                              title={`${issue.title || `Issue #${issue.id}`}`}
                            >
                              {issue.content.issue_key}
                            </span>
                          ));
                        })()}
                        {groupIssues.filter(issue => issue.content?.issue_key).length === 0 && (
                          <span className="text-sm text-gray-500 italic">
                            No issue keys available (Debug: {groupIssues.length} total issues in group)
                          </span>
                        )}
                      </div>
                      {groupIssues.filter(issue => issue.content?.issue_key).length > 0 && (
                        <p className="text-xs text-indigo-700 mt-2">
                          {groupIssues.filter(issue => issue.content?.issue_key).length} of {groupIssues.length} issues have keys
                        </p>
                      )}
                    </div>
                  )}

                  {/* Issues List */}
                  <div className="space-y-3">
                    <h4 className="font-semibold text-gray-900 flex items-center gap-2">
                      <AlertCircle className="w-5 h-5" />
                      Issues in this Group
                    </h4>
                    
                    {groupIssues.length === 0 ? (
                      <p className="text-gray-500 text-sm">No matching issues found in the Items array.</p>
                    ) : (
                      <div className="grid gap-4">
                        {groupIssues.map((issue: any) => {
                          const resolutionStatus = getResolutionStatus(issue);
                          
                          return (
                            <div key={issue.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                              <div className="flex items-start justify-between mb-3">
                                <div className="flex-1 min-w-0">
                                  <div className="flex items-center gap-2 mb-2">
                                    <h5 className="font-medium text-gray-900 truncate">
                                      {issue.title || `Issue #${issue.id}`}
                                    </h5>
                                    <span className={`px-2 py-1 text-xs font-medium rounded ${resolutionStatus.color}`}>
                                      {resolutionStatus.status}
                                    </span>
                                    {issue.content?.priority && (
                                      <span className={`px-2 py-1 text-xs font-medium rounded border ${getPriorityColor(issue.content.priority)}`}>
                                        {issue.content.priority}
                                      </span>
                                    )}
                                  </div>

                                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-2">
                                    <div className="flex items-center gap-1">
                                      <Calendar className="w-4 h-4" />
                                      Created: {formatDate(issue.createdAt)}
                                    </div>
                                    {issue.content?.assignee_name && (
                                      <div className="flex items-center gap-1">
                                        <User className="w-4 h-4" />
                                        {issue.content.assignee_name}
                                      </div>
                                    )}
                                    {issue.content?.issue_key && (
                                      <div className="flex items-center gap-1">
                                        <ExternalLink className="w-4 h-4" />
                                        {issue.content.issue_key}
                                      </div>
                                    )}
                                  </div>

                                  {/* Tags */}
                                  {issue.tags && issue.tags.length > 0 && (
                                    <div className="flex flex-wrap gap-1 mb-2">
                                      {issue.tags.map((tag: any, tagIndex: number) => (
                                        <span
                                          key={tagIndex}
                                          className="px-2 py-1 text-xs bg-indigo-100 text-indigo-800 rounded-full"
                                        >
                                          {tag.name}
                                        </span>
                                      ))}
                                    </div>
                                  )}

                                  {/* Issue Description */}
                                  {issue.content?.issue_description && (
                                    <p className="text-sm text-gray-600 line-clamp-2 bg-gray-50 p-2 rounded">
                                      {issue.content.issue_description.substring(0, 150)}
                                      {issue.content.issue_description.length > 150 && '...'}
                                    </p>
                                  )}
                                </div>
                              </div>

                              {/* Issue Metadata */}
                              <div className="pt-2 border-t border-gray-100">
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-xs text-gray-500">
                                  <div>ID: {issue.id}</div>
                                  {issue.content?.project_name && <div>Project: {issue.content.project_name}</div>}
                                  {issue.content?.status_transitions?.length > 0 && (
                                    <div>Transitions: {issue.content.status_transitions.length}</div>
                                  )}
                                  {issue.content?.comments?.length > 0 && (
                                    <div>Comments: {issue.content.comments.length}</div>
                                  )}
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    )}
                  </div>

                  {/* Group Actions */}
                  {group.GroupMetaData.Actions && (
                    <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                      <h4 className="font-semibold text-green-900 mb-2">Recommended Actions</h4>
                      <p className="text-sm text-green-800">{group.GroupMetaData.Actions}</p>
                    </div>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
