import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AppNavbarComponent } from './app-navbar/app-navbar.component';
import { MockDataService } from './mock-data.service';
import { MainComponent } from './main/main.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { KanjiModule } from './kanji/kanji.module';

@NgModule({
  declarations: [
    AppComponent,
    AppNavbarComponent,
    MainComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      { path: 'home', component: MainComponent},
      { path: '', redirectTo: 'home', pathMatch: 'full'},
      { path: '**', component: PageNotFoundComponent}
    ]),
    KanjiModule
  ],
  providers: [MockDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
