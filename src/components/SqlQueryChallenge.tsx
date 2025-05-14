
import React, { useState } from 'react';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import CodeBlock from './CodeBlock';

interface SqlQueryChallengeProps {
  initialCode?: string;
  onSubmit: (code: string) => void;
  showCorrect?: boolean;
  correctAnswer?: string;
  userAnswer?: string;
}

const SqlQueryChallenge: React.FC<SqlQueryChallengeProps> = ({
  initialCode = '',
  onSubmit,
  showCorrect = false,
  correctAnswer,
  userAnswer
}) => {
  const [code, setCode] = useState(initialCode);

  const handleSubmit = () => {
    onSubmit(code);
  };

  return (
    <div className="space-y-4">
      {!showCorrect ? (
        <>
          <Textarea
            className="font-mono h-32 resize-none"
            placeholder="Write your SQL query here..."
            value={code}
            onChange={(e) => setCode(e.target.value)}
          />
          <Button onClick={handleSubmit} className="bg-mysql hover:bg-mysql-dark">Submit Query</Button>
        </>
      ) : (
        <div className="space-y-4">
          <div>
            <h4 className="font-medium mb-2">Your Answer:</h4>
            <CodeBlock code={userAnswer || ''} />
          </div>
          
          <div>
            <h4 className="font-medium mb-2">Correct Answer:</h4>
            <CodeBlock code={correctAnswer || ''} />
          </div>
        </div>
      )}
    </div>
  );
};

export default SqlQueryChallenge;
