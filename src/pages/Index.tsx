
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Header from '@/components/Header';
import { useNavigate } from 'react-router-dom';
import { DataIcon } from '@/components/icons/DataIcon';

const Index = () => {
  const navigate = useNavigate();
  const [isStarting, setIsStarting] = useState(false);

  const startTest = () => {
    setIsStarting(true);
    setTimeout(() => {
      navigate('/test');
    }, 500);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      
      <main className="flex-grow flex items-center justify-center p-6">
        <Card className="max-w-3xl w-full animate-fade-in shadow-lg">
          <CardHeader className="text-center space-y-3 pb-8">
            <div className="mx-auto">
              <DataIcon className="h-20 w-20 text-mysql mx-auto" />
            </div>
            <CardTitle className="text-3xl">MySQL Skills Assessment</CardTitle>
            <CardDescription className="text-lg">
              Test your knowledge of MySQL database concepts and queries
            </CardDescription>
          </CardHeader>
          
          <CardContent className="space-y-8">
            <div className="space-y-4">
              <h3 className="text-xl font-medium">Instructions</h3>
              <ul className="space-y-3 list-disc pl-5 text-gray-700">
                <li>This assessment consists of 10 questions testing your MySQL knowledge.</li>
                <li>Questions include multiple-choice and SQL query challenges.</li>
                <li>You'll have the opportunity to demonstrate your understanding of database concepts and SQL syntax.</li>
                <li>Answer each question to the best of your ability.</li>
                <li>Your results will be displayed at the end of the test.</li>
              </ul>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-xl font-medium">Topics Covered</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {[
                  'Basic SQL Syntax', 'Database Design', 'JOINs', 'Indexes',
                  'Primary Keys', 'Normalization', 'Transactions', 'Storage Engines'
                ].map((topic) => (
                  <div 
                    key={topic}
                    className="bg-blue-50 text-blue-700 px-3 py-2 rounded-md text-center"
                  >
                    {topic}
                  </div>
                ))}
              </div>
            </div>
            
            <div className="flex justify-center pt-4">
              <Button 
                size="lg" 
                className="bg-mysql hover:bg-mysql-dark px-8 text-lg"
                disabled={isStarting}
                onClick={startTest}
              >
                {isStarting ? 'Starting...' : 'Begin Assessment'}
              </Button>
            </div>
          </CardContent>
        </Card>
      </main>
      
      <footer className="bg-white py-4 text-center text-gray-500 border-t">
        &copy; {new Date().getFullYear()} MySQL Skills Assessment
      </footer>
    </div>
  );
};

export default Index;
