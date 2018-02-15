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
    },
    {
      character: '医',
      meanings: ['Doctor', 'Medicine'],
      on: ['イ'],
      kun: [],
      strokes: 7,
      examples: [{
        text: '医院',
        answer: 'いいん',
        target: '医院',
        meaning: 'Doctors office, clinic'
      }, {
        text: '医学',
        answer: 'いがく',
        target: '医学',
        meaning: 'Medical science, medicine'
      }, {
        text: '歯科医',
        answer: 'しかい',
        target: '歯科医',
        meaning: 'Dentist'
      }, {
        text: '医者の話を聞く',
        answer: 'いしゃ',
        target: '医者',
        meaning: 'Doctor'
      }]
    },
    {
      character: '委',
      meanings: ['Committee, entrust to, leave to, devote, discard'],
      on: ['イ'],
      kun: ['ゆだねる'],
      strokes: 8,
      examples: [{
        text: '委員会',
        answer: 'いいんかい',
        target: '委員会',
        meaning: 'Committee'
      }, {
        text: '学級委員',
        answer: 'がっきゅういいん',
        target: '学級委員',
        meaning: 'Class representative'
      }, {
        text: '運命に身を委ねる',
        answer: 'ゆだねる',
        target: '委ねる',
        meaning: 'Leave yourself to fate'
      }]
    },
    {
      character: '意',
      meanings: ['Idea, mind, heart, taste, thought, desire, care, liking'],
      on: ['イ'],
      kun: [],
      strokes: 13,
      examples: [{
        text: '意見',
        answer: 'いけん',
        target: '意見',
        meaning: 'opinion'
      }, {
        text: '意味',
        answer: 'いみ',
        target: '意味',
        meaning: 'meaning'
      }, {
        text: '決意',
        answer: 'けつい',
        target: '決意',
        meaning: 'decision'
      }, {
        text: '注意',
        answer: 'ちゅうい',
        target: '注意',
        meaning: 'caution'
      }, {
        text: '出かける用意をする',
        answer: 'ようい',
        target: '用意',
        meaning: 'Preparations to go out'
      }]
    },
    {
      character: '育',
      meanings: ['Bring up, grow up, raise, rear'],
      on: ['イク'],
      kun: ['そだつ','そだてる','はぐくむ'],
      strokes: 8,
      examples: [{
        text: '教育',
        answer: 'きょういく',
        target: '教育',
        meaning: 'education'
      }, {
        text: '体育館',
        answer: 'たいいくかん',
        target: '体育館',
        meaning: 'gymnasium'
      }, {
        text: '親鳥がひなを育む',
        answer: 'はぐくむ',
        target: '育む',
        meaning: 'Parent bird raises its young'
      }, {
        text: 'ベランダで野菜を育てる',
        answer: 'そだてる',
        target: '育てる',
        meaning: 'grow plants on the veranda'
      }]
    },
    {
      character: '員',
      meanings: ['Employee, member, number, the one in charge'],
      on: ['イク'],
      kun: ['そだつ','そだてる','はぐくむ'],
      strokes: 8,
      examples: [{
        text: '教育',
        answer: 'きょういく',
        target: '教育',
        meaning: 'education'
      }, {
        text: '体育館',
        answer: 'たいいくかん',
        target: '体育館',
        meaning: 'gymnasium'
      }, {
        text: '親鳥がひなを育む',
        answer: 'はぐくむ',
        target: '育む',
        meaning: 'Parent bird raises its young'
      }, {
        text: 'ベランダで野菜を育てる',
        answer: 'そだてる',
        target: '育てる',
        meaning: 'grow plants on the veranda'
      }]
    }
  ];
  constructor() { }

  getData(): Observable<any> {
    return Observable.of(this.kanken8);
  }

}
