import { Component, OnInit } from '@angular/core';
import { QuizService } from '../quiz.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css'],
})
export class QuizComponent implements OnInit {
  IsAbled: boolean = true;
  finalResult: number = 0;
  textResult: string = '';
  quizContent: any;

  constructor(private quizService: QuizService) {}

  ngOnInit(): void {
    this.quizContent = this.getAllContent();
  }

  checkAnswer(question: any, userAnswer: string) {
    if (question.state != 'answered') {
      if (question.answer == userAnswer) {
        this.finalResult++;
        this.textResult = 'correct';
      } else this.textResult = 'incorrect';
      question.state = 'answered';
    }
  }

  getAllContent() {
    this.quizService.getQuizContent().subscribe((res) => {
      this.quizContent = res;
    });
  }
  //   IsQuestionAbled(id: number): {
  //     result: boolean = false;
  //   };
}
