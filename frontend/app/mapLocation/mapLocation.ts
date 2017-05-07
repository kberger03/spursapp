import { Component } from '@angular/core';
import { AgmCoreModule }        from 'angular2-google-maps/core';

@Component({
  moduleId: module.id,
  selector: 'mapLocation-cmp',
  templateUrl: 'mapLocation.html'
})

export class mapLocationComponent { 

  title: string = 'My first angular2-google-maps project';
  lat: number = 29.4271;
  lng: number = -98.4374;

}