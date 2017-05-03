import { NgModule }             from '@angular/core';
import { BrowserModule }        from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule }           from '@angular/http';
import { FormsModule }          from '@angular/forms';
import { AgmCoreModule } from 'angular2-google-maps/core';

import { AppComponent }   from './app.component';
import { HomeComponent }  from './home/home';
import { LoginComponent } from './login/login';
import { SignupComponent } from './signup/signup';
import { MenuComponent } from './menu/menu';
import { mapLocationComponent } from './mapLocation/mapLocation';
import { addGameModalComponent } from './addGameModal/addGameModal';
import { editGameModalComponent } from './editGameModal/editGameModal';
import { deleteGameModalComponent } from './deleteGameModal/deleteGameModal';
import { navbarComponent } from './navbar/navbar';
import { navbar2Component } from './navbar2/navbar2';
import { navbar3Component } from './navbar3/navbar3';
import { UsersService } from './services/users.service';
import { GamesService } from './services/games.service';
import { AuthService } from './services/auth.service';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'menu', component: MenuComponent }, 
  { path: 'map', component: mapLocationComponent}
];

@NgModule({
  imports: [ 
    BrowserModule,
    RouterModule.forRoot(appRoutes), 
    HttpModule, 
    FormsModule, 
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCA-S4XiJZQ8xXUibPzrsn1efJIe6sBoyc'
    })
  ],
  declarations: [ 
    AppComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    MenuComponent,
    mapLocationComponent,
    addGameModalComponent,
    editGameModalComponent,
    deleteGameModalComponent,
    navbarComponent, 
    navbar2Component,
    navbar3Component
  ],
  providers: [
    UsersService,
    GamesService, 
    AuthService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {}