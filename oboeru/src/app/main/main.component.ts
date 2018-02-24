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
  public testQuestions = [];
  public currentAnswer = '';
  public currentQuestion = {answer: '', text: '', meaning: ''};
  private completed = [];
  public correctAnswers = 0;
  public incorrectAnswers = 0;
  public currentMeaning = '';
  private maxQuestionCount = 10;
  private questionCount = 0;

  constructor(private mockDataService: MockDataService) { }

  ngOnInit() {
    this.mockDataService.getData().subscribe(data => {
      this.data = data;
      this.questions = this.flatten(this.data.map(o => o.examples));
      this.currentQuestion = this.getRandomQuestion();
    });
  }

  public answer(): void {
    console.log('GOT: ', this.currentAnswer);
    this.questionCount++;
    if (this.currentAnswer === this.currentQuestion.answer) {
      console.log('SUCCESS!!');
      this.correctAnswers++;
    } else {
      this.incorrectAnswers++;
      console.log('FAILURE');
    }
    if (!this.questions.length) {
      this.currentQuestion = {text: 'Game Over!', answer: '', meaning: ''};
      this.endGame();
    } else {
      this.currentQuestion = this.getRandomQuestion();
    }
    this.clearCurrentAnswer();
  }

  public meaning(): void {
    this.currentMeaning = this.currentQuestion.meaning;
  }

  private endGame(): void {
    console.log(`The game is over! you answered ${this.correctAnswers} correctly and ${this.incorrectAnswers} incorrectly.`);
  }
  // TODO: Put this helper into some common area.
  private flatten = list => list.reduce(
    (a, b) => a.concat(Array.isArray(b) ? this.flatten(b) : b), []
  )

  private clearCurrentAnswer(): void {
    this.currentAnswer = '';
  }

  private getRandomQuestion(): any {
    const length = this.questions.length;
    const index = Math.floor(Math.random() * (length));
    return this.questions.splice(index, 1)[0];
  }
}
