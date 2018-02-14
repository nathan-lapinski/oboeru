import { Component, OnInit } from '@angular/core';

import { MockDataService } from '../mock-data.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  // TODO: Clean this up, and add a data model for answers, etc.
  public data = [];
  public questions = [];
  public currentAnswer = '';
  public currentQuestion = {answer: ''};
  private completed = [];

  constructor(private mockDataService: MockDataService) { }

  ngOnInit() {
    this.mockDataService.getData().subscribe(data => {
      this.data = data;
      this.questions = this.data.map(o => o.examples);
      this.currentQuestion = this.questions.slice(0, 1)[0][0];
    });
  }

  answer(): void {
    console.log('GOT: ', this.currentAnswer);
    if (this.currentAnswer === this.currentQuestion.answer) {
      console.log('SUCCESS!!');
    } else {
      console.log('FAILURE');
    }
  }
}
