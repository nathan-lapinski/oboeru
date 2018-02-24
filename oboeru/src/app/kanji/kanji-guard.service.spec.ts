import { TestBed, inject } from '@angular/core/testing';

import { KanjiGuardService } from './kanji-guard.service';

describe('KanjiGuardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [KanjiGuardService]
    });
  });

  it('should be created', inject([KanjiGuardService], (service: KanjiGuardService) => {
    expect(service).toBeTruthy();
  }));
});
