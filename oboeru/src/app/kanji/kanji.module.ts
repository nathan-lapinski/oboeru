import { NgModule } from '@angular/core';
import { DndModule } from 'ng2-dnd';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { KanjiListComponent } from './kanji-list/kanji-list.component';
import { KanjiDetailComponent } from './kanji-detail/kanji-detail.component';
import { KanjiGuardService } from './kanji-guard.service';
import { KanjiCanvasComponent } from './kanji-canvas/kanji-canvas.component';

@NgModule({
  imports: [
    CommonModule,
    DndModule.forRoot(),
    RouterModule.forChild([
      { path: 'kanji', component: KanjiListComponent },
      { path: 'kanji/:data',
        canActivate: [ KanjiGuardService ],
        component: KanjiDetailComponent },
    ])
  ],
  declarations: [
    KanjiListComponent,
    KanjiDetailComponent,
    KanjiCanvasComponent
  ],
  providers: [
    KanjiGuardService
  ]
})
export class KanjiModule { }
