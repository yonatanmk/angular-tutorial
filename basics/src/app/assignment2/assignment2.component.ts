import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignment2',
  templateUrl: './assignment2.component.html',
  styleUrls: ['./assignment2.component.css']
})
export class Assignment2Component implements OnInit {

  constructor() { }
  username: string = ''

  ngOnInit(): void {
  }

  onUpdateUsername(event) {
    this.username = (<HTMLInputElement>event.target).value
  }

  clearUsername() {
    this.username = ''
  }
}
