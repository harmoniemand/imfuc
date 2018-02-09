import { Component, OnInit } from '@angular/core';
import { QuestionModel } from '../../models/question.model';
import { QuestionRepository } from '../../repositories/question.repository';
import { ActivatedRoute, Router } from '@angular/router';
import { OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';
import { KeydownService } from '../../keydown.service';

declare var Prism;

@Component({
    selector: 'app-question',
    templateUrl: './question.component.html',
    styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit, OnDestroy {

    data: QuestionModel;
    questionId: number;

    timer: number = 0;

    stop: boolean = false;

    pause() {
        this.stop = !this.stop;
    }

    next() {
        this.router.navigate(['/answer', { id: this.questionId }]);
    }

    handleKeyPress(e) {

    }

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private questionRepository: QuestionRepository,
        private keydownService: KeydownService) { }

    ngOnInit() {

        this.route.params.subscribe(params => {
            this.questionId = params['id'];
            this.questionRepository.Get(params['id']).subscribe(result => {
                this.data = result;
                window.setTimeout(() => {
                    Prism.highlightAll();
                }, 100);
            });
        });

        window.setInterval(() => {
            if (this.stop) {
                return;
            }

            if (this.timer >= 30) {
                return;
            }

            this.timer++;
        }, 1000);

        this.keydownService.keydown.subscribe(e => {
            console.log('keypress event\n\n' + 'key: ' + e.keyCode);

            switch (e.keyCode) {
                case 32: return this.pause();
                case 13: return this.next();
            }
        });

    }

    ngOnDestroy() {
        document.removeEventListener("keypress", this.handleKeyPress, true);
    }

}
