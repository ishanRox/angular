import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  genders = ['male', 'female'];
  forbiddenUsernames = ['ishan', 'rox'];
  //hold form
  signUpForm: FormGroup;
  //do our stuff before template is rendered
  ngOnInit() {
    //make a form programmatically
    this.signUpForm = new FormGroup({
      //make a formgroup
      'userData': new FormGroup({
        //added custome validatior
        'username': new FormControl(null, [Validators.required, this.forbiddenNames.bind(this)]),
        //Array of validators
        'email': new FormControl(null, [Validators.required, Validators.email])
      }),
      'gender': new FormControl('male'),
      'hobbies': new FormArray([])
    });
  }
  //validator is just a function
  forbiddenNames(control: FormControl): { [s: string]: boolean } {
    //there is a strange thing here you need to pass  { 'nameIsForbidden': true }
    //but you dont do  { 'nameIsForbidden': false } if validation is succesfull 
    //just return null or dont return anything
    if (this.forbiddenUsernames.indexOf(control.value) !== -1) {
      return { 'nameIsForbidden': true }
    }

  }


  onAddHobby() {
    const control = new FormControl(null, Validators.required);
    //to cast and tell this is a FormsArray that can get FormControls (u know this javaboy)
    (<FormArray>this.signUpForm.get('hobbies')).push(control);
  }
  onSubmit() {
    console.log(this.signUpForm);

  }
}
