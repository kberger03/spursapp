import { Component } from '@angular/core';

import { SignupForm } from './signup.form';

@Component({
  moduleId: module.id,
  selector: 'signup-cmp',
  templateUrl: 'signup.html'
})

export class SignupComponent { 

  user = new SignupForm('', '', '', '');
  submitted = false;

  onSubmit(value: any){
    console.log(value);
    this.submitted = true;
  }

}