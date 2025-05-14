
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';

interface QuestionCardProps {
  title: string;
  children: React.ReactNode;
  className?: string;
}

const QuestionCard = ({ title, children, className }: QuestionCardProps) => {
  return (
    <Card className={cn("w-full animate-fade-in", className)}>
      <CardHeader className="bg-gray-50 border-b border-gray-200">
        <CardTitle className="text-lg font-medium">{title}</CardTitle>
      </CardHeader>
      <CardContent className="pt-6">
        {children}
      </CardContent>
    </Card>
  );
};

export default QuestionCard;
