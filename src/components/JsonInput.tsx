import { useState } from 'react';
import { Upload, Clipboard, Check, AlertCircle, FileJson } from 'lucide-react';

interface JsonInputProps {
  onJsonSubmit: (data: any) => void;
  currentData: any;
}

export default function JsonInput({ onJsonSubmit, currentData }: JsonInputProps) {
  const [jsonText, setJsonText] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const [isValidJson, setIsValidJson] = useState(false);

  const validateJson = (text: string) => {
    if (!text.trim()) {
      setIsValidJson(false);
      setError('');
      return;
    }
    
    try {
      const parsedData = JSON.parse(text);
      setIsValidJson(true);
      setError('');
      
      // Auto-submit if JSON is valid and substantial (more than just {})
      if (text.trim().length > 10) {
        setTimeout(() => {
          onJsonSubmit(parsedData);
          setSuccess(true);
          setTimeout(() => setSuccess(false), 3000);
        }, 500); // Small delay to show validation feedback
      }
    } catch {
      setIsValidJson(false);
      setError('Invalid JSON format');
    }
  };

  const handlePaste = async () => {
    try {
      const text = await navigator.clipboard.readText();
      setJsonText(text);
      validateJson(text);
    } catch (err) {
      setError('Failed to read from clipboard. Please paste manually.');
    }
  };

  const handleSubmit = () => {
    if (!jsonText.trim()) {
      setError('Please paste some JSON data first.');
      return;
    }

    try {
      const parsedData = JSON.parse(jsonText);
      onJsonSubmit(parsedData);
      setSuccess(true);
      setError('');
      setTimeout(() => setSuccess(false), 3000);
    } catch (err) {
      setError('Invalid JSON format. Please check your data and try again.');
      setSuccess(false);
    }
  };

  const handleClear = () => {
    setJsonText('');
    setError('');
    setSuccess(false);
  };

  const loadSampleData = () => {
    const sampleJson = JSON.stringify(currentData, null, 2);
    setJsonText(sampleJson);
    setError('');
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <div className="flex items-center gap-3 mb-6">
        <div className="bg-blue-100 p-2 rounded-lg">
          <FileJson className="w-6 h-6 text-blue-600" />
        </div>
        <div>
          <h2 className="text-xl font-semibold text-gray-800">JSON Data Input</h2>
          <p className="text-gray-600 text-sm">Paste your JSON data below to analyze</p>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-wrap gap-3 mb-4">
        <button
          onClick={handlePaste}
          className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          <Clipboard className="w-4 h-4" />
          Paste from Clipboard
        </button>
        <button
          onClick={loadSampleData}
          className="flex items-center gap-2 px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
        >
          <Upload className="w-4 h-4" />
          Load Sample Data
        </button>
        <button
          onClick={handleClear}
          className="flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
        >
          Clear
        </button>
      </div>

      {/* JSON Input Textarea */}
      <div className="mb-4">
        <label htmlFor="json-input" className="block text-sm font-medium text-gray-700 mb-2">
          JSON Data
        </label>
        <textarea
          id="json-input"
          value={jsonText}
          onChange={(e) => {
            const newText = e.target.value;
            setJsonText(newText);
            validateJson(newText);
            setSuccess(false);
          }}
          placeholder="Paste your JSON data here..."
          className="w-full h-64 p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent font-mono text-sm resize-vertical"
        />
      </div>

      {/* Status Messages */}
      {error && (
        <div className="flex items-center gap-2 p-3 mb-4 bg-red-50 border border-red-200 rounded-lg text-red-700">
          <AlertCircle className="w-4 h-4" />
          <span className="text-sm">{error}</span>
        </div>
      )}

      {isValidJson && jsonText.trim() && !error && !success && (
        <div className="flex items-center gap-2 p-3 mb-4 bg-blue-50 border border-blue-200 rounded-lg text-blue-700">
          <Check className="w-4 h-4" />
          <span className="text-sm">Valid JSON detected - Processing automatically...</span>
        </div>
      )}

      {success && (
        <div className="flex items-center gap-2 p-3 mb-4 bg-green-50 border border-green-200 rounded-lg text-green-700">
          <Check className="w-4 h-4" />
          <span className="text-sm">JSON data successfully loaded and analyzed!</span>
        </div>
      )}

      {/* Submit Button */}
      <div className="flex justify-end">
        <button
          onClick={handleSubmit}
          disabled={!jsonText.trim() || !isValidJson}
          className="flex items-center gap-2 px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
        >
          <Check className="w-4 h-4" />
          {isValidJson ? 'Analyze JSON Data' : 'Invalid JSON'}
        </button>
      </div>

      {/* Instructions */}
      <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
        <h3 className="text-sm font-semibold text-blue-800 mb-2">Instructions:</h3>
        <ul className="text-sm text-blue-700 space-y-1">
          <li>• Copy your JSON data from any source</li>
          <li>• Click "Paste from Clipboard" or manually paste in the textarea</li>
          <li>• <strong>Auto-processing:</strong> Valid JSON will be analyzed automatically!</li>
          <li>• Supports both direct data format and summary format with dailySummaries</li>
          <li>• Use "Load Sample Data" to see an example of expected format</li>
          <li>• Or click "Analyze JSON Data" to manually process</li>
        </ul>
      </div>

      {/* Supported Formats */}
      <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-lg">
        <h3 className="text-sm font-semibold text-green-800 mb-2">Supported Formats:</h3>
        <div className="text-sm text-green-700">
          <p className="mb-2"><strong>Format 1 - Direct:</strong></p>
          <pre className="text-xs bg-green-100 p-2 rounded mb-2">
{`{
  "Items": [...],
  "Groups": [...]
}`}
          </pre>
          <p className="mb-2"><strong>Format 2 - Summary:</strong></p>
          <pre className="text-xs bg-green-100 p-2 rounded">
{`{
  "summaryType": "system_jira_retrospective_v0",
  "dailySummaries": [
    {
      "contentJSON": {
        "Items": [...],
        "Groups": [...]
      }
    }
  ]
}`}
          </pre>
        </div>
      </div>
    </div>
  );
}
