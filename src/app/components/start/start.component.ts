import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss']
})
export class StartComponent implements OnInit {

  team1: string = '';
  team2: string = '';

  onSubmit(): void {
    window.localStorage.setItem('teamname1', this.team1);
    window.localStorage.setItem('teamname2', this.team2);

    this.router.navigate(['/question', { id: 1 }]);
  }

  constructor(private router: Router) { }

  ngOnInit() {
  }

}
