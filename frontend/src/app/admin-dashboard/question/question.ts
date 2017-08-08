export class Question {
  id: string;
  question: string;
  incorrectAnswer: string;
  correctAnswer: string;
  description: string;
  categoryId: string;
  answers: Array<string>;

  constructor(props: any) {
    this.id = props.id;
    this.question = props.question;
    this.incorrectAnswer = props.incorrectAnswer;
    this.correctAnswer = props.correctAnswer;
    this.description = props.description;
    if (this.correctAnswer) {
      this.answers = this.incorrectAnswer.split('|');
      const correctAnswerIndex = Math.floor(Math.random() * this.answers.length);
      this.answers.splice(correctAnswerIndex, 0, this.correctAnswer);
    }
  }
}
