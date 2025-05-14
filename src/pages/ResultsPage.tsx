
import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import { questions } from '@/data/questionsData';
import { UserAnswer } from '@/types';
import { Button } from '@/components/ui/button';
import ResultsSummary from '@/components/ResultsSummary';
import QuestionCard from '@/components/QuestionCard';
import MultipleChoiceQuestion from '@/components/MultipleChoiceQuestion';
import SqlQueryChallenge from '@/components/SqlQueryChallenge';
import { Separator } from '@/components/ui/separator';

const ResultsPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [userAnswers, setUserAnswers] = useState<UserAnswer[]>([]);
  const [correctAnswers, setCorrectAnswers] = useState<number>(0);
  
  useEffect(() => {
    // If no answers, redirect back to start
    if (!location.state || !location.state.userAnswers) {
      navigate('/');
      return;
    }
    
    const answers = location.state.userAnswers as UserAnswer[];
    setUserAnswers(answers);
    
    // Calculate correct answers
    let correct = 0;
    answers.forEach(answer => {
      const question = questions.find(q => q.id === answer.questionId);
      if (question && answer.answer.trim().toLowerCase() === question.correctAnswer.trim().toLowerCase()) {
        correct++;
      }
    });
    
    setCorrectAnswers(correct);
  }, [location.state, navigate]);
  
  const findUserAnswer = (questionId: number): string | undefined => {
    const answer = userAnswers.find(a => a.questionId === questionId);
    return answer?.answer;
  };
  
  const isCorrect = (questionId: number): boolean => {
    const userAnswer = findUserAnswer(questionId);
    const question = questions.find(q => q.id === questionId);
    
    if (!userAnswer || !question) return false;
    
    return userAnswer.trim().toLowerCase() === question.correctAnswer.trim().toLowerCase();
  };
  
  const handleRetakeTest = () => {
    navigate('/');
  };
  
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      
      <main className="flex-grow container py-8">
        <div className="max-w-3xl mx-auto space-y-8">
          <ResultsSummary 
            correctAnswers={correctAnswers} 
            totalQuestions={questions.length} 
          />
          
          <Separator />
          
          <h2 className="text-2xl font-bold text-center">Question Review</h2>
          
          <div className="space-y-8">
            {questions.map((question) => (
              <QuestionCard 
                key={question.id} 
                title={`Question ${question.id}: ${question.title}`}
                className={isCorrect(question.id) ? "border-green-300" : "border-red-300"}
              >
                <div className="space-y-6">
                  <p className="text-gray-700">{question.description}</p>
                  
                  {question.type === 'multiple-choice' && (
                    <MultipleChoiceQuestion
                      choices={question.choices || []}
                      selectedChoice={findUserAnswer(question.id) || null}
                      onSelect={() => {}}
                      showCorrect={true}
                      correctAnswer={question.correctAnswer}
                    />
                  )}
                  
                  {question.type === 'sql-query' && (
                    <SqlQueryChallenge
                      onSubmit={() => {}}
                      showCorrect={true}
                      correctAnswer={question.correctAnswer}
                      userAnswer={findUserAnswer(question.id)}
                    />
                  )}
                  
                  <div className={`p-3 rounded-md ${isCorrect(question.id) ? 'bg-green-50 text-green-700 border border-green-200' : 'bg-red-50 text-red-700 border border-red-200'}`}>
                    <p className="font-medium">
                      {isCorrect(question.id) ? 'Correct' : 'Incorrect'}
                    </p>
                  </div>
                </div>
              </QuestionCard>
            ))}
          </div>
          
          <div className="flex justify-center pt-8">
            <Button 
              onClick={handleRetakeTest}
              className="bg-mysql hover:bg-mysql-dark px-8"
              size="lg"
            >
              Return to Start
            </Button>
          </div>
        </div>
      </main>
      
      <footer className="bg-white py-4 text-center text-gray-500 border-t">
        &copy; {new Date().getFullYear()} MySQL Skills Assessment
      </footer>
    </div>
  );
};

export default ResultsPage;
