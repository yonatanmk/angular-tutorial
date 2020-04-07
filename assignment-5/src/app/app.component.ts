import { Component, OnInit } from '@angular/core';
import { CounterService } from './counter.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  count;
  constructor(private counterService: CounterService) {}
  ngOnInit() {
    this.count = this.counterService.count;
  }
}
