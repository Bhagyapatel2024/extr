import React from 'react';
import { Users } from 'lucide-react';
import UserTable from './components/UserTable';
import FileUpload from './components/FileUpload';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center">
            <Users className="h-8 w-8 text-blue-600 mr-3" />
            <h1 className="text-2xl font-bold text-gray-900">User Directory</h1>
          </div>
          <FileUpload />
        </div>
        <UserTable />
      </div>
    </div>
  );
}

export default App;