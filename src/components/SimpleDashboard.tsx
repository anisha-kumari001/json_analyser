import React from 'react';

interface SimpleDashboardProps {
  data: any;
  filters: any;
}

export default function SimpleDashboard({ data, filters }: SimpleDashboardProps) {
  console.log('SimpleDashboard data:', data);
  
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Simple Dashboard Test</h2>
      <div className="bg-white rounded-lg shadow p-6">
        <h3 className="text-lg font-semibold mb-4">Debug Information</h3>
        <div className="space-y-2">
          <div><strong>Data received:</strong> {data ? 'Yes' : 'No'}</div>
          <div><strong>Data type:</strong> {typeof data}</div>
          <div><strong>Has dailySummaries:</strong> {data?.dailySummaries ? 'Yes' : 'No'}</div>
          <div><strong>DailySummaries length:</strong> {data?.dailySummaries?.length || 0}</div>
          <div><strong>Has Items:</strong> {data?.Items ? 'Yes' : 'No'}</div>
          <div><strong>Items length:</strong> {data?.Items?.length || 0}</div>
        </div>
        
        {data?.dailySummaries && (
          <div className="mt-4">
            <h4 className="font-medium mb-2">First Daily Summary:</h4>
            <div className="bg-gray-50 p-3 rounded text-sm">
              <div>ID: {data.dailySummaries[0]?.id}</div>
              <div>Team: {data.dailySummaries[0]?.teamName}</div>
              <div>Content Items: {data.dailySummaries[0]?.contentJSON?.Items?.length || 0}</div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
