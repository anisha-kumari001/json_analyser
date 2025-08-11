# Jira Summariser

A fast, filter-rich, insight-packed, time-aware dashboard for on-call retrospective JSON input. Built with React, TypeScript, Vite, and Tailwind CSS.

## Features

### ✅ Core Features
- **Copy-Paste JSON Input**: No file upload needed - simply paste your JSON data directly
- **Auto-Processing**: Valid JSON is analyzed instantly and dashboard updates automatically
- **Multiple Data Format Support**: Handles both direct JSON format and summary JSON formats
- **Fast Performance**: Built with Vite for lightning-fast development and builds

### 🎯 Advanced Global Filters
- **Date Range Filters**: Absolute dates, relative ranges (7d, 10d, 14d, 30d, 90d), created/resolved date types
- **Tag Filtering**: Multi-select tag filters with count display
- **Priority Filtering**: Filter by priority levels
- **Assignee/Reporter Filtering**: Filter by team members
- **Label Filtering**: Filter by issue labels
- **SLA Breach Filter**: Show only SLA-breach items
- **Text Search**: Full-text search across titles, descriptions, and content
- **Compare Mode**: Compare different time periods

### 📊 Dynamic Dashboard
- **Real-time KPIs**: Total items, resolution rate, avg resolution time, SLA compliance
- **Interactive Charts**: 
  - Weekly trends (area chart)
  - Most common tags (horizontal bar chart)
  - Priority distribution (pie chart)
  - Assignee workload (bar chart)
  - Resolution time distribution (scatter plot)
- **AI-Powered Insights**: Automatic detection of:
  - Low resolution rates
  - SLA compliance issues
  - Long resolution times
  - Recurring issue patterns
  - Workload distribution imbalances

### 🔬 Advanced Analytics
- **Anomaly Detection**: Identify unusual patterns and outliers
- **Predictive Analytics**: Forecast trends and potential issues
- **Network Analysis**: Visualize relationships between issues, assignees, and tags
- **Risk Assessment**: Evaluate potential risks and bottlenecks
- **Pattern Recognition**: Deep analysis of recurring patterns

### 📈 Export & Reports
- **Multiple Export Formats**: CSV, Excel, PDF
- **Weekly PDF Reports**: Automated report generation
- **Email Reports**: Send reports directly via email
- **Custom Dashboards**: Configure automated reports
- **SLA Alerts**: Real-time notifications for SLA breaches

## Quick Start

1. **Clone and Setup**:
   ```bash
   git clone <repository>
   cd json_analyser
   npm install
   ```

2. **Start Development Server**:
   ```bash
   npm run dev
   ```

3. **Open Browser**: Navigate to `http://localhost:5173` (or the displayed URL)

4. **Input JSON Data**: 
   - Click on "Input" tab
   - Paste your JSON data into the text area
   - The dashboard will automatically process and display the data

## Usage Instructions

### Step-by-Step Guide:

1. **Start the application** using `npm run dev`
2. **Navigate to the Input tab** in the web interface
3. **Paste your JSON data** directly into the text area
4. **Auto-processing** will validate and analyze your JSON
5. **Switch to Dashboard tab** to see the analyzed data with charts and metrics
6. **Use Global Filters** to focus on specific time periods, tags, assignees, etc.
7. **Explore Advanced Analytics** for deeper insights
8. **Export reports** in various formats (CSV, PDF, Excel)

The dashboard will automatically switch to the Dashboard tab once valid JSON is processed.

## Built-in Sample Data

The dashboard includes sample data to demonstrate its capabilities. Simply start the application and click "Dashboard" to see the sample analysis.

## Performance & Browser Support

- Optimized for modern browsers (Chrome 90+, Firefox 88+, Safari 14+)
- Fast processing of large datasets
- Responsive design for desktop and tablet use
- Real-time filtering and chart updates