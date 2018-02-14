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
  public currentQuestion = {answer: '', text: ''};
  private completed = [];
  private correctAnswers = 0;
  private incorrectAnswers = 0;

  constructor(private mockDataService: MockDataService) { }

  ngOnInit() {
    this.mockDataService.getData().subscribe(data => {
      this.data = data;
      this.questions = this.flatten(this.data.map(o => o.examples));
      this.currentQuestion = this.questions.splice(0, 1)[0];
    });
  }

  public answer(): void {
    console.log('GOT: ', this.currentAnswer);
    if (this.currentAnswer === this.currentQuestion.answer) {
      console.log('SUCCESS!!');
      this.correctAnswers++;
      this.currentQuestion = this.questions.length ? this.questions.splice(0, 1)[0] : this.endGame();
    } else {
      this.incorrectAnswers++;
      console.log('FAILURE');
    }
  }

  private endGame(): void {
    console.log(`The game is over! you answered ${this.correctAnswers} correctly and ${this.incorrectAnswers} incorrectly.`);
  }
  // TODO: Put this helper into some common area.
  private flatten = list => list.reduce(
    (a, b) => a.concat(Array.isArray(b) ? this.flatten(b) : b), []
  )
}
