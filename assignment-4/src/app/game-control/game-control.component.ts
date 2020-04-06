import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  intervalId = null
  number = 0

  @Output() numberGenerated = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  onStart() {
    console.log('Start')
    if (!this.intervalId) {
      this.intervalId = setInterval(() => {
        this.number += 1
        this.numberGenerated.emit(this.number)
      }, 1000)
    }
  }

  onStop() {
    console.log('Stop')
    clearInterval(this.intervalId)
    this.intervalId = null;
    // this.number = 0
  }

}
