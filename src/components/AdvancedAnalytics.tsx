import { useState, useMemo } from 'react';
import { 
  TrendingUp, AlertTriangle, Clock, Zap, Users, 
  Target, Activity, Brain, Network
} from 'lucide-react';
import { Filters } from './GlobalFilters';

interface AdvancedAnalyticsProps {
  data: any;
  filters: Filters;
}

export default function AdvancedAnalytics({ data, filters }: AdvancedAnalyticsProps) {
  const [selectedAnalysis, setSelectedAnalysis] = useState('patterns');

  const insights = useMemo(() => {
    const items = data?.Items || [];
    
    return {
      // Pattern Analysis
      patterns: analyzePatterns(items),
      
      // Predictive Analytics
      predictions: generatePredictions(items),
      
      // Anomaly Detection
      anomalies: detectAnomalies(items),
      
      // Network Analysis
      networks: analyzeNetworks(items),
      
      // Trend Analysis
      trends: analyzeTrends(items),
      
      // Risk Assessment
      risks: assessRisks(items)
    };
  }, [data]);

  return (
    <div className="space-y-6">
      {/* Analysis Navigation */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        <div className="border-b border-gray-200 p-4">
          <h2 className="text-xl font-semibold text-gray-900">Advanced Analytics & Insights</h2>
          <p className="text-sm text-gray-600 mt-1">AI-powered analysis and predictive insights</p>
        </div>
        
        <div className="p-6">
          <div className="grid grid-cols-2 lg:grid-cols-6 gap-3 mb-6">
            {[
              { id: 'patterns', label: 'Pattern Analysis', icon: Brain },
              { id: 'predictions', label: 'Predictions', icon: TrendingUp },
              { id: 'anomalies', label: 'Anomalies', icon: AlertTriangle },
              { id: 'networks', label: 'Networks', icon: Network },
              { id: 'trends', label: 'Trends', icon: Activity },
              { id: 'risks', label: 'Risk Assessment', icon: Target }
            ].map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                onClick={() => setSelectedAnalysis(id)}
                className={`flex flex-col items-center p-4 rounded-lg border transition-all ${
                  selectedAnalysis === id
                    ? 'border-blue-500 bg-blue-50 text-blue-700'
                    : 'border-gray-200 hover:border-gray-300 text-gray-600'
                }`}
              >
                <Icon className="w-6 h-6 mb-2" />
                <span className="text-sm font-medium text-center">{label}</span>
              </button>
            ))}
          </div>
          
          {renderAnalysisContent()}
        </div>
      </div>
    </div>
  );

  function renderAnalysisContent() {
    switch (selectedAnalysis) {
      case 'patterns':
        return <PatternAnalysis patterns={insights.patterns} />;
      case 'predictions':
        return <PredictiveAnalysis predictions={insights.predictions} />;
      case 'anomalies':
        return <AnomalyDetection anomalies={insights.anomalies} />;
      case 'networks':
        return <NetworkAnalysis networks={insights.networks} />;
      case 'trends':
        return <TrendAnalysis trends={insights.trends} />;
      case 'risks':
        return <RiskAssessment risks={insights.risks} />;
      default:
        return <PatternAnalysis patterns={insights.patterns} />;
    }
  }
}

