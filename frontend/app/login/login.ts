import { Component } from '@angular/core';
import { LoginForm } from './login.form';
import { UsersService } from '../services/users.service';

@Component({
  moduleId: module.id,
  selector: 'login-cmp',
  templateUrl: 'login.html'
})

export class LoginComponent { 

  constructor(private usersService: UsersService){
    this.usersService.getUsers().subscribe(users => {
      console.log(users);
    });
  }

  user = new LoginForm('', '');
  submitted = false;

  onSubmit(value: any){
    console.log(value);
    this.submitted = true;
  }

}