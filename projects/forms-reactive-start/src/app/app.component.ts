import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  genders = ['male', 'female'];
  //hold form
  signUpForm: FormGroup;
  //do our stuff before template is rendered
  ngOnInit() {
    //make a form programmatically
    this.signUpForm = new FormGroup({
      //one validator
      'username': new FormControl(null,Validators.required),
      //Array of validators
      'email': new FormControl(null,[Validators.required,Validators.email]),
      'gender': new FormControl('male')
    });
  }

  onSubmit() {
    console.log(this.signUpForm);

  }
}
