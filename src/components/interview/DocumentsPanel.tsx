import React, { useState } from 'react';
import { Upload, FileText, Trash2, Eye, Download, Search, Filter } from 'lucide-react';

export const DocumentsPanel: React.FC = () => {
  const [dragActive, setDragActive] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const documents = [
    {
      id: 1,
      name: 'John_Doe_Resume.pdf',
      type: 'Resume',
      size: '245 KB',
      uploadDate: '2 mins ago',
      status: 'processed'
    },
    {
      id: 2,
      name: 'Senior_Frontend_Job_Description.pdf',
      type: 'Job Description',
      size: '128 KB',
      uploadDate: '5 mins ago',
      status: 'processed'
    },
    {
      id: 3,
      name: 'Portfolio_Screenshots.zip',
      type: 'Portfolio',
      size: '2.1 MB',
      uploadDate: '10 mins ago',
      status: 'processing'
    },
    {
      id: 4,
      name: 'Cover_Letter.pdf',
      type: 'Cover Letter',
      size: '89 KB',
      uploadDate: '12 mins ago',
      status: 'processed'
    }
  ];

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    // Handle file upload
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      {/* Left Column - Document Upload & Management */}
      <div className="lg:col-span-2 space-y-8">
        {/* Upload Area */}
        <div className="bg-white dark:bg-black rounded-xl shadow-lg border border-gray-200 dark:border-gray-800">
          <div className="p-6 border-b border-gray-200 dark:border-gray-800">
            <div className="flex items-center space-x-3">
              <Upload className="w-5 h-5 text-blue-600" />
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
                Document Upload
              </h2>
            </div>
          </div>
          <div className="p-6">
            <div
              className={`border-2 border-dashed rounded-lg p-8 text-center transition-colors ${
                dragActive
                  ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20'
                  : 'border-gray-300 dark:border-gray-700'
              }`}
              onDragEnter={handleDrag}
              onDragLeave={handleDrag}
              onDragOver={handleDrag}
              onDrop={handleDrop}
            >
              <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                Upload Interview Documents
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Drag and drop files here, or click to browse
              </p>
              <div className="space-y-2 mb-4">
                <p className="text-sm text-gray-500">Supported files:</p>
                <p className="text-xs text-gray-400">
                  PDF, DOC, DOCX, TXT (Max 10MB each)
                </p>
              </div>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors">
                Choose Files
              </button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
              <button className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg text-center hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                <FileText className="w-6 h-6 text-blue-600 mx-auto mb-2" />
                <span className="text-sm text-gray-700 dark:text-gray-300">Resume</span>
              </button>
              <button className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg text-center hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                <FileText className="w-6 h-6 text-green-600 mx-auto mb-2" />
                <span className="text-sm text-gray-700 dark:text-gray-300">Job Description</span>
              </button>
              <button className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg text-center hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                <FileText className="w-6 h-6 text-purple-600 mx-auto mb-2" />
                <span className="text-sm text-gray-700 dark:text-gray-300">Portfolio</span>
              </button>
              <button className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg text-center hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                <FileText className="w-6 h-6 text-orange-600 mx-auto mb-2" />
                <span className="text-sm text-gray-700 dark:text-gray-300">Cover Letter</span>
              </button>
            </div>
          </div>
        </div>

        {/* Document List */}
        <div className="bg-white dark:bg-black rounded-xl shadow-lg border border-gray-200 dark:border-gray-800">
          <div className="p-6 border-b border-gray-200 dark:border-gray-800">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-3">
                <FileText className="w-5 h-5 text-blue-600" />
                <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Uploaded Documents
                </h2>
                <span className="bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 px-2 py-1 rounded text-sm font-medium">
                  {documents.length} files
                </span>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Search documents..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-200 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <button className="p-2 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700">
                <Filter className="w-4 h-4 text-gray-600 dark:text-gray-400" />
              </button>
            </div>
          </div>

          <div className="p-6">
            <div className="space-y-4">
              {documents.map((doc) => (
                <div key={doc.id} className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg flex items-center space-x-4">
                  <div className="p-2 bg-white dark:bg-gray-700 rounded-lg">
                    <FileText className="w-6 h-6 text-blue-600" />
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-1">
                      <h3 className="font-medium text-gray-900 dark:text-white">
                        {doc.name}
                      </h3>
                      <span className={`px-2 py-1 rounded text-xs font-medium ${
                        doc.status === 'processed'
                          ? 'bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300'
                          : 'bg-yellow-100 dark:bg-yellow-900 text-yellow-700 dark:text-yellow-300'
                      }`}>
                        {doc.status}
                      </span>
                    </div>
                    <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400">
                      <span>{doc.type}</span>
                      <span>{doc.size}</span>
                      <span>Uploaded {doc.uploadDate}</span>
                    </div>
                  </div>

                  <div className="flex items-center space-x-2">
                    <button className="p-2 text-gray-400 hover:text-blue-600 transition-colors">
                      <Eye className="w-4 h-4" />
                    </button>
                    <button className="p-2 text-gray-400 hover:text-green-600 transition-colors">
                      <Download className="w-4 h-4" />
                    </button>
                    <button className="p-2 text-gray-400 hover:text-red-600 transition-colors">
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Right Column - Document Analysis */}
      <div className="space-y-8">
        <div className="bg-white dark:bg-black rounded-xl shadow-lg border border-gray-200 dark:border-gray-800">
          <div className="p-6 border-b border-gray-200 dark:border-gray-800">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
              Document Analysis
            </h2>
          </div>
          <div className="p-6 space-y-6">
            <div>
              <h3 className="font-medium text-gray-900 dark:text-white mb-3">
                Resume Summary
              </h3>
              <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-2">
                  <li>• 5+ years React development experience</li>
                  <li>• Strong background in JavaScript/TypeScript</li>
                  <li>• Experience with state management (Redux, Context)</li>
                  <li>• Node.js and API development skills</li>
                </ul>
              </div>
            </div>

            <div>
              <h3 className="font-medium text-gray-900 dark:text-white mb-3">
                Skills Match
              </h3>
              <div className="space-y-3">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-600 dark:text-gray-400">React</span>
                    <span className="text-green-600 font-medium">95%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-800 rounded-full h-2">
                    <div className="bg-green-500 h-2 rounded-full" style={{ width: '95%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-600 dark:text-gray-400">TypeScript</span>
                    <span className="text-green-600 font-medium">88%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-800 rounded-full h-2">
                    <div className="bg-green-500 h-2 rounded-full" style={{ width: '88%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-600 dark:text-gray-400">Node.js</span>
                    <span className="text-yellow-600 font-medium">72%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-800 rounded-full h-2">
                    <div className="bg-yellow-500 h-2 rounded-full" style={{ width: '72%' }}></div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-medium text-gray-900 dark:text-white mb-3">
                Key Insights
              </h3>
              <div className="space-y-3">
                <div className="bg-green-50 dark:bg-green-900/20 p-3 rounded-lg border-l-4 border-green-500">
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    Strong technical background with relevant experience
                  </p>
                </div>
                <div className="bg-blue-50 dark:bg-blue-900/20 p-3 rounded-lg border-l-4 border-blue-500">
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    Experience with modern React patterns and hooks
                  </p>
                </div>
                <div className="bg-yellow-50 dark:bg-yellow-900/20 p-3 rounded-lg border-l-4 border-yellow-500">
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    Consider exploring backend experience in more detail
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-black rounded-xl shadow-lg border border-gray-200 dark:border-gray-800">
          <div className="p-6 border-b border-gray-200 dark:border-gray-800">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
              Suggested Questions
            </h2>
          </div>
          <div className="p-6 space-y-4">
            <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                "Can you describe your experience with React hooks and when you'd choose useReducer over useState?"
              </p>
              <button className="text-xs text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300">
                Use this question →
              </button>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                "Tell me about a challenging performance optimization you've implemented in React."
              </p>
              <button className="text-xs text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300">
                Use this question →
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
