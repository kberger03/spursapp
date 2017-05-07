// mapLocaiton.ts
//map directions for home games using google maps
import { Component } from '@angular/core';
import { AgmCoreModule } from 'angular2-google-maps/core';

@Component({
  moduleId: module.id,
  selector: 'mapLocation-cmp',
  templateUrl: 'mapLocation.html'
})

export class mapLocationComponent { 

  title: string = 'Spurs ATT Center';
  //locaiton of the ATT Center
  lat: number = 29.4271;
  lng: number = -98.4374;

}