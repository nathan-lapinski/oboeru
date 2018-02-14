import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

@Injectable()
export class MockDataService {

  private kanken9 = [
    {
      character: '話',
      meanings: ['Tale', 'Talk'],
      on: ['ワ'],
      kun: ['はなす', 'はなし'],
      strokes: 13,
      examples: [{
        text: '会話',
        answer: 'かいわ',
        meaning: 'Conversation'
      }, {
        text: '昔話',
        answer: 'ばなし',
        meaning: 'Folk tale'
      }, {
        text: '楽しかったことを話す',
        answer: 'はなす',
        meaning: 'Talk about fun things'
      }]
    },
    {
      character: '理',
      meanings: ['Logic', 'Arrangement', 'Reason', 'Justice', 'Truth'],
      on: ['リ'],
      kun: [],
      strokes: 11,
      examples: [{
        text: '理由',
        answer: 'りゆうう',
        meaning: 'Reason'
      }, {
        text: '料理',
        answer: 'りょうり',
        meaning: 'Cooking'
      }, {
        text: 'たんすの中を整理する',
        answer: 'せいり',
        meaning: 'Organize the inside of a dresser'
      }]
    },
  ];
  constructor() { }

  getData(): Observable<any> {
    return Observable.of(this.kanken9);
  }

}
