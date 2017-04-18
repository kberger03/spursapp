import { Component } from '@angular/core';

import { addGameModalForm } from './addGameModal.form';

@Component({
  moduleId: module.id,
  selector: 'addGameModal-cmp',
  templateUrl: 'addGameModal.html'
})
export class addGameModalComponent { 
  
  game = new addGameModalForm('', '', '', 0, 0);
  submitted = false;

  onSubmit(value: any){
    console.log(value);
    this.submitted = true;
  }

}