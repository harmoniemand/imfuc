import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  start() {
    this.router.navigate(['question', { id: 1 }]);
  }

  constructor(private router: Router) { }

  ngOnInit() {
  }

}
