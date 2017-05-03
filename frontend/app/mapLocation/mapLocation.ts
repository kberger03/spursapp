import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AgmCoreModule } from 'angular2-google-maps/core';

@Component({
  moduleId: module.id,
  selector: 'mapLocation-cmp',
  templateUrl: 'mapLocation.html'
})

export class mapLocationComponent { 

  title: string = 'My first angular2-google-maps project';
  lat: number = 51.678418;
  lng: number = 7.809007;

  constructor(private router: Router ){
 
  }

}