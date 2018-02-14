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
        target: '会話',
        meaning: 'Conversation'
      }, {
        text: '昔話',
        answer: 'ばなし',
        target: '話',
        meaning: 'Folk tale'
      }, {
        text: '楽しかったことを話す',
        answer: 'はなす',
        target: '話す',
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
        answer: 'りゆう',
        target: '理由',
        meaning: 'Reason'
      }, {
        text: '料理',
        answer: 'りょうり',
        target: '料理',
        meaning: 'Cooking'
      }, {
        text: 'たんすの中を整理する',
        answer: 'せいり',
        target: '整理',
        meaning: 'Organize the inside of a dresser'
      }]
    },
  ];

  private kanken8 = [
    {
      character: '悪',
      meanings: ['Bad', 'Vice', 'Rascal', 'False', 'Evil', 'Wrong'],
      on: ['アク', 'オ'],
      kun: ['わるい'],
      strokes: 11,
      examples: [{
        text: '悪意',
        answer: 'あくい',
        target: '悪意',
        meaning: 'Malice, ill-will, bad intentions'
      }, {
        text: '悪人',
        answer: 'あくにん',
        target: '悪人',
        meaning: 'Bad person, a villian'
      }, {
        text: '最悪',
        answer: 'さいあく',
        target: '最悪',
        meaning: 'The worst'
      }, {
        text: '悪寒',
        answer: 'おかん',
        target: '悪寒',
        meaning: 'Chills, shakes'
      }, {
        text: '体の調子が悪い',
        answer: 'わるい',
        target: '悪い',
        meaning: 'Health condition is bad'
      }]
    },
    {
      character: '安',
      meanings: ['Relax', 'Cheap', 'Low', 'Quiet', 'Rested', 'Contented', 'Peaceful'],
      on: ['アン'],
      kun: ['やすい'],
      strokes: 6,
      examples: [{
        text: '安心',
        answer: 'あんしん',
        target: '安心',
        meaning: 'Relief'
      }, {
        text: '安全',
        answer: 'あんぜん',
        target: '安全',
        meaning: 'Safety'
      }, {
        text: '安定',
        answer: 'あんてい',
        target: '安定',
        meaning: 'Stability, steadiness, equilibrium'
      }, {
        text: '大安売りをしている',
        answer: 'おおやすうり',
        target: '大安売り',
        meaning: 'There is a big sale'
      }]
    },
    {
      character: '暗',
      meanings: ['Darkness', 'Disappear', 'Shade', 'Informal', 'Grow dark', 'To be blinded'],
      on: ['アン'],
      kun: ['くらい'],
      strokes: 13,
      examples: [{
        text: '暗記',
        answer: 'あんき',
        target: '暗記',
        meaning: 'Memorization, Rote learning'
      }, {
        text: '暗算',
        answer: 'あんざん',
        target: '暗算',
        meaning: 'Mental math'
      }, {
        text: '真つ暗',
        answer: 'くら',
        target: '暗',
        meaning: 'Very dark'
      }, {
        text: '明暗',
        answer: 'めいあん',
        target: '明暗',
        meaning: 'Light and darkness'
      }, {
        text: '暗がりの中を進む',
        answer: 'くら',
        target: '暗',
        meaning: 'Proceed through the darkness'
      }]
    }
  ];
  constructor() { }

  getData(): Observable<any> {
    return Observable.of(this.kanken8);
  }

}
