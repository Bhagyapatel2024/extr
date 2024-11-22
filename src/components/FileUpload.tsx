import React, { useRef } from 'react';
import { Upload } from 'lucide-react';
import { useDispatch } from 'react-redux';
import { setUsers } from '../store/userSlice';
import type { User } from '../types/user';

const FileUpload: React.FC = () => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const dispatch = useDispatch();

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const jsonData = JSON.parse(e.target?.result as string);
        const users = Array.isArray(jsonData) ? jsonData : [jsonData];
        
        // Validate user data structure
        const isValidData = users.every(user => 
          user.id && user.name && user.username && user.email
        );

        if (!isValidData) {
          throw new Error('Invalid user data structure');
        }

        dispatch(setUsers(users as User[]));
      } catch (error) {
        alert('Please upload a valid JSON file with user data');
      }
    };
    reader.readAsText(file);
  };

  const handleButtonClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="flex items-center">
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileUpload}
        accept="application/json"
        className="hidden"
      />
      <button
        onClick={handleButtonClick}
        className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
      >
        <Upload className="h-5 w-5 mr-2" />
        Upload JSON
      </button>
    </div>
  );
};

export default FileUpload;