import { NgModule }             from '@angular/core';
import { BrowserModule }        from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule }           from '@angular/http';
import { FormsModule }          from '@angular/forms';

import { AppComponent }   from './app.component';
import { HomeComponent }  from './home/home';
import { LoginComponent } from './login/login';
import { SignupComponent } from './signup/signup';
import { MenuComponent } from './menu/menu';
import { addGameModalComponent } from './addGameModal/addGameModal';
import { editGameModalComponent } from './editGameModal/editGameModal';
import { deleteGameModalComponent } from './deleteGameModal/deleteGameModal';
import { navbarComponent } from './navbar/navbar';
import { navbar2Component } from './navbar2/navbar2';
import { navbar3Component } from './navbar3/navbar3';


const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'menu', component: MenuComponent }
];

@NgModule({
  imports: [ 
    BrowserModule,
    RouterModule.forRoot(appRoutes), 
    HttpModule, 
    FormsModule
  ],
  declarations: [ 
    AppComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    MenuComponent,
    addGameModalComponent,
    editGameModalComponent,
    deleteGameModalComponent,
    navbarComponent, 
    navbar2Component,
    navbar3Component
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {}