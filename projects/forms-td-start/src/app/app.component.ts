import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @ViewChild('f', { static: false }) signUpForm: NgForm;
  defaultQuection = 'pet';
  answer = 'ishan';
  genders = ['male', 'female'];
  user = {
    username: '',
    email: '',
    secretQuestion: '',
    answer: '',
    gender: ''
  };
  submitted = false;
  suggestUserName() {
    const suggestedName = 'Superuser';
    //  not a good way
    //   this.signUpForm.setValue({
    //     userData: {
    //       username: suggestedName,
    //       email: 'roxishan'
    //     },
    //     secret: 'ishan',
    //     questionAnswer: '',
    //     gender: 'male'
    //   });

    //earlier method update all values but this only patch selected values
    this.signUpForm.form.patchValue({
      userData: {
        username: suggestedName
      }
    });

  }

  onSubmit() {
    console.log(this.signUpForm);
    this.submitted = true;
    this.user.username = this.signUpForm.value.userData.username;
    this.user.email = this.signUpForm.value.userData.email;
    this.user.secretQuestion = this.signUpForm.value.secret;
    this.user.answer = this.signUpForm.value.questionAnswer;
    this.user.gender = this.signUpForm.value.gender;

    //reset form
    this.signUpForm.reset();
  }
}
