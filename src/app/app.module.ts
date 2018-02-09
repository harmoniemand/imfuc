import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { HighlightJsModule, HighlightJsService } from 'angular2-highlight-js';
import { KeydownService } from './keydown.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuestionComponent } from './components/question/question.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { StartComponent } from './components/start/start.component';
import { QuestionRepository } from './repositories/question.repository';
import { AnswerComponent } from './components/answer/answer.component';
import { BlankComponent } from './components/blank/blank.component';

@NgModule({
  declarations: [
    AppComponent,
    QuestionComponent,
    WelcomeComponent,
    StartComponent,
    AnswerComponent,
    BlankComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    HighlightJsModule
  ],
  providers: [
    QuestionRepository,
    HighlightJsService,
    KeydownService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
