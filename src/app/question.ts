export class Question {
  key: string;
  question: string;
  answers?: string;
  answerArray: string[];
  userProvidedAnswers = new Array('');
}
