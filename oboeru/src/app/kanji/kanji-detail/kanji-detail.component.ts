import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { MockDataService } from '../../mock-data.service';

@Component({
  selector: 'app-kanji-detail',
  templateUrl: './kanji-detail.component.html',
  styleUrls: ['./kanji-detail.component.css']
})
export class KanjiDetailComponent implements OnInit {
  public kanji: any;
  constructor(private route: ActivatedRoute,
              private router: Router,
              private mockDataService: MockDataService) { }

  ngOnInit() {
    const data = this.route.snapshot.paramMap.get('data');
    if (data) {
      console.log('In the detail component with: ', data);
      this.mockDataService.getKanji(data).subscribe( c => this.kanji = c);
    } else {
      console.log('something happened....');
    }
  }

  onBack(): void {
    this.router.navigate(['/kanji']);
  }

}
