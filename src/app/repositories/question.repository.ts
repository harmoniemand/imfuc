import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { QuestionModel } from '../models/question.model';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs/Subject';


@Injectable()
export class QuestionRepository {


    Get(id: number): Observable<QuestionModel> {

        const sub = new Subject<QuestionModel>();

        this.http.get<QuestionModel[]>('assets/questions.json').subscribe(result => {
            sub.next(result.find(m=>m.id == id));
        });

        return sub;
    }

    constructor(private http: HttpClient) { }

}
