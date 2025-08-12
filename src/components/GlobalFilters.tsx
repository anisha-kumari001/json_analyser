import { useState, useMemo } from 'react';
import { Calendar, Filter, Search, Download, AlertTriangle } from 'lucide-react';

export interface DateRange {
  start: Date;
  end: Date;
  type: 'absolute' | 'relative';
  relativeDays?: number;
}

export interface Filters {
  dateRange: DateRange;
  dateType: 'created' | 'resolved';
  selectedTags: string[];
  priorities: string[];
  labels: string[];
  assignees: string[];
  reporters: string[];
  slaBreachOnly: boolean;
  textSearch: string;
  compareMode: boolean;
  compareDateRange?: DateRange;
}

interface GlobalFiltersProps {
  filters: Filters;
  onFiltersChange: (filters: Filters) => void;
  availableTags: Array<{ name: string; category: string; count: number }>;
  availableAssignees: string[];
  availableReporters: string[];
  availablePriorities: string[];
  availableLabels: string[];
  dateRange: { min: Date; max: Date };
  isSummaryTab?: boolean;
}

const RELATIVE_RANGES = [
  { label: 'Last 7 days', days: 7 },
  { label: 'Last 10 days', days: 10 },
  { label: 'Last 14 days', days: 14 },
  { label: 'Last 30 days', days: 30 },
  { label: 'Last 90 days', days: 90 },
];

