import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { QuestionRepository } from '../../repositories/question.repository';
import { KeydownService } from '../../keydown.service';

@Component({
  selector: 'app-answer',
  templateUrl: './answer.component.html',
  styleUrls: ['./answer.component.scss']
})
export class AnswerComponent implements OnInit {

  answer: string = '';
  questionId: number;

  next() {
    const nextId = this.questionId + 1;
    this.router.navigate(['question', { id: nextId }]);
  }

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private questionRepository: QuestionRepository,
    private keydownService: KeydownService
  ) { }

  ngOnInit() {

    this.route.params.subscribe(params => {
      this.questionId = parseInt(params['id']);
      this.questionRepository.Get(params['id']).subscribe(result => {
        this.answer = result.answers[0];
      });
    });

    this.keydownService.keydown.subscribe(e => {
      console.log('keypress event\n\n' + 'key: ' + e.keyCode);

      switch (e.keyCode) {
        case 13: return this.next();
      }
    });

  }
}
