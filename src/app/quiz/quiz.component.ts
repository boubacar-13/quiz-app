import { Component } from '@angular/core';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css'],
})
export class QuizComponent {
  IsAbled: boolean = true;
  finalResult: number = 0;
  textResult: string = '';
  quizContent: {
    id: number;
    question: string;
    props: string[];
    answer: string;
    isAnswered: boolean;
  }[] = [
    {
      id: 1,
      question: 'Quelle est la capitale de la République de Djibouti ?',
      props: ['Montréal', 'Paris', 'Djibouti', 'Antannarivo'],
      answer: 'Djibouti',
      isAnswered: false,
    },
    {
      id: 2,
      question:
        'Dans quelle matière la robe de la chanteuse Lady Gaga a-t-elle été faite pour les MTV Musics Awards ?',
      props: ['Ketchup', 'Bonbon', 'Steak', 'Mayo'],
      answer: 'Steak',
      isAnswered: false,
    },
    {
      id: 3,
      question:
        "Il y a une position spéciale pour les victimes évanouies. De laquelle s'agit-il ?",
      props: ['PNS', 'PNL', 'PLS', 'PBS'],
      answer: 'PLS',
      isAnswered: false,
    },
    //   {
    //     id: 4,
    //     question: 'Quel est le second nom des plantains frits ?',
    //     props: ['Accras', 'Allocos', 'Allocations', 'Allocution'],
    //     answer: 'Allocos',
    //   },
    //   {
    //     id: 5,
    //     question:
    //       "Comment s'appelait l'homme qui a découvert que la Terre est ronde ?",
    //     props: ['Gilgamesh', 'Hitler', 'Galilée', 'Macron'],
    //     answer: 'Galilée',
    //   },
    //   {
    //     id: 6,
    //     question: "Comment s'appelait l'homme qui a découvert le Canada ?",
    //     props: ['Cartier', 'Trudeau', 'Paradis', 'Bush'],
    //     answer: 'Cartier',
    //   },
    //   {
    //     id: 7,
    //     question:
    //       "Combien de saisons la série ''Haine et Passion'' compte-t-elle ?",
    //     props: ['4', '24', '56', '16'],
    //     answer: '56',
    //   },
    //   {
    //     id: 8,
    //     question: "Qui est le créateur d'Instagram ?",
    //     props: ['Systrom', 'Cerf', 'Cyprien', 'Magalie'],
    //     answer: 'Systrom',
    //   },
    //   {
    //     id: 9,
    //     question:
    //       'Quelle est la prochaine princesse Disney qui va sortir en novembre 2016 ?',
    //     props: ['Moana', 'Elisabeth', 'Cendrillon', 'Keen V'],
    //     answer: 'Moana',
    //   },
    //   {
    //     id: 10,
    //     question: 'Combien y a-t-il de races de chats ?',
    //     props: ['50', '70', '40', '100'],
    //     answer: '70',
    //   },
  ];
  checkAnswer(question: any, userAnswer: string) {
    if (question.state != 'answered') {
      if (question.answer == userAnswer) {
        this.finalResult++;
        this.textResult = 'correct';
      } else this.textResult = 'incorrect';
      question.state = 'answered';
    }
  }
  //   IsQuestionAbled(id: number): {
  //     result: boolean = false;
  //   };
}