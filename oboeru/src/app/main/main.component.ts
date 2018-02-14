import { Component, OnInit } from '@angular/core';

import { MockDataService } from '../mock-data.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  public data = [];

  constructor(private mockDataService: MockDataService) { }

  ngOnInit() {
    this.mockDataService.getData().subscribe(data => this.data = data);
  }

}
