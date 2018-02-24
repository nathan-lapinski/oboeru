import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KanjiCanvasComponent } from './kanji-canvas.component';

describe('KanjiCanvasComponent', () => {
  let component: KanjiCanvasComponent;
  let fixture: ComponentFixture<KanjiCanvasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KanjiCanvasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KanjiCanvasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
