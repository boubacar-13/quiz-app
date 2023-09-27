import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subscription } from 'rxjs/internal/Subscription';

@Injectable({
  providedIn: 'root',
})
export class QuizService {
  serviceURL: string;

  constructor(private http: HttpClient) {
    this.serviceURL = 'http://localhost:3000/questions';
  }

  //   quizContent: {
  //     id: number;
  //     question: string;
  //     props: string[];
  //     answer: string;
  //     isAnswered: boolean;
  //   }[] = [];
  quizContent: any;

  getQuizContent() {
    return this.http.get(this.serviceURL);
  }
}
