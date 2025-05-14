
export interface Question {
  id: number;
  type: 'multiple-choice' | 'sql-query';
  title: string;
  description?: string;
  code?: string;
  choices?: Choice[];
  correctAnswer: string;
}

export interface Choice {
  id: string;
  text: string;
}

export interface UserAnswer {
  questionId: number;
  answer: string;
}