export default function GlobalFilters({
  filters,
  onFiltersChange,
  availableTags,
  availableAssignees,
  availableReporters,
  availablePriorities,
  availableLabels,
  dateRange,
  isSummaryTab = false
}: GlobalFiltersProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const updateFilters = (updates: Partial<Filters>) => {
    onFiltersChange({ ...filters, ...updates });
  };

  const setRelativeRange = (days: number) => {
    const end = new Date();
    const start = new Date();
    start.setDate(start.getDate() - days);
    
    updateFilters({
      dateRange: { start, end, type: 'relative', relativeDays: days }
    });
  };

  const toggleCompareMode = () => {
    if (!filters.compareMode) {
      // Enable compare mode - set comparison to previous period
      const periodDays = filters.dateRange.relativeDays || 7;
      const compareEnd = new Date(filters.dateRange.start);
      const compareStart = new Date(compareEnd);
      compareStart.setDate(compareStart.getDate() - periodDays);
      
      updateFilters({
        compareMode: true,
        compareDateRange: { start: compareStart, end: compareEnd, type: 'relative' }
      });
    } else {
      updateFilters({ compareMode: false, compareDateRange: undefined });
    }
  };

  const formatDate = (date: Date) => {
    return date.toISOString().split('T')[0];
  };

  const groupedTags = useMemo(() => {
    const groups: Record<string, Array<{ name: string; count: number }>> = {};
    availableTags.forEach(tag => {
      const category = tag.category || 'Other';
      if (!groups[category]) groups[category] = [];
      groups[category].push({ name: tag.name, count: tag.count });
    });
    return groups;
  }, [availableTags]);

  return (
    <div className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Always Visible Quick Filters */}
        <div className="py-4">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
              <Filter className="w-5 h-5" />
              Filters
            </h2>
            <div className="flex items-center gap-2">
              <button
                onClick={isSummaryTab ? undefined : () => setIsExpanded(!isExpanded)}
                disabled={isSummaryTab}
                className={`px-3 py-1 text-sm rounded-md ${
                  isSummaryTab
                    ? 'bg-gray-100 text-gray-400 cursor-not-allowed opacity-50'
                    : 'bg-blue-100 text-blue-700 hover:bg-blue-200'
                }`}
              >
                {isSummaryTab ? 'Advanced Filters' : isExpanded ? 'Less Filters' : 'More Filters'}
              </button>
              <button
                onClick={isSummaryTab ? undefined : toggleCompareMode}
                disabled={isSummaryTab}
                className={`px-3 py-1 text-sm rounded-md ${
                  isSummaryTab
                    ? 'bg-gray-100 text-gray-400 cursor-not-allowed opacity-50'
                    : filters.compareMode 
                    ? 'bg-green-100 text-green-700' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Compare Periods
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Date Range Quick Picks */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Date Range</label>
              <div className="flex flex-wrap gap-1">
                {RELATIVE_RANGES.map(range => (
                  <button
                    key={range.days}
                    onClick={() => setRelativeRange(range.days)}
                    className={`px-2 py-1 text-xs rounded ${
                      filters.dateRange.relativeDays === range.days
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {range.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Date Type Toggle */}
            <div>
              <label className={`block text-sm font-medium mb-2 ${isSummaryTab ? 'text-gray-400' : 'text-gray-700'}`}>Date Type</label>
              <div className="flex rounded-md border border-gray-300">
                <button
                  onClick={isSummaryTab ? undefined : () => updateFilters({ dateType: 'created' })}
                  disabled={isSummaryTab}
                  className={`px-3 py-2 text-sm rounded-l-md ${
                    isSummaryTab
                      ? 'bg-gray-100 text-gray-400 cursor-not-allowed opacity-50'
                      : filters.dateType === 'created'
                      ? 'bg-blue-600 text-white'
                      : 'bg-white text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  Created
                </button>
                <button
                  onClick={isSummaryTab ? undefined : () => updateFilters({ dateType: 'resolved' })}
                  disabled={isSummaryTab}
                  className={`px-3 py-2 text-sm rounded-r-md ${
                    isSummaryTab
                      ? 'bg-gray-100 text-gray-400 cursor-not-allowed opacity-50'
                      : filters.dateType === 'resolved'
                      ? 'bg-blue-600 text-white'
                      : 'bg-white text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  Resolved
                </button>
              </div>
              {isSummaryTab && (
                <p className="text-xs text-gray-400 mt-1 italic">Date type is fixed to 'Created' in summary view</p>
              )}
            </div>

            {/* Text Search */}
            <div>
              <label className={`block text-sm font-medium mb-2 ${isSummaryTab ? 'text-gray-400' : 'text-gray-700'}`}>Search</label>
              <div className="relative">
                <Search className={`absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 ${isSummaryTab ? 'text-gray-300' : 'text-gray-400'}`} />
                <input
                  type="text"
                  placeholder={isSummaryTab ? "Search disabled in summary view" : "Search titles, descriptions..."}
                  value={isSummaryTab ? '' : filters.textSearch}
                  onChange={isSummaryTab ? undefined : (e) => updateFilters({ textSearch: e.target.value })}
                  disabled={isSummaryTab}
                  className={`pl-10 pr-4 py-2 w-full border rounded-md ${
                    isSummaryTab
                      ? 'bg-gray-100 border-gray-200 text-gray-400 cursor-not-allowed opacity-50'
                      : 'border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                  }`}
                />
              </div>
              {isSummaryTab && (
                <p className="text-xs text-gray-400 mt-1 italic">Text search is disabled in summary view</p>
              )}
            </div>

            {/* SLA Breach Toggle */}
            <div>
              <label className={`block text-sm font-medium mb-2 ${isSummaryTab ? 'text-gray-400' : 'text-gray-700'}`}>SLA Breach</label>
              <button
                onClick={isSummaryTab ? undefined : () => updateFilters({ slaBreachOnly: !filters.slaBreachOnly })}
                disabled={isSummaryTab}
                className={`flex items-center gap-2 px-3 py-2 rounded-md border ${
                  isSummaryTab
                    ? 'bg-gray-100 border-gray-200 text-gray-400 cursor-not-allowed opacity-50'
                    : filters.slaBreachOnly
                    ? 'bg-red-100 border-red-300 text-red-700'
                    : 'bg-white border-gray-300 text-gray-700 hover:bg-gray-50'
                }`}
              >
                <AlertTriangle className="w-4 h-4" />
                {isSummaryTab ? 'SLA Filter' : filters.slaBreachOnly ? 'Show All' : 'Breach Only'}
              </button>
              {isSummaryTab && (
                <p className="text-xs text-gray-400 mt-1 italic">SLA breach filter is disabled in summary view</p>
              )}
            </div>
          </div>

          {/* Compare Mode Indicator */}
          {filters.compareMode && (
            <div className="mt-4 p-3 bg-green-50 border border-green-200 rounded-md">
              <p className="text-sm text-green-700">
                <strong>Compare Mode:</strong> Comparing{' '}
                {formatDate(filters.dateRange.start)} - {formatDate(filters.dateRange.end)}{' '}
                vs{' '}
                {filters.compareDateRange && (
                  <>
                    {formatDate(filters.compareDateRange.start)} - {formatDate(filters.compareDateRange.end)}
                  </>
                )}
              </p>
            </div>
          )}
        </div>

        {/* Expanded Filters */}
        {isExpanded && (
          <div className="pb-4 border-t border-gray-200 pt-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Absolute Date Range */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Custom Date Range</label>
                <div className="grid grid-cols-2 gap-2">
                  <input
                    type="date"
                    value={formatDate(filters.dateRange.start)}
                    min={formatDate(dateRange.min)}
                    max={formatDate(dateRange.max)}
                    onChange={(e) => updateFilters({
                      dateRange: {
                        ...filters.dateRange,
                        start: new Date(e.target.value),
                        type: 'absolute'
                      }
                    })}
                    className="px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                  />
                  <input
                    type="date"
                    value={formatDate(filters.dateRange.end)}
                    min={formatDate(dateRange.min)}
                    max={formatDate(dateRange.max)}
                    onChange={(e) => updateFilters({
                      dateRange: {
                        ...filters.dateRange,
                        end: new Date(e.target.value),
                        type: 'absolute'
                      }
                    })}
                    className="px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              {/* Tags Multi-Select */}
              <div>
                <label className={`block text-sm font-medium mb-2 ${isSummaryTab ? 'text-gray-400' : 'text-gray-700'}`}>
                  Tags ({filters.selectedTags.length} selected)
                </label>
                <div className={`max-h-40 overflow-y-auto scrollbar-hide border rounded-md p-2 ${
                  isSummaryTab ? 'border-gray-200 bg-gray-50' : 'border-gray-300'
                }`}>
                  {Object.entries(groupedTags).map(([category, tags]) => (
                    <div key={category} className="mb-3">
                      <h4 className={`text-xs font-semibold uppercase tracking-wide mb-1 ${
                        isSummaryTab ? 'text-gray-400' : 'text-gray-500'
                      }`}>
                        {category}
                      </h4>
                      {tags.map(tag => (
                        <label key={tag.name} className={`flex items-center gap-2 py-1 ${
                          isSummaryTab ? 'cursor-not-allowed' : 'hover:bg-gray-50'
                        }`}>
                          <input
                            type="checkbox"
                            checked={filters.selectedTags.includes(tag.name)}
                            onChange={isSummaryTab ? undefined : (e) => {
                              const newTags = e.target.checked
                                ? [...filters.selectedTags, tag.name]
                                : filters.selectedTags.filter(t => t !== tag.name);
                              updateFilters({ selectedTags: newTags });
                            }}
                            disabled={isSummaryTab}
                            className={`rounded border-gray-300 ${
                              isSummaryTab
                                ? 'text-gray-400 cursor-not-allowed opacity-50'
                                : 'text-blue-600 focus:ring-blue-500'
                            }`}
                          />
                          <span className={`text-sm ${isSummaryTab ? 'text-gray-400' : 'text-gray-700'}`}>{tag.name}</span>
                          <span className={`text-xs ${isSummaryTab ? 'text-gray-300' : 'text-gray-500'}`}>({tag.count})</span>
                        </label>
                      ))}
                    </div>
                  ))}
                </div>
                {isSummaryTab && (
                  <p className="text-xs text-gray-400 mt-1 italic">Tag filters are disabled in summary view</p>
                )}
              </div>

              {/* Other Filters */}
              <div className="space-y-4">
                {/* Priorities */}
                <div>
                  <label className={`block text-sm font-medium mb-2 ${isSummaryTab ? 'text-gray-400' : 'text-gray-700'}`}>Priority</label>
                  <select
                    multiple
                    value={filters.priorities}
                    onChange={isSummaryTab ? undefined : (e) => updateFilters({
                      priorities: Array.from(e.target.selectedOptions, option => option.value)
                    })}
                    disabled={isSummaryTab}
                    className={`w-full border rounded-md ${
                      isSummaryTab
                        ? 'bg-gray-100 border-gray-200 text-gray-400 cursor-not-allowed opacity-50'
                        : 'border-gray-300 focus:ring-2 focus:ring-blue-500'
                    }`}
                    size={3}
                  >
                    {availablePriorities.map(priority => (
                      <option key={priority} value={priority}>{priority}</option>
                    ))}
                  </select>
                  {isSummaryTab && (
                    <p className="text-xs text-gray-400 mt-1 italic">Priority filters are disabled in summary view</p>
                  )}
                </div>

                {/* Assignees */}
                <div>
                  <label className={`block text-sm font-medium mb-2 ${isSummaryTab ? 'text-gray-400' : 'text-gray-700'}`}>Assignees</label>
                  <select
                    multiple
                    value={filters.assignees}
                    onChange={isSummaryTab ? undefined : (e) => updateFilters({
                      assignees: Array.from(e.target.selectedOptions, option => option.value)
                    })}
                    disabled={isSummaryTab}
                    className={`w-full border rounded-md ${
                      isSummaryTab
                        ? 'bg-gray-100 border-gray-200 text-gray-400 cursor-not-allowed opacity-50'
                        : 'border-gray-300 focus:ring-2 focus:ring-blue-500'
                    }`}
                    size={3}
                  >
                    {availableAssignees.map(assignee => (
                      <option key={assignee} value={assignee}>{assignee}</option>
                    ))}
                  </select>
                  {isSummaryTab && (
                    <p className="text-xs text-gray-400 mt-1 italic">Assignee filters are disabled in summary view</p>
                  )}
                </div>

                {/* Reporters */}
                <div>
                  <label className={`block text-sm font-medium mb-2 ${isSummaryTab ? 'text-gray-400' : 'text-gray-700'}`}>Reporters</label>
                  <select
                    multiple
                    value={filters.reporters}
                    onChange={isSummaryTab ? undefined : (e) => updateFilters({
                      reporters: Array.from(e.target.selectedOptions, option => option.value)
                    })}
                    disabled={isSummaryTab}
                    className={`w-full border rounded-md ${
                      isSummaryTab
                        ? 'bg-gray-100 border-gray-200 text-gray-400 cursor-not-allowed opacity-50'
                        : 'border-gray-300 focus:ring-2 focus:ring-blue-500'
                    }`}
                    size={3}
                  >
                    {availableReporters.map(reporter => (
                      <option key={reporter} value={reporter}>{reporter}</option>
                    ))}
                  </select>
                  {isSummaryTab && (
                    <p className="text-xs text-gray-400 mt-1 italic">Reporter filters are disabled in summary view</p>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
