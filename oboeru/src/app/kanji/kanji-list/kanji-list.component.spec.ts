import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KanjiListComponent } from './kanji-list.component';

describe('KanjiListComponent', () => {
  let component: KanjiListComponent;
  let fixture: ComponentFixture<KanjiListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KanjiListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KanjiListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
