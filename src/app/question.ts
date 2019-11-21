export class Question {
  key: string;
  question: string;
  answers?: string[];
  userProvidedAnswers = new Array('');
}
