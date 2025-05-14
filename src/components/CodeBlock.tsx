
import React from 'react';

interface CodeBlockProps {
  code: string;
  language?: string;
}

const CodeBlock = ({ code, language = 'sql' }: CodeBlockProps) => {
  return (
    <div className="relative rounded-md bg-gray-900 text-white p-4 my-3 overflow-x-auto">
      <pre className="font-mono text-sm">
        <code className={`language-${language}`}>{code}</code>
      </pre>
    </div>
  );
};

export default CodeBlock;
