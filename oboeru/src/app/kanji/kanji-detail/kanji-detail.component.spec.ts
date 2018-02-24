import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KanjiDetailComponent } from './kanji-detail.component';

describe('KanjiDetailComponent', () => {
  let component: KanjiDetailComponent;
  let fixture: ComponentFixture<KanjiDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KanjiDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KanjiDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
