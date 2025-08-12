import React, { useState, useMemo } from 'react';
import { Search, Filter, Calendar, User, Tag as TagIcon } from 'lucide-react';

interface IssueAnalysisProps {
  data: any;
}

export default function IssueAnalysis({ data }: IssueAnalysisProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedAssignee, setSelectedAssignee] = useState('');
  const [selectedTag, setSelectedTag] = useState('');
  const [sortBy, setSortBy] = useState('createdAt');

  const items = data.Items || [];

  const { filteredItems, assignees, tags } = useMemo(() => {
    const assigneeSet = new Set<string>();
    const tagSet = new Set<string>();

    items.forEach((item: any) => {
      if (item.content.assignee_name) assigneeSet.add(item.content.assignee_name);
      item.tags?.forEach((tag: any) => tagSet.add(tag.name));
    });

    const filtered = items.filter((item: any) => {
      const matchesSearch = !searchTerm || 
        item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.content.issue_description?.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesAssignee = !selectedAssignee || item.content.assignee_name === selectedAssignee;
      const matchesTag = !selectedTag || item.tags?.some((tag: any) => tag.name === selectedTag);

      return matchesSearch && matchesAssignee && matchesTag;
    });

    const sorted = [...filtered].sort((a, b) => {
      switch (sortBy) {
        case 'createdAt':
          return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
        case 'priority':
          const priorityOrder = { 'Blocker': 4, 'Critical': 3, 'Major': 2, 'Minor': 1, '': 0 };
          return (priorityOrder[b.content.priority as keyof typeof priorityOrder] || 0) - 
                 (priorityOrder[a.content.priority as keyof typeof priorityOrder] || 0);
        case 'title':
          return a.title.localeCompare(b.title);
        default:
          return 0;
      }
    });

    return {
      filteredItems: sorted,
      assignees: Array.from(assigneeSet).sort(),
      tags: Array.from(tagSet).sort()
    };
  }, [items, searchTerm, selectedAssignee, selectedTag, sortBy]);

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'Blocker': return 'bg-red-100 text-red-800';
      case 'Critical': return 'bg-orange-100 text-orange-800';
      case 'Major': return 'bg-yellow-100 text-yellow-800';
      case 'Minor': return 'bg-blue-100 text-blue-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Issue Analysis</h2>
        <p className="text-gray-600">Explore and analyze individual JIRA activities</p>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-lg shadow p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input
              type="text"
              placeholder="Search issues..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          <select
            value={selectedAssignee}
            onChange={(e) => setSelectedAssignee(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="">All Assignees</option>
            {assignees.map(assignee => (
              <option key={assignee} value={assignee}>{assignee}</option>
            ))}
          </select>

          <select
            value={selectedTag}
            onChange={(e) => setSelectedTag(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="">All Tags</option>
            {tags.map(tag => (
              <option key={tag} value={tag}>{tag}</option>
            ))}
          </select>

          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="createdAt">Sort by Date</option>
            <option value="priority">Sort by Priority</option>
            <option value="title">Sort by Title</option>
          </select>
        </div>
      </div>

      {/* Results */}
      <div className="bg-white rounded-lg shadow">
        <div className="p-4 border-b border-gray-200">
          <p className="text-sm text-gray-600">
            Showing {filteredItems.length} of {items.length} issues
          </p>
        </div>

        <div className="divide-y divide-gray-200 max-h-96 overflow-y-auto scrollbar-hide">
          {filteredItems.map((item: any) => (
            <div key={item.id} className="p-6 hover:bg-gray-50 transition-colors">
              <div className="flex items-start justify-between">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="text-lg font-semibold text-gray-900 truncate">
                      {item.title}
                    </h3>
                    {item.content.priority && (
                      <span className={`px-2 py-1 text-xs font-medium rounded-full ${getPriorityColor(item.content.priority)}`}>
                        {item.content.priority}
                      </span>
                    )}
                  </div>
                  
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {formatDate(item.createdAt)}
                    </div>
                    {item.content.assignee_name && (
                      <div className="flex items-center gap-1">
                        <User className="w-4 h-4" />
                        {item.content.assignee_name}
                      </div>
                    )}
                    <div className="flex items-center gap-1">
                      <TagIcon className="w-4 h-4" />
                      {item.tags?.length || 0} tags
                    </div>
                  </div>

                  {item.tags && item.tags.length > 0 && (
                    <div className="flex flex-wrap gap-1 mb-3">
                      {item.tags.map((tag: any, index: number) => (
                        <span
                          key={index}
                          className="px-2 py-1 text-xs bg-blue-100 text-blue-800 rounded-full"
                        >
                          {tag.name}
                        </span>
                      ))}
                    </div>
                  )}

                  {item.content.issue_description && (
                    <p className="text-sm text-gray-600 line-clamp-2">
                      {item.content.issue_description.substring(0, 200)}...
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}