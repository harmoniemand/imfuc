import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class KeydownService {

  keydown: Subject<any> = new Subject<any>();


  constructor() {
    document.addEventListener('keypress', (event) => {
      this.keydown.next(event);
    });
  }

}