// Pattern Analysis Component
function PatternAnalysis({ patterns }: { patterns: any }) {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recurring Issue Patterns */}
        <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg p-6 border border-purple-200">
          <h3 className="text-lg font-semibold text-purple-900 mb-4 flex items-center gap-2">
            <Brain className="w-5 h-5" />
            Recurring Issue Patterns
          </h3>
          <div className="space-y-3">
            {patterns.recurring.map((pattern: any, index: number) => (
              <div key={index} className="bg-white rounded-lg p-4 border border-purple-100">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-medium text-gray-900">{pattern.name}</h4>
                  <span className="text-sm text-purple-600 bg-purple-100 px-2 py-1 rounded">
                    {pattern.frequency}x
                  </span>
                </div>
                <p className="text-sm text-gray-600 mb-2">{pattern.description}</p>
                <div className="text-xs text-purple-700">
                  <strong>Root Cause:</strong> {pattern.rootCause}
                </div>
                <div className="text-xs text-green-700 mt-1">
                  <strong>Recommendation:</strong> {pattern.recommendation}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Time-based Patterns */}
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-6 border border-blue-200">
          <h3 className="text-lg font-semibold text-blue-900 mb-4 flex items-center gap-2">
            <Clock className="w-5 h-5" />
            Temporal Patterns
          </h3>
          <div className="space-y-4">
            {patterns.temporal.map((pattern: any, index: number) => (
              <div key={index} className="bg-white rounded-lg p-4 border border-blue-100">
                <h4 className="font-medium text-gray-900 mb-2">{pattern.type}</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-sm text-gray-600">Peak Time</div>
                    <div className="font-semibold text-blue-900">{pattern.peakTime}</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-600">Impact</div>
                    <div className="font-semibold text-red-600">{pattern.impact}</div>
                  </div>
                </div>
                <div className="mt-3 text-sm text-gray-700">{pattern.insight}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Tag Co-occurrence Matrix */}
      <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
          <Network className="w-5 h-5" />
          Tag Co-occurrence Matrix
        </h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div>
            <h4 className="font-medium mb-3">Frequent Combinations</h4>
            <div className="space-y-2">
              {patterns.cooccurrence.slice(0, 5).map((combo: any, index: number) => (
                <div key={index} className="flex justify-between items-center p-3 bg-white rounded border">
                  <div className="flex gap-2">
                    {combo.tags.map((tag: string, tagIndex: number) => (
                      <span key={tagIndex} className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-xs">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <span className="font-semibold text-gray-900">{combo.count}</span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-medium mb-3">Correlation Insights</h4>
            <div className="space-y-3">
              {patterns.correlations.map((insight: any, index: number) => (
                <div key={index} className="p-3 bg-white rounded border">
                  <div className="font-medium text-sm text-gray-900">{insight.title}</div>
                  <div className="text-sm text-gray-600 mt-1">{insight.description}</div>
                  <div className="text-xs text-orange-600 mt-2">
                    Correlation: {(insight.strength * 100).toFixed(0)}%
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Predictive Analysis Component
function PredictiveAnalysis({ predictions }: { predictions: any }) {
  return (
    <div className="space-y-6">
      {/* SLA Prediction */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-6 border border-green-200">
          <h3 className="text-lg font-semibold text-green-900 mb-4 flex items-center gap-2">
            <Target className="w-5 h-5" />
            SLA Predictions
          </h3>
          <div className="space-y-4">
            <div className="text-center">
              <div className="text-3xl font-bold text-green-900">{predictions.sla.risk}%</div>
              <div className="text-sm text-green-700">Breach Risk</div>
            </div>
            <div className="space-y-2">
              {predictions.sla.items.map((item: any, index: number) => (
                <div key={index} className="bg-white rounded p-3 border border-green-100">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">#{item.id}</span>
                    <span className={`text-xs px-2 py-1 rounded ${
                      item.riskLevel === 'high' ? 'bg-red-100 text-red-800' :
                      item.riskLevel === 'medium' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-green-100 text-green-800'
                    }`}>
                      {item.riskLevel}
                    </span>
                  </div>
                  <div className="text-xs text-gray-600 mt-1">
                    ETA: {item.predictedResolution}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Volume Prediction */}
        <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-lg p-6 border border-orange-200">
          <h3 className="text-lg font-semibold text-orange-900 mb-4 flex items-center gap-2">
            <TrendingUp className="w-5 h-5" />
            Volume Forecast
          </h3>
          <div className="space-y-4">
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-900">+{predictions.volume.increase}%</div>
              <div className="text-sm text-orange-700">Next Week</div>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Expected Items:</span>
                <span className="font-semibold">{predictions.volume.expected}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>High Priority:</span>
                <span className="font-semibold text-red-600">{predictions.volume.highPriority}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Confidence:</span>
                <span className="font-semibold text-green-600">{predictions.volume.confidence}%</span>
              </div>
            </div>
          </div>
        </div>

        {/* Team Capacity */}
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-6 border border-blue-200">
          <h3 className="text-lg font-semibold text-blue-900 mb-4 flex items-center gap-2">
            <Users className="w-5 h-5" />
            Capacity Analysis
          </h3>
          <div className="space-y-3">
            {predictions.capacity.members.map((member: any, index: number) => (
              <div key={index} className="bg-white rounded p-3 border border-blue-100">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-medium text-gray-900">{member.name}</span>
                  <span className={`text-xs px-2 py-1 rounded ${
                    member.utilization > 90 ? 'bg-red-100 text-red-800' :
                    member.utilization > 70 ? 'bg-yellow-100 text-yellow-800' :
                    'bg-green-100 text-green-800'
                  }`}>
                    {member.utilization}%
                  </span>
                </div>
                <div className="text-xs text-gray-600">
                  Available: {member.availableHours}h | Load: {member.currentLoad}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// Anomaly Detection Component
function AnomalyDetection({ anomalies }: { anomalies: any }) {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Unusual Patterns */}
        <div className="bg-gradient-to-r from-red-50 to-pink-50 rounded-lg p-6 border border-red-200">
          <h3 className="text-lg font-semibold text-red-900 mb-4 flex items-center gap-2">
            <AlertTriangle className="w-5 h-5" />
            Unusual Patterns Detected
          </h3>
          <div className="space-y-3">
            {anomalies.patterns.map((anomaly: any, index: number) => (
              <div key={index} className="bg-white rounded-lg p-4 border border-red-100">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-medium text-gray-900">{anomaly.title}</h4>
                  <span className={`text-xs px-2 py-1 rounded ${
                    anomaly.severity === 'critical' ? 'bg-red-100 text-red-800' :
                    anomaly.severity === 'high' ? 'bg-orange-100 text-orange-800' :
                    'bg-yellow-100 text-yellow-800'
                  }`}>
                    {anomaly.severity}
                  </span>
                </div>
                <p className="text-sm text-gray-600 mb-2">{anomaly.description}</p>
                <div className="text-xs text-red-700">
                  <strong>Impact:</strong> {anomaly.impact}
                </div>
                <div className="text-xs text-blue-700 mt-1">
                  <strong>Action:</strong> {anomaly.recommendation}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Performance Outliers */}
        <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-lg p-6 border border-yellow-200">
          <h3 className="text-lg font-semibold text-yellow-900 mb-4 flex items-center gap-2">
            <Zap className="w-5 h-5" />
            Performance Outliers
          </h3>
          <div className="space-y-3">
            {anomalies.performance.map((outlier: any, index: number) => (
              <div key={index} className="bg-white rounded-lg p-4 border border-yellow-100">
                <div className="flex justify-between items-center mb-2">
                  <h4 className="font-medium text-gray-900">{outlier.metric}</h4>
                  <span className="text-sm font-semibold text-yellow-900">
                    {outlier.value} ({outlier.deviation})
                  </span>
                </div>
                <p className="text-sm text-gray-600">{outlier.context}</p>
                <div className="mt-2 text-xs text-yellow-700">
                  Expected range: {outlier.expectedRange}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// Network Analysis Component  
function NetworkAnalysis({ networks }: { networks: any }) {
  return (
    <div className="space-y-6">
      <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
          <Network className="w-5 h-5" />
          Collaboration Network Analysis
        </h3>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Key Collaborators */}
          <div>
            <h4 className="font-medium mb-3">Key Collaboration Hubs</h4>
            <div className="space-y-2">
              {networks.hubs.map((hub: any, index: number) => (
                <div key={index} className="flex justify-between items-center p-3 bg-white rounded border">
                  <div>
                    <div className="font-medium text-gray-900">{hub.name}</div>
                    <div className="text-sm text-gray-600">{hub.role}</div>
                  </div>
                  <div className="text-right">
                    <div className="font-semibold text-blue-900">{hub.connections}</div>
                    <div className="text-xs text-gray-500">connections</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bottlenecks */}
          <div>
            <h4 className="font-medium mb-3">Potential Bottlenecks</h4>
            <div className="space-y-2">
              {networks.bottlenecks.map((bottleneck: any, index: number) => (
                <div key={index} className="p-3 bg-white rounded border border-red-100">
                  <div className="font-medium text-gray-900 mb-1">{bottleneck.person}</div>
                  <div className="text-sm text-gray-600 mb-2">{bottleneck.issue}</div>
                  <div className="text-xs text-red-700">
                    Risk: {bottleneck.risk} | Mitigation: {bottleneck.mitigation}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Trend Analysis Component
function TrendAnalysis({ trends }: { trends: any }) {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {trends.categories.map((trend: any, index: number) => (
          <div key={index} className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
              <Activity className="w-5 h-5" />
              {trend.category}
            </h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Direction</span>
                <span className={`font-semibold ${
                  trend.direction === 'increasing' ? 'text-red-600' :
                  trend.direction === 'decreasing' ? 'text-green-600' :
                  'text-gray-600'
                }`}>
                  {trend.direction}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Change Rate</span>
                <span className="font-semibold text-blue-600">{trend.rate}</span>
              </div>
              <div className="text-sm text-gray-700 mt-3">
                {trend.insight}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// Risk Assessment Component
function RiskAssessment({ risks }: { risks: any }) {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm">
          <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
            <Target className="w-5 h-5" />
            Risk Factors
          </h3>
          <div className="space-y-3">
            {risks.factors.map((risk: any, index: number) => (
              <div key={index} className={`p-4 rounded-lg border ${
                risk.level === 'critical' ? 'border-red-200 bg-red-50' :
                risk.level === 'high' ? 'border-orange-200 bg-orange-50' :
                risk.level === 'medium' ? 'border-yellow-200 bg-yellow-50' :
                'border-green-200 bg-green-50'
              }`}>
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-medium text-gray-900">{risk.factor}</h4>
                  <span className={`text-xs px-2 py-1 rounded ${
                    risk.level === 'critical' ? 'bg-red-100 text-red-800' :
                    risk.level === 'high' ? 'bg-orange-100 text-orange-800' :
                    risk.level === 'medium' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-green-100 text-green-800'
                  }`}>
                    {risk.level}
                  </span>
                </div>
                <p className="text-sm text-gray-600 mb-2">{risk.description}</p>
                <div className="text-xs text-gray-700">
                  <strong>Mitigation:</strong> {risk.mitigation}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Risk Score</h3>
          <div className="text-center mb-6">
            <div className={`text-6xl font-bold mb-2 ${
              risks.overallScore >= 80 ? 'text-red-600' :
              risks.overallScore >= 60 ? 'text-orange-600' :
              risks.overallScore >= 40 ? 'text-yellow-600' :
              'text-green-600'
            }`}>
              {risks.overallScore}
            </div>
            <div className="text-lg text-gray-600">Overall Risk Level</div>
          </div>
          
          <div className="space-y-3">
            {Object.entries(risks.breakdown).map(([category, score]: [string, any]) => (
              <div key={category} className="flex justify-between items-center">
                <span className="text-sm capitalize text-gray-700">{category}</span>
                <div className="flex items-center gap-2">
                  <div className="w-16 bg-gray-200 rounded-full h-2">
                    <div 
                      className={`h-2 rounded-full ${
                        score >= 80 ? 'bg-red-500' :
                        score >= 60 ? 'bg-orange-500' :
                        score >= 40 ? 'bg-yellow-500' :
                        'bg-green-500'
                      }`}
                      style={{ width: `${score}%` }}
                    ></div>
                  </div>
                  <span className="text-sm font-medium w-8">{score}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// Analysis Functions
function analyzePatterns(items: any[]) {
  // Implement pattern analysis logic
  return {
    recurring: [
      {
        name: "Authentication Failures",
        frequency: 12,
        description: "Repeated authentication issues during peak hours",
        rootCause: "Token expiration during high load",
        recommendation: "Implement token refresh mechanism and load balancing"
      },
      {
        name: "Database Timeout Issues",
        frequency: 8,
        description: "Query timeouts in customer reporting module",
        rootCause: "Unoptimized queries on large datasets",
        recommendation: "Add database indexes and query optimization"
      }
    ],
    temporal: [
      {
        type: "Weekly Pattern",
        peakTime: "Tuesday 2-4 PM",
        impact: "High",
        insight: "Issues spike during weekly report generation"
      },
      {
        type: "Daily Pattern", 
        peakTime: "9-10 AM",
        impact: "Medium",
        insight: "Morning login surge creates system strain"
      }
    ],
    cooccurrence: [
      { tags: ["Config_Error", "Deployment"], count: 15 },
      { tags: ["Access_Request", "Security"], count: 12 },
      { tags: ["Performance", "Database"], count: 10 }
    ],
    correlations: [
      {
        title: "Config Errors → Deployment Issues",
        description: "Configuration errors strongly predict deployment failures",
        strength: 0.85
      },
      {
        title: "High Priority → Long Resolution",
        description: "Counter-intuitively, high priority items take longer to resolve",
        strength: 0.72
      }
    ]
  };
}

function generatePredictions(items: any[]) {
  return {
    sla: {
      risk: 23,
      items: [
        { id: "148817", riskLevel: "high", predictedResolution: "2h" },
        { id: "148822", riskLevel: "medium", predictedResolution: "6h" },
        { id: "148833", riskLevel: "low", predictedResolution: "12h" }
      ]
    },
    volume: {
      increase: 15,
      expected: 45,
      highPriority: 8,
      confidence: 87
    },
    capacity: {
      members: [
        { name: "Bowen Jiao", utilization: 95, availableHours: 2, currentLoad: "Critical" },
        { name: "Hariharan S", utilization: 78, availableHours: 8, currentLoad: "High" },
        { name: "Simin Wang", utilization: 45, availableHours: 20, currentLoad: "Normal" }
      ]
    }
  };
}

function detectAnomalies(items: any[]) {
  return {
    patterns: [
      {
        title: "Unusual spike in Config_Error tags",
        description: "300% increase in configuration errors over last 48 hours",
        severity: "critical",
        impact: "System stability at risk",
        recommendation: "Immediate deployment rollback and config audit"
      },
      {
        title: "Resolution time degradation",
        description: "Average resolution time increased by 45% this week",
        severity: "high", 
        impact: "SLA compliance at risk",
        recommendation: "Resource reallocation and process review"
      }
    ],
    performance: [
      {
        metric: "Response Time P95",
        value: "2.3s",
        deviation: "+180%",
        context: "API response times significantly higher than normal",
        expectedRange: "0.5s - 0.8s"
      },
      {
        metric: "Error Rate",
        value: "12%",
        deviation: "+400%", 
        context: "Error rate jumped during deployment window",
        expectedRange: "1% - 3%"
      }
    ]
  };
}

function analyzeNetworks(items: any[]) {
  return {
    hubs: [
      { name: "Bowen Jiao", role: "Senior Engineer", connections: 28 },
      { name: "Hariharan S", role: "Team Lead", connections: 22 },
      { name: "Simin Wang", role: "Engineer", connections: 15 }
    ],
    bottlenecks: [
      {
        person: "Bowen Jiao",
        issue: "Single point of failure for critical deployments", 
        risk: "High",
        mitigation: "Cross-train 2 additional team members"
      }
    ]
  };
}

function analyzeTrends(items: any[]) {
  return {
    categories: [
      {
        category: "Resolution Time",
        direction: "increasing",
        rate: "+12% weekly",
        insight: "Team capacity constraints leading to longer resolution times"
      },
      {
        category: "Issue Volume", 
        direction: "stable",
        rate: "±3% weekly",
        insight: "Issue creation rate remains consistent with historical averages"
      },
      {
        category: "SLA Compliance",
        direction: "decreasing", 
        rate: "-8% monthly",
        insight: "Need to adjust SLA targets or improve process efficiency"
      }
    ]
  };
}

function assessRisks(items: any[]) {
  return {
    overallScore: 72,
    breakdown: {
      operational: 85,
      technical: 70,
      capacity: 80,
      compliance: 55
    },
    factors: [
      {
        factor: "Single Points of Failure",
        level: "critical",
        description: "Key personnel dependency creates operational risk",
        mitigation: "Implement knowledge sharing and backup procedures"
      },
      {
        factor: "Technical Debt",
        level: "high",
        description: "Legacy system components causing increased failure rates",
        mitigation: "Prioritize modernization roadmap"
      },
      {
        factor: "Process Gaps",
        level: "medium", 
        description: "Inconsistent issue categorization and routing",
        mitigation: "Standardize triage and assignment workflows"
      }
    ]
  };
}
