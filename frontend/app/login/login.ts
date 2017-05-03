import { Component } from '@angular/core';
import { LoginForm } from './login.form';
import { UsersService } from '../services/users.service';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'login-cmp',
  templateUrl: 'login.html'
})

export class LoginComponent { 

  constructor(
    private usersService: UsersService, 
    private authService: AuthService, 
    private router: Router ){
    this.usersService.getUsers().subscribe(users => {
      console.log(users);
    });
  }

  user = new LoginForm('', '');

  onSubmit(value: any){
    this.authService.authenticate(value).subscribe(data => {
      if(data = 'Success'){
        this.router.navigateByUrl('menu');
      }
    });
  }

}