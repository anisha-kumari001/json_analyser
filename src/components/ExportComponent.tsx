import { useState } from 'react';
import { Download, FileText, Table, Mail, Calendar } from 'lucide-react';

interface ExportComponentProps {
  data: any;
  filters: any;
  filename?: string;
}

export default function ExportComponent({ data, filters, filename = 'jira_analysis' }: ExportComponentProps) {
  const [isExporting, setIsExporting] = useState(false);
  const [showEmailModal, setShowEmailModal] = useState(false);

  // Convert data to CSV
  const exportToCSV = () => {
    setIsExporting(true);
    
    try {
      const items = data?.Items || [];
      if (items.length === 0) {
        alert('No data to export');
        return;
      }

      const csvHeaders = [
        'ID', 'Title', 'Priority', 'Status', 'Assignee', 'Reporter', 
        'Created', 'Resolved', 'Resolution Time (hrs)', 'Tags', 'Labels', 'Description'
      ];

      const csvRows = items.map((item: any) => {
        const created = new Date(item.content?.created_ts || item.createdAt);
        const resolved = item.content?.resolved_ts && item.content.resolved_ts !== "0001-01-01T00:00:00Z" 
          ? new Date(item.content.resolved_ts) : null;
        const resolutionTime = resolved ? ((resolved.getTime() - created.getTime()) / (1000 * 60 * 60)).toFixed(1) : '';
        const tags = item.tags?.map((tag: any) => tag.name).join('; ') || '';
        const labels = item.content?.labels?.replace(/[\[\]]/g, '') || '';

        return [
          item.id,
          `"${(item.title || item.content?.issue_title || '').replace(/"/g, '""')}"`,
          item.content?.priority || '',
          item.content?.status_transitions?.[item.content.status_transitions.length - 1]?.to_state || 'Open',
          item.content?.assignee_name || '',
          item.content?.reporter_name || '',
          created.toISOString(),
          resolved?.toISOString() || '',
          resolutionTime,
          `"${tags.replace(/"/g, '""')}"`,
          `"${labels.replace(/"/g, '""')}"`,
          `"${(item.content?.issue_description || '').replace(/"/g, '""').substring(0, 200)}..."`
        ].join(',');
      });

      const csvContent = [csvHeaders.join(','), ...csvRows].join('\n');
      downloadFile(csvContent, `${filename}.csv`, 'text/csv');
    } finally {
      setIsExporting(false);
    }
  };

  // Convert data to Excel-compatible CSV
  const exportToExcel = () => {
    setIsExporting(true);
    
    try {
      const items = data?.Items || [];
      if (items.length === 0) {
        alert('No data to export');
        return;
      }

      // Create a more Excel-friendly format with summary sheet data
      const summaryData = [
        ['JIRA Analysis Report', ''],
        ['Generated:', new Date().toISOString()],
        ['Filter Applied:', JSON.stringify(filters, null, 2).replace(/[\r\n]/g, ' ').substring(0, 100)],
        ['Total Items:', items.length],
        ['Resolved Items:', items.filter((item: any) => item.content?.resolved_ts && item.content.resolved_ts !== "0001-01-01T00:00:00Z").length],
        ['Open Items:', items.filter((item: any) => !item.content?.resolved_ts || item.content.resolved_ts === "0001-01-01T00:00:00Z").length],
        [''],
        ['DETAILED DATA'],
        ['ID', 'Title', 'Priority', 'Status', 'Assignee', 'Reporter', 'Created', 'Resolved', 'Resolution Time (hrs)', 'Tags', 'Labels']
      ];

      const detailRows = items.map((item: any) => {
        const created = new Date(item.content?.created_ts || item.createdAt);
        const resolved = item.content?.resolved_ts && item.content.resolved_ts !== "0001-01-01T00:00:00Z" 
          ? new Date(item.content.resolved_ts) : null;
        const resolutionTime = resolved ? ((resolved.getTime() - created.getTime()) / (1000 * 60 * 60)).toFixed(1) : '';
        
        return [
          item.id,
          (item.title || item.content?.issue_title || '').replace(/"/g, '""'),
          item.content?.priority || '',
          item.content?.status_transitions?.[item.content.status_transitions.length - 1]?.to_state || 'Open',
          item.content?.assignee_name || '',
          item.content?.reporter_name || '',
          created.toLocaleDateString(),
          resolved?.toLocaleDateString() || '',
          resolutionTime,
          item.tags?.map((tag: any) => tag.name).join('; ') || '',
          item.content?.labels?.replace(/[\[\]]/g, '') || ''
        ];
      });

      const allRows = [...summaryData, ...detailRows];
      const csvContent = allRows.map(row => 
        row.map((cell: any) => `"${String(cell).replace(/"/g, '""')}"`).join(',')
      ).join('\n');
      
      downloadFile(csvContent, `${filename}_detailed.csv`, 'text/csv');
    } finally {
      setIsExporting(false);
    }
  };

  // Generate PDF report (HTML to PDF simulation)
  const exportToPDF = () => {
    setIsExporting(true);
    
    try {
      const items = data?.Items || [];
      const resolvedItems = items.filter((item: any) => item.content?.resolved_ts && item.content.resolved_ts !== "0001-01-01T00:00:00Z");
      const avgResTime = resolvedItems.length > 0 ? 
        resolvedItems.reduce((acc: number, item: any) => {
          const created = new Date(item.content?.created_ts || item.createdAt);
          const resolved = new Date(item.content.resolved_ts);
          return acc + ((resolved.getTime() - created.getTime()) / (1000 * 60 * 60));
        }, 0) / resolvedItems.length : 0;

      // Create HTML content for PDF
      const htmlContent = `
        <!DOCTYPE html>
        <html>
        <head>
          <title>JIRA Analysis Report</title>
          <style>
            body { font-family: Arial, sans-serif; margin: 20px; }
            .header { text-align: center; border-bottom: 2px solid #ccc; padding-bottom: 20px; margin-bottom: 20px; }
            .summary { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 20px; margin-bottom: 30px; }
            .metric { background: #f5f5f5; padding: 15px; border-radius: 5px; text-align: center; }
            .metric h3 { margin: 0; color: #333; }
            .metric p { font-size: 24px; font-weight: bold; margin: 10px 0; color: #007bff; }
            table { width: 100%; border-collapse: collapse; margin-top: 20px; }
            th, td { border: 1px solid #ddd; padding: 8px; text-align: left; }
            th { background-color: #f2f2f2; font-weight: bold; }
            tr:nth-child(even) { background-color: #f9f9f9; }
            .tags { font-size: 12px; color: #666; }
          </style>
        </head>
        <body>
          <div class="header">
            <h1>JIRA Analysis Report</h1>
            <p>Generated on ${new Date().toLocaleDateString()} at ${new Date().toLocaleTimeString()}</p>
          </div>
          
          <div class="summary">
            <div class="metric">
              <h3>Total Items</h3>
              <p>${items.length}</p>
            </div>
            <div class="metric">
              <h3>Resolved</h3>
              <p>${resolvedItems.length}</p>
            </div>
            <div class="metric">
              <h3>Resolution Rate</h3>
              <p>${((resolvedItems.length / items.length) * 100).toFixed(1)}%</p>
            </div>
            <div class="metric">
              <h3>Avg Resolution Time</h3>
              <p>${avgResTime.toFixed(1)}h</p>
            </div>
          </div>

          <h2>Item Details</h2>
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Title</th>
                <th>Priority</th>
                <th>Assignee</th>
                <th>Status</th>
                <th>Created</th>
                <th>Tags</th>
              </tr>
            </thead>
            <tbody>
              ${items.slice(0, 50).map((item: any) => `
                <tr>
                  <td>${item.id}</td>
                  <td>${(item.title || item.content?.issue_title || '').substring(0, 50)}...</td>
                  <td>${item.content?.priority || 'N/A'}</td>
                  <td>${item.content?.assignee_name || 'Unassigned'}</td>
                  <td>${item.content?.status_transitions?.[item.content.status_transitions.length - 1]?.to_state || 'Open'}</td>
                  <td>${new Date(item.content?.created_ts || item.createdAt).toLocaleDateString()}</td>
                  <td class="tags">${item.tags?.map((tag: any) => tag.name).join(', ') || ''}</td>
                </tr>
              `).join('')}
            </tbody>
          </table>
          
          ${items.length > 50 ? `<p><em>Showing first 50 items. Total: ${items.length} items.</em></p>` : ''}
        </body>
        </html>
      `;

      // Open in new window for printing/PDF save
      const printWindow = window.open('', '_blank');
      if (printWindow) {
        printWindow.document.write(htmlContent);
        printWindow.document.close();
        printWindow.print();
      }
    } finally {
      setIsExporting(false);
    }
  };

  const downloadFile = (content: string, filename: string, mimeType: string) => {
    const blob = new Blob([content], { type: mimeType });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const generateWeeklyReport = () => {
    const items = data?.Items || [];
    const now = new Date();
    const lastWeek = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
    
    const weeklyItems = items.filter((item: any) => {
      const created = new Date(item.content?.created_ts || item.createdAt);
      return created >= lastWeek;
    });

    const report = `
      WEEKLY JIRA ACTIVITY REPORT
      Period: ${lastWeek.toLocaleDateString()} - ${now.toLocaleDateString()}
      
      SUMMARY:
      - New Items: ${weeklyItems.length}
      - Resolved This Week: ${weeklyItems.filter((item: any) => 
        item.content?.resolved_ts && item.content.resolved_ts !== "0001-01-01T00:00:00Z" &&
        new Date(item.content.resolved_ts) >= lastWeek
      ).length}
      - High Priority Items: ${weeklyItems.filter((item: any) => item.content?.priority === 'High' || item.content?.priority === 'Critical').length}
      
      TOP ISSUES:
      ${weeklyItems.slice(0, 5).map((item: any, index: number) => 
        `${index + 1}. ${item.title || item.content?.issue_title || 'Untitled'} (${item.content?.priority || 'Normal'})`
      ).join('\n      ')}
      
      TEAM PERFORMANCE:
      ${Array.from(new Set(weeklyItems.map((item: any) => item.content?.assignee_name).filter(Boolean))).map(assignee => {
        const assigneeItems = weeklyItems.filter((item: any) => item.content?.assignee_name === assignee);
        const resolved = assigneeItems.filter((item: any) => item.content?.resolved_ts && item.content.resolved_ts !== "0001-01-01T00:00:00Z");
        return `- ${assignee}: ${assigneeItems.length} assigned, ${resolved.length} resolved (${((resolved.length / assigneeItems.length) * 100).toFixed(0)}%)`;
      }).join('\n      ')}
    `;

    downloadFile(report, `weekly_report_${lastWeek.toISOString().split('T')[0]}.txt`, 'text/plain');
  };

  return (
    <div className="flex flex-wrap gap-2">
      <button
        onClick={exportToCSV}
        disabled={isExporting}
        className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 disabled:opacity-50"
      >
        <Table className="w-4 h-4" />
        {isExporting ? 'Exporting...' : 'Export CSV'}
      </button>

      <button
        onClick={exportToExcel}
        disabled={isExporting}
        className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50"
      >
        <FileText className="w-4 h-4" />
        Export Excel
      </button>

      <button
        onClick={exportToPDF}
        disabled={isExporting}
        className="flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 disabled:opacity-50"
      >
        <Download className="w-4 h-4" />
        Export PDF
      </button>

      <button
        onClick={generateWeeklyReport}
        disabled={isExporting}
        className="flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 disabled:opacity-50"
      >
        <Calendar className="w-4 h-4" />
        Weekly Report
      </button>

      <button
        onClick={() => setShowEmailModal(true)}
        className="flex items-center gap-2 px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700"
      >
        <Mail className="w-4 h-4" />
        Email Report
      </button>

      {/* Email Modal */}
      {showEmailModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4">
            <h3 className="text-lg font-semibold mb-4">Email Report</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email Recipients</label>
                <input 
                  type="email" 
                  placeholder="team@company.com" 
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Report Type</label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                  <option>Weekly Summary</option>
                  <option>Detailed Analysis</option>
                  <option>SLA Breach Alert</option>
                </select>
              </div>
              <div className="flex justify-end gap-2 mt-6">
                <button 
                  onClick={() => setShowEmailModal(false)}
                  className="px-4 py-2 text-gray-600 hover:text-gray-800"
                >
                  Cancel
                </button>
                <button 
                  onClick={() => {
                    alert('Email functionality would integrate with your email service (SendGrid, AWS SES, etc.)');
                    setShowEmailModal(false);
                  }}
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                >
                  Send Report
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
