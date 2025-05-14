
import React from 'react';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { cn } from '@/lib/utils';

export interface Choice {
  id: string;
  text: string;
}

interface MultipleChoiceQuestionProps {
  choices: Choice[];
  selectedChoice: string | null;
  onSelect: (value: string) => void;
  showCorrect?: boolean;
  correctAnswer?: string;
}

const MultipleChoiceQuestion: React.FC<MultipleChoiceQuestionProps> = ({
  choices,
  selectedChoice,
  onSelect,
  showCorrect = false,
  correctAnswer
}) => {
  return (
    <RadioGroup value={selectedChoice || ""} onValueChange={onSelect}>
      <div className="space-y-3">
        {choices.map((choice) => {
          const isCorrect = showCorrect && choice.id === correctAnswer;
          const isIncorrect = showCorrect && selectedChoice === choice.id && choice.id !== correctAnswer;
          
          return (
            <div 
              key={choice.id} 
              className={cn(
                "flex items-center space-x-2 border p-3 rounded-md cursor-pointer hover:bg-gray-50 transition-colors",
                isCorrect && "border-green-500 bg-green-50",
                isIncorrect && "border-red-500 bg-red-50"
              )}
            >
              <RadioGroupItem value={choice.id} id={choice.id} />
              <Label 
                htmlFor={choice.id} 
                className={cn(
                  "flex-grow cursor-pointer p-1",
                  isCorrect && "text-green-700 font-medium",
                  isIncorrect && "text-red-700 font-medium"
                )}
              >
                {choice.text}
                {isCorrect && <span className="ml-2 text-green-600">(Correct)</span>}
                {isIncorrect && <span className="ml-2 text-red-600">(Incorrect)</span>}
              </Label>
            </div>
          );
        })}
      </div>
    </RadioGroup>
  );
};

export default MultipleChoiceQuestion;
