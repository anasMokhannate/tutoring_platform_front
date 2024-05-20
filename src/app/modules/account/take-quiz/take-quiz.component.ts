import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-take-quiz',
  templateUrl: './take-quiz.component.html',
  styleUrls: ['./take-quiz.component.scss']
})
export class TakeQuizComponent implements OnInit {
  questions: any[];  // Define the structure based on your requirements
  currentQuestionIndex: number = 0;
  currentQuestion: any;
  score: number = 0;

  constructor() {
    this.questions = [
      {
        question: 'What is 2 + 2?',
        options: ['2', '3', '4', '5'],
        answer: '4'
      },
      // More questions here...
    ];
    this.currentQuestion = this.questions[this.currentQuestionIndex];
  }

  ngOnInit(): void {
  }

  submitAnswer(option: string): void {
    if (option === this.currentQuestion.answer) {
      this.score++;
    }

    // Move to the next question
    this.currentQuestionIndex++;
    if (this.currentQuestionIndex < this.questions.length) {
      this.currentQuestion = this.questions[this.currentQuestionIndex];
    } else {
      this.endQuiz();
    }
  }

  endQuiz(): void {
    console.log(`Quiz completed. Your score: ${this.score}/${this.questions.length}`);
    // Logic to handle the end of the quiz
  }
}
