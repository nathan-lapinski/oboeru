import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { MockDataService } from '../../mock-data.service';

import { Kanji } from '../kanji';

@Component({
  selector: 'app-kanji-list',
  templateUrl: './kanji-list.component.html',
  styleUrls: ['./kanji-list.component.css']
})
export class KanjiListComponent implements OnInit {

  public kanjiList: Kanji[] = [];
  public receivedData:any[] = [];
  constructor(private router: Router,
              private mockDataService: MockDataService) { }

  ngOnInit() {
    this.mockDataService.getData().subscribe((data: Kanji[]) => this.kanjiList = data);
  }

  public kanjiDetail(kanji: any): void {
    console.log('clicked on: ', kanji);
  }

  public transferDataSuccess($event: any) {
    this.receivedData.push($event);
  }

  public createList(): void {
    // TODO: Send the received data to the main component, so it can use the list for questions.
    // TODO: In the future, this needs to get saved to the backend somehow, so that the data service can retrieve it.

    // this is dumb, just a temp until a real backend is in place
    this.mockDataService.addListData(this.receivedData[0].dragData);
    this.router.navigate(['/home'])
  }

}
