
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';

interface ResultsSummaryProps {
  correctAnswers: number;
  totalQuestions: number;
}

const ResultsSummary: React.FC<ResultsSummaryProps> = ({ correctAnswers, totalQuestions }) => {
  const score = (correctAnswers / totalQuestions) * 100;
  const incorrectAnswers = totalQuestions - correctAnswers;
  
  const data = [
    { name: 'Correct', value: correctAnswers },
    { name: 'Incorrect', value: incorrectAnswers },
  ];
  
  const COLORS = ['#4ade80', '#f87171'];
  
  const renderFeedback = () => {
    if (score >= 80) {
      return "Excellent! You have demonstrated strong MySQL knowledge.";
    } else if (score >= 60) {
      return "Good job! You have a solid foundation in MySQL skills.";
    } else if (score >= 40) {
      return "You have basic MySQL knowledge, but could benefit from more practice.";
    } else {
      return "You might need to review MySQL fundamentals before proceeding.";
    }
  };
  
  return (
    <Card className="animate-fade-in">
      <CardHeader className="bg-gray-50 border-b border-gray-200">
        <CardTitle>Test Results</CardTitle>
      </CardHeader>
      <CardContent className="pt-6">
        <div className="text-center mb-6">
          <h2 className="text-3xl font-bold text-gray-800">
            Score: {Math.round(score)}%
          </h2>
          <p className="text-gray-600 mt-2">
            {correctAnswers} out of {totalQuestions} correct answers
          </p>
        </div>
        
        <div className="h-64 mb-6">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={80}
                fill="#8884d8"
                paddingAngle={5}
                dataKey="value"
                label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
        
        <div className="bg-blue-50 p-4 rounded-md border border-blue-100">
          <h3 className="font-medium text-blue-800 mb-2">Feedback</h3>
          <p className="text-blue-700">{renderFeedback()}</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default ResultsSummary;
