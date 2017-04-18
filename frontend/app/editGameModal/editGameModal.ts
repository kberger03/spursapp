import { Component } from '@angular/core';

import { editGameModalForm } from './editGameModal.form';

@Component({
  moduleId: module.id,
  selector: 'editGameModal-cmp',
  templateUrl: 'editGameModal.html'
})
export class editGameModalComponent { 

  game = new editGameModalForm('', '', '', 0, 0);
  submitted = false;

  onSubmit(value: any){
    console.log(value);
    this.submitted = true;
  }

}