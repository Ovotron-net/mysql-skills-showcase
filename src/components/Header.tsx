
import React from 'react';
import { DataIcon } from './icons/DataIcon';

const Header = () => {
  return (
    <header className="w-full bg-white border-b border-gray-200 py-4 px-6 flex items-center justify-between">
      <div className="flex items-center space-x-3">
        <DataIcon className="h-8 w-8 text-mysql" />
        <h1 className="text-xl font-bold text-gray-800">MySQL Skills Assessment</h1>
      </div>
      <div className="text-sm text-gray-500">Candidate Evaluation Platform</div>
    </header>
  );
};

export default Header;
