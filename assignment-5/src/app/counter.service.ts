import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class CounterService {
  count: { value: number } = { value: 0 };

  increment() {
    this.count.value++;
  }

}