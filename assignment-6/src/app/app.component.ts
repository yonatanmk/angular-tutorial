import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('f', { static: false }) signUpForm: NgForm;
  subscriptions: string[] = ['Basic', 'Advanced', 'Pro'];

  onSubmit() {
    console.log(this.signUpForm.value)
    this.signUpForm.reset();
  }
}
