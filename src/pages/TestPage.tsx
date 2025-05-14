
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import QuestionCard from '@/components/QuestionCard';
import MultipleChoiceQuestion from '@/components/MultipleChoiceQuestion';
import SqlQueryChallenge from '@/components/SqlQueryChallenge';
import ProgressBar from '@/components/ProgressBar';
import { Button } from '@/components/ui/button';
import { questions } from '@/data/questionsData';
import { UserAnswer } from '@/types';
import { toast } from 'sonner';

const TestPage = () => {
  const navigate = useNavigate();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<UserAnswer[]>([]);
  const [selectedChoice, setSelectedChoice] = useState<string | null>(null);
  const [sqlAnswer, setSqlAnswer] = useState<string>('');
  
  const currentQuestion = questions[currentQuestionIndex];
  
  useEffect(() => {
    // Reset state when question changes
    const existingAnswer = userAnswers.find(a => a.questionId === currentQuestion.id);
    if (existingAnswer) {
      if (currentQuestion.type === 'multiple-choice') {
        setSelectedChoice(existingAnswer.answer);
        setSqlAnswer('');
      } else {
        setSqlAnswer(existingAnswer.answer);
        setSelectedChoice(null);
      }
    } else {
      setSelectedChoice(null);
      setSqlAnswer('');
    }
  }, [currentQuestionIndex, currentQuestion.id]);
  
  const handleMultipleChoiceSelect = (value: string) => {
    setSelectedChoice(value);
  };
  
  const handleSqlSubmit = (code: string) => {
    setSqlAnswer(code);
    saveAnswer(code);
  };
  
  const saveAnswer = (answer: string) => {
    setUserAnswers(prev => {
      // Remove previous answer for this question if it exists
      const filtered = prev.filter(a => a.questionId !== currentQuestion.id);
      // Add the new answer
      return [...filtered, { questionId: currentQuestion.id, answer }];
    });
    
    toast.success("Answer saved!", {
      description: "You can still change it before completing the test.",
    });
  };
  
  const handleNext = () => {
    // Save multiple choice answer if not already saved
    if (currentQuestion.type === 'multiple-choice' && selectedChoice) {
      saveAnswer(selectedChoice);
    }
    
    // Move to next question
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };
  
  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };
  
  const handleSubmitTest = () => {
    // Make sure the current answer is saved
    if (currentQuestion.type === 'multiple-choice' && selectedChoice) {
      saveAnswer(selectedChoice);
    }
    
    // Navigate to results page
    navigate('/results', { state: { userAnswers } });
  };
  
  const isLastQuestion = currentQuestionIndex === questions.length - 1;
  const isFirstQuestion = currentQuestionIndex === 0;
  const hasAnsweredQuestion = 
    (currentQuestion.type === 'multiple-choice' && selectedChoice) || 
    (currentQuestion.type === 'sql-query' && sqlAnswer);
  
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      
      <main className="flex-grow container py-8">
        <div className="max-w-3xl mx-auto space-y-6">
          <ProgressBar current={currentQuestionIndex + 1} total={questions.length} />
          
          <QuestionCard title={`Question ${currentQuestionIndex + 1}: ${currentQuestion.title}`}>
            <div className="space-y-6">
              <p className="text-gray-700">{currentQuestion.description}</p>
              
              {currentQuestion.type === 'multiple-choice' && (
                <MultipleChoiceQuestion
                  choices={currentQuestion.choices || []}
                  selectedChoice={selectedChoice}
                  onSelect={handleMultipleChoiceSelect}
                />
              )}
              
              {currentQuestion.type === 'sql-query' && (
                <SqlQueryChallenge
                  initialCode={sqlAnswer}
                  onSubmit={handleSqlSubmit}
                />
              )}
              
              <div className="flex justify-between pt-4">
                <Button 
                  variant="outline"
                  onClick={handlePrevious}
                  disabled={isFirstQuestion}
                >
                  Previous
                </Button>
                
                <div className="space-x-3">
                  {!isLastQuestion ? (
                    <Button 
                      onClick={handleNext}
                      className="bg-mysql hover:bg-mysql-dark"
                      disabled={!hasAnsweredQuestion}
                    >
                      Next
                    </Button>
                  ) : (
                    <Button 
                      onClick={handleSubmitTest}
                      className="bg-green-600 hover:bg-green-700"
                      disabled={!hasAnsweredQuestion}
                    >
                      Complete Test
                    </Button>
                  )}
                </div>
              </div>
            </div>
          </QuestionCard>
        </div>
      </main>
      
      <footer className="bg-white py-4 text-center text-gray-500 border-t">
        &copy; {new Date().getFullYear()} MySQL Skills Assessment
      </footer>
    </div>
  );
};

export default TestPage;
