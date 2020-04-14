import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('f') signUpForm: NgForm;
  defaultQuestion = 'pet';
  // defaultQuestion = 'teacher';

  answer = '';
  genders = ['male', 'female'];
  user = {
    username: '',
    email: '',
    secretQuestion: '',
    answer: '',
    gender: '',
  }
  submitted = false;


  suggestUserName() {
    const suggestedName = 'Superuser';
    // const newData = {
    //   ...this.signUpForm.value,
    //   userData: {
    //     ...this.signUpForm.value.userData,
    //     username: suggestedName,
    //   },
    // }
    // this.signUpForm.setValue(newData)

    // this.signUpForm.setValue({
    //   userData: {
    //     username: suggestedName,
    //     email: '',
    //   },
    //   secret: 'pet',
    //   questionAnswer: '',
    //   gender: this.genders[0]
    // })

    this.signUpForm.form.patchValue({
      userData: {
        username: suggestedName,
      }
    })
  }

  // onSubmit(form: NgForm) {
  //   console.log('onSubmit')
  //   console.log(form)
  // }

  onSubmit() {
    console.log(this.signUpForm)
    this.user = {
      username: this.signUpForm.value.userData.username,
      email: this.signUpForm.value.userData.email,
      secretQuestion: this.signUpForm.value.secret,
      answer: this.signUpForm.value.questionAnswer,
      gender: this.signUpForm.value.gender,
    }
    this.submitted = true;
    this.signUpForm.reset();
    // this.signUpForm.reset(this.signUpForm.value);
  }
}
