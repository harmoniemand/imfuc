import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuestionComponent } from './components/question/question.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { StartComponent } from './components/start/start.component';
import { AnswerComponent } from './components/answer/answer.component';
import { BlankComponent } from './components/blank/blank.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/welcome',
    pathMatch: 'full'
  },
  {
    path: 'blank',
    component: BlankComponent
  },
  {
    path: 'welcome',
    component: WelcomeComponent
  },
  {
    path: 'start',
    component: StartComponent
  },
  {
    path: 'question',
    component: QuestionComponent
  },
  {
    path: 'answer',
    component: AnswerComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
