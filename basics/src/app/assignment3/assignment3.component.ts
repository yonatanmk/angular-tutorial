import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignment3',
  templateUrl: './assignment3.component.html',
  styles: [`
    .blue-background {
      background-color: blue;
    }
`],
})
export class Assignment3Component implements OnInit {
  clicks = [];
  displayDetails = false;
  isTrue = true;
  constructor() { }

  ngOnInit(): void {
  }

  onClick() {
    this.clicks.push(new Date())
    this.displayDetails = !this.displayDetails;
  }

  hasBlueBackground(click) {
    console.log(click)
    return true
  }

  returnTrue() {
    return true;
  }
}
