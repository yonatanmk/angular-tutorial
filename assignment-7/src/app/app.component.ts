import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  statuses: string[] = ['Stable', 'Critical', 'Finished']
  signupForm: FormGroup;

  ngOnInit() {
    this.signupForm = new FormGroup({
      // 'userData': new FormGroup({
      //   'username': new FormControl(null, [Validators.required, this.forbiddenNames.bind(this)]),
      //   'email': new FormControl(null, [Validators.required, Validators.email], this.forbiddenEmails),
      // }),
      'name': new FormControl(null, [Validators.required, this.noTestName]),
      'email': new FormControl(null, [Validators.required, Validators.email, this.noTestEmail]),
      'status': new FormControl(this.statuses[0]),
    })
  }

  onSubmit() {
    console.log(this.signupForm)
  }

  noTestName(control: FormControl): {[s: string]: boolean} {
    if (control.value === 'Test') {
      return {'nameIsForbidden': true};
    }
    return null;
  }

  noTestEmail(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        if (control.value === 'test@test.com') {
          resolve({'emailIsForbidden': true})
        } else {
          resolve(null)
        }
      }, 1500);
    });
    return promise;
  }

}
