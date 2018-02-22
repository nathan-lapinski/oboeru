import { Component, OnInit } from '@angular/core';
import { MockDataService } from '../mock-data.service';

@Component({
  selector: 'app-kanji-list',
  templateUrl: './kanji-list.component.html',
  styleUrls: ['./kanji-list.component.css']
})
export class KanjiListComponent implements OnInit {

  public kanjiList = [];
  public receivedData:any[] = [];
  constructor(private mockDataService: MockDataService) { }

  ngOnInit() {
    this.mockDataService.getData().subscribe(data => this.kanjiList = data);
  }

  public kanjiDetail(kanji: any): void {
    console.log('clicked on: ', kanji);
  }

  public transferDataSuccess($event: any) {
    this.receivedData.push($event);
  }

}
