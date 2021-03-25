import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

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
        //Array of validators 3rd argument is async validator array  or one validator if you need this in 
        //forbiddenEmail method just bind it 
        'email': new FormControl(null, [Validators.required, Validators.email], this.forbiddenEmails)
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

  forbiddenEmails(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        if (control.value === 'test@test.com') {
          resolve({ 'emailIsForbidden': true });
        } else {
          resolve(null);
        }
      }, 1500);
    });

    return promise;

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
