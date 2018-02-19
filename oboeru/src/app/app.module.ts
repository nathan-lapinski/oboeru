import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AppNavbarComponent } from './app-navbar/app-navbar.component';
import { MockDataService } from './mock-data.service';
import { MainComponent } from './main/main.component';
import { KanjiListComponent } from './kanji-list/kanji-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { KanjiDetailComponent } from './kanji-detail/kanji-detail.component';
import { KanjiGuardService } from './kanji-guard.service';

@NgModule({
  declarations: [
    AppComponent,
    AppNavbarComponent,
    MainComponent,
    KanjiListComponent,
    PageNotFoundComponent,
    KanjiDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      { path: 'home', component: MainComponent},
      { path: 'kanji', component: KanjiListComponent },
      { path: 'kanji/:data',
        canActivate: [ KanjiGuardService ],
        component: KanjiDetailComponent },
      { path: '', redirectTo: 'home', pathMatch: 'full'},
      { path: '**', component: PageNotFoundComponent}
    ])
  ],
  providers: [MockDataService, KanjiGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
