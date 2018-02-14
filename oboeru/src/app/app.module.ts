import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppNavbarComponent } from './app-navbar/app-navbar.component';
import { MockDataService } from './mock-data.service';
import { MainComponent } from './main/main.component';

@NgModule({
  declarations: [
    AppComponent,
    AppNavbarComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [MockDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
