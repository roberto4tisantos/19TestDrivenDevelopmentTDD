import type { Answer } from './Answer.tsx';

export interface Question {
  _id: string;
  question: string;
  answers: Answer[];
}
