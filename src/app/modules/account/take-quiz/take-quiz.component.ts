import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-take-quiz',
  templateUrl: './take-quiz.component.html',
  styleUrls: ['./take-quiz.component.scss']
})
export class TakeQuizComponent implements OnInit {
  questions: any[];
  selectedAnswers: string[];
  score: number = 0;
  quizSubmitted: boolean = false;

  constructor() {
    this.questions = [
      { question: 'What is 2 + 2?', options: ['2', '3', '4', '5'], answer: '4' },
      { question: 'What is the derivative of cos(x)?', options: ['-sin(x)', 'cos(x)', 'sin(x)', '-cos(x)'], answer: '-sin(x)' },
      { question: 'What is the integral of e^x dx?', options: ['e^x + C', 'x*e^x + C', 'e^(x+1) + C', '1/e^x + C'], answer: 'e^x + C' },
      // Add more questions as needed
    ];
    this.selectedAnswers = new Array(this.questions.length);
  }

  ngOnInit(): void {
  }

  selectAnswer(option: string, questionIndex: number): void {
    this.selectedAnswers[questionIndex] = option;
  }

  submitQuiz(): void {
    this.score = 0; // Reset score
    this.questions.forEach((question, index) => {
      if (question.answer === this.selectedAnswers[index]) {
        this.score++;
      }
    });
    this.quizSubmitted = true;
  }

  restartQuiz(): void {
    this.selectedAnswers = new Array(this.questions.length);
    this.score = 0;
    this.quizSubmitted = false;
  }
}
