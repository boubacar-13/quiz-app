import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css'],
})
export class QuestionComponent {
  @Input() content: any;
  @Input() checkingAnswer: any;
  @Input() textResult: any;
  @Input() finalResult: any;
}
